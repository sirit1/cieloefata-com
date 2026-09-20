import { createFileRoute, Link } from "@tanstack/react-router";
import { Cite, Refs, Term } from "@/components/cite";
import { ConLemas } from "@/components/lema";
import { BtnArrow, Motif } from "@/components/motif";
import {
  CRISOL_CUATRO,
  CRISOL_FALLOS,
  CRISOL_GENESIS,
  CRISOL_ORIGEN,
  CRISOL_PESTILLOS,
} from "@/lib/crisol";

export const Route = createFileRoute("/crisol")({
  component: CrisolPage,
  head: () => ({
    meta: [{ title: "C.R.I.S.O.L.™ · Cielo Efata" }],
  }),
});

function CrisolPage() {
  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <Motif kind="flame" />
      <p className="font-sans text-xs tracking-[0.2em] text-gold uppercase">{CRISOL_ORIGEN.kicker}</p>
      <h1 className="mt-2 font-serif text-4xl md:text-5xl">{CRISOL_ORIGEN.title}</h1>
      <p className="mt-3 font-serif text-xl italic text-ink-soft">{CRISOL_ORIGEN.subtitulo}</p>
      <p className="mt-2 font-sans text-sm tracking-wide text-gold">
        {CRISOL_ORIGEN.libro} · Tomo II de la colección
      </p>

      <p className="mt-8 text-lg leading-relaxed">{CRISOL_ORIGEN.quien}</p>
      <p className="mt-5 text-lg leading-relaxed">
        <ConLemas>{CRISOL_ORIGEN.espejo}</ConLemas>
      </p>
      <p className="mt-5 text-lg leading-relaxed">{CRISOL_ORIGEN.paraQue}</p>
      <p className="mt-5 text-lg leading-relaxed">{CRISOL_ORIGEN.noEs}</p>
      <Refs refs={CRISOL_ORIGEN.refs} />

      <p className="mt-10 font-sans text-sm">
        <Link to="/metodo" className="text-link underline">
          V.E.R.D.A.D.™ oye el pasaje
        </Link>
        {" · "}
        <Link to="/estudios/$slug" params={{ slug: "genesis-3" }} className="text-link underline">
          El laboratorio de Génesis 3
        </Link>
      </p>

      <p className="mt-16 text-lg leading-relaxed">
        Después de oír el pasaje, la Decisión debe pasar por seis preguntas. No se recitan como
        un segundo acrónimo. Se aplican, una por una, al acto concreto de esta semana.
      </p>

      <ol className="mt-10 space-y-12">
        {CRISOL_PESTILLOS.map((p) => (
          <li key={p.letter} className="border-t border-rule pt-8">
            <p className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center bg-navy font-sans text-sm font-semibold tracking-[0.12em] text-parchment">
                {p.letter}
              </span>
              <span className="font-sans text-xs tracking-widest text-gold uppercase">Pregunta {p.letter}</span>
            </p>
            <h2 className="mt-3 font-serif text-3xl">{p.name}</h2>
            <p className="mt-3 font-serif text-xl italic text-ink-soft">{p.pregunta}</p>
            <p className="mt-4 text-lg leading-relaxed">{p.body}</p>
            <Refs refs={p.ref} />
          </li>
        ))}
      </ol>

      <section className="mt-16 border-t border-rule pt-10">
        <h2 className="font-serif text-3xl">{CRISOL_CUATRO.title}</h2>
        <p className="mt-5 text-lg leading-relaxed">{CRISOL_CUATRO.lead}</p>
        <ol className="mt-8 space-y-6">
          {CRISOL_CUATRO.tiempos.map((t) => (
            <li key={t.name}>
              <h3 className="font-serif text-2xl">{t.name}</h3>
              <p className="mt-2 leading-relaxed">{t.body}</p>
            </li>
          ))}
        </ol>
        <Refs refs={CRISOL_CUATRO.refs} />
      </section>

      <section className="mt-16 border-t border-rule pt-10">
        <h2 className="font-serif text-3xl">Donde la compuerta miente</h2>
        <ul className="mt-8 space-y-6">
          {CRISOL_FALLOS.map((f) => (
            <li key={f.title}>
              <h3 className="font-serif text-2xl">{f.title}</h3>
              <p className="mt-2 leading-relaxed">{f.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 border-t border-rule pt-10">
        <h2 className="font-serif text-3xl">{CRISOL_GENESIS.title}</h2>
        <p className="mt-5 text-lg leading-relaxed">{CRISOL_GENESIS.lead}</p>
        {CRISOL_GENESIS.body.map((p) => (
          <p key={p.slice(0, 40)} className="mt-5 leading-relaxed">
            {p}
          </p>
        ))}
        <Refs refs={CRISOL_GENESIS.refs} />
        <p className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/estudios/$slug"
            params={{ slug: "genesis-3" }}
            className="btn btn-gold"
          >
            Escudriñar Génesis 3
            <BtnArrow />
          </Link>
          <Link
            to="/cuaderno"
            search={{ ref: "Génesis 3" }}
            className="btn btn-ghost"
          >
            Escribir el acto
          </Link>
        </p>
      </section>

      <p className="mt-16 leading-relaxed italic text-ink-soft">
        Con Cristo estoy juntamente crucificado, y ya no vivo yo, mas vive Cristo en mí. El último
        eslabón no es el aplauso: es la rodilla.{" "}
        <Term title="Éfata: sé abierto (Marcos 7:34)">Éfata</Term>: sé abierto.
      </p>
      <p className="mt-2 font-sans text-sm tracking-wide text-gold">
        <Cite>Gá. 2:20 · Stg. 1:22 · Mr. 7:34</Cite>
      </p>
    </main>
  );
}
