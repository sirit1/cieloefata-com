import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { citaLiteralEnBloque, contextoEscuela, contextoLectura, contextoMana, moduloDeDia } from "./cuaderno-estudio.ts";

test("la nota de la escuela guarda el texto elegido y no inventa un versículo", () => {
  const ctx = contextoEscuela({
    dia: 1,
    titulo: "La puerta del sabio",
    seccion: "Bienvenida",
    citaMemoria: "",
    citaEnBloque: "",
    textoSeleccionado: "no venimos a acumular datos, sino a conocer a Dios",
  });
  assert.equal(ctx.shelf, "escuela");
  assert.equal(ctx.textoSeleccionado, "no venimos a acumular datos, sino a conocer a Dios");
  assert.equal(ctx.fuente, "Curso Experto Bíblico · Día 1: La puerta del sabio");
  assert.equal(ctx.referencia, "Día 1 · sección «Bienvenida»");
  assert.equal(ctx.referencia.includes("Esdras"), false);
  assert.equal(ctx.dia, 1);
});

test("si el bloque trae la cita literal, esa frase es la referencia", () => {
  const bloque =
    "«Porque Esdras había preparado su corazón.» Así dice Esdras, capítulo siete, versículo diez. Fíjate en el orden.";
  assert.equal(citaLiteralEnBloque(bloque), "Así dice Esdras, capítulo siete, versículo diez.");
  assert.equal(citaLiteralEnBloque("un párrafo sin esa fórmula"), "");
  const ctx = contextoEscuela({
    dia: 1,
    titulo: "La puerta del sabio",
    seccion: "Primera parte. El hombre que preparó su corazón",
    citaMemoria: "",
    citaEnBloque: citaLiteralEnBloque(bloque),
    textoSeleccionado: "Porque Esdras había preparado su corazón",
  });
  assert.match(ctx.referencia, /Así dice Esdras, capítulo siete, versículo diez\./);
  assert.equal(ctx.textoSeleccionado, "Porque Esdras había preparado su corazón");
});

test("el versículo de memoria solo entra si la página lo está mostrando", () => {
  const ctx = contextoEscuela({
    dia: 1,
    titulo: "La puerta del sabio",
    seccion: "Versículo para memorizar",
    citaMemoria: "Esdras 7:10",
    citaEnBloque: "",
    textoSeleccionado: "Porque Esdras había preparado su corazón para inquirir",
  });
  assert.match(ctx.referencia, /Esdras 7:10/);
  assert.match(ctx.referencia, /Versículo para memorizar/);
});

test("lectura y maná usan lo que la persona indicó, no un plan", () => {
  const lectura = contextoLectura({
    fecha: "2026-11-12",
    pasaje: "Juan 3",
    textoSeleccionado: "",
  });
  assert.equal(lectura.shelf, "lectura");
  assert.equal(lectura.pasaje, "Juan 3");
  assert.equal(lectura.referencia, "Juan 3");
  assert.equal(lectura.fechaLectura, "2026-11-12");
  assert.equal(contextoLectura({ fecha: "2026-13-40", pasaje: "Juan 3", textoSeleccionado: "" }).fechaLectura, null);

  const mana = contextoMana({ ref: "Salmo 19:7", textoSeleccionado: "La ley de Jehová es perfecta" });
  assert.equal(mana.shelf, "mana");
  assert.equal(mana.referencia, "Salmo 19:7");
  assert.equal(mana.fuente, "Maná · Salmo 19:7");
  assert.equal(mana.textoSeleccionado, "La ley de Jehová es perfecta");
});

test("las series son las que el curso ya nombra, incluida la última del módulo uno", () => {
  assert.match(moduloDeDia(1), /Primera serie/);
  assert.match(moduloDeDia(10), /Primera serie/);
  assert.match(moduloDeDia(11), /Segunda serie/);
  assert.match(moduloDeDia(20), /Segunda serie/);
  assert.match(moduloDeDia(21), /Última serie del módulo uno/);
  assert.match(moduloDeDia(30), /Última serie del módulo uno/);
});

test("el cuaderno de estudio no usa el almacenamiento del aparato", () => {
  const archivos = [
    "./cuaderno-estudio.ts",
    "./cuaderno-estudio.functions.ts",
    "./cuaderno-higiene.ts",
    "./cuaderno-higiene.server.ts",
    "./cuaderno-pdf.ts",
    "./cuaderno-dom.ts",
    "./cuaderno-cuenta.ts",
    "../components/cuaderno-estudio.tsx",
    "../components/selection-bar.tsx",
    "../routes/api/cuaderno/higiene.ts",
    "../routes/api/cuaderno/exportar.ts",
    "../routes/api/cuaderno/audio/$id.ts",
  ];
  for (const archivo of archivos) {
    const src = readFileSync(new URL(archivo, import.meta.url), "utf8");
    assert.equal(/localStorage|indexedDB|sessionStorage|document\.cookie/i.test(src), false, archivo);
  }
});
