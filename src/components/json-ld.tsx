import { AMAZON_AUTHOR } from "@/lib/amazon";
import { obras, tapaPath } from "@/lib/content";
import { SITE_NAME, SITE_ORIGIN, canonicalUrl } from "@/lib/seo";

function JsonLdScript({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Editorial Cielo Efata",
        alternateName: SITE_NAME,
        url: `${SITE_ORIGIN}/`,
        founder: {
          "@type": "Person",
          name: "Dr. Alejandro Sirit",
          url: AMAZON_AUTHOR,
        },
        sameAs: [AMAZON_AUTHOR],
        description:
          "Escuela de estudio bíblico. La Escritura manda sobre el comentario. RevelatiO es el lector compañero en revelatio.app.",
      }}
    />
  );
}

export function BookJsonLd({ slug }: { slug: string }) {
  const obra = obras.find((o) => o.slug === slug);
  if (!obra) return null;
  const identifier = obra.isbnPrint
    ? { "@type": "PropertyValue", propertyID: "ISBN", value: obra.isbnPrint }
    : obra.asinEbook
      ? { "@type": "PropertyValue", propertyID: "ASIN", value: obra.asinEbook }
      : undefined;
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "Book",
        name: obra.title,
        author: { "@type": "Person", name: "Dr. Alejandro Sirit" },
        publisher: { "@type": "Organization", name: "Editorial Cielo Efata" },
        url: canonicalUrl(`/obras/${obra.slug}`),
        image: canonicalUrl(tapaPath(obra.slug)),
        description: obra.line,
        inLanguage: "es",
        ...(identifier ? { identifier } : {}),
        ...(obra.isbnPrint ? { isbn: obra.isbnPrint } : {}),
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
            author: { "@type": "Person", name: "Dr. Alejandro Sirit" },
          },
        })),
      }}
    />
  );
}
