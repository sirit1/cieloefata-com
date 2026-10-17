import { createFileRoute, Link } from "@tanstack/react-router";
import { Refs } from "@/components/cite";
import { LeerCapitulo } from "@/components/leer-capitulo";
import { BtnArrow } from "@/components/motif";
import { SeguirActo } from "@/components/seguir-acto";
import { Volver } from "@/components/volver";
import { estudioSemanaSlug } from "@/lib/calendario";
import { ESTUDIOS_DRIVE } from "@/lib/catalogo";
import { ESTUDIOS_INDICE, indiceEstudio, type IndiceEstudio } from "@/lib/estudios-indice";
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
        "Estudios bíblicos: un pasaje completo, leído con el método V.E.R.D.A.D., hasta un paso concreto de obediencia.",
      detalle:
        "Cada estudio recorre un pasaje completo con el método V.E.R.D.A.D. —Ver, Entorno, Revelación, Doctrina, Argumento y Decisión—. Primero leemos el capítulo entero; después lo estudiamos juntos hasta llegar a un paso concreto de obediencia, que conviene compartir con alguien de confianza.",
    }),
});

function EstudiosPage() {
  const slugSemana = estudioSemanaSlug();
  const semana = indiceEstudio(slugSemana);
  const publicados = [
    ...ESTUDIOS_DRIVE.map((slug) => indiceEstudio(slug)).filter(
      (s): s is IndiceEstudio => Boolean(s),
    ),
    ...ESTUDIOS_INDICE.filter((s) => Boolean(s.obraHref)),
  ];
  const tratados = TRATADOS_INDICE;
  const labs = LABORATORIOS.map((lab) => ({
    lab,
    study: indiceEstudio(lab.slug),
  }));

  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <Volver />
      <h1 className="mt-2 font-serif text-4xl">Estudios bíblicos</h1>
      <p className="mt-5 text-lg leading-relaxed">
        Cada estudio recorre un pasaje completo con el método V.E.R.D.A.D. —Ver, Entorno,
        Revelación, Doctrina, Argumento y Decisión—. Primero leemos el capítulo entero; después
        lo estudiamos juntos hasta llegar a un paso concreto de obediencia, que conviene
        compartir con alguien de confianza.
      </p>
      <Refs refs="Neh. 8:8 · 2 Ti. 3:16" />
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
        <h2 className="font-serif text-3xl">Tratados</h2>
        <p className="mt-4 leading-relaxed text-ink-soft">
          Versículos muy citados, leídos otra vez dentro de su capítulo.
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

      <Lista titulo="Todos los estudios" items={publicados} />

      <section className="mt-14">
        <h2 className="font-serif text-3xl">Estudios por género literario</h2>
        <p className="mt-4 leading-relaxed">
          No se lee igual un relato que un himno o una visión. Estos tres estudios muestran
          cómo leer cada género: un relato del Evangelio (Marcos 7), un himno dentro de una
          carta (Filipenses 2) y una visión del Apocalipsis (Apocalipsis 5).
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
            {s.obraHref ? (
              <Link to={s.obraHref} className="block py-5 hover:text-gold">
                <span className="flex min-w-0 flex-col gap-1">
                  <span className="font-sans text-sm text-gold">
                    Estudio · {s.ref}
                  </span>
                  <span className="font-serif text-2xl">{s.title}</span>
                </span>
              </Link>
            ) : (
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
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
