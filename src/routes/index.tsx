import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { BannerRevelatio } from "@/components/banner-revelatio";
import { RegaloVerdad } from "@/components/regalo-verdad";
import { Refs } from "@/components/cite";
import { ConLemas } from "@/components/lema";
import { Tapa } from "@/components/tapa";
import { BtnArrow } from "@/components/motif";
import { SlotsSemanaMes } from "@/components/umbral";
import { PuertaRegreso } from "@/components/seguir-acto";
import { obras, ROMANO } from "@/lib/content";
import { AMAZON_AUTHOR, amazonDp, whatsappColeccion } from "@/lib/amazon";
import { SELLO } from "@/lib/identidad";
import { ESCRITURA } from "@/lib/pilar";
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

/** Puertas de la casa. El inicio presenta y reparte; el detalle vive en cada sección. */
const PUERTAS = [
  {
    to: "/estudios",
    titulo: "Estudios",
    linea: "Un pasaje completo, estudiado con el método V.E.R.D.A.D., hasta un paso concreto de obediencia.",
  },
  {
    to: "/tratados",
    titulo: "Tratados",
    linea: "Un tema o una doctrina recorridos por toda la Escritura, con argumento ordenado, idiomas originales y fuentes.",
  },
  {
    to: "/pasajes",
    titulo: "Explorar por pasaje",
    linea: "De Génesis a Apocalipsis: qué estudio, tratado o libro de la casa trata cada capítulo.",
  },
  {
    to: "/preguntas",
    titulo: "¿Qué dice la Biblia sobre…?",
    linea: "Una pregunta por página, con el versículo en Reina-Valera 1960 y el tratado que lo explica.",
  },
  {
    to: "/metodo",
    titulo: "Cómo leer",
    linea: "El método V.E.R.D.A.D.: seis pasos para leer la Biblia con atención, humildad y oración, no como una fórmula.",
  },
  {
    to: "/canon",
    titulo: "Canon",
    linea: "Sesenta y seis libros en siete secciones, el Dios trino que habla en ellos y los datos de su historia.",
  },
] as const;

const PILARES = [
  { k: "Reina-Valera 1960", v: "Cada cita en castellano, al pie de la letra." },
  { k: "Hebreo", v: "Texto masorético del Códice de Leningrado, el que edita la BHS." },
  { k: "Griego", v: "Nuevo Testamento según el Textus Receptus." },
  { k: "Strong explicado", v: "Cada número con su palabra original y su sentido. Toca la palabra y se abre su ficha." },
] as const;

function BuscadorPortada() {
  const navigate = useNavigate();
  return (
    <form
      role="search"
      aria-label="Buscar un pasaje o un tema"
      className="mt-9 max-w-[34rem]"
      onSubmit={(e) => {
        e.preventDefault();
        const q = String(new FormData(e.currentTarget).get("q") ?? "").trim();
        void navigate({ to: "/buscar", search: q ? { q } : {} });
      }}
    >
      <label htmlFor="buscar-portada" className="font-sans text-sm font-semibold text-ink">
        ¿Qué pasaje estás leyendo?
      </label>
      <div className="mt-2 flex">
        <input
          id="buscar-portada"
          name="q"
          type="search"
          className="campo"
          placeholder="Filipenses 4:13, Isaías 53, espejo…"
          autoComplete="off"
          enterKeyHint="search"
        />
        <button type="submit" className="btn btn-ink shrink-0 !px-4" aria-label="Buscar">
          <Search size={18} aria-hidden />
        </button>
      </div>
    </form>
  );
}

