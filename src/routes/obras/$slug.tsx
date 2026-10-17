import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Adquirir } from "@/components/adquirir";
import { Cite } from "@/components/cite";
import { BookJsonLd } from "@/components/json-ld";
import { ConLemas } from "@/components/lema";
import { LeerCapitulo } from "@/components/leer-capitulo";
import { BtnArrow } from "@/components/motif";
import { Tapa } from "@/components/tapa";
import { Volver } from "@/components/volver";
import {
  obraBySlug,
  obras,
  obraVecina,
  qrRevelatioPath,
  ROMANO,
  tapaPath,
  urlRevelatioLibro,
} from "@/lib/content";
import { primerasPaginas } from "@/lib/muestras";
import { whatsappTomo } from "@/lib/amazon";
import { Compartir } from "@/components/compartir";
import { pageHead, tituloObra } from "@/lib/seo";
import { indiceEstudio } from "@/lib/estudios-indice";
import { indiceTratado } from "@/lib/tratados-indice";

export const Route = createFileRoute("/obras/$slug")({
  component: ObraPage,
  loader: ({ params }) => {
    const obra = obraBySlug(params.slug);
    if (!obra) throw notFound();
    return { obra };
  },
  head: ({ loaderData }) => {
    const obra = loaderData?.obra;
    return pageHead({
      path: `/obras/${obra?.slug ?? ""}`,
      title: obra?.seoTitle ?? tituloObra("Obra"),
      description: obra?.seoDescription,
      exact: Boolean(obra?.seoDescription),
      image: obra ? tapaPath(obra.slug) : undefined,
    });
  },
});

