import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { Refs } from "@/components/cite";
import { BtnArrow, Motif } from "@/components/motif";
import { SeguirActo } from "@/components/seguir-acto";
import { Volver } from "@/components/volver";
import { tratadoMesSlug } from "@/lib/calendario";
import { etiquetaTratado } from "@/lib/etiquetas";
import { indiceTratado, TRATADOS_INDICE, type IndiceTratado } from "@/lib/tratados-indice";

import { pageHead, tituloSeccion } from "@/lib/seo";

export const Route = createFileRoute("/tratados")({
  component: TratadosPage,
  head: ({ matches }) => {
    const leaf = matches.at(-1)?.pathname;
    if (leaf !== "/tratados") return {};
    return pageHead({
      path: "/tratados",
      title: tituloSeccion("Tratados"),
      description:
        "Tratados bíblicos: versículos muy citados, leídos otra vez dentro del capítulo que los sostiene.",
      detalle:
        "Cada tratado toma un versículo muy citado, y a menudo citado fuera de lugar, y lo devuelve al capítulo donde Dios lo puso. Primero leemos el pasaje completo; después dejamos que el texto hable antes que nosotros. Cada mes destacamos uno.",
    });
  },
});

function TratadosPage() {
  const mes = indiceTratado(tratadoMesSlug()) ?? TRATADOS_INDICE.find((t) => t.pack);
  const publicados = TRATADOS_INDICE.filter((t) => t.pack);

  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <Volver />
      <Motif kind="lamb" />
      <h1 className="mt-2 font-serif text-4xl">Tratados</h1>
      <p className="mt-5 text-lg leading-relaxed">
        Cada tratado toma un versículo muy citado, y a menudo citado fuera de lugar, y lo
        devuelve al capítulo donde Dios lo puso. Primero leemos el pasaje completo; después
        dejamos que el texto hable antes que nosotros. Cada mes destacamos uno.
      </p>
      <Refs refs="Neh. 8:8 · 2 P. 3:16" />

      {mes ? (
        <article className="mt-16 border border-rule bg-paper px-6 py-10 md:px-9">
          <p className="font-serif text-lg italic text-gold">El tratado de este mes</p>
          <h2 className="mt-2 font-serif text-3xl">{mes.title}</h2>
          <p className="mt-1 text-gold">{mes.ref}</p>
          <p className="mt-4 leading-relaxed">{mes.blurb}</p>
          <SeguirActo />
          <Link
            to="/tratados/$slug"
            params={{ slug: mes.slug }}
            className="btn btn-ink mt-6"
          >
            Escudriñar el tratado
            <BtnArrow />
          </Link>
        </article>
      ) : null}

      <Lista titulo="Todos los tratados" items={publicados} />
      <p className="mt-10 font-sans text-sm">
        <Link to="/estudios" className="text-link underline">
          Ver los estudios
        </Link>
        {" · "}
        <Link to="/objeciones" className="text-link underline">
          Versículos que viajan solos
        </Link>
      </p>
      <Outlet />
    </main>
  );
}

function Lista({ titulo, items }: { titulo: string; items: IndiceTratado[] }) {
  if (items.length === 0) return null;
  return (
    <section className="mt-14">
      <h2 className="font-serif text-3xl">{titulo}</h2>
      <ul className="mt-8 space-y-8">
        {items.map((e) => (
          <li key={e.slug} className="border-t border-rule pt-6">
            <p className="font-sans text-xs tracking-widest text-gold uppercase">
              {etiquetaTratado(e.slug)} · {e.ref}
            </p>
            <h3 className="mt-1 font-serif text-2xl">{e.title}</h3>
            <p className="mt-3 leading-relaxed">{e.blurb}</p>
            <Link
              to="/tratados/$slug"
              params={{ slug: e.slug }}
              className="mt-3 inline-flex items-center font-sans text-sm text-link underline"
            >
              Escudriñar el tratado
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
