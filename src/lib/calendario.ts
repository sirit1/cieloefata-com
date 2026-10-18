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
      "Estudia Marcos 7, donde Jesús toma aparte al sordo, gime y le dice «Efata», y el oído se abre antes de que la lengua se desate.",
  },
  {
    desde: "2026-09-22",
    hasta: "2026-09-28",
    studySlug: "filipenses-2",
    impacto:
      "El himno no se escribió para que el seminario discutiera la kénosis, sino para una iglesia que necesitaba humildad y unidad, la misma en la que Evodia y Síntique debían ponerse de acuerdo (4:2). Forma de siervo, muerte de cruz, el Nombre sobre todo nombre. Quien canta 2:9–11 sin 2:7 no ha leído: ha cantado. Esta semana el aula pide el sentir que hubo en Cristo Jesús, y un acto que quepa en la cárcel de Pablo, no en el aplauso del yo.",
    puerta:
      "Estudia Filipenses 2, donde el himno de Cristo, que se humilló hasta la cruz, nos llama a la humildad, y sal con un paso concreto por escrito.",
  },
  {
    desde: "2026-09-29",
    hasta: "2026-10-05",
    studySlug: "2-pedro-1",
    impacto:
      "Dios ya nos dio todas las cosas que pertenecen a la vida y a la piedad. Por eso Pedro pide poner toda diligencia en añadir a la fe virtud, conocimiento, dominio propio, paciencia, piedad, afecto fraternal y amor. Quien no los tiene, dice, «tiene la vista muy corta; es ciego, habiendo olvidado la purificación de sus antiguos pecados».",
    puerta:
      "Estudia 2 Pedro 1, donde Pedro enseña que la fe que no crece se vuelve estéril, y sal con un paso concreto para esta semana.",
  },
];

/** Meses publicados. El mes en curso manda; el siguiente puede mostrarse atenuado. */
export const MESES: MesEditorial[] = [
  {
    mes: "2026-09",
    tratadoSlug: "isaias-53",
    impacto:
      "La llaga del Siervo no es póliza de sanidad automática ni poesía de resiliencia. Isaías 53:5 vuelve al Cántico entero: herido por nuestras rebeliones, ofrenda por la culpa, justificación de muchos. El lector no es el Siervo. Este tratado devuelve el versículo al capítulo que lo sostiene y lleva al libro El Siervo, no tú.",
  },
  {
    mes: "2026-10",
    tratadoSlug: "el-texto-manda",
    impacto:
      "V.E.R.D.A.D. no es una fórmula para recitar ni una técnica más. Es la manera en que leemos el capítulo completo, como el pueblo en tiempos de Nehemías, hasta entender lo que Dios dijo y obedecerlo. El texto manda; el método solo sirve.",
  },
];

/** Día en que el inventario Drive declaró los packs reales (catalogo.ts). */
export const FECHA_PACKS = "2026-09-23";
/** Última revisión de la prosa que no tiene pack. */
export const FECHA_PROSA = "2026-09-24";
/** Día en que el mapa de la serie (13–50) entró en la escuela, sin manuscrito de Drive. */
export const FECHA_SERIE = "2026-10-01";
/** Citas en Reina-Valera 1960. Colofón y glosas vigentes desde el 3 de octubre de 2026. */
export const FECHA_VIGENTE = "2026-10-03";

export type FechasArticulo = { published: string; modified: string };

function cerrar(published: string, tope = FECHA_PROSA): FechasArticulo {
  const modified = tope > published ? tope : published;
  return { published, modified };
}

/**
 * Alta de un aula o tratado que ya tiene pack.
 * Si el calendario abrió el estudio antes del inventario, manda ese lunes.
 * El mes editorial no adelanta ni retrasa la existencia del pack.
 */
export function fechasDePack(slug: string, clase: "estudio" | "tratado"): FechasArticulo {
  if (clase === "estudio") {
    const semana = SEMANAS.find((s) => s.studySlug === slug);
    if (semana && semana.desde < FECHA_PACKS) return cerrar(semana.desde, FECHA_VIGENTE);
  }
  return cerrar(FECHA_PACKS, FECHA_VIGENTE);
}

/** Prosa ya escrita que no tiene pack: la revisión del 24 de septiembre. */
export function fechasDeProsa(): FechasArticulo {
  return { published: FECHA_PROSA, modified: FECHA_PROSA };
}

/** Ficha 13–50: el día en que la restitución del mapa entró en la escuela. */
export function fechasDeFichaSerie(): FechasArticulo {
  return { published: FECHA_SERIE, modified: FECHA_SERIE };
}

/** Publicadas solo en castellano por excepción aprobada (ver Tratado.soloEs): día de alta. */
export const FECHAS_SOLO_ES: Record<string, string> = {
  "este-mismo-jesus": "2026-10-18",
  "no-juzgueis": "2026-10-18",
};

export function fechasArticulo(opts: {
  clase: "estudio" | "tratado";
  slug: string;
  pack: boolean;
  n?: string;
}): FechasArticulo {
  const soloEs = FECHAS_SOLO_ES[opts.slug];
  if (soloEs) return { published: soloEs, modified: soloEs };
  if (opts.pack) return fechasDePack(opts.slug, opts.clase);
  if (opts.clase === "tratado" && opts.n && opts.n !== "—" && Number(opts.n) >= 13) {
    return fechasDeFichaSerie();
  }
  return fechasDeProsa();
}

export function fechaLegible(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("es", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function lineaFechas(f: FechasArticulo): string {
  const pub = `Publicado el ${fechaLegible(f.published)}`;
  if (f.modified === f.published) return `${pub}.`;
  return `${pub}. Revisado el ${fechaLegible(f.modified)}.`;
}

/** ISO 8601 en el huso de la casa (America/Caracas, UTC−4, sin horario de verano). */
export function isoCaracas(yyyyMmDd: string): string {
  return `${yyyyMmDd}T00:00:00-04:00`;
}

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

/** ¿La semana vigente cubre hoy? Si no, el calendario quedó atrás y no se muestran fechas pasadas. */
export function semanaEnCurso(d = new Date()): boolean {
  const hoy = fechaCasa(d);
  const s = semanaVigente(d);
  return s.desde <= hoy && hoy <= s.hasta;
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
