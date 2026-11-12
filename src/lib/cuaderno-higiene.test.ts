import assert from "node:assert/strict";
import { test } from "node:test";
import {
  AVISO_MS,
  GRACIA_MS,
  MS_DIA,
  ULTIMO_MS,
  decidirHigiene,
  type EntradaHigiene,
} from "./cuaderno-higiene.ts";

const t0 = new Date("2026-01-01T00:00:00.000Z");

function entrada(ms: number, extra: Partial<EntradaHigiene> = {}): EntradaHigiene {
  return {
    ahora: new Date(t0.getTime() + ms),
    hayNotas: true,
    primeraNotaEn: t0,
    ultimaExportacionEn: null,
    ultimoAvisoEn: null,
    ...extra,
  };
}

test("antes de 30 días no hay aviso y a los 30 días sí", () => {
  assert.equal(decidirHigiene(entrada(AVISO_MS - 1)).fase, "ok");
  assert.equal(decidirHigiene(entrada(AVISO_MS)).fase, "aviso");
  assert.equal(decidirHigiene(entrada(ULTIMO_MS - 1)).fase, "aviso");
});

test("a los 40 días se marca el último aviso y 24 horas después se borra", () => {
  assert.equal(decidirHigiene(entrada(ULTIMO_MS)).fase, "marcar_ultimo");
  const aviso = new Date(t0.getTime() + ULTIMO_MS);
  assert.equal(decidirHigiene(entrada(ULTIMO_MS + GRACIA_MS - 1, { ultimoAvisoEn: aviso })).fase, "ultimo");
  assert.equal(decidirHigiene(entrada(ULTIMO_MS + GRACIA_MS, { ultimoAvisoEn: aviso })).fase, "borrar");
});

test("una exportación reinicia el ciclo y un aviso viejo no borra", () => {
  const exportacion = new Date(t0.getTime() + 50 * MS_DIA);
  const decision = decidirHigiene({
    ahora: new Date(exportacion.getTime() + 10 * MS_DIA),
    hayNotas: true,
    primeraNotaEn: t0,
    ultimaExportacionEn: exportacion,
    ultimoAvisoEn: new Date(t0.getTime() + ULTIMO_MS),
  });
  assert.equal(decision.fase, "ok");
  assert.equal(decision.cicloInicio?.toISOString(), exportacion.toISOString());
});

test("sin notas no hay nada que borrar", () => {
  assert.equal(decidirHigiene(entrada(ULTIMO_MS + GRACIA_MS, { hayNotas: false })).fase, "limpio");
});

test("el aviso de un ciclo anterior no cuenta como las 24 horas de este ciclo", () => {
  const exportacion = new Date(t0.getTime() + 10 * MS_DIA);
  const decision = decidirHigiene({
    ahora: new Date(exportacion.getTime() + ULTIMO_MS),
    hayNotas: true,
    primeraNotaEn: t0,
    ultimaExportacionEn: exportacion,
    ultimoAvisoEn: new Date(t0.getTime() + MS_DIA),
  });
  assert.equal(decision.fase, "marcar_ultimo");
});
