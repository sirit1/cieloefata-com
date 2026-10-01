/**
 * Lo único que la portada necesita del corpus.
 * No importa studies.ts ni tratados.ts: si lo hiciera, el navegador
 * bajaría todas las aulas para pintar un título.
 * El test fichas-portada.test.ts exige que estos campos coincidan con el corpus.
 */
export type FichaPortada = { title: string; ref: string };

export const FICHA_ESTUDIO: Record<string, FichaPortada> = {
  "marcos-7": { title: "Éfata", ref: "Marcos 7:31–37" },
  "filipenses-2": { title: "El himno del Siervo", ref: "Filipenses 2:5–11" },
  "2-pedro-1": { title: "Añadid a vuestra fe", ref: "2 Pedro 1:1–11" },
};

export const FICHA_TRATADO: Record<string, FichaPortada> = {
  "isaias-53": { title: "Herido por nuestras rebeliones", ref: "Isaías 53:5" },
  "el-texto-manda": { title: "El texto manda", ref: "Nehemías 8:8" },
};

export function fichaEstudio(slug: string): FichaPortada | undefined {
  return FICHA_ESTUDIO[slug];
}

export function fichaTratado(slug: string): FichaPortada | undefined {
  return FICHA_TRATADO[slug];
}
