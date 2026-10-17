import { createFileRoute, Link } from "@tanstack/react-router";
import { Adquirir } from "@/components/adquirir";
import { BannerRevelatio } from "@/components/banner-revelatio";
import { Cite, Refs } from "@/components/cite";
import { Datos } from "@/components/datos";
import { ConLemas } from "@/components/lema";
import { Tapa } from "@/components/tapa";
import { SlotsSemanaMes, UmbralTresCaminos } from "@/components/umbral";
import { PuertaRegreso } from "@/components/seguir-acto";
import { canonDoors, CORPUS, obras, ROMANO } from "@/lib/content";
import { SELLO } from "@/lib/identidad";
import { ESCRITURA, PERSONAS_PUERTA, TESTIGO, TRINIDAD } from "@/lib/pilar";
import { HomeJsonLd } from "@/components/json-ld";
import { pageHead, SITE_TITLE } from "@/lib/seo";

export const Route = createFileRoute("/")({
  component: Home,
  head: () =>
    pageHead({
      path: "/",
      title: SITE_TITLE,
      description:
        "Escuela de estudio bíblico de Alejandro Sirit: leer el capítulo entero, estudiarlo con el método V.E.R.D.A.D. y obedecer lo que Dios dice.",
    }),
});

function Home() {
  return (
    <main className="pb-24">
      <HomeJsonLd />
      <section className="scroll-mt-24 px-4 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-[40em]">
          <p className="lema-latin glosa" tabIndex={0}>
            {SELLO.latin}
            <span className="glosa-card" role="tooltip">
              {SELLO.romance}
            </span>
          </p>
          <p className="lema-romance">{SELLO.romance}</p>
          <h1 className="mt-10 font-serif text-4xl leading-tight md:text-5xl">{ESCRITURA.title}</h1>
          <p className="mt-5 font-serif text-xl italic text-ink-soft">{ESCRITURA.motto}</p>
          <PuertaRegreso />
          <p className="mt-8 text-lg">
            <ConLemas>{ESCRITURA.gate}</ConLemas>
          </p>
          <Refs refs={ESCRITURA.refs} />
          <p className="mt-8 text-lg leading-relaxed">
            <ConLemas>{ESCRITURA.oficio}</ConLemas>
          </p>
          <UmbralTresCaminos />
          </div>
          <SlotsSemanaMes />
          <ul className="mt-20 grid gap-16 sm:grid-cols-3">
            <li>
              <Link to="/estudios" className="group flex flex-col items-start">
                <span className="mt-4 font-serif text-2xl group-hover:text-gold">Estudios</span>
                <span className="mt-3 leading-relaxed text-ink-soft">
                  Un pasaje completo, estudiado con el método V.E.R.D.A.D., hasta un paso
                  concreto de obediencia.
                </span>
              </Link>
            </li>
            <li>
              <Link to="/tratados" className="group flex flex-col items-start">
                <span className="mt-4 font-serif text-2xl group-hover:text-gold">Tratados</span>
                <span className="mt-3 leading-relaxed text-ink-soft">
                  Versículos muy citados, y a menudo sacados de contexto, leídos otra vez dentro
                  de su capítulo.
                </span>
              </Link>
            </li>
            <li>
              <Link to="/metodo" className="group flex flex-col items-start">
                <span className="mt-4 font-serif text-2xl group-hover:text-gold">Cómo leer</span>
                <span className="mt-3 leading-relaxed text-ink-soft">
                  El método V.E.R.D.A.D.: seis pasos para leer la Biblia con atención, humildad y
                  oración, no como una fórmula.
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section id="dios" className="marca-agua border-y border-rule/40 bg-paper px-4 py-20 md:py-28">
        <div className="mx-auto max-w-[40em]">
          <h2 className="font-serif text-3xl md:text-4xl">{TRINIDAD.title}</h2>
          <p className="mt-5 text-lg leading-relaxed">
            <ConLemas>{TRINIDAD.lead}</ConLemas>
          </p>
          <Refs refs={TRINIDAD.leadRefs} />
          <ul className="mt-10 space-y-8">
            {PERSONAS_PUERTA.map((p) => (
              <li key={p.name}>
                <h3 className="font-serif text-2xl">{p.name}</h3>
                <p className="mt-2 leading-relaxed">
                  <ConLemas>{p.line}</ConLemas>
                </p>
                <p className="mt-1 font-sans text-sm tracking-wide text-gold">
                  <Cite>{p.ref}</Cite>
                </p>
              </li>
            ))}
          </ul>
          <Link to="/canon" hash="dios" className="mt-10 inline-block font-sans text-sm text-link underline">
            Examinar el Nombre
          </Link>
        </div>
      </section>

      <BannerRevelatio />

      <section id="testigo" className="marca-agua bg-navy px-4 py-20 text-parchment md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="kicker kicker-navy">El testigo</p>
          <h2 className="mt-4 max-w-[20em] font-serif text-3xl md:text-4xl">{TESTIGO.title}</h2>
          <p className="mt-4 max-w-[36em] text-lg leading-relaxed text-parchment/90">
            <ConLemas>{TESTIGO.gate}</ConLemas>
          </p>
          <Datos items={TESTIGO.measures} onNavy />
          <Link to="/canon" className="mt-16 inline-block font-sans text-sm text-gold-soft underline">
            Examinar el canon
          </Link>
        </div>
      </section>

      <section id="canon" className="scroll-mt-24 px-4 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-[40em]">
            <h2 className="font-serif text-3xl">Sesenta y seis libros</h2>
            <p className="mt-6 text-lg">
              Siete secciones recorren la Biblia. La ley, los profetas y los salmos hablan de Cristo, y
              quien los lee no colecciona frases: conoce a una Persona.
            </p>
            <Refs refs="Lc. 24:44–45" />
          </div>
          <ul className="canon-grid mt-10">
            {canonDoors.map((d) => (
              <li key={d.name}>
                <Link to="/canon" className="hover:text-gold">
                  <span className="canon-name">{d.name}</span>
                  <span className="kicker mt-2 block">{d.span}</span>
                  <span className="prosa mt-3 block text-ink-soft">{d.line}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cv-auto border-t border-rule/40 px-4 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-[40em]">
            <h2 className="font-serif text-3xl">{CORPUS.title}</h2>
            <p className="kicker mt-4">
              Alejandro Sirit · Editorial Cielo Efata
            </p>
            <p className="mt-6 text-lg">
              <ConLemas>{CORPUS.gate}</ConLemas>
            </p>
            <p className="kicker mt-8">El método · Éfata</p>
            <p className="mt-4 text-lg">
              <ConLemas>{CORPUS.efata}</ConLemas>
            </p>
            <p className="mt-5">
              <ConLemas>{CORPUS.line}</ConLemas>
            </p>
            <Refs refs={CORPUS.refs} />
            <Adquirir />
          </div>
          <p className="kicker mt-12">Orden de lectura</p>
          <ol className="tomo-grid mt-6">
            {obras.map((o) => (
              <li key={o.title}>
                <Link
                  to="/obras/$slug"
                  params={{ slug: o.slug }}
                  className="mb-3 inline-block"
                  aria-hidden
                  tabIndex={-1}
                >
                  <Tapa obra={o} size="rejilla" />
                </Link>
                <p className="kicker">{ROMANO[o.lectura]}</p>
                <p className="tomo-title mt-2">{o.title}</p>
                <p className="prosa mt-3 text-ink-soft">{o.line}</p>
                <Link
                  to="/obras/$slug"
                  params={{ slug: o.slug }}
                  className="examinar hover:text-ink"
                >
                  Examinar este libro
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
