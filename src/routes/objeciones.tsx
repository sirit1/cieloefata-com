import { createFileRoute, Link } from "@tanstack/react-router";
import { Refs } from "@/components/cite";
import { Volver } from "@/components/volver";
import { OBJECIONES } from "@/lib/objeciones";
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
      <h1 className="mt-2 font-serif text-4xl">Los versículos que viajan solos</h1>
      <p className="mt-6 text-lg leading-relaxed">
        Hay un versículo que se recita para no leer el capítulo. La versiculitis extrae una unidad
        delimitada por la numeración tardía y la desgaja del párrafo, del pacto y del canon. Un
        texto fuera de su contexto se convierte en pretexto. Esta página no inventa preguntas: abre
        la puerta a los tratados que ya existen, para que Filipenses 4:13 vuelva a la cárcel y
        Jeremías 29:11 vuelva al destierro.
      </p>
      <Refs refs="Neh. 8:8 · 2 P. 3:16 · 2 Ti. 2:15" />
      <ul className="mt-12 divide-y divide-rule border-y border-rule">
        {OBJECIONES.map((item) => {
          const tratado = tratadoDe(item.tratadoSlug);
          return (
            <li key={item.verse} className="py-6">
              <p className="font-sans text-sm tracking-wide text-gold">{item.verse}</p>
              <h2 className="mt-1 font-serif text-2xl">{item.lemma}</h2>
              <p className="mt-3 leading-relaxed text-ink-soft">{item.line}</p>
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
