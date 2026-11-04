import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { track } from "@vercel/analytics";
import { leadIdLocal, RECIBIR_API, validarRecibir } from "@/lib/recibir";

type Estado = "abierto" | "enviando" | "listo";

/** utm_campaign del QR o enlace del libro (solo letras, números y guiones). */
function campanaDeUrl(): string | null {
  if (typeof window === "undefined") return null;
  const c = new URLSearchParams(window.location.search).get("utm_campaign");
  return c && /^[a-z0-9-]{1,60}$/.test(c) ? c : null;
}

/**
 * Correo para el Curso Experto Bíblico, con el mismo contrato de /recibir: se guarda en los `leads`
 * de RevelatiO (libro «efata»; origen cieloefata.com/gratis y, si llegó por QR, la campaña del libro).
 */
export function GratisForm() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [consentimiento, setConsentimiento] = useState(false);
  const [sitio, setSitio] = useState("");
  const [estado, setEstado] = useState<Estado>("abierto");
  const [error, setError] = useState<string | null>(null);

  async function enviar(e: React.FormEvent) {
    e.preventDefault();
    const msg = email.trim()
      ? validarRecibir({ nombre, email, telefono: "", semanal: false, consentimiento })
      : "Escribe tu correo.";
    setError(msg);
    if (msg) return;
    setEstado("enviando");
    const campana = campanaDeUrl();
    try {
      const r = await fetch(RECIBIR_API, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          leadId: leadIdLocal(),
          nombre: nombre.trim(),
          email: email.trim(),
          libro: "efata",
          semanal: false,
          consentimiento: true,
          origen: campana ? `cieloefata.com/gratis?c=${campana}` : "cieloefata.com/gratis",
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
      // El curso sigue abierto aunque no se pueda guardar el contacto.
    }
    track("gratis_curso", { campana: campana ?? "directo" });
    setEstado("listo");
  }

  if (estado === "listo") {
    return (
      <section className="mt-8 border border-rule p-6" aria-live="polite">
        <p className="font-serif text-2xl">Gracias, {nombre.trim()}.</p>
        <p className="mt-3 leading-relaxed">
          Las diez lecciones ya están abiertas. Sigue con el Día 2 cuando termines esta.
        </p>
        <Link to="/curso/$slug" params={{ slug: "dia-2" }} className="btn btn-gold mt-5 inline-flex">
          Ir al Día 2
        </Link>
      </section>
    );
  }

  const campo = "mt-2 min-h-12 w-full border border-rule bg-paper px-3";
  return (
    <form onSubmit={enviar} className="mt-8 space-y-5 border border-rule p-6" noValidate>
      <p className="font-serif text-2xl">Recibe el curso en tu correo</p>
      <div>
        <label htmlFor="g-nombre" className="kicker block">Nombre</label>
        <input id="g-nombre" autoComplete="given-name" value={nombre} onChange={(e) => setNombre(e.target.value)} className={campo} />
      </div>
      <div>
        <label htmlFor="g-email" className="kicker block">Correo</label>
        <input id="g-email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} className={campo} />
      </div>
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="g-sitio">Sitio web</label>
        <input id="g-sitio" tabIndex={-1} autoComplete="off" value={sitio} onChange={(e) => setSitio(e.target.value)} />
      </div>
      <label className="flex items-start gap-3 leading-relaxed">
        <input type="checkbox" checked={consentimiento} onChange={(e) => setConsentimiento(e.target.checked)} className="mt-1.5 h-5 w-5" />
        <span>
          Acepto que Cielo Efata y RevelatiO guarden estos datos para escribirme sobre el curso. Puedo darme de baja
          cuando quiera.{" "}
          <Link to="/privacidad" className="text-link underline">Privacidad</Link>
        </span>
      </label>
      {error ? <p role="alert" className="font-sans text-sm text-red-800">{error}</p> : null}
      <button type="submit" className="btn btn-gold" disabled={estado === "enviando"}>
        {estado === "enviando" ? "Enviando…" : "Quiero el curso gratis"}
      </button>
    </form>
  );
}
