import { createFileRoute, Link } from "@tanstack/react-router";
import { Volver } from "@/components/volver";
import { GLOSAS } from "@/lib/glosas";
import { pageHead, tituloSeccion } from "@/lib/seo";

export const Route = createFileRoute("/glosario")({
  component: GlosarioPage,
  head: () =>
    pageHead({
      path: "/glosario",
      title: tituloSeccion("Glosario"),
      description:
        "Las palabras de la casa —versiculitis, V.E.R.D.A.D., Éfata, exégesis, Sola Scriptura y otras— explicadas en una línea.",
    }),
});

/** Términos de la casa que no son latín ni original: describen cómo funciona el sitio. */
const DE_LA_CASA: Record<string, string> = {
  Estudio: "Un pasaje completo, estudiado con el método V.E.R.D.A.D., hasta un paso concreto de obediencia.",
  Tratado: "Un versículo muy citado, y a menudo sacado de contexto, leído otra vez dentro de su capítulo.",
  Aula: "Así se llama aquí la página de lectura de un estudio o un tratado: el texto a pantalla completa, sin distracciones.",
  Cuaderno: "Donde anotas lo que el pasaje te pide obedecer. Se guarda en tu navegador.",
  RevelatiO: "El lector de la Biblia que acompaña a esta escuela: allí se lee el capítulo entero.",
  Strong: "Numeración de las palabras hebreas y griegas de la Biblia (James Strong, 1890). Aquí siempre va con la palabra original y su sentido.",
};

function letraDe(s: string) {
  return s.normalize("NFD").replace(/\p{M}/gu, "").replace(/^[^A-Za-z]+/, "").charAt(0).toUpperCase();
}

function GlosarioPage() {
  // Sin variantes de mayúscula ni palabras en griego o hebreo (esas abren su ficha de Strong).
  const vistos = new Set<string>();
  const entradas = Object.entries({ ...GLOSAS, ...DE_LA_CASA })
    .filter(([k]) => !/[\u0370-\u03FF\u1F00-\u1FFF\u0590-\u05FF]/.test(k))
    .filter(([k]) => {
      const c = k.toLowerCase();
      if (vistos.has(c)) return false;
      vistos.add(c);
      return true;
    })
    .sort(([a], [b]) => letraDe(a).localeCompare(letraDe(b), "es") || a.localeCompare(b, "es"));
  const letras = [...new Set(entradas.map(([k]) => letraDe(k)))];

  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <Volver />
      <p className="kicker">Las palabras de la casa</p>
      <h1 className="hero-titulo mt-3">Glosario</h1>
      <p className="mt-6 text-lg leading-relaxed">
        Algunas palabras se repiten en los estudios y tratados. Aquí están en una línea. Dentro de los
        textos, al pasar el cursor o tocar una palabra subrayada con puntos, verás la misma explicación.
        Las palabras en griego o hebreo abren su ficha de Strong.
      </p>
      <nav aria-label="Letras" className="mt-8 flex flex-wrap gap-1 font-sans text-sm">
        {letras.map((l) => (
          <a key={l} href={`#letra-${l}`} className="chip !min-w-11 justify-center">
            {l}
          </a>
        ))}
      </nav>
      {letras.map((l) => (
        <section key={l} id={`letra-${l}`} className="mt-12 scroll-mt-24" aria-labelledby={`h-${l}`}>
          <h2 id={`h-${l}`} className="seccion-titulo border-b border-rule/50 pb-2">
            {l}
          </h2>
          <dl className="mt-4 space-y-5">
            {entradas
              .filter(([k]) => letraDe(k) === l)
              .map(([k, v]) => (
                <div key={k}>
                  <dt className="font-serif text-2xl font-semibold">{k}</dt>
                  <dd className="mt-1 text-lg leading-relaxed text-ink-soft">{v}</dd>
                </div>
              ))}
          </dl>
        </section>
      ))}
      <p className="mt-14 font-sans text-sm">
        <Link to="/metodo" className="text-link underline underline-offset-4">
          Cómo leer: el método V.E.R.D.A.D.
        </Link>
      </p>
    </main>
  );
}
