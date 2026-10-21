import assert from "node:assert/strict";
import { test } from "node:test";
import { efataGratis, tiendaDePais, urlKindleDePais, OTRAS_TIENDAS, urlKindle } from "./kindle-tienda.ts";

test("cada país va a su tienda; el resto del mundo, amazon.com", () => {
  const casos: Record<string, string> = {
    ES: "es", US: "com", MX: "com.mx", BR: "com.br", DE: "de", AT: "de", FR: "fr", IT: "it",
    NL: "nl", GB: "co.uk", CA: "ca", AU: "com.au", IN: "in", JP: "co.jp",
    VE: "com", CO: "com", AR: "com", CL: "com", PE: "com", EC: "com", "": "com",
  };
  for (const [pais, tld] of Object.entries(casos)) assert.equal(tiendaDePais(pais), tld, pais);
  assert.equal(tiendaDePais(undefined), "com");
  assert.equal(tiendaDePais(" es "), "es");
});

test("la URL lleva nodl=0 para que el iPhone no la abra en la app de Amazon", () => {
  assert.equal(urlKindleDePais("ES"), "https://www.amazon.es/dp/B0HJ15ZXL3?nodl=0&utm_source=cieloefata&utm_medium=kindle");
  assert.equal(urlKindleDePais("VE"), "https://www.amazon.com/dp/B0HJ15ZXL3?nodl=0&utm_source=cieloefata&utm_medium=kindle");
  for (const t of OTRAS_TIENDAS) assert.match(urlKindle(t.tld), /\?nodl=0&utm_source=cieloefata&utm_medium=kindle$/);
});

test("la promoción gratis termina el 22-10-2026 a las 06:59 UTC", () => {
  assert.equal(efataGratis(Date.parse("2026-10-22T06:58:59Z")), true);
  assert.equal(efataGratis(Date.parse("2026-10-22T06:59:00Z")), false);
});
