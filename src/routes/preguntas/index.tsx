import { createFileRoute, Link } from "@tanstack/react-router";
import { Volver } from "@/components/volver";
import { PREGUNTAS } from "@/lib/preguntas";
import { versiculoContexto } from "@/lib/versiculos-contexto";
import { pageHead, tituloSeccion } from "@/lib/seo";

export const Route = createFileRoute("/preguntas/")({
  component: PreguntasPage,
  head: () =>
    pageHead({
      path: "/preguntas",
      title: tituloSeccion("¿Qué dice la Biblia sobre…?"),
      description:
        "Preguntas breves sobre versículos muy citados —Filipenses 4:13, Jeremías 29:11, Malaquías 3:10 y otros—, con el texto en Reina-Valera 1960 y el tratado que los devuelve a su capítulo.",
    }),
});

function PreguntasPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 md:py-24">
      <Volver />
      <p className="kicker">Preguntas bíblicas</p>
      <h1 className="hero-titulo mt-3 max-w-[14em]">¿Qué dice la Biblia sobre…?</h1>
      <p className="mt-6 max-w-[40em] text-lg leading-relaxed">
        Una pregunta por página. Cada una pone el versículo a la vista en la Reina-Valera 1960, da
        una respuesta breve y te lleva al tratado donde se lee dentro de su capítulo.
      </p>
      <ul className="mt-12 grid gap-4 sm:grid-cols-2">
        {PREGUNTAS.map((p) => (
          <li key={p.slug}>
            <Link
              to={versiculoContexto(p.slug) ? "/versiculos/$slug" : "/preguntas/$slug"}
              params={{ slug: p.slug }}
              className="tarjeta"
            >
              <span className="font-sans text-xs tracking-[0.16em] text-gold uppercase">{p.verse}</span>
              <span className="mt-2 block font-serif text-2xl leading-snug">¿Qué significa {p.verse}?</span>
              <span className="mt-2 block leading-relaxed text-ink-soft">{p.lemma}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
