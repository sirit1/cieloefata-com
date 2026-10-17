import { createFileRoute, Link } from "@tanstack/react-router";
import { Refs } from "@/components/cite";
import { Compartir } from "@/components/compartir";
import { ArticleJsonLd } from "@/components/json-ld";
import { LeerCapitulo } from "@/components/leer-capitulo";
import {
  LO_QUE_CREEMOS,
  LO_QUE_CREEMOS_CIERRE,
  LO_QUE_CREEMOS_INTRO,
  type Articulo,
} from "@/lib/lo-que-creemos";
import { pageHead, tituloSeccion } from "@/lib/seo";

const RUTA = "/lo-que-creemos";

export const Route = createFileRoute("/lo-que-creemos")({
  component: LoQueCreemos,
  head: () =>
    pageHead({
      path: RUTA,
      title: tituloSeccion("Lo que creemos"),
      description:
        "Lo que enseña Cielo Efata sobre la Escritura, el Dios trino, Cristo, el Espíritu, el pecado, la salvación por gracia, la iglesia y las últimas cosas.",
    }),
});

function strongRevelatio(id: string) {
  return `https://revelatio.app/strong?id=${id}&casa=1`;
}

function Punto({ a }: { a: Articulo }) {
  const t = a.termino;
  const lang = t.lengua === "hebreo" ? "he" : "grc";
  return (
    <section id={a.id} aria-labelledby={`t-${a.id}`} className="scroll-mt-24">
      <h2 id={`t-${a.id}`} className="seccion-titulo">
        {a.titulo}
      </h2>
      {a.parrafos.map((p) => (
        <p key={p.slice(0, 40)} className="mt-4 text-lg leading-relaxed">
          {p}
        </p>
      ))}
      {a.versos.map((v) => (
        <blockquote key={v.ref} className="mt-6 border-l-2 border-gold pl-5">
          <p className="font-serif text-xl leading-snug">«{v.texto}»</p>
          <footer className="mt-2 font-sans text-sm tracking-wide text-gold">
            {v.ref} · Reina-Valera 1960
          </footer>
        </blockquote>
      ))}
      <div className="mt-6 border border-gold-soft/50 p-4">
        <p className="font-sans text-xs tracking-[0.18em] text-gold uppercase">
          «{t.traduce}» en el {t.lengua} original
        </p>
        <p
          className="mt-2 font-serif text-2xl"
          lang={lang}
          dir={t.lengua === "hebreo" ? "rtl" : "ltr"}
        >
          {t.forma}
        </p>
        <p className="mt-1 font-sans text-sm text-ink-soft">
          Lema: <span lang={lang}>{t.lema}</span> ({t.translit}) · Strong{" "}
          {t.strong}
        </p>
        <p className="mt-3 leading-relaxed">{t.prosa}</p>
      </div>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <LeerCapitulo
          ref={a.leer}
          desde={RUTA}
          className="btn btn-ghost"
          label="Leer el capítulo en RevelatiO"
        />
        <a
          href={strongRevelatio(t.strong)}
          rel="noopener noreferrer"
          className="btn btn-ghost"
        >
          Ficha de {t.strong} en RevelatiO
        </a>
      </div>
      {a.refs ? <Refs refs={a.refs} /> : null}
    </section>
  );
}

function LoQueCreemos() {
  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <ArticleJsonLd headline="Lo que creemos" path={RUTA} />
      <p className="kicker">Declaración de fe</p>
      <h1 className="hero-titulo mt-3">Lo que creemos</h1>
      <p className="mt-6 text-lg leading-relaxed">{LO_QUE_CREEMOS_INTRO}</p>
      <nav aria-label="Puntos de la declaración" className="mt-8">
        <ol className="grid gap-1 font-sans text-sm sm:grid-cols-2">
          {LO_QUE_CREEMOS.map((a) => (
            <li key={a.id}>
              <a
                href={`#${a.id}`}
                className="text-link inline-flex min-h-11 items-center underline underline-offset-4"
              >
                {a.titulo}
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <div className="mt-12 space-y-14">
        {LO_QUE_CREEMOS.map((a) => (
          <Punto key={a.id} a={a} />
        ))}
      </div>
      <section aria-labelledby="t-leemos" className="mt-14">
        <h2 id="t-leemos" className="seccion-titulo">
          Cómo leemos
        </h2>
        {LO_QUE_CREEMOS_CIERRE.map((p) => (
          <p key={p.slice(0, 40)} className="mt-4 text-lg leading-relaxed">
            {p}
          </p>
        ))}
        <Refs refs="Santiago 1:22 · Nehemías 8:8 · Hechos 17:11" />
      </section>
      <p className="mt-6 font-sans text-xs leading-relaxed text-muted">
        Hebreo: Códice de Leningrado (Westminster Leningrad Codex, OSHB), el
        texto que edita la Biblia Hebraica Stuttgartensia. Griego: Textus
        Receptus de Scrivener (1894). Léxico de Strong (1890), de dominio
        público. Texto bíblico: Reina-Valera © 1960 Sociedades Bíblicas en
        América Latina; © renovado 1988 Sociedades Bíblicas Unidas. Utilizado
        con permiso.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Compartir titulo="Lo que creemos" ruta={RUTA} />
        <Link to="/metodo" className="btn btn-ghost">
          El método V.E.R.D.A.D.
        </Link>
      </div>
    </main>
  );
}
