import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { Volver } from "@/components/volver";
import { indicePorPasaje, LIBROS_CANON, NOMBRE_CLASE, slugLibro } from "@/lib/pasajes";
import { pageHead, tituloSeccion } from "@/lib/seo";

export const Route = createFileRoute("/pasajes")({
  component: PasajesPage,
  head: () =>
    pageHead({
      path: "/pasajes",
      title: tituloSeccion("Explorar por pasaje"),
      description:
        "De Génesis a Apocalipsis: qué estudio, tratado, pregunta o libro de Cielo Efata trata cada libro y capítulo de la Biblia.",
    }),
});

function PasajesPage() {
  const mapa = useMemo(() => indicePorPasaje(), []);
  const at = LIBROS_CANON.slice(0, 39);
  const nt = LIBROS_CANON.slice(39);
  const conMaterial = LIBROS_CANON.filter((l) => mapa.has(l));

  const Rejilla = ({ libros, titulo }: { libros: readonly string[]; titulo: string }) => (
    <div className="mt-8">
      <h2 className="kicker">{titulo}</h2>
      <ul className="indice-libros mt-3">
        {libros.map((l) => {
          const n = mapa.get(l)?.length ?? 0;
          return (
            <li key={l}>
              {n ? (
                <a
                  href={`#${slugLibro(l)}`}
                  className="flex min-h-11 items-center justify-between gap-2 border border-gold/60 bg-paper px-3 font-sans text-sm text-ink hover:border-gold hover:text-gold"
                >
                  <span>{l}</span>
                  <span className="font-sans text-xs text-gold" aria-label={`${n} ${n === 1 ? "pieza" : "piezas"}`}>
                    {n}
                  </span>
                </a>
              ) : (
                <span className="flex min-h-11 items-center px-3 font-sans text-sm text-muted">{l}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 md:py-24">
      <Volver />
      <p className="kicker">Explorar por pasaje</p>
      <h1 className="hero-titulo mt-3 max-w-[16em]">¿Qué capítulo estás leyendo?</h1>
      <p className="mt-6 max-w-[40em] text-lg leading-relaxed">
        Se llega con un versículo, no con un título. Elige el libro de la Biblia y verás qué estudio,
        tratado, pregunta o libro de la casa trata ese capítulo. Los libros en gris todavía no tienen
        material propio: léelos enteros en RevelatiO.
      </p>
      <p className="mt-4 font-sans text-sm">
        <Link to="/buscar" className="text-link underline underline-offset-4">
          ¿Buscas un versículo concreto o un tema? Usa el buscador
        </Link>
      </p>

      <Rejilla libros={at} titulo="Antiguo Testamento" />
      <Rejilla libros={nt} titulo="Nuevo Testamento" />

      <div className="mt-16 space-y-14">
        {conMaterial.map((l) => (
          <section key={l} id={slugLibro(l)} className="scroll-mt-24" aria-labelledby={`t-${slugLibro(l)}`}>
            <h2 id={`t-${slugLibro(l)}`} className="seccion-titulo border-b border-rule/50 pb-3">
              {l}
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {mapa.get(l)!.map((p) => (
                <li key={p.href}>
                  <a href={p.href} className="tarjeta">
                    <span className="font-sans text-xs tracking-[0.16em] text-gold uppercase">
                      {NOMBRE_CLASE[p.clase]} · {p.ref}
                    </span>
                    <span className="mt-2 block font-serif text-2xl leading-snug">{p.titulo}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
