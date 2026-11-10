import { createFileRoute, Link } from "@tanstack/react-router";
import { Refs } from "@/components/cite";
import { LeerCapitulo } from "@/components/leer-capitulo";
import { BtnArrow } from "@/components/motif";
import { SeguirActo } from "@/components/seguir-acto";
import { Volver } from "@/components/volver";
import { estudioSemanaSlug, tratadoMesSlug } from "@/lib/calendario";
import { esTratado, PARA_QUIEN } from "@/lib/clasificacion";
import { ESTUDIOS_DRIVE } from "@/lib/catalogo";
import { ESTUDIOS_INDICE, indiceEstudio, type IndiceEstudio } from "@/lib/estudios-indice";
import { etiquetaEstudio, etiquetaTratado } from "@/lib/etiquetas";
import { LABORATORIOS } from "@/lib/verdad";
import { TRATADOS_INDICE } from "@/lib/tratados-indice";

import { Subir } from "@/components/subir";
import { pageHead, tituloSeccion } from "@/lib/seo";
import { InsigniaTipo } from "@/components/insignia-tipo";
import { portadaV2 } from "@/lib/libros/v2";

function Miniatura({ slug }: { slug: string }) {
  const src = portadaV2(slug);
  if (!src) return null;
  return (
    <img src={src} alt="" loading="lazy" width={64} height={96} className="h-24 w-16 shrink-0 border border-rule object-cover" />
  );
}

export const Route = createFileRoute("/estudios/")({
  component: EstudiosPage,
  head: () =>
    pageHead({
      path: "/estudios",
      title: tituloSeccion("Estudios"),
      description:
        "Estudios bíblicos: un pasaje completo, leído con el método V.E.R.D.A.D., hasta un paso concreto de obediencia.",
      detalle:
        "Cada estudio recorre un pasaje completo con el método V.E.R.D.A.D. —Ver, Entorno, Revelación, Doctrina, Argumento y Decisión—. Primero leemos el capítulo entero; después lo estudiamos juntos hasta llegar a un paso concreto de obediencia, que conviene compartir con alguien de confianza.",
    }),
});

