import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { test } from "node:test";
import { fichas, obras } from "./content.ts";
import { sinopsisDe } from "./sinopsis.ts";
import {
  COACH_ASIN,
  COACH_SLUG,
  ENLACE_COACH,
  PROMO_FIN,
  PROMO_INICIO,
  fasePromoCoach,
  msHastaSiguienteFase,
  textosPromoCoach,
} from "./promo-coach.ts";

test("la ventana empieza el 20-11-2026 08:00 UTC y termina, exclusiva, el 25-11-2026 08:00 UTC", () => {
  assert.equal(PROMO_INICIO, Date.parse("2026-11-20T08:00:00.000Z"));
  assert.equal(PROMO_FIN, Date.parse("2026-11-25T08:00:00.000Z"));
  assert.equal(fasePromoCoach(Date.parse("2026-11-19T12:00:00.000Z")), "antes");
  assert.equal(fasePromoCoach(Date.parse("2026-11-20T07:59:59.000Z")), "antes");
  assert.equal(fasePromoCoach(PROMO_INICIO - 1), "antes");
  assert.equal(fasePromoCoach(PROMO_INICIO), "durante");
  assert.equal(fasePromoCoach(Date.parse("2026-11-22T15:00:00.000Z")), "durante");
  assert.equal(fasePromoCoach(Date.parse("2026-11-25T07:59:59.000Z")), "durante");
  assert.equal(fasePromoCoach(PROMO_FIN - 1), "durante");
  assert.equal(fasePromoCoach(PROMO_FIN), "despues");
  assert.equal(fasePromoCoach(Date.parse("2026-11-25T08:00:01.000Z")), "despues");
});

test("el aviso de cada fase no fija un precio y deja de decir gratis al cerrarse", () => {
  const antes = textosPromoCoach("antes");
  const durante = textosPromoCoach("durante");
  const despues = textosPromoCoach("despues");
  assert.equal(antes.destacado, "GRATIS del 20 al 24 de noviembre de 2026 en Amazon Kindle");
  assert.match(antes.aviso ?? "", /Promoción gratuita desde el 20 de noviembre de 2026/);
  assert.match(antes.aviso ?? "", /4:00 \(hora de Venezuela\)/);
  assert.equal(durante.destacado, "GRATIS en Amazon Kindle");
  assert.match(durante.aviso ?? "", /Del 20 al 24 de noviembre de 2026/);
  assert.match(durante.aviso ?? "", /marque 0/);
  assert.match(durante.aviso ?? "", /pueden variar según la tienda/);
  assert.equal(despues.destacado, null);
  assert.equal(despues.aviso, null);
  for (const fase of ["antes", "durante", "despues"] as const) {
    const texto = `${textosPromoCoach(fase).destacado ?? ""} ${textosPromoCoach(fase).aviso ?? ""}`;
    assert.equal(texto.includes("0.99"), false, fase);
    assert.equal(texto.includes("USD"), false, fase);
    assert.equal(/tapa blanda|pdf|epub/i.test(texto), false, fase);
    assert.equal(/gratis hoy|ya está gratis/i.test(texto), false, fase);
  }
});

test("el cambio de fase se puede programar sin cron", () => {
  const antes = Date.parse("2026-11-20T07:59:59.000Z");
  assert.equal(msHastaSiguienteFase(antes), PROMO_INICIO - antes);
  const durante = Date.parse("2026-11-22T15:00:00.000Z");
  assert.equal(msHastaSiguienteFase(durante), PROMO_FIN - durante);
  assert.equal(msHastaSiguienteFase(PROMO_FIN), null);
});

test("el libro entra fuera de la serie, solo Kindle, con la portada y el enlace directo", () => {
  assert.equal(obras.length, 9);
  assert.equal(obras.some((o) => o.slug === COACH_SLUG), false);
  const obra = fichas.find((o) => o.slug === COACH_SLUG);
  assert.ok(obra);
  assert.equal(obra.title, "Lo que tu coach no te dijo");
  assert.equal(obra.subtitulo, "Lo que promete el yo, lo que dice el Señor");
  assert.equal(obra.asinEbook, COACH_ASIN);
  assert.equal(obra.enlaceKindle, ENLACE_COACH);
  assert.equal(ENLACE_COACH, "https://www.amazon.com/dp/B0HRBG4G55");
  assert.equal(obra.soloKindle, true);
  assert.equal(obra.asinPrint, undefined);
  assert.equal(obra.isbnPrint, undefined);
  assert.equal(obra.lectura, 0);
  const texto = sinopsisDe(obra);
  assert.ok(texto.length >= 80 && texto.length <= 240, String(texto.length));
  assert.equal(existsSync(join(process.cwd(), "public", "TAPAS", `${COACH_SLUG}.jpg`)), true);
});
