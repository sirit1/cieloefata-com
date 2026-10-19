import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { track } from "@vercel/analytics";
import { Tapa } from "@/components/tapa";
import { obraBySlug } from "@/lib/content";
import { ENLACE_KINDLE, OTRAS_TIENDAS, efataGratis, urlKindle } from "@/lib/kindle-tienda";
import { pageHead } from "@/lib/seo";

const OG = "/og/efata-gratis.jpg";

export const Route = createFileRoute("/efata")({
  component: EfataPage,
  head: () => {
    const h = pageHead({
      path: "/efata",
      title: "Éfata: La Escritura Abierta, gratis en Kindle | Alejandro Sirit",
      description:
        "Descarga gratis en Kindle «Éfata: La Escritura Abierta», de Alejandro Sirit, hasta el miércoles 21 de octubre. Un botón y llegas a la tienda Amazon de tu país.",
      exact: true,
      image: OG,
    });
    return {
      ...h,
      meta: [
        ...h.meta,
        { property: "og:type", content: "book" },
        { property: "og:image:width", content: "1080" },
        { property: "og:image:height", content: "1350" },
        { property: "og:image:type", content: "image/jpeg" },
        { property: "og:image:alt", content: "Éfata: La Escritura Abierta, gratis en Kindle hasta el miércoles 21 de octubre" },
        { property: "og:locale", content: "es_ES" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
});

function EfataPage() {
  const obra = obraBySlug("efata")!;
  // El servidor decide al renderizar; el navegador vuelve a mirar por si la página quedó en caché.
  const [gratis, setGratis] = useState(() => efataGratis());
  useEffect(() => setGratis(efataGratis()), []);

  return (
    <main className="mx-auto max-w-[36em] px-4 py-10 text-center md:py-16">
      {gratis ? (
        <p className="mx-auto mb-8 inline-block bg-[#B8862B] px-4 py-2 font-sans text-sm font-semibold tracking-wide text-[#1A2340] uppercase">
          Gratis hasta el miércoles 21 de octubre
        </p>
      ) : null}
      <figure className="m-0 mx-auto max-w-[15rem]">
        <Tapa obra={obra} size="lg" priority />
      </figure>
      <h1 className="mt-8 font-serif text-4xl leading-tight md:text-5xl">{obra.title}</h1>
      <p className="mt-2 text-center font-sans text-sm tracking-wide text-gold">{obra.subtitulo}</p>
      <p className="kicker mt-3">Alejandro Sirit · Editorial Cielo Efata</p>

      <a
        href={ENLACE_KINDLE}
        rel="nofollow"
        className="btn btn-gold mt-8 w-full max-w-sm py-5 text-base"
        onClick={() => track("efata_amazon_click", { store: "auto" })}
      >
        {gratis ? "Descargar gratis en Kindle" : "Conseguir en Kindle"}
      </a>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-2 font-sans text-sm">
        <span className="text-ink-soft">Otra tienda:</span>
        {OTRAS_TIENDAS.map((t) => (
          <a
            key={t.tld}
            href={urlKindle(t.tld)}
            rel="nofollow noopener"
            className="btn btn-ghost btn-sm"
            onClick={() => track("efata_amazon_click", { store: t.tld })}
          >
            {t.etiqueta}
          </a>
        ))}
        <a
          href={`${ENLACE_KINDLE}`}
          rel="nofollow"
          className="btn btn-ghost btn-sm"
          onClick={() => track("efata_amazon_click", { store: "otros" })}
        >
          Otros países
        </a>
      </div>

      <p className="mt-5 font-sans text-xs text-ink-soft">
        En iPhone, si se abre la app de Amazon y no te deja, toca el botón de nuevo desde Safari.
      </p>

      <p className="mt-12 border-t border-rule pt-6 font-sans text-sm">
        <Link to="/obras/$slug" params={{ slug: "efata" }} className="text-link underline">
          Sobre el libro
        </Link>
        {" · "}
        <Link to="/verdad" className="text-link underline">
          Guía gratis del método V.E.R.D.A.D.
        </Link>
      </p>
    </main>
  );
}