export function ObraPage() {
  const { obra } = Route.useLoaderData();
  const study = obra.studySlug ? indiceEstudio(obra.studySlug) : undefined;
  const tratado = obra.tratadoSlug
    ? indiceTratado(obra.tratadoSlug)
    : undefined;
  const { prev, next } = obraVecina(obra.lectura);
  const lecturaDe = obras.length;
  const muestra = primerasPaginas(obra);

  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <BookJsonLd slug={obra.slug} />
      <Volver />
      <div className="grid gap-8 sm:grid-cols-[minmax(0,13rem)_1fr] sm:items-start md:gap-10">
        <figure className="m-0 max-w-[13rem]">
          <Tapa obra={obra} size="ficha" priority />
          <figcaption className="sr-only">
            Tapa de {obra.title}. Se lee junto a {obra.pasaje}.
          </figcaption>
        </figure>
        <div>
          <p className="font-sans text-xs tracking-[0.2em] text-gold uppercase">
            Lectura {ROMANO[obra.lectura]} de {ROMANO[lecturaDe]}
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
            {obra.title}
          </h1>
          <p className="mt-2 font-sans text-sm tracking-wide text-gold">
            {obra.subtitulo}
          </p>
          <p className="kicker mt-4">Alejandro Sirit · Editorial Cielo Efata</p>
          <p className="mt-2 font-sans text-sm tracking-wide text-ink-soft">
            Capítulo ancla: {obra.pasaje}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={whatsappTomo(obra.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa"
            >
              Solicitar «{obra.title}» por WhatsApp
            </a>
            <Compartir
              titulo={obra.title}
              pasaje={obra.pasaje}
              ruta={`/obras/${obra.slug}`}
              className="btn btn-ghost"
            />
            <a href="#obtener" className="btn btn-ghost">
              {obra.sinAmazon ? "Cómo obtenerlo" : "Amazon y otras opciones"}
            </a>
          </div>
          <p className="mt-3 font-sans text-xs text-ink-soft">
            Te respondemos personalmente. El mensaje ya lleva el título del
            libro.
          </p>
        </div>
      </div>

      <p className="mt-10 text-lg leading-relaxed">
        <ConLemas>{obra.line}</ConLemas>
      </p>
      <p className="mt-5 leading-relaxed">
        <ConLemas>{obra.thesis}</ConLemas>
      </p>
      <p className="mt-3 font-sans text-sm tracking-wide text-gold">
        <Cite>{obra.ref}</Cite>
      </p>

      <h2 className="mt-12 font-serif text-3xl">Orden de lectura</h2>
      <p className="mt-4 leading-relaxed">
        Este es el libro {ROMANO[obra.lectura]} en el orden de lectura sugerido
        (que no es el de publicación). Se empieza por Pórtico a la Escritura, y
        en Éfata se aprende a leer el capítulo entero antes de hablar. Cada
        libro se lee junto al capítulo de la Biblia en que se apoya.
      </p>
      <ol className="mt-5 space-y-2">
        {obras.map((o) => (
          <li
            key={o.slug}
            className={o.slug === obra.slug ? "text-ink" : "text-ink-soft"}
          >
            <Link
              to="/obras/$slug"
              params={{ slug: o.slug }}
              className="hover:text-gold"
            >
              {ROMANO[o.lectura]}. {o.title}
              {o.slug === obra.slug ? " · este libro" : ""}
            </Link>
          </li>
        ))}
      </ol>

      <h2 className="mt-12 font-serif text-3xl">Sobre este libro</h2>
      {muestra.map((p) => (
        <p key={p.slice(0, 40)} className="mt-5 text-lg leading-relaxed">
          <ConLemas>{p}</ConLemas>
        </p>
      ))}

      <h2 id="obtener" className="mt-12 scroll-mt-24 font-serif text-3xl">
        Cómo obtenerlo
      </h2>
      <p className="mt-4 leading-relaxed">
        {obra.sinAmazon
          ? "Para solicitar este libro, escríbenos por WhatsApp y te responderemos personalmente."
          : "Puedes adquirir este libro en Amazon o solicitarlo por WhatsApp. En Venezuela también puedes pedir la colección impresa."}
      </p>
      <Adquirir
        title={obra.title}
        amazonTitle={obra.amazonTitle}
        slug={obra.slug}
        asinEbook={obra.asinEbook}
        isbnPrint={obra.isbnPrint}
        asinPrint={obra.asinPrint}
        sinAmazon={obra.sinAmazon}
        pack
      />

      {obra.revelatio ? (
        <aside
          className="mt-10 flex items-center gap-5 border border-rule p-5"
          aria-label="Estudiar el libro en RevelatiO"
        >
          <div className="flex-1">
            <p className="font-serif text-xl leading-snug">
              Estudia cada capítulo de este libro con IA en RevelatiO
            </p>
            <a
              href={urlRevelatioLibro(obra.revelatioSlug ?? obra.slug)}
              target="_blank"
              rel="noopener"
              className="btn btn-gold mt-4"
            >
              Abrir {obra.title} en RevelatiO
              <BtnArrow />
            </a>
          </div>
          <img
            src={qrRevelatioPath(obra.revelatioSlug ?? obra.slug)}
            alt={`Código QR de ${obra.title} en RevelatiO`}
            width={88}
            height={88}
            loading="lazy"
            className="hidden shrink-0 bg-white p-1 sm:block"
          />
        </aside>
      ) : null}

      {obra.studyNote ? (
        <p className="mt-8 leading-relaxed text-ink-soft">{obra.studyNote}</p>
      ) : null}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
        {tratado ? (
          <Link
            to="/tratados/$slug"
            params={{ slug: tratado.slug }}
            className="btn btn-gold"
          >
            Leer el tratado relacionado
            <BtnArrow />
          </Link>
        ) : null}
        <LeerCapitulo
          ref={obra.pasaje}
          desde={`/obras/${obra.slug}`}
          companeros={[study?.ref, tratado?.ref]}
        />
        {obra.crisol ? (
          <Link to="/crisol" className="btn btn-ghost">
            C.R.I.S.O.L.
          </Link>
        ) : null}
      </div>

      <nav
        className="mt-14 flex flex-col gap-3 border-t border-rule pt-6 sm:flex-row sm:justify-between"
        aria-label="Orden de lectura"
      >
        {prev ? (
          <Link
            to="/obras/$slug"
            params={{ slug: prev.slug }}
            className="text-link underline"
          >
            Anterior: {ROMANO[prev.lectura]}. {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to="/obras/$slug"
            params={{ slug: next.slug }}
            className="text-link underline"
          >
            Siguiente: {ROMANO[next.lectura]}. {next.title}
          </Link>
        ) : null}
      </nav>
      <p className="mt-6 font-sans text-sm">
        <Link
          to="/obras"
          hash={`lectura-${obra.lectura}`}
          className="text-link underline"
        >
          Volver al catálogo
        </Link>
      </p>
    </main>
  );
}
