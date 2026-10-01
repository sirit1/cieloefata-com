import { type Obra } from "@/lib/content";
import { MUESTRAS_TOMO } from "@/lib/copy-nivel";

/** Primeras páginas: COPY PACK NIVEL+ manda. Si falta, la tesis del tomo. */
export function primerasPaginas(obra: Obra): string[] {
  const delPack = MUESTRAS_TOMO[obra.slug]?.trim();
  if (delPack) return [delPack];
  return [obra.sample, obra.thesis].map((p) => p.trim()).filter(Boolean);
}