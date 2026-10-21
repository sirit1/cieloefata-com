import { VERDAD_GUIA } from "@/lib/verdad-guia";

/** Regalo: la guía del método, descarga directa, sin registro ni correo. */
export function RegaloVerdad({ id }: { id?: string }) {
  return (
    <aside id={id} className="scroll-mt-24 border border-gold/60 bg-paper p-6" aria-label="Regalo: Guía del método V.E.R.D.A.D.">
      <p className="kicker">Regalo</p>
      <h2 className="mt-2 font-serif text-2xl">Guía del método V.E.R.D.A.D.</h2>
      <p className="mt-2 leading-relaxed">
        Seis preguntas para estudiar un pasaje: Ver, Entorno, Revelación, Doctrina, Argumento y Decisión. Gratis, sin
        registro.
      </p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <a href={VERDAD_GUIA.pdf} download className="btn btn-gold">Descargar PDF</a>
        <a href={VERDAD_GUIA.epub} download className="btn btn-ghost">Descargar EPUB</a>
      </div>
    </aside>
  );
}
