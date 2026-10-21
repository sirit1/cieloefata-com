import { createFileRoute, Link } from "@tanstack/react-router";
import { Volver } from "@/components/volver";
import { NOSOTROS } from "@/lib/nosotros";
import { pageHead, tituloSeccion } from "@/lib/seo";

export const Route = createFileRoute("/como-se-complementan")({
  component: Pagina,
  head: () =>
    pageHead({
      path: "/como-se-complementan",
      title: tituloSeccion("Cómo se complementan Cielo Efata y RevelatiO"),
      description: "RevelatiO es el lector compañero; Cielo Efata es la casa del estudio, los tratados y los libros.",
    }),
});

const PASOS = [
  { t: "Lee", d: "En RevelatiO lees el capítulo entero, con otras versiones al lado." },
  { t: "Consulta con una Lente", d: "En RevelatiO preguntas al pasaje desde un solo enfoque, sin añadirle lo que no dice." },
  { t: "Guarda en tu cuaderno", d: "Versículos, notas y respuestas quedan en tu cuaderno, el mismo en las dos casas." },
  { t: "Profundiza en Cielo Efata", d: "Aquí están el estudio completo, los tratados, el método V.E.R.D.A.D. y los libros." },
];

function Pagina() {
  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <Volver />
      <p className="kicker mt-6">RevelatiO · by Cielo Efata</p>
      <h1 className="mt-2 font-serif text-4xl">Cómo se complementan</h1>
      <p className="mt-5 text-lg leading-relaxed">{NOSOTROS.revelatio.body}</p>
      <ol className="mt-8 space-y-4">
        {PASOS.map((p, i) => (
          <li key={p.t} className="flex gap-4">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy font-serif text-lg text-gold">{i + 1}</span>
            <span>
              <span className="block font-serif text-xl">{p.t}</span>
              <span className="block leading-relaxed text-ink-soft">{p.d}</span>
            </span>
          </li>
        ))}
      </ol>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <a href="https://revelatio.app/?utm_source=cieloefata&utm_medium=complementan" className="btn btn-ink">Abrir RevelatiO</a>
        <Link to="/estudios" className="btn btn-ghost">Ver los estudios</Link>
        <Link to="/verdad" className="btn btn-ghost">Guía V.E.R.D.A.D. gratis</Link>
      </div>
    </main>
  );
}
