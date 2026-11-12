import { createFileRoute } from "@tanstack/react-router";

/**
 * Reloj del servidor para el cuaderno.
 * Vercel Cron llama este camino aunque nadie abra el sitio.
 * La hora es `now()` de la base, no la del navegador.
 */
function autorizado(request: Request): boolean {
  const secret = process.env.CRON_SECRET?.trim();
  const auth = request.headers.get("authorization");
  if (secret) return auth === `Bearer ${secret}`;
  // Sin secreto, solo la llamada que Vercel marca como cron. El reloj sigue siendo el de la base.
  return request.headers.get("x-vercel-cron") === "1";
}

async function correr(request: Request): Promise<Response> {
  if (!autorizado(request)) return new Response("Unauthorized", { status: 401 });
  const { getSql } = await import("@/lib/db");
  const { aplicarHigieneGlobal } = await import("@/lib/cuaderno-higiene.server");
  const sql = await getSql();
  const rows = await sql<{ ahora: Date | string }>`select now() as ahora`;
  const valor = rows[0]?.ahora;
  const ahora = valor instanceof Date ? valor : new Date(String(valor));
  const resultado = await aplicarHigieneGlobal(sql, ahora, { forzar: true });
  const borradas = resultado.resultados.reduce((n, r) => n + r.borradas, 0);
  return Response.json({
    ok: true,
    usuarios: resultado.resultados.length,
    borradas,
    ahora: ahora.toISOString(),
  });
}

export const Route = createFileRoute("/api/cuaderno/higiene")({
  server: {
    handlers: {
      GET: async ({ request }) => correr(request),
      POST: async ({ request }) => correr(request),
    },
  },
});
