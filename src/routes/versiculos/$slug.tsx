import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { track } from "@vercel/analytics";
import { ArticleJsonLd, FaqJsonLd } from "@/components/json-ld";
import { Compartir } from "@/components/compartir";
import { LeerCapitulo } from "@/components/leer-capitulo";
import { ANCLAS_VERDAD, plantillaRevelatio } from "@/components/caja-verdad";
import { pageHead, tituloSeccion } from "@/lib/seo";
import { faqJsonLd, versiculoContexto, VERSICULOS_CONTEXTO } from "@/lib/versiculos-contexto";

export const Route = createFileRoute("/versiculos/$slug")({
  loader: ({ params }) => {
    const v = versiculoContexto(params.slug);
    if (!v) throw notFound();
    return { v };
  },
  head: ({ loaderData }) => {
    const v = loaderData?.v;
    return pageHead({
      path: `/versiculos/${v?.slug ?? ""}`,
      title: v ? tituloSeccion(v.titulo) : tituloSeccion("Versículo"),
      description: v?.description,
      exact: true,
      image: v?.og,
    });
  },
  component: VersiculoContextoPage,
});

const strongRevelatio = (id: string) => `https://revelatio.app/strong?id=${id}&casa=1`;

function Letra({ i, l, nombre, children }: { i: number; l: string; nombre: string; children: React.ReactNode }) {
  return (
    <section id={`v-${ANCLAS_VERDAD[i]}`} className="mt-10 scroll-mt-24">
      <h3 className="flex items-center gap-3 font-serif text-2xl">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center bg-navy font-sans text-sm font-semibold text-parchment">
          {l}
        </span>
        {nombre}
      </h3>
      <div className="mt-3 space-y-4 text-lg leading-relaxed">{children}</div>
    </section>
  );
}

