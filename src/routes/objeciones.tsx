import { createFileRoute, Link } from "@tanstack/react-router";
import { Volver } from "@/components/volver";
import { OBJECIONES, OBJECIONES_INTRO } from "@/lib/objeciones";
import { pageHead } from "@/lib/seo";
import { tratadoDe } from "@/lib/tratados";

export const Route = createFileRoute("/objeciones")({
  component: ObjecionesPage,
  head: () =>
    pageHead({
      path: "/objeciones",
      title: "Objeciones · Cielo Efata",
      description:
        "Versículos que se citan solos —Filipenses 4:13, Jeremías 29:11 y los demás— restituidos al capítulo por los tratados de la casa.",
    }),
});

function ObjecionesPage() {
  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <Volver />
      <p className="kicker">Anti-versiculitis</p>
      <h1 className="mt-2 font-serif text-4xl">Objeciones</h1>
      <p className="mt-6 text-lg leading-relaxed">{OBJECIONES_INTRO}</p>
      <ul className="mt-12 divide-y divide-rule border-y border-rule">
        {OBJECIONES.map((item) => {
          const tratado = tratadoDe(item.tratadoSlug);
          return (
            <li key={item.tratadoSlug} className="py-6">
              <p className="font-sans text-sm tracking-wide text-gold">{item.verse}</p>
              <h2 className="mt-1 font-serif text-2xl">{item.lemma}</h2>
              {tratado ? (
                <Link
                  to="/tratados/$slug"
                  params={{ slug: tratado.slug }}
                  className="mt-3 inline-block font-sans text-sm text-link underline"
                >
                  {tratado.title}
                </Link>
              ) : null}
            </li>
          );
        })}
      </ul>
      <p className="mt-10 font-sans text-sm">
        <Link to="/tratados" className="text-link underline">
          Todos los tratados
        </Link>
        {" · "}
        <Link to="/metodo" className="text-link underline">
          El método que restituye el párrafo
        </Link>
      </p>
    </main>
  );
}
