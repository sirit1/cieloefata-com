/** Canonical host observed in live crawl: apex 308 → www. */

import { amazonDp } from "@/lib/amazon";

export const SITE_ORIGIN = "https://www.cieloefata.com";
export const SITE_NAME = "Cielo Efata";
export const SITE_TITLE = "Cielo Efata — La Biblia, para ser estudiada";

const AUTHOR_URL = `${SITE_ORIGIN}/nosotros`;

export function canonicalUrl(path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (clean === "/") return `${SITE_ORIGIN}/`;
  return `${SITE_ORIGIN}${clean.replace(/\/+$/, "")}`;
}

export function tituloSeccion(nombre: string) {
  return `${nombre} | ${SITE_NAME}`;
}

export function tituloObra(title: string) {
  return `${title} — libro de Alejandro Sirit | ${SITE_NAME}`;
}

export function tituloEstudio(pasaje: string) {
  return `${pasaje} — Estudio bíblico | ${SITE_NAME}`;
}

export function tituloTratado(title: string) {
  return `${title} — Tratado | ${SITE_NAME}`;
}

function norm(text: string) {
  return text.replace(/\s+/g, " ").trim();
}

const ABBR = /^(?:[A-ZÁÉÍÓÚÑ]|Dr|Sr|Sra|Mr|St|vs|cap)$/;

/** Frases completas. No parte siglas (V.E.R.D.A.D.), ni «Dr.», ni un ? pegado a una comilla. */
export function frasesCompletas(text: string): string[] {
  const t = norm(text);
  const out: string[] = [];
  let start = 0;
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    if (c !== "." && c !== "!" && c !== "?") continue;
    const after = t[i + 1];
    if (after !== undefined && after !== " ") continue;
    const word = (t.slice(start, i).match(/(\S+)$/)?.[1] ?? "").replace(/^[«"(\[]+/, "");
    if (word.length <= 2 || ABBR.test(word)) continue;
    const sentence = t.slice(start, i + 1).trim();
    if (sentence) out.push(sentence);
    start = i + 1;
    while (t[start] === " ") start++;
    i = Math.max(start - 1, i);
  }
  return out;
}

/**
 * Entre 120 y 160 caracteres: el tramo más largo de frases seguidas que cabe.
 * Empieza por el texto propio; si no llega, usa frases del detalle ya escrito.
 */
export function metaDescription(primary: string, detalle = ""): string {
  const propias = frasesCompletas(primary);
  const extra = frasesCompletas(detalle).filter((f) => !propias.includes(f));
  const pool = [...propias, ...extra];
  let best = "";
  for (let i = 0; i < pool.length; i++) {
    let acc = "";
    for (let j = i; j < pool.length; j++) {
      const next = acc ? `${acc} ${pool[j]}` : pool[j];
      if (next.length > 160) break;
      acc = next;
    }
    if (acc.length > best.length && (acc.length >= 120 || best.length < 120)) best = acc;
    if (i === 0 && acc.length >= 120) return acc;
  }
  return best;
}

export function amazonDeObra(obra: {
  asinEbook?: string;
  isbnPrint?: string;
}): string | undefined {
  if (obra.asinEbook) return amazonDp(obra.asinEbook);
  if (obra.isbnPrint) return amazonDp(obra.isbnPrint);
  return undefined;
}

export const PERSONA_AUTOR = {
  "@type": "Person" as const,
  name: "Alejandro Sirit",
  url: AUTHOR_URL,
};

export function camposLibro(obra: {
  title: string;
  slug: string;
  isbnPrint?: string;
  asinEbook?: string;
}) {
  const sameAs = amazonDeObra(obra);
  return {
    name: obra.title,
    author: PERSONA_AUTOR,
    inLanguage: "es" as const,
    url: canonicalUrl(`/obras/${obra.slug}`),
    ...(obra.isbnPrint ? { isbn: obra.isbnPrint } : {}),
    ...(sameAs ? { sameAs } : {}),
  };
}

export function pageHead({
  path,
  title,
  description,
  detalle,
  image,
  index = true,
  exact = false,
}: {
  path: string;
  title?: string;
  description?: string;
  detalle?: string;
  image?: string;
  /** false: la ficha se puede leer, pero no entra en el índice. */
  index?: boolean;
  /** true: usa `description` tal cual, sin recortar frases. */
  exact?: boolean;
}) {
  const url = canonicalUrl(path);
  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : canonicalUrl(image)
    : undefined;
  const desc = description
    ? exact
      ? norm(description)
      : metaDescription(description, detalle ?? "")
    : "";
  return {
    meta: [
      ...(title ? [{ title }] : []),
      ...(desc ? [{ name: "description" as const, content: desc }] : []),
      ...(!index ? [{ name: "robots" as const, content: "noindex" }] : []),
      { property: "og:url", content: url },
      { property: "og:site_name", content: SITE_NAME },
      ...(title
        ? [
            { property: "og:title" as const, content: title },
            { name: "twitter:title" as const, content: title },
          ]
        : []),
      ...(desc
        ? [
            { property: "og:description" as const, content: desc },
            { name: "twitter:description" as const, content: desc },
          ]
        : []),
      ...(imageUrl
        ? [
            { property: "og:image" as const, content: imageUrl },
            { name: "twitter:image" as const, content: imageUrl },
          ]
        : []),
    ],
    links: [{ rel: "canonical" as const, href: url }],
  };
}
