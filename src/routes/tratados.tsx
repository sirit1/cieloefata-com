import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { Refs } from "@/components/cite";
import { InsigniaTipo } from "@/components/insignia-tipo";
import { Volver } from "@/components/volver";
import { TRATADOS_CASA } from "@/lib/clasificacion";
import { ESTUDIOS_INDICE } from "@/lib/estudios-indice";
import { pageHead, tituloSeccion } from "@/lib/seo";
import { TRATADOS_INDICE } from "@/lib/tratados-indice";

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
  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <Volver />
      <h1 className="mt-2 font-serif text-4xl">Tratados</h1>
      <p className="mt-5 text-lg leading-relaxed">
        Un tratado toma un asunto que la Escritura entera enseña y lo sigue de libro en libro, con argumento
        ordenado, el hebreo y el griego cuando sostienen el argumento, y los intérpretes como siervos del texto.
        Lo que lo hace tratado es el enfoque, no la extensión: puede ser breve. Es para líderes, maestros y
        estudiosos.
      </p>
      <Refs refs="2 Ti. 2:2 · He. 5:14" />
      <p className="mt-4 font-sans text-sm">
        <Link to="/estudios-y-tratados" className="text-link underline">
          Estudios y tratados: cuál leer y por qué
        </Link>
      </p>

      <section className="mt-14">
        <h2 className="font-serif text-3xl">Todos los tratados</h2>
        <ul className="mt-8 space-y-8">
          {TRATADOS_CASA.map(({ slug, href }) => {
            const d = datos(slug);
            if (!d) return null;
            return (
              <li key={slug} className="border-t border-rule pt-6">
                <p className="font-sans text-xs tracking-widest text-gold uppercase">Tratado · {d.ref}</p>
                <h3 className="mt-1 font-serif text-2xl">{d.title}</h3>
                <InsigniaTipo slug={slug} seccion="tratado" className="mt-2" />
                <p className="mt-3 leading-relaxed">{d.texto}</p>
                <a href={href} className="mt-3 inline-flex items-center font-sans text-sm text-link underline">
                  Escudriñar el tratado<span className="sr-only">: {d.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mt-14 border-t border-rule pt-8">
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
      <Outlet />
    </main>
  );
}
