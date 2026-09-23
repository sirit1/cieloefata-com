import { Link } from "@tanstack/react-router";
import {
  estudiosDeLibro,
  revelatioDeLibro,
  tratadosDeLibro,
} from "@/lib/descubrimiento";
import { CANON_ESTUDIO, CANON_LEER, CANON_TRATADO } from "@/lib/copy-nivel";
import type { Ficha } from "@/lib/canon-fichas";

function etiqueta(oracion: string, titulo?: string, varios = false) {
  return varios && titulo ? `${oracion} · ${titulo}` : oracion;
}

export function FichaEnlaces({ ficha }: { ficha: Ficha }) {
  const href = revelatioDeLibro(ficha.name, ficha.ref);
  const estudios = estudiosDeLibro(ficha.name);
  const tratados = tratadosDeLibro(ficha.name);
  if (!href && estudios.length === 0 && tratados.length === 0) return null;

  return (
    <div className="mt-3 flex flex-col gap-2 font-sans text-sm leading-relaxed">
      {href ? (
        <a href={href} rel="noopener noreferrer" className="text-link underline">
          {CANON_LEER}
        </a>
      ) : null}
      {estudios.map((s) => (
        <Link
          key={s.slug}
          to="/estudios/$slug"
          params={{ slug: s.slug }}
          className="text-link underline"
        >
          {etiqueta(CANON_ESTUDIO, s.title, estudios.length > 1)}
        </Link>
      ))}
      {tratados.map((t) => (
        <Link
          key={t.slug}
          to="/tratados/$slug"
          params={{ slug: t.slug }}
          className="text-link underline"
        >
          {etiqueta(CANON_TRATADO, t.title, tratados.length > 1)}
        </Link>
      ))}
    </div>
  );
}
