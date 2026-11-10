import { useRouterState } from "@tanstack/react-router";

/** Franja delgada bajo la cabecera. Cada casa pone la suya; el resto del sitio no lleva ninguna. */
export function FranjaSeccion() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  if (path === "/tratados" || path.startsWith("/tratados/")) {
    return <p className="franja-seccion franja-tratados">Tratados · la hoja impresa, en la mano</p>;
  }
  return null;
}
