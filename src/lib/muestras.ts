import { type Obra } from "@/lib/content";
import { studyBySlug } from "@/lib/studies";
import { tratadoDe } from "@/lib/tratados";

/** Primeras páginas: prosa ya publicada en el aula o el tratado. No se inventa doctrina. */
export function primerasPaginas(obra: Obra): string[] {
  const study = obra.studySlug ? studyBySlug(obra.studySlug) : undefined;
  const tratado = obra.tratadoSlug ? tratadoDe(obra.tratadoSlug) : undefined;
  const delAula = study
    ? [study.ver, study.entorno].map((p) => p.trim()).filter(Boolean)
    : [];
  const delTratado = tratado ? tratado.cuerpo.slice(0, 2) : [];
  const propias = [obra.sample, obra.thesis].map((p) => p.trim()).filter(Boolean);

  if (delAula.length >= 2) return delAula;
  if (delTratado.length >= 1) return delTratado;
  return propias;
}
