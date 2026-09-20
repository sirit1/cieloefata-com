export const CUADERNO_KEY = "cieloefata-cuaderno";

export type CuadernoEntry = {
  ref: string;
  indicativo: string;
  decision: string;
  testigo: string;
  note: string;
  at: string;
};

function normalize(row: Partial<CuadernoEntry> & { decision: string; ref: string; at: string }): CuadernoEntry {
  return {
    ref: row.ref,
    indicativo: row.indicativo ?? "",
    decision: row.decision,
    testigo: row.testigo ?? "",
    note: row.note ?? "",
    at: row.at,
  };
}

export function loadCuaderno(): CuadernoEntry[] {
  try {
    const raw = localStorage.getItem(CUADERNO_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Partial<CuadernoEntry>[];
    return parsed
      .filter((row): row is Partial<CuadernoEntry> & { decision: string; ref: string; at: string } =>
        Boolean(row && row.decision && row.ref && row.at),
      )
      .map(normalize);
  } catch {
    return [];
  }
}

export function saveCuaderno(items: CuadernoEntry[]) {
  localStorage.setItem(CUADERNO_KEY, JSON.stringify(items));
}

export function addMarca(ref: string, excerpt: string) {
  const next: CuadernoEntry[] = [
    {
      ref: ref.trim() || "Selección",
      indicativo: "",
      decision: excerpt.trim(),
      testigo: "",
      note: "Subrayado en el pasaje",
      at: new Date().toISOString(),
    },
    ...loadCuaderno(),
  ];
  saveCuaderno(next);
}
