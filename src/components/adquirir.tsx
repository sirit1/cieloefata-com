import { amazonBusqueda, amazonDp, whatsappPack, whatsappTomo } from "@/lib/amazon";
import { adquisicion } from "@/lib/content";

type AdquirirProps = {
  className?: string;
  title?: string;
  slug?: string;
  amazonTitle?: string;
  asinEbook?: string;
  isbnPrint?: string;
  pack?: boolean;
  /** Libro sin edición publicada en Amazon: no se ofrece búsqueda ni enlace de compra. */
  sinAmazon?: boolean;
};

export function Adquirir({
  className = "mt-8",
  title,
  slug,
  amazonTitle,
  asinEbook,
  isbnPrint,
  pack = false,
  sinAmazon = false,
}: AdquirirProps) {
  const ebookHref = asinEbook ? amazonDp(asinEbook) : undefined;
  const printHref = isbnPrint ? amazonDp(isbnPrint) : undefined;
  const wa = title ? whatsappTomo(title) : adquisicion.whatsapp;
  const searchTitle = amazonTitle ?? title;
  const searchHref =
    !sinAmazon && searchTitle && !ebookHref && !printHref ? amazonBusqueda(searchTitle) : undefined;

  return (
    <div className={`${className} flex flex-col gap-3 sm:flex-row sm:flex-wrap`}>
      {ebookHref ? (
        <a href={ebookHref} rel="noopener noreferrer" target="_blank" className="btn btn-ink">
          Adquirir el ebook (Amazon)
        </a>
      ) : null}
      {printHref ? (
        <a href={printHref} rel="noopener noreferrer" target="_blank" className="btn btn-ink">
          Adquirir la obra impresa (Amazon)
        </a>
      ) : null}
      {searchHref ? (
        <a href={searchHref} rel="noopener noreferrer" target="_blank" className="btn btn-ink">
          Buscar este libro en Amazon
        </a>
      ) : null}
      {!sinAmazon && !title && !ebookHref && !printHref ? (
        <a
          href={adquisicion.amazon}
          rel="noopener noreferrer"
          target="_blank"
          className="btn btn-ink"
        >
          Adquirir la obra impresa (Amazon)
        </a>
      ) : null}
      {title && (ebookHref || printHref) ? (
        <a
          href={adquisicion.amazon}
          rel="noopener noreferrer"
          target="_blank"
          className="btn btn-ghost"
        >
          Página del autor en Amazon
        </a>
      ) : null}
      <a href={wa} rel="noopener noreferrer" target="_blank" className="btn btn-ghost">
        {title ? "Colección impresa, Venezuela (WhatsApp)" : "Solicitud directa (WhatsApp)"}
      </a>
      {pack && title ? (
        <a
          href={whatsappPack(title, slug)}
          rel="noopener noreferrer"
          target="_blank"
          className="btn btn-ghost"
        >
          Solicitar pack por WhatsApp
        </a>
      ) : null}
    </div>
  );
}
