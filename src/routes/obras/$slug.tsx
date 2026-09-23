import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Adquirir } from "@/components/adquirir";
import { Cite } from "@/components/cite";
import { BookJsonLd } from "@/components/json-ld";
import { ConLemas } from "@/components/lema";
import { LeerCapitulo } from "@/components/leer-capitulo";
import { BtnArrow } from "@/components/motif";
import { Tapa } from "@/components/tapa";
import { Volver } from "@/components/volver";
import { obraBySlug, obras, obraVecina, ROMANO, tapaPath } from "@/lib/content";
import { primerasPaginas } from "@/lib/muestras";
import { pageHead } from "@/lib/seo";
import { studyBySlug } from "@/lib/studies";
import { tratadoDe } from "@/lib/tratados";

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
      title: obra ? `${obra.title} · Cielo Efata` : "Obra · Cielo Efata",
      description: obra?.line,
      image: obra ? tapaPath(obra.slug) : undefined,
    });
  },
});

export function ObraPage() {
  const { obra } = Route.useLoaderData();
  const study = obra.studySlug ? studyBySlug(obra.studySlug) : undefined;
  const tratado = obra.tratadoSlug ? tratadoDe(obra.tratadoSlug) : undefined;
  const { prev, next } = obraVecina(obra.lectura);
  const lecturaDe = obras.length;
  const muestra = primerasPaginas(obra);

  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <BookJsonLd slug={obra.slug} />
      <Volver />
      <p className="font-sans text-xs tracking-[0.2em] text-gold uppercase">
        Lectura {ROMANO[obra.lectura]} de {ROMANO[lecturaDe]}
      </p>
      <h1 className="mt-3 font-serif text-4xl md:text-5xl">{obra.title}</h1>
      <p className="kicker mt-4">Dr. Alejandro Sirit · Editorial Cielo Efata</p>
      <p className="mt-2 font-sans text-sm tracking-wide text-gold">
        Capítulo ancla: {obra.pasaje}
      </p>

      <figure className="mt-10 m-0 max-w-xs">
        <Tapa obra={obra} size="lg" priority />
        <figcaption className="mt-3 font-sans text-sm leading-relaxed text-ink-soft">
          Tapa del tomo. Se abre junto a {obra.pasaje}, no en lugar de él.
        </figcaption>
      </figure>

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
        Este tomo ocupa el puesto {ROMANO[obra.lectura]} del orden de lectura, no el de
        publicación. Se entra por el oído y se sale por la lengua. Cada tapa se abre junto al
        capítulo que la sostiene, no en lugar de él.
      </p>
      <ol className="mt-5 space-y-2">
        {obras.map((o) => (
          <li key={o.slug} className={o.slug === obra.slug ? "text-ink" : "text-ink-soft"}>
            <Link to="/obras/$slug" params={{ slug: o.slug }} className="hover:text-gold">
              {ROMANO[o.lectura]}. {o.title}
              {o.slug === obra.slug ? " · este tomo" : ""}
            </Link>
          </li>
        ))}
      </ol>

      <h2 className="mt-12 font-serif text-3xl">Una muestra de las primeras páginas</h2>
      <p className="mt-4 leading-relaxed text-ink-soft">
        Estas líneas no son un capítulo inventado para vender: son la muestra de las primeras
        páginas, oídas junto a {obra.pasaje}.
      </p>
      {muestra.map((p) => (
        <p key={p.slice(0, 40)} className="mt-5 text-lg leading-relaxed">
          <ConLemas>{p}</ConLemas>
        </p>
      ))}

      <h2 className="mt-12 font-serif text-3xl">Adquirir</h2>
      <p className="mt-4 leading-relaxed">
        Donde hay ficha de Amazon, se enlaza el producto. Donde aún no hay ASIN ni ISBN
        conocido, se busca el título exacto con el nombre del autor, sin inventar un código.
        WhatsApp queda como canal segundo, para la colección impresa en Venezuela.
      </p>
      <p className="mt-4 leading-relaxed text-ink-soft">
        El pack de casa no se finge. En este repositorio no hay un enlace público de Drive para
        descargar el tomo. Si se pide el pack, se solicita por WhatsApp con el nombre de{" "}
        {obra.title}, y la casa responde. No se publica un botón de descarga que no abre nada.
      </p>
      <Adquirir
        title={obra.title}
        amazonTitle={obra.amazonTitle}
        slug={obra.slug}
        asinEbook={obra.asinEbook}
        isbnPrint={obra.isbnPrint}
        pack
      />

      {obra.studyNote ? (
        <p className="mt-8 leading-relaxed text-ink-soft">{obra.studyNote}</p>
      ) : null}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {study ? (
          <Link to="/estudios/$slug" params={{ slug: study.slug }} className="btn btn-gold">
            Escudriñar el estudio
            <span className="sr-only"> de {study.title}</span>
            <BtnArrow />
          </Link>
        ) : null}
        {tratado ? (
          <Link to="/tratados/$slug" params={{ slug: tratado.slug }} className="btn btn-gold">
            El tratado que oye este tomo
            <BtnArrow />
          </Link>
        ) : null}
        <LeerCapitulo ref={obra.pasaje} />
        {obra.crisol ? (
          <Link to="/crisol" className="btn btn-ghost">
            C.R.I.S.O.L.™
          </Link>
        ) : null}
      </div>

      <nav className="mt-14 flex flex-col gap-3 border-t border-rule pt-6 sm:flex-row sm:justify-between" aria-label="Orden de lectura">
        {prev ? (
          <Link to="/obras/$slug" params={{ slug: prev.slug }} className="text-link underline">
            Anterior: {ROMANO[prev.lectura]}. {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to="/obras/$slug" params={{ slug: next.slug }} className="text-link underline">
            Siguiente: {ROMANO[next.lectura]}. {next.title}
          </Link>
        ) : null}
      </nav>
      <p className="mt-6 font-sans text-sm">
        <Link to="/obras" hash={`lectura-${obra.lectura}`} className="text-link underline">
          Volver al catálogo
        </Link>
      </p>
    </main>
  );
}
