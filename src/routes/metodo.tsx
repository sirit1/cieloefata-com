import { createFileRoute, Link } from "@tanstack/react-router";
import { Cite, Refs, Term } from "@/components/cite";
import { ConLemas } from "@/components/lema";
import { BtnArrow, Motif } from "@/components/motif";
import { PasosNav, pasoId } from "@/components/pasos-nav";
import {
  ANATOMIA,
  CATECISMO,
  CRISOL_COMPUERTA,
  ESTUDIO_Y_TRATADO,
  LABORATORIOS,
  MANUAL_CAMPO,
  MARCO_ORACION,
  NOTA_2026,
  REGLA_DE_ORO,
  VERDAD_FALLOS,
  VERDAD_ORIGEN,
  VERDAD_PASOS,
} from "@/lib/verdad";

export const Route = createFileRoute("/metodo")({ component: MetodoPage });

function MetodoPage() {
  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <Motif kind="flame" />
      <p className="font-sans text-xs tracking-[0.2em] text-gold uppercase">{VERDAD_ORIGEN.kicker}</p>
      <h1 className="mt-2 font-serif text-4xl md:text-5xl">{VERDAD_ORIGEN.title}</h1>
      <p className="mt-3 font-serif text-xl italic text-ink-soft">{VERDAD_ORIGEN.subtitulo}.</p>
      <p className="mt-2 font-sans text-sm tracking-wide text-gold">{VERDAD_ORIGEN.libro} · Tratado II</p>

      <p className="mt-8 text-lg leading-relaxed">
        <ConLemas>{VERDAD_ORIGEN.quien}</ConLemas>
      </p>
      {VERDAD_ORIGEN.investigacion.map((p) => (
        <p key={p.slice(0, 32)} className="mt-5 text-lg leading-relaxed">
          <ConLemas>{p}</ConLemas>
        </p>
      ))}
      <p className="mt-5 text-lg leading-relaxed">
        <ConLemas>{VERDAD_ORIGEN.paraQue}</ConLemas>
      </p>
      <p className="mt-5 text-lg leading-relaxed">
        <ConLemas>{VERDAD_ORIGEN.cadena}</ConLemas>
      </p>
      <p className="mt-5 text-lg leading-relaxed italic text-ink-soft">
        <ConLemas>{VERDAD_ORIGEN.catedral}</ConLemas>
      </p>
      <Refs refs={VERDAD_ORIGEN.refs} />

      <section className="mt-16 border-t border-rule pt-10">
        <p className="font-sans text-xs tracking-[0.2em] text-gold uppercase">Isaías 8:20</p>
        <h2 className="mt-2 font-serif text-3xl">{REGLA_DE_ORO.title}</h2>
        <p className="mt-5 font-serif text-xl italic text-ink-soft">{REGLA_DE_ORO.epigrafe}</p>
        <p className="mt-2 font-sans text-sm tracking-wide text-gold">
          <Cite>{REGLA_DE_ORO.ref}</Cite>
        </p>
        <p className="mt-5 text-lg leading-relaxed">{REGLA_DE_ORO.body}</p>
        <p className="mt-5 text-lg leading-relaxed">{REGLA_DE_ORO.segunda}</p>
      </section>

      <section className="mt-16 border-t border-rule pt-10">
        <h2 className="font-serif text-3xl">{NOTA_2026.title}</h2>
        <p className="mt-5 text-lg leading-relaxed">{NOTA_2026.body}</p>
        <Refs refs="Mr. 7:34 · Pr. 20:12" />
      </section>

      <p className="mt-12 leading-relaxed italic text-ink-soft">{MARCO_ORACION.abrir}</p>
      <p className="mt-2 font-sans text-sm tracking-wide text-gold">
        <Cite>Sal. 119:18</Cite>
      </p>
      <PasosNav />

      <ol className="mt-14 space-y-12">
        {VERDAD_PASOS.map((step) => (
          <li key={`${step.d}-${step.name}`} id={pasoId(step.d)} className="scroll-mt-24 border-t border-rule pt-8">
            <p className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center bg-navy font-sans text-sm font-semibold tracking-[0.12em] text-parchment">
                {step.letter}
              </span>
              <span className="font-sans text-xs tracking-widest text-gold uppercase">
                {step.name}
              </span>
            </p>
            <h2 className="mt-3 font-serif text-3xl">{step.pregunta}</h2>
            <p className="mt-3 font-serif text-xl italic text-ink-soft">{step.regla}</p>
            <p className="mt-4 text-lg leading-relaxed">{step.body}</p>
            <p className="mt-4 leading-relaxed text-ink-soft">Lo que ya era de la Iglesia: {step.clasico}</p>
            <p className="mt-3 leading-relaxed">El riesgo: {step.riesgo}</p>
            <p className="mt-4 leading-relaxed italic">{step.marcos}</p>
            <Refs refs={step.ref} />
          </li>
        ))}
      </ol>

      <p className="mt-12 leading-relaxed italic text-ink-soft">{MARCO_ORACION.cerrar}</p>
      <p className="mt-2 font-sans text-sm tracking-wide text-gold">
        <Cite>1 S. 3:10</Cite>
      </p>

      <section className="mt-16 border-t border-rule pt-10">
        <p className="font-sans text-xs tracking-[0.2em] text-gold uppercase">1 Tesalonicenses 5:21</p>
        <h2 className="mt-2 font-serif text-3xl">Anatomía comparada</h2>
        <p className="mt-5 text-lg leading-relaxed">
          Examinadlo todo; retened lo bueno. No es un empate entre escuelas, ni un menú de
          técnicas para el gusto del lector. Es un veredicto. Lo bueno se retiene dentro de la
          cadena. Lo demás se deja, porque un método que salta del versículo a «lo que me dice»
          ya ha usurpado al Autor.
        </p>
        <Refs refs="1 Ts. 5:21" />
        <ul className="mt-8 space-y-6">
          {ANATOMIA.map((row) => (
            <li key={row.metodo} className="border-t border-rule pt-4">
              <h3 className="font-serif text-2xl">{row.metodo}</h3>
              <p className="mt-2 leading-relaxed">Se toma: {row.toma}</p>
              <p className="mt-2 leading-relaxed">Se deja: {row.deja}</p>
              <p className="mt-2 font-serif italic text-ink-soft">{row.veredicto}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 border-t border-rule pt-10">
        <p className="font-sans text-xs tracking-[0.2em] text-gold uppercase">Dos estantes, un oficio</p>
        <h2 className="mt-2 font-serif text-3xl">{ESTUDIO_Y_TRATADO.title}</h2>
        <p className="mt-5 text-lg leading-relaxed">{ESTUDIO_Y_TRATADO.estudio}</p>
        <p className="mt-5 text-lg leading-relaxed">{ESTUDIO_Y_TRATADO.tratado}</p>
        <p className="mt-5 text-lg leading-relaxed">{ESTUDIO_Y_TRATADO.noEs}</p>
        <Refs refs={ESTUDIO_Y_TRATADO.refs} />
        <p className="mt-8 flex flex-wrap gap-4 font-sans text-sm">
          <Link to="/estudios" className="text-link underline">
            Las clases — estudios
          </Link>
          <Link to="/tratados" className="text-link underline">
            Los ensayos — tratados
          </Link>
        </p>
      </section>

      <section className="mt-16 border-t border-rule pt-10">
        <h2 className="font-serif text-3xl">Donde el método miente</h2>
        <ul className="mt-8 space-y-6">
          {VERDAD_FALLOS.map((f) => (
            <li key={f.title}>
              <h3 className="font-serif text-2xl">{f.title}</h3>
              <p className="mt-2 leading-relaxed">{f.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 border-t border-rule pt-10">
        <p className="font-sans text-xs tracking-[0.2em] text-gold uppercase">{CRISOL_COMPUERTA.kicker}</p>
        <h2 className="mt-2 font-serif text-3xl">{CRISOL_COMPUERTA.title}</h2>
        <p className="mt-5 text-lg leading-relaxed">{CRISOL_COMPUERTA.where}</p>
        <ul className="mt-8 space-y-5">
          {CRISOL_COMPUERTA.pestillos.map((p) => (
            <li key={p.letter}>
              <h3 className="font-serif text-2xl">{p.name}</h3>
              <p className="mt-2 leading-relaxed">{p.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 font-serif text-xl italic text-ink-soft">{CRISOL_COMPUERTA.cuatro}</p>
        <Refs refs={CRISOL_COMPUERTA.refs} />
        <p className="mt-8 font-sans text-sm">
          <Link to="/crisol" className="text-link underline">
            C.R.I.S.O.L.™ en El Altar del Espejo
          </Link>
        </p>
      </section>

      <section className="mt-16 border-t border-rule pt-10">
        <p className="font-sans text-xs tracking-[0.2em] text-gold uppercase">Parte IV · el método en el canon</p>
        <h2 className="mt-2 font-serif text-3xl">El yunque</h2>
        <p className="mt-5 text-lg leading-relaxed">
          Un método que no se ensucia las manos con el texto es escolástica. El tratado no termina
          en el décimo capítulo. Baja a Génesis 3, se arrodilla en el Salmo 22, se calla ante Isaías
          53, oye el{" "}
          <Term title="Éfata: sé abierto (Marcos 7:34)">Éfata</Term> de Marcos 7, desciende con el
          Carmen Christi y espera a que el Cordero abra el libro. Si la cadena no sobrevive a esos
          seis géneros, no merece un solo discípulo.
        </p>
        <p className="mt-5 text-lg leading-relaxed">
          Los laboratorios no son adornos ni casos de éxito. Se recorren después de poseer el
          método, no en lugar del método. Cada uno abre el aula y recorre los seis eslabones sobre
          esa carne, no sobre otra.
        </p>
        <ul className="mt-10 divide-y divide-rule border-y border-rule">
          {LABORATORIOS.map((lab) => (
            <li key={lab.slug}>
              <Link
                to="/estudios/$slug"
                params={{ slug: lab.slug }}
                className="block py-6 hover:text-gold"
              >
                <span>
                  <p className="font-sans text-xs tracking-widest text-gold uppercase">
                    Laboratorio {lab.n} · {lab.genero} · {lab.ref}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl">{lab.title}</h3>
                  <p className="mt-3 leading-relaxed">{lab.lead}</p>
                </span>
              </Link>
              <Refs refs={lab.refs} />
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 border-t border-rule pt-10">
        <p className="font-sans text-xs tracking-[0.2em] text-gold uppercase">2 Timoteo 1:13–14</p>
        <h2 className="mt-2 font-serif text-3xl">Catecismo hermenéutico</h2>
        <p className="mt-5 text-lg leading-relaxed">
          Preguntas para no mentirnos. Retén la forma de las sanas palabras. El tratado trae
          cincuenta; la escuela retiene las que impiden que el método se vuelva marca.
        </p>
        <ol className="mt-10 space-y-8">
          {CATECISMO.map((item) => (
            <li key={item.n}>
              <p className="font-sans text-xs tracking-widest text-gold uppercase">Pregunta {item.n}</p>
              <h3 className="mt-1 font-serif text-2xl">{item.q}</h3>
              <p className="mt-3 leading-relaxed">{item.a}</p>
              <Refs refs={item.ref} />
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16 border-t border-rule pt-10">
        <p className="font-sans text-xs tracking-[0.2em] text-gold uppercase">Una hoja</p>
        <h2 className="mt-2 font-serif text-3xl">{MANUAL_CAMPO.title}</h2>
        <p className="mt-5 text-lg leading-relaxed">{MANUAL_CAMPO.lead}</p>
        <ol className="mt-8 space-y-5">
          {MANUAL_CAMPO.prompts.map((p) => (
            <li key={`${p.letter}-${p.name}`}>
              <h3 className="font-serif text-2xl">{p.name}</h3>
              <p className="mt-2 leading-relaxed">{p.prompt}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 leading-relaxed italic text-ink-soft">{MANUAL_CAMPO.prohibicion}</p>
        <Refs refs={MANUAL_CAMPO.refs} />
      </section>

      <Link
        to="/cuaderno"
        search={{ ref: "" }}
        className="btn btn-gold mt-12"
      >
        Escribir el acto
        <BtnArrow />
      </Link>
    </main>
  );
}
