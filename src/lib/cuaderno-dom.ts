/**
 * Lee el contexto de una selección en la página.
 * Solo copia texto que ya está en el DOM. No consulta una Biblia ni rellena versículos.
 */

import {
  citaLiteralEnBloque,
  contextoEscuela,
  contextoLectura,
  contextoMana,
  type ContextoNota,
} from "./cuaderno-estudio";

export function contextoDesdeDom(
  texto: string,
  nodo: Node | null,
  fechaHoy: string,
): ContextoNota {
  const el = nodo instanceof Element ? nodo : (nodo?.parentElement ?? null);
  const seleccionado = texto.replace(/\s+/g, " ").trim();
  const marca = el?.closest("[data-cuaderno-shelf]") ?? null;
  const shelf = marca?.getAttribute("data-cuaderno-shelf");

  if (marca && shelf === "escuela") {
    const dia = Number(marca.getAttribute("data-dia"));
    const titulo = marca.getAttribute("data-titulo") ?? "";
    const enVerso = Boolean(el?.closest(".casa-verso"));
    const bloque = el?.closest("blockquote, p, h2, .casa-verso");
    const citaEnBloque =
      !enVerso && bloque ? citaLiteralEnBloque(bloque.textContent ?? "") : "";
    const citaMemoria = enVerso ? (marca.getAttribute("data-cita") ?? "") : "";
    const seccion = enVerso
      ? "Versículo para memorizar"
      : seccionDe(marca, nodo);
    return contextoEscuela({
      dia: Number.isFinite(dia) ? dia : 0,
      titulo,
      seccion,
      citaMemoria,
      citaEnBloque,
      textoSeleccionado: seleccionado,
    });
  }

  if (marca && shelf === "mana") {
    const ref = marca.getAttribute("data-ref") ?? "";
    return contextoMana({ ref, textoSeleccionado: seleccionado });
  }

  const bloque = el?.closest("blockquote, p, h2");
  const cita = bloque ? citaLiteralEnBloque(bloque.textContent ?? "") : "";
  const titulo =
    typeof document !== "undefined" ? tituloDePagina(document.title) : "";
  return contextoLectura({
    fecha: fechaHoy,
    pasaje: "",
    referencia: cita,
    fuente: titulo || "Página de Cielo Efata",
    textoSeleccionado: seleccionado,
  });
}

function tituloDePagina(title: string): string {
  return title
    .replace(/ — libro de Alejandro Sirit \| Cielo Efata$/, "")
    .replace(/ — Estudio bíblico \| Cielo Efata$/, "")
    .replace(/ — Tratado \| Cielo Efata$/, "")
    .replace(/ \| Cielo Efata$/, "")
    .replace(" · Cielo Efata", "")
    .trim();
}

function seccionDe(raiz: Element, nodo: Node | null): string {
  if (!nodo) return "";
  const encabezados = [...raiz.querySelectorAll("h2")];
  let actual = "";
  for (const h of encabezados) {
    if (h.contains(nodo))
      return (h.textContent ?? "").replace(/\s+/g, " ").trim();
    const rel = nodo.compareDocumentPosition(h);
    if (rel & Node.DOCUMENT_POSITION_PRECEDING) {
      actual = (h.textContent ?? "").replace(/\s+/g, " ").trim();
    }
  }
  return actual;
}

/** Apartado de la lección que el lector tiene delante. No inventa el nombre. */
export function apartadoEnVista(): { seccion: string; enMemoria: boolean } {
  if (typeof document === "undefined") return { seccion: "", enMemoria: false };
  const raiz = document.getElementById("leccion");
  if (!raiz) return { seccion: "", enMemoria: false };
  const linea = window.innerHeight * 0.32;
  const nodos = [...raiz.querySelectorAll("h2, .casa-verso")];
  let elegido: Element | null = null;
  for (const nodo of nodos) {
    if (nodo.getBoundingClientRect().top <= linea) elegido = nodo;
  }
  if (!elegido) elegido = nodos.find((nodo) => nodo.getBoundingClientRect().bottom > 0) ?? null;
  if (!elegido) return { seccion: "", enMemoria: false };
  const enMemoria = elegido.classList.contains("casa-verso");
  const seccion = (elegido.getAttribute("data-seccion") || elegido.textContent || "")
    .replace(/\s+/g, " ")
    .trim();
  return { seccion, enMemoria };
}

/** Cita literal del apartado visible. Vacía si el bloque no la escribe. */
export function citaDeLaSeccionVisible(seccion: string): string {
  if (
    typeof document === "undefined" ||
    !seccion ||
    seccion === "Versículo para memorizar"
  )
    return "";
  const raiz = document.getElementById("leccion");
  if (!raiz) return "";
  const encabezados = [...raiz.querySelectorAll("h2")];
  const h = encabezados.find(
    (el) => (el.textContent ?? "").replace(/\s+/g, " ").trim() === seccion,
  );
  if (!h) return "";
  const partes: string[] = [];
  let nodo = h.nextElementSibling;
  while (nodo && nodo.tagName !== "H2") {
    partes.push(nodo.textContent ?? "");
    nodo = nodo.nextElementSibling;
  }
  return citaLiteralEnBloque(partes.join(" "));
}

export function fechaLocal(ahora = new Date()): string {
  const y = ahora.getFullYear();
  const m = String(ahora.getMonth() + 1).padStart(2, "0");
  const d = String(ahora.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}
