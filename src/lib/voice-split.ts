export type VoiceRole = "guide" | "scripture" | "divine";

export type VozParte = { role: VoiceRole; text: string };

function limpio(s: string) {
  return s.replace(/\s+/g, " ").trim();
}

export function partirEscritura(texto: string, voz?: string): VozParte[] {
  const t = limpio(texto);
  if (!t) return [];
  const d = voz ? limpio(voz) : "";
  if (!d || !t.includes(d)) return [{ role: "scripture", text: t }];
  const i = t.indexOf(d);
  const out: VozParte[] = [];
  const before = t.slice(0, i).trim();
  if (before) out.push({ role: "scripture", text: before });
  out.push({ role: "divine", text: d });
  const after = t.slice(i + d.length).trim();
  if (after) out.push({ role: "scripture", text: after });
  return out;
}

export function partirOir(opts: {
  titulo: string;
  ref: string;
  escritura?: string;
  voz?: string;
  comentario: string;
}): VozParte[] {
  const out: VozParte[] = [];
  const apertura = limpio(`${opts.titulo}. ${opts.ref}.`);
  if (apertura.length > 3) out.push({ role: "guide", text: apertura });
  out.push(...partirEscritura(opts.escritura ?? "", opts.voz));
  let rest = limpio(opts.comentario);
  if (opts.escritura) rest = rest.replace(limpio(opts.escritura), " ").replace(/\s+/g, " ").trim();
  if (opts.titulo) rest = rest.replace(opts.titulo, " ").replace(/\s+/g, " ").trim();
  if (rest.length > 8) out.push({ role: "guide", text: rest });
  return out.filter((p) => p.text.length > 1);
}

export function trozos(texto: string, max = 1600): string[] {
  const plano = limpio(texto);
  if (plano.length <= max) return [plano];
  const out: string[] = [];
  let rest = plano;
  while (rest.length > max) {
    let cut = rest.lastIndexOf(". ", max);
    if (cut < max * 0.4) cut = rest.lastIndexOf(" ", max);
    if (cut < 1) cut = max;
    out.push(rest.slice(0, cut + 1).trim());
    rest = rest.slice(cut + 1).trim();
  }
  if (rest) out.push(rest);
  return out;
}
