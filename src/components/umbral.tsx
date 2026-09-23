import { Link } from "@tanstack/react-router";
import { Cite } from "@/components/cite";
import { LeerCapitulo } from "@/components/leer-capitulo";
import { BtnArrow } from "@/components/motif";
import { SeguirActo } from "@/components/seguir-acto";
import {
  ESTUDIO_UMBRAL_SLUG,
  etiquetaRango,
  mesProximo,
  mesVigente,
  nombreMes,
  semanaProxima,
  semanaVigente,
} from "@/lib/calendario";
import { DOS_CASAS, PRIMERA_VEZ } from "@/lib/pilar";
import { studyBySlug } from "@/lib/studies";
import { tratadoDe } from "@/lib/tratados";

export function UmbralTresCaminos() {
  const semana = semanaVigente();
  const study = studyBySlug(semana.studySlug);
  const puerta =
    semana.puerta ??
    `Entra al aula de ${study?.title ?? "esta semana"}, y sal con un solo acto escrito.`;

  return (
    <ul className="mt-10 space-y-8">
      <li>
        <p className="font-serif text-xl">Leer el capítulo.</p>
        <p className="mt-2 leading-relaxed text-ink-soft">
          Abre la Escritura entera en RevelatiO, el lector compañero de esta casa: el capítulo va
          delante; el comentario, detrás.
        </p>
        <a href={DOS_CASAS.leerHref} rel="noopener noreferrer" className="btn btn-ink mt-4">
          {DOS_CASAS.leerLabel}
          <BtnArrow />
        </a>
      </li>
      <li>
        <p className="font-serif text-xl">Estudio de esta semana.</p>
        <p className="mt-2 leading-relaxed text-ink-soft">{puerta}</p>
        <Link
          to="/estudios/$slug"
          params={{ slug: semana.studySlug }}
          className="btn btn-ink mt-4"
        >
          Escudriñar {study?.title ?? "el estudio"}
          <BtnArrow />
        </Link>
      </li>
      <li>
        <p className="font-serif text-xl">Empezar por Éfata.</p>
        <p className="mt-2 leading-relaxed text-ink-soft">
          Si nunca se ha leído en esta escuela, empieza por Marcos 7, donde el Hijo toma al
          sordo, gime y dice Éfata —sé abierto—, y el oído cede antes de que la lengua se
          desate.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/estudios/$slug"
            params={{ slug: ESTUDIO_UMBRAL_SLUG }}
            className="btn btn-gold"
          >
            Escudriñar Marcos 7
            <BtnArrow />
          </Link>
          <Link to="/obras/$slug" params={{ slug: "efata" }} className="btn btn-ghost">
            El tomo Éfata
          </Link>
        </div>
      </li>
    </ul>
  );
}

export function SlotsSemanaMes() {
  const semana = semanaVigente();
  const study = studyBySlug(semana.studySlug);
  const proxima = semanaProxima();
  const studyNext = proxima ? studyBySlug(proxima.studySlug) : undefined;
  const mes = mesVigente();
  const tratado = tratadoDe(mes.tratadoSlug);
  const mesNext = mesProximo();
  const tratadoNext = mesNext ? tratadoDe(mesNext.tratadoSlug) : undefined;

  return (
    <section className="mt-16 grid gap-10 lg:grid-cols-2" aria-label="Calendario editorial">
      <article className="flex flex-col border border-rule bg-paper px-6 py-10 md:px-9">
        <p className="font-serif text-lg italic text-gold">Esta semana</p>
        <p className="mt-2 font-sans text-xs tracking-[0.16em] text-gold uppercase">
          {etiquetaRango(semana.desde, semana.hasta)}
        </p>
        <h2 className="mt-3 font-serif text-3xl">{study?.title ?? "El aula"}</h2>
        <p className="mt-1 text-gold">{study?.ref}</p>
        <p className="mt-5 flex-1 leading-relaxed">{semana.impacto ?? study?.ver}</p>
        {study?.ref ? (
          <p className="mt-4 font-sans text-sm tracking-wide text-gold">
            <Cite>{study.ref}</Cite>
          </p>
        ) : null}
        <SeguirActo />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/estudios/$slug" params={{ slug: semana.studySlug }} className="btn btn-ink">
            Escudriñar
            <span className="sr-only"> el estudio de {study?.title}</span>
            <BtnArrow />
          </Link>
          {study ? <LeerCapitulo ref={study.ref} /> : null}
        </div>
        {proxima && studyNext ? (
          <p className="mt-6 text-sm leading-relaxed text-ink-soft/80">
            Próxima: {etiquetaRango(proxima.desde, proxima.hasta)} · {studyNext.ref} ·{" "}
            {studyNext.title}.
          </p>
        ) : null}
      </article>
      {tratado ? (
        <article className="flex flex-col border border-rule bg-paper px-6 py-10 md:px-9">
          <p className="font-serif text-lg italic text-gold">Tratado del mes</p>
          <p className="mt-2 font-sans text-xs tracking-[0.16em] text-gold uppercase">
            {nombreMes(mes.mes)}
          </p>
          <h2 className="mt-3 font-serif text-3xl">{tratado.title}</h2>
          <p className="mt-1 text-gold">{tratado.ref}</p>
          <p className="mt-5 flex-1 leading-relaxed">{mes.impacto ?? tratado.blurb}</p>
          <div className="mt-8 flex w-fit flex-col gap-3 sm:flex-row">
            <Link
              to="/tratados/$slug"
              params={{ slug: tratado.slug }}
              className="btn btn-ink"
            >
              Escudriñar
              <span className="sr-only"> el tratado {tratado.title}</span>
              <BtnArrow />
            </Link>
          </div>
          {mesNext && tratadoNext ? (
            <p className="mt-6 text-sm leading-relaxed text-ink-soft/80">
              Próximo: {nombreMes(mesNext.mes)} · {tratadoNext.title}.
            </p>
          ) : null}
        </article>
      ) : (
        <article className="flex flex-col border border-rule bg-paper px-6 py-10 md:px-9">
          <p className="font-serif text-lg italic text-gold">El primer pasaje</p>
          <h2 className="mt-3 font-serif text-3xl">{PRIMERA_VEZ.title}</h2>
          <p className="mt-5 flex-1 leading-relaxed">{PRIMERA_VEZ.lead}</p>
          <Link
            to="/estudios/$slug"
            params={{ slug: PRIMERA_VEZ.slug }}
            className="btn btn-ink mt-8"
          >
            Escudriñar el estudio
            <BtnArrow />
          </Link>
        </article>
      )}
    </section>
  );
}
