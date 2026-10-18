import { useEffect, useState } from "react";
import { track } from "@vercel/analytics";
import {
  HAZLO2_META,
  HAZLO2_PLANTILLA,
  desbloqueado,
  enlaceInvitacion,
  enviosHechos,
  miRef,
  sumarEnvio,
  textoInvitacion,
} from "@/lib/hazlo-con-2";

/**
 * «Hazlo con 2»: tu enlace personal al reto. Al enviar dos invitaciones se abre la plantilla de concordancia.
 * El conteo vive en este aparato y es de confianza (ver src/lib/hazlo-con-2.ts): no hay servidor que cuente.
 */
export function HazloCon2({ lugar = "verdad" }: { lugar?: string }) {
  const [ref, setRef] = useState<string | null>(null);
  const [envios, setEnvios] = useState(0);
  const [copiado, setCopiado] = useState(false);
  useEffect(() => {
    setRef(miRef());
    setEnvios(enviosHechos());
  }, []);

  const enlace = ref ? enlaceInvitacion(ref) : "";
  const texto = textoInvitacion(enlace);
  const abierto = desbloqueado(envios);

  function contar(via: string) {
    const n = sumarEnvio();
    setEnvios(n);
    track("hazlo2_invitar", { via, lugar, n: String(n) });
  }

  async function copiar() {
    try {
      await navigator.clipboard.writeText(texto);
      setCopiado(true);
      contar("copiar");
    } catch {
      setCopiado(false);
    }
  }

  return (
    <aside id="hazlo-con-2" className="mt-10 scroll-mt-24 border-2 border-gold bg-parchment/60 p-5 sm:p-6" aria-label="Hazlo con 2">
      <p className="kicker">Hazlo con 2</p>
      <p className="mt-1 font-serif text-2xl leading-snug sm:text-3xl">Invita a dos personas al reto y estudien juntos.</p>
      <p className="mt-3 leading-relaxed">
        El reto se hace mejor acompañado: «Hierro con hierro se aguza» (Proverbios 27:17). Envía tu enlace a dos
        personas. Al enviar la segunda invitación se abre, gratis, la{" "}
        <strong>Plantilla de concordancia y referencias cruzadas V.E.R.D.A.D.</strong> en PDF: para seguir una palabra
        por toda la Biblia con su número Strong y dejar que la misma Escritura te conteste.
      </p>

      {ref ? (
        <>
          <p className="mt-4 break-all border border-rule bg-paper px-3 py-2 font-sans text-sm" aria-label="Tu enlace">
            {enlace}
          </p>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(texto)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              onClick={() => contar("whatsapp")}
            >
              Invitar por WhatsApp
            </a>
            <button type="button" className="btn btn-ghost" onClick={() => void copiar()}>
              {copiado ? "Copiado. Pégalo a otra persona" : "Copiar mi invitación"}
            </button>
          </div>
        </>
      ) : null}

      <p className="mt-4 font-sans text-sm" aria-live="polite">
        Invitaciones enviadas desde este aparato: <strong>{Math.min(envios, HAZLO2_META)} de {HAZLO2_META}</strong>
      </p>

      {abierto ? (
        <div className="mt-4 border-t border-rule pt-4">
          <p className="font-serif text-xl">Gracias por invitar. Aquí está tu plantilla.</p>
          <a
            href={HAZLO2_PLANTILLA}
            download
            className="btn btn-gold mt-3"
            onClick={() => track("hazlo2_plantilla", { lugar })}
          >
            Descargar la plantilla (PDF)
          </a>
        </div>
      ) : null}

      <p className="mt-4 font-sans text-xs leading-relaxed text-ink-soft">
        Contamos en tu propio aparato y confiamos en ti: no guardamos a quién escribes ni leemos tus mensajes. Si
        alguien llega con tu enlace y pide la guía, solo queda anotado que vino por una invitación.
      </p>
    </aside>
  );
}
