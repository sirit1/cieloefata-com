import { parseRef, revelatioLeer } from "./leer.ts";

const ALIAS_LIBRO: Record<string, string> = {
  salmo: "salmos",
  cantar: "cantares",
};

export function pliegue(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[«»“”"'.,;:¿?¡!—–-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function nombreLibro(ref: string): string | null {
  const parsed = parseRef(ref);
  if (!parsed) return null;
  const clave = pliegue(parsed.libro);
  return ALIAS_LIBRO[clave] ?? clave;
}

export function mismoLibro(ref: string, libro: string): boolean {
  const a = nombreLibro(ref);
  const b = pliegue(libro);
  const alias = ALIAS_LIBRO[b] ?? b;
  return Boolean(a && (a === alias || a === b));
}

export function revelatioDeLibro(libro: string, ref?: string): string | null {
  if (ref) {
    const directo = revelatioLeer(ref);
    if (directo) return directo;
  }
  const cap = ref?.match(/(\d+)/)?.[1] ?? "1";
  return revelatioLeer(`${libro} ${cap}`);
}
