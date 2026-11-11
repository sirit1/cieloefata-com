import { Link } from "@tanstack/react-router";
import { useEffect, useId, useRef, useState } from "react";
import { Tapa } from "@/components/tapa";
import type { Obra } from "@/lib/content";
import { sinopsisDe } from "@/lib/sinopsis";

function punteroFino() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

/**
 * Tapa con sinopsis: en escritorio se abre al pasar el cursor o al enfocar;
 * en el teléfono el primer toque abre y un toque fuera cierra. El enlace del
 * libro queda visible dentro del recuadro.
 */
export function SinopsisTapa({
  obra,
  size = "rejilla",
  className = "",
  priority = false,
}: {
  obra: Pick<Obra, "slug" | "title" | "line" | "seoDescription">;
  size?: "lg" | "ficha" | "pdp" | "sm" | "lista" | "umbral" | "rejilla";
  className?: string;
  priority?: boolean;
}) {
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  const [abierta, setAbierta] = useState(false);
  const texto = sinopsisDe(obra);

  useEffect(() => {
    if (!abierta) return;
    function fuera(e: PointerEvent) {
      if (!ref.current?.contains(e.target as Node)) setAbierta(false);
    }
    function tecla(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      setAbierta(false);
      ref.current?.querySelector<HTMLElement>(".sinopsis-disparador")?.focus();
    }
    document.addEventListener("pointerdown", fuera);
    document.addEventListener("keydown", tecla);
    return () => {
      document.removeEventListener("pointerdown", fuera);
      document.removeEventListener("keydown", tecla);
    };
  }, [abierta]);

  return (
    <div
      ref={ref}
      className="sinopsis-tapa"
      onMouseEnter={() => {
        if (punteroFino()) setAbierta(true);
      }}
      onMouseLeave={() => {
        if (punteroFino()) setAbierta(false);
      }}
      onFocus={() => setAbierta(true)}
      onBlur={(e) => {
        const next = e.relatedTarget;
        if (!(next instanceof Node) || !ref.current?.contains(next)) setAbierta(false);
      }}
    >
      <Link
        to="/obras/$slug"
        params={{ slug: obra.slug }}
        className="sinopsis-disparador block"
        aria-expanded={abierta}
        aria-controls={id}
        aria-haspopup="true"
        aria-describedby={abierta ? id : undefined}
        onClick={(e) => {
          if (punteroFino()) return;
          e.preventDefault();
          setAbierta((v) => !v);
        }}
      >
        <Tapa obra={obra} size={size} className={className} priority={priority} />
      </Link>
      <div
        id={id}
        role="region"
        aria-label={`Sinopsis de ${obra.title}`}
        hidden={!abierta}
        className="sinopsis-popover"
      >
        <p className="sinopsis-texto">{texto}</p>
        <Link to="/obras/$slug" params={{ slug: obra.slug }}>
          Ver el libro
          <span className="sr-only">: {obra.title}</span>
        </Link>
      </div>
    </div>
  );
}
