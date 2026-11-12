/**
 * Higiene del cuaderno en el servidor.
 * El reloj es el que se le pasa (en producción, `now()` de Postgres).
 * Borra solo cuaderno_notas. No toca la cuenta ni cuaderno_actos.
 */

import { decidirHigiene, GRACIA_MS, MS_HORA, type FaseHigiene } from "./cuaderno-higiene.ts";

export interface SqlEjecutable {
  <T = Record<string, unknown>>(
    strings: TemplateStringsArray,
    ...values: unknown[]
  ): Promise<T[]>;
}

export type ResultadoHigiene = {
  userId: string;
  fase: Exclude<FaseHigiene, "marcar_ultimo">;
  borradas: number;
  borraEn: string | null;
  cicloInicio: string | null;
};

type Fila = {
  primera: Date | string | null;
  n: number | string | null;
  last_export_at: Date | string | null;
  last_aviso_at: Date | string | null;
};

function aFecha(valor: Date | string | null | undefined): Date | null {
  if (valor == null || valor === "") return null;
  if (valor instanceof Date) return Number.isNaN(valor.getTime()) ? null : valor;
  const fecha = new Date(valor);
  return Number.isNaN(fecha.getTime()) ? null : fecha;
}

async function leerFila(sql: SqlEjecutable, userId: string) {
  const rows = await sql<Fila>`
    select
      (select min(created_at) from cuaderno_notas where user_id = ${userId}) as primera,
      (select count(*)::int from cuaderno_notas where user_id = ${userId}) as n,
      h.last_export_at,
      h.last_aviso_at
    from (select ${userId}::text as user_id) u
    left join cuaderno_higiene h on h.user_id = u.user_id
  `;
  const row = rows[0];
  return {
    primera: aFecha(row?.primera),
    n: Number(row?.n ?? 0),
    lastExport: aFecha(row?.last_export_at),
    lastAviso: aFecha(row?.last_aviso_at),
  };
}

export async function aplicarHigieneUsuario(
  sql: SqlEjecutable,
  userId: string,
  ahora: Date,
): Promise<ResultadoHigiene> {
  const fila = await leerFila(sql, userId);
  const decision = decidirHigiene({
    ahora,
    hayNotas: fila.n > 0,
    primeraNotaEn: fila.primera,
    ultimaExportacionEn: fila.lastExport,
    ultimoAvisoEn: fila.lastAviso,
  });
  const cicloInicio = decision.cicloInicio?.toISOString() ?? null;

  if (decision.fase === "marcar_ultimo") {
    const iso = ahora.toISOString();
    const ciclo = (decision.cicloInicio ?? ahora).toISOString();
    const updated = await sql<{ user_id: string }>`
      insert into cuaderno_higiene (user_id, last_aviso_at, updated_at)
      values (${userId}, ${iso}::timestamptz, ${iso}::timestamptz)
      on conflict (user_id) do update set
        last_aviso_at = excluded.last_aviso_at,
        updated_at = excluded.updated_at
      where cuaderno_higiene.last_aviso_at is null
         or cuaderno_higiene.last_aviso_at < ${ciclo}::timestamptz
      returning user_id
    `;
    if (updated.length > 0) {
      const motivo =
        "ultimo_aviso: pasaron 40 dias sin exportacion completa; el reloj de 24 horas empieza ahora; sin exportacion";
      await sql`
        insert into cuaderno_higiene_log (id, user_id, at, motivo)
        values (${crypto.randomUUID()}, ${userId}, ${iso}::timestamptz, ${motivo})
      `;
      console.info("[cuaderno] ultimo aviso", { userId, at: iso, motivo });
    }
    return {
      userId,
      fase: "ultimo",
      borradas: 0,
      borraEn: new Date(ahora.getTime() + GRACIA_MS).toISOString(),
      cicloInicio,
    };
  }

  if (decision.fase === "borrar") {
    const iso = ahora.toISOString();
    const avisoIso = fila.lastAviso?.toISOString() ?? "desconocido";
    const motivo =
      `borrado permanente de las notas de estudio: ultimo aviso enviado en ${avisoIso}; ` +
      "pasaron 24h; no hubo exportacion; la cuenta permanece";
    const rows = await sql<{ n: number | string }>`
      with borradas as (
        delete from cuaderno_notas where user_id = ${userId} returning id
      ), reset as (
        insert into cuaderno_higiene (
          user_id, last_export_at, last_aviso_at, export_pendiente_at, updated_at
        )
        values (${userId}, null, null, null, ${iso}::timestamptz)
        on conflict (user_id) do update set
          last_export_at = null,
          last_aviso_at = null,
          export_pendiente_at = null,
          updated_at = excluded.updated_at
        returning user_id
      ), logged as (
        insert into cuaderno_higiene_log (id, user_id, at, motivo)
        select ${crypto.randomUUID()}, ${userId}, ${iso}::timestamptz, ${motivo}
        where exists (select 1 from borradas)
        returning id
      )
      select (select count(*)::int from borradas) as n
    `;
    const borradas = Number(rows[0]?.n ?? 0);
    if (borradas > 0) console.info("[cuaderno] borrado", { userId, at: iso, motivo, notas: borradas });
    return { userId, fase: "borrar", borradas, borraEn: decision.borraEn?.toISOString() ?? null, cicloInicio };
  }

  return {
    userId,
    fase: decision.fase,
    borradas: 0,
    borraEn: decision.borraEn?.toISOString() ?? null,
    cicloInicio,
  };
}

