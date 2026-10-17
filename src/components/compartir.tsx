import { Share2 } from "lucide-react";
import { useEffect, useState } from "react";
import { SITE_ORIGIN } from "@/lib/seo";

/** Compartir por WhatsApp con el pasaje y el enlace. En el teléfono usa la hoja nativa si existe. */
export function Compartir({
  titulo,
  pasaje,
  ruta,
  className = "chip",
}: {
  titulo: string;
  pasaje?: string;
  ruta: string;
  className?: string;
}) {
  const [hecho, setHecho] = useState(false);
  const [nativo, setNativo] = useState(false);
  useEffect(() => setNativo("share" in navigator), []);
  const url = `${SITE_ORIGIN}${ruta}`;
  const texto = `${titulo}${pasaje ? ` (${pasaje})` : ""}. Léelo con la Biblia abierta en Cielo Efata:`;
  const wa = `https://wa.me/?text=${encodeURIComponent(`${texto} ${url}`)}`;

  return (
    <>
      <a href={wa} target="_blank" rel="noopener noreferrer" className={className}>
        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden fill="currentColor">
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.7 11.7 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.2c0-.1-.2-.2-.4-.3Z" />
        </svg>
        Compartir
        <span className="sr-only"> por WhatsApp</span>
      </a>
      {nativo ? (
        <button
          type="button"
          className={`${className} sm:hidden`}
          aria-label="Más formas de compartir"
          onClick={() => {
            void navigator.share({ title: titulo, text: texto, url }).then(
              () => setHecho(true),
              () => undefined,
            );
          }}
        >
          <Share2 size={16} aria-hidden />
          <span className="sr-only">{hecho ? "Compartido" : ""}</span>
        </button>
      ) : null}
    </>
  );
}
