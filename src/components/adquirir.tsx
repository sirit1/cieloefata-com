import { amazonBusqueda, amazonDp } from "@/lib/amazon";
import { adquisicion } from "@/lib/content";
import { whatsappTomo } from "@/lib/amazon";

type AdquirirProps = {
  className?: string;
  title?: string;
  asinEbook?: string;
  isbnPrint?: string;
};

export function Adquirir({
  className = "mt-8",
  title,
  asinEbook,
  isbnPrint,
}: AdquirirProps) {
  const ebookHref = asinEbook ? amazonDp(asinEbook) : undefined;
  const printHref = isbnPrint ? amazonDp(isbnPrint) : undefined;
  const wa = title ? whatsappTomo(title) : adquisicion.whatsapp;
  const searchHref = title && !ebookHref && !printHref ? amazonBusqueda(title) : undefined;

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
          Buscar este tomo en Amazon
        </a>
      ) : null}
      {!title && !ebookHref && !printHref ? (
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
        Solicitud directa (WhatsApp)
      </a>
    </div>
  );
}
