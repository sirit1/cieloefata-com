import { loadCuaderno } from "@/lib/cuaderno-store";

export const AULA_ABIERTA_KEY = "cieloefata-aula-abierta";

export type AulaAbierta = {
  kind: "estudio" | "tratado";
  slug: string;
  pasaje: string;
  titulo: string;
  at: string;
};

export function marcarAula(row: Omit<AulaAbierta, "at">) {
  try {
    localStorage.setItem(
      AULA_ABIERTA_KEY,
      JSON.stringify({ ...row, at: new Date().toISOString() }),
    );
  } catch {
    /* private mode */
  }
}

export function loadAulaAbierta(): AulaAbierta | null {
  try {
    const raw = localStorage.getItem(AULA_ABIERTA_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<AulaAbierta>;
    if (!parsed.slug || !parsed.pasaje || !parsed.titulo || !parsed.kind || !parsed.at) {
      return null;
    }
    return parsed as AulaAbierta;
  } catch {
    return null;
  }
}

export function mismaRef(a: string, b: string) {
  const n = (s: string) =>
    s.toLowerCase().replace(/[–—−]/g, "-").replace(/\s+/g, " ").trim();
  const x = n(a);
  const y = n(b);
  return x === y || (x.length > 4 && y.includes(x)) || (y.length > 4 && x.includes(y));
}

/** Aula oída y todavía sin un acto escrito para ese pasaje. */
export function aulaSinActo(): AulaAbierta | null {
  const aula = loadAulaAbierta();
  if (!aula) return null;
  const wrote = loadCuaderno().some((item) => mismaRef(item.ref, aula.pasaje));
  return wrote ? null : aula;
}

export function cerrarAulaSiEscrito(pasaje: string) {
  const aula = loadAulaAbierta();
  if (!aula || !mismaRef(aula.pasaje, pasaje)) return;
  try {
    localStorage.removeItem(AULA_ABIERTA_KEY);
  } catch {
    /* private mode */
  }
}

/** Hasta dónde se leyó cada aula (0–1). Solo en este navegador. */
const LECTURA_KEY = "cieloefata-lectura";

export function guardarProgreso(slug: string, fraccion: number) {
  try {
    const raw = localStorage.getItem(LECTURA_KEY);
    const mapa = raw ? (JSON.parse(raw) as Record<string, number>) : {};
    mapa[slug] = Math.round(Math.min(1, Math.max(0, fraccion)) * 100) / 100;
    localStorage.setItem(LECTURA_KEY, JSON.stringify(mapa));
  } catch {
    /* private mode */
  }
}

export function progresoDe(slug: string): number {
  try {
    const raw = localStorage.getItem(LECTURA_KEY);
    const mapa = raw ? (JSON.parse(raw) as Record<string, number>) : {};
    return typeof mapa[slug] === "number" ? mapa[slug] : 0;
  } catch {
    return 0;
  }
}

/** Minutos de lectura: unas 200 palabras por minuto, que es el paso de quien lee con la Biblia abierta. */
export function minutosDeLectura(texto: string): number {
  const palabras = texto.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(palabras / 200));
}
