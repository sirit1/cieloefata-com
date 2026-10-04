import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { CORPUS } from "./content.ts";
import { CRISOL_ORIGEN } from "./crisol.ts";
import { CUADERNO_VACIO } from "./copy-nivel.ts";
import { SELLO } from "./identidad.ts";
import { ESCRITURA } from "./pilar.ts";
import { obras, obrasDesdeAula } from "./content.ts";
import { studies } from "./studies.ts";
import { entradaTratado, tratados, tratadosPublicados } from "./tratados.ts";
import { fechasArticulo } from "./calendario.ts";
import { ESTUDIOS_DRIVE, TRATADOS_DRIVE, estudioTienePack } from "./catalogo.ts";
import {
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
  ["/", SITE_TITLE, "Escuela de lectura de la Escritura. Primero se lee el capítulo entero; aquí se estudia: el método, el estudio de la semana y el tratado del mes."],
  ["/canon", tituloSeccion("Canon"), "Sesenta y seis libros. Siete estantes recorren el canon. La ley, los profetas y los salmos hablan de Cristo.", ESCRITURA.body[0]],
  ["/metodo", tituloSeccion("Cómo leer"), "El Método V.E.R.D.A.D.™: Ver, Entorno, Revelación, Doctrina, Argumento y Decisión. El texto manda; el comentario se sienta atrás."],
  ["/estudios", tituloSeccion("Estudios"), "Las clases de la escuela: un pasaje entero, la cadena V.E.R.D.A.D.™ y un solo acto. Se leen aquí, después del capítulo entero.", "Un estudio es la clase: un pasaje completo, oído con la cadena V.E.R.D.A.D.™ —Ver, Entorno, Revelación, Doctrina, Argumento y Decisión— hasta un solo acto, dicho a alguien que pueda preguntar mañana. El capítulo se lee entero, y esta casa no sustituye esa lectura: la escudriña hasta que el versículo vuelva al párrafo y el párrafo pida obediencia. Entran los trece estudios que ya tienen manuscrito y los catorce tratados que ya tienen portada."],
  ["/tratados", tituloSeccion("Tratados"), "El ensayo del mes. Un versículo citado de memoria, leído otra vez dentro del capítulo que lo sostiene.", "Un tratado no es un estudio breve ni un devocional. Es el ensayo en que un versículo citado de memoria vuelve al capítulo que lo sostiene, hasta que la jactancia se calle. Primero se lee ese capítulo entero, y solo entonces habla el tratado, que se sienta detrás del texto y no finge un manuscrito que no existe. Entran los catorce que ya tienen manuscrito, PDF y portada."],
  ["/obras", tituloSeccion("Siete tomos"), "Orden de lectura de los siete tomos del Dr. Alejandro Sirit. Éfata abre; El Siervo, no tú sigue. Editorial Cielo Efata.", CORPUS.gate],
  ["/sello", tituloSeccion("El sello"), "Post tenebras lux. El sello no es un logotipo, sino una confesión.", SELLO.gate],
  ["/palabra", tituloSeccion("Palabra"), "Una raíz hebrea o griega, tres pasajes. El léxico no predica: el pasaje predica.", "La misma raíz, hebrea o griega, se lee en tres lugares del canon para no quedarnos con el diccionario. El léxico no predica: el pasaje predica. El que se lleva solo la glosa se lleva un ídolo pequeño, porque una palabra sin capítulo es versiculitis con Strong."],
  ["/cuaderno", tituloSeccion("Cuaderno"), "Sed hacedores. Aquí se escribe el indicativo del texto, un solo acto y un testigo. No es un diario de ánimos.", CUADERNO_VACIO],
  ["/crisol", tituloSeccion("C.R.I.S.O.L.™"), "La compuerta pastoral de Decisión en El altar del espejo. Oír y no hacer no es un retraso inocente.", `${CRISOL_ORIGEN.subtitulo} ${CRISOL_ORIGEN.quien}`],
  ["/guias", tituloSeccion("Guías"), "Strong, cómo se lee, del pasaje a la palabra dicha, y la pregunta difícil. El capítulo sigue siendo el señor de la casa."],
  ["/sostener", tituloSeccion("Sostener"), "Esta casa no cobra la lectura de la Biblia. La ofrenda sostiene la consulta, los packs y la impresión. WhatsApp +58 424 167 4909."],
  ["/buscar", tituloSeccion("Buscar"), "Buscar por pasaje o tema en los estudios, tratados y objeciones de la casa. El texto manda; el índice solo señala.", "No hay un motor detrás de esta página. Se filtra lo que ya está escrito: estudios, tratados y las objeciones de versiculitis. Escribe un pasaje —Filipenses 4:13, Isaías 53— o un lema que viaja solo. El índice señala; el capítulo manda."],
  ["/camino", tituloSeccion("El camino"), "Conocer a Dios, convicción de pecado, arrepentimiento, bautismo, conversión y firmeza en la fe. Cada etapa oye un pasaje ya escrito en la escuela."],
  ["/nosotros", tituloSeccion("Nosotros"), "El Dr. Alejandro Sirit dirige Editorial Cielo Efata. Escuela de lectura de la Escritura entera. WhatsApp +58 424 167 4909."],
  ["/objeciones", tituloSeccion("Objeciones"), "Versículos que se citan solos —Filipenses 4:13, Jeremías 29:11 y los demás— restituidos al capítulo por los tratados de la casa."],
];

