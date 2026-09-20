import { createFileRoute } from "@tanstack/react-router";
import type { VoiceRole } from "@/lib/voice-split";

function asRole(r: string | null): VoiceRole {
  if (r === "scripture" || r === "divine") return r;
  return "guide";
}

export const Route = createFileRoute("/api/voz")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { elevenStream } = await import("@/lib/eleven");
        const body = (await request.json().catch(() => null)) as { text?: string; role?: VoiceRole } | null;
        const text = (body?.text ?? "").replace(/\s+/g, " ").trim().slice(0, 2200);
        if (text.length < 2) return new Response("empty", { status: 400 });
        const out = await elevenStream(text, asRole(body?.role ?? "scripture"));
        if ("error" in out) {
          return new Response(out.error, { status: out.error === "nockey" ? 204 : 502 });
        }
        return new Response(out.stream, {
          headers: {
            "Content-Type": "audio/mpeg",
            "Cache-Control": "no-store",
          },
        });
      },
    },
  },
});
