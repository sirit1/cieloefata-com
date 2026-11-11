import { useEffect, useState } from "react";
import {
  CLAVE_LLEGADA,
  CLAVE_OCULTO,
  CLAVE_REGRESO,
  resolverVolver,
  vieneDeRevelatio,
  type Senal,
} from "@/lib/volver-revelatio";

function almacen(): Storage | null {
  try {
    return sessionStorage;
  } catch {
    return null;
  }
}

function senal(): Senal {
  const store = almacen();
  const q = new URLSearchParams(window.location.search);
  let ref = q.get("ref");
  let volver = q.get("volver");
  let referrer = document.referrer || "";
  try {
    const crudo = store?.getItem(CLAVE_LLEGADA);
    if (crudo) {
      const llegada = JSON.parse(crudo) as { ref?: unknown; volver?: unknown; referrer?: unknown };
      if (!vieneDeRevelatio(ref, referrer)) {
        ref = typeof llegada.ref === "string" ? llegada.ref : null;
        volver = typeof llegada.volver === "string" ? llegada.volver : null;
        referrer = typeof llegada.referrer === "string" ? llegada.referrer : "";
      }
    }
  } catch {
    /* la señal de esta carga basta */
  }
  return {
    ref,
    volver,
    referrer,
    guardado: store?.getItem(CLAVE_REGRESO) ?? null,
    oculto: store?.getItem(CLAVE_OCULTO) === "1",
  };
}

function Pastilla({ href, onClose }: { href: string; onClose: () => void }) {
  return (
    <div className="volver-pill">
      <a href={href} rel="noopener noreferrer">
        <img src="/brand/revelatio-mark.png" alt="" width={192} height={192} />
        <span className="volver-texto">Volver a RevelatiO</span>
      </a>
      <button type="button" onClick={onClose} aria-label="Ocultar el regreso a RevelatiO">
        ×
      </button>
    </div>
  );
}

/** Pastilla en la cabecera (escritorio) y flotante abajo a la izquierda (móvil). */
export function VolverRevelatio() {
  const [href, setHref] = useState<string | null>(null);

  useEffect(() => {
    const store = almacen();
    const actual = senal();
    const destino = resolverVolver(actual);
    if (destino && vieneDeRevelatio(actual.ref, actual.referrer)) {
      store?.setItem(CLAVE_REGRESO, destino);
    }
    setHref(destino);
  }, []);

  function ocultar() {
    almacen()?.setItem(CLAVE_OCULTO, "1");
    setHref(null);
  }

  if (!href) return null;

  return (
    <>
      <div className="volver-cabecera">
        <Pastilla href={href} onClose={ocultar} />
      </div>
      <div className="volver-revelatio">
        <Pastilla href={href} onClose={ocultar} />
      </div>
    </>
  );
}
