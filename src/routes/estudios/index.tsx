import { createFileRoute, Link } from "@tanstack/react-router";
import { Refs } from "@/components/cite";
import { LeerCapitulo } from "@/components/leer-capitulo";
import { BtnArrow, Motif } from "@/components/motif";
import { SeguirActo } from "@/components/seguir-acto";
import { Volver } from "@/components/volver";
import { estudioSemanaSlug } from "@/lib/calendario";
import { ESTUDIOS_DRIVE, estudioTienePack } from "@/lib/catalogo";
import { decisionAula } from "@/lib/decisiones-aula";
import { ESTUDIOS_INDICE, indiceEstudio, type IndiceEstudio } from "@/lib/estudios-indice";
import { etiquetaEstudio } from "@/lib/etiquetas";
import { LABORATORIOS } from "@/lib/verdad";

import { pageHead, tituloSeccion } from "@/lib/seo";

export const Route = createFileRoute("/estudios/")({
  component: EstudiosPage,
  head: () =>
    pageHead({
      path: "/estudios",
      title: tituloSeccion("Estudios"),
      description:
        "Las clases de la escuela: un pasaje entero, la cadena V.E.R.D.A.D.™ y un solo acto. Se leen aquí; RevelatiO abre el capítulo.",
      detalle:
        "Un estudio es la clase: un pasaje completo, la cadena V.E.R.D.A.D.™ —Ver, Entorno, Revelación, Doctrina, Argumento y Decisión— y un solo paso, dicho a alguien que pueda preguntar mañana. Estudios bíblicos son los trece con manuscrito. Al lado, los estudios sueltos se leen en la misma escuela, sin un PDF inventado.",
    }),
});

function EstudiosPage() {
  const slugSemana = estudioSemanaSlug();
  const semana = indiceEstudio(slugSemana);
  const decision = decisionAula(slugSemana);
  const publicados = ESTUDIOS_DRIVE.map((slug) => indiceEstudio(slug)).filter(
    (s): s is IndiceEstudio => Boolean(s),
  );
  const labs = LABORATORIOS.map((lab) => ({
    lab,
    study: indiceEstudio(lab.slug),
  }));
  const proximos = ESTUDIOS_INDICE.filter(
    (s) => !estudioTienePack(s.slug) && !LABORATORIOS.some((lab) => lab.slug === s.slug),
  );

  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <Volver />
      <Motif kind="lion" />
      <h1 className="mt-2 font-serif text-4xl">Las clases de la escuela</h1>
      <p className="mt-5 text-lg leading-relaxed">
        Un estudio es la clase: un pasaje completo, la cadena V.E.R.D.A.D.™ —Ver, Entorno,
        Revelación, Doctrina, Argumento y Decisión— y un solo paso, dicho a alguien que pueda
        preguntar mañana. Estudios bíblicos son los trece con manuscrito. Al lado, los estudios
        sueltos se leen en la misma escuela, sin un PDF inventado.
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

      <Lista titulo="Estudios bíblicos" items={publicados} />

      <section className="mt-14">
        <h2 className="font-serif text-3xl">Seis laboratorios, seis géneros</h2>
        <p className="mt-4 leading-relaxed">
          El yunque del método recorre seis géneros: narración, lamento, cántico del Siervo,
          evangelio, himno y apocalipsis. Marcos 7, Filipenses 2 y Apocalipsis 5 tienen pack en
          Drive. Génesis 3, Salmo 22 e Isaías 53 se leen como clase; Isaías 53 se escudriña
          además como tratado.
        </p>
        <ul className="mt-8 divide-y divide-rule border-y border-rule">
          {labs.map(({ lab, study }) => (
            <li key={lab.slug}>
              {study ? (
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
              ) : (
                <span className="block py-5">
                  <span className="font-sans text-sm text-gold">
                    {lab.genero} · {lab.ref}
                  </span>
                  <span className="mt-1 block font-serif text-2xl">{lab.title}</span>
                </span>
              )}
            </li>
          ))}
        </ul>
      </section>

      <Lista titulo="Estudios sueltos" items={proximos} sinPack />
      <Link to="/tratados" className="mt-10 inline-block font-sans text-sm text-link underline">
        Escudriñar el tratado
      </Link>
    </main>
  );
}

function Lista({
  titulo,
  items,
  sinPack = false,
}: {
  titulo: string;
  items: IndiceEstudio[];
  sinPack?: boolean;
}) {
  if (items.length === 0) return null;
  return (
    <section className="mt-14">
      <h2 className="font-serif text-3xl">{titulo}</h2>
      {sinPack ? (
        <p className="mt-4 leading-relaxed text-ink-soft">
          Están al lado de Estudios bíblicos, en la misma escuela. No tienen carpeta de pack: no se
          pide un PDF que no existe.
        </p>
      ) : null}
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
