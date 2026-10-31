import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { test } from "node:test";
import { CORPUS } from "./content.ts";
import { PARACLITO } from "./paraclito.ts";
import { DESCRIPCION_ARTICULOS, articulos } from "./articulos.ts";
import { CRISOL_ORIGEN } from "./crisol.ts";
import { CUADERNO_VACIO } from "./copy-nivel.ts";
import { SELLO } from "./identidad.ts";
import { ESCRITURA } from "./pilar.ts";
import { obras, obrasDesdeAula, qrRevelatioPath, urlRevelatioLibro } from "./content.ts";
import { studies } from "./studies.ts";
import { tipoDe } from "./clasificacion.ts";
import { entradaTratado, tratados, tratadosPublicados } from "./tratados.ts";
import { parrafosDe } from "./libros/cargar.ts";
import { fechasArticulo } from "./calendario.ts";
import { ESTUDIOS_DRIVE, TRATADOS_DRIVE, estudioTienePack } from "./catalogo.ts";
import {
  PERSONA_AUTOR,
  SITE_NAME,
  SITE_ORIGIN,
  SITE_TITLE,
  amazonDeObra,
  camposLibro,
  metaDescription,
  pageHead,
  tituloEstudio,
  tituloSeccion,
  tituloTratado,
} from "./seo.ts";

const secciones: Array<[string, string, string, string?]> = [
  ["/", SITE_TITLE, "Escuela de estudio bíblico de Alejandro Sirit: leer el capítulo entero, estudiarlo con el método V.E.R.D.A.D. y obedecer lo que Dios dice."],
  ["/canon", tituloSeccion("Canon"), "Sesenta y seis libros. Siete secciones recorren el canon. La ley, los profetas y los salmos hablan de Cristo.", ESCRITURA.body[0]],
  ["/metodo", tituloSeccion("Cómo leer"), "El Método V.E.R.D.A.D.: Ver, Entorno, Revelación, Doctrina, Argumento y Decisión. El texto manda; el comentario se sienta atrás."],
  ["/estudios", tituloSeccion("Estudios"), "Estudios bíblicos: un pasaje completo, leído con el método V.E.R.D.A.D., hasta un paso concreto de obediencia.", "Cada estudio recorre un pasaje completo con el método V.E.R.D.A.D. —Ver, Entorno, Revelación, Doctrina, Argumento y Decisión—. Primero leemos el capítulo entero; después lo estudiamos juntos hasta llegar a un paso concreto de obediencia, que conviene compartir con alguien de confianza."],
  ["/tratados", tituloSeccion("Tratados"), "Tratados bíblicos: versículos muy citados, leídos otra vez dentro del capítulo que los sostiene.", "Cada tratado toma un versículo muy citado, y a menudo citado fuera de lugar, y lo devuelve al capítulo donde Dios lo puso. Primero leemos el pasaje completo; después dejamos que el texto hable antes que nosotros. Cada mes destacamos uno."],
  ["/obras", tituloSeccion("Los libros"), "Orden de lectura de los libros de Alejandro Sirit, publicados por Editorial Cielo Efata. Éfata abre el camino, y El Siervo, no tú, le sigue.", CORPUS.gate],
  ["/sello", tituloSeccion("El sello"), "Post tenebras lux: después de las tinieblas, la luz. El sello de Cielo Efata confiesa al León de Judá, al Cordero inmolado y al Espíritu que da luz.", SELLO.gate],
  ["/palabra", tituloSeccion("Palabra"), "Una raíz hebrea o griega, tres pasajes. El léxico no predica: el pasaje predica.", "La misma raíz, hebrea o griega, se lee en tres lugares del canon para no quedarnos con el diccionario. El léxico no predica: el pasaje predica. El que se lleva solo la glosa se lleva un ídolo pequeño, porque una palabra sin capítulo es versiculitis con Strong."],
  ["/cuaderno", tituloSeccion("Cuaderno"), "Sed hacedores. Aquí escribes lo que el texto afirma, un paso concreto de obediencia y con quién lo compartirás.", CUADERNO_VACIO],
  ["/crisol", tituloSeccion("C.R.I.S.O.L."), "C.R.I.S.O.L.: seis preguntas para cerrar un estudio con una obediencia que sale del texto. Oír y no hacer no es un retraso inocente.", `${CRISOL_ORIGEN.subtitulo} ${CRISOL_ORIGEN.quien}`],
  ["/guias", tituloSeccion("Guías"), "Guías prácticas: cómo usar la concordancia Strong, cómo leer un pasaje, cómo pasar del texto a la conversación y cómo responder una pregunta difícil."],
  ["/sostener", tituloSeccion("Sostener"), "Cielo Efata no cobra por leer la Biblia. Las ofrendas sostienen los estudios, los libros y su impresión. WhatsApp +58 424 167 4909."],
  ["/buscar", tituloSeccion("Buscar"), "Busca por pasaje o por tema en los estudios bíblicos, los tratados y las respuestas a versículos sacados de contexto en Cielo Efata.", "Busca entre los estudios, los tratados y las respuestas a versículos sacados de contexto. Escribe un pasaje —por ejemplo, Filipenses 4:13 o Isaías 53— o un tema."],
  ["/camino", tituloSeccion("El camino"), "Conocer a Dios, convicción de pecado, arrepentimiento, bautismo, conversión y firmeza. Cada paso se lee en su capítulo entero, con su estudio cuando lo hay."],
  ["/nosotros", tituloSeccion("Nosotros"), "Alejandro Sirit dirige Editorial Cielo Efata, una escuela de lectura de la Escritura entera. Escríbenos por WhatsApp al +58 424 167 4909."],
  ["/objeciones", tituloSeccion("Objeciones"), "Versículos que se citan solos —Filipenses 4:13, Jeremías 29:11 y los demás— leídos otra vez dentro de su capítulo en los tratados de Cielo Efata."],
];

