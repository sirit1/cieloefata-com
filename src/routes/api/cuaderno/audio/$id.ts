import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/cuaderno/audio/$id")({
  server: {
    handlers: {
      GET: async ({ request, params }) => {
        const { assertSameSiteRequest } = await import("@/lib/auth/isolation.server");
        const { requireUserId, UnauthorizedError } = await import("@/lib/auth/verify.server");
        try {
          assertSameSiteRequest();
        } catch {
          return new Response("Forbidden", { status: 403 });
        }
        const header = request.headers.get("authorization");
        const bearer = header?.toLowerCase().startsWith("bearer ") ? header.slice(7).trim() : undefined;
        let userId: string;
        try {
          userId = await requireUserId(bearer);
        } catch (err) {
          const status = err instanceof UnauthorizedError ? 401 : 401;
          return new Response("Unauthorized", { status });
        }
        const id = params.id?.trim() ?? "";
        if (!/^[0-9a-f-]{36}$/i.test(id)) return new Response("Nota desconocida.", { status: 400 });
        const { getSql } = await import("@/lib/db");
        const sql = await getSql();
        const rows = await sql<{ hex: string | null; audio_mime: string | null }>`
          select encode(audio, 'hex') as hex, audio_mime
          from cuaderno_notas
          where id = ${id} and user_id = ${userId}
        `;
        const hex = rows[0]?.hex;
        if (!hex) return new Response("Sin audio.", { status: 404 });
        const bytes = Uint8Array.from(hex.match(/.{1,2}/g)?.map((b) => Number.parseInt(b, 16)) ?? []);
        return new Response(new Blob([bytes]), {
          headers: {
            "Content-Type": rows[0]?.audio_mime || "audio/webm",
            "Cache-Control": "private, no-store",
          },
        });
      },
    },
  },
});
