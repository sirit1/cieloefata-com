import { COLOFON_TITULO, COLOFON_TRATADOS, type BloqueColofon } from "@/lib/colofon";

type Grupo = { tipo: "h" | "p"; texto: string } | { tipo: "ul"; items: string[] };

function agrupar(bloques: readonly BloqueColofon[]): Grupo[] {
  const grupos: Grupo[] = [];
  for (const b of bloques) {
    if (b.tipo === "li") {
      const ultimo = grupos.at(-1);
      if (ultimo && ultimo.tipo === "ul") ultimo.items.push(b.texto);
      else grupos.push({ tipo: "ul", items: [b.texto] });
    } else {
      grupos.push({ tipo: b.tipo, texto: b.texto });
    }
  }
  return grupos;
}

/** Colofón común a todos los tratados: fuentes, versiones y aviso de derechos. */
export function ColofonTratado() {
  return (
    <section
      aria-labelledby="colofon-tratado"
      className="mt-14 border-t border-rule pt-10 font-sans text-sm leading-relaxed text-ink-soft"
    >
      <h2 id="colofon-tratado" className="font-serif text-2xl text-ink">
        {COLOFON_TITULO}
      </h2>
      <div className="mt-4 space-y-3">
        {agrupar(COLOFON_TRATADOS).map((g, i) =>
          g.tipo === "h" ? (
            <h3 key={i} className="pt-4 font-serif text-lg text-ink">
              {g.texto}
            </h3>
          ) : g.tipo === "ul" ? (
            <ul key={i} className="list-disc space-y-1 pl-5">
              {g.items.map((t, j) => (
                <li key={j}>{t}</li>
              ))}
            </ul>
          ) : (
            <p key={i}>{g.texto}</p>
          ),
        )}
      </div>
    </section>
  );
}
