import { createFileRoute, notFound } from "@tanstack/react-router";
import { Aula } from "@/components/aula";
import { CierreAula } from "@/components/cierre-aula";
import { Refs } from "@/components/cite";
import { ConLemas } from "@/components/lema";
import { LeerCapitulo } from "@/components/leer-capitulo";
import { textoParaOir } from "@/lib/escuela";
import { tratadoDe } from "@/lib/tratados";

export const Route = createFileRoute("/tratados/$slug")({
  component: TratadoPage,
  loader: ({ params }) => {
    const t = tratadoDe(params.slug);
    if (!t) throw notFound();
    return { tratado: t };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.tratado.title ?? "Tratado"} · Cielo Efata` }],
  }),
});

function TratadoPage() {
  const { tratado } = Route.useLoaderData();
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
      <p className="font-sans text-xs tracking-[0.2em] text-gold uppercase">
        Tratado · {tratado.kicker} · {tratado.ref}
      </p>
      <h1 className="mt-2 font-serif text-4xl md:text-5xl">{tratado.title}</h1>
      <p className="mt-6">
        <LeerCapitulo ref={tratado.ref} />
      </p>
      <div className="mt-10 space-y-6">
        {tratado.cuerpo.map((p) => (
            <p key={p.slice(0, 28)} className="text-lg leading-relaxed">
              <ConLemas>{p}</ConLemas>
            </p>
        ))}
      </div>
      <Refs refs="2 P. 3:16 · Neh. 8:8" />
      <CierreAula pasaje={tratado.ref} slug={tratado.slug} acto={tratado.cuerpo.at(-1)} />
    </Aula>
  );
}
