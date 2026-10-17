import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  CANON_ESTUDIO,
  CANON_LEER,
  CANON_TRATADO,
  CUADERNO_VACIO,
  GLOSA_ESTA_SEMANA,
  GLOSA_TRATADO_MES,
  MARCO_HOY,
  MARCO_RITMO,
  MUESTRAS_TOMO,
  PACK_WHATSAPP,
  RETOMAR_TITULO,
  SLUGS_TOMO,
  retomarAulaSinActo,
  retomarEnlace,
  retomarObediencia,
  textoPackWhatsApp,
} from "./copy-nivel.ts";

describe("COPY PACK NIVEL+", () => {
  it("guarda el marco del calendario sin recortar las glosas", () => {
    assert.match(MARCO_RITMO, /pasaje completo/);
    assert.equal(MARCO_HOY, "");
    assert.match(GLOSA_ESTA_SEMANA, /V\.E\.R\.D\.A\.D/);
    assert.match(GLOSA_TRATADO_MES, /dentro del capítulo/);
  });

  it("tiene las nueve muestras y los nueve prefills de WhatsApp", () => {
    for (const slug of SLUGS_TOMO) {
      assert.ok(MUESTRAS_TOMO[slug]?.length > 80, slug);
      assert.ok(PACK_WHATSAPP[slug]?.startsWith("Hola, soy de cieloefata.com;"), slug);
    }
    assert.equal(Object.keys(MUESTRAS_TOMO).length, 9);
    assert.equal(Object.keys(PACK_WHATSAPP).length, 9);
    assert.match(MUESTRAS_TOMO["el-siervo-no-tu"], /ʾāšām/);
    assert.match(MUESTRAS_TOMO["cuando-el-cielo-se-cae"], /orar/);
  });

  it("compone el hábito del cuaderno con el pasaje, no con un lema", () => {
    assert.equal(RETOMAR_TITULO, "Retomar mi paso");
    assert.equal(
      retomarAulaSinActo("Filipenses 2", "Filipenses 2:5–11"),
      "Ya leíste Filipenses 2, pero aún no has escrito tu paso sobre Filipenses 2:5–11. Vuelve al cuaderno y anota lo que el pasaje te pide, con el nombre de alguien de confianza, antes de abrir otro capítulo.",
    );
    assert.equal(
      retomarObediencia("Isaías 53", "Nombrar al Siervo, no al yo"),
      "La última obediencia escrita fue sobre Isaías 53: «Nombrar al Siervo, no al yo». Puedes seguir con ese mismo texto o escribir el paso que te pide el estudio de esta semana. El cuaderno no acumula impresiones: guarda, con fecha, el hábito de oír y obedecer.",
    );
    assert.equal(retomarEnlace("Filipenses 2"), "Retomar mi paso · Seguir Filipenses 2");
    assert.match(CUADERNO_VACIO, /paso concreto/);
    assert.match(CUADERNO_VACIO, /Marcos 7/);
    assert.match(CUADERNO_VACIO, /estudio destacado/);
  });

  it("guarda las tres oraciones de Canon y el prefill de Éfata", () => {
    assert.match(CANON_LEER, /^Leer el capítulo\./);
    assert.match(CANON_ESTUDIO, /^Estudio\./);
    assert.match(CANON_TRATADO, /^Tratado\./);
    assert.equal(
      textoPackWhatsApp("efata"),
      "Hola, soy de cieloefata.com; solicito el pack del libro Éfata: La Escritura Abierta para oír Marcos 7 entero",
    );
    assert.equal(
      "https://wa.me/584241674909?text=" + encodeURIComponent(PACK_WHATSAPP.efata),
      "https://wa.me/584241674909?text=Hola%2C%20soy%20de%20cieloefata.com%3B%20solicito%20el%20pack%20del%20libro%20%C3%89fata%3A%20La%20Escritura%20Abierta%20para%20o%C3%ADr%20Marcos%207%20entero",
    );
  });
});
