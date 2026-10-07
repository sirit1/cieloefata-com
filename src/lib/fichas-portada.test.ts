import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { MESES, SEMANAS } from "./calendario.ts";
import { DECISION_AULA } from "./decisiones-aula.ts";
import { ESTUDIOS_INDICE } from "./estudios-indice.ts";
import { FICHA_ESTUDIO, FICHA_TRATADO } from "./fichas-portada.ts";
import { studies } from "./studies.ts";
import { tratados } from "./tratados.ts";
import { TRATADOS_INDICE } from "./tratados-indice.ts";
import { LAB_SLUGS } from "./labs.ts";
import { LABORATORIOS } from "./verdad.ts";

describe("fichas de portada", () => {
  it("coincide con el aula y no omite ninguna semana del calendario", () => {
    for (const semana of SEMANAS) {
      assert.ok(semana.impacto && semana.impacto.length > 40);
      const ficha = FICHA_ESTUDIO[semana.studySlug];
      const study = studies.find((s) => s.slug === semana.studySlug);
      assert.ok(ficha, semana.studySlug);
      assert.ok(study, semana.studySlug);
      assert.equal(ficha.title, study.title);
      assert.equal(ficha.ref, study.ref);
    }
  });

  it("coincide con el tratado del mes", () => {
    for (const mes of MESES) {
      assert.ok(mes.impacto && mes.impacto.length > 40);
      const ficha = FICHA_TRATADO[mes.tratadoSlug];
      const tratado = tratados.find((t) => t.slug === mes.tratadoSlug);
      assert.ok(ficha, mes.tratadoSlug);
      assert.ok(tratado, mes.tratadoSlug);
      assert.equal(ficha.title, tratado.title);
      assert.equal(ficha.ref, tratado.ref);
    }
  });

  it("el índice de citas no se desalinea del corpus", () => {
    const aulasIndice = ESTUDIOS_INDICE.filter((row) => !row.obraHref);
    const obrasIndice = ESTUDIOS_INDICE.filter((row) => row.obraHref);
    assert.equal(aulasIndice.length, studies.length);
    assert.ok(obrasIndice.some((row) => row.slug === "el-paraclito-eterno"));
    for (const row of aulasIndice) {
      const study = studies.find((s) => s.slug === row.slug);
      assert.ok(study, row.slug);
      assert.equal(row.title, study.title);
      assert.equal(row.ref, study.ref);
      assert.equal(row.busca, study.ver.slice(0, 220));
      assert.equal(DECISION_AULA[row.slug], study.decision);
    }
    for (const row of obrasIndice) {
      assert.ok(row.obraHref?.startsWith("/obras/"));
      assert.ok(row.busca.length > 40);
    }
  });

  it("el índice de tratados no se desalinea del corpus", () => {
    assert.equal(TRATADOS_INDICE.length, tratados.length);
    for (const row of TRATADOS_INDICE) {
      const tratado = tratados.find((t) => t.slug === row.slug);
      assert.ok(tratado, row.slug);
      assert.equal(row.n, tratado.n);
      assert.equal(row.title, tratado.title);
      assert.equal(row.ref, tratado.ref);
      assert.equal(row.blurb, tratado.blurb);
      assert.equal(row.pack, tratado.pack);
    }
  });

  it("el rótulo de yunque no se desalinea del manual", () => {
    assert.deepEqual(
      LABORATORIOS.map((l) => l.slug),
      [...LAB_SLUGS],
    );
  });
});
