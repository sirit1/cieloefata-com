import { MAX_INTENTOS } from "./catalogo.ts";

export type EstadoIntento = "abierto" | "vencido" | "entregado";

export type IntentoReloj = {
  entregadoEn: string | null;
  venceEn: string;
};

/** El plazo lo fija el servidor al abrir el intento. */
export function plazo(inicio: Date, minutos: number): Date {
  return new Date(inicio.getTime() + minutos * 60_000);
}

export function estadoIntento(intento: IntentoReloj, ahora: Date): EstadoIntento {
  if (intento.entregadoEn) return "entregado";
  const vence = new Date(intento.venceEn).getTime();
  if (Number.isNaN(vence) || ahora.getTime() >= vence) return "vencido";
  return "abierto";
}

export function puedeAbrirOtro(
  estados: readonly EstadoIntento[],
): { ok: true } | { ok: false; motivo: "abierto" | "agotado" } {
  if (estados.includes("abierto")) return { ok: false, motivo: "abierto" };
  const usados = estados.filter((e) => e === "entregado" || e === "vencido").length;
  if (usados >= MAX_INTENTOS) return { ok: false, motivo: "agotado" };
  return { ok: true };
}

export function numeroSiguiente(usados: number): number {
  return usados + 1;
}

/** Milisegundos que quedan; 0 si ya venció. */
export function restanteMs(venceEn: string, ahora: Date): number {
  const vence = new Date(venceEn).getTime();
  if (Number.isNaN(vence)) return 0;
  return Math.max(0, vence - ahora.getTime());
}
