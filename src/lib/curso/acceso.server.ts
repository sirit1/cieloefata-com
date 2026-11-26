import { authConfigured, getSessionUser } from "@/lib/auth/verify.server";
import { leccionCerradaPara } from "./acceso";

/** El día 1 nunca. Del día 2 en adelante, solo si la auth real está encendida y no hay alumno. */
export async function leccionEstaCerrada(n: number, bearerToken?: string): Promise<boolean> {
  if (!authConfigured) return leccionCerradaPara(n, false, null);
  const user = await getSessionUser(bearerToken);
  return leccionCerradaPara(n, true, user);
}
