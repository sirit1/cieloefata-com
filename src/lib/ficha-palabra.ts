/**
 * Ficha de palabra (Strong). Los datos salen de la biblioteca local y se publican como
 * /lexico/{G|H}{número}.json, uno por número usado en el sitio (scripts/biblioteca/generar.py).
 * Solo datos de dominio público: diccionario de Strong (1890), Textus Receptus (Scrivener 1894)
 * y Códice de Leningrado (WLC); la glosa castellana es la que escribe el propio sitio.
 */
export type FichaStrong = {
  id: string;
  lema: string;
  lemaStrong: string;
  translit: string;
  pron: string;
  glosa: string;
  defStrong: string;
  defKjv: string;
  derivacion: string;
  veces: number;
  versos: number;
  refs: string[];
  texto: string;
};

export const EVENTO_FICHA = "cielo-efata:ficha";

export function normalizarStrong(id: string): string | null {
  const m = id.trim().match(/^([GHgh])0*(\d+)/);
  return m ? `${m[1].toUpperCase()}${m[2]}` : null;
}

/** Abre la ficha desde cualquier parte (la escucha <FichaPalabra/>, montada una vez en la raíz). */
export function abrirFicha(id: string, origen?: HTMLElement | null) {
  const n = normalizarStrong(id);
  if (!n || typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(EVENTO_FICHA, { detail: { id: n, origen } }));
}

const cache = new Map<string, Promise<FichaStrong | null>>();

export function cargarFicha(id: string): Promise<FichaStrong | null> {
  let p = cache.get(id);
  if (!p) {
    p = fetch(`/lexico/${id}.json`)
      .then((r) => (r.ok ? (r.json() as Promise<FichaStrong>) : null))
      .catch(() => null);
    cache.set(id, p);
  }
  return p;
}
