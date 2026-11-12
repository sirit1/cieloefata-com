import { createServerFn } from "@tanstack/react-start";
import { authMiddleware } from "@/lib/auth/middleware";
import {
  esEstante,
  fechaValida,
  limpiar,
  notaTieneContenido,
  type Estante,
  type NotaEstudio,
  type NuevaNota,
} from "@/lib/cuaderno-estudio";
import {
  aplicarHigieneGlobal,
  aplicarHigieneUsuario,
  confirmarExportacionEn,
  ultimoBorrado,
  type ResultadoHigiene,
  type SqlEjecutable,
} from "@/lib/cuaderno-higiene.server";

const AUDIO_MAX = 1_500_000;
const MIMES = ["audio/webm", "audio/mpeg", "audio/mp4", "audio/ogg", "audio/wav", "audio/mp3"];

export type EstadoCuaderno = {
  fase: ResultadoHigiene["fase"];
  borradas: number;
  borraEn: string | null;
  cicloInicio: string | null;
  borradoEn: string | null;
};

export type ListaCuaderno = {
  notas: NotaEstudio[];
  estado: EstadoCuaderno;
};

type FilaNota = {
  id: string;
  shelf: string;
  texto: string;
  tiene_audio: boolean | string | null;
  fuente: string;
  texto_seleccionado: string;
  referencia: string;
  dia: number | null;
  seccion: string;
  titulo_dia: string;
  pasaje: string;
  fecha_lectura: string | Date | null;
  mana_ref: string;
  created_at: string | Date;
  updated_at: string | Date;
};

function aIso(valor: string | Date | null | undefined): string {
  if (valor == null) return "";
  if (valor instanceof Date) return valor.toISOString();
  return new Date(valor).toISOString();
}

function aDia(valor: string | Date | null): string | null {
  if (valor == null || valor === "") return null;
  if (valor instanceof Date) {
    const y = valor.getUTCFullYear();
    const m = String(valor.getUTCMonth() + 1).padStart(2, "0");
    const d = String(valor.getUTCDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }
  const texto = String(valor);
  return texto.length >= 10 ? texto.slice(0, 10) : null;
}

function aNota(row: FilaNota): NotaEstudio {
  const shelf: Estante = esEstante(row.shelf) ? row.shelf : "lectura";
  return {
    id: row.id,
    shelf,
    texto: row.texto ?? "",
    tieneAudio: row.tiene_audio === true || row.tiene_audio === "t" || row.tiene_audio === "true",
    fuente: row.fuente ?? "",
    textoSeleccionado: row.texto_seleccionado ?? "",
    referencia: row.referencia ?? "",
    dia: row.dia == null ? null : Number(row.dia),
    seccion: row.seccion ?? "",
    tituloDia: row.titulo_dia ?? "",
    pasaje: row.pasaje ?? "",
    fechaLectura: aDia(row.fecha_lectura),
    manaRef: row.mana_ref ?? "",
    createdAt: aIso(row.created_at),
    updatedAt: aIso(row.updated_at),
  };
}

function validarNueva(data: unknown): NuevaNota {
  const row = (data ?? {}) as Partial<NuevaNota>;
  if (!row.shelf || !esEstante(row.shelf)) throw new Error("Estante desconocido.");
  const nota: NuevaNota = {
    shelf: row.shelf,
    texto: limpiar(row.texto ?? "", 8000),
    fuente: limpiar(row.fuente ?? "", 500),
    textoSeleccionado: limpiar(row.textoSeleccionado ?? "", 8000),
    referencia: limpiar(row.referencia ?? "", 800),
    dia: row.dia == null ? null : Number(row.dia),
    seccion: limpiar(row.seccion ?? "", 300),
    tituloDia: limpiar(row.tituloDia ?? "", 300),
    pasaje: limpiar(row.pasaje ?? "", 240),
    fechaLectura: row.fechaLectura ? fechaValida(String(row.fechaLectura)) : null,
    manaRef: limpiar(row.manaRef ?? "", 240),
  };
  if (nota.dia != null && (!Number.isInteger(nota.dia) || nota.dia < 1 || nota.dia > 99)) {
    throw new Error("El día de la escuela no es válido.");
  }
  if (row.fechaLectura && !nota.fechaLectura) throw new Error("La fecha de la lectura no es válida.");
  const audio = typeof row.audioBase64 === "string" ? row.audioBase64.trim() : "";
  if (audio) {
    nota.audioBase64 = audio;
    nota.audioMime = mimeAudio(row.audioMime ?? "");
  }
  if (!notaTieneContenido({ texto: nota.texto, textoSeleccionado: nota.textoSeleccionado, audio: Boolean(audio) })) {
    throw new Error("La nota está vacía.");
  }
  return nota;
}

function mimeAudio(valor: string): string {
  const base = valor.split(";")[0]?.trim().toLowerCase() ?? "";
  if (!MIMES.includes(base)) throw new Error("Ese formato de audio no se puede guardar.");
  return base;
}

function audioHex(b64: string): string {
  const limpio = b64.replace(/\s/g, "");
  if (!/^[A-Za-z0-9+/]+=*$/.test(limpio)) throw new Error("El audio no se pudo leer.");
  const bin = atob(limpio);
  if (bin.length < 32 || bin.length > AUDIO_MAX) {
    throw new Error("El audio es demasiado grande o está vacío. Graba un tramo más corto.");
  }
  let hex = "";
  for (let i = 0; i < bin.length; i += 1) hex += bin.charCodeAt(i).toString(16).padStart(2, "0");
  return hex;
}

async function reloj(sql: SqlEjecutable): Promise<Date> {
  const rows = await sql<{ ahora: Date | string }>`select now() as ahora`;
  const valor = rows[0]?.ahora;
  return valor instanceof Date ? valor : new Date(String(valor));
}

async function preparar(sql: SqlEjecutable, userId: string, ahora: Date): Promise<ResultadoHigiene> {
  await aplicarHigieneGlobal(sql, ahora);
  return aplicarHigieneUsuario(sql, userId, ahora);
}

async function listar(sql: SqlEjecutable, userId: string): Promise<NotaEstudio[]> {
  const rows = await sql<FilaNota>`
    select
      id, shelf, texto, (audio is not null) as tiene_audio,
      fuente, texto_seleccionado, referencia, dia, seccion, titulo_dia,
      pasaje, fecha_lectura, mana_ref, created_at, updated_at
    from cuaderno_notas
    where user_id = ${userId}
    order by created_at desc
  `;
  return rows.map(aNota);
}

async function estadoDe(sql: SqlEjecutable, userId: string, resultado: ResultadoHigiene): Promise<EstadoCuaderno> {
  const notas = resultado.fase === "borrar" ? 0 : (await listar(sql, userId)).length;
  const borradoEn = notas === 0 ? await ultimoBorrado(sql, userId) : null;
  return {
    fase: resultado.fase === "borrar" ? "limpio" : resultado.fase,
    borradas: resultado.borradas,
    borraEn: resultado.fase === "ultimo" ? resultado.borraEn : null,
    cicloInicio: resultado.cicloInicio,
    borradoEn: resultado.borradas > 0 ? (await ultimoBorrado(sql, userId)) : borradoEn,
  };
}

export const listarNotasEstudio = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }): Promise<ListaCuaderno> => {
    const { getSql } = await import("@/lib/db");
    const sql = await getSql();
    const ahora = await reloj(sql);
    const resultado = await preparar(sql, context.userId, ahora);
    const notas = await listar(sql, context.userId);
    const estado = await estadoDe(sql, context.userId, resultado);
    return { notas, estado };
  });

