import { createFileRoute, Link } from "@tanstack/react-router";
import { Adquirir } from "@/components/adquirir";
import { Cite } from "@/components/cite";
import { CorpusJsonLd } from "@/components/json-ld";
import { ConLemas } from "@/components/lema";
import { LeerCapitulo } from "@/components/leer-capitulo";
import { BtnArrow } from "@/components/motif";
import { Tapa } from "@/components/tapa";
import { Volver } from "@/components/volver";
import { CORPUS, obras, ROMANO, tapaPath, type Obra } from "@/lib/content";
import { pageHead } from "@/lib/seo";
import { studyBySlug } from "@/lib/studies";
import { tratadoDe } from "@/lib/tratados";

export const Route = createFileRoute("/obras/")({
  component: ObrasPage,
  head: () =>
    pageHead({
      path: "/obras",
      title: "Siete tomos · Cielo Efata",
      description:
        "Orden de lectura de los siete tomos del Dr. Alejandro Sirit. Éfata abre; El Siervo, no tú sigue. Editorial Cielo Efata.",
      image: tapaPath("efata"),
    }),
});

function ObrasPage() {
  const [primero, ...resto] = obras;

  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <CorpusJsonLd />
      <Volver />
      <h1 className="mt-2 font-serif text-4xl">{CORPUS.title}</h1>
      <p className="kicker mt-4">Dr. Alejandro Sirit · Editorial Cielo Efata</p>
      <p className="mt-5 text-lg">
        <ConLemas>{CORPUS.gate}</ConLemas>
      </p>
      <p className="kicker mt-8">El umbral · Éfata</p>
      <p className="mt-4 text-lg">
        <ConLemas>{CORPUS.efata}</ConLemas>
      </p>
      <p className="mt-5">
        <ConLemas>{CORPUS.line}</ConLemas>
      </p>
      <p className="mt-2 font-sans text-sm tracking-wide text-gold">
        <Cite>{CORPUS.refs}</Cite>
      </p>
      <Adquirir />

      <TomoCard obra={primero} destacado />

      <h2 className="mt-14 font-serif text-3xl">Siguen en este orden</h2>
      <ul className="mt-8 space-y-10">
        {resto.map((o) => (
          <li key={o.slug}>
            <TomoCard obra={o} />
          </li>
        ))}
      </ul>
    </main>
  );
}

function TomoCard({
  obra,
  destacado = false,
}: {
  obra: Obra;
  destacado?: boolean;
}) {
  const study = obra.studySlug ? studyBySlug(obra.studySlug) : undefined;
  const tratado = obra.tratadoSlug ? tratadoDe(obra.tratadoSlug) : undefined;

  return (
    <article
      id={`lectura-${obra.lectura}`}
      className={
        destacado
          ? "mt-12 scroll-mt-24 border border-rule bg-paper px-5 py-7 md:px-7"
          : "scroll-mt-24 border-t border-rule pt-6"
      }
    >
      {destacado ? (
        <p className="font-serif text-lg italic text-gold">El primer tomo · long seller</p>
      ) : null}
      <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-start">
        <Link
          to="/obras/$slug"
          params={{ slug: obra.slug }}
          className="shrink-0 self-start"
          aria-hidden
          tabIndex={-1}
        >
          <Tapa obra={obra} size={destacado ? "umbral" : "sm"} priority={destacado} />
        </Link>
        <div className="min-w-0 flex-1">
          <p className="font-sans text-xs tracking-[0.2em] text-gold uppercase">
            Lectura {ROMANO[obra.lectura]}
          </p>
          <h2 className="tomo-title mt-3">
            <Link to="/obras/$slug" params={{ slug: obra.slug }} className="hover:text-gold">
              {obra.title}
            </Link>
          </h2>
          <p className="mt-4 text-lg">
            <ConLemas>{obra.line}</ConLemas>
          </p>
          <p className="mt-4">
            <ConLemas>{obra.thesis}</ConLemas>
          </p>
          <p className="mt-3 font-sans text-sm tracking-wide text-gold">
            <Cite>{obra.ref}</Cite>
          </p>
          {obra.studyNote ? (
            <p className="mt-3 leading-relaxed text-ink-soft">{obra.studyNote}</p>
          ) : null}
          {obra.crisol ? (
            <p className="mt-3 font-sans text-sm">
              <Link to="/crisol" className="text-link underline">
                C.R.I.S.O.L.™ en El Altar del Espejo
              </Link>
            </p>
          ) : null}
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link to="/obras/$slug" params={{ slug: obra.slug }} className="btn btn-ink">
              Examinar este tomo
              <BtnArrow />
            </Link>
            {study ? (
              <Link to="/estudios/$slug" params={{ slug: study.slug }} className="btn btn-gold">
                Escudriñar el estudio
                <span className="sr-only"> de {study.title}</span>
                <BtnArrow />
              </Link>
            ) : null}
            {tratado ? (
              <Link to="/tratados/$slug" params={{ slug: tratado.slug }} className="btn btn-ghost">
                Tratado
              </Link>
            ) : null}
            <LeerCapitulo ref={obra.pasaje} />
          </div>
        </div>
      </div>
    </article>
  );
}
