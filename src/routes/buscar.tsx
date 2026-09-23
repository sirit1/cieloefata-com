import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Volver } from "@/components/volver";
import { buscarCasa, type Hallazgo } from "@/lib/descubrimiento";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/buscar")({
  validateSearch: (raw: Record<string, unknown>): { q?: string } => {
    if (typeof raw.q === "string" && raw.q.trim()) return { q: raw.q };
    return {};
  },
  head: () =>
    pageHead({
      path: "/buscar",
      title: "Buscar · Cielo Efata",
      description:
        "Buscar por pasaje o tema en los estudios, tratados y objeciones de la casa. El texto manda; el índice solo señala.",
    }),
  component: BuscarPage,
});

const KIND: Record<Hallazgo["kind"], string> = {
  estudio: "Estudio",
  tratado: "Tratado",
  objecion: "Objeción",
};

function BuscarPage() {
  const { q: inicial = "" } = Route.useSearch();
  const [q, setQ] = useState(inicial);
  const hits = useMemo(() => buscarCasa(q), [q]);

  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <Volver />
      <p className="kicker">El índice de la casa</p>
      <h1 className="mt-2 font-serif text-4xl">Buscar por pasaje o tema</h1>
      <p className="mt-6 text-lg leading-relaxed">
        No hay un motor detrás de esta página. Se filtra lo que ya está escrito: estudios,
        tratados y las objeciones de versiculitis. Escribe un pasaje —Filipenses 4:13, Isaías
        53— o un lema que viaja solo. El índice señala; el capítulo manda.
      </p>
      <form
        className="mt-8"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label className="block font-sans text-xs tracking-widest text-muted uppercase">
          Pasaje o tema
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Filipenses 2, llaga, espejo, Jeremías 29…"
            className="mt-2 min-h-11 w-full border border-rule bg-paper px-3 font-serif text-lg"
            autoFocus
          />
        </label>
      </form>
      {q.trim().length >= 2 ? (
        <p className="mt-6 font-sans text-sm text-ink-soft">
          {hits.length === 0
            ? "Nada en el aula responde a esa búsqueda. Prueba el libro, el lema o el número del versículo."
            : `${hits.length} ${hits.length === 1 ? "ficha" : "fichas"}`}
        </p>
      ) : (
        <p className="mt-6 font-sans text-sm text-ink-soft">
          Escribe al menos dos letras. El índice no inventa un resultado.
        </p>
      )}
      <ul className="mt-8 divide-y divide-rule border-y border-rule">
        {hits.map((item) => (
          <li key={`${item.kind}-${item.slug}-${item.ref}`} className="py-5">
            <p className="font-sans text-xs tracking-[0.16em] text-gold uppercase">
              {KIND[item.kind]} · {item.ref}
            </p>
            <h2 className="mt-1 font-serif text-2xl">
              {item.kind === "objecion" ? (
                <Link to="/objeciones" hash={item.slug} className="hover:text-gold">
                  {item.title}
                </Link>
              ) : item.kind === "estudio" ? (
                <Link to="/estudios/$slug" params={{ slug: item.slug }} className="hover:text-gold">
                  {item.title}
                </Link>
              ) : (
                <Link to="/tratados/$slug" params={{ slug: item.slug }} className="hover:text-gold">
                  {item.title}
                </Link>
              )}
            </h2>
            <p className="mt-2 leading-relaxed text-ink-soft">{item.blurb}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
