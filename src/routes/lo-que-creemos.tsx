import { createFileRoute, Link } from "@tanstack/react-router";
import { Refs } from "@/components/cite";
import { ConLemas } from "@/components/lema";
import {
  LO_QUE_CREEMOS,
  LO_QUE_CREEMOS_ESTADO,
  LO_QUE_CREEMOS_INTRO,
  LO_QUE_CREEMOS_PENDIENTE,
} from "@/lib/lo-que-creemos";
import { pageHead, tituloSeccion } from "@/lib/seo";

/**
 * BORRADOR. Mientras no se apruebe: noindex, fuera del menú, del pie y del sitemap.
 * Para publicarlo: cambiar LO_QUE_CREEMOS_ESTADO a "aprobado", quitar el aviso, enlazarlo desde
 * el pie y desde /nosotros, y añadirlo a public/sitemap.xml.
 */
export const Route = createFileRoute("/lo-que-creemos")({
  component: LoQueCreemos,
  head: () =>
    pageHead({
      path: "/lo-que-creemos",
      title: tituloSeccion("Lo que creemos"),
      description:
        "Lo que Cielo Efata confiesa y enseña: la Escritura, el Dios trino, el pecado y la salvación, la obediencia, el método y los textos que usamos.",
      index: false,
    }),
});

function LoQueCreemos() {
  const borrador = (LO_QUE_CREEMOS_ESTADO as string) !== "aprobado";
  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      {borrador ? (
        <p className="borrador-aviso" role="note">
          <strong>Borrador pendiente de aprobación.</strong> Esta página no está enlazada ni indexada.
          Cada frase sale de lo que el sitio ya publica; al final están las preguntas que solo el autor
          puede decidir.
        </p>
      ) : null}
      <p className="kicker mt-10">Declaración de fe</p>
      <h1 className="hero-titulo mt-3">Lo que creemos</h1>
      <p className="mt-6 text-lg leading-relaxed">{LO_QUE_CREEMOS_INTRO}</p>
      <div className="mt-12 space-y-12">
        {LO_QUE_CREEMOS.map((a) => (
          <section key={a.titulo} aria-labelledby={`a-${a.titulo.slice(0, 2)}`}>
            <h2 id={`a-${a.titulo.slice(0, 2)}`} className="seccion-titulo">
              {a.titulo}
            </h2>
            {a.parrafos.map((p) => (
              <p key={p.slice(0, 30)} className="mt-4 text-lg leading-relaxed">
                <ConLemas>{p}</ConLemas>
              </p>
            ))}
            <Refs refs={a.refs} />
          </section>
        ))}
      </div>
      {borrador ? (
        <section className="borrador-aviso mt-14" aria-label="Pendiente de decisión del autor">
          <p className="font-semibold">Pendiente de tu decisión</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {LO_QUE_CREEMOS_PENDIENTE.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </section>
      ) : null}
      <p className="mt-12 font-sans text-sm">
        <Link to="/metodo" className="text-link underline underline-offset-4">
          Cómo leemos: el método V.E.R.D.A.D.
        </Link>
      </p>
    </main>
  );
}
