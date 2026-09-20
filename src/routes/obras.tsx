import { createFileRoute, Link } from "@tanstack/react-router";
import { Adquirir } from "@/components/adquirir";
import { Cite } from "@/components/cite";
import { ConLemas } from "@/components/lema";
import { LeerCapitulo } from "@/components/leer-capitulo";
import { BtnArrow } from "@/components/motif";
import { Volver } from "@/components/volver";
import { CORPUS, obras, ROMANO } from "@/lib/content";
import { studyBySlug } from "@/lib/studies";

export const Route = createFileRoute("/obras")({ component: ObrasPage });

function ObrasPage() {
  const [primero, ...resto] = obras;

  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
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
          <li key={o.title}>
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
  obra: (typeof obras)[number];
  destacado?: boolean;
}) {
  const study = obra.studySlug ? studyBySlug(obra.studySlug) : undefined;

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
      <p className="font-sans text-xs tracking-[0.2em] text-gold uppercase">
        Lectura {ROMANO[obra.lectura]}
      </p>
      <h2 className="tomo-title mt-3">{obra.title}</h2>
      <p className="mt-4 text-lg">
        <ConLemas>{obra.line}</ConLemas>
      </p>
      <p className="mt-4">
        <ConLemas>{obra.thesis}</ConLemas>
      </p>
      <p className="mt-3 font-sans text-sm tracking-wide text-gold">
        <Cite>{obra.ref}</Cite>
      </p>
      {"crisol" in obra && obra.crisol ? (
        <p className="mt-3 font-sans text-sm">
          <Link to="/crisol" className="text-link underline">
            C.R.I.S.O.L.™ en El Altar del Espejo
          </Link>
        </p>
      ) : null}
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        {study ? (
          <Link
            to="/estudios/$slug"
            params={{ slug: study.slug }}
            className="btn btn-gold"
          >
            Escudriñar el estudio
            <span className="sr-only"> de {study.title}</span>
            <BtnArrow />
          </Link>
        ) : null}
        <LeerCapitulo ref={obra.pasaje} />
      </div>
    </article>
  );
}
