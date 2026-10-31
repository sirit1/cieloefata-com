/**
 * Clasificación de cada obra por su ENFOQUE (no por su extensión):
 * - Estudio: exégesis de un pasaje, versículo a versículo.
 * - Tratado: un tema o doctrina recorrido por toda la Escritura, con argumento ordenado, idiomas originales y fuentes.
 * Decidido el 18-oct-2026 (opción A: rotular por enfoque). Cambiar aquí cambia la insignia y los listados en todo el sitio.
 */
export type Tipo = "estudio" | "tratado";

export const PARA_QUIEN: Record<Tipo, string> = {
  estudio: "Para todo creyente, grupos pequeños y el devocional diario.",
  tratado: "Para líderes, maestros y estudiosos que quieren el tema por toda la Escritura.",
};

export const NOMBRE_TIPO: Record<Tipo, string> = { estudio: "Estudio", tratado: "Tratado" };

/** Clasificación por enfoque. `dudoso` marca los casos que se decidieron a mano. */
export const CLASIFICACION: Record<string, { tipo: Tipo; dudoso?: boolean }> = {
  // Sección Estudios
  "2-pedro-1": { tipo: "estudio" },
  "filipenses-2": { tipo: "estudio" },
  "santiago-1": { tipo: "estudio" },
  "marcos-7": { tipo: "estudio" },
  "apocalipsis-5": { tipo: "estudio" },
  "1-corintios-12-14": { tipo: "estudio" },
  "galatas-5": { tipo: "estudio" },
  "2-corintios-12": { tipo: "estudio" },
  "viajes-de-pablo": { tipo: "estudio" },
  "1-corintios-1-2": { tipo: "estudio" },
  "romanos-8-17": { tipo: "estudio", dudoso: true },
  "teologia-de-la-cruz": { tipo: "tratado", dudoso: true },
  "teologia-de-la-gloria": { tipo: "tratado" },
  "el-paraclito-eterno": { tipo: "tratado", dudoso: true },
  "un-solo-dios-tres-personas": { tipo: "estudio" },
  // Sección Tratados
  "el-texto-manda": { tipo: "tratado" },
  "el-crisol-de-lo-oido": { tipo: "estudio" },
  "buscad-primeramente": { tipo: "estudio", dudoso: true },
  "todo-lo-puedo": { tipo: "estudio" },
  "el-pensamiento-que-no-era-tuyo": { tipo: "estudio" },
  "prospere-tu-alma": { tipo: "estudio" },
  "las-ventanas-de-los-cielos": { tipo: "estudio", dudoso: true },
  "la-muerte-y-la-vida": { tipo: "estudio", dudoso: true },
  "a-este-monte": { tipo: "estudio" },
  "para-bien": { tipo: "estudio" },
  "si-dios-por-nosotros": { tipo: "estudio" },
  "espiritu-de-poder": { tipo: "estudio" },
  "isaias-53": { tipo: "estudio" },
  "atar-y-desatar": { tipo: "estudio" },
  // Publicados solo en castellano por excepción aprobada (ver Tratado.soloEs).
  "este-mismo-jesus": { tipo: "tratado" },
  "no-juzgueis": { tipo: "estudio" },
};

/** Tipo de una obra; si no está clasificada, se respeta la sección donde vive. */
export function tipoDe(slug: string, seccion: Tipo): Tipo {
  return CLASIFICACION[slug]?.tipo ?? seccion;
}

/** Obras rotuladas como tratado, con su ruta real (las URL no cambian). */
export const TRATADOS_CASA: { slug: string; href: string }[] = [
  { slug: "el-texto-manda", href: "/tratados/el-texto-manda" },
  { slug: "teologia-de-la-cruz", href: "/estudios/teologia-de-la-cruz" },
  { slug: "teologia-de-la-gloria", href: "/estudios/teologia-de-la-gloria" },
  { slug: "este-mismo-jesus", href: "/tratados/este-mismo-jesus" },
  { slug: "el-paraclito-eterno", href: "/obras/el-paraclito-eterno" },
];

export function esTratado(slug: string) {
  return CLASIFICACION[slug]?.tipo === "tratado";
}
