import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { Refs } from "@/components/cite";
import { BtnArrow, Motif } from "@/components/motif";
import { SeguirActo } from "@/components/seguir-acto";
import { Volver } from "@/components/volver";
import { essays } from "@/lib/content";
import { etiquetaTratado } from "@/lib/tratados";

export const Route = createFileRoute("/tratados")({ component: TratadosPage });

function TratadosPage() {
  const mes = essays[0];
  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <Volver />
      <Motif kind="lamb" />
      <h1 className="mt-2 font-serif text-4xl">El ensayo del mes</h1>
      <p className="mt-5 text-lg leading-relaxed">
        Un tratado no es un estudio breve ni un devocional. Es el ensayo largo de la escuela: un
        versículo que a menudo se cita de memoria, leído otra vez dentro del capítulo que lo
        sostiene, hasta que la jactancia se calle o el Siervo cargue lo que se había llamado
        herida. El estudio de la semana es la clase. Esto es el tratado: el yunque de un párrafo,
        no el archivo de una idea.
      </p>
      <Refs refs="Neh. 8:8 · 2 P. 3:16" />

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

      <h2 className="mt-14 font-serif text-3xl">Los tratados que conviene leer</h2>
      <ul className="mt-8 space-y-8">
        {essays.map((e) => (
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
      <Outlet />
    </main>
  );
}
