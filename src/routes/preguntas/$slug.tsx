import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { BtnArrow } from "@/components/motif";
import { Compartir } from "@/components/compartir";
import { ConLemas } from "@/components/lema";
import { LeerCapitulo } from "@/components/leer-capitulo";
import { Volver } from "@/components/volver";
import { preguntaDe, PREGUNTAS, versoRvr } from "@/lib/preguntas";
import { pageHead, tituloSeccion } from "@/lib/seo";
import { indiceTratado } from "@/lib/tratados-indice";
import { versiculoContexto } from "@/lib/versiculos-contexto";

export const Route = createFileRoute("/preguntas/$slug")({
  component: PreguntaPage,
  loader: ({ params }) => {
    // La página «¿Qué significa…?» completa vive en /versiculos (vercel.json redirige igual con 301).
    if (versiculoContexto(params.slug)) {
      throw redirect({ to: "/versiculos/$slug", params: { slug: params.slug }, statusCode: 301 });
    }
    const p = preguntaDe(params.slug);
    if (!p) throw notFound();
    return { slug: params.slug, pregunta: p };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.pregunta;
    return pageHead({
      path: `/preguntas/${loaderData?.slug ?? ""}`,
      title: tituloSeccion(p ? `¿Qué significa ${p.verse}?` : "Pregunta"),
      description: p ? `${p.lemma} ${p.lead}` : undefined,
    });
  },
});

function PreguntaPage() {
  const { slug, pregunta: p } = Route.useLoaderData();
  const versos = versoRvr(p.verse);
  const tratado = indiceTratado(p.tratadoSlug);
  const i = PREGUNTAS.findIndex((x) => x.slug === slug);
  const sig = PREGUNTAS[(i + 1) % PREGUNTAS.length];

  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <Volver />
      <p className="kicker">
        <Link to="/preguntas" className="hover:text-ink">
          ¿Qué dice la Biblia sobre…?
        </Link>
      </p>
      <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">¿Qué significa {p.verse}?</h1>
      <p className="mt-4 font-serif text-xl text-ink-soft italic">{p.lemma}</p>

      {versos.length ? (
        <figure className="m-0 mt-10">
          <blockquote className="verso !mt-0">
            {versos.map((v) => (
              <span key={v.v}>
                {versos.length > 1 ? <sup className="mr-1 font-sans text-xs not-italic">{v.v}</sup> : null}
                {v.t}{" "}
              </span>
            ))}
          </blockquote>
          <figcaption className="mt-3 pl-6 font-sans text-sm text-ink-soft">
            {p.verse}, Reina-Valera 1960
          </figcaption>
        </figure>
      ) : null}

      <h2 className="mt-12 font-serif text-3xl">Respuesta breve</h2>
      <p className="mt-4 text-lg leading-relaxed">
        <ConLemas>{p.lead}</ConLemas>
      </p>
      {tratado ? (
        <p className="mt-5 leading-relaxed text-ink-soft">
          <ConLemas>{tratado.blurb}</ConLemas>
        </p>
      ) : null}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {tratado ? (
          <Link to="/tratados/$slug" params={{ slug: tratado.slug }} className="btn btn-ink">
            Leer el tratado completo · {tratado.title}
            <BtnArrow />
          </Link>
        ) : null}
        <LeerCapitulo ref={p.verse} desde={`/preguntas/${slug}`} />
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        <Compartir titulo={`¿Qué significa ${p.verse}?`} ruta={`/preguntas/${slug}`} />
      </div>

      <p className="mt-12 font-sans text-xs leading-relaxed text-muted">
        Texto bíblico: Reina-Valera © 1960 Sociedades Bíblicas en América Latina; © renovado 1988
        Sociedades Bíblicas Unidas.
      </p>

      {sig && sig.slug !== slug ? (
        <nav className="mt-10 border-t border-rule pt-6 font-sans text-sm" aria-label="Siguiente pregunta">
          <Link to="/preguntas/$slug" params={{ slug: sig.slug }} className="text-link underline underline-offset-4">
            Siguiente: ¿Qué significa {sig.verse}?
          </Link>
        </nav>
      ) : null}
    </main>
  );
}
