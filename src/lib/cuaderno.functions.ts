import { createServerFn } from "@tanstack/react-start";
import { authMiddleware } from "@/lib/auth/middleware";
import type { CuadernoEntry } from "@/lib/cuaderno-store";

function acto(data: unknown): CuadernoEntry {
  const row = data as Partial<CuadernoEntry> | null;
  const decision = row?.decision?.trim() ?? "";
  const ref = row?.ref?.trim() ?? "";
  const at = row?.at?.trim() ?? "";
  if (!decision || !ref || !at) throw new Error("acto incompleto");
  return {
    ref: ref.slice(0, 240),
    indicativo: (row?.indicativo ?? "").trim().slice(0, 2000),
    decision: decision.slice(0, 2000),
    testigo: (row?.testigo ?? "").trim().slice(0, 240),
    note: (row?.note ?? "").trim().slice(0, 2000),
    at,
  };
}

export const leerActos = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async ({ context }): Promise<CuadernoEntry[]> => {
    const { getSql } = await import("@/lib/db");
    const sql = await getSql();
    const rows = await sql<{
      ref: string;
      indicativo: string;
      decision: string;
      testigo: string;
      note: string;
      at: string;
    }>`
      select ref, indicativo, decision, testigo, note, at
      from cuaderno_actos
      where user_id = ${context.userId}
      order by at desc
      limit 200
    `;
    return rows.map((row) => ({
      ref: row.ref,
      indicativo: row.indicativo,
      decision: row.decision,
      testigo: row.testigo,
      note: row.note,
      at: row.at,
    }));
  });

export const guardarActo = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator(acto)
  .handler(async ({ data, context }) => {
    const { getSql } = await import("@/lib/db");
    const sql = await getSql();
    await sql`
      insert into cuaderno_actos (user_id, ref, indicativo, decision, testigo, note, at)
      values (
        ${context.userId},
        ${data.ref},
        ${data.indicativo},
        ${data.decision},
        ${data.testigo},
        ${data.note},
        ${data.at}
      )
      on conflict (user_id, at) do nothing
    `;
    return { ok: true as const };
  });
