import { Term } from "@/components/cite";
import { hallarGlosas } from "@/lib/glosas";
import { ORIGINAL_RE, strongDe, tituloStrong } from "@/lib/strong";

function langDe(token: string) {
  if (/[\u0590-\u05FF]/.test(token)) return "he";
  if (/[\u0370-\u03FF\u1F00-\u1FFF]/.test(token)) return "el";
  return undefined;
}

export function Lema({ token }: { token: string }) {
  return (
    <Term title={tituloStrong(token)}>
      <span lang={langDe(token)}>{token}</span>
    </Term>
  );
}

export function numerosStrong(texto: string): string {
  const out: string[] = [];
  const re = new RegExp(ORIGINAL_RE.source, "g");
  let m: RegExpExecArray | null;
  while ((m = re.exec(texto))) {
    const e = strongDe(m[0]);
    if (e && !out.includes(e.strong)) out.push(e.strong);
  }
  return out.join(" · ");
}

type Hit = { start: number; end: number; node: React.ReactNode };

export function ConLemas({ children }: { children: React.ReactNode }) {
  const text = typeof children === "string" ? children : String(children ?? "");
  const hits: Hit[] = [];

  const take = (start: number, end: number, node: React.ReactNode) => {
    if (hits.some((h) => start < h.end && end > h.start)) return;
    hits.push({ start, end, node });
  };

  for (const g of hallarGlosas(text)) {
    take(g.start, g.end, <Term key={`g-${g.start}`} title={g.texto}>{g.token}</Term>);
  }

  const re = new RegExp(ORIGINAL_RE.source, "g");
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    take(m.index, m.index + m[0].length, <Lema key={`o-${m.index}`} token={m[0]} />);
  }

  hits.sort((a, b) => a.start - b.start || b.end - a.end);

  const nodes: React.ReactNode[] = [];
  let last = 0;
  for (const h of hits) {
    if (h.start < last) continue;
    if (h.start > last) nodes.push(text.slice(last, h.start));
    nodes.push(h.node);
    last = h.end;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return <>{nodes}</>;
}
