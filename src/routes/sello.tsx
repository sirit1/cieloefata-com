import { createFileRoute, Link } from "@tanstack/react-router";
import { Cite, Refs } from "@/components/cite";
import { ConLemas } from "@/components/lema";
import { Seal } from "@/components/seal";
import { Volver } from "@/components/volver";
import { FIGURAS, SELLO } from "@/lib/identidad";
import { pageHead, tituloSeccion } from "@/lib/seo";

export const Route = createFileRoute("/sello")({
  component: SelloPage,
  head: () =>
    pageHead({
      path: "/sello",
      title: tituloSeccion("El sello"),
      description: "Post tenebras lux: después de las tinieblas, la luz. El sello de Cielo Efata confiesa al León de Judá, al Cordero inmolado y al Espíritu que da luz.",
      detalle: SELLO.gate,
    }),
});

function SelloPage() {
  return (
    <main>
      <section className="px-4 py-20 md:py-28">
        <div className="mx-auto max-w-[40em]">
          <Volver />
        </div>
        <div className="mx-auto max-w-[40em] text-center">
          <Seal variant="full" size={280} priority className="mx-auto mb-10 h-auto w-[13rem] md:w-[16rem]" />
          <p className="lema-latin glosa" tabIndex={0}>
            {SELLO.latin}
            <span className="glosa-card" role="tooltip">
              {SELLO.romance}
            </span>
          </p>
          <p className="lema-romance">{SELLO.romance}</p>
          <h1 className="mt-10 font-serif text-4xl md:text-5xl">{SELLO.title}</h1>
          <p className="mt-8 text-left text-lg leading-relaxed">
            <ConLemas>{SELLO.gate}</ConLemas>
          </p>
          <div className="text-left">
            <Refs refs={SELLO.refs} />
          </div>
        </div>
      </section>

      <section className="border-y border-rule/40 bg-paper px-4 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl">Tres figuras, un Nombre</h2>
          <p className="mt-4 max-w-[40em] leading-relaxed">
            El sello no inventa nada: nombra lo que ya está en la Biblia. El León y el Cordero no
            son dos cristos, sino el mismo Señor visto desde dos lados, como lo muestra Apocalipsis
            5. El Fuego no es un ambiente de reunión: es el Espíritu Santo, el que anunció Juan el
            Bautista —«él os bautizará en Espíritu Santo y fuego»— y el que en Pentecostés se
            manifestó como lenguas de fuego. El que dijo «Efata» en la Decápolis es el León y el
            Cordero; el Fuego es el Espíritu que ese mismo Señor envía.
          </p>
          <ul className="mt-12 grid gap-10 sm:grid-cols-3">
            {FIGURAS.map((f) => (
              <li key={f.name}>
                <h3 className="font-serif text-2xl">{f.name}</h3>
                <p className="mt-2 leading-relaxed">{f.line}</p>
                <p className="mt-2 font-sans text-sm tracking-wide text-gold">
                  <Cite>{f.ref}</Cite>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-20 md:py-28">
        <div className="mx-auto max-w-[40em]">
          <div className="mt-12">
            <Seal variant="full" size={160} decorative className="h-40 w-auto" />
            <p className="mt-4 font-sans text-xs tracking-wide text-muted">
              El sello completo: el León, el Cordero y el Fuego, juntos.
            </p>
          </div>
          <Link to="/" className="btn btn-ink mt-16">
            Volver al inicio
          </Link>
        </div>
      </section>
    </main>
  );
}
