import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { IndiceLeccion } from "@/components/indice-leccion";
import { LeccionCuerpo } from "@/components/leccion-curso";
import { Subir } from "@/components/subir";
import { LeccionJsonLd } from "@/components/json-ld";
import { CURSO_NOMBRE, CURSO_PATH, CURSO_PUBLICADO, DIAS, diaPorSlug, textoDia } from "@/lib/curso";
import { metaDescription, pageHead, tituloSeccion } from "@/lib/seo";

export const Route = createFileRoute("/curso/$slug")({
  loader: async ({ params }) => {
    const dia = diaPorSlug(params.slug);
    if (!dia) throw notFound();
    return { dia, bloques: await textoDia(dia.n) };
  },
  head: ({ loaderData }) => {
    const d = loaderData?.dia;
    if (!d) return {};
    return pageHead({
      path: `${CURSO_PATH}/${d.slug}`,
      title: tituloSeccion(`Día ${d.n}: ${d.titulo} · ${CURSO_NOMBRE}`),
      description: d.intro,
    });
  },
  component: DiaPage,
});

function DiaPage() {
  const { dia, bloques } = Route.useLoaderData();
  const prev = DIAS.find((d) => d.n === dia.n - 1);
  const next = DIAS.find((d) => d.n === dia.n + 1);
  const path = `${CURSO_PATH}/${dia.slug}`;
  return (
    <main id="leccion" className="casa-escuela">
      <LeccionJsonLd
        headline={`Día ${dia.n}. ${dia.titulo}`}
        description={metaDescription(dia.intro)}
        path={path}
        published={CURSO_PUBLICADO}
        cursoNombre={CURSO_NOMBRE}
        cursoPath={CURSO_PATH}
      />
      <p className="kicker">
        <Link to="/curso" className="underline">
          {CURSO_NOMBRE}
        </Link>{" "}
        · Día {dia.n}
      </p>
      <h1 className="mt-3">{dia.titulo}</h1>
      <p className="casa-una-linea mt-4">Versículo para memorizar: {dia.cita}</p>
      <p className="kicker mt-4">Escuela Bíblica Cielo Efata · Dr. (h. c.) Alejandro Sirit</p>
      <IndiceLeccion raiz="leccion" />
      <aside className="casa-verso mt-8">
        <p className="kicker">Versículo para memorizar · {dia.cita}</p>
        <p className="mt-2 font-serif text-xl leading-relaxed">«{dia.versiculo}»</p>
      </aside>
      <LeccionCuerpo bloques={bloques} />
      <p className="mt-12 text-sm leading-relaxed text-ink-soft">
        Texto bíblico tomado de la versión Reina-Valera © 1960 Sociedades Bíblicas en América Latina; © renovado 1988
        Sociedades Bíblicas Unidas. Reina-Valera 1960® es una marca registrada de Sociedades Bíblicas Unidas, y se puede
        usar solamente bajo licencia.
      </p>
      <nav className="mt-10 flex flex-col gap-3 border-t border-rule pt-6 sm:flex-row sm:justify-between">
        {prev ? (
          <Link to="/curso/$slug" params={{ slug: prev.slug }} className="text-link underline">
            ← Día {prev.n}: {prev.titulo}
          </Link>
        ) : (
          <Link to="/curso" className="text-link underline">← Todas las lecciones</Link>
        )}
        {next ? (
          <Link to="/curso/$slug" params={{ slug: next.slug }} className="text-link underline">
            Día {next.n}: {next.titulo} →
          </Link>
        ) : (
          <Link to="/gratis" className="text-link underline">Recibir aviso de nuevas lecciones →</Link>
        )}
      </nav>
      <Subir />
    </main>
  );
}
