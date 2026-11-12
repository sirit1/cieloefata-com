import assert from "node:assert/strict";
import { test } from "node:test";
import type { NotaEstudio } from "./cuaderno-estudio.ts";
import { lineasDelCuaderno, nombrePdf, pdfDelCuaderno, pdfLiteral } from "./cuaderno-pdf.ts";

const generado = new Date("2026-11-12T18:00:00.000Z");

function nota(parcial: Partial<NotaEstudio> & Pick<NotaEstudio, "id" | "shelf">): NotaEstudio {
  return {
    texto: "",
    tieneAudio: false,
    fuente: "",
    textoSeleccionado: "",
    referencia: "",
    dia: null,
    seccion: "",
    tituloDia: "",
    pasaje: "",
    fechaLectura: null,
    manaRef: "",
    createdAt: "2026-11-01T12:00:00.000Z",
    updatedAt: "2026-11-01T12:00:00.000Z",
    ...parcial,
  };
}

test("el PDF nombra el archivo y trae los cuatro campos de cada nota", () => {
  assert.equal(nombrePdf(generado), "Cuaderno_Cielo_Efata_2026-11-12.pdf");
  const notas = [
    nota({
      id: "e",
      shelf: "escuela",
      texto: "El orden es inquirir y cumplir.",
      tieneAudio: true,
      fuente: "Curso Experto Bíblico · Día 1: La puerta del sabio",
      textoSeleccionado: "Porque Esdras había preparado su corazón",
      referencia: "Día 1 · sección «Bienvenida» · Esdras 7:10",
      dia: 1,
      seccion: "Bienvenida",
      tituloDia: "La puerta del sabio",
    }),
    nota({
      id: "l",
      shelf: "lectura",
      texto: "Medité el capítulo.",
      fuente: "Lectura diaria · 2026-11-02 · Juan 3",
      textoSeleccionado: "",
      referencia: "Juan 3",
      pasaje: "Juan 3",
      fechaLectura: "2026-11-02",
      createdAt: "2026-11-02T12:00:00.000Z",
    }),
    nota({
      id: "m",
      shelf: "mana",
      texto: "La ley convierte el alma.",
      fuente: "Maná · Salmo 19:7",
      textoSeleccionado: "La ley de Jehová es perfecta",
      referencia: "Salmo 19:7",
      manaRef: "Salmo 19:7",
      createdAt: "2026-11-03T12:00:00.000Z",
    }),
  ];
  const plano = lineasDelCuaderno(notas, generado).map((l) => l.text).join("\n");
  for (const esperado of [
    "Escuela",
    "Lectura diaria",
    "Maná",
    "Tu nota",
    "El orden es inquirir y cumplir.",
    "Nota de voz: hay un audio guardado en la cuenta.",
    "Qué se consultó",
    "Curso Experto Bíblico · Día 1: La puerta del sabio",
    "Texto seleccionado",
    "Porque Esdras había preparado su corazón",
    "Capítulo o versículo",
    "Día 1 · sección «Bienvenida» · Esdras 7:10",
    "Día de la escuela: 1",
    "Sección: Bienvenida",
    "Sin texto seleccionado.",
    "Juan 3",
    "Fecha de la lectura: 2026-11-02",
    "Maná · Salmo 19:7",
    "La ley de Jehová es perfecta",
    "Referencia del maná: Salmo 19:7",
  ]) {
    assert.equal(plano.includes(esperado), true, esperado);
  }
  const pdf = new TextDecoder().decode(pdfDelCuaderno(notas, generado));
  assert.match(pdf, /^%PDF-1\.4/);
  assert.equal(pdf.includes(pdfLiteral("Cuaderno de estudio · Cielo Efata")), true);
  for (const fragmento of [
    "Texto seleccionado",
    "Porque Esdras había preparado su corazón",
    "Qué se consultó",
    "Capítulo o versículo",
    "Sin texto seleccionado.",
    "Nota de voz: hay un audio guardado en la cuenta.",
  ]) {
    assert.equal(pdf.includes(pdfLiteral(fragmento)), true, fragmento);
  }
});
