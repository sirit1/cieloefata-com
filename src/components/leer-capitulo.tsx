import { useRouterState } from "@tanstack/react-router";
import { urlPuenteRevelatio } from "@/lib/puente-revelatio";

export function LeerCapitulo({
  ref,
  desde,
  companeros,
  pregunta,
  intencion,
  className = "",
  label,
}: {
  ref: string;
  desde?: string;
  companeros?: readonly (string | undefined)[];
  pregunta?: string;
  intencion?: string;
  className?: string;
  /** Texto visible del enlace. Por omisión, «Abrir la Escritura». */
  label?: string;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const origen = desde ?? (pathname === "/" ? "" : pathname);
  const href = urlPuenteRevelatio({
    ref,
    desde: origen,
    companeros: companeros?.filter((c): c is string => Boolean(c)),
    pregunta,
    intencion,
  });
  if (!href) return null;
  return (
    <a href={href} rel="noopener noreferrer" className={className || "btn btn-ghost"}>
      {label ?? "Abrir la Escritura"}
      {label ? null : <span className="sr-only"> en el lector compañero</span>}
    </a>
  );
}
