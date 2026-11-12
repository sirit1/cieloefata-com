import type { Pregunta } from "../esquema.ts";
import { bancoUtilizable } from "../esquema.ts";
import { preguntas as m1 } from "./modulo-1.ts";
import { preguntas as m2 } from "./modulo-2.ts";
import { preguntas as m3 } from "./modulo-3.ts";
import { preguntas as m4 } from "./modulo-4.ts";
import { preguntas as m5 } from "./modulo-5.ts";
import { preguntas as m6 } from "./modulo-6.ts";
import { preguntas as m7 } from "./modulo-7.ts";
import { preguntas as m8 } from "./modulo-8.ts";
import { preguntas as m9 } from "./modulo-9.ts";
import { preguntas as m10 } from "./modulo-10.ts";
import { preguntas as m11 } from "./modulo-11.ts";
import { preguntas as m12 } from "./modulo-12.ts";
import { preguntas as final } from "./final.ts";

/** Bancos que sirve el curso. El fixture de prueba no entra aquí. */
const BANCOS: Record<string, readonly Pregunta[]> = {
  "modulo-1": m1,
  "modulo-2": m2,
  "modulo-3": m3,
  "modulo-4": m4,
  "modulo-5": m5,
  "modulo-6": m6,
  "modulo-7": m7,
  "modulo-8": m8,
  "modulo-9": m9,
  "modulo-10": m10,
  "modulo-11": m11,
  "modulo-12": m12,
  final,
};

/** `null` si el banco está vacío o no cumple el esquema: el examen no se abre. */
export function bancoDe(examenId: string): Pregunta[] | null {
  if (!(examenId in BANCOS)) return null;
  return bancoUtilizable(BANCOS[examenId]);
}
