import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { PGlite } from "@electric-sql/pglite";
import { AVISO_MS, GRACIA_MS, ULTIMO_MS } from "./cuaderno-higiene.ts";
import {
  aplicarHigieneGlobal,
  aplicarHigieneUsuario,
  confirmarExportacionEn,
  marcarExportacionLista,
  type SqlEjecutable,
} from "./cuaderno-higiene.server.ts";

const t0 = new Date("2026-01-01T00:00:00.000Z");

function sqlDe(pg: PGlite): SqlEjecutable {
  return (async <T>(strings: TemplateStringsArray, ...values: unknown[]) => {
    let text = strings[0] ?? "";
    for (let i = 0; i < values.length; i += 1) text += `$${i + 1}${strings[i + 1] ?? ""}`;
    const result = await pg.query<T>(text, values);
    return result.rows;
  }) as SqlEjecutable;
}

async function base(): Promise<{ pg: PGlite; sql: SqlEjecutable }> {
  const pg = new PGlite();
  await pg.waitReady;
  const raiz = new URL("../../migrations/", import.meta.url);
  await pg.exec(readFileSync(new URL("0002_cuaderno.sql", raiz), "utf8"));
  await pg.exec(readFileSync(new URL("0003_cuaderno_estudio.sql", raiz), "utf8"));
  return { pg, sql: sqlDe(pg) };
}

async function nota(sql: SqlEjecutable, userId: string, id: string, cuando: Date) {
  const iso = cuando.toISOString();
  await sql`
    insert into cuaderno_notas (
      id, user_id, shelf, texto, fuente, texto_seleccionado, referencia,
      dia, seccion, titulo_dia, pasaje, mana_ref, created_at, updated_at
    ) values (
      ${id}, ${userId}, 'escuela', 'El orden es inquirir.',
      'Curso Experto Bíblico · Día 1: La puerta del sabio',
      'Porque Esdras había preparado su corazón',
      'Día 1 · sección «Bienvenida»',
      1, 'Bienvenida', 'La puerta del sabio', '', '',
      ${iso}::timestamptz, ${iso}::timestamptz
    )
  `;
}

async function contarNotas(sql: SqlEjecutable, userId: string) {
  const rows = await sql<{ n: number | string }>`select count(*)::int as n from cuaderno_notas where user_id = ${userId}`;
  return Number(rows[0]?.n ?? 0);
}

async function contarActos(sql: SqlEjecutable, userId: string) {
  const rows = await sql<{ n: number | string }>`select count(*)::int as n from cuaderno_actos where user_id = ${userId}`;
  return Number(rows[0]?.n ?? 0);
}

async function contarLogs(sql: SqlEjecutable, userId: string, prefijo: string) {
  const rows = await sql<{ n: number | string }>`
    select count(*)::int as n from cuaderno_higiene_log
    where user_id = ${userId} and motivo like ${prefijo}
  `;
  return Number(rows[0]?.n ?? 0);
}

