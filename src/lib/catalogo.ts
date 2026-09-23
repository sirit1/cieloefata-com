/** Inventario Drive 2026-09-23: TRATADOS (14) + 08 Estudios bíblicos (13). */

export const ESTUDIO_SEMANA_SLUG = "filipenses-2";
export const ESTUDIO_UMBRAL_SLUG = "marcos-7";
export const TRATADO_MES_SLUG = "isaias-53";

/** Los trece packs reales de `08 Estudios biblicos`. */
export const ESTUDIOS_DRIVE = [
  "filipenses-2",
  "2-pedro-1",
  "santiago-1",
  "apocalipsis-5",
  "1-corintios-12-14",
  "galatas-5",
  "2-corintios-12",
  "viajes-de-pablo",
  "marcos-7",
  "1-corintios-1-2",
  "teologia-de-la-cruz",
  "teologia-de-la-gloria",
  "romanos-8-17",
] as const;

/** Los catorce packs reales de `TRATADOS`. */
export const TRATADOS_DRIVE = [
  "el-texto-manda",
  "el-crisol-de-lo-oido",
  "buscad-primeramente",
  "todo-lo-puedo",
  "el-pensamiento-que-no-era-tuyo",
  "prospere-tu-alma",
  "las-ventanas-de-los-cielos",
  "la-muerte-y-la-vida",
  "a-este-monte",
  "para-bien",
  "si-dios-por-nosotros",
  "espiritu-de-poder",
  "isaias-53",
  "atar-y-desatar",
] as const;

export function estudioTienePack(slug: string) {
  return (ESTUDIOS_DRIVE as readonly string[]).includes(slug);
}

export function tratadoTienePack(slug: string) {
  return (TRATADOS_DRIVE as readonly string[]).includes(slug);
}
