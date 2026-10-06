import { createFileRoute, Link } from "@tanstack/react-router";
import { Volver } from "@/components/volver";
import { articulos, DESCRIPCION_ARTICULOS } from "@/lib/articulos";
import { pageHead, tituloSeccion } from "@/lib/seo";

export const Route = createFileRoute("/articulos/")({
  component: ArticulosPage,
  head: () =>
    pageHead({
      path: "/articulos",
      title: tituloSeccion("Artículos"),
      description: DESCRIPCION_ARTICULOS,
      exact: true,
    }),
});

function ArticulosPage() {
  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <Volver />
      <h1 className="mt-2 font-serif text-4xl">Artículos</h1>
      <p className="kicker mt-4">Alejandro Sirit · Editorial Cielo Efata</p>
      <p className="mt-5 text-lg leading-relaxed">
        Un artículo no reemplaza la clase ni el tratado: recoge lo que la casa ya ha escrito sobre
        un pasaje y lo ofrece de una sola lectura, para quien llega con una pregunta y debe volver
        al capítulo entero.
      </p>
      <ul className="mt-10 space-y-10">
        {articulos.map((a) => (
          <li key={a.slug}>
            <article>
              <p className="font-sans text-xs tracking-[0.2em] text-gold uppercase">{a.pasaje}</p>
              <h2 className="mt-2 font-serif text-2xl">
                <Link to="/articulos/$slug" params={{ slug: a.slug }} className="hover:text-gold">
                  {a.title}
                </Link>
              </h2>
              <p className="mt-3 leading-relaxed">{a.resumen}</p>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
}
