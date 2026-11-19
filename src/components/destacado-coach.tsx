import { useEffect, useState } from "react";
import {
  fasePromoCoach,
  msHastaSiguienteFase,
  textosPromoCoach,
  type FaseCoach,
} from "@/lib/promo-coach";

/**
 * El primer pintado usa `ahora` del loader (el mismo valor en servidor y cliente).
 * Después del montaje, el reloj del navegador acerca la fase si la pestaña sigue abierta.
 */
export function DestacadoCoach({ ahora }: { ahora: number }) {
  const [fase, setFase] = useState<FaseCoach>(() => fasePromoCoach(ahora));

  useEffect(() => {
    let timer = 0;
    let vivo = true;
    const sincronizar = () => {
      if (!vivo) return;
      const instante = Date.now();
      const siguiente = fasePromoCoach(instante);
      setFase((prev) => (prev === siguiente ? prev : siguiente));
      const espera = msHastaSiguienteFase(instante);
      if (espera == null) return;
      timer = window.setTimeout(sincronizar, Math.min(espera + 50, 60_000));
    };
    sincronizar();
    return () => {
      vivo = false;
      window.clearTimeout(timer);
    };
  }, []);

  const { destacado, aviso } = textosPromoCoach(fase);
  if (!destacado) return null;

  return (
    <div className="mt-4 max-w-[40em]" data-fase={fase}>
      <p className="inline-block bg-[#d9b871] px-3 py-2 font-sans text-sm font-semibold tracking-wide text-[#0c1018] uppercase">
        {destacado}
      </p>
      {aviso ? <p className="mt-3 text-sm leading-relaxed text-ink-soft">{aviso}</p> : null}
    </div>
  );
}
