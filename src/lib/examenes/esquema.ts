/**
 * Esquema de un banco de preguntas del Curso Experto Bíblico.
 *
 * Un archivo por examen, en `src/lib/examenes/bancos/`:
 * `modulo-1.ts` … `modulo-12.ts` y `final.ts`. Cada uno exporta
 * `preguntas: Pregunta[]`. No se inventan preguntas.
 * `modulo-1.ts` trae el banco del módulo uno. Los demás se entregan vacíos.
 * `fixture-prueba.ts` solo lo importan las pruebas.
 *
 * ```ts
 * import type { Pregunta } from "../esquema";
 *
 * export const preguntas: Pregunta[] = [
 *   {
 *     id: "m1-01",              // único dentro del banco; [a-z0-9-]
 *     enunciado: "…",           // lo que ve el estudiante
 *     opciones: ["…", "…"],     // de 2 a 6; el orden es el que se muestra
 *     correcta: 0,              // índice de la opción correcta; nunca sale al cliente
 *   },
 * ];
 * ```
 *
 * `correcta` se queda en el servidor. Al cliente solo llegan `id`, `enunciado`
 * y `opciones`. La nota de corte por defecto es 70 % (`umbral` en el catálogo).
 */
export type Pregunta = {
  id: string;
  enunciado: string;
  opciones: readonly string[];
  correcta: number;
};

export type PreguntaPublica = {
  id: string;
  enunciado: string;
  opciones: readonly string[];
};

const ID_OK = /^[a-z0-9-]{1,40}$/;

export function bancoUtilizable(valor: unknown): Pregunta[] | null {
  if (!Array.isArray(valor) || valor.length === 0) return null;
  const out: Pregunta[] = [];
  const ids = new Set<string>();
  for (const item of valor) {
    if (!item || typeof item !== "object") return null;
    const row = item as Partial<Pregunta>;
    if (typeof row.id !== "string" || !ID_OK.test(row.id) || ids.has(row.id)) return null;
    if (typeof row.enunciado !== "string" || row.enunciado.trim().length < 2) return null;
    if (!Array.isArray(row.opciones) || row.opciones.length < 2 || row.opciones.length > 6) return null;
    if (row.opciones.some((o) => typeof o !== "string" || o.trim().length === 0)) return null;
    if (typeof row.correcta !== "number" || !Number.isInteger(row.correcta)) return null;
    if (row.correcta < 0 || row.correcta >= row.opciones.length) return null;
    ids.add(row.id);
    out.push({
      id: row.id,
      enunciado: row.enunciado.trim(),
      opciones: row.opciones.map((o) => o.trim()),
      correcta: row.correcta,
    });
  }
  return out;
}

/** Quita la respuesta correcta antes de salir del servidor. */
export function preguntasPublicas(preguntas: readonly Pregunta[]): PreguntaPublica[] {
  return preguntas.map(({ id, enunciado, opciones }) => ({ id, enunciado, opciones }));
}
