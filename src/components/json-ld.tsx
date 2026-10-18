import { AMAZON_AUTHOR } from "@/lib/amazon";
import { obras, tapaPath, type Obra } from "@/lib/content";
import { amazonDp } from "@/lib/amazon";
import { SERIE_NOMBRE } from "@/lib/serie";
import {
  PERSONA_AUTOR,
  SITE_NAME,
  SITE_ORIGIN,
  camposLibro,
  canonicalUrl,
} from "@/lib/seo";
import { isoCaracas } from "@/lib/calendario";

function JsonLdScript({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Solo en la portada: una persona y un sitio. No se repite en el resto de páginas. */
export function HomeJsonLd() {
  return (
    <>
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Alejandro Sirit",
          url: PERSONA_AUTOR.url,
          sameAs: [AMAZON_AUTHOR],
        }}
      />
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE_NAME,
          url: `${SITE_ORIGIN}/`,
          inLanguage: "es",
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${SITE_ORIGIN}/buscar?q={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
          },
          publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            url: `${SITE_ORIGIN}/`,
          },
        }}
      />
    </>
  );
}

function serieRef() {
  return {
    "@type": "BookSeries",
    name: SERIE_NOMBRE,
    url: canonicalUrl("/serie"),
  };
}

/** Un ejemplar por formato publicado; sin precio (no hay precio vivo verificable). */
function formatosLd(obra: Obra) {
  if (obra.sinAmazon) return [];
  const out: Record<string, unknown>[] = [];
  if (obra.asinEbook) {
    out.push({
      "@type": "Book",
      name: obra.title,
      bookFormat: "https://schema.org/EBook",
      inLanguage: "es",
      url: amazonDp(obra.asinEbook),
    });
  }
  if (obra.asinPrint) {
    out.push({
      "@type": "Book",
      name: obra.title,
      bookFormat: "https://schema.org/Paperback",
      inLanguage: "es",
      ...(obra.isbnPrint ? { isbn: obra.isbnPrint } : {}),
      url: amazonDp(obra.asinPrint),
    });
  }
  return out;
}

export function SerieJsonLd() {
  const lista = [...obras].sort((a, b) => a.lectura - b.lectura);
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "BookSeries",
        name: SERIE_NOMBRE,
        url: canonicalUrl("/serie"),
        inLanguage: "es",
        author: { "@type": "Person", name: "Alejandro Sirit", url: PERSONA_AUTOR.url },
        publisher: { "@type": "Organization", name: "Editorial Cielo Efata" },
        hasPart: lista.map((o) => ({
          "@type": "Book",
          name: o.title,
          position: o.lectura,
          url: canonicalUrl(`/obras/${o.slug}`),
          image: canonicalUrl(tapaPath(o.slug)),
        })),
      }}
    />
  );
}

export function BookJsonLd({ slug }: { slug: string }) {
  const obra = obras.find((o) => o.slug === slug);
  if (!obra) return null;
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "Book",
        ...camposLibro(obra),
        image: canonicalUrl(tapaPath(obra.slug)),
        publisher: { "@type": "Organization", name: "Editorial Cielo Efata" },
        isPartOf: serieRef(),
        position: obra.lectura,
        ...(formatosLd(obra).length ? { workExample: formatosLd(obra) } : {}),
      }}
    />
  );
}

/** Libro fuera del catálogo principal (sin tapa ni ficha de Amazon conocidas). */
export function LibroJsonLd({
  title,
  slug,
  description,
}: {
  title: string;
  slug: string;
  description: string;
}) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "Book",
        ...camposLibro({ title, slug }),
        description,
        publisher: { "@type": "Organization", name: "Editorial Cielo Efata" },
      }}
    />
  );
}

export function ArticleJsonLd({
  headline,
  path,
  published,
  modified,
}: {
  headline: string;
  path: string;
  published?: string;
  modified?: string;
}) {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline,
        ...(published ? { datePublished: isoCaracas(published) } : {}),
        ...(modified ? { dateModified: isoCaracas(modified) } : {}),
        author: { "@type": "Person", name: "Alejandro Sirit", url: PERSONA_AUTOR.url },
        publisher: { "@type": "Organization", name: SITE_NAME },
        url: canonicalUrl(path),
        mainEntityOfPage: canonicalUrl(path),
        inLanguage: "es",
      }}
    />
  );
}

export function CorpusJsonLd() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Libros · Editorial Cielo Efata",
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        numberOfItems: obras.length,
        itemListElement: obras.map((obra) => ({
          "@type": "ListItem",
          position: obra.lectura,
          url: canonicalUrl(`/obras/${obra.slug}`),
          item: {
            "@type": "Book",
            name: obra.title,
            image: canonicalUrl(tapaPath(obra.slug)),
            author: { "@type": "Person", name: "Alejandro Sirit" },
          },
        })),
      }}
    />
  );
}

/** FAQPage: solo con las preguntas y respuestas que la página muestra. */
export function FaqJsonLd({ data }: { data: unknown }) {
  return <JsonLdScript data={data} />;
}
