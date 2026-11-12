import { randomBytes, randomUUID } from "node:crypto";
import { getSql, type Sql } from "@/lib/db";
import { EXAMEN_CURSO_ID, EXAMENES, MAX_INTENTOS, examenPorId, idsDeModulo } from "./catalogo.ts";
import { calificar } from "./calificar.ts";
import {
  codigoValido,
  debeEmitirCursoCompleto,
  puntajeCurso,
  tituloCursoCompleto,
  vistaPublica,
  type FilaCertificado,
  type Verificacion,
} from "./certificado.ts";
import { bancoDe } from "./bancos/index.ts";
import { preguntasPublicas, type PreguntaPublica } from "./esquema.ts";
import { estadoIntento, plazo, puedeAbrirOtro, type EstadoIntento } from "./intentos.ts";

export type Estudiante = { id: string; nombre: string; email: string };

export type FilaIntento = {
  id: string;
  examenId: string;
  numero: number;
  iniciadoEn: string;
  venceEn: string;
  entregadoEn: string | null;
  puntaje: number | null;
  aprobado: boolean | null;
  estado: EstadoIntento;
};

export type EstadoExamen = {
  id: string;
  titulo: string;
  detalle: string;
  minutos: number;
  umbral: number;
  abierto: boolean;
  intentosUsados: number;
  maxIntentos: number;
  aprobado: boolean;
  certificado: string | null;
  enCurso: FilaIntento | null;
  preguntas: PreguntaPublica[] | null;
  servidorEn: string;
};

const EVENTOS = new Set(["oculto", "desenfoque", "copia", "corte", "menu", "impresion"]);

function bool(valor: unknown): boolean | null {
  if (valor == null) return null;
  if (valor === true || valor === 1 || valor === "t" || valor === "true") return true;
  if (valor === false || valor === 0 || valor === "f" || valor === "false") return false;
  return null;
}

function iso(valor: unknown): string {
  if (valor instanceof Date) return valor.toISOString();
  const texto = String(valor ?? "");
  const fecha = new Date(texto);
  return Number.isNaN(fecha.getTime()) ? texto : fecha.toISOString();
}

function fechaDia(valor: unknown): string {
  if (valor instanceof Date) return valor.toISOString().slice(0, 10);
  const texto = String(valor ?? "");
  const m = /^(\d{4}-\d{2}-\d{2})/.exec(texto);
  if (m) return m[1];
  const fecha = new Date(texto);
  return Number.isNaN(fecha.getTime()) ? texto.slice(0, 10) : fecha.toISOString().slice(0, 10);
}

type RowIntento = {
  id: string;
  examen_id: string;
  numero: number;
  iniciado_en: unknown;
  vence_en: unknown;
  entregado_en: unknown;
  puntaje: number | null;
  aprobado: boolean | null;
};

function mapIntento(row: RowIntento, ahora: Date): FilaIntento {
  const entregadoEn = row.entregado_en ? iso(row.entregado_en) : null;
  const venceEn = iso(row.vence_en);
  return {
    id: row.id,
    examenId: row.examen_id,
    numero: Number(row.numero),
    iniciadoEn: iso(row.iniciado_en),
    venceEn,
    entregadoEn,
    puntaje: row.puntaje == null ? null : Number(row.puntaje),
    aprobado: bool(row.aprobado),
    estado: estadoIntento({ entregadoEn, venceEn }, ahora),
  };
}

async function sql(): Promise<Sql> {
  return getSql();
}

export async function estudianteDe(userId: string): Promise<Estudiante> {
  if (userId === "dev-user") return { id: userId, nombre: "Dev User", email: "dev@example.com" };
  const db = await sql();
  const rows = await db<{ name: string; email: string }>`
    select name, email from "user" where id = ${userId} limit 1
  `;
  const row = rows[0];
  return {
    id: userId,
    nombre: row?.name?.trim() || "Estudiante",
    email: row?.email?.trim() || "",
  };
}

async function cerrarVencidos(db: Sql, userId: string, examenId: string, ahora: Date): Promise<void> {
  await db`
    update examen_intentos
    set entregado_en = vence_en, puntaje = 0, aprobado = false
    where user_id = ${userId}
      and examen_id = ${examenId}
      and entregado_en is null
      and vence_en <= ${ahora.toISOString()}
  `;
}

async function leerIntentos(db: Sql, userId: string, examenId: string, ahora: Date): Promise<FilaIntento[]> {
  const rows = await db<RowIntento>`
    select id, examen_id, numero, iniciado_en, vence_en, entregado_en, puntaje, aprobado
    from examen_intentos
    where user_id = ${userId} and examen_id = ${examenId}
    order by numero asc
  `;
  return rows.map((row) => mapIntento(row, ahora));
}

async function certificadoDe(
  db: Sql,
  userId: string,
  examenId: string,
): Promise<string | null> {
  const rows = await db<{ codigo: string }>`
    select codigo from certificados
    where user_id = ${userId} and examen_id = ${examenId}
    limit 1
  `;
  return rows[0]?.codigo ?? null;
}

