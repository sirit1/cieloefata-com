import { createFileRoute } from "@tanstack/react-router";

/**
 * Monta el Better Auth que ya usa el cuaderno y los exámenes.
 * El cliente llama a `/api/auth/*` en el mismo origen.
 */
async function responder({ request }: { request: Request }) {
  if (request.method === "POST" && new URL(request.url).pathname.endsWith("/sign-up/email")) {
    const rechazo = await nombreObligatorio(request);
    if (rechazo) return rechazo;
  }
  const { auth } = await import("@/lib/auth/server");
  return auth.handler(request);
}

/** Better Auth acepta un nombre vacío. La cuenta del curso no. */
async function nombreObligatorio(request: Request): Promise<Response | null> {
  let body: unknown;
  try {
    body = await request.clone().json();
  } catch {
    return null;
  }
  const name = body && typeof body === "object" && "name" in body ? body.name : "";
  if (typeof name === "string" && name.trim()) return null;
  return Response.json(
    { message: "El nombre es necesario.", code: "NAME_REQUIRED" },
    { status: 400 },
  );
}

export const Route = createFileRoute("/api/auth/$")({
  server: {
    handlers: {
      GET: responder,
      POST: responder,
    },
  },
});