test("títulos únicos y descripciones de 120 a 160", async () => {
  const titles = new Map<string, string>();
  const fails: string[] = [];
  function note(label: string, title: string, desc: string) {
    const prev = titles.get(title);
    if (prev) fails.push(`título repetido «${title}» en ${prev} y ${label}`);
    titles.set(title, label);
    if (desc.length < 120 || desc.length > 160 || !/[.!?]$/.test(desc)) {
      fails.push(`${label} ${desc.length}: ${desc}`);
    }
  }
  for (const [path, title, raw, detalle] of secciones) note(path, title, metaDescription(raw, detalle ?? ""));
  for (const obra of obras) {
    note(`/obras/${obra.slug}`, obra.seoTitle, obra.seoDescription);
  }
  note(`/obras/${PARACLITO.slug}`, PARACLITO.seoTitle, PARACLITO.seoDescription);
  note("/articulos", tituloSeccion("Artículos"), DESCRIPCION_ARTICULOS);
  for (const a of articulos) note(`/articulos/${a.slug}`, a.seoTitle, a.seoDescription);
  for (const study of studies) {
    note(
      `/estudios/${study.slug}`,
      tituloEstudio(study.ref),
      metaDescription(`${study.ref}. ${study.ver}`, study.passage),
    );
  }
  for (const t of tratadosPublicados()) {
    const cuerpo = await parrafosDe(t.slug);
    note(`/tratados/${t.slug}`, tituloTratado(t.title, tipoDe(t.slug, "tratado")), metaDescription(t.blurb, entradaTratado(cuerpo)));
  }
  assert.deepEqual(fails, []);
});

test("solo los libros sin edición publicada en Amazon quedan sin ficha", () => {
  // Comprobado en amazon.com el 17-10-2026: Pórtico, De una misma boca y Nunca tocarás mi fe aún no están publicados.
  const sin = obras.filter((o) => !amazonDeObra(o)).map((o) => o.slug);
  assert.deepEqual(sin, ["portico-a-la-escritura", "de-una-misma-boca", "nunca-tocaras-mi-fe"]);
  for (const o of obras) assert.equal(Boolean(o.sinAmazon), !amazonDeObra(o), o.slug);
});

