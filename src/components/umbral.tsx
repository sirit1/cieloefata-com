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
    <div className="mt-14">
      <h2 className="font-serif text-2xl md:text-3xl">Por dónde se entra</h2>
      <p className="mt-5 text-lg leading-relaxed">
        Quien llega no tiene que recorrer primero un tratado entero para saber por dónde se entra.
        Tres caminos bastan, y ninguno es un lema. El primero es abrir el capítulo en RevelatiO,
        el lector compañero: el texto se oye entero, no se recorta. Esta escuela no sustituye esa
        lectura; la sostiene. El segundo es el estudio de esta semana: el himno del Siervo, para
        que quien se pelea el primer asiento oiga otra vez la forma de siervo. El tercero es
        empezar por Éfata. En Marcos 7 el Hijo dice «sé abierto». El primer tomo y la clase umbral
        esperan ahí, no en un atajo de consuelo.
      </p>
      <ul className="mt-8 space-y-6">
        <li>
          <p className="font-serif text-xl">Leer el capítulo en RevelatiO</p>
          <p className="mt-2 leading-relaxed text-ink-soft">
            RevelatiO abre el pasaje entero en revelatio.app. El comentario se sienta atrás. Quien
            quiere oír, lee.
          </p>
          <a href={DOS_CASAS.leerHref} rel="noopener noreferrer" className="btn btn-ink mt-4">
            {DOS_CASAS.leerLabel}
            <BtnArrow />
          </a>
        </li>
        <li>
          <p className="font-serif text-xl">El estudio de esta semana</p>
          <p className="mt-2 leading-relaxed text-ink-soft">
            {semana.title}, {semana.ref}. El credo está metido en la ética. Quien canta la
            exaltación sin la forma de siervo no ha leído: ha cantado.
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
          <p className="font-serif text-xl">Empezar por Éfata</p>
          <p className="mt-2 leading-relaxed text-ink-soft">
            El umbral de la casa es Marcos 7. El sordo no se abre: es abierto. Quien nunca ha
            leído con esta escuela entra por ese milagro, y por el primer tomo que lleva su nombre.
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
    </div>
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
        <p className="mt-5 flex-1">{semana.impacto}</p>
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
          <p className="mt-5 flex-1">{mes.blurb}</p>
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
          <p className="mt-5 flex-1">{PRIMERA_VEZ.lead}</p>
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
