import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import {
  conVueltaCielo,
  destinoRevelatio,
  resolverVolver,
  SCRIPT_VOLVER,
  urlSegura,
  vieneDeRevelatio,
} from "./volver-revelatio.ts";

function lin(c: number) {
  const s = c / 255;
  return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
}
function contraste(a: string, b: string) {
  const lum = (hex: string) => {
    const h = hex.replace("#", "");
    const r = Number.parseInt(h.slice(0, 2), 16);
    const g = Number.parseInt(h.slice(2, 4), 16);
    const bl = Number.parseInt(h.slice(4, 6), 16);
    return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(bl);
  };
  const hi = Math.max(lum(a), lum(b));
  const lo = Math.min(lum(a), lum(b));
  return (hi + 0.05) / (lo + 0.05);
}

const base = { ref: null, volver: null, referrer: "", guardado: null, oculto: false };

test("reconoce la visita desde RevelatiO y no un ref cualquiera", () => {
  assert.equal(vieneDeRevelatio("revelatio", ""), true);
  assert.equal(vieneDeRevelatio(" Revelatio ", ""), true);
  assert.equal(vieneDeRevelatio("abc123", ""), false);
  assert.equal(vieneDeRevelatio(null, "https://revelatio.app/episodios"), true);
  assert.equal(vieneDeRevelatio(null, "https://www.revelatio.app/"), true);
  assert.equal(vieneDeRevelatio(null, "https://cieloefata.com/"), false);
  assert.equal(vieneDeRevelatio(null, "https://revelatio.app.evil.com/"), false);
  assert.equal(vieneDeRevelatio(null, "https://evilrevelatio.app/"), false);
});

test("el destino solo puede ser una ruta de https://revelatio.app", () => {
  assert.equal(destinoRevelatio("/episodios", ""), "https://revelatio.app/episodios");
  assert.equal(
    destinoRevelatio("/episodios/optimizar-el-ego", "https://evil.com/"),
    "https://revelatio.app/episodios/optimizar-el-ego",
  );
  assert.equal(
    destinoRevelatio("https://www.revelatio.app/episodios?x=1#a", ""),
    "https://revelatio.app/episodios?x=1#a",
  );
  assert.equal(destinoRevelatio(null, "https://revelatio.app/libros/efata"), "https://revelatio.app/libros/efata");
  assert.equal(destinoRevelatio("https://evil.com/phish", "https://revelatio.app/episodios"), "https://revelatio.app/episodios");
  assert.equal(destinoRevelatio("//evil.com", ""), "https://revelatio.app/");
  assert.equal(destinoRevelatio("javascript:alert(1)", ""), "https://revelatio.app/");
  assert.equal(destinoRevelatio("https://revelatio.app.evil.com/", ""), "https://revelatio.app/");
  assert.equal(destinoRevelatio("https://evil.com@revelatio.app/", ""), "https://revelatio.app/");
  assert.equal(destinoRevelatio("https://revelatio.app@evil.com/", ""), "https://revelatio.app/");
  assert.equal(destinoRevelatio("https://revelatio.app:8443/", ""), "https://revelatio.app/");
  assert.equal(urlSegura("http://revelatio.app/"), null);
  assert.equal(destinoRevelatio(null, "https://cieloefata.com/estudios"), "https://revelatio.app/");
});

test("la señal se guarda y el cierre la oculta durante la sesión", () => {
  assert.equal(
    resolverVolver({ ...base, ref: "revelatio", volver: "/episodios" }),
    "https://revelatio.app/episodios",
  );
  assert.equal(
    resolverVolver({ ...base, guardado: "https://revelatio.app/episodios" }),
    "https://revelatio.app/episodios",
  );
  assert.equal(resolverVolver({ ...base, guardado: "https://evil.com/" }), null);
  assert.equal(
    resolverVolver({ ...base, ref: "revelatio", volver: "/episodios", oculto: true }),
    null,
  );
  assert.match(SCRIPT_VOLVER, /revelatio\.app/);
});

test("cada enlace a RevelatiO lleva la vuelta a la ruta actual", () => {
  assert.equal(
    conVueltaCielo("https://revelatio.app/episodios", "/escuela"),
    "https://revelatio.app/episodios?ref=cieloefata&volver=%2Fescuela",
  );
  const conQuery = conVueltaCielo(
    "https://revelatio.app/libros/efata?utm_source=web&utm_medium=cta&utm_campaign=efata#tapa",
    "/obras/efata?q=1#aqui",
  );
  const u = new URL(conQuery);
  assert.equal(u.searchParams.get("utm_source"), "web");
  assert.equal(u.searchParams.get("utm_medium"), "cta");
  assert.equal(u.searchParams.get("utm_campaign"), "efata");
  assert.equal(u.searchParams.get("ref"), "cieloefata");
  assert.equal(u.searchParams.get("volver"), "/obras/efata");
  assert.equal(u.hash, "#tapa");
  assert.equal(conVueltaCielo(conQuery, "/obras/efata"), conQuery);
  assert.equal(
    conVueltaCielo("https://www.revelatio.app/leer?libro=marcos&cap=1", "/estudios/marcos-7"),
    "https://www.revelatio.app/leer?libro=marcos&cap=1&ref=cieloefata&volver=%2Festudios%2Fmarcos-7",
  );
  assert.equal(conVueltaCielo("https://evil.com/episodios", "/escuela"), "https://evil.com/episodios");
  assert.equal(conVueltaCielo("https://revelatio.app.evil.com/", "/escuela"), "https://revelatio.app.evil.com/");
  assert.equal(conVueltaCielo("https://revelatio.app:8443/episodios", "/escuela"), "https://revelatio.app:8443/episodios");
  assert.equal(conVueltaCielo("https://evil.com@revelatio.app/episodios", "/escuela"), "https://evil.com@revelatio.app/episodios");
  assert.equal(
    conVueltaCielo("https://revelatio.app/episodios", "//evil.com"),
    "https://revelatio.app/episodios?ref=cieloefata&volver=%2F",
  );
});

test("la pastilla de regreso cumple AA: tinta sobre oro", () => {
  const css = readFileSync(new URL("../styles.css", import.meta.url), "utf8");
  assert.match(css, /\.volver-pill[\s\S]*background:\s*#d9b871/);
  assert.match(css, /\.volver-pill[\s\S]*color:\s*#1a2340/);
  assert.ok(contraste("#1a2340", "#d9b871") >= 4.5);
  assert.ok(contraste("#1a2340", "#f6efdc") >= 4.5);
});
