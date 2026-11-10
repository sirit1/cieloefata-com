import type { Pregunta } from "./esquema";

export type Nota = {
  aciertos: number;
  total: number;
  /** 0–100, entero. */
  puntaje: number;
  aprobado: boolean;
};

/**
 * Califica en el servidor. Una respuesta que falta, sobra o no es un índice
 * válido cuenta como fallo. `umbral` es una fracción (0.7 = 70 %).
 */
export function calificar(
  preguntas: readonly Pregunta[],
  respuestas: Readonly<Record<string, unknown>>,
  umbral: number,
): Nota {
  if (preguntas.length === 0) throw new Error("banco vacío");
  let aciertos = 0;
  for (const p of preguntas) {
    const marca = respuestas[p.id];
    if (typeof marca === "number" && Number.isInteger(marca) && marca === p.correcta) aciertos += 1;
  }
  const ratio = aciertos / preguntas.length;
  return {
    aciertos,
    total: preguntas.length,
    puntaje: Math.round(ratio * 100),
    aprobado: ratio + 1e-9 >= umbral,
  };
}
