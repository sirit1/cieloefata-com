import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { track } from "@vercel/analytics";
import { obras } from "@/lib/content";
import { leadIdLocal, RECIBIR_API, validarRecibir } from "@/lib/recibir";
import { numeroSerie, obrasEnOrden } from "@/lib/serie";

type Estado = "probando" | "abierto" | "cerrado" | "enviando" | "listo";

function whatsappRecibir(titulo: string) {
  return (
    "https://wa.me/584241674909?text=" +
    encodeURIComponent(`Paz. Quiero recibir el capítulo 1 de «${titulo}», de Alejandro Sirit.`)
  );
}

export function RecibirForm({ libroInicial }: { libroInicial?: string }) {
  const lista = obrasEnOrden();
  const inicial = obras.some((o) => o.slug === libroInicial) ? libroInicial! : "efata";
  const [libro, setLibro] = useState(inicial);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [semanal, setSemanal] = useState(false);
  const [consentimiento, setConsentimiento] = useState(false);
  const [estado, setEstado] = useState<Estado>("probando");
  const [error, setError] = useState<string | null>(null);
  const titulo = obras.find((o) => o.slug === libro)?.title ?? "Éfata";

  useEffect(() => {
    let vivo = true;
    fetch(RECIBIR_API, { method: "GET" })
      .then((r) => (r.ok ? r.json() : null))
      .then((d: { ok?: boolean } | null) => vivo && setEstado(d?.ok ? "abierto" : "cerrado"))
      .catch(() => vivo && setEstado("cerrado"));
    return () => {
      vivo = false;
    };
  }, []);

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
          libro,
          semanal,
          consentimiento: true,
          origen: "cieloefata.com/recibir",
        }),
      });
      const d = (await r.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
      if (!r.ok || !d?.ok) throw new Error(d?.error || "No se pudo guardar.");
      track("recibir", { libro, semanal: semanal ? "si" : "no" });
      setEstado("listo");
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo guardar.");
      setEstado("abierto");
    }
  }

  if (estado === "listo") {
    return (
      <section className="mt-10 border border-rule p-6" aria-live="polite">
        <p className="font-serif text-2xl">Recibido.</p>
        <p className="mt-3 leading-relaxed">
          Te enviaremos el capítulo 1 de «{titulo}» personalmente
          {semanal ? ", y el pasaje de la semana llegará por WhatsApp" : ""}. Mientras tanto, el
          capítulo de la Biblia en que se apoya ya está abierto en RevelatiO.
        </p>
      </section>
    );
  }

  return (
    <form onSubmit={enviar} className="mt-10 space-y-5 border border-rule p-6" noValidate>
      <div>
        <label htmlFor="r-libro" className="kicker block">
          Libro
        </label>
        <select
          id="r-libro"
          value={libro}
          onChange={(e) => setLibro(e.target.value)}
          className="mt-2 min-h-12 w-full border border-rule bg-paper px-3"
        >
          {lista.map((o) => (
            <option key={o.slug} value={o.slug}>
              {numeroSerie(o)}. {o.title}
            </option>
          ))}
        </select>
      </div>
      {estado === "cerrado" ? (
        <div className="space-y-3">
          <p className="leading-relaxed">
            La recepción desde esta página se está abriendo. Mientras tanto, pide el capítulo 1 por
            WhatsApp y te lo enviamos personalmente.
          </p>
          <a href={whatsappRecibir(titulo)} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
            Pedir el capítulo 1 de «{titulo}» por WhatsApp
          </a>
        </div>
      ) : (
        <>
          <div>
            <label htmlFor="r-nombre" className="kicker block">
              Nombre
            </label>
            <input
              id="r-nombre"
              autoComplete="given-name"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="mt-2 min-h-12 w-full border border-rule bg-paper px-3"
            />
          </div>
          <div>
            <label htmlFor="r-email" className="kicker block">
              Correo
            </label>
            <input
              id="r-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 min-h-12 w-full border border-rule bg-paper px-3"
            />
          </div>
          <div>
            <label htmlFor="r-tel" className="kicker block">
              WhatsApp, con código de país
            </label>
            <input
              id="r-tel"
              type="tel"
              autoComplete="tel"
              placeholder="+58 …"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              className="mt-2 min-h-12 w-full border border-rule bg-paper px-3"
            />
          </div>
          <label className="flex items-start gap-3 leading-relaxed">
            <input type="checkbox" checked={semanal} onChange={(e) => setSemanal(e.target.checked)} className="mt-1.5 h-5 w-5" />
            <span>Quiero recibir también el pasaje de la semana por WhatsApp.</span>
          </label>
          <label className="flex items-start gap-3 leading-relaxed">
            <input
              type="checkbox"
              checked={consentimiento}
              onChange={(e) => setConsentimiento(e.target.checked)}
              className="mt-1.5 h-5 w-5"
            />
            <span>
              Acepto que Cielo Efata y RevelatiO guarden estos datos para enviarme lo que pedí. Puedo
              darme de baja cuando quiera. <Link to="/privacidad" className="text-link underline">Privacidad</Link>
            </span>
          </label>
          {error ? (
            <p role="alert" className="font-sans text-sm text-red-800">
              {error}
            </p>
          ) : null}
          <button type="submit" className="btn btn-gold" disabled={estado !== "abierto"}>
            {estado === "enviando" ? "Guardando…" : `Recibir el capítulo 1 de «${titulo}»`}
          </button>
        </>
      )}
    </form>
  );
}
