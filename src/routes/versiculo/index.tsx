import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead, tituloSeccion } from "@/lib/seo";
import { VERSICULOS } from "@/lib/versiculos";

export const Route = createFileRoute("/versiculo/")({
  head: () =>
    pageHead({
      path: "/versiculo",
      title: tituloSeccion("Versículos clave"),
      description:
        "Versículos clave de la Biblia en la Reina-Valera 1960. Cada uno con su palabra central en hebreo o griego y su número Strong explicado.",
    }),
  component: VersiculosPage,
});

function VersiculosPage() {
  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <p className="kicker">Versículos clave</p>
      <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
        Lo que dice el versículo, en su lengua y en su capítulo
      </h1>
      <p className="mt-6 text-lg leading-relaxed">
        Cada página toma un versículo que sostiene un libro o un estudio de la escuela, lo cita
        en la Reina-Valera 1960 y abre la palabra central en el hebreo o el griego original, con
        su número Strong explicado. Desde ahí se vuelve al capítulo entero, porque el versículo
        suelto no se entiende sin el párrafo que lo rodea.
      </p>
      <ul className="mt-10 space-y-6">
        {VERSICULOS.map((v) => (
          <li key={v.slug} className="border-t border-rule pt-5">
            <Link to="/versiculo/$slug" params={{ slug: v.slug }} className="font-serif text-2xl hover:text-gold">
              {v.ref}
            </Link>
            <p className="mt-2 leading-relaxed text-ink-soft">
              «{v.traduce}»: <span lang={v.lengua === "hebreo" ? "he" : "grc"}>{v.lema}</span> ({v.translit}),
              Strong {v.strong}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
