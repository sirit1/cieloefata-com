import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { test } from "node:test";
import { DESCRIPCION_VERSICULOS, VERSICULOS_CONTEXTO, faqJsonLd } from "./versiculos-contexto.ts";
import { tratados } from "./tratados.ts";

const sitemap = readFileSync(new URL("../../public/sitemap.xml", import.meta.url), "utf8");
const vercel = JSON.parse(readFileSync(new URL("../../vercel.json", import.meta.url), "utf8"));

test("cada versículo: título, descripción 120–160, OG, sitemap, tratado y redirección", () => {
  const titulos = new Set<string>();
  for (const v of VERSICULOS_CONTEXTO) {
    assert.ok(v.titulo.startsWith(`¿Qué significa ${v.ref}?`), v.slug);
    assert.ok(!titulos.has(v.titulo));
    titulos.add(v.titulo);
    assert.ok(v.description.length >= 120 && v.description.length <= 160, `${v.slug} ${v.description.length}`);
    assert.ok(existsSync(new URL(`../../public${v.og}`, import.meta.url)), v.og);
    assert.ok(sitemap.includes(`https://www.cieloefata.com/versiculos/${v.slug}</loc>`), v.slug);
    assert.ok(!sitemap.includes(`https://www.cieloefata.com/preguntas/${v.slug}</loc>`), v.slug);
    assert.ok(tratados.some((t) => t.slug === v.tratado.slug && t.pack), v.tratado.slug);
    assert.ok(
      vercel.redirects.some((r: { source: string; destination: string }) => r.source === `/preguntas/${v.slug}` && r.destination === `/versiculos/${v.slug}`),
    );
    assert.equal(v.verdad.palabras.every((p) => /^[HG]\d+$/.test(p.strong) && p.prosa.includes(p.strong)), true);
    assert.ok(v.texto && v.parrafo.versos.some((x) => x.t === v.texto), "el versículo está en su párrafo");
    const faq = faqJsonLd(v);
    assert.equal(faq["@type"], "FAQPage");
    assert.equal(faq.mainEntity.length, v.faq.length);
  }
  assert.ok(sitemap.includes("https://www.cieloefata.com/versiculos</loc>"));
  assert.ok(DESCRIPCION_VERSICULOS.length >= 120 && DESCRIPCION_VERSICULOS.length <= 160);
});
