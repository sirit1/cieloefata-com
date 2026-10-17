import { useEffect, useState } from "react";
import { MANA_SEMANA_API, MANA_URL } from "@/lib/recibir";

type Mana = { ref: string; texto: string; url?: string };

/** El pasaje de la semana sale del maná de RevelatiO; Cielo no guarda otra lista. */
export function PasajeSemana() {
  const [mana, setMana] = useState<Mana | null>(null);
  useEffect(() => {
    let vivo = true;
    fetch(MANA_SEMANA_API)
      .then((r) => (r.ok ? r.json() : null))
      .then((d: Partial<Mana> | null) => {
        if (vivo && d?.ref && d?.texto) setMana({ ref: d.ref, texto: d.texto, url: d.url });
      })
      .catch(() => undefined);
    return () => {
      vivo = false;
    };
  }, []);
  return (
    <section className="mt-12 border-t border-rule pt-8" aria-label="Pasaje de la semana">
      <p className="kicker">Pasaje de la semana</p>
      {mana ? (
        <>
          <p className="mt-3 font-serif text-2xl leading-snug">«{mana.texto}»</p>
          <p className="mt-2 font-sans text-sm text-gold">{mana.ref} · Reina-Valera 1960</p>
        </>
      ) : (
        <p className="mt-3 leading-relaxed">
          Cada día RevelatiO abre un pasaje, el maná, con su texto en la Reina-Valera 1960 y una
          pregunta para quedarse en él; el de la semana es el que llega por WhatsApp.
        </p>
      )}
      <a href={mana?.url ?? MANA_URL} rel="noopener noreferrer" className="btn btn-ghost mt-5">
        Leer el maná en RevelatiO
      </a>
    </section>
  );
}
