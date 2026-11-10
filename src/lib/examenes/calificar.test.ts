import assert from "node:assert/strict";
import { test } from "node:test";
import { bancoDe } from "./bancos/index.ts";
import { preguntas as fixture } from "./bancos/fixture-prueba.ts";
import { calificar } from "./calificar.ts";
import { UMBRAL_DEFECTO } from "./catalogo.ts";
import { bancoUtilizable, preguntasPublicas } from "./esquema.ts";

test("aprueba con el 70 % y no redondea un 66 % hacia arriba", () => {
  const bien = { t1: 1, t2: 0, t3: 2, t4: 1 };
  const nota = calificar(fixture, bien, UMBRAL_DEFECTO);
  assert.equal(nota.aciertos, 4);
  assert.equal(nota.puntaje, 100);
  assert.equal(nota.aprobado, true);

  const justo = calificar(fixture, { t1: 1, t2: 0, t3: 2, t4: 0 }, 0.7);
  assert.equal(justo.aciertos, 3);
  assert.equal(justo.puntaje, 75);
  assert.equal(justo.aprobado, true);

  const corto = calificar(fixture, { t1: 1, t2: 0 }, 0.7);
  assert.equal(corto.aciertos, 2);
  assert.equal(corto.puntaje, 50);
  assert.equal(corto.aprobado, false);
});

test("una marca que no es índice cuenta como fallo", () => {
  const nota = calificar(fixture, { t1: 1, t2: "0", t3: 9, t4: 1 }, 0.7);
  assert.equal(nota.aciertos, 2);
  assert.equal(nota.aprobado, false);
});

test("el umbral se puede bajar por examen", () => {
  const nota = calificar(fixture, { t1: 1 }, 0.25);
  assert.equal(nota.aprobado, true);
});

test("las preguntas públicas no llevan la respuesta correcta", () => {
  const publicas = preguntasPublicas(fixture);
  const json = JSON.stringify(publicas);
  assert.equal(json.includes("correcta"), false);
  assert.equal(publicas.length, fixture.length);
  assert.equal("correcta" in publicas[0], false);
  assert.deepEqual(publicas[0].opciones, fixture[0].opciones);
});

test("los bancos del curso se entregan vacíos y el fixture no se sirve", () => {
  for (let n = 1; n <= 12; n += 1) assert.equal(bancoDe(`modulo-${n}`), null);
  assert.equal(bancoDe("final"), null);
  assert.equal(bancoDe("fixture-prueba"), null);
  assert.ok(bancoUtilizable(fixture));
});
