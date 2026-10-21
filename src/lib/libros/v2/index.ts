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
};

export async function obraV2(slug: string): Promise<ObraV2 | null> {
  const c = cargadores[slug];
  return c ? (await c()).default : null;
}
