const SLUG: Record<string, string> = {
  Génesis: "genesis",
  Éxodo: "exodo",
  Levítico: "levitico",
  Números: "numeros",
  Deuteronomio: "deuteronomio",
  Josué: "josue",
  Jueces: "jueces",
  Rut: "rut",
  "1 Samuel": "1-samuel",
  "2 Samuel": "2-samuel",
  "1 Reyes": "1-reyes",
  "2 Reyes": "2-reyes",
  "1 Crónicas": "1-cronicas",
  "2 Crónicas": "2-cronicas",
  Esdras: "esdras",
  Nehemías: "nehemias",
  Ester: "ester",
  Job: "job",
  Salmos: "salmos",
  Salmo: "salmos",
  Proverbios: "proverbios",
  Eclesiastés: "eclesiastes",
  Cantares: "cantares",
  Isaías: "isaias",
  Jeremías: "jeremias",
  Lamentaciones: "lamentaciones",
  Ezequiel: "ezequiel",
  Daniel: "daniel",
  Oseas: "oseas",
  Joel: "joel",
  Amós: "amos",
  Abdías: "abdias",
  Jonás: "jonas",
  Miqueas: "miqueas",
  Nahúm: "nahum",
  Habacuc: "habacuc",
  Sofonías: "sofonias",
  Hageo: "hageo",
  Zacarías: "zacarias",
  Malaquías: "malaquias",
  Mateo: "mateo",
  Marcos: "marcos",
  Lucas: "lucas",
  Juan: "juan",
  Hechos: "hechos",
  Romanos: "romanos",
  "1 Corintios": "1-corintios",
  "2 Corintios": "2-corintios",
  Gálatas: "galatas",
  Efesios: "efesios",
  Filipenses: "filipenses",
  Colosenses: "colosenses",
  "1 Tesalonicenses": "1-tesalonicenses",
  "2 Tesalonicenses": "2-tesalonicenses",
  "1 Timoteo": "1-timoteo",
  "2 Timoteo": "2-timoteo",
  Tito: "tito",
  Filemón: "filemon",
  Hebreos: "hebreos",
  Santiago: "santiago",
  "1 Pedro": "1-pedro",
  "2 Pedro": "2-pedro",
  "1 Juan": "1-juan",
  "2 Juan": "2-juan",
  "3 Juan": "3-juan",
  Judas: "judas",
  Apocalipsis: "apocalipsis",
};

export function parseRef(ref: string): { libro: string; slug: string; cap: number } | null {
  const m = ref.trim().match(/^(\d?\s?[A-Za-záéíóúÁÉÍÓÚñÑ]+)\s+(\d+)/);
  if (!m) return null;
  const libro = m[1].replace(/\s+/g, " ").trim();
  const slug = SLUG[libro];
  if (!slug) return null;
  return { libro, slug, cap: Number(m[2]) };
}

export function revelatioLeer(ref: string): string | null {
  const p = parseRef(ref);
  if (!p) return null;
  const q = new URLSearchParams({ libro: p.slug, cap: String(p.cap), casa: "1" });
  return `https://revelatio.app/leer?${q.toString()}`;
}
