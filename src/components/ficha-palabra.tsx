import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cargarFicha, EVENTO_FICHA, type FichaStrong } from "@/lib/ficha-palabra";

function lang(id: string) {
  return id.startsWith("H") ? "he" : "el";
}

/** Hoja inferior (móvil) o tarjeta flotante (escritorio) con la entrada de Strong. Esc o «Cerrar» la cierra. */
export function FichaPalabra() {
  const [id, setId] = useState<string | null>(null);
  const [ficha, setFicha] = useState<FichaStrong | null | "cargando">(null);
  const caja = useRef<HTMLDivElement>(null);
  const origen = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function onAbrir(e: Event) {
      const d = (e as CustomEvent<{ id: string; origen?: HTMLElement | null }>).detail;
      origen.current = d.origen ?? (document.activeElement as HTMLElement | null);
      setId(d.id);
      setFicha("cargando");
      void cargarFicha(d.id).then(setFicha);
    }
    window.addEventListener(EVENTO_FICHA, onAbrir);
    return () => window.removeEventListener(EVENTO_FICHA, onAbrir);
  }, []);

  useEffect(() => {
    if (!id) return;
    caja.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.stopImmediatePropagation();
        cerrar();
      }
    }
    document.addEventListener("keydown", onKey, true);
    return () => document.removeEventListener("keydown", onKey, true);
  }, [id]);

  function cerrar() {
    setId(null);
    setFicha(null);
    origen.current?.focus?.();
  }

  if (!id) return null;
  const f = ficha && ficha !== "cargando" ? ficha : null;

  return (
    <div
      ref={caja}
      role="dialog"
      aria-modal="false"
      aria-labelledby="ficha-titulo"
      tabIndex={-1}
      className="ficha-palabra outline-none"
    >
      <div className="flex items-start gap-3">
        <div className="min-w-0 flex-1">
          <p className="kicker">Ficha de palabra · Strong {id}</p>
          {f ? (
            <h2 id="ficha-titulo" className="mt-2 font-serif text-3xl leading-tight">
              <span lang={lang(id)}>{f.lema}</span>
              {f.translit ? (
                <span className="ml-3 font-serif text-xl text-ink-soft italic">{f.translit}</span>
              ) : null}
            </h2>
          ) : (
            <h2 id="ficha-titulo" className="mt-2 font-serif text-2xl">
              {ficha === "cargando" ? "Abriendo la ficha…" : "No hay ficha para este número"}
            </h2>
          )}
        </div>
        <button type="button" onClick={cerrar} className="icono-btn -mt-1 -mr-2 !text-ink hover:!text-gold" aria-label="Cerrar la ficha">
          <X size={20} aria-hidden />
        </button>
      </div>

      {f ? (
        <dl className="mt-4 space-y-3 font-sans text-[0.95rem] leading-relaxed">
          {f.glosa ? (
            <div>
              <dt className="kicker">Glosa</dt>
              <dd className="mt-1 font-serif text-xl">{f.glosa}</dd>
            </div>
          ) : null}
          {f.defStrong || f.defKjv ? (
            <div>
              <dt className="kicker">Diccionario de Strong (1890, en inglés)</dt>
              <dd className="mt-1" lang="en">
                {f.defStrong}
                {f.defKjv ? <span className="block text-ink-soft">KJV: {f.defKjv}</span> : null}
              </dd>
            </div>
          ) : null}
          {f.derivacion ? (
            <div>
              <dt className="kicker">Origen</dt>
              <dd className="mt-1 text-ink-soft" lang="en">{f.derivacion}</dd>
            </div>
          ) : null}
          <div>
            <dt className="kicker">Dónde aparece</dt>
            <dd className="mt-1">
              {f.veces === 0
                ? `No aparece con este número en el ${f.texto}.`
                : `${f.veces} ${f.veces === 1 ? "vez" : "veces"} en ${f.versos} ${f.versos === 1 ? "versículo" : "versículos"} del ${f.texto}.`}
              {f.refs.length ? (
                <span className="mt-1 block text-ink-soft">
                  {f.refs.join(" · ")}
                  {f.versos > f.refs.length ? " …" : ""}
                </span>
              ) : null}
            </dd>
          </div>
        </dl>
      ) : null}
      <p className="mt-4 font-sans text-sm">
        <a
          href={`https://revelatio.app/strong?id=${id}&casa=1`}
          rel="noopener noreferrer"
          className="text-link underline"
        >
          Ficha completa de {id} en RevelatiO, con todas sus apariciones
        </a>
      </p>
      <p className="mt-4 font-sans text-xs leading-relaxed text-muted">
        Léxico de Strong (dominio público; edición digital de Open Scriptures, CC BY-SA). Conteos sobre el
        Textus Receptus de Scrivener (1894) y el Códice de Leningrado, de dominio público. La palabra se
        entiende en su capítulo: el léxico no predica.
      </p>
    </div>
  );
}
