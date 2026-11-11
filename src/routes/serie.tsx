import { createFileRoute, Link } from "@tanstack/react-router";
import { SerieJsonLd } from "@/components/json-ld";
import { SinopsisTapa } from "@/components/sinopsis-tapa";
import {
  formatosAmazon,
  numeroSerie,
  obrasEnOrden,
  publicada,
  SERIE_NOMBRE,
  capitulo1Url,
} from "@/lib/serie";
import { pageHead, tituloSeccion } from "@/lib/seo";

export const Route = createFileRoute("/serie")({
  head: () =>
    pageHead({
      path: "/serie",
      title: tituloSeccion("La serie Cielo Efata, en orden de lectura"),
      description:
        "La serie de lectura de Cielo Efata: nueve libros, del I al IX, cada uno con su capítulo de la Biblia. La editorial publica además otras obras.",
    }),
  component: SeriePage,
});

function SeriePage() {
  const lista = obrasEnOrden();
  return (
    <main className="mx-auto max-w-[48em] px-4 py-16 md:py-24">
      <SerieJsonLd />
      <p className="kicker">Serie {SERIE_NOMBRE}</p>
      <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
        La serie: nueve libros, en orden de lectura
      </h1>
      <p className="mt-6 text-lg leading-relaxed">
        La serie tiene una sola numeración, la del orden de lectura, y es la
        misma en esta escuela y en Amazon. Se empieza por Pórtico a la
        Escritura, que recorre los sesenta y seis libros como una sola historia;
        en Éfata se aprende a leer el capítulo entero antes de hablar, y cada
        libro siguiente se lee junto al capítulo de la Biblia en que se apoya.
        El capítulo se abre en RevelatiO, el lector de la casa, donde también se
        pregunta al pasaje. Fuera de esta serie, la editorial publica además Norma
        normans non normata, Callar para ganar y El mundo pregunta, Dios responde.
      </p>
      <ol className="mt-12 space-y-10">
        {lista.map((o) => {
          const formatos = formatosAmazon(o);
          return (
            <li
              key={o.slug}
              id={`libro-${o.lectura}`}
              className="grid gap-5 border-t border-rule pt-8 sm:grid-cols-[8.75rem_1fr]"
            >
              <SinopsisTapa obra={o} size="lista" />
              <div>
                <p className="kicker">
                  Libro {numeroSerie(o)} · {o.pasaje}
                </p>
                <h2 className="mt-2 font-serif text-3xl leading-tight">
                  <Link
                    to="/obras/$slug"
                    params={{ slug: o.slug }}
                    className="hover:text-gold"
                  >
                    {o.title}
                  </Link>
                </h2>
                <p className="mt-1 font-sans text-sm text-gold">
                  {o.subtitulo}
                </p>
                <p className="mt-3 leading-relaxed text-ink-soft">
                  {publicada(o)
                    ? `Publicado en Amazon: ${formatos.map((f) => f.etiqueta.toLowerCase()).join(" y ")}.`
                    : "Edición nueva, aún no publicada en Amazon: se solicita por WhatsApp desde su ficha."}
                </p>
                <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                  <Link
                    to="/obras/$slug"
                    params={{ slug: o.slug }}
                    className="btn btn-gold"
                  >
                    Ver el libro
                  </Link>
                  {formatos.map((f) => (
                    <a
                      key={f.asin}
                      href={f.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost"
                    >
                      {f.etiqueta} en Amazon
                    </a>
                  ))}
                  {capitulo1Url(o.slug) ? (
                    <Link
                      to="/recibir"
                      search={{ libro: o.slug }}
                      className="btn btn-ghost"
                    >
                      Recibir el capítulo 1
                    </Link>
                  ) : null}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </main>
  );
}