function codigoNuevo(): string {
  return randomBytes(18).toString("base64url");
}

async function emitir(
  db: Sql,
  userId: string,
  examenId: string,
  nombre: string,
  titulo: string,
  puntaje: number,
  ahora: Date,
): Promise<string> {
  const codigo = codigoNuevo();
  await db`
    insert into certificados (codigo, user_id, examen_id, nombre, titulo, puntaje, emitido_en)
    values (
      ${codigo},
      ${userId},
      ${examenId},
      ${nombre},
      ${titulo},
      ${puntaje},
      ${ahora.toISOString().slice(0, 10)}
    )
    on conflict (user_id, examen_id) do update
    set nombre = excluded.nombre,
        puntaje = greatest(certificados.puntaje, excluded.puntaje)
  `;
  return (await certificadoDe(db, userId, examenId)) ?? codigo;
}

export async function estadoDe(userId: string, examenId: string, ahora = new Date()): Promise<EstadoExamen | null> {
  const meta = examenPorId(examenId);
  if (!meta) return null;
  const db = await sql();
  await cerrarVencidos(db, userId, examenId, ahora);
  const intentos = await leerIntentos(db, userId, examenId, ahora);
  const banco = bancoDe(examenId);
  const abierto = banco != null;
  const enCurso = intentos.find((i) => i.estado === "abierto") ?? null;
  const usados = intentos.filter((i) => i.estado !== "abierto").length + (enCurso ? 1 : 0);
  return {
    id: meta.id,
    titulo: meta.titulo,
    detalle: meta.detalle,
    minutos: meta.minutos,
    umbral: meta.umbral,
    abierto,
    intentosUsados: usados,
    maxIntentos: MAX_INTENTOS,
    aprobado: intentos.some((i) => i.aprobado === true),
    certificado: await certificadoDe(db, userId, examenId),
    enCurso,
    preguntas: abierto && enCurso ? preguntasPublicas(banco) : null,
    servidorEn: ahora.toISOString(),
  };
}

export async function resumenDe(userId: string, ahora = new Date()) {
  const db = await sql();
  const filas: EstadoExamen[] = [];
  for (const meta of EXAMENES) {
    const estado = await estadoDe(userId, meta.id, ahora);
    if (estado) filas.push({ ...estado, preguntas: null });
  }
  const curso = await certificadoDe(db, userId, EXAMEN_CURSO_ID);
  return { examenes: filas, certificadoCurso: curso };
}

export async function iniciar(userId: string, examenId: string, ahora = new Date()): Promise<EstadoExamen> {
  const meta = examenPorId(examenId);
  if (!meta) throw new Error("Examen desconocido");
  const banco = bancoDe(examenId);
  if (!banco) throw new Error("banco vacío");
  const db = await sql();
  await cerrarVencidos(db, userId, examenId, ahora);
  let intentos = await leerIntentos(db, userId, examenId, ahora);
  const permiso = puedeAbrirOtro(intentos.map((i) => i.estado));
  if (!permiso.ok && permiso.motivo === "agotado") throw new Error("intentos agotados");
  if (permiso.ok) {
    const numero = intentos.length + 1;
    if (numero > MAX_INTENTOS) throw new Error("intentos agotados");
    const vence = plazo(ahora, meta.minutos);
    try {
      await db`
        insert into examen_intentos (id, user_id, examen_id, numero, iniciado_en, vence_en)
        values (
          ${randomUUID()},
          ${userId},
          ${examenId},
          ${numero},
          ${ahora.toISOString()},
          ${vence.toISOString()}
        )
      `;
    } catch (err) {
      const code = (err as { code?: string }).code;
      if (code !== "23505") throw err;
    }
    intentos = await leerIntentos(db, userId, examenId, ahora);
  }
  const estado = await estadoDe(userId, examenId, ahora);
  if (!estado?.enCurso || !estado.preguntas) throw new Error("No se pudo abrir el intento");
  return estado;
}

