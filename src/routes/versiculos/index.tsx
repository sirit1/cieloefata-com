import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead, tituloSeccion } from "@/lib/seo";
import { DESCRIPCION_VERSICULOS, VERSICULOS_CONTEXTO } from "@/lib/versiculos-contexto";

export const Route = createFileRoute("/versiculos/")({
  head: () =>
    pageHead({
      path: "/versiculos",
      title: tituloSeccion("Versículos fuera de contexto: qué significan de verdad"),
      description: DESCRIPCION_VERSICULOS,
      exact: true,
      image: "/verdad/og-verdad.jpg",
    }),
  component: VersiculosContextoIndex,
});

function VersiculosContextoIndex() {
  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <p className="kicker">Versículos fuera de contexto</p>
      <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">¿Qué significa de verdad ese versículo?</h1>
      <p className="mt-6 text-lg leading-relaxed">
        Hay versículos que viajan solos: en tarjetas, en estados de WhatsApp, en camisetas. Aquí cada uno vuelve a su
        capítulo y se estudia con el método V.E.R.D.A.D.: Ver, Entorno, Revelación (el hebreo o el griego, con sus
        números Strong explicados), Doctrina, Argumento y Decisión. La Biblia no se lee, se estudia.
      </p>
      <ul className="mt-10 space-y-6">
        {VERSICULOS_CONTEXTO.map((v) => (
          <li key={v.slug} className="border-t border-rule pt-5">
            <Link to="/versiculos/$slug" params={{ slug: v.slug }} className="font-serif text-2xl hover:text-gold">
              ¿Qué significa {v.ref}?
            </Link>
            <p className="mt-2 leading-relaxed text-ink-soft">{v.description}</p>
          </li>
        ))}
      </ul>
      <p className="mt-10 leading-relaxed">
        Más versículos citados a solas, con su tratado completo, en{" "}
        <Link to="/preguntas" className="text-link underline">¿Qué dice la Biblia sobre…?</Link> y en{" "}
        <Link to="/objeciones" className="text-link underline">Objeciones</Link>.
      </p>
      <section className="mt-12 border-2 border-gold p-5 sm:p-6">
        <p className="kicker">Guía gratis</p>
        <p className="mt-1 font-serif text-2xl">Aprende a estudiar cualquier versículo en 6 preguntas.</p>
        <p className="mt-2 font-serif italic">
          «Lo que no encuentras en la Biblia, no esperes, no abandones, no busques a nadie: la misma Escritura te
          contesta.»
        </p>
        <p className="mt-2 leading-relaxed">Norma normans non normata: la Escritura mide, y no es medida.</p>
        <a href="/verdad" className="btn btn-gold mt-4">Quiero la guía V.E.R.D.A.D. gratis</a>
      </section>
    </main>
  );
}
