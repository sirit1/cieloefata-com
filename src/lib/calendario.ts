/**
 * Calendario editorial vivo.
 * Los editores cambian semana y mes aquí: no hay que buscar JSX.
 * Fechas en ISO (YYYY-MM-DD), lunes a domingo, huso America/Caracas.
 */

export const ESTUDIO_UMBRAL_SLUG = "marcos-7";
export const ESTUDIO_SEMANA_SLUG = "filipenses-2";
export const TRATADO_MES_SLUG = "isaias-53";

export const CASA_TZ = "America/Caracas";

export type SemanaEditorial = {
  /** Lunes de la semana, YYYY-MM-DD */
  desde: string;
  /** Domingo de la semana, YYYY-MM-DD */
  hasta: string;
  studySlug: string;
  /** Párrafo de casa; si falta, se toma el del estudio. */
  impacto?: string;
  /** Oración de la puerta «Estudio de esta semana» en el umbral. */
  puerta?: string;
};

export type MesEditorial = {
  /** YYYY-MM */
  mes: string;
  tratadoSlug: string;
  impacto?: string;
};

/** Semanas publicadas. Se resuelve por fecha; la última pasada es el respaldo. */
export const SEMANAS: SemanaEditorial[] = [
  {
    desde: "2026-09-15",
    hasta: "2026-09-21",
    studySlug: "marcos-7",
    impacto:
      "En la Decápolis el Hijo toma a un sordo, alza los ojos, gime y dice Éfata —sé abierto—. El oído cede antes de que la lengua se desate. Quien recita el vocablo como lema y deja al sordo cerrado ha tomado el nombre del milagro en vano.",
    puerta:
      "Entra al aula de Marcos 7, donde el Hijo toma al sordo, gime y dice Éfata, y el oído cede antes de que la lengua se desate.",
  },
  {
    desde: "2026-09-22",
    hasta: "2026-09-28",
    studySlug: "filipenses-2",
    impacto:
      "El himno no se escribió para que el seminario aplaudiera la kénosis: se escribió para que Evodia y Síntique dejaran de pelearse el primer asiento. Forma de siervo, muerte de cruz, el Nombre sobre todo nombre. Quien canta 2:9–11 sin 2:7 no ha leído: ha cantado. Esta semana el aula pide el sentir que hubo en Cristo Jesús, y un acto que quepa en la cárcel de Pablo, no en el aplauso del yo.",
    puerta:
      "Entra al aula de Filipenses 2, donde el himno del Siervo humilla al yo antes de exaltarlo, y sal con un solo acto escrito.",
  },
  {
    desde: "2026-09-29",
    hasta: "2026-10-05",
    studySlug: "2-pedro-1",
    impacto:
      "Pedro pide añadir a la fe, a costa propia, un eslabón: no un cartel de virtudes. Dios ya dio cuanto concierne a la vida y a la piedad; ahora se suministra. El que no añade no es humilde. Es ciego, y se olvidó de la purificación de sus antiguos pecados.",
    puerta:
      "Entra al aula de 2 Pedro 1, donde la fe que no añade se vuelve estéril, y sal con un solo eslabón costeado.",
  },
];

/** Meses publicados. El mes en curso manda; el siguiente puede mostrarse atenuado. */
export const MESES: MesEditorial[] = [
  {
    mes: "2026-09",
    tratadoSlug: "isaias-53",
    impacto:
      "La llaga del Siervo no es póliza de sanidad automática ni poesía de resiliencia. Isaías 53:5 vuelve al Cántico entero: herido por nuestras rebeliones, ofrenda por la culpa, justificación de muchos. El lector no es el Siervo. Este tratado restituye el versículo al capítulo que lo sostiene y conduce, sin prisa de mercado, al tomo El Siervo, no tú.",
  },
  {
    mes: "2026-10",
    tratadoSlug: "el-texto-manda",
    impacto:
      "V.E.R.D.A.D. no es un acrónimo para recitar ni un noveno puesto en la feria de técnicas. Es el cauce por el que esta casa oye el capítulo entero, hasta que el comentario se sienta atrás y el oído ceda. El texto manda. El método sirve. La rodilla cierra.",
  },
];

export function fechaCasa(d = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: CASA_TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(d);
}

export function mesCasa(d = new Date()): string {
  return fechaCasa(d).slice(0, 7);
}

function indiceSemana(hoy: string): number {
  const exacto = SEMANAS.findIndex((s) => s.desde <= hoy && hoy <= s.hasta);
  if (exacto >= 0) return exacto;
  let ultimo = -1;
  for (let i = 0; i < SEMANAS.length; i++) {
    if (SEMANAS[i].hasta < hoy) ultimo = i;
  }
  if (ultimo >= 0) return ultimo;
  return SEMANAS.findIndex((s) => s.studySlug === ESTUDIO_SEMANA_SLUG);
}

export function semanaVigente(d = new Date()): SemanaEditorial {
  const i = indiceSemana(fechaCasa(d));
  return SEMANAS[i] ?? SEMANAS[0];
}

export function semanaProxima(d = new Date()): SemanaEditorial | undefined {
  const i = indiceSemana(fechaCasa(d));
  if (i < 0 || i >= SEMANAS.length - 1) return undefined;
  const actual = SEMANAS[i];
  const hoy = fechaCasa(d);
  if (hoy > actual.hasta) return undefined;
  return SEMANAS[i + 1];
}

export function mesVigente(d = new Date()): MesEditorial {
  const clave = mesCasa(d);
  return MESES.find((m) => m.mes === clave) ?? MESES.find((m) => m.tratadoSlug === TRATADO_MES_SLUG) ?? MESES[0];
}

export function mesProximo(d = new Date()): MesEditorial | undefined {
  const actual = mesVigente(d);
  const i = MESES.findIndex((m) => m.mes === actual.mes);
  if (i < 0 || i >= MESES.length - 1) return undefined;
  return MESES[i + 1];
}

function parseISODate(iso: string): Date {
  const [y, m, day] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, day));
}

export function etiquetaRango(desde: string, hasta: string): string {
  const a = parseISODate(desde);
  const b = parseISODate(hasta);
  const diaMes: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", timeZone: "UTC" };
  const conAnio: Intl.DateTimeFormatOptions = { ...diaMes, year: "numeric" };
  const mismoMes = a.getUTCMonth() === b.getUTCMonth() && a.getUTCFullYear() === b.getUTCFullYear();
  if (mismoMes) {
    const mesAnio = b.toLocaleDateString("es", { month: "long", year: "numeric", timeZone: "UTC" });
    return `semana del ${a.getUTCDate()} al ${b.getUTCDate()} de ${mesAnio}`;
  }
  return `semana del ${a.toLocaleDateString("es", diaMes)} al ${b.toLocaleDateString("es", conAnio)}`;
}

export function nombreMes(yyyyMm: string): string {
  const [y, m] = yyyyMm.split("-").map(Number);
  const d = new Date(Date.UTC(y, m - 1, 1));
  return d.toLocaleDateString("es", { month: "long", year: "numeric", timeZone: "UTC" });
}

export function estudioSemanaSlug(d = new Date()): string {
  return semanaVigente(d).studySlug;
}

export function tratadoMesSlug(d = new Date()): string {
  return mesVigente(d).tratadoSlug;
}
