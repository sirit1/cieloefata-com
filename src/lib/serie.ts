import { amazonDp } from "@/lib/amazon";
import { obras, obraBySlug, obrasDesdeAula, ROMANO, type AulaKind, type Obra } from "@/lib/content";

/** Nombre de la serie en Amazon KDP y en los datos estructurados. */
export const SERIE_NOMBRE = "Cielo Efata";

/** Una sola numeración para la web y para KDP: el orden de lectura (I–IX). */
export function numeroSerie(obra: Pick<Obra, "lectura">): string {
  return ROMANO[obra.lectura] ?? String(obra.lectura);
}

export function obrasEnOrden(): Obra[] {
  return [...obras].sort((a, b) => a.lectura - b.lectura);
}

export function publicada(obra: Obra): boolean {
  return !obra.sinAmazon && Boolean(obra.asinEbook || obra.asinPrint);
}

export type Formato = { tipo: "ebook" | "tapa"; etiqueta: string; href: string; asin: string };

export function formatosAmazon(obra: Obra): Formato[] {
  if (obra.sinAmazon) return [];
  const out: Formato[] = [];
  if (obra.asinEbook) {
    out.push({ tipo: "ebook", etiqueta: "Ebook Kindle", href: amazonDp(obra.asinEbook), asin: obra.asinEbook });
  }
  if (obra.asinPrint) {
    out.push({ tipo: "tapa", etiqueta: "Tapa blanda", href: amazonDp(obra.asinPrint), asin: obra.asinPrint });
  }
  return out;
}

/**
 * El libro de la serie que cierra un aula. Si el aula no tiene uno propio, va Éfata:
 * es el libro del método V.E.R.D.A.D. con el que se lee cada estudio de la escuela.
 */
export function librosDeAula(kind: AulaKind, slug: string): Obra[] {
  const propios = obrasDesdeAula(kind, slug);
  if (propios.length) return propios;
  const efata = obraBySlug("efata");
  return efata ? [efata] : [];
}