export async function entregar(
  userId: string,
  estudiante: Estudiante,
  intentoId: string,
  respuestas: Record<string, unknown>,
  ahora = new Date(),
): Promise<{
  puntaje: number;
  aprobado: boolean;
  aciertos: number;
  total: number;
  certificado: string | null;
  certificadoCurso: string | null;
  intentosUsados: number;
  tiempoAgotado: boolean;
}> {
  const db = await sql();
  const rows = await db<RowIntento & { user_id: string }>`
    select id, user_id, examen_id, numero, iniciado_en, vence_en, entregado_en, puntaje, aprobado
    from examen_intentos
    where id = ${intentoId}
    limit 1
  `;
  const row = rows[0];
  if (!row || row.user_id !== userId) throw new Error("Intento desconocido");
  const meta = examenPorId(row.examen_id);
  const banco = meta ? bancoDe(meta.id) : null;
  if (!meta || !banco) throw new Error("banco vacío");

  await cerrarVencidos(db, userId, meta.id, ahora);
  const fresco = await db<RowIntento>`
    select id, examen_id, numero, iniciado_en, vence_en, entregado_en, puntaje, aprobado
    from examen_intentos where id = ${intentoId} limit 1
  `;
  const actual = fresco[0] ? mapIntento(fresco[0], ahora) : null;
  if (!actual) throw new Error("Intento desconocido");

  let nota = {
    puntaje: actual.puntaje ?? 0,
    aprobado: actual.aprobado === true,
    aciertos: 0,
    total: banco.length,
  };
  if (actual.estado === "abierto") {
    const cal = calificar(banco, respuestas, meta.umbral);
    nota = cal;
    await db`
      update examen_intentos
      set entregado_en = ${ahora.toISOString()},
          puntaje = ${cal.puntaje},
          aprobado = ${cal.aprobado},
          respuestas = ${JSON.stringify(respuestas)}
      where id = ${intentoId} and user_id = ${userId} and entregado_en is null
    `;
  } else if (actual.estado === "entregado" && actual.puntaje != null) {
    nota = {
      puntaje: actual.puntaje,
      aprobado: actual.aprobado === true,
      aciertos: 0,
      total: banco.length,
    };
  }

  let certificado: string | null = null;
  let certificadoCurso: string | null = null;
  if (nota.aprobado) {
    certificado = await emitir(
      db,
      userId,
      meta.id,
      estudiante.nombre,
      meta.nombreCertificado,
      nota.puntaje,
      ahora,
    );
    const aprobados = await modulosAprobados(db, userId);
    if (debeEmitirCursoCompleto(aprobados.filter((id) => id !== meta.id), meta.id)) {
      const puntajes = await puntajesDeModulo(db, userId);
      certificadoCurso = await emitir(
        db,
        userId,
        EXAMEN_CURSO_ID,
        estudiante.nombre,
        tituloCursoCompleto(),
        puntajeCurso(puntajes),
        ahora,
      );
    } else {
      certificadoCurso = await certificadoDe(db, userId, EXAMEN_CURSO_ID);
    }
  }

  const intentos = await leerIntentos(db, userId, meta.id, ahora);
  return {
    puntaje: nota.puntaje,
    aprobado: nota.aprobado,
    aciertos: nota.aciertos,
    total: nota.total,
    certificado,
    certificadoCurso,
    intentosUsados: intentos.length,
    tiempoAgotado: actual.estado !== "abierto" && actual.entregadoEn === actual.venceEn,
  };
}

async function modulosAprobados(db: Sql, userId: string): Promise<string[]> {
  const ids = idsDeModulo();
  const rows = await db<{ examen_id: string }>`
    select distinct examen_id from examen_intentos
    where user_id = ${userId} and aprobado = true
  `;
  return rows.map((r) => r.examen_id).filter((id) => ids.includes(id));
}

async function puntajesDeModulo(db: Sql, userId: string): Promise<number[]> {
  const ids = idsDeModulo();
  const rows = await db<{ examen_id: string; puntaje: number }>`
    select examen_id, max(puntaje) as puntaje
    from examen_intentos
    where user_id = ${userId} and aprobado = true
    group by examen_id
  `;
  return rows.filter((r) => ids.includes(r.examen_id)).map((r) => Number(r.puntaje));
}

export async function registrarEvento(userId: string, intentoId: string, tipo: string): Promise<void> {
  if (!EVENTOS.has(tipo)) return;
  const db = await sql();
  const rows = await db<{ id: string }>`
    select id from examen_intentos
    where id = ${intentoId} and user_id = ${userId}
    limit 1
  `;
  if (!rows[0]) return;
  await db`
    insert into examen_eventos (id, intento_id, user_id, tipo)
    values (${randomUUID()}, ${intentoId}, ${userId}, ${tipo})
  `;
}

export async function verificar(codigo: string): Promise<Verificacion> {
  if (!codigoValido(codigo)) return { valido: false };
  const db = await sql();
  const rows = await db<{
    codigo: string;
    nombre: string;
    titulo: string;
    puntaje: number;
    emitido_en: unknown;
  }>`
    select codigo, nombre, titulo, puntaje, emitido_en
    from certificados
    where codigo = ${codigo}
    limit 1
  `;
  const row = rows[0];
  if (!row) return vistaPublica(null);
  const fila: FilaCertificado = {
    codigo: row.codigo,
    nombre: row.nombre,
    titulo: row.titulo,
    puntaje: Number(row.puntaje),
    emitidoEn: fechaDia(row.emitido_en),
  };
  return vistaPublica(fila);
}

export async function filaCertificado(codigo: string): Promise<FilaCertificado | null> {
  const vista = await verificar(codigo);
  if (!vista.valido) return null;
  return {
    codigo: vista.codigo,
    nombre: vista.nombre,
    titulo: vista.titulo,
    puntaje: vista.puntaje,
    emitidoEn: vista.fecha,
  };
}
