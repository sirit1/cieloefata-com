import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ExamenCurso } from "@/components/examen-curso";
import { examenPorId } from "@/lib/examenes/catalogo";
import { pageHead, tituloSeccion } from "@/lib/seo";

export const Route = createFileRoute("/curso/examen/$slug")({
  loader: ({ params }) => {
    const examen = examenPorId(params.slug);
    if (!examen) throw notFound();
    return { examen };
  },
  head: ({ loaderData }) => {
    const examen = loaderData?.examen;
    if (!examen) return {};
    return pageHead({
      path: `/curso/examen/${examen.id}`,
      title: tituloSeccion(`${examen.titulo} · Examen`),
      description: `Examen gratis de ${examen.nombreCertificado}. Dos intentos, con tiempo, y certificado al aprobar.`,
    });
  },
  component: PaginaExamen,
});

function PaginaExamen() {
  const { examen } = Route.useLoaderData();
  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <p className="kicker">Escuela Bíblica Cielo Efata · gratis</p>
      <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">{examen.titulo}</h1>
      <p className="mt-4">
        <Link to="/curso/examenes" className="text-link underline">
          Todos los exámenes
        </Link>
      </p>
      <ExamenCurso examenId={examen.id} />
    </main>
  );
}
