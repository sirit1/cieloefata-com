import { estudioSemanaSlug, semanaEnCurso, tratadoMesSlug } from "@/lib/calendario";
import { estudioTienePack } from "@/lib/catalogo";
import { LAB_SLUGS } from "@/lib/labs";
import { esTratado } from "@/lib/clasificacion";

/** Rótulo de catálogo. */
export function etiquetaEstudio(slug: string) {
  if (esTratado(slug)) return "Tratado";
  if (slug === "viajes-de-pablo") return "Estudio";
  if (slug === estudioSemanaSlug()) return semanaEnCurso() ? "Estudio · esta semana" : "Estudio destacado";
  if (estudioTienePack(slug) && (LAB_SLUGS as readonly string[]).includes(slug)) {
    return "Estudio";
  }
  if (estudioTienePack(slug)) return "Estudio";
  if ((LAB_SLUGS as readonly string[]).includes(slug)) return "Estudio";
  return "Estudio";
}

/** Rótulo de las obras de la colección /tratados: por enfoque, casi todas son estudios breves. */
export function etiquetaTratado(slug: string) {
  if (esTratado(slug)) return "Tratado";
  if (slug === tratadoMesSlug()) return "Estudio breve · este mes";
  return "Estudio breve";
}
