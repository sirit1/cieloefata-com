import type { ObraV2 } from "@/lib/libros/v2/tipo";

/** Tratado o estudio rehecho: portada, descargas, texto completo con notas y su guía. */
export function ObraV2Cuerpo({ obra, tipo }: { obra: ObraV2; tipo: "Tratado" | "Estudio" }) {
  const d = obra.descargas;
  const hayGuia = Boolean(obra.guiaHtml.trim());
  return (
    <div className="mt-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        {obra.portada ? (
          <img src={obra.portada} alt={`Portada: ${obra.titulo}`} width={600} height={960}
            className="w-48 shrink-0 rounded shadow-lg" loading="eager" />
        ) : null}
        <div className="font-sans text-sm">
          <p className="tracking-widest text-gold uppercase">Descargar gratis</p>
          {hayGuia ? (
            <p className="mt-2 text-ink-soft">
              Un solo archivo con el {tipo === "Tratado" ? "tratado" : "estudio"} y su guía de estudio al final, cada parte con su entrada en el índice.
            </p>
          ) : null}
          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {d.obra_epub ? (
              <a className="btn btn-gold" href={d.obra_epub} download>
                {hayGuia ? "Descargar todo" : "Descargar"} · EPUB
              </a>
            ) : null}
            {d.obra_pdf ? (
              <a className="btn btn-ghost" href={d.obra_pdf} download>
                {hayGuia ? "Descargar todo" : "Descargar"} · PDF
              </a>
            ) : null}
          </div>
          <p className="mt-2 text-xs text-ink-soft">EPUB para Kindle y lectores; PDF para imprimir o leer en pantalla.</p>
          {d.guia_epub || d.guia_pdf ? (
            <p className="mt-4">
              Solo la guía de estudio:{" "}
              {d.guia_epub ? <a className="text-link underline" href={d.guia_epub} download>EPUB</a> : null}
              {d.guia_epub && d.guia_pdf ? " · " : null}
              {d.guia_pdf ? <a className="text-link underline" href={d.guia_pdf} download>PDF</a> : null}
            </p>
          ) : null}
          {hayGuia ? <p className="mt-3"><a className="text-link underline" href="#guia">Leer la guía aquí</a></p> : null}
        </div>
      </div>
      <article className="obra-v2 mt-10" dangerouslySetInnerHTML={{ __html: obra.html }} />
      {hayGuia ? <section id="guia" className="mt-16 border-t border-rule pt-10">
        <p className="font-sans text-xs tracking-[0.2em] text-gold uppercase">Guía de estudio</p>
        <h2 className="mt-2 font-serif text-3xl">{obra.titulo} · Guía</h2>
        {obra.portadaGuia ? (
          <img src={obra.portadaGuia} alt={`Portada de la guía: ${obra.titulo}`} width={600} height={960}
            className="mt-6 w-40 rounded shadow" loading="lazy" />
        ) : null}
        <div className="obra-v2 mt-8" dangerouslySetInnerHTML={{ __html: obra.guiaHtml }} />
      </section> : null}
    </div>
  );
}
