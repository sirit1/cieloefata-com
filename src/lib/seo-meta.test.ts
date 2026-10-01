import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { CORPUS } from "./content.ts";
import { CRISOL_ORIGEN } from "./crisol.ts";
import { CUADERNO_VACIO } from "./copy-nivel.ts";
import { SELLO } from "./identidad.ts";
import { ESCRITURA } from "./pilar.ts";
import { obras } from "./content.ts";
import { studies } from "./studies.ts";
import { tratados } from "./tratados.ts";
import { fechasArticulo } from "./calendario.ts";
import { ESTUDIOS_DRIVE, TRATADOS_DRIVE, estudioTienePack } from "./catalogo.ts";
import { SERIE_FICHAS } from "./serie-50.ts";
import {
  SITE_ORIGIN,
  SITE_TITLE,
  amazonDeObra,
  camposLibro,
  metaDescription,
  pageHead,
  tituloEstudio,
  tituloObra,
  tituloSeccion,
  tituloTratado,
} from "./seo.ts";

const secciones: Array<[string, string, string, string?]> = [
  ["/", SITE_TITLE, "Escuela de lectura de la Escritura. RevelatiO abre el capítulo. Aquí se estudia: el método, el estudio de la semana y el tratado del mes."],
  ["/canon", tituloSeccion("Canon"), "Sesenta y seis libros. Siete estantes recorren el canon. La ley, los profetas y los salmos hablan de Cristo.", ESCRITURA.body[0]],
  ["/metodo", tituloSeccion("Cómo leer"), "El Método V.E.R.D.A.D.™: Ver, Entorno, Revelación, Doctrina, Argumento y Decisión. El texto manda; el comentario se sienta atrás."],
  ["/estudios", tituloSeccion("Estudios"), "Las clases de la escuela: un pasaje entero, la cadena V.E.R.D.A.D.™ y un solo acto. Se leen aquí; RevelatiO abre el capítulo.", "Un estudio es la clase: un pasaje completo, la cadena V.E.R.D.A.D.™ —Ver, Entorno, Revelación, Doctrina, Argumento y Decisión— y un solo paso, dicho a alguien que pueda preguntar mañana. Estudios junta las dos carpetas, con los sueltos al lado: TRATADOS es el ensayo y Estudios bíblicos es la clase."],
  ["/tratados", tituloSeccion("Tratados"), "El ensayo del mes. Un versículo citado de memoria, leído otra vez dentro del capítulo que lo sostiene.", "Un tratado no es un estudio breve ni un devocional. Es el ensayo largo de la escuela: un versículo que a menudo se cita de memoria, leído otra vez dentro del capítulo que lo sostiene. TRATADOS está dentro de Estudios, al lado de Estudios bíblicos. Catorce tienen manuscrito. La serie del mapa sigue hasta cincuenta, sin un PDF fingido."],
  ["/obras", tituloSeccion("Siete tomos"), "Orden de lectura de los siete tomos del Dr. Alejandro Sirit. Éfata abre; El Siervo, no tú sigue. Editorial Cielo Efata.", CORPUS.gate],
  ["/sello", tituloSeccion("El sello"), "Post tenebras lux. El sello no es un logotipo, sino una confesión.", SELLO.gate],
  ["/palabra", tituloSeccion("Palabra"), "Una raíz hebrea o griega, tres pasajes. El léxico no predica: el pasaje predica.", "La misma raíz, hebrea o griega, se lee en tres lugares del canon para no quedarnos con el diccionario. El léxico no predica: el pasaje predica. El que se lleva solo la glosa se lleva un ídolo pequeño, porque una palabra sin capítulo es versiculitis con Strong."],
  ["/cuaderno", tituloSeccion("Cuaderno"), "Sed hacedores. Aquí se escribe el indicativo del texto, un solo acto y un testigo. No es un diario de ánimos.", CUADERNO_VACIO],
  ["/crisol", tituloSeccion("C.R.I.S.O.L.™"), "La compuerta pastoral de Decisión en El altar del espejo. Oír y no hacer no es un retraso inocente.", `${CRISOL_ORIGEN.subtitulo} ${CRISOL_ORIGEN.quien}`],
  ["/guias", tituloSeccion("Guías"), "Strong, cómo se lee, del pasaje a la palabra dicha, y la pregunta difícil. El capítulo sigue siendo el señor de la casa."],
  ["/sostener", tituloSeccion("Sostener"), "Esta casa no cobra la lectura de la Biblia. La ofrenda sostiene la consulta, los packs y la impresión. WhatsApp +58 424 167 4909."],
  ["/buscar", tituloSeccion("Buscar"), "Buscar por pasaje o tema en los estudios, tratados y objeciones de la casa. El texto manda; el índice solo señala.", "No hay un motor detrás de esta página. Se filtra lo que ya está escrito: estudios, tratados y las objeciones de versiculitis. Escribe un pasaje —Filipenses 4:13, Isaías 53— o un lema que viaja solo. El índice señala; el capítulo manda."],
  ["/camino", tituloSeccion("El camino"), "Conocer a Dios, convicción de pecado, arrepentimiento, bautismo, conversión y firmeza en la fe. Cada etapa oye un pasaje ya escrito en la escuela."],
  ["/nosotros", tituloSeccion("Nosotros"), "El Dr. Alejandro Sirit dirige Editorial Cielo Efata. RevelatiO es el lector compañero en revelatio.app. WhatsApp +58 424 167 4909."],
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
    note(`/obras/${obra.slug}`, tituloObra(obra.title), metaDescription(obra.line, obra.thesis));
  }
  for (const study of studies) {
    note(
      `/estudios/${study.slug}`,
      tituloEstudio(study.ref),
      metaDescription(`${study.ref}. ${study.ver}`, study.passage),
    );
  }
  for (const t of tratados) {
    note(`/tratados/${t.slug}`, tituloTratado(t.title), metaDescription(t.blurb, t.cuerpo[0] ?? ""));
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

test("toda ficha escrita se indexa y conserva su canónico", () => {
  const abierta = pageHead({ path: "/estudios/romanos-1" });
  assert.equal(robotsDe(abierta), undefined);
  assert.equal(abierta.links[0]?.href, `${SITE_ORIGIN}/estudios/romanos-1`);
  const serie = pageHead({ path: "/tratados/no-juzgueis" });
  assert.equal(robotsDe(serie), undefined);
  assert.equal(serie.links[0]?.href, `${SITE_ORIGIN}/tratados/no-juzgueis`);
});

test("el sitemap lista la escuela entera y fecha solo lo que tiene fecha real", () => {
  const xml = readFileSync(new URL("../../public/sitemap.xml", import.meta.url), "utf8");
  const bloques = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => {
    const cuerpo = m[1] ?? "";
    return {
      loc: cuerpo.match(/<loc>([^<]+)<\/loc>/)?.[1] ?? "",
      lastmod: cuerpo.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1],
    };
  });
  const locs = new Set(bloques.map((b) => b.loc));

  for (const study of studies) {
    const loc = `${SITE_ORIGIN}/estudios/${study.slug}`;
    const bloque = bloques.find((b) => b.loc === loc);
    assert.ok(bloque, loc);
    assert.equal(
      bloque.lastmod,
      fechasArticulo({ clase: "estudio", slug: study.slug, pack: estudioTienePack(study.slug) }).modified,
    );
  }
  for (const t of tratados) {
    const loc = `${SITE_ORIGIN}/tratados/${t.slug}`;
    const bloque = bloques.find((b) => b.loc === loc);
    assert.ok(bloque, loc);
    assert.equal(
      bloque.lastmod,
      fechasArticulo({ clase: "tratado", slug: t.slug, pack: t.pack, n: t.n }).modified,
    );
  }
  for (const obra of obras) {
    const loc = `${SITE_ORIGIN}/obras/${obra.slug}`;
    const bloque = bloques.find((b) => b.loc === loc);
    assert.ok(bloque, loc);
    assert.equal(bloque.lastmod, undefined);
  }

  assert.equal(locs.has(`${SITE_ORIGIN}/estudios/romanos-1`), true);
  assert.equal(locs.has(`${SITE_ORIGIN}/estudios/isaias-53`), true);
  assert.equal(locs.has(`${SITE_ORIGIN}/tratados/isaias-53`), true);
  assert.equal(locs.has(`${SITE_ORIGIN}/tratados/no-juzgueis`), true);
  assert.equal(locs.has(`${SITE_ORIGIN}/tratados/las-llaves-del-reino`), true);
  assert.equal(locs.has(`${SITE_ORIGIN}/`), true);
  assert.equal(SERIE_FICHAS.length, 38);
  assert.equal(ESTUDIOS_DRIVE.length, 13);
  assert.equal(TRATADOS_DRIVE.length, 14);
  const conFecha = bloques.filter((b) => b.lastmod);
  assert.equal(conFecha.length, studies.length + tratados.length);
});
