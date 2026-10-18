import { Link } from "@tanstack/react-router";
import { Cite } from "@/components/cite";
import { LeerCapitulo } from "@/components/leer-capitulo";
import { ESTUDIOS_DRIVE } from "@/lib/catalogo";
import { TarjetaLibro } from "@/components/tarjeta-libro";
import type { AulaKind } from "@/lib/content";
import { librosDeAula } from "@/lib/serie";
import { indiceEstudio } from "@/lib/estudios-indice";
import { plantillaRevelatio } from "@/components/caja-verdad";

export function CierreAula({
  pasaje,
  slug,
  acto,
  desde,
  kind,
}: {
  pasaje: string;
  slug?: string;
  acto?: string;
  desde?: string;
  kind?: AulaKind;
}) {
  const lista = ESTUDIOS_DRIVE as readonly string[];
  const i = slug ? lista.indexOf(slug) : -1;
  const sig = i >= 0 && i < lista.length - 1 ? indiceEstudio(lista[i + 1]) : undefined;
  const relacionadas = kind && slug ? librosDeAula(kind, slug) : [];
  const conGuia = kind === "estudio" && i >= 0;

  return (
    <section className="mt-14 border-t border-rule pt-10">
      <p className="kicker">V.E.R.D.A.D. · la última letra</p>
      <h2 className="mt-1 font-serif text-3xl">Tu D: decisión de la semana</h2>
      <p className="mt-4 text-lg leading-relaxed">
        Santiago compara al que oye la Palabra y no la hace con un hombre que se mira al espejo y
        se va. Por eso este estudio no termina cuando se ha entendido el pasaje, sino cuando hay
        un paso concreto que sale de este texto, compartido con alguien de confianza que pueda
        preguntarte por él.
      </p>

      {acto ? (
        <>
          <p className="kicker mt-8">Lo que {pasaje} pide</p>
          {acto.split(/\n\n+/).map((p) => (
            <p key={p.slice(0, 32)} className="mt-3 text-lg leading-relaxed">
              {p}
            </p>
          ))}
        </>
      ) : null}

      <p className="mt-6 leading-relaxed">
        Escribe en el cuaderno qué te pide {pasaje}. No un propósito general, sino lo que este
        texto concretamente manda.
      </p>
      <p className="mt-4 font-sans text-sm tracking-wide">
        <Cite>Stg. 1:22 · Lc. 8:15</Cite>
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link to="/cuaderno" search={{ ref: pasaje }} className="btn btn-gold">
          Escribir mi paso sobre {pasaje}
        </Link>
        <LeerCapitulo
          ref={pasaje}
          desde={desde}
          label="Leer el capítulo y preguntar en RevelatiO"
        />
      </div>
      <p className="mt-6 leading-relaxed">
        ¿Qué verbo de {pasaje} vas a obedecer, con qué acto, en qué fecha y ante qué testigo?{" "}
        <a href={plantillaRevelatio(pasaje, desde)} className="text-link underline">
          Recorre las seis letras en RevelatiO
        </a>{" "}
        o{" "}
        <a
          href={`https://wa.me/?text=${encodeURIComponent(`Esta semana, con ${pasaje}, mi decisión es: … ¿Me preguntas el domingo si lo hice? (Método V.E.R.D.A.D. · https://www.cieloefata.com/verdad)`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link underline"
        >
          envíale tu D a tu testigo por WhatsApp
        </a>
        .
      </p>
      {conGuia && slug ? (
        <p className="mt-6 leading-relaxed">
          ¿Lo estudias en grupo? La{" "}
          <Link to="/estudios/$slug/guia" params={{ slug }} className="text-link underline">
            guía del líder para {pasaje}
          </Link>{" "}
          ordena la reunión con el método V.E.R.D.A.D. y se imprime en una hoja.
        </p>
      ) : null}
      {sig ? (
        <p className="mt-6 leading-relaxed text-ink-soft">
          Cuando hayas escrito y compartido tu paso, el siguiente estudio es {sig.title}.{" "}
          <Link to="/estudios/$slug" params={{ slug: sig.slug }} className="text-link underline">
            Escudriñar {sig.title}
          </Link>
        </p>
      ) : null}
      {relacionadas.map((obra) => (
        <TarjetaLibro key={obra.slug} obra={obra} />
      ))}
    </section>
  );
}
