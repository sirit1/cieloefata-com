/**
 * Banco mínimo solo para pruebas. No lo importa el servidor del curso.
 * No son preguntas del Curso Experto Bíblico.
 */
import type { Pregunta } from "../esquema";

export const preguntas: Pregunta[] = [
  { id: "t1", enunciado: "Pregunta de prueba 1", opciones: ["uno", "dos", "tres", "cuatro"], correcta: 1 },
  { id: "t2", enunciado: "Pregunta de prueba 2", opciones: ["alfa", "beta", "gamma"], correcta: 0 },
  { id: "t3", enunciado: "Pregunta de prueba 3", opciones: ["norte", "sur", "este", "oeste"], correcta: 2 },
  { id: "t4", enunciado: "Pregunta de prueba 4", opciones: ["sí", "no"], correcta: 1 },
];
