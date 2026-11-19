/**
 * Ventana de Kindle Select recibida el 18 nov 2026: 20–24 noviembre 2026 PST.
 * Equivale a las 4:00 del 20 de noviembre hasta las 3:59:59 del 25, hora de Venezuela.
 * Inicio inclusivo UTC 2026-11-20T08:00:00Z; fin exclusivo UTC 2026-11-25T08:00:00Z.
 * No es un precio leído en la tienda.
 */
export const COACH_SLUG = "lo-que-tu-coach-no-te-dijo";
export const COACH_ASIN = "B0HRBG4G55";
export const ENLACE_COACH = "https://www.amazon.com/dp/B0HRBG4G55";

export const PROMO_INICIO_UTC = "2026-11-20T08:00:00.000Z";
export const PROMO_FIN_UTC = "2026-11-25T08:00:00.000Z";
export const PROMO_INICIO = Date.parse(PROMO_INICIO_UTC);
export const PROMO_FIN = Date.parse(PROMO_FIN_UTC);

export type FaseCoach = "antes" | "durante" | "despues";

export function fasePromoCoach(ahora: number): FaseCoach {
  if (ahora < PROMO_INICIO) return "antes";
  if (ahora < PROMO_FIN) return "durante";
  return "despues";
}

/** Milisegundos hasta el próximo cambio de fase. `null` cuando ya no hay reclamo de gratuidad. */
export function msHastaSiguienteFase(ahora: number): number | null {
  if (ahora < PROMO_INICIO) return PROMO_INICIO - ahora;
  if (ahora < PROMO_FIN) return PROMO_FIN - ahora;
  return null;
}

export function textosPromoCoach(fase: FaseCoach): { destacado: string | null; aviso: string | null } {
  if (fase === "antes") {
    return {
      destacado: "GRATIS del 20 al 24 de noviembre de 2026 en Amazon Kindle",
      aviso:
        "Promoción gratuita desde el 20 de noviembre de 2026, a las 4:00 (hora de Venezuela), hasta las 3:59 del 25 de noviembre.",
    };
  }
  if (fase === "durante") {
    return {
      destacado: "GRATIS en Amazon Kindle",
      aviso:
        "Del 20 al 24 de noviembre de 2026, desde las 4:00 del 20 hasta las 3:59 del 25 (hora de Venezuela). Comprueba en Amazon que el precio marque 0 antes de confirmarlo: la disponibilidad y el precio pueden variar según la tienda.",
    };
  }
  return { destacado: null, aviso: null };
}
