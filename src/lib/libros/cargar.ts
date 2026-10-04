const cargadores: Record<string, () => Promise<{ parrafos: readonly string[] }>> = {
  "1-corintios-1-2": () => import("./1-corintios-1-2.ts"),
  "1-corintios-12-14": () => import("./1-corintios-12-14.ts"),
  "2-corintios-12": () => import("./2-corintios-12.ts"),
  "2-pedro-1": () => import("./2-pedro-1.ts"),
  "a-este-monte": () => import("./a-este-monte.ts"),
  "apocalipsis-5": () => import("./apocalipsis-5.ts"),
  "atar-y-desatar": () => import("./atar-y-desatar.ts"),
  "buscad-primeramente": () => import("./buscad-primeramente.ts"),
  "el-crisol-de-lo-oido": () => import("./el-crisol-de-lo-oido.ts"),
  "el-pensamiento-que-no-era-tuyo": () => import("./el-pensamiento-que-no-era-tuyo.ts"),
  "el-texto-manda": () => import("./el-texto-manda.ts"),
  "espiritu-de-poder": () => import("./espiritu-de-poder.ts"),
  "filipenses-2": () => import("./filipenses-2.ts"),
  "galatas-5": () => import("./galatas-5.ts"),
  "isaias-53": () => import("./isaias-53.ts"),
  "la-muerte-y-la-vida": () => import("./la-muerte-y-la-vida.ts"),
  "las-ventanas-de-los-cielos": () => import("./las-ventanas-de-los-cielos.ts"),
  "marcos-7": () => import("./marcos-7.ts"),
  "para-bien": () => import("./para-bien.ts"),
  "prospere-tu-alma": () => import("./prospere-tu-alma.ts"),
  "romanos-8-17": () => import("./romanos-8-17.ts"),
  "santiago-1": () => import("./santiago-1.ts"),
  "si-dios-por-nosotros": () => import("./si-dios-por-nosotros.ts"),
  "teologia-de-la-cruz": () => import("./teologia-de-la-cruz.ts"),
  "teologia-de-la-gloria": () => import("./teologia-de-la-gloria.ts"),
  "todo-lo-puedo": () => import("./todo-lo-puedo.ts"),
  "viajes-de-pablo": () => import("./viajes-de-pablo.ts"),
};

export async function parrafosDe(slug: string): Promise<readonly string[]> {
  const cargar = cargadores[slug];
  if (!cargar) return [];
  const libro = await cargar();
  return libro.parrafos;
}
