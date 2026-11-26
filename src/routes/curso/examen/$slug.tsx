import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ExamenCurso } from "@/components/examen-curso";
import { InscripcionCurso } from "@/components/inscripcion-curso";
import { examenPorId } from "@/lib/examenes/catalogo";
import { authEnabled } from "@/lib/auth/client";
import { alumnoDeCuenta } from "@/lib/curso/acceso";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
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
  const { user, isPending } = useCurrentUserState();
  const cerrado = authEnabled && (isPending || !alumnoDeCuenta(user));
  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <p className="kicker">Escuela Bíblica Cielo Efata · gratis</p>
      <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">{examen.titulo}</h1>
      <p className="mt-4">
        <Link to="/curso/examenes" className="text-link underline">
          Todos los exámenes
        </Link>
      </p>
      {isPending && authEnabled ? <p className="mt-8 text-ink-soft">Cargando…</p> : null}
      {authEnabled && !isPending && !alumnoDeCuenta(user) ? (
        <InscripcionCurso volver={`/curso/examen/${examen.id}`} />
      ) : null}
      {cerrado ? null : <ExamenCurso examenId={examen.id} />}
    </main>
  );
}
