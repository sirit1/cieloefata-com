import { parseRef, type CitaParseada } from "./leer.ts";

export const REVELATIO_LEER = "https://revelatio.app/leer";

export type OrigenPuente = {
  /** Cita de la página (p. ej. «Filipenses 2:5–11», «Marcos 7», «3 Juan 2»). */
  ref: string;
  /**
   * Ruta de Cielo a la que se vuelve. Nunca `/`.
   * Ejemplos: `/estudios/filipenses-2`, `/tratados/isaias-53`, `/obras/efata`, `/cuaderno`.
   */
  desde: string;
  /** Solo si la página ya lo trae en sus datos. Nunca inventarlo. */
  pregunta?: string;
  /** Solo si la página ya lo trae en sus datos. Nunca inventarla. */
  intencion?: string;
  /**
   * Citas del aula o del tratado del mismo capítulo. Solo se consultan
   * cuando se sale de un tomo y la cita del tomo no nombra versículo.
   */
  companeros?: readonly string[];
};

function datoOpcional(valor: string | undefined): string | undefined {
  const t = valor?.trim();
  return t ? t : undefined;
}

function rutaVuelta(desde: string): string | undefined {
  const cruda = desde.trim();
  if (!cruda || cruda === "/") return undefined;
  const sinOrigen = cruda.replace(/^https?:\/\/[^/]+/i, "");
  const path = sinOrigen.startsWith("/") ? sinOrigen : `/${sinOrigen}`;
  if (path === "/") return undefined;
  return path;
}

function slugEstudio(vuelta: string): string | undefined {
  const m = vuelta.match(/^\/estudios\/([^/?#]+)/);
  return m?.[1];
}

function saleDeTomo(vuelta: string): boolean {
  return /^\/obras\/[^/?#]+/.test(vuelta);
}

export function versiculoCompanero(
  cita: CitaParseada,
  companeros: readonly string[] = [],
): number | undefined {
  if (cita.vs !== undefined) return cita.vs;
  for (const raw of companeros) {
    const p = parseRef(raw);
    if (p && p.slug === cita.slug && p.cap === cita.cap && p.vs !== undefined) {
      return p.vs;
    }
  }
  return undefined;
}

export function urlPuenteRevelatio(origen: OrigenPuente): string | null {
  const cita = parseRef(origen.ref);
  if (!cita) return null;
  const vuelta = rutaVuelta(origen.desde);
  const vs = saleDeTomo(vuelta ?? "")
    ? versiculoCompanero(cita, origen.companeros)
    : cita.vs;
  const q = new URLSearchParams();
  q.set("libro", cita.slug);
  q.set("cap", String(cita.cap));
  if (vs !== undefined) q.set("vs", String(vs));
  q.set("casa", "1");
  if (vuelta) q.set("vuelta", vuelta);
  const estudio = vuelta ? slugEstudio(vuelta) : undefined;
  if (estudio) q.set("estudio", estudio);
  const pregunta = datoOpcional(origen.pregunta);
  const intencion = datoOpcional(origen.intencion);
  if (pregunta) q.set("pregunta", pregunta);
  if (intencion) q.set("intencion", intencion);
  return `${REVELATIO_LEER}?${q.toString()}`;
}
