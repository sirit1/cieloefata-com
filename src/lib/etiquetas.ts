import { estudioSemanaSlug, tratadoMesSlug } from "@/lib/calendario";
import { estudioTienePack } from "@/lib/catalogo";
import { LAB_SLUGS } from "@/lib/verdad";

/** Rótulo de catálogo. No abre el cuerpo del aula. */
export function etiquetaEstudio(slug: string) {
  if (slug === "viajes-de-pablo") return "Estudio · pack · Hechos 13–14";
  if (slug === estudioSemanaSlug()) return "Estudio · esta semana";
  if (estudioTienePack(slug) && (LAB_SLUGS as readonly string[]).includes(slug)) {
    return "Estudio · pack · yunque";
  }
  if (estudioTienePack(slug)) return "Estudio · pack";
  if ((LAB_SLUGS as readonly string[]).includes(slug)) return "Laboratorio";
  return "Estudio";
}

export function etiquetaTratado(slug: string) {
  if (slug === tratadoMesSlug()) return "Tratado · este mes";
  return "Tratado";
}
