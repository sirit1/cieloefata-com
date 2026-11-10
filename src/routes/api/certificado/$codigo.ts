import { createFileRoute } from "@tanstack/react-router";
import { codigoValido } from "@/lib/examenes/certificado";

export const Route = createFileRoute("/api/certificado/$codigo")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const codigo = params.codigo?.trim() ?? "";
        if (!codigoValido(codigo)) return new Response("No encontrado", { status: 404 });
        const { filaCertificado } = await import("@/lib/examenes/repo.server.ts");
        const { dibujarCertificado } = await import("@/lib/examenes/pdf.server.ts");
        const fila = await filaCertificado(codigo);
        if (!fila) return new Response("No encontrado", { status: 404 });
        const pdf = await dibujarCertificado({
          codigo: fila.codigo,
          nombre: fila.nombre,
          titulo: fila.titulo,
          puntaje: fila.puntaje,
          fecha: fila.emitidoEn,
        });
        const body = new ArrayBuffer(pdf.byteLength);
        new Uint8Array(body).set(pdf);
        return new Response(body, {
          headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": `inline; filename="certificado-${codigo}.pdf"`,
            "Cache-Control": "private, max-age=300",
            "X-Content-Type-Options": "nosniff",
          },
        });
      },
    },
  },
});
