import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  ESTUDIO_SEMANA_SLUG,
  TRATADO_MES_SLUG,
  etiquetaRango,
  fechaCasa,
  fechaLegible,
  fechasDePack,
  lineaFechas,
  mesProximo,
  mesVigente,
  nombreMes,
  semanaProxima,
  semanaVigente,
} from "./calendario.ts";

describe("calendario editorial", () => {
  it("resuelve la semana de Filipenses 2 el 23 de septiembre de 2026", () => {
    const d = new Date("2026-09-23T16:00:00Z");
    const s = semanaVigente(d);
    assert.equal(s.studySlug, ESTUDIO_SEMANA_SLUG);
    assert.equal(s.desde, "2026-09-22");
    assert.match(etiquetaRango(s.desde, s.hasta), /septiembre/);
  });

  it("ofrece la próxima semana atenuable mientras corre la vigente", () => {
    const d = new Date("2026-09-23T16:00:00Z");
    const next = semanaProxima(d);
    assert.ok(next);
    assert.equal(next?.studySlug, "2-pedro-1");
  });

  it("nombra el tratado de septiembre y deja octubre como próximo", () => {
    const d = new Date("2026-09-23T16:00:00Z");
    assert.equal(mesVigente(d).tratadoSlug, TRATADO_MES_SLUG);
    assert.equal(mesProximo(d)?.tratadoSlug, "el-texto-manda");
    assert.match(nombreMes("2026-09"), /septiembre/i);
  });

  it("fecha el aula con el lunes del calendario o con el inventario, sin adelantar el mes", () => {
    assert.deepEqual(fechasDePack("marcos-7", "estudio"), {
      published: "2026-09-15",
      modified: "2026-09-24",
    });
    assert.deepEqual(fechasDePack("filipenses-2", "estudio"), {
      published: "2026-09-22",
      modified: "2026-09-24",
    });
    assert.equal(fechasDePack("2-pedro-1", "estudio").published, "2026-09-23");
    assert.equal(fechasDePack("isaias-53", "tratado").published, "2026-09-23");
    assert.equal(fechasDePack("el-texto-manda", "tratado").published, "2026-09-23");
    assert.match(fechaLegible("2026-09-15"), /15 de septiembre de 2026/);
    assert.match(lineaFechas(fechasDePack("marcos-7", "estudio")), /Publicado el 15 de septiembre de 2026/);
    assert.match(lineaFechas(fechasDePack("marcos-7", "estudio")), /Revisado el 24 de septiembre de 2026/);
  });

  it("formatea la fecha de casa en YYYY-MM-DD", () => {
    assert.match(fechaCasa(new Date("2026-09-23T16:00:00Z")), /^\d{4}-\d{2}-\d{2}$/);
  });
});
