import { Link } from "@tanstack/react-router";
import { Cite } from "@/components/cite";
import { LeerCapitulo } from "@/components/leer-capitulo";
import { actoDe } from "@/lib/actos";
import { siguienteEstudio } from "@/lib/studies";

export function CierreAula({
  pasaje,
  slug,
  acto,
}: {
  pasaje: string;
  slug?: string;
  acto?: string;
}) {
  const sig = slug ? siguienteEstudio(slug) : undefined;
  const ejemplo = actoDe(slug);

  return (
    <section className="mt-14 border-t border-rule pt-10">
      <h2 className="font-serif text-3xl">Un acto, esta semana</h2>
      <p className="mt-4 text-lg leading-relaxed">
        Santiago compara al que oye la Palabra y no la hace con un hombre que se mira al espejo y
        se va. Este estudio no termina cuando se ha entendido el pasaje. Termina cuando hay un
        paso concreto, conjugado por este texto, dicho a alguien que pueda preguntar mañana.
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

      {ejemplo ? (
        <>
          <p className="kicker mt-8">Esto no nace del pasaje</p>
          <p className="mt-3 text-lg leading-relaxed">{ejemplo.prohibido}</p>
          <p className="kicker mt-8">El acto de esta semana</p>
          <p className="mt-3 text-lg leading-relaxed">{ejemplo.escrito}</p>
        </>
      ) : null}

      <p className="mt-4 font-sans text-sm tracking-wide">
        <Cite>Stg. 1:22 · Lc. 8:15</Cite>
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link to="/cuaderno" search={{ ref: pasaje }} className="btn btn-gold">
          Escribir el acto
        </Link>
        <LeerCapitulo ref={pasaje} />
      </div>
      {sig ? (
        <p className="mt-6 leading-relaxed text-ink-soft">
          Cuando el acto de {pasaje} esté escrito y dicho, la siguiente clase es {sig.title}.{" "}
          <Link to="/estudios/$slug" params={{ slug: sig.slug }} className="text-link underline">
            Escudriñar {sig.title}
          </Link>
        </p>
      ) : null}
    </section>
  );
}
