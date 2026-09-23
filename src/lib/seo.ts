/** Canonical host observed in live crawl: apex 308 → www. */

export const SITE_ORIGIN = "https://www.cieloefata.com";
export const SITE_NAME = "Cielo Efata";
export const SITE_TITLE = "Cielo Efata — La Biblia, para ser estudiada";

export function canonicalUrl(path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (clean === "/") return `${SITE_ORIGIN}/`;
  return `${SITE_ORIGIN}${clean.replace(/\/+$/, "")}`;
}

export function pageHead({
  path,
  title,
  description,
}: {
  path: string;
  title?: string;
  description?: string;
}) {
  const url = canonicalUrl(path);
  return {
    meta: [
      ...(title ? [{ title }] : []),
      ...(description ? [{ name: "description" as const, content: description }] : []),
      { property: "og:url", content: url },
      { property: "og:site_name", content: SITE_NAME },
    ],
    links: [{ rel: "canonical" as const, href: url }],
  };
}
