import { createFileRoute, Link } from "@tanstack/react-router";
import { Adquirir } from "@/components/adquirir";
import { BannerRevelatio } from "@/components/banner-revelatio";
import { Cite, Refs } from "@/components/cite";
import { Datos } from "@/components/datos";
import { LeerCapitulo } from "@/components/leer-capitulo";
import { ConLemas } from "@/components/lema";
import { Motif, BtnArrow } from "@/components/motif";
import { SeguirActo } from "@/components/seguir-acto";
import { canonDoors, CORPUS, essays, obras, ROMANO } from "@/lib/content";
import { SELLO } from "@/lib/identidad";
import {
  ESCRITURA,
  PERSONAS_PUERTA,
  PRIMERA_VEZ,
  TESTIGO,
  TRINIDAD,
  semana,
} from "@/lib/pilar";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const mes = essays[0];
  return (
    <main className="pb-24">
      <section className="scroll-mt-24 px-4 py-20 md:py-28">
        <div className="mx-auto max-w-[40em]">
          <p className="lema-latin glosa" tabIndex={0}>
            {SELLO.latin}
            <span className="glosa-card" role="tooltip">
              {SELLO.romance}
            </span>
          </p>
          <p className="lema-romance">{SELLO.romance}</p>
          <h1 className="mt-10 font-serif text-4xl leading-tight md:text-5xl">{ESCRITURA.title}</h1>
          <p className="mt-5 font-serif text-xl italic text-ink-soft">{ESCRITURA.motto}</p>
          <p className="mt-8 text-lg">
            <ConLemas>{ESCRITURA.gate}</ConLemas>
          </p>
          <Refs refs={ESCRITURA.refs} />
          <ul className="mt-20 grid gap-16 sm:grid-cols-3">
            <li>
              <Link to="/estudios" className="group flex flex-col items-start">
                <Motif kind="lion" decorative />
                <span className="mt-4 font-serif text-2xl group-hover:text-gold">Estudios</span>
                <span className="mt-3 leading-relaxed text-ink-soft">
                  Se recorre un pasaje entero, se oye la cadena, y se sale con un solo acto para
                  esta semana.
                </span>
              </Link>
            </li>
            <li>
              <Link to="/tratados" className="group flex flex-col items-start">
                <Motif kind="lamb" decorative />
                <span className="mt-4 font-serif text-2xl group-hover:text-gold">Tratados</span>
                <span className="mt-3 leading-relaxed text-ink-soft">
                  Se toma el versículo que se cita de memoria y se vuelve a oír dentro del capítulo
                  que lo sostiene.
                </span>
              </Link>
            </li>
            <li>
              <Link to="/metodo" className="group flex flex-col items-start">
                <Motif kind="flame" decorative />
                <span className="mt-4 font-serif text-2xl group-hover:text-gold">Cómo leer</span>
                <span className="mt-3 leading-relaxed text-ink-soft">
                  El Espíritu abre el oído. La cadena no se recita como talismán: se usa de rodillas.
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

      <section className="cv-auto mx-auto max-w-5xl px-4 py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-2">
          <article className="marca-agua marca-agua-navy flex flex-col bg-navy px-6 py-10 text-parchment md:px-9">
            <p className="font-serif text-lg italic text-gold-soft">El primer pasaje</p>
            <h2 className="mt-3 font-serif text-3xl">{PRIMERA_VEZ.title}</h2>
            <p className="mt-5 flex-1 text-parchment/90">{PRIMERA_VEZ.lead}</p>
            <p className="mt-4 font-sans text-sm tracking-wide text-gold-soft">
              <Cite>{PRIMERA_VEZ.refs}</Cite>
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/estudios/$slug"
                params={{ slug: PRIMERA_VEZ.slug }}
                className="btn btn-gold"
              >
                Escudriñar el estudio
                <span className="sr-only"> de {PRIMERA_VEZ.title}</span>
                <BtnArrow />
              </Link>
              <LeerCapitulo
                ref={PRIMERA_VEZ.ref}
                className="btn btn-ghost btn-ghost-navy"
              />
            </div>
          </article>
          <article className="flex flex-col border border-rule bg-paper px-6 py-10 md:px-9">
            <p className="font-serif text-lg italic text-gold">El estudio de esta semana</p>
            <h2 className="mt-3 font-serif text-3xl">{semana.title}</h2>
            <p className="mt-1 text-gold">{semana.ref}</p>
            <p className="mt-5 flex-1">{semana.impacto}</p>
            <p className="mt-4 font-sans text-sm tracking-wide text-gold">
              <Cite>{semana.verse}</Cite>
            </p>
            <SeguirActo />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/estudios/$slug"
                params={{ slug: semana.slug }}
                className="btn btn-ink"
              >
                Escudriñar el estudio
                <span className="sr-only"> de {semana.title}</span>
                <BtnArrow />
              </Link>
              <LeerCapitulo ref={semana.ref} />
            </div>
          </article>
        </div>

        <article className="mt-10 border border-rule bg-paper px-6 py-10 md:px-9">
          <p className="font-serif text-lg italic text-gold">El tratado de este mes</p>
          <h2 className="mt-3 font-serif text-3xl">{mes.title}</h2>
          <p className="mt-1 text-gold">{mes.ref}</p>
          <p className="mt-4 max-w-[40em]">{mes.blurb}</p>
          <Link
            to="/tratados/$slug"
            params={{ slug: mes.slug }}
            className="btn btn-ink mt-8"
          >
            Escudriñar el tratado
            <span className="sr-only"> {mes.title}</span>
            <BtnArrow />
          </Link>
        </article>
      </section>

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
              Siete estantes recorren el canon. La ley, los profetas y los salmos hablan de Cristo, y
              el que los recorre no colecciona frases: oye a una Persona.
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
              Dr. Alejandro Sirit · Editorial Cielo Efata
            </p>
            <p className="mt-6 text-lg">
              <ConLemas>{CORPUS.gate}</ConLemas>
            </p>
            <p className="kicker mt-8">El umbral · Éfata</p>
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
                <p className="kicker">{ROMANO[o.lectura]}</p>
                <p className="tomo-title mt-2">{o.title}</p>
                <p className="prosa mt-3 text-ink-soft">{o.line}</p>
                <Link to="/obras" hash={`lectura-${o.lectura}`} className="examinar hover:text-ink">
                  Examinar este tomo
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