export const crearNotaEstudio = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator(validarNueva)
  .handler(async ({ data, context }): Promise<ListaCuaderno> => {
    const { getSql } = await import("@/lib/db");
    const sql = await getSql();
    const ahora = await reloj(sql);
    const resultado = await preparar(sql, context.userId, ahora);
    const id = crypto.randomUUID();
    const hex = data.audioBase64 ? audioHex(data.audioBase64) : null;
    const mime = hex ? data.audioMime ?? null : null;
    if (hex) {
      await sql`
        insert into cuaderno_notas (
          id, user_id, shelf, texto, audio, audio_mime,
          fuente, texto_seleccionado, referencia, dia, seccion, titulo_dia,
          pasaje, fecha_lectura, mana_ref
        ) values (
          ${id}, ${context.userId}, ${data.shelf}, ${data.texto}, decode(${hex}, 'hex'), ${mime},
          ${data.fuente}, ${data.textoSeleccionado}, ${data.referencia}, ${data.dia}, ${data.seccion}, ${data.tituloDia},
          ${data.pasaje}, ${data.fechaLectura}, ${data.manaRef}
        )
      `;
    } else {
      await sql`
        insert into cuaderno_notas (
          id, user_id, shelf, texto,
          fuente, texto_seleccionado, referencia, dia, seccion, titulo_dia,
          pasaje, fecha_lectura, mana_ref
        ) values (
          ${id}, ${context.userId}, ${data.shelf}, ${data.texto},
          ${data.fuente}, ${data.textoSeleccionado}, ${data.referencia}, ${data.dia}, ${data.seccion}, ${data.tituloDia},
          ${data.pasaje}, ${data.fechaLectura}, ${data.manaRef}
        )
      `;
    }
    const notas = await listar(sql, context.userId);
    const estado = await estadoDe(sql, context.userId, resultado);
    return { notas, estado };
  });

function validarEdicion(data: unknown): { id: string; texto: string } {
  const row = (data ?? {}) as { id?: string; texto?: string };
  const id = row.id?.trim() ?? "";
  if (!/^[0-9a-f-]{36}$/i.test(id)) throw new Error("Nota desconocida.");
  return { id, texto: limpiar(row.texto ?? "", 8000) };
}

export const editarNotaEstudio = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator(validarEdicion)
  .handler(async ({ data, context }) => {
    const { getSql } = await import("@/lib/db");
    const sql = await getSql();
    const rows = await sql<{ id: string }>`
      update cuaderno_notas
      set texto = ${data.texto}, updated_at = now()
      where id = ${data.id} and user_id = ${context.userId}
      returning id
    `;
    if (rows.length === 0) throw new Error("Esa nota no está en tu cuenta.");
    return { ok: true as const };
  });

export const borrarNotaEstudio = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator((data: unknown) => {
    const id = (data as { id?: string } | null)?.id?.trim() ?? "";
    if (!/^[0-9a-f-]{36}$/i.test(id)) throw new Error("Nota desconocida.");
    return { id };
  })
  .handler(async ({ data, context }) => {
    const { getSql } = await import("@/lib/db");
    const sql = await getSql();
    const rows = await sql<{ id: string }>`
      delete from cuaderno_notas
      where id = ${data.id} and user_id = ${context.userId}
      returning id
    `;
    if (rows.length === 0) throw new Error("Esa nota no está en tu cuenta.");
    return { ok: true as const };
  });

export const confirmarExportacionCuaderno = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    const { getSql } = await import("@/lib/db");
    const sql = await getSql();
    const ahora = await reloj(sql);
    const ok = await confirmarExportacionEn(sql, context.userId, ahora);
    if (!ok) throw new Error("La exportación no quedó registrada. Vuelve a descargar el PDF.");
    return { ok: true as const };
  });
