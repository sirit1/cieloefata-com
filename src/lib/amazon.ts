/**
 * Author hub: B0GVH9VW7M is the primary page (merge in progress).
 * Fallback during the merge: https://www.amazon.com/Alejandro-Sirit/e/B0GWKX4RCV
 */
export const AMAZON_AUTHOR = "https://www.amazon.com/Alejandro-Sirit/e/B0GVH9VW7M";

export function amazonDp(asinOrIsbn: string): string {
  return `https://www.amazon.com/dp/${asinOrIsbn}`;
}

export function amazonBusqueda(title: string): string {
  return `https://www.amazon.com/s?k=${encodeURIComponent(`${title} Alejandro Sirit`)}`;
}

export function whatsappColeccion(): string {
  return (
    "https://wa.me/584241674909?text=" +
    encodeURIComponent(
      "Paz. Solicito la colección impresa de Editorial Cielo Efata, siete tomos del Dr. Alejandro Sirit.",
    )
  );
}

export function whatsappTomo(title: string): string {
  return (
    "https://wa.me/584241674909?text=" +
    encodeURIComponent(
      `Paz. Solicito el tomo «${title}» del Dr. Alejandro Sirit, Editorial Cielo Efata.`,
    )
  );
}

/** No hay URL pública de Drive en el repo: el pack se solicita, no se finge. */
export function whatsappPack(title: string): string {
  return (
    "https://wa.me/584241674909?text=" +
    encodeURIComponent(
      `Paz. Solicito el pack de casa del tomo «${title}» del Dr. Alejandro Sirit, Editorial Cielo Efata. No hallé un enlace público de descarga.`,
    )
  );
}
