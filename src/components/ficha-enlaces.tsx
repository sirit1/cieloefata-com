import { Link } from "@tanstack/react-router";
import {
  estudiosDeLibro,
  revelatioDeLibro,
  tratadosDeLibro,
} from "@/lib/descubrimiento";
import type { Ficha } from "@/lib/canon-fichas";

export function FichaEnlaces({ ficha }: { ficha: Ficha }) {
  const href = revelatioDeLibro(ficha.name, ficha.ref);
  const estudios = estudiosDeLibro(ficha.name);
  const tratados = tratadosDeLibro(ficha.name);
  if (!href && estudios.length === 0 && tratados.length === 0) return null;

  return (
    <div className="mt-3 flex flex-col gap-1 font-sans text-sm">
      {href ? (
        <a href={href} rel="noopener noreferrer" className="text-link underline">
          Leer en RevelatiO
        </a>
      ) : null}
      {estudios.map((s) => (
        <Link
          key={s.slug}
          to="/estudios/$slug"
          params={{ slug: s.slug }}
          className="text-link underline"
        >
          Estudio de este libro · {s.title}
        </Link>
      ))}
      {tratados.map((t) => (
        <Link
          key={t.slug}
          to="/tratados/$slug"
          params={{ slug: t.slug }}
          className="text-link underline"
        >
          Tratado relacionado · {t.title}
        </Link>
      ))}
    </div>
  );
}
