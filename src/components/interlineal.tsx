import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { abrirFicha } from "@/lib/ficha-palabra";
import indice from "@/lib/generado/interlineal-indice.json";

type Verso = { ref: string; c: number; v: number; w: [string, string, string][] };
type Datos = { slug: string; ref: string; texto: "tr" | "wlc"; lengua: "grc" | "he"; versos: Verso[] };

const INDICE = indice as Record<string, { ref: string; versos: number; texto: "tr" | "wlc" }>;

/**
 * El pasaje en su lengua original, palabra por palabra, con el número Strong debajo.
 * Griego: Textus Receptus (Scrivener 1894, sin acentos en la fuente). Hebreo: Códice de Leningrado (WLC).
 * Los datos se piden solo al abrir (no pesan en la primera carga).
 */
export function Interlineal({ slug }: { slug: string }) {
  const meta = INDICE[slug];
  const [abierto, setAbierto] = useState(false);
  const [datos, setDatos] = useState<Datos | null>(null);
  const [error, setError] = useState(false);
  if (!meta) return null;
  const griego = meta.texto === "tr";
  const lengua = griego ? "griego" : "hebreo";

  function alternar() {
    const sig = !abierto;
    setAbierto(sig);
    if (sig && !datos) {
      fetch(`/interlineal/${slug}.json`)
        .then((r) => (r.ok ? r.json() : Promise.reject()))
        .then((d: Datos) => setDatos(d))
        .catch(() => setError(true));
    }
  }

  return (
    <section className="no-imprimir mt-8 border-y border-rule/50" aria-label={`El original en ${lengua}`}>
      <button
        type="button"
        onClick={alternar}
        aria-expanded={abierto}
        aria-controls={`interlineal-${slug}`}
        className="flex min-h-12 w-full items-center gap-3 py-2 text-left font-sans text-sm"
      >
        <span className="kicker">Original</span>
        <span className="flex-1 text-ink">
          {meta.ref} en {lengua}, palabra por palabra, con Strong
        </span>
        <ChevronDown size={18} aria-hidden className={`text-gold transition-transform ${abierto ? "rotate-180" : ""}`} />
      </button>
      {abierto ? (
        <div id={`interlineal-${slug}`} className="pb-6">
          <p className="font-sans text-xs leading-relaxed text-muted">
            {griego
              ? "Textus Receptus (Scrivener, 1894), de dominio público; la fuente digital no trae acentos."
              : "Texto masorético del Códice de Leningrado (WLC), de dominio público; es el mismo códice que edita la BHS."}{" "}
            Toca una palabra para abrir su ficha. La lectura en castellano es la Reina-Valera 1960 del estudio.
          </p>
          {error ? <p className="mt-4 font-sans text-sm">No se pudo abrir el original. Inténtalo de nuevo.</p> : null}
          {!datos && !error ? <p className="mt-4 font-sans text-sm text-ink-soft">Abriendo el original…</p> : null}
          {datos ? (
            <ol className="mt-4 space-y-5">
              {datos.versos.map((v) => (
                <li key={v.ref}>
                  <p className="font-sans text-xs tracking-[0.14em] text-gold uppercase">{v.ref}</p>
                  <p
                    lang={griego ? "grc" : "he"}
                    dir={griego ? "ltr" : "rtl"}
                    className="mt-1 flex flex-wrap gap-x-1 gap-y-1"
                  >
                    {v.w.map(([forma, sid, morf], i) =>
                      sid ? (
                        <button
                          key={i}
                          type="button"
                          className="interlineal-palabra"
                          aria-label={`${forma}, Strong ${sid}${morf ? `, ${morf}` : ""}`}
                          onClick={(e) => abrirFicha(sid, e.currentTarget)}
                        >
                          <span className={`font-serif text-xl ${griego ? "" : "text-2xl"}`}>{forma}</span>
                          <span className="font-sans text-[0.68rem] tracking-wide text-gold" dir="ltr">
                            {sid}
                          </span>
                        </button>
                      ) : (
                        <span key={i} className="interlineal-palabra">
                          <span className="font-serif text-xl">{forma}</span>
                        </span>
                      ),
                    )}
                  </p>
                </li>
              ))}
            </ol>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
