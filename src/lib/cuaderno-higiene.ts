/**
 * Reloj del cuaderno de estudio.
 * 30 días: aviso para exportar.
 * 40 días: último aviso.
 * 24 horas después de ese aviso, si no hubo exportación: borrar las notas.
 * El ancla es la última exportación completa, o la primera nota si nunca exportó.
 */

export const MS_HORA = 60 * 60 * 1000;
export const MS_DIA = 24 * MS_HORA;
export const AVISO_MS = 30 * MS_DIA;
export const ULTIMO_MS = 40 * MS_DIA;
export const GRACIA_MS = MS_DIA;

export type FaseHigiene = "limpio" | "ok" | "aviso" | "marcar_ultimo" | "ultimo" | "borrar";

export type EntradaHigiene = {
  ahora: Date;
  hayNotas: boolean;
  primeraNotaEn: Date | null;
  ultimaExportacionEn: Date | null;
  ultimoAvisoEn: Date | null;
};

export type DecisionHigiene = {
  fase: FaseHigiene;
  cicloInicio: Date | null;
  borraEn: Date | null;
};

export function decidirHigiene(entrada: EntradaHigiene): DecisionHigiene {
  if (!entrada.hayNotas) return { fase: "limpio", cicloInicio: null, borraEn: null };
  const ciclo = entrada.ultimaExportacionEn ?? entrada.primeraNotaEn;
  if (!ciclo) return { fase: "limpio", cicloInicio: null, borraEn: null };
  const elapsed = entrada.ahora.getTime() - ciclo.getTime();
  if (elapsed < AVISO_MS) return { fase: "ok", cicloInicio: ciclo, borraEn: null };
  if (elapsed < ULTIMO_MS) return { fase: "aviso", cicloInicio: ciclo, borraEn: null };
  const aviso =
    entrada.ultimoAvisoEn && entrada.ultimoAvisoEn.getTime() >= ciclo.getTime()
      ? entrada.ultimoAvisoEn
      : null;
  if (!aviso) return { fase: "marcar_ultimo", cicloInicio: ciclo, borraEn: null };
  const borraEn = new Date(aviso.getTime() + GRACIA_MS);
  if (entrada.ahora.getTime() < borraEn.getTime()) {
    return { fase: "ultimo", cicloInicio: ciclo, borraEn };
  }
  return { fase: "borrar", cicloInicio: ciclo, borraEn };
}
