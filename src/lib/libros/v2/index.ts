import type { ObraV2 } from "./tipo";

const cargadores: Record<string, () => Promise<{ default: ObraV2 }>> = {
  "el-texto-manda": () => import("./el-texto-manda.ts"),
  "el-crisol-de-lo-oido": () => import("./el-crisol-de-lo-oido.ts"),
  "buscad-primeramente": () => import("./buscad-primeramente.ts"),
  "todo-lo-puedo": () => import("./todo-lo-puedo.ts"),
  "el-pensamiento-que-no-era-tuyo": () => import("./el-pensamiento-que-no-era-tuyo.ts"),
  "prospere-tu-alma": () => import("./prospere-tu-alma.ts"),
  "las-ventanas-de-los-cielos": () => import("./las-ventanas-de-los-cielos.ts"),
  "la-muerte-y-la-vida": () => import("./la-muerte-y-la-vida.ts"),
  "a-este-monte": () => import("./a-este-monte.ts"),
  "para-bien": () => import("./para-bien.ts"),
  "si-dios-por-nosotros": () => import("./si-dios-por-nosotros.ts"),
  "espiritu-de-poder": () => import("./espiritu-de-poder.ts"),
  "isaias-53": () => import("./isaias-53.ts"),
  "atar-y-desatar": () => import("./atar-y-desatar.ts"),
  "este-mismo-jesus": () => import("./este-mismo-jesus.ts"),
  "teologia-de-la-gloria": () => import("./teologia-de-la-gloria.ts"),
  "el-paraclito-eterno": () => import("./el-paraclito-eterno.ts"),
  "no-juzgueis": () => import("./no-juzgueis.ts"),
  "teologia-de-la-cruz": () => import("./teologia-de-la-cruz.ts"),
  "2-pedro-1": () => import("./2-pedro-1.ts"),
  "filipenses-2": () => import("./filipenses-2.ts"),
  "santiago-1": () => import("./santiago-1.ts"),
  "marcos-7": () => import("./marcos-7.ts"),
  "apocalipsis-5": () => import("./apocalipsis-5.ts"),
  "1-corintios-12-14": () => import("./1-corintios-12-14.ts"),
  "galatas-5": () => import("./galatas-5.ts"),
  "2-corintios-12": () => import("./2-corintios-12.ts"),
  "viajes-de-pablo": () => import("./viajes-de-pablo.ts"),
  "1-corintios-1-2": () => import("./1-corintios-1-2.ts"),
  "romanos-8-17": () => import("./romanos-8-17.ts"),
};

export async function obraV2(slug: string): Promise<ObraV2 | null> {
  const c = cargadores[slug];
  return c ? (await c()).default : null;
}

export const SLUGS_V2: ReadonlySet<string> = new Set(Object.keys(cargadores));

/** Obras v2 sin portada propia (estudios pasados a v2 solo desde el EPUB). */
const SIN_PORTADA: ReadonlySet<string> = new Set([]);

export const SLUGS_CON_PORTADA: ReadonlySet<string> = new Set([...SLUGS_V2].filter((s) => !SIN_PORTADA.has(s)));

export function portadaV2(slug: string): string | null {
  return SLUGS_CON_PORTADA.has(slug) ? `/tratados-v2/${slug}/portada.jpg` : null;
}