test("títulos únicos y descripciones de 120 a 160", () => {
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
  for (const study of studies) {
    note(
      `/estudios/${study.slug}`,
      tituloEstudio(study.ref),
      metaDescription(`${study.ref}. ${study.ver}`, study.passage),
    );
  }
  for (const t of tratadosPublicados()) {
    note(`/tratados/${t.slug}`, tituloTratado(t.title), metaDescription(t.blurb, entradaTratado(t.cuerpo)));
  }
  assert.deepEqual(fails, []);
});

test("Bástate no tiene ficha de Amazon", () => {
  const sin = obras.filter((o) => !amazonDeObra(o)).map((o) => o.slug);
  assert.deepEqual(sin, ["bastate-mi-gracia"]);
});

test("el ISBN de imprenta entra en el Book solo donde ya existe", () => {
  const conIsbn = obras.filter((o) => o.isbnPrint).map((o) => [o.slug, camposLibro(o).isbn]);
  assert.deepEqual(conIsbn, [
    ["cuando-el-cielo-se-cae", "9798176466690"],
    ["el-altar-del-espejo", "9798176414967"],
    ["callar-para-ganar", "9798253959213"],
  ]);
  const basta = camposLibro(obras.find((o) => o.slug === "bastate-mi-gracia")!);
  assert.equal("isbn" in basta, false);
  assert.equal("sameAs" in basta, false);
  const efata = camposLibro(obras.find((o) => o.slug === "efata")!);
  assert.equal("isbn" in efata, false);
  assert.equal(efata.sameAs, "https://www.amazon.com/dp/B0HJ15ZXL3");
  const callar = camposLibro(obras.find((o) => o.slug === "callar-para-ganar")!);
  assert.equal(callar.isbn, "9798253959213");
  assert.equal(callar.sameAs, "https://www.amazon.com/dp/B0GPF3NHQT");
  assert.equal(callar.isbn?.startsWith("B"), false);
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

  assert.equal(locs.has(`${SITE_ORIGIN}/estudios/romanos-1`), false);
  assert.equal(locs.has(`${SITE_ORIGIN}/estudios/filipenses-2`), true);
  assert.equal(locs.has(`${SITE_ORIGIN}/tratados/isaias-53`), true);
  assert.equal(locs.has(`${SITE_ORIGIN}/tratados/no-juzgueis`), false);
  assert.equal(locs.has(`${SITE_ORIGIN}/tratados/juan-1`), false);
  assert.equal(locs.has(`${SITE_ORIGIN}/`), true);
  assert.equal(ESTUDIOS_DRIVE.length, 13);
  assert.equal(TRATADOS_DRIVE.length, 14);
  assert.equal(tratados.length, 14);
  const conFecha = bloques.filter((b) => b.lastmod);
  assert.equal(conFecha.length, ESTUDIOS_DRIVE.length + TRATADOS_DRIVE.length);
});

function metaDe(head: ReturnType<typeof pageHead>, name: string) {
  const tag = head.meta.find((m) => "name" in m && m.name === name);
  return tag && "content" in tag ? tag.content : undefined;
}

function propDe(head: ReturnType<typeof pageHead>, property: string) {
  const tag = head.meta.find((m) => "property" in m && m.property === property);
  return tag && "content" in tag ? tag.content : undefined;
}

test("cada tomo tiene title, description y subtítulo SEO, y el Book conserva el nombre llano", () => {
  assert.equal(obras.length, 7);
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
    "la-fe-no-basta",
    "el-altar-del-espejo",
    "callar-para-ganar",
  ]);
  assert.deepEqual(slugs("estudio", "galatas-5"), ["la-fe-no-basta"]);
  assert.deepEqual(slugs("tratado", "el-crisol-de-lo-oido"), ["el-altar-del-espejo"]);
});
