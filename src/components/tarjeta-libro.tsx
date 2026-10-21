import { Link } from "@tanstack/react-router";
import { Tapa } from "@/components/tapa";
import type { Obra } from "@/lib/content";
import {
  formatosAmazon,
  numeroSerie,
  SERIE_NOMBRE,
  capitulo1Url,
} from "@/lib/serie";

/** Tarjeta del libro de la serie al final de un estudio o tratado. */
export function TarjetaLibro({
  obra,
  motivo,
}: {
  obra: Obra;
  motivo?: string;
}) {
  const formatos = formatosAmazon(obra);
  return (
    <aside
      className="mt-10 grid gap-5 border border-rule p-5 sm:grid-cols-[8.75rem_1fr]"
      aria-label={`Libro ${numeroSerie(obra)} de la serie ${SERIE_NOMBRE}: ${obra.title}`}
    >
      <Link to="/obras/$slug" params={{ slug: obra.slug }} className="block">
        <Tapa obra={obra} size="lista" />
      </Link>
      <div>
        <p className="kicker">
          Serie {SERIE_NOMBRE} · Libro {numeroSerie(obra)}
        </p>
        <p className="mt-2 font-serif text-2xl leading-snug">{obra.title}</p>
        <p className="mt-1 font-sans text-sm text-gold">{obra.subtitulo}</p>
        <p className="mt-3 leading-relaxed text-ink-soft">
          {motivo ??
            `Este libro se lee junto a ${obra.pasaje} y lleva más lejos lo que el aula acaba de abrir.`}
        </p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          <Link
            to="/obras/$slug"
            params={{ slug: obra.slug }}
            className={formatos.length ? "btn btn-ghost" : "btn btn-gold"}
          >
            Ver el libro
          </Link>
          {formatos.map((f) => (
            <a
              key={f.asin}
              href={f.href}
              target="_blank"
              rel="noopener noreferrer"
              className={f.tipo === "ebook" ? "btn btn-gold" : "btn btn-ghost"}
            >
              {f.tipo === "ebook" ? "Leer en Kindle" : `${f.etiqueta} en Amazon`}
            </a>
          ))}
          {capitulo1Url(obra.slug) ? (
            <Link
              to="/recibir"
              search={{ libro: obra.slug }}
              className="btn btn-ghost"
            >
              Recibir el capítulo 1
            </Link>
          ) : null}
        </div>
      </div>
    </aside>
  );
}
