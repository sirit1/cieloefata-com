import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { mismoLibro, revelatioDeLibro } from "./libro.ts";
import { OBJECIONES } from "./objeciones.ts";

describe("descubrimiento", () => {
  it("reconoce el libro de un pasaje y no confunde Job con Santiago", () => {
    assert.equal(mismoLibro("Filipenses 2:5–11", "Filipenses"), true);
    assert.equal(mismoLibro("Santiago 1:19–27", "Santiago"), true);
    assert.equal(mismoLibro("Isaías 53:5", "Isaías"), true);
    assert.equal(mismoLibro("Salmo 22", "Salmos"), true);
    assert.equal(mismoLibro("Filipenses 2:5–11", "Job"), false);
  });

  it("abre RevelatiO por nombre de libro aunque la cita sea abreviada", () => {
    const href = revelatioDeLibro("Génesis", "Gn. 3:15");
    assert.ok(href);
    assert.match(href ?? "", /libro=genesis/);
    assert.match(href ?? "", /cap=3/);
  });

  it("tiene al menos doce objeciones con lead y tratado real", () => {
    assert.ok(OBJECIONES.length >= 12);
    assert.ok(OBJECIONES.every((o) => o.lead.trim().length > 40 && o.tratadoSlug));
    assert.ok(OBJECIONES.some((o) => o.tratadoSlug === "todo-lo-puedo"));
    assert.ok(OBJECIONES.some((o) => o.tratadoSlug === "isaias-53"));
  });
});
