/**
 * «¿Qué significa…?»: una pregunta por página. Cada una nace de una objeción que el sitio ya
 * responde (src/lib/objeciones.ts): el versículo en Reina-Valera 1960, la respuesta breve de la casa
 * y el tratado que lo devuelve a su capítulo. No se inventa contenido nuevo.
 */
import { OBJECIONES, type Objecion } from "@/lib/objeciones";
import versos from "@/lib/generado/versos-preguntas.json";

export type VersoRvr = { v: number; t: string };

export function slugPregunta(o: Pick<Objecion, "verse">): string {
  return o.verse
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[–—]/g, "-")
    .replace(/:/g, "-")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export function preguntaDe(slug: string) {
  return OBJECIONES.find((o) => slugPregunta(o) === slug);
}

export function versoRvr(ref: string): readonly VersoRvr[] {
  return (versos as Record<string, VersoRvr[]>)[ref] ?? [];
}

export const PREGUNTAS = OBJECIONES.map((o) => ({ ...o, slug: slugPregunta(o) }));
