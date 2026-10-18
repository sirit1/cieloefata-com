import { defineEventHandler, getRequestHeader, getRequestURL, setResponseHeaders, sendRedirect } from "h3";
import { RUTAS_KINDLE, urlKindleDePais } from "../../src/lib/kindle-tienda";

/**
 * /efata/kindle y /e → Éfata en la tienda Kindle del país del visitante (302).
 * El país lo pone Vercel en x-vercel-ip-country. La respuesta no se cachea:
 * cada visitante recibe su tienda.
 */
export default defineEventHandler((event) => {
  const path = getRequestURL(event).pathname.replace(/\/+$/, "") || "/";
  if (!RUTAS_KINDLE.has(path)) return;
  const destino = urlKindleDePais(getRequestHeader(event, "x-vercel-ip-country"));
  setResponseHeaders(event, {
    "Cache-Control": "private, no-store, max-age=0",
    "CDN-Cache-Control": "no-store",
    Vary: "x-vercel-ip-country",
  });
  return sendRedirect(event, destino, 302);
});
