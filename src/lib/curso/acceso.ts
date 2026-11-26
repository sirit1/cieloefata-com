/**
 * Quién puede seguir el Curso Experto Bíblico después del día 1.
 * La cuenta es la de Better Auth (cuaderno y exámenes): nombre y correo.
 */

export const CURSO_LECCIONES = 365;
export const MIN_CONTRASENA = 8;
export const MAX_CONTRASENA = 128;

export const CURSO_TITULO = `Curso Experto Bíblico · ${CURSO_LECCIONES} lecciones`;

/** Meta, Open Graph y ficha: las frases del curso, en una sola medida. */
export const CURSO_DESCRIPCION =
  "Hay 365 lecciones, entregadas día por día. Se lee y se escudriña la Escritura a su tiempo. No hay rachas ni plazos. Al finalizar el curso hay certificado.";

export const CURSO_LEAD =
  "Hay trescientas sesenta y cinco lecciones, y se entregan día por día.";

export const CURSO_RITMO =
  "Se lee y se escudriña la Escritura a su tiempo. No hay rachas ni plazos. Al finalizar el curso hay certificado.";

export const CURSO_CUENTA =
  "El curso no se cobra. La primera lección está abierta, sin cuenta. Para seguir, el estudiante deja su nombre y su correo: es la misma cuenta del cuaderno. El índice de abajo es el módulo uno, ya escrito. Lo que aún no está escrito se entrega a su tiempo.";

export const CURSO_PORTADA =
  "Trescientas sesenta y cinco lecciones, día por día. Se lee y se escudriña la Escritura a su tiempo.";

const CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export type AlumnoNombreCorreo = {
  name?: string | null;
  email?: string | null;
};

/** El día 1 se lee sin cuenta. Del 2 en adelante, la cuenta pide nombre y correo. */
export function leccionRequiereInscripcion(n: number): boolean {
  return Number.isInteger(n) && n > 1;
}

export function alumnoConNombreYCorreo(user: AlumnoNombreCorreo | null): boolean {
  if (!user) return false;
  const name = user.name?.trim() ?? "";
  const email = user.email?.trim().toLowerCase() ?? "";
  if (!name || !CORREO.test(email)) return false;
  if (email.endsWith(".invalid") || email === "dev@example.com") return false;
  return true;
}

/**
 * Con la auth apagada (el modo local del archivo de entorno) no hay cuenta real:
 * la lección sigue como hasta ahora. Con la auth encendida, el día 1 queda
 * abierto y el resto espera un alumno con nombre y correo.
 */
export function leccionCerradaPara(
  n: number,
  authActivo: boolean,
  user: AlumnoNombreCorreo | null,
): boolean {
  if (!leccionRequiereInscripcion(n)) return false;
  if (!authActivo) return false;
  return !alumnoConNombreYCorreo(user);
}

export function alumnoDeCuenta(
  user: {
    displayName: string | null;
    primaryEmail: string | null;
    isDevFallback?: boolean;
  } | null,
): boolean {
  if (!user || user.isDevFallback) return false;
  return alumnoConNombreYCorreo({ name: user.displayName, email: user.primaryEmail });
}

export function validarInscripcion(input: {
  nombre: string;
  email: string;
  contrasena: string;
  consentimiento: boolean;
  modo: "crear" | "entrar";
}): string | null {
  const email = input.email.trim();
  if (!CORREO.test(email)) return "Revisa el correo.";
  if (input.contrasena.length < MIN_CONTRASENA || input.contrasena.length > MAX_CONTRASENA) {
    return "La contraseña necesita entre 8 y 128 caracteres.";
  }
  if (input.modo === "entrar") return null;
  if (!input.nombre.trim()) return "Escribe tu nombre.";
  if (!input.consentimiento) return "Marca la casilla para que la escuela guarde tu nombre y tu correo.";
  return null;
}

export function mensajeAuth(
  error: { code?: string; message?: string } | null | undefined,
  modo: "crear" | "entrar",
): string {
  const code = error?.code ?? "";
  if (code === "USER_ALREADY_EXISTS" || code === "USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL") {
    return "Ese correo ya tiene cuenta. Entra con él.";
  }
  if (code === "NAME_REQUIRED") return "Escribe tu nombre.";
  if (code === "INVALID_EMAIL") return "Revisa el correo.";
  if (code === "PASSWORD_TOO_SHORT" || code === "PASSWORD_TOO_LONG") {
    return "La contraseña necesita entre 8 y 128 caracteres.";
  }
  if (code === "INVALID_EMAIL_OR_PASSWORD" || code === "INVALID_PASSWORD") {
    return "El correo o la contraseña no coinciden.";
  }
  return modo === "crear"
    ? "No se pudo abrir la cuenta. Revisa el nombre, el correo y la contraseña."
    : "No se pudo entrar. Revisa el correo y la contraseña.";
}
