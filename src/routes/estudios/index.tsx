import { createFileRoute, Link } from "@tanstack/react-router";
import { Refs } from "@/components/cite";
import { LeerCapitulo } from "@/components/leer-capitulo";
import { BtnArrow, Motif } from "@/components/motif";
import { SeguirActo } from "@/components/seguir-acto";
import { Volver } from "@/components/volver";
import { estudioSemanaSlug } from "@/lib/calendario";
import { ESTUDIOS_DRIVE } from "@/lib/catalogo";
import { decisionAula } from "@/lib/decisiones-aula";
import { indiceEstudio, type IndiceEstudio } from "@/lib/estudios-indice";
import { etiquetaEstudio, etiquetaTratado } from "@/lib/etiquetas";
import { LABORATORIOS } from "@/lib/verdad";
import { TRATADOS_INDICE } from "@/lib/tratados-indice";

import { pageHead, tituloSeccion } from "@/lib/seo";

export const Route = createFileRoute("/estudios/")({
  component: EstudiosPage,
  head: () =>
    pageHead({
      path: "/estudios",
      title: tituloSeccion("Estudios"),
      description:
        "Las clases de la escuela: un pasaje entero, la cadena V.E.R.D.A.D.™ y un solo acto. Se leen aquí, después del capítulo entero.",
      detalle:
        "Un estudio es la clase: un pasaje completo, oído con la cadena V.E.R.D.A.D.™ —Ver, Entorno, Revelación, Doctrina, Argumento y Decisión— hasta un solo acto, dicho a alguien que pueda preguntar mañana. El capítulo se lee entero, y esta casa no sustituye esa lectura: la escudriña hasta que el versículo vuelva al párrafo y el párrafo pida obediencia. Entran los trece estudios que ya tienen manuscrito y los catorce tratados que ya tienen portada.",
    }),
});

function EstudiosPage() {
  const slugSemana = estudioSemanaSlug();
  const semana = indiceEstudio(slugSemana);
  const decision = decisionAula(slugSemana);
  const publicados = ESTUDIOS_DRIVE.map((slug) => indiceEstudio(slug)).filter(
    (s): s is IndiceEstudio => Boolean(s),
  );
  const tratados = TRATADOS_INDICE;
  const labs = LABORATORIOS.map((lab) => ({
    lab,
    study: indiceEstudio(lab.slug),
  }));

  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <Volver />
      <Motif kind="lion" />
      <h1 className="mt-2 font-serif text-4xl">Las clases de la escuela</h1>
      <p className="mt-5 text-lg leading-relaxed">
        Un estudio es la clase: un pasaje completo, oído con la cadena V.E.R.D.A.D.™ —Ver,
        Entorno, Revelación, Doctrina, Argumento y Decisión— hasta un solo acto, dicho a alguien
        que pueda preguntar mañana. El capítulo se lee entero, y esta casa no sustituye esa
        lectura: la escudriña hasta que el versículo vuelva al párrafo y el párrafo pida obediencia.
        Entran los trece estudios que ya tienen manuscrito y los catorce tratados que ya tienen
        portada.
      </p>
      <Refs refs="Neh. 8:8 · 2 Ti. 3:16 · Mr. 7:34" />
      <p className="mt-4 font-sans text-sm">
        <Link to="/metodo" className="text-link underline">
          Cómo se recorre un pasaje
        </Link>
      </p>

      {semana ? (
        <article className="mt-16 border border-rule bg-paper px-6 py-10 md:px-9">
          <p className="font-serif text-lg italic text-gold">El estudio de esta semana</p>
          <h2 className="mt-2 font-serif text-3xl">{semana.title}</h2>
          <p className="mt-1 text-gold">{semana.ref}</p>
          {decision ? <p className="mt-4 leading-relaxed">{decision}</p> : null}
          <SeguirActo />
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/estudios/$slug"
              params={{ slug: semana.slug }}
              className="btn btn-ink"
            >
              Escudriñar el estudio
              <span className="sr-only"> de {semana.title}</span>
              <BtnArrow />
            </Link>
            <LeerCapitulo ref={semana.ref} desde={`/estudios/${semana.slug}`} />
          </div>
        </article>
      ) : null}

      <section className="mt-14">
        <h2 className="font-serif text-3xl">TRATADOS</h2>
        <p className="mt-4 leading-relaxed text-ink-soft">
          Los catorce con manuscrito, PDF y portada.
        </p>
        <ul className="mt-8 divide-y divide-rule border-y border-rule">
          {tratados.map((t) => (
            <li key={t.slug}>
              <Link
                to="/tratados/$slug"
                params={{ slug: t.slug }}
                className="block py-5 hover:text-gold"
              >
                <span className="flex min-w-0 flex-col gap-1">
                  <span className="font-sans text-sm text-gold">
                    {etiquetaTratado(t.slug)} · {t.ref}
                  </span>
                  <span className="font-serif text-2xl">{t.title}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Lista titulo="Estudios bíblicos" items={publicados} />

      <section className="mt-14">
        <h2 className="font-serif text-3xl">Tres géneros que ya tienen aula</h2>
        <p className="mt-4 leading-relaxed">
          El yunque nombra seis géneros. El aula está abierta donde ya hay libro: Marcos 7,
          Filipenses 2 y Apocalipsis 5. Génesis 3 y el Salmo 22 no tienen clase. Isaías 53 se
          escudriña en el tratado, no en un segundo estudio.
        </p>
        <ul className="mt-8 divide-y divide-rule border-y border-rule">
          {labs
            .filter((row): row is { lab: (typeof labs)[number]["lab"]; study: IndiceEstudio } =>
              Boolean(row.study),
            )
            .map(({ lab, study }) => (
            <li key={lab.slug}>
              <Link
                to="/estudios/$slug"
                params={{ slug: study.slug }}
                className="block py-5 hover:text-gold"
              >
                <span className="flex min-w-0 flex-col gap-1">
                  <span className="font-sans text-sm text-gold">
                    {lab.genero} · {lab.ref}
                  </span>
                  <span className="font-serif text-2xl">{lab.title}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

function Lista({ titulo, items }: { titulo: string; items: IndiceEstudio[] }) {
  if (items.length === 0) return null;
  return (
    <section className="mt-14">
      <h2 className="font-serif text-3xl">{titulo}</h2>
      <ul className="mt-8 divide-y divide-rule border-y border-rule">
        {items.map((s) => (
          <li key={s.slug}>
            <Link
              to="/estudios/$slug"
              params={{ slug: s.slug }}
              className="block py-5 hover:text-gold"
            >
              <span className="flex min-w-0 flex-col gap-1">
                <span className="font-sans text-sm text-gold">
                  {etiquetaEstudio(s.slug)} · {s.ref}
                </span>
                <span className="font-serif text-2xl">{s.title}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
