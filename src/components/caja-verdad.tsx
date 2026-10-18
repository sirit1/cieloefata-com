import { track } from "@vercel/analytics";
import { urlPuenteRevelatio } from "@/lib/puente-revelatio";
import { LETRAS_SENCILLAS, VERDAD_GUIA } from "@/lib/verdad-guia";

/** Anclas de /verdad para cada letra (la segunda D es la Decisión). */
export const ANCLAS_VERDAD = ["ver", "entorno", "revelacion", "doctrina", "argumento", "decision"] as const;

/** URL de la guía V.E.R.D.A.D. de RevelatiO para el capítulo de una referencia. */
export function plantillaRevelatio(ref: string, desde?: string): string {
  const base = urlPuenteRevelatio({ ref, desde: desde ?? "" });
  if (!base) return VERDAD_GUIA.revelatio;
  return `${base}${base.includes("?") ? "&" : "?"}metodo=1`;
}

/**
 * El método de la casa, a la vista: abre cada estudio y cada tratado de Cielo Efata.
 * Un solo componente para todas las aulas; el cierre «Tu D» vive en CierreAula.
 */
export function CajaVerdad({ pasaje, desde, kind }: { pasaje: string; desde?: string; kind: "estudio" | "tratado" }) {
  const plantilla = plantillaRevelatio(pasaje, desde);
  return (
    <aside className="mt-8 border border-rule bg-parchment/60 p-5" aria-label="Estudia este texto con V.E.R.D.A.D.">
      <p className="kicker">El método de la casa</p>
      <p className="mt-1 font-serif text-2xl">
        Estudia este {kind === "tratado" ? "tratado" : "texto"} con V.E.R.D.A.D.
      </p>
      <ol className="mt-3 flex flex-wrap gap-2" aria-label="Las seis letras">
        {LETRAS_SENCILLAS.map((p, i) => (
          <li key={`${p.l}-${i}`}>
            <a
              href={`/verdad#${ANCLAS_VERDAD[i]}`}
              title={p.pregunta}
              className="inline-flex min-h-11 items-center gap-2 border border-rule bg-paper px-3 font-sans text-sm hover:border-gold"
            >
              <span className="font-semibold text-gold">{p.l}</span>
              {p.nombre}
            </a>
          </li>
        ))}
      </ol>
      <p className="mt-3 leading-relaxed">
        Lee primero {pasaje} entero; luego recorre las seis preguntas y cierra con tu D: un acto para esta semana.
      </p>
      <p className="mt-3 flex flex-wrap gap-x-4 gap-y-2 font-sans text-sm">
        <a href={plantilla} className="text-link underline" onClick={() => track("verdad_plantilla", { kind })}>
          Abrir la guía V.E.R.D.A.D. de este capítulo en RevelatiO
        </a>
        <a href="/verdad#recibir" className="text-link underline">Guía gratis (PDF)</a>
        <a href="/verdad" className="text-link underline">Qué es V.E.R.D.A.D.</a>
      </p>
    </aside>
  );
}
