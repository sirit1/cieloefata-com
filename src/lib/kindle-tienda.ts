/**
 * Enlace inteligente de Éfata en Kindle: cada país va a su tienda de Amazon.
 *
 * `?nodl=0` hace que el iPhone abra la página en Safari y no en la app de Amazon:
 * el apple-app-site-association de cada tienda (amazon.com, .es, .com.mx, …)
 * excluye de los enlaces universales toda URL con `nodl=0`. La app de Amazon no
 * vende libros Kindle en iOS («no disponible para compra»); Safari sí.
 */
export const EFATA_ASIN = "B0HJ15ZXL3";

/** Fin de la promoción gratis: miércoles 21-10-2026, 23:59 PDT = 22-10-2026 06:59 UTC. */
export const EFATA_GRATIS_HASTA = Date.parse("2026-10-22T06:59:00Z");

export function efataGratis(ahora: number = Date.now()): boolean {
  return ahora < EFATA_GRATIS_HASTA;
}

const TIENDA_POR_PAIS: Record<string, string> = {
  ES: "es",
  US: "com",
  MX: "com.mx",
  BR: "com.br",
  DE: "de",
  AT: "de",
  FR: "fr",
  IT: "it",
  NL: "nl",
  GB: "co.uk",
  CA: "ca",
  AU: "com.au",
  IN: "in",
  JP: "co.jp",
};

/** Dominio de Amazon para un código de país ISO (x-vercel-ip-country). El resto del mundo, amazon.com. */
export function tiendaDePais(pais: string | null | undefined): string {
  const code = (pais ?? "").trim().toUpperCase();
  return TIENDA_POR_PAIS[code] ?? "com";
}

export function urlKindle(tld: string, asin: string = EFATA_ASIN): string {
  return `https://www.amazon.${tld}/dp/${asin}?nodl=0`;
}

export function urlKindleDePais(pais: string | null | undefined): string {
  return urlKindle(tiendaDePais(pais));
}

/** Rutas cortas que redirigen (302) a la tienda del país. */
export const RUTAS_KINDLE = new Set(["/efata/kindle", "/e"]);

export const ENLACE_KINDLE = "/efata/kindle";

/** Fila «Otra tienda» de la página /efata. */
export const OTRAS_TIENDAS: ReadonlyArray<{ etiqueta: string; tld: string }> = [
  { etiqueta: "España", tld: "es" },
  { etiqueta: "EE. UU. y Latinoamérica", tld: "com" },
  { etiqueta: "México", tld: "com.mx" },
];
