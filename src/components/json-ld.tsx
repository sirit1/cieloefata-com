import { AMAZON_AUTHOR } from "@/lib/amazon";
import { obras, tapaPath } from "@/lib/content";
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
      }}
    />
  );
}

/** Libro fuera de los siete tomos (sin tapa ni ficha de Amazon conocidas). */
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
        name: "Siete tomos · Editorial Cielo Efata",
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