function VersiculoContextoPage() {
  const { v } = Route.useLoaderData();
  const desde = `/versiculos/${v.slug}`;
  const lang = v.lengua === "hebreo" ? "he" : "grc";
  const otros = VERSICULOS_CONTEXTO.filter((x) => x.slug !== v.slug);
  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <ArticleJsonLd headline={v.titulo} path={desde} />
      <FaqJsonLd data={faqJsonLd(v)} />
      <p className="kicker">
        <Link to="/versiculos" className="hover:text-ink">Versículos fuera de contexto</Link>
      </p>
      <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">{v.titulo}</h1>

      <blockquote className="mt-8 border-l-2 border-gold pl-5">
        <p className="font-serif text-2xl leading-snug">«{v.texto}»</p>
        <footer className="mt-3 font-sans text-sm tracking-wide text-gold">{v.ref} · Reina-Valera 1960</footer>
      </blockquote>

      <p className="mt-6 leading-relaxed text-ink-soft">
        <strong>Cómo se usa a solas:</strong> {v.usoSuelto}
      </p>

      <h2 className="mt-12 font-serif text-3xl">Respuesta breve</h2>
      <p className="mt-4 text-lg leading-relaxed">{v.respuesta}</p>

      <section className="mt-12 border-2 border-navy bg-parchment/60 p-5 sm:p-6" aria-label="Estudio con el método V.E.R.D.A.D.">
        <p className="kicker">El método de la casa</p>
        <h2 className="mt-1 font-serif text-3xl">{v.ref}, estudiado con V.E.R.D.A.D.</h2>
        <p className="mt-2 font-serif text-xl italic">La Biblia no se lee, se estudia.</p>
        <p className="mt-3 leading-relaxed">
          Seis preguntas, siempre en el mismo orden: Ver, Entorno, Revelación (la lengua original), Doctrina,
          Argumento y Decisión. Así se estudia este versículo, y así puedes estudiar cualquier otro.{" "}
          <a href="/verdad" className="text-link underline">Qué es V.E.R.D.A.D.</a>
        </p>
        <nav className="mt-4 flex flex-wrap gap-2" aria-label="Las seis letras">
          {["V Ver", "E Entorno", "R Revelación", "D Doctrina", "A Argumento", "D Decisión"].map((t, i) => (
            <a key={t} href={`#v-${ANCLAS_VERDAD[i]}`} className="inline-flex min-h-11 items-center gap-2 border border-rule bg-paper px-3 font-sans text-sm hover:border-gold">
              <span className="font-semibold text-gold">{t[0]}</span>
              {t.slice(2)}
            </a>
          ))}
        </nav>
      </section>

      <Letra i={0} l="V" nombre="Ver: ¿qué está escrito?">
        <figure className="m-0">
          <blockquote className="verso !mt-0">
            {v.parrafo.versos.map((x) => (
              <span key={x.v}>
                <sup className="mr-1 font-sans text-xs not-italic">{x.v}</sup>
                {x.t}{" "}
              </span>
            ))}
          </blockquote>
          <figcaption className="mt-2 pl-6 font-sans text-sm text-ink-soft">{v.parrafo.ref}, Reina-Valera 1960</figcaption>
        </figure>
        <p>{v.verdad.ver}</p>
      </Letra>

      <Letra i={1} l="E" nombre="Entorno: ¿quién escribe, a quién y qué clase de escrito es?">
        <p>{v.verdad.entorno}</p>
      </Letra>

      <Letra i={2} l="R" nombre={`Revelación: el ${v.lengua} original`}>
        <p className="font-serif text-2xl leading-snug" lang={lang} dir={v.lengua === "hebreo" ? "rtl" : "ltr"}>
          {v.original.texto}
        </p>
        <p className="font-sans text-sm text-ink-soft">{v.original.fuente}</p>
        <p>{v.verdad.revelacion}</p>
        <dl className="space-y-5">
          {v.verdad.palabras.map((w) => (
            <div key={w.strong} className="border-l-2 border-rule pl-4">
              <dt className="font-sans text-sm">
                <span className="font-serif text-2xl" lang={lang}>{w.lema}</span>{" "}
                <em>{w.translit}</em> ·{" "}
                <a href={strongRevelatio(w.strong)} rel="noopener noreferrer" className="text-link underline">
                  Strong {w.strong}
                </a>
              </dt>
              <dd className="m-0 mt-1">{w.prosa}</dd>
            </div>
          ))}
        </dl>
      </Letra>

      <Letra i={3} l="D" nombre="Doctrina: ¿qué enseña de Dios, del pecado, de Cristo y de su pueblo?">
        <p>{v.verdad.doctrina}</p>
      </Letra>

      <Letra i={4} l="A" nombre="Argumento: la objeción honesta">
        <p className="font-serif text-xl italic">{v.verdad.argumento.objecion}</p>
        <p>{v.verdad.argumento.respuesta}</p>
      </Letra>

      <Letra i={5} l="D" nombre="Decisión: ¿qué voy a obedecer esta semana, y ante quién?">
        <p>{v.verdad.decision}</p>
      </Letra>

      <section className="mt-14 border-t border-rule pt-10">
        <h2 className="font-serif text-3xl">La misma Escritura te contesta</h2>
        <p className="mt-3 font-serif text-xl italic">
          «Lo que no encuentras en la Biblia, no esperes, no abandones, no busques a nadie: la misma Escritura te
          contesta.»
        </p>
        <p className="mt-3 leading-relaxed">
          Referencias cruzadas para leer junto a {v.ref}. Cada una se lee en su propio capítulo; son pistas de
          concordancia, no frases sueltas.
        </p>
        <ul className="mt-5 space-y-4">
          {v.referencias.map((c) => (
            <li key={c.ref} className="leading-relaxed">
              <p className="font-serif text-lg">«{c.t}»</p>
              <p className="font-sans text-sm text-gold">{c.ref} · RVR1960 · <span className="text-ink-soft">{c.nota}</span></p>
            </li>
          ))}
        </ul>
        <aside className="mt-8 border-l-4 border-gold bg-parchment/60 p-5" aria-label="Norma normans non normata">
          <p className="font-serif text-2xl italic">Norma normans non normata</p>
          <p className="mt-2 leading-relaxed">
            «La norma que norma y no es normada.» La Escritura mide nuestra situación, y no al revés: no se lee para
            adaptarla a tu situación, sino para que tu situación se ponga delante del texto.
          </p>
        </aside>
      </section>

      <section className="mt-14 border-t border-rule pt-10">
        <h2 className="font-serif text-3xl">Preguntas frecuentes sobre {v.ref}</h2>
        <div className="mt-6 space-y-6">
          {v.faq.map((f) => (
            <div key={f.q}>
              <h3 className="font-serif text-xl">{f.q}</h3>
              <p className="mt-2 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 border-2 border-gold p-5 sm:p-6" aria-label="Guía gratis V.E.R.D.A.D.">
        <p className="kicker">Guía gratis</p>
        <p className="mt-1 font-serif text-2xl sm:text-3xl">¿Te sorprendió? Así se estudia cualquier versículo.</p>
        <p className="mt-3 leading-relaxed">
          Seis preguntas, el método V.E.R.D.A.D., en una guía gratuita con la hoja para imprimir y el reto de 6 días.
          La Biblia no se lee, se estudia.
        </p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          <a href="/verdad#recibir" className="btn btn-gold" onClick={() => track("versiculos_cta", { slug: v.slug })}>
            Quiero la guía gratis
          </a>
          <a href="/verdad#hazlo-con-2" className="btn btn-ghost">Hazlo con 2: invita al reto</a>
        </div>
      </section>

      <section className="mt-14 border-t border-rule pt-10">
        <h2 className="font-serif text-3xl">Sigue estudiando</h2>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link to="/tratados/$slug" params={{ slug: v.tratado.slug }} className="btn btn-ink">
            Tratado completo: {v.tratado.title}
          </Link>
          <LeerCapitulo ref={v.capitulo} desde={desde} className="btn btn-ghost" label={`Leer ${v.capitulo} en RevelatiO`} />
          <a href={plantillaRevelatio(v.capitulo, desde)} rel="noopener noreferrer" className="btn btn-ghost">
            Guía V.E.R.D.A.D. de {v.capitulo} en RevelatiO
          </a>
        </div>
        <ul className="mt-6 list-disc space-y-2 pl-6 leading-relaxed">
          {v.relacionados.map((r) => (
            <li key={r.href}>
              <a href={r.href} className="text-link underline">{r.label}</a>
            </li>
          ))}
          {otros.map((o) => (
            <li key={o.slug}>
              <Link to="/versiculos/$slug" params={{ slug: o.slug }} className="text-link underline">
                ¿Qué significa {o.ref}?
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-2">
          <Compartir titulo={`¿Qué significa ${v.ref}?`} ruta={desde} />
        </div>
      </section>

      <p className="mt-12 font-sans text-xs leading-relaxed text-muted">
        {v.lengua === "hebreo"
          ? "Hebreo: Códice de Leningrado (Westminster Leningrad Codex, OSHB), el texto que edita la Biblia Hebraica Stuttgartensia."
          : "Griego: Textus Receptus de Scrivener (1894), de dominio público; la fuente digital no trae acentos."}{" "}
        Léxico de Strong (1890), de dominio público. Texto bíblico: Reina-Valera © 1960 Sociedades Bíblicas en
        América Latina; © renovado 1988 Sociedades Bíblicas Unidas. Utilizado con permiso.
      </p>
    </main>
  );
}
