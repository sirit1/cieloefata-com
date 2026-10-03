import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { parseRef } from "./leer.ts";
import { urlPuenteRevelatio, versiculoCompanero } from "./puente-revelatio.ts";

function q(href: string | null) {
  assert.ok(href, "faltó la URL del puente");
  return new URL(href).searchParams;
}

describe("parseRef: versículo y libros de un capítulo", () => {
  it("abre 3 Juan 2 en el único capítulo, con versículo 2", () => {
    const p = parseRef("3 Juan 2");
    assert.deepEqual(p, { libro: "3 Juan", slug: "3-juan", cap: 1, vs: 2 });
    assert.equal(parseRef("3 Jn. 2")?.cap, 1);
    assert.equal(parseRef("3 Jn. 2")?.vs, 2);
  });

  it("no confunde un rango de capítulos con un versículo", () => {
    const p = parseRef("Santiago 2");
    assert.equal(p?.slug, "santiago");
    assert.equal(p?.cap, 2);
    assert.equal(p?.vs, undefined);
    assert.equal(parseRef("1 Corintios 12–14")?.cap, 12);
    assert.equal(parseRef("1 Corintios 12–14")?.vs, undefined);
  });

  it("toma el primer versículo de un rango", () => {
    assert.equal(parseRef("Filipenses 2:5–11")?.cap, 2);
    assert.equal(parseRef("Filipenses 2:5–11")?.vs, 5);
    assert.equal(parseRef("Isaías 53:5")?.vs, 5);
    assert.equal(parseRef("Romanos 8:28")?.vs, 28);
  });
});

