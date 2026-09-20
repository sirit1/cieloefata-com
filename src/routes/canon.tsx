import { createFileRoute, Link } from "@tanstack/react-router";
import { Cite, Refs } from "@/components/cite";
import { Datos } from "@/components/datos";
import { bible, canonDoors } from "@/lib/content";
import { fichasPorEstante } from "@/lib/canon-fichas";
import { ESCRITURA, PERSONAS, TESTIGO, TRINIDAD } from "@/lib/pilar";

export const Route = createFileRoute("/canon")({ component: CanonPage });

function CanonPage() {
  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <h1 className="font-serif text-4xl">Sesenta y seis libros</h1>
      {ESCRITURA.body.map((p) => (
        <p key={p.slice(0, 24)} className="mt-5 text-lg leading-relaxed">
          {p}
        </p>
      ))}
      <Refs refs={ESCRITURA.refs} />

      <section id="dios" className="mt-14 scroll-mt-24">
        <h2 className="font-serif text-3xl">{TRINIDAD.title}</h2>
        <p className="mt-5 text-lg leading-relaxed">{TRINIDAD.lead}</p>
        <Refs refs={TRINIDAD.leadRefs} />
        <div className="mt-12 space-y-12">
          {PERSONAS.map((p) => (
            <article key={p.name}>
              <h3 className="font-serif text-3xl">{p.name}</h3>
              {p.body.map((para) => (
                <p key={para.slice(0, 36)} className="mt-4 leading-relaxed">
                  {para}
                </p>
              ))}
              <Refs refs={p.refs} />
            </article>
          ))}
        </div>
      </section>

      <h2 className="mt-14 font-serif text-3xl">{TESTIGO.title}</h2>
      <p className="mt-5 leading-relaxed">{TESTIGO.gate}</p>
      <div className="mt-8 bg-navy px-5 py-10 text-parchment md:px-8">
        <Datos items={TESTIGO.measures} onNavy />
      </div>
      <p className="mt-10 leading-relaxed">{TESTIGO.body[TESTIGO.body.length - 1]}</p>
      <Refs refs="2 Ti. 3:16 · Ro. 1:16 · Jn. 16:8" />

      <h2 className="mt-14 font-serif text-3xl">Siete estantes</h2>
      <p className="mt-4 leading-relaxed">{bible.close}</p>
      <Refs refs={bible.closeRef} />

      <ol className="mt-10 space-y-10">
        {canonDoors.map((d) => (
          <li key={d.name} className="border-t border-rule pt-6">
            <h3 className="font-serif text-2xl">
              {d.name}: {d.span}
            </h3>
            <p className="mt-1 text-sm text-gold">Autoría humana · {d.author}</p>
            <p className="mt-3 leading-relaxed">{d.line}</p>
            <p className="mt-3 leading-relaxed text-ink-soft">{d.link}</p>
            <p className="mt-2 font-sans text-sm tracking-wide text-gold">{d.ref}</p>
            <ul className="mt-6 space-y-5">
              {fichasPorEstante(d.name).map((f) => (
                <li key={f.name}>
                  <p className="font-serif text-xl">{f.name}</p>
                  <p className="mt-1 text-sm text-gold">
                    {f.author} · {f.era}
                  </p>
                  <p className="mt-2 leading-relaxed">{f.purpose}</p>
                  <p className="mt-1 leading-relaxed text-ink-soft">{f.christ}</p>
                  <p className="mt-2 font-sans text-sm tracking-wide text-gold">
                    <Cite>{f.ref}</Cite>
                  </p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <Link to="/" className="mt-12 inline-block font-sans text-sm text-link underline">
        Romanos 1, el pasaje de esta semana
      </Link>
    </main>
  );
}
