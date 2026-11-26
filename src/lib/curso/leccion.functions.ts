import { createMiddleware, createServerFn } from "@tanstack/react-start";
import { CURSO_DESCRIPCION } from "./acceso";
import { diaPorSlug, type Bloque } from "./index";

export type LeccionCargada = {
  encontrada: boolean;
  bloques: Bloque[];
  cerrado: boolean;
  versiculo: string | null;
  descripcion: string;
};

const vacia: LeccionCargada = {
  encontrada: false,
  bloques: [],
  cerrado: false,
  versiculo: null,
  descripcion: CURSO_DESCRIPCION,
};

/** Reenvía el token del preview. No exige sesión: el día 1 se lee sin cuenta. */
const sesionOpcional = createMiddleware({ type: "function" })
  .client(async ({ next }) => {
    const { getBearerToken } = await import("@/lib/auth/client");
    return next({ sendContext: { bearerToken: getBearerToken() ?? undefined } });
  })
  .server(async ({ next }) => next());

function slugDe(data: unknown): string {
  return typeof data === "string" ? data : "";
}

/**
 * Carga el día en el servidor. Del 2 en adelante, sin nombre y correo,
 * no devuelve el versículo ni el cuerpo.
 */
export const cargarLeccion = createServerFn({ method: "GET" })
  .middleware([sesionOpcional])
  .validator(slugDe)
  .handler(async ({ data: slug, context }): Promise<LeccionCargada> => {
    const dia = diaPorSlug(slug);
    if (!dia) return vacia;
    const bearer = typeof context.bearerToken === "string" ? context.bearerToken : undefined;
    const { leccionEstaCerrada } = await import("./acceso.server");
    if (dia.n > 1 && (await leccionEstaCerrada(dia.n, bearer))) {
      return { ...vacia, encontrada: true, cerrado: true };
    }
    const { textoDia } = await import("./texto.server");
    const { aperturaDia } = await import("./apertura.server");
    const apertura = aperturaDia(dia.n);
    return {
      encontrada: true,
      bloques: await textoDia(dia.n),
      cerrado: false,
      versiculo: apertura?.versiculo ?? null,
      descripcion: apertura?.intro ?? CURSO_DESCRIPCION,
    };
  });
