import { Link } from "@tanstack/react-router";
import { Cite } from "@/components/cite";
import { LeerCapitulo } from "@/components/leer-capitulo";
import { BtnArrow } from "@/components/motif";
import { SeguirActo } from "@/components/seguir-acto";
import { ESTUDIO_UMBRAL_SLUG } from "@/lib/catalogo";
import { DOS_CASAS, PRIMERA_VEZ, semana } from "@/lib/pilar";
import { tratadoDelMes } from "@/lib/tratados";

export function UmbralTresCaminos() {
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
        <p className="mt-2 leading-relaxed text-ink-soft">
          Entra al aula de Filipenses 2, donde el himno del Siervo humilla al yo antes de
          exaltarlo, y sal con un solo acto escrito.
        </p>
        <Link
          to="/estudios/$slug"
          params={{ slug: semana.slug }}
          className="btn btn-ink mt-4"
        >
          Escudriñar {semana.title}
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
  const mes = tratadoDelMes();
  return (
    <section className="mt-16 grid gap-10 lg:grid-cols-2">
      <article className="flex flex-col border border-rule bg-paper px-6 py-10 md:px-9">
        <p className="font-serif text-lg italic text-gold">Esta semana</p>
        <h2 className="mt-3 font-serif text-3xl">{semana.title}</h2>
        <p className="mt-1 text-gold">{semana.ref}</p>
        <p className="mt-5 flex-1 leading-relaxed">{semana.impacto}</p>
        <p className="mt-4 font-sans text-sm tracking-wide text-gold">
          <Cite>{semana.verse}</Cite>
        </p>
        <SeguirActo />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/estudios/$slug" params={{ slug: semana.slug }} className="btn btn-ink">
            Escudriñar el estudio
            <span className="sr-only"> de {semana.title}</span>
            <BtnArrow />
          </Link>
          <LeerCapitulo ref={semana.ref} />
        </div>
      </article>
      {mes ? (
        <article className="flex flex-col border border-rule bg-paper px-6 py-10 md:px-9">
          <p className="font-serif text-lg italic text-gold">Tratado del mes</p>
          <h2 className="mt-3 font-serif text-3xl">{mes.title}</h2>
          <p className="mt-1 text-gold">{mes.ref}</p>
          <p className="mt-5 flex-1 leading-relaxed">{mes.blurb}</p>
          <Link
            to="/tratados/$slug"
            params={{ slug: mes.slug }}
            className="btn btn-ink mt-8"
          >
            Escudriñar el tratado
            <span className="sr-only"> {mes.title}</span>
            <BtnArrow />
          </Link>
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
