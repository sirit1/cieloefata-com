/**
 * Inventario Drive, 3 oct 2026.
 * Estudios (1Bv6sL062dc_8g5jc_vXd-9yNOHYcdAgB) junta: Estudios bíblicos, Estudios sueltos,
 * Manifiestos y enseñanzas, RevelatiO — 100 reflexiones.
 * Tratados (1RajUnBFoZIVJRjEPJ3CeRB5uaVDOr3RI) es carpeta hermana, no hija: 00–12, cada una
 * con 01_manuscrito.docx, 02_PDF_Kindle.pdf, 03_PDF_lujo.pdf y portada.
 * El Mac no está en este escritorio: la carpeta que se pudo abrir es la de Drive.
 */

export {
  ESTUDIO_SEMANA_SLUG,
  ESTUDIO_UMBRAL_SLUG,
  TRATADO_MES_SLUG,
} from "@/lib/calendario";

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
