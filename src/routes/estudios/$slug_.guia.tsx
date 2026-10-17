import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { LeerCapitulo } from "@/components/leer-capitulo";
import { estudioTienePack } from "@/lib/catalogo";
import { pageHead, tituloSeccion } from "@/lib/seo";
import { VERDAD_PASOS } from "@/lib/verdad";

/** Minutos sugeridos por eslabón para una reunión de una hora. */
const MINUTOS = [8, 7, 10, 10, 7, 8] as const;

export const Route = createFileRoute("/estudios/$slug_/guia")({
  loader: async ({ params }) => {
    const { studyBySlug } = await import("@/lib/studies-aula");
    const study = studyBySlug(params.slug);
    if (!study || !estudioTienePack(study.slug)) throw notFound();
    return { study };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.study;
    return pageHead({
      path: `/estudios/${s?.slug ?? ""}/guia`,
      title: tituloSeccion(`Guía del líder: ${s?.ref ?? "estudio"}`),
      description: s
        ? `Guía del líder para grupos pequeños sobre ${s.ref}. Lectura en voz alta, seis preguntas del método V.E.R.D.A.D. y un paso de obediencia.`
        : undefined,
    });
  },
  component: GuiaLider,
});

function GuiaLider() {
  const { study } = Route.useLoaderData();
  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <p className="kicker">Guía del líder · Grupos pequeños</p>
      <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
        {study.title}: {study.ref}
      </h1>
      <p className="mt-6 text-lg leading-relaxed">
        Esta guía sirve para una reunión de una hora. El líder no da una charla sobre el
        pasaje: lo hace leer entero, en voz alta, y conduce al grupo por las seis preguntas del
        método V.E.R.D.A.D. en su orden, porque cada una depende de la anterior. La reunión
        termina cuando cada persona ha escrito un solo paso de obediencia que sale de{" "}
        {study.ref}.
      </p>
      <div className="no-imprimir mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <button type="button" className="btn btn-gold" onClick={() => window.print()}>
          Imprimir la guía
        </button>
        <Link to="/estudios/$slug" params={{ slug: study.slug }} className="btn btn-ghost">
          Volver al estudio
        </Link>
        <LeerCapitulo
          ref={study.ref}
          desde={`/estudios/${study.slug}`}
          label="Leer el capítulo y preguntar en RevelatiO"
        />
      </div>

      <h2 className="mt-12 font-serif text-3xl">1. Leer en voz alta (5 minutos)</h2>
      <p className="kicker mt-3">{study.ref} · Reina-Valera 1960</p>
      <p className="mt-3 text-lg leading-relaxed">{study.passage}</p>
      <p className="mt-3 font-sans text-xs text-ink-soft">
        Texto bíblico: Reina-Valera © 1960 Sociedades Bíblicas en América Latina; © renovado 1988
        Sociedades Bíblicas Unidas. Utilizado con permiso.
      </p>

      <h2 className="mt-12 font-serif text-3xl">2. Seis preguntas, en este orden</h2>
      <ol className="mt-4 space-y-6">
        {VERDAD_PASOS.map((p, i) => (
          <li key={`${p.letter}-${p.name}`}>
            <p className="font-serif text-2xl">
              {p.letter} · {p.name}{" "}
              <span className="font-sans text-sm text-ink-soft">
                ({p.verbo}, unos {MINUTOS[i]} minutos)
              </span>
            </p>
            <p className="mt-2 text-lg leading-relaxed">
              {p.pregunta} Hágase la pregunta sobre {study.ref}, y que el grupo responda con
              palabras del texto antes que con las propias.
            </p>
            <p className="mt-2 leading-relaxed text-ink-soft">{p.regla}</p>
          </li>
        ))}
      </ol>
      <p className="mt-6 leading-relaxed">
        Para la pregunta de Revelación, el estudio trae el original palabra por palabra, con el
        hebreo del Códice de Leningrado (el mismo que edita la BHS) o el griego del Textus
        Receptus, y cada número Strong abre su ficha: el número es solo la etiqueta de la raíz en
        el diccionario de Strong, y la palabra se entiende dentro de su capítulo.
      </p>

      <h2 className="mt-12 font-serif text-3xl">3. Lo que el estudio ya vio</h2>
      <p className="mt-3 text-lg leading-relaxed">{study.ver}</p>

      <h2 className="mt-12 font-serif text-3xl">4. Un paso, por escrito (5 minutos)</h2>
      <p className="mt-3 text-lg leading-relaxed">
        Cada uno escribe qué le pide {study.ref}: no un propósito general, sino lo que este
        texto concretamente manda. Se comparte con una persona del grupo, que la próxima vez
        preguntará por él.
      </p>
      <div className="mt-4 h-40 border border-rule" aria-hidden />
    </main>
  );
}
