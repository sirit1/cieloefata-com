import { createFileRoute, Link } from "@tanstack/react-router";
import { Refs } from "@/components/cite";
import { BtnArrow } from "@/components/motif";
import { Volver } from "@/components/volver";
import { CAMINO } from "@/lib/camino";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/camino")({
  component: CaminoPage,
  head: () =>
    pageHead({
      path: "/camino",
      title: "El camino · Cielo Efata",
      description:
        "Conocer a Dios, convicción, arrepentimiento, bautismo, conversión y permanecer. Cada paso oye un pasaje ya escrito en la escuela.",
    }),
});

function CaminoPage() {
  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <Volver />
      <p className="kicker">Pastoral</p>
      <h1 className="mt-2 font-serif text-4xl">El camino</h1>
      <p className="mt-6 text-lg leading-relaxed">
        La doctrina de esta casa ya toca el pecado, el arrepentimiento, el Espíritu y el bautismo.
        Faltaba oírlo como un solo itinerario, no como un cartel de pasos. Quien llega no recibe
        una lista de hábitos. Recibe pasajes. El orden no es un embudo de venta: es el modo en que
        la Escritura suele abrir el oído —conocer a Dios, ser convencido, volverse, bajar al agua,
        nacer de lo alto y permanecer— hasta que la vocación se hace firme.
      </p>
      <Refs refs="Jn. 1:14 · Ro. 1:16 · Mr. 1:15 · Hch. 2:38 · Jn. 3:3 · 2 P. 1:5–10" />
      <ol className="mt-12 space-y-12">
        {CAMINO.map((paso, i) => (
          <li key={paso.slug} id={paso.slug} className="scroll-mt-24">
            <p className="font-sans text-xs tracking-[0.2em] text-gold uppercase">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-2 font-serif text-3xl">{paso.name}</h2>
            <p className="mt-1 text-gold">{paso.ref}</p>
            <p className="mt-4 leading-relaxed">{paso.body}</p>
            <Link
              to="/estudios/$slug"
              params={{ slug: paso.studySlug }}
              className="btn btn-ink mt-5"
            >
              Escudriñar {paso.ref}
              <BtnArrow />
            </Link>
          </li>
        ))}
      </ol>
      <p className="mt-14 leading-relaxed text-ink-soft">
        Marcos 1, Juan 3 y Hechos 2 permanecen como clases en preparación: se pueden abrir como
        fichas. El umbral con pack sigue siendo Marcos 7. El que camina no espera a que el Drive
        esté completo: oye el pasaje en RevelatiO y escribe el acto en el cuaderno.
      </p>
      <p className="mt-6 font-sans text-sm">
        <Link to="/metodo" className="text-link underline">
          Cómo se recorre un pasaje
        </Link>
        {" · "}
        <Link to="/cuaderno" className="text-link underline">
          Escribir el acto
        </Link>
      </p>
    </main>
  );
}
