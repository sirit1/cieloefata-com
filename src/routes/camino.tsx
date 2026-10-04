import { createFileRoute, Link } from "@tanstack/react-router";
import { Refs } from "@/components/cite";
import { LeerCapitulo } from "@/components/leer-capitulo";
import { BtnArrow } from "@/components/motif";
import { Volver } from "@/components/volver";
import { CAMINO, CAMINO_INTRO } from "@/lib/camino";
import { ESTUDIOS_DRIVE } from "@/lib/catalogo";
import { pageHead, tituloSeccion } from "@/lib/seo";

export const Route = createFileRoute("/camino")({
  component: CaminoPage,
  head: () =>
    pageHead({
      path: "/camino",
      title: tituloSeccion("El camino"),
      description:
        "Conocer a Dios, convicción de pecado, arrepentimiento, bautismo, conversión y firmeza. El capítulo se lee entero. El aula existe solo donde ya hay libro.",
    }),
});

function CaminoPage() {
  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <Volver />
      <p className="kicker">Pastoral</p>
      <h1 className="mt-2 font-serif text-4xl">El camino</h1>
      <p className="mt-6 text-lg leading-relaxed">{CAMINO_INTRO}</p>
      <Refs refs="Jn. 1:14 · Ro. 1:16 · Mr. 1:15 · Hch. 2:38 · Jn. 3:3 · 2 P. 1:5–10" />
      <ol className="mt-12 space-y-12">
        {CAMINO.map((paso, i) => (
          <li key={paso.slug} id={paso.slug} className="scroll-mt-24">
            <p className="font-sans text-xs tracking-[0.2em] text-gold uppercase">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-2 font-serif text-3xl">{paso.name}</h2>
            <p className="mt-1 text-gold">{paso.ref}</p>
            <p className="mt-4 leading-relaxed">{paso.body}</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {(ESTUDIOS_DRIVE as readonly string[]).includes(paso.studySlug) ? (
                <Link
                  to="/estudios/$slug"
                  params={{ slug: paso.studySlug }}
                  className="btn btn-ink"
                >
                  Escudriñar {paso.ref}
                  <BtnArrow />
                </Link>
              ) : (
                <LeerCapitulo ref={paso.ref} desde="/camino" />
              )}
              {paso.also?.map((otro) => (
                <Link
                  key={otro.slug}
                  to="/estudios/$slug"
                  params={{ slug: otro.slug }}
                  className="btn btn-ghost"
                >
                  También {otro.label}
                </Link>
              ))}
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-14 font-sans text-sm">
        <Link to="/metodo" className="text-link underline">
          Cómo se recorre un pasaje
        </Link>
        {" · "}
        <Link to="/cuaderno" className="text-link underline">
          Escribir el acto
        </Link>
      </p>
    </main>
  );
}
