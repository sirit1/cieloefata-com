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
    assert.match(MARCO_RITMO, /ritmo de ministerio/);
    assert.match(MARCO_HOY, /Filipenses 2/);
    assert.match(MARCO_HOY, /Isaías 53/);
    assert.match(GLOSA_ESTA_SEMANA, /V\.E\.R\.D\.A\.D/);
    assert.match(GLOSA_TRATADO_MES, /versículo que viajaba solo/);
  });

  it("tiene las siete muestras y los siete prefills de WhatsApp", () => {
    for (const slug of SLUGS_TOMO) {
      assert.ok(MUESTRAS_TOMO[slug]?.length > 80, slug);
      assert.ok(PACK_WHATSAPP[slug]?.startsWith("Hola, soy de cieloefata.com;"), slug);
    }
    assert.equal(Object.keys(MUESTRAS_TOMO).length, 7);
    assert.equal(Object.keys(PACK_WHATSAPP).length, 7);
    assert.match(MUESTRAS_TOMO["el-siervo-no-tu"], /ʾāšām/);
    assert.match(MUESTRAS_TOMO["cuando-el-cielo-se-cae"], /rugar/);
  });

  it("compone el hábito del cuaderno con el pasaje, no con un lema", () => {
    assert.equal(RETOMAR_TITULO, "Retomar el acto");
    assert.equal(
      retomarAulaSinActo("Filipenses 2", "Filipenses 2:5–11"),
      "El aula de Filipenses 2 ya se oyó. El acto de Filipenses 2:5–11 aún no está escrito. Vuelve al cuaderno y nombra lo que el indicativo ya dijo —un verbo del pasaje, un testigo de carne y, si hace falta, una nota breve— antes de abrir otro capítulo.",
    );
    assert.equal(
      retomarObediencia("Isaías 53", "Nombrar al Siervo, no al yo"),
      "La última obediencia escrita fue sobre Isaías 53: «Nombrar al Siervo, no al yo». Puedes seguir ese mismo texto, o escribir el acto que el aula de esta semana pide ahora. El cuaderno no acumula impresiones: guarda el hábito de oír y obedecer con fecha.",
    );
    assert.equal(retomarEnlace("Filipenses 2"), "Retomar el acto · Seguir Filipenses 2");
    assert.match(CUADERNO_VACIO, /Aún no hay un paso escrito/);
    assert.match(CUADERNO_VACIO, /Filipenses 2/);
  });

  it("guarda las tres oraciones de Canon y el prefill de Éfata", () => {
    assert.match(CANON_LEER, /^Leer el capítulo\./);
    assert.match(CANON_ESTUDIO, /^Estudio\./);
    assert.match(CANON_TRATADO, /^Tratado\./);
    assert.equal(
      textoPackWhatsApp("efata"),
      "Hola, soy de cieloefata.com; solicito el pack del tomo Éfata: La Escritura Abierta para estudiar Marcos 7 con el método V.E.R.D.A.D.",
    );
    assert.equal(
      "https://wa.me/584241674909?text=" + encodeURIComponent(PACK_WHATSAPP.efata),
      "https://wa.me/584241674909?text=Hola%2C%20soy%20de%20cieloefata.com%3B%20solicito%20el%20pack%20del%20tomo%20%C3%89fata%3A%20La%20Escritura%20Abierta%20para%20estudiar%20Marcos%207%20con%20el%20m%C3%A9todo%20V.E.R.D.A.D.",
    );
  });
});
