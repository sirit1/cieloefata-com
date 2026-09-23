import { createFileRoute, Link } from "@tanstack/react-router";
import { Lema } from "@/components/lema";
import { wordOfDay } from "@/lib/content";

import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/palabra")({
  component: PalabraPage,
  head: () =>
    pageHead({
      path: "/palabra",
      title: "Palabra · Cielo Efata",
      description:
        "Una raíz hebrea o griega, tres pasajes. El léxico no predica: el pasaje predica.",
    }),
});

function PalabraPage() {
  const word = wordOfDay();
  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <p className="font-sans text-xs tracking-[0.2em] text-gold uppercase">Hoy</p>
      <h1 className="mt-2 font-serif text-4xl">Una palabra, tres pasajes</h1>
      <p className="mt-5 text-lg leading-relaxed">
        La misma raíz, hebrea o griega, se lee en tres lugares del canon para no quedarnos con el
        diccionario. El léxico no predica: el pasaje predica. El que se lleva solo la glosa se
        lleva un ídolo pequeño, porque una palabra sin capítulo es versiculitis con Strong.
      </p>
      <p className="mt-2 font-sans text-sm tracking-wide text-gold">Hch. 17:11 · 2 Ti. 2:15</p>
      <div className="mt-10 border border-rule bg-paper p-6">
        <p className="font-serif text-4xl text-ink">
          <Lema token={word.lemma} />
        </p>
        <p className="mt-2 text-lg leading-relaxed">{word.gloss}</p>
        <p className="mt-1 font-sans text-sm tracking-wide text-gold">Strong {word.strong}</p>
      </div>
      <ol className="mt-8 list-decimal space-y-3 pl-5">
        {word.passages.map((p) => (
          <li key={p} className="text-lg leading-relaxed">
            {p}
          </li>
        ))}
      </ol>
      <Link to="/estudios" className="mt-10 inline-block font-sans text-sm text-link underline">
        Un estudio que abre el capítulo
      </Link>
    </main>
  );
}