import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { track } from "@vercel/analytics";

/**
 * Medición sin cookies (Vercel Web Analytics). Los nombres de evento son los mismos que
 * usa RevelatiO, para leer las dos casas con una sola vara.
 */
function eventoDe(href: string): { nombre: string; destino: string } | null {
  try {
    const u = new URL(href, window.location.href);
    if (/(^|\.)amazon\./.test(u.hostname)) return { nombre: "clic_amazon", destino: u.pathname };
    if (u.hostname === "wa.me" || u.hostname.endsWith("whatsapp.com")) return { nombre: "clic_whatsapp", destino: "wa" };
    if (u.hostname === "revelatio.app") {
      const destino = u.pathname.startsWith("/strong") ? "strong" : u.pathname.startsWith("/leer") ? "leer" : u.pathname;
      return { nombre: "abrir_revelatio", destino };
    }
  } catch {
    return null;
  }
  return null;
}

export function Medicion() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      const ev = eventoDe(a.href);
      if (ev) track(ev.nombre, { destino: ev.destino.slice(0, 80), desde: window.location.pathname.slice(0, 80) });
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
  return <Analytics />;
}
