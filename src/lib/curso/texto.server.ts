import type { Bloque } from "./index";

const textos = import.meta.glob<{ default: Bloque[] }>("./texto/dia-*.ts");

/** El cuerpo de la lección se carga en el servidor. El día cerrado no lo pide. */
export async function textoDia(n: number): Promise<Bloque[]> {
  const key = `./texto/dia-${String(n).padStart(2, "0")}.ts`;
  const load = textos[key];
  if (!load) return [];
  return (await load()).default;
}
