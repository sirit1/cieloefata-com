import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { Refs } from "@/components/cite";
import { InsigniaTipo } from "@/components/insignia-tipo";
import { Volver } from "@/components/volver";
import { PARA_QUIEN, TRATADOS_CASA } from "@/lib/clasificacion";
import { ESTUDIOS_INDICE } from "@/lib/estudios-indice";
import { pageHead, tituloSeccion } from "@/lib/seo";
import { TRATADOS_INDICE } from "@/lib/tratados-indice";
import { SLUGS_CON_PORTADA } from "@/lib/libros/v2";

/** Obras rehechas con portada nueva (public/tratados-v2/<slug>/portada.jpg). */
const CON_PORTADA = SLUGS_CON_PORTADA;

export const Route = createFileRoute("/tratados")({
  component: TratadosPage,
  head: ({ matches }) => {
    const leaf = matches.at(-1)?.pathname;
    if (leaf !== "/tratados") return {};
    return pageHead({
      path: "/tratados",
      title: tituloSeccion("Tratados"),
      description:
        "Tratados bíblicos: un tema o una doctrina recorridos por toda la Escritura, con argumento ordenado, idiomas originales y fuentes.",
      detalle:
        "Un tratado toma un asunto que la Escritura entera enseña y lo sigue de libro en libro, con argumento ordenado, el hebreo y el griego cuando sostienen el argumento, y los intérpretes como siervos del texto. Es para líderes, maestros y estudiosos.",
    });
  },
});

function datos(slug: string) {
  const e = ESTUDIOS_INDICE.find((s) => s.slug === slug);
  if (e) return { title: e.title, ref: e.ref, texto: e.busca };
  const t = TRATADOS_INDICE.find((s) => s.slug === slug);
  if (t) return { title: t.title, ref: t.ref, texto: t.blurb };
  return null;
}

function TratadosPage() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (pathname.replace(/\/$/, "") !== "/tratados") return <Outlet />;
  const fichas = TRATADOS_CASA.map(({ slug, href }) => {
    const d = datos(slug);
    return d ? { slug, href, ...d } : null;
  }).filter((f) => f !== null);
  const destacado =
    fichas.find((f) => f.slug === "la-crianza-de-los-hijos-en-estos-tiempos-de-redes-sociales") ??
    fichas.at(-1);
  const resto = fichas.filter((f) => f.slug !== destacado?.slug);

  return (
    <main className="casa-tratados">
      <div className="casa-intro">
        <Volver />
        <p className="casa-serie">Serie Cielo Efata</p>
        <h1>Tratados</h1>
        <div className="casa-filete" aria-hidden />
        <p>
          Un tratado toma un asunto que la Escritura entera enseña y lo sigue de libro en libro, con argumento
          ordenado, el hebreo y el griego cuando sostienen el argumento, y los intérpretes como siervos del texto.
          Lo que lo hace tratado es el enfoque, no la extensión: puede ser breve. Es para líderes, maestros y
          estudiosos.
        </p>
        <p className="mt-4 font-sans text-sm text-[#6b5a38]">{PARA_QUIEN.tratado}</p>
        <Refs refs="2 Ti. 2:2 · He. 5:14" />
        <p className="mt-4 font-sans text-sm">
          <Link to="/estudios-y-tratados" className="text-link underline">
            Estudios y tratados: cuál leer y por qué
          </Link>
        </p>
      </div>

      {destacado ? (
        <section className="casa-destac">
          <div className="casa-marco">
            {CON_PORTADA.has(destacado.slug) ? (
              <a href={destacado.href}>
                <img src={`/tratados-v2/${destacado.slug}/portada.jpg`} alt={`Portada: ${destacado.title}`} width={600} height={960} />
              </a>
            ) : null}
            <div>
              <p className="casa-lbl">Tratado · {destacado.ref}</p>
              <h2>{destacado.title}</h2>
              <InsigniaTipo slug={destacado.slug} seccion="tratado" className="mt-2" sinPara />
              <p className="mt-4 font-serif text-xl leading-relaxed text-[#3a3423]">{destacado.texto}</p>
              <a href={destacado.href} className="casa-btn">
                Leer el tratado<span className="sr-only">: {destacado.title}</span>
              </a>
            </div>
          </div>
        </section>
      ) : null}

      <p className="casa-floron" aria-hidden>✦ ❦ ✦</p>

      <section>
        <h2 className="sr-only">Todos los tratados</h2>
        <ul className="casa-estante">
          {resto.map((d) => (
            <li key={d.slug}>
              <article className="casa-folleto">
                {CON_PORTADA.has(d.slug) ? (
                  <a href={d.href}><img src={`/tratados-v2/${d.slug}/portada.jpg`} alt={`Portada: ${d.title}`} width={600} height={960} loading="lazy" /></a>
                ) : null}
                <p className="casa-ref">Tratado · {d.ref}</p>
                <h3>{d.title}</h3>
                <InsigniaTipo slug={d.slug} seccion="tratado" className="mt-2 justify-center" sinPara />
                <p>{d.texto}</p>
                <a href={d.href} className="casa-ir">
                  Leer el tratado<span className="sr-only">: {d.title}</span>
                </a>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto mt-14 max-w-[44em] border-t border-[#c4a35a] px-4 pt-8 pb-16">
        <h2 className="font-serif text-2xl">¿Buscaba los versículos muy citados?</h2>
        <p className="mt-4 leading-relaxed">
          Los escritos que devuelven un versículo muy citado al capítulo donde Dios lo puso son estudios breves: se
          dejan gobernar por un pasaje. Están ahora en la sección de estudios, con sus mismas direcciones.
        </p>
        <p className="mt-4 font-sans text-sm">
          <Link to="/estudios" hash="breves" className="text-link underline">
            Ver los estudios breves
          </Link>
          {" · "}
          <Link to="/objeciones" className="text-link underline">
            Versículos que viajan solos
          </Link>
        </p>
      </section>
    </main>
  );
}
