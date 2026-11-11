/** Sinopsis breve de una ficha, solo con texto que el libro ya trae. */

const TOPE = 240;

export function sinopsisDe(obra: { line: string; seoDescription: string }): string {
  const linea = obra.line.replace(/\s+/g, " ").trim();
  if (linea.length > 0 && linea.length <= TOPE) return linea;
  const corta = obra.seoDescription.replace(/\s+/g, " ").trim();
  if (corta) return corta;
  return linea;
}
