import { createFileRoute, Link } from "@tanstack/react-router";
import { CursoJsonLd } from "@/components/json-ld";
import { CURSO_NOMBRE, CURSO_PATH, DIAS } from "@/lib/curso";
import { pageHead, tituloSeccion } from "@/lib/seo";

const DESCRIPCION =
  "Curso Experto Bíblico gratis de la Escuela Bíblica Cielo Efata: diez lecciones abiertas sobre la Escritura, el canon, el texto, hebreo, griego, hermenéutica y apologética.";

export const Route = createFileRoute("/curso/")({
  head: () =>
    pageHead({
      path: CURSO_PATH,
      title: tituloSeccion("Curso Experto Bíblico gratis · 10 lecciones"),
      description: DESCRIPCION,
      exact: true,
    }),
  component: CursoPage,
});

function CursoPage() {
  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <CursoJsonLd
        nombre={CURSO_NOMBRE}
        description={DESCRIPCION}
        path={CURSO_PATH}
        lecciones={DIAS.map((d) => ({ name: `Día ${d.n}. ${d.titulo}`, path: `${CURSO_PATH}/${d.slug}` }))}
      />
      <p className="kicker">Escuela Bíblica Cielo Efata</p>
      <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">{CURSO_NOMBRE}</h1>
      <p className="kicker mt-4">Dr. (h. c.) Alejandro Sirit</p>
      <p className="mt-6 text-lg leading-relaxed">
        Diez lecciones abiertas, gratis, para leer con la Biblia en la mano. Cada día trae su repaso, preguntas, una
        sección «Para el púlpito» y un versículo para memorizar. Texto bíblico: Reina-Valera 1960.
      </p>
      <p className="mt-4 leading-relaxed">
        ¿Prefieres empezar por la primera y recibir aviso de las siguientes?{" "}
        <Link to="/gratis" className="text-link underline">
          Lección gratis del Día 1
        </Link>
        .
      </p>
      <ol className="mt-10 space-y-6">
        {DIAS.map((d) => (
          <li key={d.slug} className="border-t border-rule pt-5">
            <p className="kicker">Día {d.n}</p>
            <Link to="/curso/$slug" params={{ slug: d.slug }} className="mt-1 block font-serif text-2xl text-link underline">
              {d.titulo}
            </Link>
            <p className="mt-2 text-sm text-ink-soft">
              Versículo para memorizar: {d.cita}
            </p>
          </li>
        ))}
      </ol>
    </main>
  );
}
