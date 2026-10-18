import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { track } from "@vercel/analytics";
import { leadIdLocal, RECIBIR_API, validarRecibir } from "@/lib/recibir";
import { VERDAD_GUIA } from "@/lib/verdad-guia";
import { origenVerdad, refDeQuienInvito } from "@/lib/hazlo-con-2";

type Estado = "abierto" | "enviando" | "listo";

/**
 * Pide la guía gratuita V.E.R.D.A.D. con el mismo contrato de /recibir: el contacto se guarda en los
 * `leads` de RevelatiO (libro «efata», el libro del que nace el método; origen cieloefata.com/verdad).
 * La guía se entrega siempre, aunque RevelatiO no pueda guardar el contacto.
 */
export function VerdadForm() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [semanal, setSemanal] = useState(false);
  const [consentimiento, setConsentimiento] = useState(false);
  const [sitio, setSitio] = useState("");
  const [estado, setEstado] = useState<Estado>("abierto");
  const [error, setError] = useState<string | null>(null);

  async function enviar(e: React.FormEvent) {
    e.preventDefault();
    const msg = validarRecibir({ nombre, email, telefono, semanal, consentimiento });
    setError(msg);
    if (msg) return;
    setEstado("enviando");
    try {
      const r = await fetch(RECIBIR_API, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          leadId: leadIdLocal(),
          nombre: nombre.trim(),
          email: email.trim() || undefined,
          telefono: telefono.trim() || undefined,
          libro: "efata",
          semanal,
          consentimiento: true,
          origen: origenVerdad(refDeQuienInvito()),
          sitio,
        }),
      });
      const d = (await r.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
      if (r.status === 400 && d?.error) {
        setError(d.error);
        setEstado("abierto");
        return;
      }
    } catch {
      // La guía se entrega igual.
    }
    track("recibir", { libro: "verdad", semanal: semanal ? "si" : "no" });
    setEstado("listo");
  }

  if (estado === "listo") {
    return (
      <section className="mt-8 border border-rule p-6" aria-live="polite">
        <p className="font-serif text-2xl">Aquí está tu guía V.E.R.D.A.D.</p>
        <p className="mt-3 leading-relaxed">
          Son {VERDAD_GUIA.paginas} páginas, gratis. Empieza hoy el reto de 6 días con Santiago 1: una letra por día.
        </p>
        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          <a href={VERDAD_GUIA.pdf} download className="btn btn-gold" onClick={() => track("verdad_ebook", { formato: "pdf" })}>
            Descargar la guía (PDF)
          </a>
          <a href={VERDAD_GUIA.epub} download className="btn btn-ghost" onClick={() => track("verdad_ebook", { formato: "epub" })}>
            Versión para lectores (EPUB)
          </a>
        </div>
        {semanal ? (
          <p className="mt-4 leading-relaxed">El pasaje de la semana te llegará por WhatsApp cada lunes.</p>
        ) : null}
        <p className="mt-4 leading-relaxed">
          <a href="#hazlo-con-2" className="text-link underline">Hazlo con 2</a>: invita a dos personas al reto y
          recibe gratis la plantilla de concordancia y referencias cruzadas.
        </p>
      </section>
    );
  }

  const campo = "mt-2 min-h-12 w-full border border-rule bg-paper px-3";
  return (
    <form onSubmit={enviar} className="mt-8 space-y-5 border border-rule p-6" noValidate>
      <div>
        <label htmlFor="v-nombre" className="kicker block">Nombre</label>
        <input id="v-nombre" autoComplete="given-name" value={nombre} onChange={(e) => setNombre(e.target.value)} className={campo} />
      </div>
      <div>
        <label htmlFor="v-email" className="kicker block">Correo</label>
        <input id="v-email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} className={campo} />
      </div>
      <div>
        <label htmlFor="v-tel" className="kicker block">WhatsApp, con código de país (opcional si dejas correo)</label>
        <input id="v-tel" type="tel" autoComplete="tel" placeholder="+58 …" value={telefono} onChange={(e) => setTelefono(e.target.value)} className={campo} />
      </div>
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="v-sitio">Sitio web</label>
        <input id="v-sitio" tabIndex={-1} autoComplete="off" value={sitio} onChange={(e) => setSitio(e.target.value)} />
      </div>
      <label className="flex items-start gap-3 leading-relaxed">
        <input type="checkbox" checked={semanal} onChange={(e) => setSemanal(e.target.checked)} className="mt-1.5 h-5 w-5" />
        <span>Quiero recibir también el pasaje de la semana por WhatsApp.</span>
      </label>
      <label className="flex items-start gap-3 leading-relaxed">
        <input type="checkbox" checked={consentimiento} onChange={(e) => setConsentimiento(e.target.checked)} className="mt-1.5 h-5 w-5" />
        <span>
          Acepto que Cielo Efata y RevelatiO guarden estos datos para escribirme sobre lo que pedí. Puedo darme de baja
          cuando quiera.{" "}
          <Link to="/privacidad" className="text-link underline">Privacidad</Link>
        </span>
      </label>
      {error ? <p role="alert" className="font-sans text-sm text-red-800">{error}</p> : null}
      <button type="submit" className="btn btn-gold" disabled={estado === "enviando"}>
        {estado === "enviando" ? "Preparando…" : "Quiero la guía gratis"}
      </button>
    </form>
  );
}