test("ASIN e ISBN de imprenta coinciden con las fichas publicadas en Amazon", () => {
  const fichas = obras
    .filter((o) => o.asinEbook || o.asinPrint || o.isbnPrint)
    .map((o) => [o.slug, o.asinEbook, o.asinPrint, o.isbnPrint]);
  assert.deepEqual(fichas, [
    ["efata", "B0HJ15ZXL3", "B0HKSRS7TZ", "9798172426322"],
    ["el-siervo-no-tu", "B0HKQGBYV4", undefined, undefined],
    ["bastate-mi-gracia", "B0HKQHNRBC", "B0HN7MTCZ1", "9798162809135"],
    ["cuando-el-cielo-se-cae", "B0HN5YD6LP", undefined, undefined],
    ["el-altar-del-espejo", "B0HJ6B33V3", undefined, undefined],
    ["diakrisis", "B0HN6G4NG4", "B0HN6BFCF2", "9798162796060"],
  ]);
  for (const o of obras.filter((x) => x.isbnPrint)) assert.equal(camposLibro(o).isbn, o.isbnPrint, o.slug);
  for (const slug of ["de-una-misma-boca", "portico-a-la-escritura", "nunca-tocaras-mi-fe"]) {
    const libro = camposLibro(obras.find((x) => x.slug === slug)!);
    assert.equal("isbn" in libro, false, slug);
    assert.equal("sameAs" in libro, false, slug);
  }
  // Ediciones viejas que no deben volver: Callar para ganar, el manual anterior de Job y la tapa blanda vieja del Altar.
  const fuente = readFileSync(new URL("./content.ts", import.meta.url), "utf8");
  for (const viejo of ["B0GPF3NHQT", "9798176466690", "B0HKT237N1", "B0HKSZ6B9T", "9798176414967"]) {
    assert.equal(fuente.includes(viejo), false, viejo);
  }
});

function robotsDe(head: ReturnType<typeof pageHead>) {
  const tag = head.meta.find((m) => "name" in m && m.name === "robots");
  return tag && "content" in tag ? tag.content : undefined;
}

test("el pack se indexa; la clase sin carpeta no", () => {
  const abierta = pageHead({ path: "/estudios/filipenses-2", index: estudioTienePack("filipenses-2") });
  assert.equal(robotsDe(abierta), undefined);
  assert.equal(abierta.links[0]?.href, `${SITE_ORIGIN}/estudios/filipenses-2`);
  const suelta = pageHead({ path: "/estudios/romanos-1", index: estudioTienePack("romanos-1") });
  assert.equal(robotsDe(suelta), "noindex");
  assert.equal(suelta.links[0]?.href, `${SITE_ORIGIN}/estudios/romanos-1`);
});

