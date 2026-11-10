import { createFileRoute, Link } from "@tanstack/react-router";
import { Adquirir } from "@/components/adquirir";
import { Cite } from "@/components/cite";
import { CorpusJsonLd } from "@/components/json-ld";
import { ConLemas } from "@/components/lema";
import { LeerCapitulo } from "@/components/leer-capitulo";
import { BtnArrow } from "@/components/motif";
import { Tapa } from "@/components/tapa";
import { Volver } from "@/components/volver";
import { CORPUS, fichas, obras, ROMANO, tapaPath, type Obra } from "@/lib/content";
import { Subir } from "@/components/subir";
import { pageHead, tituloSeccion } from "@/lib/seo";
import { indiceEstudio } from "@/lib/estudios-indice";
import { indiceTratado } from "@/lib/tratados-indice";

export const Route = createFileRoute("/obras/")({
  component: ObrasPage,
  head: () =>
    pageHead({
      path: "/obras",
      title: tituloSeccion("Los libros"),
      description:
        "Orden de lectura de los libros de Alejandro Sirit, publicados por Editorial Cielo Efata. Éfata abre el camino, y El Siervo, no tú, le sigue.",
      detalle: CORPUS.gate,
      image: tapaPath("efata"),
      imageWidth: 900,
      imageHeight: 1350,
    }),
});

function ObrasPage() {
  const [primero, ...resto] = obras;
  const corte = CORPUS.gate.indexOf(". ");
  const linea = corte > 0 ? CORPUS.gate.slice(0, corte + 1) : CORPUS.gate;
  const sigue = corte > 0 ? CORPUS.gate.slice(corte + 2) : "";

  return (
    <main className="casa-libros">
      <CorpusJsonLd />
      <Volver />
      <nav className="casa-anclas" aria-label="En esta sección">
        <a href="#lectura-1">Para empezar</a>
        <a href="#siguen">Siguen en este orden</a>
        <a href="#fuera">Fuera del orden de lectura</a>
      </nav>
      <nav className="casa-riel" aria-label="Orden de lectura">
        {obras.map((o) => (
          <a key={o.slug} href={`#lectura-${o.lectura}`}>
            {ROMANO[o.lectura]}
            <span className="sr-only">. {o.title}</span>
          </a>
        ))}
      </nav>
      <h1 className="mt-6">{CORPUS.title}</h1>
      <p className="casa-una-linea mt-4">{linea}</p>
      <p className="kicker mt-4">Alejandro Sirit · Editorial Cielo Efata</p>
      {sigue ? (
        <p className="mt-5 text-lg">
          <ConLemas>{sigue}</ConLemas>
        </p>
      ) : null}
      <p className="kicker mt-8">El método · Éfata</p>
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

      <h2 id="siguen" className="mt-14 font-serif text-3xl">Siguen en este orden</h2>
      <ul className="casa-siguen">
        {resto.map((o) => (
          <li key={o.slug}>
            <TomoCard obra={o} />
          </li>
        ))}
      </ul>

      <h2 id="fuera" className="mt-14 scroll-mt-24 font-serif text-3xl">
        Fuera del orden de lectura
      </h2>
      <p className="mt-4 leading-relaxed">
        <Link to="/obras/el-paraclito-eterno" className="text-link underline">
          El Paráclito Eterno
        </Link>
        , estudio de la Serie Cielo Efata sobre Juan 14–16: el Espíritu Santo no es una energía
        que se activa, sino una Persona divina que el Padre envía en el nombre del Hijo.
      </p>
      <ul className="mt-8 space-y-10">
        {fichas.map((o) => (
          <li key={o.slug} id={o.slug} className="scroll-mt-24 border-t border-rule pt-6">
            <div className="casa-ficha">
              <Link
                to="/obras/$slug"
                params={{ slug: o.slug }}
                className="shrink-0 self-start"
                aria-hidden
                tabIndex={-1}
              >
                <Tapa obra={o} size="lg" />
              </Link>
              <div className="min-w-0 flex-1">
                {o.numeroSerieAmazon ? (
                  <p className="font-sans text-xs tracking-[0.2em] text-gold uppercase">
                    Serie Cielo Efata · nº {o.numeroSerieAmazon}
                  </p>
                ) : null}
                <h2 className="tomo-title mt-3">
                  <Link to="/obras/$slug" params={{ slug: o.slug }} className="hover:text-gold">
                    {o.title}
                  </Link>
                </h2>
                {o.subtitulo ? (
                  <p className="mt-2 font-sans text-sm tracking-wide text-gold">{o.subtitulo}</p>
                ) : null}
                <p className="mt-4 text-lg">
                  <ConLemas>{o.line}</ConLemas>
                </p>
                <div className="mt-5">
                  <Link to="/obras/$slug" params={{ slug: o.slug }} className="btn btn-ink">
                    Examinar este libro
                    <BtnArrow />
                  </Link>
                </div>
              </div>
            </div>
          </li>
        ))}
        </ul>
      <Subir />
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
  const study = obra.studySlug ? indiceEstudio(obra.studySlug) : undefined;
  const tratado = obra.tratadoSlug ? indiceTratado(obra.tratadoSlug) : undefined;

  return (
    <article
      id={`lectura-${obra.lectura}`}
      className={destacado ? "casa-vitrina scroll-mt-24" : "scroll-mt-24"}
    >
      {destacado ? (
        <p className="casa-una-linea sm:col-span-2">Para empezar</p>
      ) : null}
      <div className={destacado ? "contents" : "flex flex-col gap-4"}>
        <Link
          to="/obras/$slug"
          params={{ slug: obra.slug }}
          className="shrink-0 self-start"
          aria-hidden
          tabIndex={-1}
        >
          <Tapa obra={obra} size={destacado ? "lg" : "pdp"} priority={destacado} />
        </Link>
        <div className="min-w-0 flex-1">
          <p className="casa-romano">
            {ROMANO[obra.lectura]}
            <span className="sr-only">. Lectura {ROMANO[obra.lectura]}</span>
          </p>
          <h2 className="tomo-title mt-3">
            <Link to="/obras/$slug" params={{ slug: obra.slug }} className="hover:text-gold">
              {obra.title}
            </Link>
          </h2>
          <p className="mt-4 text-lg">
            <ConLemas>{obra.line}</ConLemas>
          </p>
          <p className="casa-tesis">
            <ConLemas>{obra.thesis}</ConLemas>
          </p>
          <p className="casa-verso mt-3 font-sans text-sm tracking-wide">
            <Cite>{obra.ref}</Cite>
          </p>
          {obra.studyNote ? (
            <p className="mt-3 leading-relaxed text-ink-soft">{obra.studyNote}</p>
          ) : null}
          {obra.crisol ? (
            <p className="mt-3 font-sans text-sm">
              <Link to="/crisol" className="text-link underline">
                El método C.R.I.S.O.L. de El altar del espejo
              </Link>
            </p>
          ) : null}
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link to="/obras/$slug" params={{ slug: obra.slug }} className="btn btn-ink">
              Examinar este libro
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
                Tratado: {tratado.title}
              </Link>
            ) : null}
            <LeerCapitulo ref={obra.pasaje} desde={`/obras/${obra.slug}`} companeros={[study?.ref, tratado?.ref]} />
          </div>
        </div>
      </div>
    </article>
  );
}
