import { createFileRoute, Link } from "@tanstack/react-router";
import { Refs } from "@/components/cite";
import { LeerCapitulo } from "@/components/leer-capitulo";
import { BtnArrow, Motif } from "@/components/motif";
import { SeguirActo } from "@/components/seguir-acto";
import { Volver } from "@/components/volver";
import { estudioSemanaSlug } from "@/lib/calendario";
import { estudioTienePack } from "@/lib/catalogo";
import {
  etiquetaEstudio,
  estudiosProximos,
  estudiosPublicados,
  studyBySlug,
  type Study,
} from "@/lib/studies";
import { LABORATORIOS } from "@/lib/verdad";

import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/estudios/")({
  component: EstudiosPage,
  head: () =>
    pageHead({
      path: "/estudios",
      title: "Estudios · Cielo Efata",
      description:
        "Las clases de la escuela: un pasaje entero, la cadena V.E.R.D.A.D.™ y un solo acto. Trece packs reales en Drive.",
    }),
});

function EstudiosPage() {
  const semana = studyBySlug(estudioSemanaSlug());
  const publicados = estudiosPublicados();
  const labs = LABORATORIOS.map((lab) => ({
    lab,
    study: studyBySlug(lab.slug),
    pack: estudioTienePack(lab.slug),
  }));
  const proximos = estudiosProximos().filter(
    (s) => !LABORATORIOS.some((lab) => lab.slug === s.slug),
  );

  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <Volver />
      <Motif kind="lion" />
      <h1 className="mt-2 font-serif text-4xl">Las clases de la escuela</h1>
      <p className="mt-5 text-lg leading-relaxed">
        Un estudio es la clase: un pasaje completo, la cadena V.E.R.D.A.D.™ —Ver, Entorno,
        Revelación, Doctrina, Argumento y Decisión— y un solo paso, dicho a alguien que pueda
        preguntar mañana. El catálogo publicado es el de Drive: trece packs reales. Las clases
        que la web listaba sin manuscrito —Marcos 1, Juan 3, Hechos 2, Juan 1, Romanos 3 y las
        demás— quedan marcadas como próximamente. No se inventa un PDF que no existe.
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
          <p className="mt-4 leading-relaxed">{semana.decision}</p>
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
            <LeerCapitulo ref={semana.ref} />
          </div>
        </article>
      ) : null}

      <Lista titulo="Los trece estudios con pack" items={publicados} />

      <section className="mt-14">
        <h2 className="font-serif text-3xl">Seis laboratorios, seis géneros</h2>
        <p className="mt-4 leading-relaxed">
          El yunque del método recorre seis géneros: narración, lamento, cántico del Siervo,
          evangelio, himno y apocalipsis. Tres de esos pasajes tienen pack en Drive —Marcos 7,
          Filipenses 2, Apocalipsis 5—. Génesis 3, Salmo 22 e Isaías 53, como clase, permanecen
          en preparación: Isaías 53 se escudriña ya como tratado restaurado.
        </p>
        <ul className="mt-8 divide-y divide-rule border-y border-rule">
          {labs.map(({ lab, study, pack }) => (
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
                      {pack ? "" : " · Próximamente"}
                    </span>
                    <span className="font-serif text-2xl">{lab.title}</span>
                  </span>
                </Link>
              ) : (
                <span className="block py-5">
                  <span className="font-sans text-sm text-gold">
                    {lab.genero} · {lab.ref} · Próximamente
                  </span>
                  <span className="mt-1 block font-serif text-2xl">{lab.title}</span>
                </span>
              )}
            </li>
          ))}
        </ul>
      </section>

      <Lista titulo="Clases en preparación — sin pack en Drive" items={proximos} proximo />
      <Link to="/tratados" className="mt-10 inline-block font-sans text-sm text-link underline">
        Escudriñar el tratado
      </Link>
    </main>
  );
}

function Lista({
  titulo,
  items,
  proximo = false,
}: {
  titulo: string;
  items: Study[];
  proximo?: boolean;
}) {
  if (items.length === 0) return null;
  return (
    <section className="mt-14">
      <h2 className="font-serif text-3xl">{titulo}</h2>
      {proximo ? (
        <p className="mt-4 leading-relaxed text-ink-soft">
          Se pueden abrir como fichas de aula. No se presentan como clases publicadas: falta el
          pack en Drive.
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
