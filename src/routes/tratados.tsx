import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { Refs } from "@/components/cite";
import { BtnArrow, Motif } from "@/components/motif";
import { SeguirActo } from "@/components/seguir-acto";
import { Volver } from "@/components/volver";
import {
  etiquetaTratado,
  tratadoDelMes,
  tratadosProximos,
  tratadosPublicados,
  type Tratado,
} from "@/lib/tratados";

import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/tratados")({
  component: TratadosPage,
  head: () =>
    pageHead({
      path: "/tratados",
      title: "Tratados · Cielo Efata",
      description:
        "El ensayo del mes. Un versículo citado de memoria, leído otra vez dentro del capítulo que lo sostiene.",
    }),
});

function TratadosPage() {
  const mes = tratadoDelMes();
  const publicados = tratadosPublicados();
  const proximos = tratadosProximos();

  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <Volver />
      <Motif kind="lamb" />
      <h1 className="mt-2 font-serif text-4xl">El ensayo del mes</h1>
      <p className="mt-5 text-lg leading-relaxed">
        Un tratado no es un estudio breve ni un devocional. Es el ensayo largo de la escuela: un
        versículo que a menudo se cita de memoria, leído otra vez dentro del capítulo que lo
        sostiene, hasta que la jactancia se calle o el Siervo cargue lo que se había llamado
        herida. El catálogo que sigue es el de Drive: catorce packs reales —el umbral V.E.R.D.A.D.,
        el crisol de lo oído y los doce numerados—, no una vitrina de ensayos sin manuscrito.
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

      <Lista titulo="Los catorce tratados con pack" items={publicados} />
      <Lista titulo="En preparación — sin pack en Drive" items={proximos} proximo />
      <p className="mt-10 font-sans text-sm">
        <Link to="/estudios" className="text-link underline">
          Escudriñar las clases
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

function Lista({
  titulo,
  items,
  proximo = false,
}: {
  titulo: string;
  items: Tratado[];
  proximo?: boolean;
}) {
  if (items.length === 0) return null;
  return (
    <section className="mt-14">
      <h2 className="font-serif text-3xl">{titulo}</h2>
      {proximo ? (
        <p className="mt-4 leading-relaxed text-ink-soft">
          Estas fichas se pueden leer, y no se presentan como tratados de la serie. Falta el pack
          en Drive: no hay que inventar un PDF que no existe.
        </p>
      ) : null}
      <ul className="mt-8 space-y-8">
        {items.map((e) => (
          <li key={e.slug} className="border-t border-rule pt-6">
            <p className="font-sans text-xs tracking-widest text-gold uppercase">
              {etiquetaTratado(e.slug)}
              {e.n !== "—" ? ` · ${e.n}` : ""} · {e.ref}
            </p>
            <h3 className="mt-1 font-serif text-2xl">{e.title}</h3>
            <p className="mt-3 leading-relaxed">{e.blurb}</p>
            <Link
              to="/tratados/$slug"
              params={{ slug: e.slug }}
              className="mt-3 inline-flex items-center font-sans text-sm text-link underline"
            >
              {proximo ? "Leer la ficha en preparación" : "Escudriñar el tratado"}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
