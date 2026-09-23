export const CUADERNO_KEY = "cieloefata-cuaderno";
export const CUADERNO_DRAFT_KEY = "cieloefata-cuaderno-borrador";

export type CuadernoEntry = {
  ref: string;
  indicativo: string;
  decision: string;
  testigo: string;
  note: string;
  at: string;
};

export type CuadernoDraft = {
  ref: string;
  indicativo: string;
  decision: string;
  testigo: string;
  note: string;
  updatedAt: string;
};

function scope(base: string, userId?: string | null) {
  if (userId && userId !== "dev-user") return `${base}:${userId}`;
  return base;
}

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

export function loadCuaderno(userId?: string | null): CuadernoEntry[] {
  try {
    const raw = localStorage.getItem(scope(CUADERNO_KEY, userId));
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

export function saveCuaderno(items: CuadernoEntry[], userId?: string | null) {
  localStorage.setItem(scope(CUADERNO_KEY, userId), JSON.stringify(items));
}

export function loadBorrador(userId?: string | null): CuadernoDraft | null {
  try {
    const raw = localStorage.getItem(scope(CUADERNO_DRAFT_KEY, userId));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<CuadernoDraft>;
    if (!parsed.updatedAt) return null;
    const tiene =
      Boolean(parsed.ref?.trim()) ||
      Boolean(parsed.indicativo?.trim()) ||
      Boolean(parsed.decision?.trim()) ||
      Boolean(parsed.testigo?.trim()) ||
      Boolean(parsed.note?.trim());
    if (!tiene) return null;
    return {
      ref: parsed.ref ?? "",
      indicativo: parsed.indicativo ?? "",
      decision: parsed.decision ?? "",
      testigo: parsed.testigo ?? "",
      note: parsed.note ?? "",
      updatedAt: parsed.updatedAt,
    };
  } catch {
    return null;
  }
}

export function saveBorrador(draft: Omit<CuadernoDraft, "updatedAt">, userId?: string | null) {
  const row: CuadernoDraft = { ...draft, updatedAt: new Date().toISOString() };
  const vacio =
    !row.ref.trim() &&
    !row.indicativo.trim() &&
    !row.decision.trim() &&
    !row.testigo.trim() &&
    !row.note.trim();
  try {
    if (vacio) {
      localStorage.removeItem(scope(CUADERNO_DRAFT_KEY, userId));
      return;
    }
    localStorage.setItem(scope(CUADERNO_DRAFT_KEY, userId), JSON.stringify(row));
  } catch {
    /* private mode */
  }
}

export function clearBorrador(userId?: string | null) {
  try {
    localStorage.removeItem(scope(CUADERNO_DRAFT_KEY, userId));
  } catch {
    /* private mode */
  }
}

export function addMarca(ref: string, excerpt: string, userId?: string | null) {
  const next: CuadernoEntry[] = [
    {
      ref: ref.trim() || "Selección",
      indicativo: "",
      decision: excerpt.trim(),
      testigo: "",
      note: "Subrayado en el pasaje",
      at: new Date().toISOString(),
    },
    ...loadCuaderno(userId),
  ];
  saveCuaderno(next, userId);
}

export function ultimoActo(userId?: string | null): CuadernoEntry | null {
  return loadCuaderno(userId)[0] ?? null;
}
