/** Doce módulos de 30 días y el examen final. La escuela es gratis. */

export const MODULOS = 12;
export const DIAS_POR_MODULO = 30;
export const UMBRAL_DEFECTO = 0.7;
export const MINUTOS_MODULO = 60;
export const MINUTOS_FINAL = 90;
export const MAX_INTENTOS = 2;
export const DIRECTOR = "Dr. (h. c.) Alejandro Sirit";
export const TITULO_CURSO_COMPLETO = "Curso completo — Experto Bíblico";
export const MENSAJE_BANCO_VACIO = "El examen de este módulo se abrirá pronto";
export const EXAMEN_FINAL_ID = "final";
export const EXAMEN_CURSO_ID = "curso-completo";

export type ExamenMeta = {
  id: string;
  titulo: string;
  /** Lo que imprime el certificado. */
  nombreCertificado: string;
  detalle: string;
  minutos: number;
  /** Fracción 0–1. 0.7 es el 70 %. */
  umbral: number;
  /** Cuenta para el certificado del curso completo. El final no. */
  cuentaParaCurso: boolean;
};

function modulo(n: number): ExamenMeta {
  const desde = (n - 1) * DIAS_POR_MODULO + 1;
  const hasta = n * DIAS_POR_MODULO;
  const titulo = `Módulo ${n}`;
  return {
    id: `modulo-${n}`,
    titulo,
    nombreCertificado: `${titulo} · Días ${desde}–${hasta}`,
    detalle: `Días ${desde}–${hasta}`,
    minutos: MINUTOS_MODULO,
    umbral: UMBRAL_DEFECTO,
    cuentaParaCurso: true,
  };
}

export const EXAMENES: readonly ExamenMeta[] = [
  ...Array.from({ length: MODULOS }, (_, i) => modulo(i + 1)),
  {
    id: EXAMEN_FINAL_ID,
    titulo: "Examen final",
    nombreCertificado: "Examen final",
    detalle: "Al cerrar los doce módulos",
    minutos: MINUTOS_FINAL,
    umbral: UMBRAL_DEFECTO,
    cuentaParaCurso: false,
  },
];

const porId = new Map(EXAMENES.map((e) => [e.id, e]));

export function examenPorId(id: string): ExamenMeta | undefined {
  return porId.get(id);
}

export function idsDeModulo(): string[] {
  return EXAMENES.filter((e) => e.cuentaParaCurso).map((e) => e.id);
}