test("el sitemap lista solo el pack validado y fecha lo que tiene fecha real", () => {
  const xml = readFileSync(new URL("../../public/sitemap.xml", import.meta.url), "utf8");
  const bloques = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => {
    const cuerpo = m[1] ?? "";
    return {
      loc: cuerpo.match(/<loc>([^<]+)<\/loc>/)?.[1] ?? "",
      lastmod: cuerpo.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1],
    };
  });
  const locs = new Set(bloques.map((b) => b.loc));

  for (const slug of ESTUDIOS_DRIVE) {
    const study = studies.find((s) => s.slug === slug);
    assert.ok(study, slug);
    const loc = `${SITE_ORIGIN}/estudios/${slug}`;
    const bloque = bloques.find((b) => b.loc === loc);
    assert.ok(bloque, loc);
    assert.equal(
      bloque.lastmod,
      fechasArticulo({ clase: "estudio", slug, pack: true }).modified,
    );
  }
  for (const slug of TRATADOS_DRIVE) {
    const t = tratados.find((row) => row.slug === slug);
    assert.ok(t, slug);
    const loc = `${SITE_ORIGIN}/tratados/${slug}`;
    const bloque = bloques.find((b) => b.loc === loc);
    assert.ok(bloque, loc);
    assert.equal(
      bloque.lastmod,
      fechasArticulo({ clase: "tratado", slug, pack: true, n: t.n }).modified,
    );
  }
  for (const obra of obras) {
    const loc = `${SITE_ORIGIN}/obras/${obra.slug}`;
    const bloque = bloques.find((b) => b.loc === loc);
    assert.ok(bloque, loc);
    assert.equal(bloque.lastmod, undefined);
  }

  const paraclito = bloques.find((b) => b.loc === `${SITE_ORIGIN}/obras/el-paraclito-eterno`);
  assert.ok(paraclito);
  assert.equal(paraclito.lastmod, undefined);
  const trinidad = bloques.find((b) => b.loc === `${SITE_ORIGIN}/estudios/un-solo-dios-tres-personas`);
  assert.ok(trinidad);
  assert.equal(trinidad.lastmod, undefined);
  assert.equal(locs.has(`${SITE_ORIGIN}/estudios/romanos-1`), false);
  assert.equal(locs.has(`${SITE_ORIGIN}/estudios/filipenses-2`), true);
  assert.equal(locs.has(`${SITE_ORIGIN}/tratados/isaias-53`), true);
  assert.equal(locs.has(`${SITE_ORIGIN}/tratados/no-juzgueis`), true);
  assert.equal(locs.has(`${SITE_ORIGIN}/tratados/este-mismo-jesus`), true);
  assert.equal(locs.has(`${SITE_ORIGIN}/tratados/juan-1`), false);
  assert.equal(locs.has(`${SITE_ORIGIN}/`), true);
  assert.equal(ESTUDIOS_DRIVE.length, 13);
  assert.equal(TRATADOS_DRIVE.length, 14);
  assert.equal(tratados.length, 16);
  // Solo las dos excepciones aprobadas se publican sin pack.
  assert.deepEqual(tratados.filter((t) => t.soloEs).map((t) => t.slug), ["este-mismo-jesus", "no-juzgueis"]);
  assert.ok(locs.has(`${SITE_ORIGIN}/articulos`));
  for (const a of articulos) {
    const bloque = bloques.find((b) => b.loc === `${SITE_ORIGIN}/articulos/${a.slug}`);
    assert.ok(bloque, a.slug);
    assert.equal(bloque.lastmod, a.published);
  }
  const conFecha = bloques.filter((b) => b.lastmod);
  assert.equal(
    conFecha.length,
    ESTUDIOS_DRIVE.length + TRATADOS_DRIVE.length + articulos.length + tratados.filter((t) => t.soloEs).length,
  );
});

function metaDe(head: ReturnType<typeof pageHead>, name: string) {
  const tag = head.meta.find((m) => "name" in m && m.name === name);
  return tag && "content" in tag ? tag.content : undefined;
}

function propDe(head: ReturnType<typeof pageHead>, property: string) {
  const tag = head.meta.find((m) => "property" in m && m.property === property);
  return tag && "content" in tag ? tag.content : undefined;
}

test("cada libro tiene title, description y subtítulo SEO, y el Book conserva el nombre llano", () => {
  assert.equal(obras.length, 9);
  for (const obra of obras) {
    assert.ok(obra.seoTitle.includes(obra.title) || obra.slug === "bastate-mi-gracia");
    assert.ok(obra.subtitulo.length > 0);
    assert.notEqual(obra.seoTitle, obra.title);
    assert.equal(obra.seoTitle.includes("Dr."), false);
    const head = pageHead({
      path: `/obras/${obra.slug}`,
      title: obra.seoTitle,
      description: obra.seoDescription,
      exact: true,
    });
    const titleTag = head.meta.find((m) => "title" in m && !("property" in m) && !("name" in m));
    assert.equal(titleTag && "title" in titleTag ? titleTag.title : undefined, obra.seoTitle);
    assert.equal(metaDe(head, "description"), obra.seoDescription);
    assert.equal(propDe(head, "og:title"), obra.seoTitle);
    assert.equal(propDe(head, "og:description"), obra.seoDescription);
    assert.equal(metaDe(head, "twitter:title"), obra.seoTitle);
    assert.equal(metaDe(head, "twitter:description"), obra.seoDescription);
    assert.equal(head.links.length, 1);
    assert.equal(head.links[0]?.href, `${SITE_ORIGIN}/obras/${obra.slug}`);
    const libro = camposLibro(obra);
    assert.equal(libro.name, obra.title);
    assert.equal(libro.author.name, "Alejandro Sirit");
    assert.equal(libro.author.name.startsWith("Dr."), false);
  }
  assert.equal(obras.find((o) => o.slug === "bastate-mi-gracia")?.title, "Bástate");
  assert.match(obras.find((o) => o.slug === "bastate-mi-gracia")!.seoTitle, /Bástate mi gracia/);
});

