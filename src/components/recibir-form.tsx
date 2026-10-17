import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { track } from "@vercel/analytics";
import { obras } from "@/lib/content";
import { leadIdLocal, RECIBIR_API, validarRecibir } from "@/lib/recibir";
import {
  CAPITULO_1,
  capitulo1Url,
  numeroSerie,
  obrasEnOrden,
} from "@/lib/serie";

type Estado = "abierto" | "enviando" | "listo";

function whatsappSemanal() {
  return (
    "https://wa.me/584241674909?text=" +
    encodeURIComponent(
      "Paz. Quiero recibir el pasaje de la semana por WhatsApp.",
    )
  );
}

export function RecibirForm({ libroInicial }: { libroInicial?: string }) {
  const lista = obrasEnOrden().filter((o) => capitulo1Url(o.slug));
  const inicial = lista.some((o) => o.slug === libroInicial)
    ? libroInicial!
    : "efata";
  const [libro, setLibro] = useState(inicial);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [semanal, setSemanal] = useState(false);
  const [consentimiento, setConsentimiento] = useState(false);
  const [sitio, setSitio] = useState("");
  const [estado, setEstado] = useState<Estado>("abierto");
  const [guardado, setGuardado] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const titulo = obras.find((o) => o.slug === libro)?.title ?? "Éfata";
  const pdf = capitulo1Url(libro) ?? "/capitulo-1/efata-capitulo-1.pdf";
  const paginas = CAPITULO_1[libro]?.paginas;

  async function enviar(e: React.FormEvent) {
    e.preventDefault();
    const msg = validarRecibir({
      nombre,
      email,
      telefono,
      semanal,
      consentimiento,
    });
    setError(msg);
    if (msg) return;
    setEstado("enviando");
    let ok = false;
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
          sitio,
        }),
      });
      const d = (await r.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
      } | null;
      if (r.status === 400 && d?.error) {
        setError(d.error);
        setEstado("abierto");
        return;
      }
      ok = r.ok && Boolean(d?.ok);
    } catch {
      ok = false;
    }
    // El capítulo se entrega siempre: si RevelatiO no pudo guardar el contacto, igual se descarga.
    setGuardado(ok);
    track("recibir", { libro, semanal: semanal ? "si" : "no" });
    setEstado("listo");
  }

  if (estado === "listo") {
    return (
      <section className="mt-10 border border-rule p-6" aria-live="polite">
        <p className="font-serif text-2xl">Aquí está tu capítulo 1.</p>
        <p className="mt-3 leading-relaxed">
          «{titulo}», capítulo 1
          {paginas ? `, en PDF de ${paginas} páginas` : ""}. Es gratis, como
          gratis es la Palabra.
        </p>
        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          <a
            href={pdf}
            download
            className="btn btn-gold"
            onClick={() => track("descargar_capitulo_1", { libro })}
          >
            Descargar el capítulo 1 (PDF)
          </a>
          <a
            href={pdf}
            target="_blank"
            rel="noopener"
            className="btn btn-ghost"
          >
            Leerlo en el navegador
          </a>
        </div>
        {semanal ? (
          guardado ? (
            <p className="mt-4 leading-relaxed">
              El pasaje de la semana te llegará por WhatsApp cada lunes.
            </p>
          ) : (
            <p className="mt-4 leading-relaxed">
              No pudimos anotar tu número ahora. Para el pasaje de la semana,{" "}
              <a
                href={whatsappSemanal()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link underline"
              >
                escríbenos por WhatsApp
              </a>
              .
            </p>
          )
        ) : null}
      </section>
    );
  }

  return (
    <form
      onSubmit={enviar}
      className="mt-10 space-y-5 border border-rule p-6"
      noValidate
    >
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
        <div
          aria-hidden="true"
          className="absolute -left-[9999px] h-px w-px overflow-hidden"
        >
          <label htmlFor="r-sitio">Sitio web</label>
          <input
            id="r-sitio"
            tabIndex={-1}
            autoComplete="off"
            value={sitio}
            onChange={(e) => setSitio(e.target.value)}
          />
        </div>
        <label className="flex items-start gap-3 leading-relaxed">
          <input
            type="checkbox"
            checked={semanal}
            onChange={(e) => setSemanal(e.target.checked)}
            className="mt-1.5 h-5 w-5"
          />
          <span>
            Quiero recibir también el pasaje de la semana por WhatsApp.
          </span>
        </label>
        <label className="flex items-start gap-3 leading-relaxed">
          <input
            type="checkbox"
            checked={consentimiento}
            onChange={(e) => setConsentimiento(e.target.checked)}
            className="mt-1.5 h-5 w-5"
          />
          <span>
            Acepto que Cielo Efata y RevelatiO guarden estos datos para
            escribirme sobre lo que pedí. Puedo darme de baja cuando quiera.{" "}
            <Link to="/privacidad" className="text-link underline">
              Privacidad
            </Link>
          </span>
        </label>
        {error ? (
          <p role="alert" className="font-sans text-sm text-red-800">
            {error}
          </p>
        ) : null}
        <button
          type="submit"
          className="btn btn-gold"
          disabled={estado === "enviando"}
        >
          {estado === "enviando"
            ? "Preparando…"
            : `Descargar gratis el capítulo 1 de «${titulo}»`}
        </button>
      </>
    </form>
  );
}
