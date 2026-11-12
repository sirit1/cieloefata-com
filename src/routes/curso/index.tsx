import { createFileRoute, Link } from "@tanstack/react-router";
import { CursoJsonLd } from "@/components/json-ld";
import { Subir } from "@/components/subir";
import { CURSO_NOMBRE, CURSO_PATH, DIAS } from "@/lib/curso";
import { pageHead, tituloSeccion } from "@/lib/seo";

const total = DIAS.length;
const leccionesAbiertas = `${total} lecciones abiertas`;

const DESCRIPCION =
  `Curso Experto Bíblico gratis de la Escuela Bíblica Cielo Efata: ${total} lecciones abiertas sobre la Escritura, el canon, el texto, hebreo, griego, hermenéutica, apologética, panorama bíblico, doctrina de Dios, Cristo y predicación.`;

export const Route = createFileRoute("/curso/")({
  head: () =>
    pageHead({
      path: CURSO_PATH,
      title: tituloSeccion(`Curso Experto Bíblico gratis · ${total} lecciones`),
      description: DESCRIPCION,
      exact: true,
    }),
  component: CursoPage,
});

function CursoPage() {
  return (
    <main className="casa-escuela">
      <CursoJsonLd
        nombre={CURSO_NOMBRE}
        description={DESCRIPCION}
        path={CURSO_PATH}
        lecciones={DIAS.map((d) => ({ name: `Día ${d.n}. ${d.titulo}`, path: `${CURSO_PATH}/${d.slug}` }))}
      />
      <nav className="casa-anclas" aria-label="En esta sección">
        <a href="#lecciones">{leccionesAbiertas}</a>
        <a href="#aviso">Lección gratis del Día 1</a>
      </nav>
      <header className="casa-hero">
        <div>
          <p className="kicker">Escuela Bíblica Cielo Efata</p>
          <h1 className="mt-3">{CURSO_NOMBRE}</h1>
          <p className="casa-una-linea mt-4">{leccionesAbiertas}, gratis, para leer con la Biblia en la mano.</p>
          <p className="kicker mt-4">Dr. (h. c.) Alejandro Sirit</p>
        </div>
        <img src="/brand/seal-full.webp" alt="" width={120} height={120} className="casa-sello" />
      </header>
      <p className="mt-6 text-lg leading-relaxed">
        Cada día trae su repaso, preguntas, una sección «Para el púlpito» y un versículo para memorizar. Texto bíblico:
        Reina-Valera 1960.
      </p>
      <p id="aviso" className="mt-4 leading-relaxed">
        ¿Prefieres empezar por la primera y recibir aviso de las siguientes?{" "}
        <Link to="/gratis" className="text-link underline">
          Lección gratis del Día 1
        </Link>
        .
      </p>
      <p className="mt-4 leading-relaxed">
        <Link to="/curso/examenes" className="text-link underline">
          Exámenes
        </Link>
        {" · "}
        <Link to="/certificado" className="text-link underline">
          Verificar certificado
        </Link>
      </p>
      <h2 id="lecciones" className="mt-12 text-3xl">{leccionesAbiertas}</h2>
      <ol className="casa-dias" aria-label={leccionesAbiertas}>
        {DIAS.map((d) => (
          <li key={d.slug}>
            <Link to="/curso/$slug" params={{ slug: d.slug }}>
              <b>Día {d.n}</b>
              <span>{d.titulo}</span>
            </Link>
          </li>
        ))}
      </ol>
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
      <Subir />
    </main>
  );
}
