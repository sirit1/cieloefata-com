import type { ObraV2 } from "@/lib/libros/v2/tipo";

/** Tratado o estudio rehecho: portada, descargas, texto completo con notas y su guía. */
export function ObraV2Cuerpo({ obra, tipo }: { obra: ObraV2; tipo: "Tratado" | "Estudio" }) {
  const d = obra.descargas;
  return (
    <div className="mt-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <img src={obra.portada} alt={`Portada: ${obra.titulo}`} width={600} height={960}
          className="w-48 shrink-0 rounded shadow-lg" loading="eager" />
        <div className="font-sans text-sm">
          <p className="tracking-widest text-gold uppercase">Descargar gratis</p>
          <ul className="mt-3 space-y-2">
            <li><a className="text-link underline" href={d.obra_pdf} download>{tipo} en PDF</a></li>
            <li><a className="text-link underline" href={d.obra_epub} download>{tipo} en EPUB (Kindle y lectores)</a></li>
            <li><a className="text-link underline" href={d.guia_pdf} download>Guía de estudio en PDF</a></li>
            <li><a className="text-link underline" href={d.guia_epub} download>Guía de estudio en EPUB</a></li>
          </ul>
          <p className="mt-3"><a className="text-link underline" href="#guia">Leer la guía aquí</a></p>
        </div>
      </div>
      <article className="obra-v2 mt-10" dangerouslySetInnerHTML={{ __html: obra.html }} />
      <section id="guia" className="mt-16 border-t border-rule pt-10">
        <p className="font-sans text-xs tracking-[0.2em] text-gold uppercase">Guía de estudio</p>
        <h2 className="mt-2 font-serif text-3xl">{obra.titulo} · Guía</h2>
        <img src={obra.portadaGuia} alt={`Portada de la guía: ${obra.titulo}`} width={600} height={960}
          className="mt-6 w-40 rounded shadow" loading="lazy" />
        <div className="obra-v2 mt-8" dangerouslySetInnerHTML={{ __html: obra.guiaHtml }} />
      </section>
    </div>
  );
}
