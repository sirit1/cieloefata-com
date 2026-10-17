import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArticleJsonLd } from "@/components/json-ld";
import { LeerCapitulo } from "@/components/leer-capitulo";
import { TarjetaLibro } from "@/components/tarjeta-libro";
import { obraBySlug } from "@/lib/content";
import { pageHead, tituloSeccion } from "@/lib/seo";
import { versiculoBySlug } from "@/lib/versiculos";

export const Route = createFileRoute("/versiculo/$slug")({
  loader: ({ params }) => {
    const v = versiculoBySlug(params.slug);
    if (!v) throw notFound();
    return { v };
  },
  head: ({ loaderData }) => {
    const v = loaderData?.v;
    return pageHead({
      path: `/versiculo/${v?.slug ?? ""}`,
      title: tituloSeccion(v ? `${v.ref}: qué significa` : "Versículo"),
      description: v
        ? `${v.ref} en la Reina-Valera 1960. La palabra «${v.traduce}» en el ${v.lengua} original: ${v.translit}, Strong ${v.strong}, explicada en su capítulo.`
        : undefined,
    });
  },
  component: VersiculoPage,
});

function strongRevelatio(id: string) {
  return `https://revelatio.app/strong?id=${id}&casa=1`;
}

function VersiculoPage() {
  const { v } = Route.useLoaderData();
  const obra = v.obra ? obraBySlug(v.obra) : obraBySlug("efata");
  const desde = `/versiculo/${v.slug}`;
  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <ArticleJsonLd headline={v.pregunta} path={desde} />
      <p className="kicker">Versículo clave</p>
      <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">{v.pregunta}</h1>

      <blockquote className="mt-8 border-l-2 border-gold pl-5">
        <p className="font-serif text-2xl leading-snug">«{v.texto}»</p>
        <footer className="mt-3 font-sans text-sm tracking-wide text-gold">
          {v.ref} · Reina-Valera 1960
        </footer>
      </blockquote>

      <h2 className="mt-12 font-serif text-3xl">
        «{v.traduce}» en el {v.lengua} original
      </h2>
      <p className="mt-4 font-serif text-3xl" lang={v.lengua === "hebreo" ? "he" : "grc"} dir={v.lengua === "hebreo" ? "rtl" : "ltr"}>
        {v.forma}
      </p>
      <p className="mt-2 font-sans text-sm text-ink-soft">
        Lema: <span lang={v.lengua === "hebreo" ? "he" : "grc"}>{v.lema}</span> ({v.translit}) ·
        Strong {v.strong}
      </p>
      <p className="mt-5 text-lg leading-relaxed">{v.strongProsa}</p>
      <p className="mt-5 text-lg leading-relaxed">{v.lectura}</p>
      <p className="mt-4 font-sans text-xs leading-relaxed text-muted">
        {v.lengua === "hebreo"
          ? "Hebreo: Códice de Leningrado (Westminster Leningrad Codex, OSHB), el texto que edita la Biblia Hebraica Stuttgartensia."
          : "Griego: Textus Receptus de Scrivener (1894), de dominio público; la fuente digital no trae acentos."}{" "}
        Léxico de Strong (1890), de dominio público. Texto bíblico: Reina-Valera © 1960 Sociedades
        Bíblicas en América Latina; © renovado 1988 Sociedades Bíblicas Unidas. Utilizado con permiso.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <LeerCapitulo
          ref={v.ref}
          desde={desde}
          pregunta={v.pregunta}
          className="btn btn-gold"
          label="Leer el capítulo y preguntar en RevelatiO"
        />
        <a href={strongRevelatio(v.strong)} rel="noopener noreferrer" className="btn btn-ghost">
          Ficha completa de {v.strong} en RevelatiO
        </a>
        {v.aula ? (
          v.aula.kind === "estudio" ? (
            <Link to="/estudios/$slug" params={{ slug: v.aula.slug }} className="btn btn-ghost">
              Estudio de {v.aula.title}
            </Link>
          ) : (
            <Link to="/tratados/$slug" params={{ slug: v.aula.slug }} className="btn btn-ghost">
              Tratado: {v.aula.title}
            </Link>
          )
        ) : null}
      </div>
      <p className="mt-4 leading-relaxed text-ink-soft">
        El versículo no viaja solo. En RevelatiO se lee el capítulo entero, con el original
        palabra por palabra y la consulta que pregunta al pasaje.
      </p>

      {obra ? <TarjetaLibro obra={obra} /> : null}

      <p className="mt-10 font-sans text-sm">
        <Link to="/versiculo" className="text-link underline">
          Todos los versículos clave
        </Link>
      </p>
    </main>
  );
}
