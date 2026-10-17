/** Tema de lectura: «claro», «oscuro» o «sistema» (por defecto). Se guarda solo en este navegador. */
export type Tema = "claro" | "oscuro" | "sistema";

export const CLAVE_TEMA = "cielo-efata:tema";

/** Corre en <head> antes de pintar: evita el destello claro en modo oscuro. */
export const SCRIPT_TEMA = `(function(){try{var p=localStorage.getItem("${CLAVE_TEMA}")||"sistema";var o=p==="oscuro"||(p==="sistema"&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.setAttribute("data-tema",o?"oscuro":"claro");}catch(e){}})();`;

export function leerTema(): Tema {
  try {
    const v = localStorage.getItem(CLAVE_TEMA);
    return v === "claro" || v === "oscuro" ? v : "sistema";
  } catch {
    return "sistema";
  }
}

export function aplicarTema(t: Tema) {
  try {
    if (t === "sistema") localStorage.removeItem(CLAVE_TEMA);
    else localStorage.setItem(CLAVE_TEMA, t);
  } catch {
    /* modo privado: se aplica igual en esta visita */
  }
  const oscuro =
    t === "oscuro" || (t === "sistema" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.setAttribute("data-tema", oscuro ? "oscuro" : "claro");
  const meta = document.querySelector('meta[name="theme-color"]');
  meta?.setAttribute("content", oscuro ? "#10141c" : "#1A2340");
}
