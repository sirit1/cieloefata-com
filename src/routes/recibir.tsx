import { createFileRoute } from "@tanstack/react-router";
import { PasajeSemana } from "@/components/pasaje-semana";
import { RecibirForm } from "@/components/recibir-form";
import { pageHead, tituloSeccion } from "@/lib/seo";

export const Route = createFileRoute("/recibir")({
  validateSearch: (raw: Record<string, unknown>): { libro?: string } =>
    typeof raw.libro === "string" && raw.libro.trim() ? { libro: raw.libro.trim() } : {},
  head: () =>
    pageHead({
      path: "/recibir",
      title: tituloSeccion("Recibir el capítulo 1 y el pasaje de la semana"),
      description:
        "Descarga gratis el capítulo 1 de un libro de la serie Cielo Efata y, si quieres, recibe el pasaje de la semana por WhatsApp. La Palabra no se cobra.",
    }),
  component: RecibirPage,
});

function RecibirPage() {
  const { libro } = Route.useSearch();
  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <p className="kicker">Recibir</p>
      <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
        El capítulo 1, y el pasaje de la semana
      </h1>
      <p className="mt-6 text-lg leading-relaxed">
        La Palabra no se cobra. El capítulo 1 de cada libro publicado de la serie se descarga aquí
        mismo, gratis y en PDF, para leerlo junto al capítulo de la Biblia en que se apoya; y quien lo pida puede recibir
        también, una vez por semana, el pasaje que se lee en RevelatiO, el lector de la casa.
        Quien quiera sostener el trabajo puede hacerlo, pero nadie paga por la Escritura.
      </p>
      <p className="mt-4 leading-relaxed">
        ¿Quieres aprender a estudiar la Biblia por tu cuenta?{" "}
        <a href="/verdad" className="text-link underline">Descarga gratis la guía del Método V.E.R.D.A.D.</a> y haz el reto de 6 días.
      </p>
      <RecibirForm libroInicial={libro} />
      <PasajeSemana />
    </main>
  );
}