test("el aula cierra con las obras pedidas, sin mezclar el estudio y el tratado de Isaías 53", () => {
  const slugs = (kind: "estudio" | "tratado", slug: string) =>
    obrasDesdeAula(kind, slug).map((o) => o.slug);
  assert.deepEqual(slugs("estudio", "marcos-7"), ["efata"]);
  assert.deepEqual(slugs("tratado", "el-texto-manda"), ["efata"]);
  assert.deepEqual(slugs("tratado", "isaias-53"), ["el-siervo-no-tu"]);
  assert.deepEqual(slugs("estudio", "teologia-de-la-cruz"), ["el-siervo-no-tu"]);
  assert.deepEqual(slugs("estudio", "isaias-53"), []);
  assert.deepEqual(slugs("estudio", "2-corintios-12"), ["bastate-mi-gracia"]);
  assert.deepEqual(slugs("tratado", "todo-lo-puedo"), ["bastate-mi-gracia"]);
  assert.deepEqual(slugs("tratado", "la-muerte-y-la-vida"), ["cuando-el-cielo-se-cae"]);
  assert.deepEqual(slugs("tratado", "para-bien"), ["cuando-el-cielo-se-cae"]);
  assert.deepEqual(slugs("estudio", "santiago-1"), [
    "el-altar-del-espejo",
    "de-una-misma-boca",
  ]);
  assert.deepEqual(slugs("estudio", "galatas-5"), []);
  assert.deepEqual(slugs("tratado", "el-crisol-de-lo-oido"), ["el-altar-del-espejo"]);
});

test("el JSON-LD habla solo de Cielo Efata y de Alejandro Sirit, sin RevelatiO", () => {
  const fuente = readFileSync(new URL("../components/json-ld.tsx", import.meta.url), "utf8");
  assert.equal(/revelatio/i.test(fuente), false);
  assert.equal(fuente.includes("subOrganization"), false);
  assert.equal(SITE_NAME, "Cielo Efata");
  assert.equal(PERSONA_AUTOR["@type"], "Person");
  assert.equal(PERSONA_AUTOR.name, "Alejandro Sirit");
  assert.equal(PERSONA_AUTOR.url, `${SITE_ORIGIN}/nosotros`);
  for (const obra of obras) {
    const libro = camposLibro(obra);
    assert.deepEqual(libro.author, PERSONA_AUTOR);
    assert.equal(JSON.stringify(libro).toLowerCase().includes("revelatio"), false);
  }
});

test("el artículo de Santiago 2 firma Alejandro Sirit, cita la RVR 1960 y enlaza el estudio de Santiago 1", () => {
  const a = articulos.find((x) => x.slug === "santiago-2-la-fe-que-obra");
  assert.ok(a);
  const texto = a.secciones.flatMap((s) => s.parrafos).join(" ");
  const palabras = [a.title, ...a.secciones.map((s) => s.titulo ?? ""), texto].join(" ").split(/\s+/).filter(Boolean).length;
  assert.ok(palabras >= 900 && palabras <= 1400, String(palabras));
  assert.match(texto, /la fe sin obras es muerta/);
  assert.match(DESCRIPCION_ARTICULOS, /Reina-Valera 1960/);
  assert.equal(/1909/.test(DESCRIPCION_ARTICULOS), false);
  assert.equal(/Dr\.|RevelatiO/i.test(texto), false);
  assert.ok(a.relacionados.some((r) => r.to === "/estudios/santiago-1"));
  assert.equal(a.relacionados.some((r) => r.to === "/obras/la-fe-no-basta"), false);
  assert.match(a.seoTitle, /Santiago 2/);
  assert.match(a.seoDescription, /fe sin obras es muerta/);
});

