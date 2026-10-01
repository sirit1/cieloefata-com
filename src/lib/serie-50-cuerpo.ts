import { SERIE_FICHAS } from "@/lib/serie-50";

const CIERRE =
  "El capítulo se abre en RevelatiO, entero. El versículo suelto era el abuso; el párrafo es la restitución.";

/** El cuerpo no añade exégesis que el mapa no trae. Vive fuera del índice. */
export const SERIE_CUERPOS: Record<string, string[]> = Object.fromEntries(
  SERIE_FICHAS.map((f) => [f.slug, [f.blurb, CIERRE]]),
);
