/**
 * Explorar por pasaje: de Génesis a Apocalipsis, qué hay en la casa sobre cada libro y capítulo.
 * Se arma solo con lo que el sitio ya publica (estudios, tratados, objeciones, libros y artículos).
 */
import { articulos } from "@/lib/articulos";
import { obras } from "@/lib/content";
import { ESTUDIOS_INDICE } from "@/lib/estudios-indice";
import { parseRef } from "@/lib/leer";
import { OBJECIONES } from "@/lib/objeciones";
import { TRATADOS_INDICE } from "@/lib/tratados-indice";
import { slugPregunta } from "@/lib/preguntas";

export const LIBROS_CANON = [
  "Génesis", "Éxodo", "Levítico", "Números", "Deuteronomio", "Josué", "Jueces", "Rut", "1 Samuel", "2 Samuel",
  "1 Reyes", "2 Reyes", "1 Crónicas", "2 Crónicas", "Esdras", "Nehemías", "Ester", "Job", "Salmos", "Proverbios",
  "Eclesiastés", "Cantares", "Isaías", "Jeremías", "Lamentaciones", "Ezequiel", "Daniel", "Oseas", "Joel", "Amós",
  "Abdías", "Jonás", "Miqueas", "Nahúm", "Habacuc", "Sofonías", "Hageo", "Zacarías", "Malaquías",
  "Mateo", "Marcos", "Lucas", "Juan", "Hechos", "Romanos", "1 Corintios", "2 Corintios", "Gálatas", "Efesios",
  "Filipenses", "Colosenses", "1 Tesalonicenses", "2 Tesalonicenses", "1 Timoteo", "2 Timoteo", "Tito", "Filemón",
  "Hebreos", "Santiago", "1 Pedro", "2 Pedro", "1 Juan", "2 Juan", "3 Juan", "Judas", "Apocalipsis",
] as const;

export type ClasePieza = "estudio" | "tratado" | "pregunta" | "libro" | "articulo";

export type Pieza = {
  clase: ClasePieza;
  titulo: string;
  ref: string;
  href: string;
  cap: number;
};

export const NOMBRE_CLASE: Record<ClasePieza, string> = {
  estudio: "Estudio",
  tratado: "Tratado",
  pregunta: "Pregunta",
  libro: "Libro",
  articulo: "Artículo",
};

export function slugLibro(nombre: string) {
  return nombre
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/\s+/g, "-");
}

function libroCanon(ref: string): { libro: string; cap: number } | null {
  const p = parseRef(ref);
  if (!p) return null;
  const libro = p.libro === "Salmo" ? "Salmos" : p.libro;
  if (!(LIBROS_CANON as readonly string[]).includes(libro)) return null;
  return { libro, cap: p.cap };
}

export function indicePorPasaje(): Map<string, Pieza[]> {
  const mapa = new Map<string, Pieza[]>();
  const add = (ref: string, p: Omit<Pieza, "cap" | "ref">) => {
    const l = libroCanon(ref);
    if (!l) return;
    const lista = mapa.get(l.libro) ?? [];
    if (!lista.some((x) => x.href === p.href)) lista.push({ ...p, ref, cap: l.cap });
    mapa.set(l.libro, lista);
  };
  for (const s of ESTUDIOS_INDICE) add(s.ref, { clase: s.obraHref ? "libro" : "estudio", titulo: s.title, href: s.obraHref ?? `/estudios/${s.slug}` });
  for (const t of TRATADOS_INDICE) add(t.ref, { clase: "tratado", titulo: t.title, href: `/tratados/${t.slug}` });
  for (const o of OBJECIONES) add(o.verse, { clase: "pregunta", titulo: `¿Qué significa ${o.verse}?`, href: `/preguntas/${slugPregunta(o)}` });
  for (const o of obras) add(o.pasaje, { clase: "libro", titulo: o.title, href: `/obras/${o.slug}` });
  for (const a of articulos) add(a.pasaje, { clase: "articulo", titulo: a.title, href: `/articulos/${a.slug}` });
  for (const lista of mapa.values()) lista.sort((a, b) => a.cap - b.cap || a.clase.localeCompare(b.clase));
  return mapa;
}
