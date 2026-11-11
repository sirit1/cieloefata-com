/** Regreso a RevelatiO: solo si la visita viene de allí, y solo hacia revelatio.app. */

export const REVELATIO_ORIGEN = "https://revelatio.app/";
export const CLAVE_LLEGADA = "cielo-efata:volver-llegada";
export const CLAVE_REGRESO = "cielo-efata:volver-revelatio";
export const CLAVE_OCULTO = "cielo-efata:volver-revelatio-oculto";

const HOSTS = new Set(["revelatio.app", "www.revelatio.app"]);

export type Senal = {
  ref: string | null;
  volver: string | null;
  referrer: string;
  guardado: string | null;
  oculto: boolean;
};

/**
 * Corre en <head> antes del enrutador, que a veces quita la query.
 * Guarda la primera señal de la pestaña; no calcula el destino.
 */
export const SCRIPT_VOLVER = `(function(){try{var k="${CLAVE_LLEGADA}";if(sessionStorage.getItem(k))return;var q=new URLSearchParams(location.search);var ref=q.get("ref");var volver=q.get("volver");var referrer=document.referrer||"";if(referrer.length>500)referrer="";if(volver&&volver.length>500)volver=null;var host="";try{host=new URL(referrer).hostname;}catch(e){}var de=!!(ref&&ref.toLowerCase()==="revelatio")||host==="revelatio.app"||host==="www.revelatio.app";if(!de)return;sessionStorage.setItem(k,JSON.stringify({ref:ref,volver:volver,referrer:referrer}));}catch(e){}})();`;

function hostRevelatio(raw: string | null | undefined): boolean {
  if (!raw) return false;
  try {
    return HOSTS.has(new URL(raw).hostname);
  } catch {
    return false;
  }
}

export function vieneDeRevelatio(ref: string | null | undefined, referrer: string | null | undefined): boolean {
  if (typeof ref === "string" && ref.trim().toLowerCase() === "revelatio") return true;
  return hostRevelatio(referrer);
}

/** URL de regreso, o null si no es https://revelatio.app (ni www). Evita redirecciones abiertas. */
export function urlSegura(raw: string | null | undefined): string | null {
  if (typeof raw !== "string") return null;
  const texto = raw.trim();
  if (!texto || texto.length > 500 || /[\s\\]/.test(texto)) return null;
  const esRuta = texto.startsWith("/") && !texto.startsWith("//");
  if (!esRuta && !/^https:\/\//i.test(texto)) return null;
  let url: URL;
  try {
    url = esRuta ? new URL(texto, REVELATIO_ORIGEN) : new URL(texto);
  } catch {
    return null;
  }
  if (url.protocol !== "https:" || url.port !== "") return null;
  if (!HOSTS.has(url.hostname)) return null;
  if (url.username || url.password) return null;
  url.hostname = "revelatio.app";
  return url.toString();
}

export function destinoRevelatio(volver: string | null | undefined, referrer: string | null | undefined): string {
  return urlSegura(volver) ?? urlSegura(referrer) ?? REVELATIO_ORIGEN;
}

/** Destino visible, o null si no hay visita desde RevelatiO o el visitante lo ocultó. */
export function resolverVolver(senal: Senal): string | null {
  if (senal.oculto) return null;
  if (vieneDeRevelatio(senal.ref, senal.referrer)) {
    return destinoRevelatio(senal.volver, senal.referrer);
  }
  return urlSegura(senal.guardado);
}
