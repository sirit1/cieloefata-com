import { createFileRoute, notFound } from "@tanstack/react-router";
import { Aula } from "@/components/aula";
import { CierreAula } from "@/components/cierre-aula";
import { Refs } from "@/components/cite";
import { ConLemas } from "@/components/lema";
import { LeerCapitulo } from "@/components/leer-capitulo";
import { ArticleJsonLd } from "@/components/json-ld";
import { fechasDePack, lineaFechas } from "@/lib/calendario";
import { tratadoTienePack } from "@/lib/catalogo";
import { pageHead, tituloTratado } from "@/lib/seo";

function textoParaOir(parts: string[]) {
  return parts.filter(Boolean).join("\n\n");
}

export const Route = createFileRoute("/tratados/$slug")({
  component: TratadoPage,
  loader: async ({ params }) => {
    const { tratadoDe } = await import("@/lib/tratados");
    const t = tratadoDe(params.slug);
    if (!t) throw notFound();
    return { tratado: t };
  },
  head: ({ loaderData }) => {
    const tratado = loaderData?.tratado;
    return pageHead({
      path: `/tratados/${tratado?.slug ?? ""}`,
      title: tituloTratado(tratado?.title ?? "Tratado"),
      description: tratado?.blurb,
      detalle: tratado?.cuerpo[0],
      index: !tratado || tratadoTienePack(tratado.slug),
    });
  },
});

function TratadoPage() {
  const { tratado } = Route.useLoaderData();
  const fechas = tratadoTienePack(tratado.slug) ? fechasDePack(tratado.slug, "tratado") : null;
  const oir = textoParaOir([tratado.title, tratado.ref, ...tratado.cuerpo]);

  return (
    <Aula
      oir={oir}
      etiqueta="Oír el tratado"
      salir="/tratados"
      titulo={tratado.title}
      pasaje={tratado.ref}
      slug={tratado.slug}
    >
      <ArticleJsonLd
        headline={tituloTratado(tratado.title)}
        path={`/tratados/${tratado.slug}`}
        published={fechas?.published}
        modified={fechas?.modified}
      />
      <p className="font-sans text-xs tracking-[0.2em] text-gold uppercase">
        {tratado.pack ? "Tratado" : "Próximamente"}
        {tratado.n !== "—" ? ` · ${tratado.n}` : ""} · {tratado.kicker} · {tratado.ref}
      </p>
      {fechas ? <p className="mt-3 font-sans text-sm text-ink-soft">{lineaFechas(fechas)}</p> : null}
      <h1 className="mt-2 font-serif text-4xl md:text-5xl">{tratado.title}</h1>
      <p className="mt-6">
        <LeerCapitulo ref={tratado.ref} desde={`/tratados/${tratado.slug}`} />
      </p>
      <div className="mt-10 space-y-6">
        {tratado.cuerpo.map((p) => (
            <p key={p.slice(0, 28)} className="text-lg leading-relaxed">
              <ConLemas>{p}</ConLemas>
            </p>
        ))}
      </div>
      <Refs refs="2 P. 3:16 · Neh. 8:8" />
      <CierreAula pasaje={tratado.ref} slug={tratado.slug} acto={tratado.cuerpo.at(-1)} desde={`/tratados/${tratado.slug}`} />
    </Aula>
  );
}
