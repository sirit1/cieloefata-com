import { Link } from "@tanstack/react-router";
import { Cite } from "@/components/cite";
import { LeerCapitulo } from "@/components/leer-capitulo";
import { ESTUDIOS_DRIVE } from "@/lib/catalogo";
import { type AulaKind, obrasDesdeAula } from "@/lib/content";
import { indiceEstudio } from "@/lib/estudios-indice";

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
  const relacionadas = kind && slug ? obrasDesdeAula(kind, slug) : [];

  return (
    <section className="mt-14 border-t border-rule pt-10">
      <h2 className="font-serif text-3xl">Un paso de obediencia para esta semana</h2>
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
        <LeerCapitulo ref={pasaje} desde={desde} />
      </div>
      {sig ? (
        <p className="mt-6 leading-relaxed text-ink-soft">
          Cuando hayas escrito y compartido tu paso, el siguiente estudio es {sig.title}.{" "}
          <Link to="/estudios/$slug" params={{ slug: sig.slug }} className="text-link underline">
            Escudriñar {sig.title}
          </Link>
        </p>
      ) : null}
      {relacionadas.length ? (
        <div className="mt-6 space-y-2">
          {relacionadas.map((obra) => (
            <p key={obra.slug} className="leading-relaxed text-ink-soft">
              Para profundizar:{" "}
              <Link to="/obras/$slug" params={{ slug: obra.slug }} className="text-link underline">
                {obra.title}
              </Link>
            </p>
          ))}
        </div>
      ) : null}
    </section>
  );
}
