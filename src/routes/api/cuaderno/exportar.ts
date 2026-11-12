import { createFileRoute } from "@tanstack/react-router";
import { esEstante, type Estante, type NotaEstudio } from "@/lib/cuaderno-estudio";
import { nombrePdf, pdfDelCuaderno } from "@/lib/cuaderno-pdf";

type Fila = {
  id: string;
  shelf: string;
  texto: string;
  tiene_audio: boolean | string | null;
  fuente: string;
  texto_seleccionado: string;
  referencia: string;
  dia: number | null;
  seccion: string;
  titulo_dia: string;
  pasaje: string;
  fecha_lectura: string | Date | null;
  mana_ref: string;
  created_at: string | Date;
  updated_at: string | Date;
};

function aIso(valor: string | Date): string {
  return valor instanceof Date ? valor.toISOString() : new Date(valor).toISOString();
}

function aDia(valor: string | Date | null): string | null {
  if (valor == null || valor === "") return null;
  if (valor instanceof Date) return valor.toISOString().slice(0, 10);
  return String(valor).slice(0, 10);
}

export const Route = createFileRoute("/api/cuaderno/exportar")({
  server: {
    handlers: {
      GET: async ({ request }) => {
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
        const { getSql } = await import("@/lib/db");
        const { marcarExportacionLista } = await import("@/lib/cuaderno-higiene.server");
        const sql = await getSql();
        const reloj = await sql<{ ahora: Date | string }>`select now() as ahora`;
        const crudo = reloj[0]?.ahora;
        const ahora = crudo instanceof Date ? crudo : new Date(String(crudo));
        const rows = await sql<Fila>`
          select
            id, shelf, texto, (audio is not null) as tiene_audio,
            fuente, texto_seleccionado, referencia, dia, seccion, titulo_dia,
            pasaje, fecha_lectura, mana_ref, created_at, updated_at
          from cuaderno_notas
          where user_id = ${userId}
          order by created_at asc
        `;
        const notas: NotaEstudio[] = rows.map((row) => {
          const shelf: Estante = esEstante(row.shelf) ? row.shelf : "lectura";
          return {
            id: row.id,
            shelf,
            texto: row.texto ?? "",
            tieneAudio: row.tiene_audio === true || row.tiene_audio === "t",
            fuente: row.fuente ?? "",
            textoSeleccionado: row.texto_seleccionado ?? "",
            referencia: row.referencia ?? "",
            dia: row.dia == null ? null : Number(row.dia),
            seccion: row.seccion ?? "",
            tituloDia: row.titulo_dia ?? "",
            pasaje: row.pasaje ?? "",
            fechaLectura: aDia(row.fecha_lectura),
            manaRef: row.mana_ref ?? "",
            createdAt: aIso(row.created_at),
            updatedAt: aIso(row.updated_at),
          };
        });
        const pdf = pdfDelCuaderno(notas, ahora);
        await marcarExportacionLista(sql, userId, ahora);
        const nombre = nombrePdf(ahora);
        return new Response(new Blob([new Uint8Array(pdf)]), {
          headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": `attachment; filename="${nombre}"`,
            "Cache-Control": "no-store",
          },
        });
      },
    },
  },
});
