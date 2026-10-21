import { createFileRoute, Link } from "@tanstack/react-router";
import { Volver } from "@/components/volver";
import { NOSOTROS } from "@/lib/nosotros";
import { AMAZON_AUTHOR } from "@/lib/amazon";
import { pageHead, tituloSeccion } from "@/lib/seo";

export const Route = createFileRoute("/autor")({
  component: AutorPage,
  head: () =>
    pageHead({
      path: "/autor",
      title: tituloSeccion("Alejandro Sirit"),
      description: NOSOTROS.escribe.body[0]!.slice(0, 155),
    }),
});

function AutorPage() {
  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <Volver />
      <p className="kicker mt-6">El autor</p>
      <h1 className="mt-2 font-serif text-4xl">Alejandro Sirit</h1>
      {NOSOTROS.escribe.body.map((p) => (
        <p key={p.slice(0, 40)} className="mt-5 text-lg leading-relaxed">
          {p}
        </p>
      ))}
      <p className="mt-5 text-lg leading-relaxed">{NOSOTROS.editorial.body}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link to="/obras" className="btn btn-ink">Sus libros</Link>
        <a href={`${AMAZON_AUTHOR}?utm_source=cieloefata&utm_medium=autor`} rel="noopener noreferrer" className="btn btn-ghost">
          Página de autor en Amazon
        </a>
        <a href="https://revelatio.app/?utm_source=cieloefata&utm_medium=autor" className="btn btn-ghost">
          RevelatiO, el lector compañero
        </a>
      </div>
    </main>
  );
}
