import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { fichas, obras } from "./content.ts";
import { sinopsisDe } from "./sinopsis.ts";

function lin(c: number) {
  const s = c / 255;
  return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
}

function lum(hex: string) {
  const h = hex.replace("#", "");
  const r = Number.parseInt(h.slice(0, 2), 16);
  const g = Number.parseInt(h.slice(2, 4), 16);
  const b = Number.parseInt(h.slice(4, 6), 16);
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

/** Relación WCAG 2.x. AA: 4.5 texto normal, 3 texto grande y componentes de interfaz. */
export function contraste(a: string, b: string) {
  const hi = Math.max(lum(a), lum(b));
  const lo = Math.min(lum(a), lum(b));
  return (hi + 0.05) / (lo + 0.05);
}

test("el oro de las casas claras cumple AA sobre pergamino", () => {
  const css = readFileSync(new URL("../styles.css", import.meta.url), "utf8");
  assert.match(css, /casa-estudios, \.casa-tratados, \.casa-escuela/);
  assert.match(css, /--color-gold:\s*#6e4a12/);
  assert.match(css, /--color-ink:\s*#1a2340/);
  // El fallo del botón «Estudio»: tinta clara del modo oscuro sobre el cuaderno.
  assert.ok(contraste("#ece5d6", "#fdfdfa") < 3);
  assert.ok(contraste("#d9b871", "#fdfdfa") < 3);
  // Ancla que usa el modo oscuro dentro de esas casas.
  assert.ok(contraste("#1a2340", "#fdfdfa") >= 4.5);
  assert.ok(contraste("#6e4a12", "#fdfdfa") >= 4.5);
  assert.ok(contraste("#6e4a12", "#f6efdc") >= 4.5);
  assert.ok(contraste("#6e4a12", "#fffaf3") >= 4.5);
  assert.ok(contraste("#6e4a12", "#efe5cf") >= 4.5);
  assert.ok(contraste("#7a5414", "#fdfdfa") >= 4.5);
  // Vitrina de libros: oro claro sobre azul noche.
  assert.ok(contraste("#d9b871", "#0c1018") >= 4.5);
  assert.ok(contraste("#d9b871", "#141a2a") >= 4.5);
  assert.ok(contraste("#f0d9a0", "#0c1018") >= 4.5);
  assert.ok(contraste("#f3ead7", "#0c1018") >= 4.5);
  assert.ok(contraste("#0c1018", "#d9b871") >= 4.5);
  // Filete del botón: el oro pálido no llega a 3:1; el oro de casa sí.
  assert.ok(contraste("#c4a35a", "#fdfdfa") < 3);
  assert.ok(contraste("#6e4a12", "#fdfdfa") >= 3);
});

test("cada tapa tiene sinopsis tomada de su ficha, sin el texto viejo de autoayuda", () => {
  for (const obra of [...obras, ...fichas]) {
    const texto = sinopsisDe(obra);
    assert.ok(texto.length >= 80, obra.slug);
    assert.ok(texto.length <= 240, `${obra.slug} ${texto.length}`);
    assert.equal(texto.includes("Oratoria"), false, obra.slug);
  }
  const callar = fichas.find((o) => o.slug === "callar-para-ganar");
  assert.match(sinopsisDe(callar!), /instrumento de vida/);
  const mundo = fichas.find((o) => o.slug === "el-mundo-pregunta-dios-responde");
  assert.match(sinopsisDe(mundo!), /creyentes de otras tradiciones/);
});
