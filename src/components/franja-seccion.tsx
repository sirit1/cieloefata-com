import { useRouterState } from "@tanstack/react-router";

/** Franja delgada bajo la cabecera. Cada casa pone la suya; el resto del sitio no lleva ninguna. */
export function FranjaSeccion() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  if (path === "/tratados" || path.startsWith("/tratados/")) {
    return <p className="franja-seccion franja-tratados">Tratados · la hoja impresa, en la mano</p>;
  }
  if (path === "/estudios" || path.startsWith("/estudios/")) {
    return <p className="franja-seccion franja-estudios">Estudios · el cuaderno abierto junto al pasaje</p>;
  }
  if (path === "/obras" || path.startsWith("/obras/")) {
    return <p className="franja-seccion franja-libros">Libros · Editorial Cielo Efata · azul noche y oro</p>;
  }
  if (path === "/curso" || path.startsWith("/curso/")) {
    return <p className="franja-seccion franja-escuela">Escuela Bíblica Cielo Efata · gratis, con certificado</p>;
  }
  return null;
}
