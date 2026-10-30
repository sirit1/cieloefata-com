import { createFileRoute, notFound } from "@tanstack/react-router";
import { Aula } from "@/components/aula";
import { CierreAula } from "@/components/cierre-aula";
import { CajaVerdad } from "@/components/caja-verdad";
import { ColofonTratado } from "@/components/colofon-tratado";
import { Refs } from "@/components/cite";
import { ConLemas } from "@/components/lema";
import { Interlineal } from "@/components/interlineal";
import { LeerCapitulo } from "@/components/leer-capitulo";
import { ArticleJsonLd } from "@/components/json-ld";
import { fechasArticulo, lineaFechas } from "@/lib/calendario";
import { etiquetaTratado } from "@/lib/etiquetas";
import { entradaTratado } from "@/lib/tratados";
import { pageHead, tituloTratado } from "@/lib/seo";
import { InsigniaTipo } from "@/components/insignia-tipo";
import { SelloVerdad } from "@/components/banner-verdad";
import { esTratado, tipoDe } from "@/lib/clasificacion";
import { ObraV2Cuerpo } from "@/components/obra-v2";

function textoParaOir(parts: string[]) {
  return parts.filter(Boolean).join("\n\n");
}

export const Route = createFileRoute("/tratados/$slug")({
  component: TratadoPage,
  loader: async ({ params }) => {
    const [{ tratadoDe }, { parrafosDe }, { obraV2 }] = await Promise.all([
      import("@/lib/tratados"),
      import("@/lib/libros/cargar"),
      import("@/lib/libros/v2"),
    ]);
    const t = tratadoDe(params.slug);
    if (!t) throw notFound();
    const v2 = await obraV2(params.slug);
    const cuerpo = v2 ? v2.texto : await parrafosDe(params.slug);
    if (cuerpo.length === 0) throw notFound();
    return { tratado: { ...t, cuerpo: [...cuerpo] }, v2 };
  },
  head: ({ loaderData }) => {
    const tratado = loaderData?.tratado;
    return pageHead({
      path: `/tratados/${tratado?.slug ?? ""}`,
      title: tituloTratado(tratado?.title ?? "Tratado", tipoDe(tratado?.slug ?? "", "tratado")),
      description: tratado?.blurb,
      detalle: tratado ? entradaTratado(tratado.cuerpo) : undefined,
      image: loaderData?.v2?.og ? loaderData.v2.og : tratado ? `/og/aulas/${tratado.slug}.jpg` : undefined,
    });
  },
});

function TratadoPage() {
  const { tratado, v2 } = Route.useLoaderData();
  const fechas = fechasArticulo({
    clase: "tratado",
    slug: tratado.slug,
    pack: tratado.pack,
    n: tratado.n,
  });
  const oir = textoParaOir([tratado.title, tratado.ref, ...tratado.cuerpo]);

  return (
    <Aula
      oir={oir}
      etiqueta={esTratado(tratado.slug) ? "Oír el tratado" : "Oír el estudio"}
      salir="/tratados"
      titulo={tratado.title}
      pasaje={tratado.ref}
      slug={tratado.slug}
    >
      <ArticleJsonLd
        headline={tituloTratado(tratado.title, tipoDe(tratado.slug, "tratado"))}
        path={`/tratados/${tratado.slug}`}
        published={fechas?.published}
        modified={fechas?.modified}
      />
      <p className="font-sans text-xs tracking-[0.2em] text-gold uppercase">
        {etiquetaTratado(tratado.slug)} · {tratado.kicker} · {tratado.ref}
      </p>
      {fechas ? <p className="mt-3 font-sans text-sm text-ink-soft">{lineaFechas(fechas)}</p> : null}
      <h1 className="mt-2 font-serif text-4xl md:text-5xl">{tratado.title}</h1>
      <InsigniaTipo slug={tratado.slug} seccion="tratado" className="mt-3" />
      <SelloVerdad clave={tratado.ref} />
      <p className="mt-6">
        <LeerCapitulo ref={tratado.ref} desde={`/tratados/${tratado.slug}`} />
      </p>
      <Interlineal slug={tratado.slug} />
      <CajaVerdad pasaje={tratado.ref} desde={`/tratados/${tratado.slug}`} kind={tipoDe(tratado.slug, "tratado")} />
      {v2 ? (
        <ObraV2Cuerpo obra={v2} tipo={esTratado(tratado.slug) ? "Tratado" : "Estudio"} />
      ) : (
      <div className="mt-10 space-y-6">
        {tratado.cuerpo.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed">
              <ConLemas>{p}</ConLemas>
            </p>
        ))}
      </div>
      )}
      <ColofonTratado />
      <Refs refs="2 P. 3:16 · Neh. 8:8" />
      <CierreAula
        kind="tratado"
        pasaje={tratado.ref}
        slug={tratado.slug}
        desde={`/tratados/${tratado.slug}`}
      />
    </Aula>
  );
}
