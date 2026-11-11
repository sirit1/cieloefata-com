import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { conVueltaCielo } from "@/lib/volver-revelatio";

function rutaActual(): string {
  return window.location.pathname || "/";
}

function aplicar(a: HTMLAnchorElement, ruta: string) {
  const crudo = a.getAttribute("href");
  if (!crudo || !crudo.includes("revelatio.app")) return;
  const next = conVueltaCielo(crudo, ruta);
  if (next !== crudo) a.setAttribute("href", next);
}

function pintar(root: ParentNode, ruta: string) {
  if (root instanceof HTMLAnchorElement) aplicar(root, ruta);
  for (const nodo of root.querySelectorAll("a[href]")) {
    if (nodo instanceof HTMLAnchorElement) aplicar(nodo, ruta);
  }
}

/**
 * Un solo sitio: al pintar y al pulsar, cada enlace hacia revelatio.app
 * lleva ref=cieloefata y volver=<ruta actual>. La ruta se lee en el cliente,
 * así que sigue el recorrido dentro de Cielo Efata.
 */
export function EnlacesVuelta() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const ruta = rutaActual();
    pintar(document, ruta);

    const obs = new MutationObserver((records) => {
      const actual = rutaActual();
      for (const rec of records) {
        if (rec.type === "attributes" && rec.target instanceof HTMLAnchorElement) {
          aplicar(rec.target, actual);
          continue;
        }
        for (const nodo of rec.addedNodes) {
          if (nodo instanceof HTMLAnchorElement) aplicar(nodo, actual);
          else if (nodo instanceof Element) pintar(nodo, actual);
        }
      }
    });
    obs.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["href"],
    });

    function alPulsar(e: MouseEvent) {
      const a = (e.target as Element | null)?.closest?.("a[href]");
      if (a instanceof HTMLAnchorElement) aplicar(a, rutaActual());
    }
    document.addEventListener("click", alPulsar, true);
    document.addEventListener("auxclick", alPulsar, true);

    return () => {
      obs.disconnect();
      document.removeEventListener("click", alPulsar, true);
      document.removeEventListener("auxclick", alPulsar, true);
    };
  }, [pathname]);

  return null;
}
