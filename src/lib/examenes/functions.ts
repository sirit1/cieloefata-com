import { createServerFn } from "@tanstack/react-start";
import { authMiddleware } from "@/lib/auth/middleware";
import { examenPorId } from "./catalogo.ts";

function idExamen(data: unknown): string {
  const id = typeof data === "string" ? data.trim() : "";
  if (!examenPorId(id)) throw new Error("Examen desconocido");
  return id;
}

function entrega(data: unknown): { intentoId: string; respuestas: Record<string, unknown> } {
  const row = data as { intentoId?: unknown; respuestas?: unknown } | null;
  const intentoId = typeof row?.intentoId === "string" ? row.intentoId.trim() : "";
  if (!/^[0-9a-f-]{36}$/i.test(intentoId)) throw new Error("Intento desconocido");
  const respuestas: Record<string, unknown> = {};
  if (row?.respuestas && typeof row.respuestas === "object") {
    for (const [clave, valor] of Object.entries(row.respuestas)) {
      if (/^[a-z0-9-]{1,40}$/.test(clave)) respuestas[clave] = valor;
    }
  }
  return { intentoId, respuestas };
}

function evento(data: unknown): { intentoId: string; tipo: string } {
  const row = data as { intentoId?: unknown; tipo?: unknown } | null;
  const intentoId = typeof row?.intentoId === "string" ? row.intentoId.trim() : "";
  const tipo = typeof row?.tipo === "string" ? row.tipo : "";
  if (!/^[0-9a-f-]{36}$/i.test(intentoId)) throw new Error("Intento desconocido");
  return { intentoId, tipo };
}

function codigo(data: unknown): string {
  return typeof data === "string" ? data.trim() : "";
}

export const listarExamenes = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }) => {
    const { resumenDe } = await import("./repo.server.ts");
    return resumenDe(context.userId);
  });

export const leerExamen = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .validator(idExamen)
  .handler(async ({ data, context }) => {
    const { estadoDe } = await import("./repo.server.ts");
    const estado = await estadoDe(context.userId, data);
    if (!estado) throw new Error("Examen desconocido");
    return estado;
  });

export const comenzarIntento = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator(idExamen)
  .handler(async ({ data, context }) => {
    const { iniciar } = await import("./repo.server.ts");
    return iniciar(context.userId, data);
  });

export const entregarIntento = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator(entrega)
  .handler(async ({ data, context }) => {
    const { entregar, estudianteDe } = await import("./repo.server.ts");
    const estudiante = await estudianteDe(context.userId);
    return entregar(context.userId, estudiante, data.intentoId, data.respuestas);
  });

export const anotarEvento = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator(evento)
  .handler(async ({ data, context }) => {
    const { registrarEvento } = await import("./repo.server.ts");
    await registrarEvento(context.userId, data.intentoId, data.tipo);
    return { ok: true as const };
  });

export const verificarCertificado = createServerFn({ method: "GET" })
  .validator(codigo)
  .handler(async ({ data }) => {
    const { verificar } = await import("./repo.server.ts");
    return verificar(data);
  });
