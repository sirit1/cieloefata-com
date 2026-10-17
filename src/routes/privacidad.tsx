import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead, tituloSeccion } from "@/lib/seo";

export const Route = createFileRoute("/privacidad")({
  head: () =>
    pageHead({
      path: "/privacidad",
      title: tituloSeccion("Privacidad"),
      description:
        "Qué datos guarda Cielo Efata: una medición de visitas sin cookies y los contactos que alguien deja, con su consentimiento, para recibir lo que pidió.",
    }),
  component: PrivacidadPage,
});

function PrivacidadPage() {
  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <p className="kicker">La casa</p>
      <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">Privacidad</h1>
      <p className="mt-6 text-lg leading-relaxed">
        Esta escuela no usa cookies de publicidad ni de seguimiento. Para saber qué páginas se
        leen, usa Vercel Web Analytics, una medición agregada que no instala cookies ni guarda
        datos que identifiquen al lector; cuenta visitas y algunos gestos, como abrir el capítulo en
        RevelatiO, ir a Amazon o escribir por WhatsApp, sin saber quién los hizo.
      </p>
      <p className="mt-5 text-lg leading-relaxed">
        Quien deja su nombre, su correo o su WhatsApp para descargar el capítulo 1 de un libro o
        recibir el pasaje de la semana lo hace marcando su consentimiento. Esos datos se guardan en la base
        de RevelatiO, el lector de la misma casa, y se usan solo para escribirle sobre lo que pidió y, si lo marcó, enviarle el pasaje de
        la semana; no
        se venden ni se ceden a nadie. Para darse de baja basta escribir «BAJA» por WhatsApp al
        +58 424 167 4909, o pedirlo en el mismo canal en que llegó el mensaje.
      </p>
      <p className="mt-5 text-lg leading-relaxed">
        El cuaderno guarda las notas en el propio navegador de quien escribe. La política de
        RevelatiO, que guarda la lectura, la consulta y la cuenta, está en{" "}
        <a href="https://revelatio.app/privacidad" className="text-link underline" rel="noopener noreferrer">
          revelatio.app/privacidad
        </a>
        .
      </p>
      <p className="mt-8 font-sans text-sm">
        <Link to="/nosotros" className="text-link underline">
          Nosotros
        </Link>
      </p>
    </main>
  );
}
