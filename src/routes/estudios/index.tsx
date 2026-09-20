import { createFileRoute, Link } from "@tanstack/react-router";
import { Refs } from "@/components/cite";
import { LeerCapitulo } from "@/components/leer-capitulo";
import { BtnArrow, Motif } from "@/components/motif";
import { SeguirActo } from "@/components/seguir-acto";
import { Volver } from "@/components/volver";
import { etiquetaEstudio, studies } from "@/lib/studies";
import { LABORATORIOS, LAB_SLUGS } from "@/lib/verdad";

export const Route = createFileRoute("/estudios/")({ component: EstudiosPage });

function EstudiosPage() {
  const semana = studies.find((s) => s.slug === "romanos-1");
  const yunque = LAB_SLUGS.map((slug) => studies.find((s) => s.slug === slug)).filter(
    (s): s is NonNullable<typeof s> => Boolean(s),
  );
  const demas = studies.filter((s) => s.slug !== "romanos-1" && !(LAB_SLUGS as readonly string[]).includes(s.slug));

  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <Volver />
      <Motif kind="lion" />
      <h1 className="mt-2 font-serif text-4xl">Las clases de la escuela</h1>
      <p className="mt-5 text-lg leading-relaxed">
        Un estudio es la clase: un pasaje completo, la cadena V.E.R.D.A.D.™ y un solo paso, dicho
        a alguien que pueda preguntar mañana. No es un tratado breve, ni un devocional de
        versículo suelto, ni un taller de autoestima con léxico de cruz. Los laboratorios son el
        yunque: seis géneros, recorridos después de poseer el método, para que la cadena se pruebe
        donde el texto no se deja recortar.
      </p>
      <Refs refs="Neh. 8:8 · 2 Ti. 3:16 · Mr. 7:34" />
      <p className="mt-4 font-sans text-sm">
        <Link to="/metodo" className="text-link underline">
          Cómo se recorre un pasaje
        </Link>
      </p>

      {semana ? (
        <article className="mt-16 border border-rule bg-paper px-6 py-10 md:px-9">
          <p className="font-serif text-lg italic text-gold">El estudio de esta semana</p>
          <h2 className="mt-2 font-serif text-3xl">{semana.title}</h2>
          <p className="mt-1 text-gold">{semana.ref}</p>
          <p className="mt-4 leading-relaxed">{semana.decision}</p>
          <SeguirActo />
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/estudios/$slug"
              params={{ slug: semana.slug }}
              className="btn btn-ink"
            >
              Escudriñar el estudio
              <span className="sr-only"> de {semana.title}</span>
              <BtnArrow />
            </Link>
            <LeerCapitulo ref={semana.ref} />
          </div>
        </article>
      ) : null}

      <section className="mt-14">
        <h2 className="font-serif text-3xl">Seis laboratorios, seis géneros</h2>
        <p className="mt-4 leading-relaxed">
          Génesis 3, Salmo 22, Isaías 53, Marcos 7, Filipenses 2, Apocalipsis 5. Narración,
          lamento, cántico del Siervo, evangelio, himno y apocalipsis. Si la cadena no sobrevive a
          esos seis géneros, no merece un solo discípulo, porque el método que solo funciona en un
          género favorito no es método: es capricho.
        </p>
        <ul className="mt-8 divide-y divide-rule border-y border-rule">
          {yunque.map((s) => {
            const lab = LABORATORIOS.find((l) => l.slug === s.slug);
            return (
              <li key={s.slug}>
                <Link
                  to="/estudios/$slug"
                  params={{ slug: s.slug }}
                  className="block py-5 hover:text-gold"
                >
                  <span className="flex min-w-0 flex-col gap-1">
                    <span className="font-sans text-sm text-gold">
                      {lab?.genero} · {s.ref}
                    </span>
                    <span className="font-serif text-2xl">{s.title}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
      <Lista titulo="Las demás clases" items={demas} />
      <Link to="/tratados" className="mt-10 inline-block font-sans text-sm text-link underline">
        Escudriñar el tratado
      </Link>
    </main>
  );
}

function Lista({
  titulo,
  items,
}: {
  titulo: string;
  items: typeof studies;
}) {
  if (items.length === 0) return null;
  return (
    <section className="mt-14">
      <h2 className="font-serif text-3xl">{titulo}</h2>
      <ul className="mt-8 divide-y divide-rule border-y border-rule">
        {items.map((s) => (
          <li key={s.slug}>
            <Link
              to="/estudios/$slug"
              params={{ slug: s.slug }}
              className="block py-5 hover:text-gold"
            >
              <span className="flex min-w-0 flex-col gap-1">
                <span className="font-sans text-sm text-gold">
                  {etiquetaEstudio(s.slug)} · {s.ref}
                </span>
                <span className="font-serif text-2xl">{s.title}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