function EstudiosPage() {
  const slugSemana = estudioSemanaSlug();
  const semana = indiceEstudio(slugSemana);
  const publicados = [
    ...ESTUDIOS_DRIVE.map((slug) => indiceEstudio(slug)).filter(
      (s): s is IndiceEstudio => Boolean(s),
    ),
    ...ESTUDIOS_INDICE.filter((s) => Boolean(s.obraHref)),
  ].filter((s) => !esTratado(s.slug));
  const breves = TRATADOS_INDICE.filter((t) => !esTratado(t.slug));
  const mes = breves.find((t) => t.slug === tratadoMesSlug());
  const labs = LABORATORIOS.map((lab) => ({
    lab,
    study: indiceEstudio(lab.slug),
  }));

  return (
    <main id="contenido" className="casa-estudios pb-20">
      <div className="mx-auto max-w-[1240px] px-4 pt-6">
        <Volver />
      </div>
      <nav className="casa-anclas" aria-label="En esta sección">
        <a href="#semana">El estudio de esta semana</a>
        <a href="#breves">Estudios breves</a>
        <a href="#todos">Todos los estudios</a>
        <a href="#generos">Por género literario</a>
      </nav>
      <header className="casa-portada">
        <div className="izq">
          <p className="kicker">Estudios</p>
          <h1>Estudios bíblicos</h1>
          <p className="casa-una-linea">{PARA_QUIEN.estudio}</p>
        </div>
        <div className="der">
          <p>
            Cada estudio recorre un pasaje completo con el método V.E.R.D.A.D. —Ver, Entorno,
            Revelación, Doctrina, Argumento y Decisión—. Primero leemos el capítulo entero; después
            lo estudiamos juntos hasta llegar a un paso concreto de obediencia, que conviene
            compartir con alguien de confianza.
          </p>
          <Refs refs="Neh. 8:8 · 2 Ti. 3:16" />
          <p className="mt-4 font-sans text-sm">
            <Link to="/metodo" className="text-link underline">
              Cómo se recorre un pasaje
            </Link>
          </p>
        </div>
      </header>

      {semana ? (
        <article id="semana" className="casa-indice mt-8 px-6 py-8 md:px-9">
          <p className="font-serif text-lg italic text-gold">{esTratado(semana.slug) ? "El tratado de esta semana" : "El estudio de esta semana"}</p>
          <h2 className="mt-2 font-serif text-3xl">{semana.title}</h2>
          <p className="mt-1 text-gold">{semana.ref}</p>
          <SeguirActo />
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/estudios/$slug"
              params={{ slug: semana.slug }}
              className="btn btn-ink"
            >
              {esTratado(semana.slug) ? "Leer el tratado" : "Leer el estudio"}
              <span className="sr-only"> de {semana.title}</span>
              <BtnArrow />
            </Link>
            <LeerCapitulo ref={semana.ref} desde={`/estudios/${semana.slug}`} />
          </div>
        </article>
      ) : null}

      <section id="breves" className="mt-14 scroll-mt-24">
        <h2 className="font-serif text-3xl">Estudios breves: versículos muy citados</h2>
        <p className="mt-4 leading-relaxed text-ink-soft">
          Cada uno toma un versículo muy citado, y a menudo citado fuera de lugar, y lo devuelve al capítulo donde
          Dios lo puso. Cada mes destacamos uno.
        </p>
        {mes ? (
          <p className="mt-4 font-sans text-sm">
            Este mes:{" "}
            <Link to="/tratados/$slug" params={{ slug: mes.slug }} className="text-link underline">
              {mes.title} · {mes.ref}
            </Link>
          </p>
        ) : null}
        <ul className="mt-8 divide-y divide-rule border-y border-rule">
          {breves.map((t) => (
            <li key={t.slug}>
              <Link
                to="/tratados/$slug"
                params={{ slug: t.slug }}
                className="flex items-start gap-4 py-5 hover:text-gold"
              >
                <Miniatura slug={t.slug} />
                <span className="flex min-w-0 flex-col gap-1">
                  <span className="font-sans text-sm text-gold">
                    {etiquetaTratado(t.slug)} · {t.ref}
                  </span>
                  <span className="font-serif text-2xl">{t.title}</span>
                  <InsigniaTipo slug={t.slug} seccion="estudio" dentroDeEnlace sinPara />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div id="todos">
        <Lista titulo="Todos los estudios" items={publicados} />
      </div>

      <p className="mt-10 font-sans text-sm">
        ¿Busca un tema por toda la Escritura?{" "}
        <Link to="/tratados" className="text-link underline">
          Ver los tratados
        </Link>
      </p>

      <section id="generos" className="mx-auto mt-14 max-w-[1240px] px-4">
        <h2 className="font-serif text-3xl">Estudios por género literario</h2>
        <p className="mt-4 leading-relaxed">
          No se lee igual un relato que un himno o una visión. Estos tres estudios muestran
          cómo leer cada género: un relato del Evangelio (Marcos 7), un himno dentro de una
          carta (Filipenses 2) y una visión del Apocalipsis (Apocalipsis 5).
        </p>
        <ul className="mt-8 divide-y divide-rule border-y border-rule">
          {labs
            .filter((row): row is { lab: (typeof labs)[number]["lab"]; study: IndiceEstudio } =>
              Boolean(row.study),
            )
            .map(({ lab, study }) => (
            <li key={lab.slug}>
              <Link
                to="/estudios/$slug"
                params={{ slug: study.slug }}
                className="flex items-start gap-4 py-5 hover:text-gold"
              >
                <Miniatura slug={study.slug} />
                <span className="flex min-w-0 flex-col gap-1">
                  <span className="font-sans text-sm text-gold">
                    {lab.genero} · {lab.ref}
                  </span>
                  <span className="font-serif text-2xl">{lab.title}</span>
                  <InsigniaTipo slug={study.slug} seccion="estudio" dentroDeEnlace sinPara />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <Subir />
    </main>
  );
}

function Lista({ titulo, items }: { titulo: string; items: IndiceEstudio[] }) {
  if (items.length === 0) return null;
  return (
    <section className="mt-14">
      <h2 className="font-serif text-3xl">{titulo}</h2>
      <ul className="mt-8 divide-y divide-rule border-y border-rule">
        {items.map((s) => (
          <li key={s.slug}>
            {s.obraHref ? (
              <Link to={s.obraHref} className="flex items-start gap-4 py-5 hover:text-gold">
                <Miniatura slug={s.slug} />
                <span className="flex min-w-0 flex-col gap-1">
                  <span className="font-sans text-sm text-gold">
                    Estudio · {s.ref}
                  </span>
                  <span className="font-serif text-2xl">{s.title}</span>
                  <InsigniaTipo slug={s.slug} seccion="estudio" dentroDeEnlace sinPara />
                </span>
              </Link>
            ) : (
              <Link
                to="/estudios/$slug"
                params={{ slug: s.slug }}
                className="flex items-start gap-4 py-5 hover:text-gold"
              >
                <Miniatura slug={s.slug} />
                <span className="flex min-w-0 flex-col gap-1">
                  <span className="font-sans text-sm text-gold">
                    {etiquetaEstudio(s.slug)} · {s.ref}
                  </span>
                  <span className="font-serif text-2xl">{s.title}</span>
                  <InsigniaTipo slug={s.slug} seccion="estudio" dentroDeEnlace sinPara />
                </span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
