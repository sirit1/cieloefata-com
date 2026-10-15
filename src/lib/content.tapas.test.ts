import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { test } from "node:test";

const SLUGS = [
  "efata",
  "el-siervo-no-tu",
  "bastate-mi-gracia",
  "cuando-el-cielo-se-cae",
  "el-altar-del-espejo",
  "de-una-misma-boca",
] as const;

test("los los libros cuelgan tapa KDP bajo public/TAPAS", () => {
  const catalog = readFileSync(join(process.cwd(), "src/lib/content.ts"), "utf8");
  assert.match(catalog, /title: "El Siervo, no tú"/);
  assert.match(catalog, /title: "Bástate"/);
  assert.match(catalog, /amazonTitle: "Bástate mi gracia"/);
  for (const slug of SLUGS) {
    const abs = join(process.cwd(), "public", "TAPAS", `${slug}.jpg`);
    assert.equal(existsSync(abs), true, `falta TAPAS/${slug}.jpg`);
  }
});
