import { adquisicion } from "@/lib/content";

export function Adquirir({ className = "mt-8" }: { className?: string }) {
  return (
    <div className={`${className} flex flex-col gap-3 sm:flex-row sm:flex-wrap`}>
      <a
        href={adquisicion.amazon}
        rel="noopener noreferrer"
        target="_blank"
        className="btn btn-ink"
      >
        Adquirir la obra impresa (Amazon)
      </a>
      <a
        href={adquisicion.whatsapp}
        rel="noopener noreferrer"
        target="_blank"
        className="btn btn-ghost"
      >
        Solicitud directa (WhatsApp)
      </a>
    </div>
  );
}