export async function aplicarHigieneGlobal(
  sql: SqlEjecutable,
  ahora: Date,
  opts?: { forzar?: boolean },
): Promise<{ corrido: boolean; resultados: ResultadoHigiene[] }> {
  const iso = ahora.toISOString();
  await sql`
    insert into cuaderno_higiene_meta (id, last_run_at)
    values (1, null)
    on conflict (id) do nothing
  `;
  if (!opts?.forzar) {
    const umbral = new Date(ahora.getTime() - MS_HORA).toISOString();
    const claimed = await sql<{ id: number }>`
      update cuaderno_higiene_meta
      set last_run_at = ${iso}::timestamptz
      where id = 1
        and (last_run_at is null or last_run_at <= ${umbral}::timestamptz)
      returning id
    `;
    if (claimed.length === 0) return { corrido: false, resultados: [] };
  } else {
    await sql`
      update cuaderno_higiene_meta
      set last_run_at = ${iso}::timestamptz
      where id = 1
    `;
  }
  const users = await sql<{ user_id: string }>`
    select user_id from cuaderno_notas
    union
    select user_id from cuaderno_higiene
  `;
  const resultados: ResultadoHigiene[] = [];
  for (const user of users) {
    resultados.push(await aplicarHigieneUsuario(sql, user.user_id, ahora));
  }
  return { corrido: true, resultados };
}

export async function marcarExportacionLista(sql: SqlEjecutable, userId: string, ahora: Date): Promise<void> {
  const iso = ahora.toISOString();
  await sql`
    insert into cuaderno_higiene (user_id, export_pendiente_at, updated_at)
    values (${userId}, ${iso}::timestamptz, ${iso}::timestamptz)
    on conflict (user_id) do update set
      export_pendiente_at = excluded.export_pendiente_at,
      updated_at = excluded.updated_at
  `;
}

/** Solo cuenta si el PDF se generó en los últimos 15 minutos. Reinicia el ciclo. */
export async function confirmarExportacionEn(sql: SqlEjecutable, userId: string, ahora: Date): Promise<boolean> {
  const iso = ahora.toISOString();
  const rows = await sql<{ user_id: string }>`
    update cuaderno_higiene
    set last_export_at = ${iso}::timestamptz,
        last_aviso_at = null,
        export_pendiente_at = null,
        updated_at = ${iso}::timestamptz
    where user_id = ${userId}
      and export_pendiente_at is not null
      and export_pendiente_at > ${iso}::timestamptz - interval '15 minutes'
    returning user_id
  `;
  return rows.length > 0;
}

export async function ultimoBorrado(sql: SqlEjecutable, userId: string): Promise<string | null> {
  const rows = await sql<{ at: Date | string; motivo: string }>`
    select at, motivo
    from cuaderno_higiene_log
    where user_id = ${userId}
    order by at desc
    limit 1
  `;
  const row = rows[0];
  if (!row?.motivo.startsWith("borrado")) return null;
  return aFecha(row.at)?.toISOString() ?? null;
}