test("30 días avisa, 40 marca, 24 horas después borra solo las notas y es idempotente", async () => {
  const { sql } = await base();
  await nota(sql, "ana", "n1", t0);
  await sql`
    insert into cuaderno_actos (user_id, ref, decision, at)
    values ('ana', 'Esdras 7:10', 'Inquirir la ley esta semana', '2026-01-01T00:00:00.000Z')
  `;

  const a30 = await aplicarHigieneUsuario(sql, "ana", new Date(t0.getTime() + AVISO_MS));
  assert.equal(a30.fase, "aviso");
  assert.equal(a30.borradas, 0);
  assert.equal(await contarNotas(sql, "ana"), 1);
  assert.equal(await contarLogs(sql, "ana", "ultimo_aviso%"), 0);

  const a40 = await aplicarHigieneUsuario(sql, "ana", new Date(t0.getTime() + ULTIMO_MS));
  assert.equal(a40.fase, "ultimo");
  assert.equal(await contarNotas(sql, "ana"), 1);
  assert.equal(await contarLogs(sql, "ana", "ultimo_aviso%"), 1);

  const otra = await aplicarHigieneUsuario(sql, "ana", new Date(t0.getTime() + ULTIMO_MS + 60_000));
  assert.equal(otra.fase, "ultimo");
  assert.equal(await contarLogs(sql, "ana", "ultimo_aviso%"), 1);

  const antes = await aplicarHigieneUsuario(sql, "ana", new Date(t0.getTime() + ULTIMO_MS + GRACIA_MS - 1));
  assert.equal(antes.fase, "ultimo");
  assert.equal(antes.borradas, 0);

  const borrado = await aplicarHigieneUsuario(sql, "ana", new Date(t0.getTime() + ULTIMO_MS + GRACIA_MS));
  assert.equal(borrado.fase, "borrar");
  assert.equal(borrado.borradas, 1);
  assert.equal(await contarNotas(sql, "ana"), 0);
  assert.equal(await contarActos(sql, "ana"), 1);
  assert.equal(await contarLogs(sql, "ana", "borrado%"), 1);

  const deNuevo = await aplicarHigieneUsuario(sql, "ana", new Date(t0.getTime() + ULTIMO_MS + GRACIA_MS + 60_000));
  assert.equal(deNuevo.fase, "limpio");
  assert.equal(deNuevo.borradas, 0);
  assert.equal(await contarLogs(sql, "ana", "borrado%"), 1);

  const higiene = await sql<{ last_export_at: string | null; last_aviso_at: string | null }>`
    select last_export_at, last_aviso_at from cuaderno_higiene where user_id = 'ana'
  `;
  assert.equal(higiene[0]?.last_export_at ?? null, null);
  assert.equal(higiene[0]?.last_aviso_at ?? null, null);
});

test("exportar dentro del plazo reinicia el ciclo y no borra", async () => {
  const { sql } = await base();
  await nota(sql, "luz", "n2", t0);
  const enAviso = new Date(t0.getTime() + ULTIMO_MS + 3_600_000);
  await aplicarHigieneUsuario(sql, "luz", new Date(t0.getTime() + ULTIMO_MS));
  await marcarExportacionLista(sql, "luz", enAviso);
  const ok = await confirmarExportacionEn(sql, "luz", new Date(enAviso.getTime() + 60_000));
  assert.equal(ok, true);
  assert.equal(await confirmarExportacionEn(sql, "luz", new Date(enAviso.getTime() + 120_000)), false);
  const despues = await aplicarHigieneUsuario(sql, "luz", new Date(enAviso.getTime() + GRACIA_MS));
  assert.equal(despues.fase, "ok");
  assert.equal(await contarNotas(sql, "luz"), 1);
});

test("el pase global borra a quien venció y deja intactas las notas recientes y los actos", async () => {
  const { sql } = await base();
  const ahora = new Date(t0.getTime() + ULTIMO_MS + GRACIA_MS);
  await nota(sql, "vieja", "n3", t0);
  await sql`
    insert into cuaderno_higiene (user_id, last_aviso_at, updated_at)
    values ('vieja', ${new Date(t0.getTime() + ULTIMO_MS).toISOString()}::timestamptz, ${t0.toISOString()}::timestamptz)
  `;
  await nota(sql, "nueva", "n4", ahora);
  await sql`
    insert into cuaderno_actos (user_id, ref, decision, at)
    values ('vieja', 'Juan 1:1', 'Leer el prólogo', '2026-02-01T00:00:00.000Z')
  `;
  const pase = await aplicarHigieneGlobal(sql, ahora, { forzar: true });
  assert.equal(pase.corrido, true);
  const vieja = pase.resultados.find((r) => r.userId === "vieja");
  const nueva = pase.resultados.find((r) => r.userId === "nueva");
  assert.equal(vieja?.borradas, 1);
  assert.equal(nueva?.borradas, 0);
  assert.equal(await contarNotas(sql, "vieja"), 0);
  assert.equal(await contarNotas(sql, "nueva"), 1);
  assert.equal(await contarActos(sql, "vieja"), 1);
  const segundo = await aplicarHigieneGlobal(sql, new Date(ahora.getTime() + 60_000), { forzar: true });
  assert.equal(segundo.resultados.find((r) => r.userId === "vieja")?.borradas ?? 0, 0);
  assert.equal(await contarLogs(sql, "vieja", "borrado%"), 1);
});
