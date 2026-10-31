import { createFileRoute } from "@tanstack/react-router";
import { ObraV2Cuerpo } from "@/components/obra-v2";
import { ArticleJsonLd } from "@/components/json-ld";
import { Volver } from "@/components/volver";
import { pageHead } from "@/lib/seo";

const SLUG = "un-solo-dios-tres-personas";
const TITLE = "Un solo Dios, tres Personas: la Trinidad según la Escritura";
const SEO_TITLE = "Un solo Dios, tres Personas: la Trinidad según la Escritura | Alejandro Sirit";
const SEO_DESCRIPTION =
  "Hay un solo Dios, el Padre es Dios, el Hijo es Dios y el Espíritu Santo es Dios y Persona. La Trinidad según la Escritura, por Alejandro Sirit.";

const VERSION =
  "Estudio de la Serie Cielo Efata. Las citas bíblicas siguen la Reina-Valera 1960, cotejada versículo por versículo; las que van marcadas en las notas como de la Reina-Valera 1909 siguen esa versión, de dominio público. En la edición digital, la Escritura va en azul y las palabras dichas por Dios, en rojo.";

/** Misma fórmula que la página de El Paráclito Eterno. Sin «Utilizado con permiso». */
const COPYRIGHT =
  "© 2026 Dr. (h. c.) Alejandro Sirit. Todos los derechos reservados. Texto bíblico tomado de la versión Reina-Valera © 1960 Sociedades Bíblicas en América Latina; © renovado 1988 Sociedades Bíblicas Unidas. Reina-Valera 1960® es una marca registrada de Sociedades Bíblicas Unidas, y se puede usar solamente bajo licencia.";

export const Route = createFileRoute("/estudios/un-solo-dios-tres-personas")({
  component: TrinidadPage,
  loader: async () => ({ v2: await (await import("@/lib/libros/v2")).obraV2(SLUG) }),
  head: () =>
    pageHead({
      path: `/estudios/${SLUG}`,
      title: SEO_TITLE,
      description: SEO_DESCRIPTION,
      exact: true,
      image: `/tratados-v2/${SLUG}/og.jpg`,
      imageWidth: 1200,
      imageHeight: 630,
    }),
});

function TrinidadPage() {
  const { v2 } = Route.useLoaderData();
  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <ArticleJsonLd headline={TITLE} path={`/estudios/${SLUG}`} published="2026-10-31" modified="2026-10-31" />
      <Volver />
      <p className="font-sans text-xs tracking-[0.2em] text-gold uppercase">Estudio de la Serie Cielo Efata</p>
      <h1 className="mt-3 font-serif text-4xl md:text-5xl">{TITLE}</h1>
      <p className="kicker mt-4">Dr. (h. c.) Alejandro Sirit · Editorial Cielo Efata</p>
      <p className="mt-8 text-sm leading-relaxed text-ink-soft">{VERSION}</p>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{COPYRIGHT}</p>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">
        Reina-Valera 1909, dominio público. Definiciones de Strong tomadas de la edición electrónica de Open
        Scriptures (CC BY-SA), traducidas al castellano por el autor.
      </p>
      {v2 ? <ObraV2Cuerpo obra={v2} tipo="Estudio" /> : null}
    </main>
  );
}
