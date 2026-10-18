import { createFileRoute, Link } from "@tanstack/react-router";
import datos from "@/lib/podcast-episodios.json";
import { pageHead, tituloSeccion } from "@/lib/seo";

/**
 * Enlace del programa en Spotify (open.spotify.com/show/…). Pendiente: se pega aquí cuando exista
 * y la página muestra el reproductor. Mientras esté vacío, no se carga nada de Spotify.
 */
const SPOTIFY_SHOW_URL = "";

export const Route = createFileRoute("/podcast")({
  head: () =>
    pageHead({
      path: "/podcast",
      title: tituloSeccion("Podcast Cielo Efata"),
      description:
        "Los estudios y tratados de Cielo Efata leídos en voz alta por Alejandro Sirit, en episodios de unos diez minutos, con la Reina-Valera 1960.",
    }),
  component: PodcastPage,
});

type Episodio = (typeof datos.episodios)[number];

const MESES = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
function fecha(iso: string) {
  const [a, m, d] = iso.split("-").map(Number);
  return `${d} de ${MESES[m - 1]} de ${a}`;
}

function embedDe(url: string) {
  const m = url.match(/open\.spotify\.com\/show\/([A-Za-z0-9]+)/);
  return m ? `https://open.spotify.com/embed/show/${m[1]}` : null;
}

function PodcastPage() {
  const obras: { slug: string; obra: string; ref: string; url: string; revelatio: string; eps: Episodio[] }[] = [];
  for (const e of datos.episodios) {
    const ultima = obras[obras.length - 1];
    if (ultima && ultima.slug === e.slug) ultima.eps.push(e);
    else obras.push({ slug: e.slug, obra: e.obra, ref: e.ref, url: e.url, revelatio: e.revelatio, eps: [e] });
  }
  const embed = SPOTIFY_SHOW_URL ? embedDe(SPOTIFY_SHOW_URL) : null;
  return (
    <main className="mx-auto max-w-[48em] px-4 py-16 md:py-24">
      <p className="kicker">Podcast</p>
      <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">Cielo Efata, en voz alta</h1>
      <p className="mt-6 text-lg leading-relaxed">
        Los estudios y tratados de esta casa, leídos por Alejandro Sirit con la Reina-Valera 1960. Cada episodio es
        una parte de unos diez minutos de una sola obra, en orden, para oírla entera sin perder el hilo del
        argumento. El texto completo de cada una sigue abierto en esta escuela, y el capítulo se abre en RevelatiO.
      </p>
      <p className="mt-4 leading-relaxed">
        Primeros episodios: {fecha(datos.lanzamiento)}. Después, lunes, miércoles y viernes.
      </p>

      <section className="mt-10" aria-label="Escuchar en Spotify">
        {embed ? (
          <iframe
            title="Podcast Cielo Efata en Spotify"
            src={embed}
            width="100%"
            height="352"
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            className="rounded-xl border-0"
          />
        ) : (
          <p className="rounded-md border border-rule p-4 font-sans text-sm text-ink-soft">
            El reproductor de Spotify aparecerá aquí cuando el programa esté publicado.
          </p>
        )}
      </section>

      <section className="mt-14">
        <h2 className="font-serif text-3xl">Episodios, en orden</h2>
        <ol className="mt-8 space-y-10">
          {obras.map((o) => (
            <li key={o.slug} className="border-t border-rule pt-6">
              <h3 className="font-serif text-2xl">
                {o.obra} <span className="font-sans text-base text-gold">· {o.ref}</span>
              </h3>
              <p className="mt-1 font-sans text-sm text-ink-soft">
                Episodios {o.eps[0].n}–{o.eps[o.eps.length - 1].n} · del {fecha(o.eps[0].fecha)} al{" "}
                {fecha(o.eps[o.eps.length - 1].fecha)}
              </p>
              <p className="mt-2 font-sans text-sm">
                <a href={o.url.replace("https://www.cieloefata.com", "")} className="text-link underline">
                  Leer el texto completo
                </a>{" "}
                ·{" "}
                <a href={o.revelatio} className="text-link underline" rel="noopener">
                  Abrir el capítulo en RevelatiO
                </a>
              </p>
            </li>
          ))}
        </ol>
      </section>

      <p className="mt-14 font-sans text-sm">
        <Link to="/estudios-y-tratados" className="text-link underline">
          Estudios y tratados: cuál leer y por qué
        </Link>
      </p>
    </main>
  );
}
