import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Aula } from "@/components/aula";
import { CierreAula } from "@/components/cierre-aula";
import { Cite, Refs, Verso } from "@/components/cite";
import { ContextoHistorico } from "@/components/contexto";
import { ConLemas } from "@/components/lema";
import { LemaStrong } from "@/components/lema-strong";
import { LabYunque } from "@/components/lab-yunque";
import { LeerCapitulo } from "@/components/leer-capitulo";
import { PasosNav, pasoId } from "@/components/pasos-nav";
import { RedCanon } from "@/components/red-canon";
import { laboratorioDe, profundoDe, textoParaOir, type LabExtra } from "@/lib/escuela";
import { pageHead } from "@/lib/seo";
import { etiquetaEstudio, studyBySlug } from "@/lib/studies";
import { VERDAD_PASOS } from "@/lib/verdad";
import { vocesDe } from "@/lib/voces";

export const Route = createFileRoute("/estudios/$slug")({
  component: StudyPage,
  loader: ({ params }) => {
    const study = studyBySlug(params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) =>
    pageHead({
      path: `/estudios/${loaderData?.study.slug ?? ""}`,
      title: `${loaderData?.study.title ?? "Estudio"} · Cielo Efata`,
      description: loaderData?.study.ref,
    }),
});

const KEYS = ["ver", "entorno", "revelacion", "doctrina", "argumento", "decision"] as const;

function paras(text: string) {
  return text.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
}

function LabTabla({ lab }: { lab: LabExtra }) {
  return (
    <aside className="mt-8 border-t border-rule pt-6">
      <p className="font-serif italic text-ink-soft">{lab.tablaTitulo}</p>
      <dl className="mt-4 space-y-5">
        {lab.tabla.map((row) => (
          <div key={row.palabra}>
            <dt className="leading-relaxed">
              <ConLemas>{row.palabra}</ConLemas>
            </dt>
            <dd className="mt-1 leading-relaxed italic text-ink-soft">
              <ConLemas>{row.glosa}</ConLemas>
            </dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}

function LabCasillas({ lab }: { lab: LabExtra }) {
  return (
    <div className="mt-6 space-y-4">
      {lab.casillas.map((c) => (
        <p key={c.name} className="leading-relaxed">
          <span className="italic">{c.name}. </span>
          <ConLemas>{c.body}</ConLemas>
        </p>
      ))}
    </div>
  );
}

function StudyPage() {
  const { study } = Route.useLoaderData();
  const voces = vocesDe(study.slug);
  const p = profundoDe(study.slug);
  const lab = laboratorioDe(study.slug);
  const oir = textoParaOir([
    study.title,
    study.ref,
    study.passage,
    p ? `Autor: ${p.autor}. Época: ${p.epoca}. Género: ${p.genero}. ${p.literario}` : "",
    ...VERDAD_PASOS.map((step, i) => `${step.name}. ${study[KEYS[i]]}`),
    lab
      ? [
          lab.tablaTitulo,
          ...lab.tabla.map((r) => `${r.palabra} ${r.glosa}`),
          ...lab.casillas.map((c) => `${c.name}. ${c.body}`),
          lab.analogiaAntecedente,
          lab.analogiaPlena,
          lab.status,
          lab.distingo,
          lab.fontes,
          lab.reductio,
          lab.acto,
        ].join("\n\n")
      : "",
    p?.cristo ?? "",
    study.conclusion,
  ]);

  return (
    <Aula
      oir={oir}
      escritura={study.passage}
      voz={study.voz}
      salir="/estudios"
      titulo={study.title}
      etiqueta={`Oír ${study.title}`}
      pasaje={study.ref}
      slug={study.slug}
    >
      <p className="font-sans text-xs tracking-[0.2em] text-gold uppercase">
        Aula · {etiquetaEstudio(study.slug)} · {study.ref}
      </p>
      {etiquetaEstudio(study.slug).includes("Próximamente") ? (
        <p className="mt-4 leading-relaxed text-ink-soft">
          Esta clase se puede leer como ficha de aula. No tiene pack en Drive: no se presenta
          como estudio publicado de la serie.
        </p>
      ) : null}
      <h1 className="mt-2 text-4xl md:text-5xl">{study.title}</h1>
      <Verso texto={study.passage} voz={study.voz} />
      <p className="mt-6">
        <LeerCapitulo ref={study.ref} />
      </p>
      <p className="mt-4 font-sans text-sm">
        <Link to="/metodo" className="text-link underline">
          Los seis eslabones · cómo se recorre un pasaje
        </Link>
      </p>
      <PasosNav />

      {p ? <ContextoHistorico p={p} /> : null}

      <div className="mt-12 space-y-10">
        {VERDAD_PASOS.map((step, i) => (
          <section key={`${step.d}-${step.name}`} id={pasoId(step.d)} className="scroll-mt-8">
            <h2 className="flex items-center gap-3 font-sans text-xs tracking-[0.2em] text-gold-dim uppercase">
              <span className="inline-flex h-10 w-10 items-center justify-center bg-navy font-sans text-sm font-semibold tracking-[0.12em] text-parchment">
                {step.letter}
              </span>
              {step.name} · {step.verbo}
            </h2>
            <p className="mt-2 font-serif italic text-ink-soft">{step.regla}</p>
            {paras(study[KEYS[i]]).map((para) => (
              <p key={para.slice(0, 48)} className="mt-4 text-lg leading-relaxed">
                <ConLemas>{para}</ConLemas>
              </p>
            ))}
            {lab && step.d === "V" ? <LabTabla lab={lab} /> : null}
            {lab && step.d === "D1" ? <LabCasillas lab={lab} /> : null}
            {lab && step.d === "D2" ? (
              <p className="mt-6 font-sans text-sm">
                <Link to="/crisol" className="text-link underline">
                  C.R.I.S.O.L.™ en El Altar del Espejo
                </Link>
              </p>
            ) : null}
          </section>
        ))}
      </div>

      {lab ? <LabYunque lab={lab} /> : null}

      {p ? (
        <>
          <section className="mt-12">
            <h2 className="font-serif text-3xl">Exégesis y raíces</h2>
            <p className="mt-4 text-lg leading-relaxed">
              El número de Strong no es un talismán. Sitúa la raíz, da la glosa en castellano y
              obliga a oír la palabra que el pasaje conjuga, no la que el siglo prefiere. El
              diccionario sirve al párrafo; no lo predica.
            </p>
            <ul className="mt-2">
              {p.lemmas.map((l) => (
                <LemaStrong key={l.orig} orig={l.orig} sense={l.sense} />
              ))}
            </ul>
          </section>
          <section className="mt-12">
            <h2 className="font-serif text-3xl">Cristo y el canon</h2>
            <p className="mt-4 text-lg leading-relaxed">
              <ConLemas>{p.cristo}</ConLemas>
            </p>
            <Refs refs={p.cruces} />
          </section>
          <RedCanon centro={study.ref} cruces={p.cruces} />
          <section className="mt-12">
            <h2 className="font-serif text-3xl">Preguntas de la escuela</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5 text-lg leading-relaxed">
              {p.preguntas.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ol>
          </section>
        </>
      ) : null}

      <section className="mt-14 border-t border-rule pt-10">
        <h2 className="font-serif text-3xl">Testigos que sirven al pasaje</h2>
        <p className="mt-4 text-lg leading-relaxed">
          Estos cuatro no legislan. Examinan, como los de Berea, si estas cosas son así. Henry
          recorre el campo. Calvino sienta el comentario atrás de la Palabra. Spurgeon predica para
          que alguien se vuelva. MacArthur detiene el griego y el hebreo para que el señorío no se
          vuelva anexo. Si alguno de ellos recorta el párrafo, se le suelta. El pasaje manda. Ellos
          sirven.
        </p>
        <p className="mt-3 font-sans text-sm tracking-wide">
          <Cite>Hch. 17:11 · 1 Co. 3:5</Cite>
        </p>
        <div className="mt-10 space-y-10">
          {voces.map((v) => (
            <article key={v.name}>
              <h3 className="font-serif text-2xl">{v.name}</h3>
              {v.body.split(/\n\n+/).map((para) => (
                <p key={para.slice(0, 40)} className="mt-4 text-lg leading-relaxed">
                  <ConLemas>{para}</ConLemas>
                </p>
              ))}
            </article>
          ))}
        </div>
      </section>

      <p className="mt-12 border-t border-rule pt-8 text-ink-soft italic">
        <ConLemas>{study.conclusion}</ConLemas>
      </p>
      <CierreAula pasaje={study.ref} slug={study.slug} acto={study.decision} />
    </Aula>
  );
}
