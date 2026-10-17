import { estudioSemanaSlug, semanaEnCurso, tratadoMesSlug } from "@/lib/calendario";
import { estudioTienePack } from "@/lib/catalogo";
import { LAB_SLUGS } from "@/lib/labs";

/** Rótulo de catálogo. */
export function etiquetaEstudio(slug: string) {
  if (slug === "viajes-de-pablo") return "Estudio";
  if (slug === estudioSemanaSlug()) return semanaEnCurso() ? "Estudio · esta semana" : "Estudio destacado";
  if (estudioTienePack(slug) && (LAB_SLUGS as readonly string[]).includes(slug)) {
    return "Estudio";
  }
  if (estudioTienePack(slug)) return "Estudio";
  if ((LAB_SLUGS as readonly string[]).includes(slug)) return "Estudio";
  return "Estudio";
}

export function etiquetaTratado(slug: string) {
  if (slug === tratadoMesSlug()) return "Tratado · este mes";
  return "Tratado";
}
