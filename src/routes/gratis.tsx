import { createFileRoute, Link } from "@tanstack/react-router";
import { GratisForm } from "@/components/gratis-form";
import { LeccionCuerpo } from "@/components/leccion-curso";
import { LeccionJsonLd } from "@/components/json-ld";
import { CURSO_NOMBRE, CURSO_PATH, CURSO_PUBLICADO, DIAS, textoDia } from "@/lib/curso";
import { metaDescription, pageHead, tituloSeccion } from "@/lib/seo";

const DIA1 = DIAS[0];
const DESCRIPCION = `Lección gratis del ${CURSO_NOMBRE}: Día 1, «${DIA1.titulo}». Léela completa y recibe el curso en tu correo.`;

export const Route = createFileRoute("/gratis")({
  loader: async () => ({ bloques: await textoDia(1) }),
  head: () =>
    pageHead({
      path: "/gratis",
      title: tituloSeccion(`Lección gratis · ${CURSO_NOMBRE}`),
      description: DESCRIPCION,
      exact: true,
    }),
  component: GratisPage,
});

function GratisPage() {
  const { bloques } = Route.useLoaderData();
  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <LeccionJsonLd
        headline={`Día 1. ${DIA1.titulo}`}
        description={metaDescription(DESCRIPCION)}
        path="/gratis"
        published={CURSO_PUBLICADO}
        cursoNombre={CURSO_NOMBRE}
        cursoPath={CURSO_PATH}
      />
      <p className="kicker">Lección gratis · {CURSO_NOMBRE}</p>
      <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">Día 1. {DIA1.titulo}</h1>
      <p className="kicker mt-4">Escuela Bíblica Cielo Efata · Dr. (h. c.) Alejandro Sirit</p>
      <p className="mt-6 text-lg leading-relaxed">
        Diez lecciones para estudiar la Biblia con método. Esta es la primera, completa. Deja tu correo y te escribimos
        con las siguientes; o sigue ya en{" "}
        <Link to="/curso" className="text-link underline">el índice del curso</Link>.
      </p>
      <GratisForm />
      <aside className="mt-10 border border-rule p-5">
        <p className="kicker">Versículo para memorizar · {DIA1.cita}</p>
        <p className="mt-2 font-serif text-xl leading-relaxed">«{DIA1.versiculo}»</p>
      </aside>
      <LeccionCuerpo bloques={bloques} />
      <GratisForm />
      <p className="mt-12 text-sm leading-relaxed text-ink-soft">
        Texto bíblico tomado de la versión Reina-Valera © 1960 Sociedades Bíblicas en América Latina; © renovado 1988
        Sociedades Bíblicas Unidas. Reina-Valera 1960® es una marca registrada de Sociedades Bíblicas Unidas, y se puede
        usar solamente bajo licencia.
      </p>
    </main>
  );
}
