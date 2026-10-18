import { Link } from "@tanstack/react-router";
import { NOMBRE_TIPO, PARA_QUIEN, tipoDe, type Tipo } from "@/lib/clasificacion";

/**
 * Insignia «Estudio» / «Tratado» con una línea de «para quién».
 * `dentroDeEnlace`: úsese en tarjetas que ya son un enlace (no se anidan enlaces).
 */
export function InsigniaTipo({
  slug,
  seccion,
  className,
  dentroDeEnlace = false,
}: {
  slug: string;
  seccion: Tipo;
  className?: string;
  dentroDeEnlace?: boolean;
}) {
  const tipo = tipoDe(slug, seccion);
  const clases = `flex flex-wrap items-baseline gap-x-2 gap-y-1 font-sans text-sm ${className ?? ""}`;
  if (dentroDeEnlace) {
    return (
      <span className={clases}>
        <span className="chip">{NOMBRE_TIPO[tipo]}</span>
        <span className="text-ink-soft">{PARA_QUIEN[tipo]}</span>
      </span>
    );
  }
  return (
    <p className={clases}>
      <Link to="/estudios-y-tratados" hash={tipo} className="chip no-underline" title="Qué es un estudio y qué es un tratado">
        {NOMBRE_TIPO[tipo]}
      </Link>
      <span className="text-ink-soft">{PARA_QUIEN[tipo]}</span>
    </p>
  );
}
