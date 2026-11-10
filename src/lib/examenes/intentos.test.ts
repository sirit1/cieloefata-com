import assert from "node:assert/strict";
import { test } from "node:test";
import { MAX_INTENTOS, MINUTOS_MODULO } from "./catalogo.ts";
import { estadoIntento, plazo, puedeAbrirOtro, restanteMs } from "./intentos.ts";

const inicio = new Date("2026-11-10T15:00:00.000Z");

test("el plazo lo marca el servidor y vence al cumplirse", () => {
  const vence = plazo(inicio, MINUTOS_MODULO);
  assert.equal(vence.toISOString(), "2026-11-10T16:00:00.000Z");
  const abierto = estadoIntento(
    { entregadoEn: null, venceEn: vence.toISOString() },
    new Date("2026-11-10T15:59:59.000Z"),
  );
  const vencido = estadoIntento(
    { entregadoEn: null, venceEn: vence.toISOString() },
    new Date("2026-11-10T16:00:01.000Z"),
  );
  assert.equal(abierto, "abierto");
  assert.equal(vencido, "vencido");
  assert.equal(restanteMs(vence.toISOString(), new Date("2026-11-10T15:59:00.000Z")), 60_000);
  assert.equal(restanteMs(vence.toISOString(), new Date("2026-11-10T16:05:00.000Z")), 0);
});

test("entregar antes del plazo cierra el intento", () => {
  const vence = plazo(inicio, 45);
  const estado = estadoIntento(
    { entregadoEn: "2026-11-10T15:10:00.000Z", venceEn: vence.toISOString() },
    new Date("2026-11-10T15:11:00.000Z"),
  );
  assert.equal(estado, "entregado");
});

test("hay dos intentos: el abierto se reanuda y el tercero no se abre", () => {
  assert.equal(MAX_INTENTOS, 2);
  assert.deepEqual(puedeAbrirOtro([]), { ok: true });
  assert.deepEqual(puedeAbrirOtro(["entregado"]), { ok: true });
  assert.deepEqual(puedeAbrirOtro(["abierto"]), { ok: false, motivo: "abierto" });
  assert.deepEqual(puedeAbrirOtro(["vencido", "entregado"]), { ok: false, motivo: "agotado" });
  assert.deepEqual(puedeAbrirOtro(["entregado", "entregado"]), { ok: false, motivo: "agotado" });
});
