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
