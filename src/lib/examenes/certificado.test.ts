import assert from "node:assert/strict";
import { test } from "node:test";
import { PDFDocument, PDFName, PDFRawStream } from "pdf-lib";
import { TITULO_CURSO_COMPLETO, idsDeModulo } from "./catalogo.ts";
import {
  codigoValido,
  debeEmitirCursoCompleto,
  puntajeCurso,
  urlCertificado,
  vistaPublica,
} from "./certificado.ts";
import { dibujarCertificado } from "./pdf.server.ts";

test("la verificación pública no expone el correo", () => {
  const vista = vistaPublica({
    codigo: "abcDEF1234567890_-zz",
    nombre: "Ana Pérez",
    titulo: "Módulo 1 · Días 1–30",
    puntaje: 80,
    emitidoEn: "2026-11-10T18:00:00.000Z",
    email: "ana@example.com",
  });
  assert.equal(vista.valido, true);
  if (!vista.valido) return;
  assert.equal(vista.nombre, "Ana Pérez");
  assert.equal(vista.titulo, "Módulo 1 · Días 1–30");
  assert.equal(vista.fecha, "2026-11-10");
  assert.equal(vista.puntaje, 80);
  assert.equal("email" in vista, false);
  assert.equal(JSON.stringify(vista).includes("ana@"), false);
  assert.equal(JSON.stringify(vista).includes("example.com"), false);
});

test("un código desconocido o mal formado no es un certificado", () => {
  assert.deepEqual(vistaPublica(null), { valido: false });
  assert.deepEqual(
    vistaPublica({ codigo: "", nombre: "Ana", titulo: "Módulo 1", puntaje: 80, emitidoEn: "2026-11-10" }),
    { valido: false },
  );
  assert.equal(codigoValido("corto"), false);
  assert.equal(codigoValido("abcDEF1234567890_-zz"), true);
  assert.equal(urlCertificado("abcDEF1234567890_-zz"), "https://www.cieloefata.com/certificado/abcDEF1234567890_-zz");
});

test("el curso completo sale al aprobar los doce módulos, no con el final", () => {
  const modulos = idsDeModulo();
  assert.equal(modulos.length, 12);
  const once = modulos.slice(0, 11);
  assert.equal(debeEmitirCursoCompleto(once, modulos[11]), true);
  assert.equal(debeEmitirCursoCompleto(once.slice(0, 10), modulos[10]), false);
  assert.equal(debeEmitirCursoCompleto(modulos, "final"), false);
  assert.equal(puntajeCurso([70, 80, 90]), 80);
  assert.equal(TITULO_CURSO_COMPLETO, "Curso completo — Experto Bíblico");
});

test("el PDF lleva el sello, el nombre y el código, y no el correo", async () => {
  const codigo = "abcDEF1234567890_-zz";
  const pdf = await dibujarCertificado({
    codigo,
    nombre: "Ana Pérez",
    titulo: TITULO_CURSO_COMPLETO,
    puntaje: 88,
    fecha: "2026-11-10",
  });
  assert.equal(Buffer.from(pdf.subarray(0, 5)).toString(), "%PDF-");
  const doc = await PDFDocument.load(pdf);
  assert.equal(doc.getPageCount(), 1);
  let imagenes = 0;
  for (const [, obj] of doc.context.enumerateIndirectObjects()) {
    if (obj instanceof PDFRawStream && obj.dict.get(PDFName.of("Subtype")) === PDFName.of("Image")) {
      imagenes += 1;
    }
  }
  assert.equal(imagenes, 2);
  const bytes = Buffer.from(pdf);
  assert.equal(bytes.includes(Buffer.from("ana@")), false);
  assert.equal(bytes.includes(Buffer.from("example.com")), false);
  assert.ok(bytes.length > 8_000);
});