test("el artículo de Santiago 3 firma Alejandro Sirit, cita la RVR 1960 y enlaza De una misma boca", () => {
  const a = articulos.find((x) => x.slug === "santiago-3-de-una-misma-boca");
  assert.ok(a);
  const texto = a.secciones.flatMap((s) => s.parrafos).join(" ");
  const palabras = [a.title, ...a.secciones.map((s) => s.titulo ?? ""), texto].join(" ").split(/\s+/).filter(Boolean).length;
  assert.ok(palabras >= 1200 && palabras <= 1500, String(palabras));
  assert.match(texto, /De una misma boca proceden bendición y maldición/);
  assert.match(texto, /¿Acaso alguna fuente echa por una misma abertura agua dulce y amarga\?/);
  assert.match(texto, /¿puede acaso la higuera producir aceitunas, o la vid higos\?/);
  assert.match(DESCRIPCION_ARTICULOS, /Reina-Valera 1960/);
  assert.equal(/1909/.test(DESCRIPCION_ARTICULOS), false);
  assert.equal(/Dr\.|RevelatiO/i.test(texto), false);
  assert.ok(a.relacionados.some((r) => r.to === "/obras/de-una-misma-boca"));
  assert.ok(a.seoTitle.length < 60);
  assert.ok(a.seoDescription.length >= 120 && a.seoDescription.length <= 160);
});

test("las fichas enlazan su libro en RevelatiO con utm_campaign propia y su QR", () => {
  const slugs = obras.filter((o) => o.revelatio).map((o) => o.slug);
  assert.deepEqual(slugs, [
    "efata",
    "el-siervo-no-tu",
    "bastate-mi-gracia",
    "cuando-el-cielo-se-cae",
    "el-altar-del-espejo",
  ]);
  assert.equal(obras.some((o) => o.slug === "la-fe-no-basta"), false);
  assert.equal(obras.some((o) => o.revelatioSlug === "callar-para-ganar"), false);
  for (const obra of obras.filter((o) => o.revelatio)) {
    const slug = obra.revelatioSlug ?? obra.slug;
    const url = new URL(urlRevelatioLibro(slug));
    assert.equal(url.pathname, `/libros/${slug}`);
    assert.equal(url.searchParams.get("utm_campaign"), slug);
    const qr = new URL(`../../public${qrRevelatioPath(slug)}`, import.meta.url);
    assert.ok(readFileSync(qr, "utf8").includes("<svg"), slug);
  }
});

test("los estudios no atribuyen el texto bíblico a la RV 1909 ni al dominio público", () => {
  const dir = new URL("./libros/", import.meta.url);
  const hallazgos: string[] = [];
  for (const nombre of readdirSync(dir)) {
    if (!nombre.endsWith(".ts") || nombre === "cargar.ts") continue;
    const texto = readFileSync(new URL(nombre, dir), "utf8");
    if (/1909/.test(texto)) hallazgos.push(`${nombre}:1909`);
    if (/Reina-Valera[^.]{0,80}dominio público|dominio público[^.]{0,80}Reina-Valera/.test(texto)) {
      hallazgos.push(`${nombre}:dominio`);
    }
  }
  const colofon = readFileSync(new URL("./colofon.ts", import.meta.url), "utf8");
  if (/1909/.test(colofon)) hallazgos.push("colofon.ts:1909");
  assert.deepEqual(hallazgos, []);
});

test("ningún texto del sitio antepone «Dr.» al nombre de Alejandro Sirit", () => {
  const raiz = new URL("../../", import.meta.url);
  const hallazgos: string[] = [];
  function recorrer(dir: URL) {
    for (const nombre of readdirSync(dir)) {
      const url = new URL(nombre, dir);
      if (statSync(url).isDirectory()) {
        recorrer(new URL(`${nombre}/`, dir));
        continue;
      }
      if (!/\.(tsx?|xml|html|json|txt|webmanifest)$/.test(nombre) || nombre.endsWith(".test.ts")) continue;
      if (/Dr\.\s*(Alejandro|Sirit)|Dr\.%20|Dr\.\s*·/.test(readFileSync(url, "utf8"))) hallazgos.push(url.pathname);
    }
  }
  recorrer(new URL("src/", raiz));
  recorrer(new URL("public/", raiz));
  assert.deepEqual(hallazgos, []);
});
