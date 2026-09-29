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

const ABBR: [string, string][] = [
  ["2 Tesalonicenses", "2 Tesalonicenses"],
  ["1 Tesalonicenses", "1 Tesalonicenses"],
  ["2 Corintios", "2 Corintios"],
  ["1 Corintios", "1 Corintios"],
  ["2 Crónicas", "2 Crónicas"],
  ["1 Crónicas", "1 Crónicas"],
  ["2 Timoteo", "2 Timoteo"],
  ["1 Timoteo", "1 Timoteo"],
  ["Deuteronomio", "Deuteronomio"],
  ["Lamentaciones", "Lamentaciones"],
  ["Apocalipsis", "Apocalipsis"],
  ["2 Tes.", "2 Tesalonicenses"],
  ["1 Tes.", "1 Tesalonicenses"],
  ["2 Co.", "2 Corintios"],
  ["1 Co.", "1 Corintios"],
  ["2 Cr.", "2 Crónicas"],
  ["1 Cr.", "1 Crónicas"],
  ["2 Ti.", "2 Timoteo"],
  ["1 Ti.", "1 Timoteo"],
  ["2 Ts.", "2 Tesalonicenses"],
  ["1 Ts.", "1 Tesalonicenses"],
  ["2 R.", "2 Reyes"],
  ["1 R.", "1 Reyes"],
  ["2 S.", "2 Samuel"],
  ["1 S.", "1 Samuel"],
  ["2 P.", "2 Pedro"],
  ["1 P.", "1 Pedro"],
  ["2 Jn.", "2 Juan"],
  ["3 Jn.", "3 Juan"],
  ["1 Jn.", "1 Juan"],
  ["Dt.", "Deuteronomio"],
  ["Gn.", "Génesis"],
  ["Éx.", "Éxodo"],
  ["Ex.", "Éxodo"],
  ["Lv.", "Levítico"],
  ["Nm.", "Números"],
  ["Jos.", "Josué"],
  ["Jue.", "Jueces"],
  ["Rt.", "Rut"],
  ["Esd.", "Esdras"],
  ["Neh.", "Nehemías"],
  ["Est.", "Ester"],
  ["Sal.", "Salmos"],
  ["Pr.", "Proverbios"],
  ["Ec.", "Eclesiastés"],
  ["Cnt.", "Cantares"],
  ["Is.", "Isaías"],
  ["Jer.", "Jeremías"],
  ["Lm.", "Lamentaciones"],
  ["Ez.", "Ezequiel"],
  ["Dn.", "Daniel"],
  ["Os.", "Oseas"],
  ["Jl.", "Joel"],
  ["Am.", "Amós"],
  ["Abd.", "Abdías"],
  ["Jon.", "Jonás"],
  ["Mi.", "Miqueas"],
  ["Nah.", "Nahúm"],
  ["Hab.", "Habacuc"],
  ["Sof.", "Sofonías"],
  ["Hag.", "Hageo"],
  ["Zac.", "Zacarías"],
  ["Mal.", "Malaquías"],
  ["Mt.", "Mateo"],
  ["Mr.", "Marcos"],
  ["Lc.", "Lucas"],
  ["Jn.", "Juan"],
  ["Hch.", "Hechos"],
  ["Ro.", "Romanos"],
  ["Gá.", "Gálatas"],
  ["Ef.", "Efesios"],
  ["Fil.", "Filipenses"],
  ["Col.", "Colosenses"],
  ["Tit.", "Tito"],
  ["Flm.", "Filemón"],
  ["He.", "Hebreos"],
  ["Stg.", "Santiago"],
  ["Jud.", "Judas"],
  ["Ap.", "Apocalipsis"],
  ["Job", "Job"],
];

ABBR.sort((a, b) => b[0].length - a[0].length);

/** Libros de un solo capítulo: «3 Juan 2» es versículo 2, no capítulo 2. */
const UNIPERICO = new Set(["abdias", "filemon", "2-juan", "3-juan", "judas"]);

export type CitaParseada = {
  libro: string;
  slug: string;
  cap: number;
  vs?: number;
};

export function expandirCita(raw: string): string {
  const t = raw.trim();
  for (const [abbr, full] of ABBR) {
    if (t === abbr || t.startsWith(`${abbr} `) || t.startsWith(abbr)) {
      return t.replace(abbr, full).replace(/\s+/g, " ").trim();
    }
  }
  return t.replace(/\s+/g, " ").trim();
}

export function parseRef(ref: string): CitaParseada | null {
  const full = expandirCita(ref);
  const m = full.match(/^(\d?\s?[A-Za-záéíóúÁÉÍÓÚñÑ]+)\s+(\d+)(?:\s*[:.:]\s*(\d+))?/);
  if (!m) return null;
  const libro = m[1].replace(/\s+/g, " ").trim();
  const slug = SLUG[libro];
  if (!slug) return null;
  let cap = Number(m[2]);
  let vs = m[3] ? Number(m[3]) : undefined;
  if (UNIPERICO.has(slug) && vs === undefined) {
    vs = cap;
    cap = 1;
  }
  return vs === undefined ? { libro, slug, cap } : { libro, slug, cap, vs };
}
