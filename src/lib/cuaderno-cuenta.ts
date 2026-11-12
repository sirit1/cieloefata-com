import { getBearerToken } from "@/lib/auth/client";

/** El audio y el PDF salen por HTTP. En la vista previa la sesión viaja en este encabezado. */
export function encabezadosCuenta(): Headers {
  const headers = new Headers();
  const token = getBearerToken();
  if (token) headers.set("Authorization", `Bearer ${token}`);
  return headers;
}
