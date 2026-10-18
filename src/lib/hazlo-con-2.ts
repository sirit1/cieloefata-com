/**
 * «Hazlo con 2»: invitar a dos personas al reto V.E.R.D.A.D. desbloquea la plantilla de concordancia.
 *
 * Por qué el desbloqueo es de confianza: cieloefata.com no tiene base de datos en producción (no hay
 * DATABASE_URL en Vercel) y RevelatiO solo recibe contactos, no devuelve conteos al navegador. Contar en el
 * servidor exigiría pagar o abrir un servicio nuevo, y el premio es contenido gratuito, no dinero. Por eso se
 * cuentan en este aparato las invitaciones enviadas (dos pulsaciones de «invitar») y se confía en la persona.
 * Lo que sí queda registrado del lado del servidor: quien llega con `?ref=` y pide la guía queda en los
 * `leads` de RevelatiO con origen `cieloefata.com/verdad?ref=…`, y Vercel Analytics recibe los eventos
 * `hazlo2_invitar`, `hazlo2_llegada` y `hazlo2_plantilla`.
 */

export const HAZLO2_META = 2;
export const HAZLO2_PLANTILLA = "/verdad/plantilla-concordancia-verdad.pdf";

const KEY_REF = "cielo-ref";
const KEY_DE = "cielo-ref-de";
const KEY_ENVIOS = "cielo-hazlo2";

type Almacen = Pick<Storage, "getItem" | "setItem">;

function almacen(): Almacen | null {
  try {
    return typeof localStorage === "undefined" ? null : localStorage;
  } catch {
    return null;
  }
}

/** Código corto y público: no identifica a la persona, solo agrupa sus invitaciones. */
export function nuevoRef(rand: () => number = Math.random): string {
  const abc = "abcdefghjkmnpqrstuvwxyz23456789";
  let out = "";
  for (let i = 0; i < 7; i++) out += abc[Math.floor(rand() * abc.length)];
  return out;
}

export function refValido(ref: string | null | undefined): ref is string {
  return typeof ref === "string" && /^[a-z0-9]{4,12}$/.test(ref);
}

export function miRef(store: Almacen | null = almacen()): string {
  const prev = store?.getItem(KEY_REF);
  if (refValido(prev)) return prev;
  const r = nuevoRef();
  store?.setItem(KEY_REF, r);
  return r;
}

/** Guarda quién invitó (primer toque) si la URL trae `?ref=` y no es el propio código. */
export function registrarLlegada(search: string, store: Almacen | null = almacen()): string | null {
  const ref = new URLSearchParams(search).get("ref")?.toLowerCase() ?? null;
  if (!refValido(ref)) return null;
  if (store?.getItem(KEY_REF) === ref) return null;
  if (refValido(store?.getItem(KEY_DE))) return null;
  store?.setItem(KEY_DE, ref);
  return ref;
}

export function refDeQuienInvito(store: Almacen | null = almacen()): string | null {
  const r = store?.getItem(KEY_DE);
  return refValido(r) ? r : null;
}

/** Origen para los `leads` de RevelatiO (máximo 80 caracteres en su contrato). */
export function origenVerdad(refDe: string | null): string {
  return refValido(refDe) ? `cieloefata.com/verdad?ref=${refDe}` : "cieloefata.com/verdad";
}

export function enlaceInvitacion(ref: string, origin = "https://www.cieloefata.com"): string {
  return `${origin}/verdad?ref=${ref}#reto`;
}

export function textoInvitacion(enlace: string): string {
  return `Estoy haciendo el reto V.E.R.D.A.D.: 6 días, 6 preguntas, con Santiago 1 y la Biblia abierta. La Biblia no se lee, se estudia. ¿Lo hacemos juntos? Guía gratis: ${enlace}`;
}

export function enviosHechos(store: Almacen | null = almacen()): number {
  const n = Number(store?.getItem(KEY_ENVIOS) ?? 0);
  return Number.isFinite(n) && n > 0 ? Math.min(Math.floor(n), 99) : 0;
}

export function sumarEnvio(store: Almacen | null = almacen()): number {
  const n = Math.min(enviosHechos(store) + 1, 99);
  store?.setItem(KEY_ENVIOS, String(n));
  return n;
}

export function desbloqueado(envios: number): boolean {
  return envios >= HAZLO2_META;
}