describe("puente a RevelatiO", () => {
  it("«Leer en la web» de la portada abre Marcos 1 y vuelve al aula, no al inicio", () => {
    const p = q(
      urlPuenteRevelatio({ ref: "Marcos 1", desde: "/estudios/marcos-1" }),
    );
    assert.equal(p.get("libro"), "marcos");
    assert.equal(p.get("cap"), "1");
    assert.equal(p.get("casa"), "1");
    assert.equal(p.get("vuelta"), "/estudios/marcos-1");
    assert.equal(p.get("estudio"), "marcos-1");
    assert.equal(p.get("vs"), null);
  });

  it("el tratado de Isaías 53 vuelve al tratado, no al aula del mismo capítulo", () => {
    const p = q(
      urlPuenteRevelatio({
        ref: "Isaías 53:5",
        desde: "/tratados/isaias-53",
      }),
    );
    assert.equal(p.get("libro"), "isaias");
    assert.equal(p.get("cap"), "53");
    assert.equal(p.get("vs"), "5");
    assert.equal(p.get("casa"), "1");
    assert.equal(p.get("vuelta"), "/tratados/isaias-53");
    assert.equal(p.get("estudio"), null);
  });

  it("Romanos 8:28 vuelve al tratado Para bien", () => {
    const p = q(
      urlPuenteRevelatio({
        ref: "Romanos 8:28",
        desde: "/tratados/para-bien",
      }),
    );
    assert.equal(p.get("libro"), "romanos");
    assert.equal(p.get("cap"), "8");
    assert.equal(p.get("vs"), "28");
    assert.equal(p.get("vuelta"), "/tratados/para-bien");
    assert.equal(p.get("estudio"), null);
  });

  it("un tomo vuelve al tomo; Santiago 2 no se sustituye por Santiago 1", () => {
    const cita = parseRef("Santiago 2");
    assert.ok(cita);
    assert.equal(
      versiculoCompanero(cita, ["Santiago 1:19–27", "Santiago 1:22–25"]),
      undefined,
    );
    const p = q(
      urlPuenteRevelatio({
        ref: "Santiago 2",
        desde: "/obras/la-fe-no-basta",
        companeros: ["Santiago 1:19–27", "Santiago 1:22–25"],
      }),
    );
    assert.equal(p.get("libro"), "santiago");
    assert.equal(p.get("cap"), "2");
    assert.equal(p.get("vs"), null);
    assert.equal(p.get("vuelta"), "/obras/la-fe-no-basta");
    assert.equal(p.get("estudio"), null);
  });

  it("si el tomo nombra solo el capítulo, hereda el versículo del aula o tratado del mismo capítulo", () => {
    const efata = q(
      urlPuenteRevelatio({
        ref: "Marcos 7",
        desde: "/obras/efata",
        companeros: ["Marcos 7:31–37"],
      }),
    );
    assert.equal(efata.get("cap"), "7");
    assert.equal(efata.get("vs"), "31");
    assert.equal(efata.get("vuelta"), "/obras/efata");
    assert.equal(efata.get("estudio"), null);

    const siervo = q(
      urlPuenteRevelatio({
        ref: "Isaías 53",
        desde: "/obras/el-siervo-no-tu",
        companeros: ["Isaías 53", "Isaías 53:5"],
      }),
    );
    assert.equal(siervo.get("cap"), "53");
    assert.equal(siervo.get("vs"), "5");
    assert.equal(siervo.get("vuelta"), "/obras/el-siervo-no-tu");
  });

  it("3 Juan 2 abre el único capítulo con versículo 2", () => {
    const p = q(
      urlPuenteRevelatio({
        ref: "3 Juan 2",
        desde: "/tratados/prospere-tu-alma",
      }),
    );
    assert.equal(p.get("libro"), "3-juan");
    assert.equal(p.get("cap"), "1");
    assert.equal(p.get("vs"), "2");
    assert.equal(p.get("vuelta"), "/tratados/prospere-tu-alma");
  });

  it("Filipenses 2 vuelve al aula", () => {
    const p = q(
      urlPuenteRevelatio({
        ref: "Filipenses 2:5–11",
        desde: "/estudios/filipenses-2",
      }),
    );
    assert.equal(p.get("libro"), "filipenses");
    assert.equal(p.get("cap"), "2");
    assert.equal(p.get("vs"), "5");
    assert.equal(p.get("vuelta"), "/estudios/filipenses-2");
    assert.equal(p.get("estudio"), "filipenses-2");
  });

  it("nunca usa la portada como vuelta y no inventa pregunta ni intención", () => {
    const p = q(urlPuenteRevelatio({ ref: "Marcos 1", desde: "/" }));
    assert.equal(p.get("casa"), "1");
    assert.equal(p.get("vuelta"), null);
    assert.equal(p.get("estudio"), null);
    assert.equal(p.get("pregunta"), null);
    assert.equal(p.get("intencion"), null);
  });

  it("lleva pregunta e intención solo si el origen las aporta", () => {
    const p = q(
      urlPuenteRevelatio({
        ref: "Nehemías 8:8",
        desde: "/tratados/el-texto-manda",
        pregunta: "¿Qué está escrito, no qué me dice?",
        intencion: "Oír el capítulo entero",
      }),
    );
    assert.equal(p.get("pregunta"), "¿Qué está escrito, no qué me dice?");
    assert.equal(p.get("intencion"), "Oír el capítulo entero");
    const sin = q(
      urlPuenteRevelatio({
        ref: "Nehemías 8:8",
        desde: "/tratados/el-texto-manda",
        pregunta: "  ",
        intencion: "",
      }),
    );
    assert.equal(sin.get("pregunta"), null);
    assert.equal(sin.get("intencion"), null);
  });

  it("una cita llegada al cuaderno abre ese versículo en el lector", () => {
    const p = q(urlPuenteRevelatio({ ref: "Juan 3:16", desde: "/cuaderno" }));
    assert.equal(p.get("libro"), "juan");
    assert.equal(p.get("cap"), "3");
    assert.equal(p.get("vs"), "16");
    assert.equal(p.get("casa"), "1");
    assert.equal(p.get("vuelta"), "/cuaderno");
    assert.equal(urlPuenteRevelatio({ ref: "no es una cita", desde: "/cuaderno" }), null);
  });

  it("el cuaderno vuelve al cuaderno con la cita, no al inicio", () => {
    const p = q(
      urlPuenteRevelatio({
        ref: "Filipenses 2:5–11",
        desde: "/cuaderno?ref=Filipenses 2:5–11",
      }),
    );
    assert.equal(p.get("vuelta"), "/cuaderno?ref=Filipenses 2:5–11");
    assert.equal(p.get("estudio"), null);
    assert.equal(p.get("vs"), "5");
  });
});
