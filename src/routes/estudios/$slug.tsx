import { createFileRoute, notFound, redirect, useRouterState } from "@tanstack/react-router";
import { Aula } from "@/components/aula";
import { CierreAula } from "@/components/cierre-aula";
import { ConLemas } from "@/components/lema";
import { LeerCapitulo } from "@/components/leer-capitulo";
import { ArticleJsonLd } from "@/components/json-ld";
import { fechasArticulo, lineaFechas } from "@/lib/calendario";
import { estudioTienePack } from "@/lib/catalogo";
import { etiquetaEstudio } from "@/lib/etiquetas";
import { pageHead, tituloEstudio } from "@/lib/seo";

function textoParaOir(parts: string[]) {
  return parts.filter(Boolean).join("\n\n");
}

/** Clases retiradas el 4 oct 2026: cada una va al aula, tratado u obra más cercana (301 también en vercel.json). */
const RETIRADOS: Record<string, string> = {
  "romanos-1": "/estudios/teologia-de-la-cruz",
  "marcos-1": "/estudios/marcos-7",
  "juan-3": "/estudios/romanos-8-17",
  "hechos-2": "/estudios/viajes-de-pablo",
  "juan-1": "/estudios/filipenses-2",
  "romanos-3": "/estudios/teologia-de-la-cruz",
  "2-corintios-5": "/estudios/2-corintios-12",
  "romanos-12": "/estudios/galatas-5",
  "juan-14": "/obras/el-paraclito-eterno",
  "el-paraclito-eterno": "/obras/el-paraclito-eterno",
  "salmo-23": "/estudios/2-corintios-12",
  "genesis-3": "/estudios/santiago-1",
  "salmo-22": "/tratados/isaias-53",
};

export const Route = createFileRoute("/estudios/$slug")({
  beforeLoad: ({ params }) => {
    if (params.slug === "isaias-53") {
      throw redirect({
        to: "/tratados/$slug",
        params: { slug: "isaias-53" },
        statusCode: 308,
      });
    }
    const destino = RETIRADOS[params.slug];
    if (destino) {
      throw redirect({ href: destino, statusCode: 301 });
    }
  },
  component: StudyPage,
  loader: async ({ params }) => {
    const [{ studyBySlug }, { parrafosDe }] = await Promise.all([
      import("@/lib/studies-aula"),
      import("@/lib/libros/cargar"),
    ]);
    const study = studyBySlug(params.slug);
    if (!study || !estudioTienePack(study.slug)) throw notFound();
    const parrafos = await parrafosDe(params.slug);
    if (parrafos.length === 0) throw notFound();
    return { study, parrafos };
  },
  head: ({ loaderData }) => {
    const study = loaderData?.study;
    return pageHead({
      path: `/estudios/${study?.slug ?? ""}`,
      title: tituloEstudio(study?.ref ?? "Estudio"),
      description: study ? `${study.ref}. ${study.ver}` : undefined,
      detalle: study?.passage,
      index: !study || estudioTienePack(study.slug),
    });
  },
});

function StudyPage() {
  const { study, parrafos } = Route.useLoaderData();
  const cita = useRouterState({ select: (s) => s.location.searchStr });
  const llegada = new URLSearchParams(cita.startsWith("?") ? cita.slice(1) : cita).get("cita");
  const pasaje = llegada || study.ref;
  const fechas = fechasArticulo({
    clase: "estudio",
    slug: study.slug,
    pack: true,
  });

  return (
    <Aula
      oir={textoParaOir([study.title, study.ref, ...parrafos])}
      escritura={study.passage}
      voz={study.voz}
      salir="/estudios"
      titulo={study.title}
      etiqueta={`Oír ${study.title}`}
      pasaje={study.ref}
      slug={study.slug}
    >
      <ArticleJsonLd
        headline={tituloEstudio(study.ref)}
        path={`/estudios/${study.slug}`}
        published={fechas?.published}
        modified={fechas?.modified}
      />
      <p className="font-sans text-xs tracking-[0.2em] text-gold uppercase">
        Aula · {etiquetaEstudio(study.slug)} · {pasaje}
      </p>
      {llegada ? <p className="mt-3 leading-relaxed">Llegaste desde {llegada}. El aula abre ese pasaje, no otra portada.</p> : null}
      {fechas ? <p className="mt-3 font-sans text-sm text-ink-soft">{lineaFechas(fechas)}</p> : null}
      <h1 className="mt-2 text-4xl md:text-5xl">{study.title}</h1>
      <p className="mt-6">
        <LeerCapitulo ref={pasaje} desde={`/estudios/${study.slug}`} />
      </p>
      <div className="mt-10 space-y-6">
        {parrafos.map((para, i) => (
          <p key={i} className="text-lg leading-relaxed">
            <ConLemas>{para}</ConLemas>
          </p>
        ))}
      </div>
      <CierreAula
        kind="estudio"
        pasaje={study.ref}
        slug={study.slug}
        desde={`/estudios/${study.slug}`}
      />
    </Aula>
  );
}
