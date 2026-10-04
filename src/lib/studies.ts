import { ESTUDIOS_DRIVE, estudioTienePack } from "@/lib/catalogo";
import { aulas, type AulaEstudio } from "./studies-aula.ts";
import { NOTAS_AULA, type NotaAula } from "./studies-notas.ts";

export type Study = AulaEstudio & NotaAula;

export const studies: Study[] = aulas.map((a) => {
  const nota = NOTAS_AULA[a.slug];
  if (!nota) throw new Error(`Falta la nota de ${a.slug}`);
  return { ...a, ...nota };
});

export function studyBySlug(slug: string) {
  return studies.find((s) => s.slug === slug);
}

export { etiquetaEstudio } from "@/lib/etiquetas";

export function estudiosPublicados() {
  return ESTUDIOS_DRIVE.map((slug) => studyBySlug(slug)).filter(
    (s): s is NonNullable<typeof s> => Boolean(s),
  );
}

export function estudiosProximos() {
  return studies.filter((s) => !estudioTienePack(s.slug));
}

export function siguienteEstudio(slug: string) {
  const i = ESTUDIOS_DRIVE.indexOf(slug as (typeof ESTUDIOS_DRIVE)[number]);
  if (i < 0 || i >= ESTUDIOS_DRIVE.length - 1) return undefined;
  return studyBySlug(ESTUDIOS_DRIVE[i + 1]);
}