function Home() {
  return (
    <main className="pb-24">
      <HomeJsonLd />
      <section className="marca-agua border-b border-rule/30 px-4 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,44rem)_1fr]">
          <div>
            <p className="lema-latin glosa" tabIndex={0}>
              {SELLO.latin}
              <span className="glosa-card" role="tooltip">
                {SELLO.romance}
              </span>
            </p>
            <p className="lema-romance">{SELLO.romance}</p>
            <h1 className="hero-titulo mt-10">{ESCRITURA.title}</h1>
            <p className="mt-5 font-serif text-2xl text-ink-soft italic">{ESCRITURA.motto}</p>
            <p className="mt-4 font-sans text-sm tracking-wide">
              <a href="/verdad" className="text-link underline">
                La Biblia no se lee, se estudia: el método V.E.R.D.A.D.
              </a>
            </p>
            <p className="mt-7 text-lg leading-relaxed">
              <ConLemas>{ESCRITURA.gate}</ConLemas>
            </p>
            <Refs refs="He. 1:1–2 · Lc. 24:27" />
            <BuscadorPortada />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/estudios/$slug" params={{ slug: "marcos-7" }} className="btn btn-ink">
                Empezar por Marcos 7 <BtnArrow />
              </Link>
              <Link to="/obras" className="btn btn-ghost">
                Ver los libros
              </Link>
            </div>
            <PuertaRegreso />
          </div>
          <div className="hidden justify-self-center lg:block" aria-hidden>
            <img
              src="/brand/seal-full.webp"
              alt=""
              width={380}
              height={560}
              decoding="async"
              fetchPriority="low"
              className="h-auto w-[15rem] xl:w-[17rem]"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-rule/30 px-4 py-16 md:py-20" aria-labelledby="libros">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-[36em]">
              <p className="kicker">Alejandro Sirit · Editorial Cielo Efata</p>
              <h2 id="libros" className="seccion-titulo mt-3">
                Nueve libros, un orden de lectura
              </h2>
              <p className="mt-4 text-lg leading-relaxed">
                Se empieza por Pórtico a la Escritura, y en Éfata se aprende a leer el capítulo entero
                antes de hablar. Cada libro se lee junto al capítulo de la Biblia en que se apoya.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/obras" className="btn btn-ink">
                Ver el catálogo <BtnArrow />
              </Link>
              <a href={AMAZON_AUTHOR} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
                Todos en Kindle
              </a>
              <a href={whatsappColeccion()} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                Por WhatsApp
              </a>
            </div>
          </div>
          <ol className="mt-12 grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-3 lg:grid-cols-5">
            {obras.map((o) => (
              <li key={o.slug}>
                <Link to="/obras/$slug" params={{ slug: o.slug }} className="group block">
                  <Tapa obra={o} size="rejilla" className="w-full transition-transform duration-300 group-hover:-translate-y-1" />
                  <span className="kicker mt-3 block">{ROMANO[o.lectura]}</span>
                  <span className="mt-1 block font-serif text-xl leading-snug font-semibold group-hover:text-gold">
                    {o.title}
                  </span>
                </Link>
                {o.asinEbook && !o.sinAmazon ? (
                  <a
                    href={amazonDp(o.asinEbook)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex min-h-11 items-center font-sans text-sm text-link underline"
                  >
                    Leer en Kindle<span className="sr-only">: {o.title}</span>
                  </a>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4">
        <SlotsSemanaMes />
      </div>

      <section className="px-4 py-20 md:py-28" aria-labelledby="puertas">
        <div className="mx-auto max-w-6xl">
          <p className="kicker">La casa</p>
          <h2 id="puertas" className="seccion-titulo mt-3">
            Por dónde entrar
          </h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PUERTAS.map((p) => (
              <li key={p.to}>
                <Link to={p.to} className="tarjeta group">
                  <span className="flex items-baseline justify-between gap-3">
                    <span className="font-serif text-2xl font-semibold group-hover:text-gold">{p.titulo}</span>
                    <BtnArrow />
                  </span>
                  <span className="mt-3 block leading-relaxed text-ink-soft">{p.linea}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-10"><RegaloVerdad /></div>

      <BannerRevelatio />

      <section className="cv-auto border-t border-rule/40 bg-paper px-4 py-20 md:py-24" aria-labelledby="pilares">
        <div className="mx-auto max-w-6xl">
          <p className="kicker">El texto manda</p>
          <h2 id="pilares" className="seccion-titulo mt-3 max-w-[22em]">
            Con qué texto leemos
          </h2>
          <dl className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PILARES.map((p) => (
              <div key={p.k} className="border-t-2 border-gold pt-4">
                <dt className="font-serif text-2xl font-semibold">{p.k}</dt>
                <dd className="mt-2 leading-relaxed text-ink-soft">{p.v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-10 font-sans text-sm">
            <Link to="/glosario" className="text-link underline underline-offset-4">
              Las palabras de la casa, en el glosario
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
