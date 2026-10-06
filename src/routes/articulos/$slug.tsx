import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArticleJsonLd } from "@/components/json-ld";
import { Prosa } from "@/components/prosa";
import { Volver } from "@/components/volver";
import { articuloBySlug } from "@/lib/articulos";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/articulos/$slug")({
  component: ArticuloPage,
  loader: ({ params }) => {
    const articulo = articuloBySlug(params.slug);
    if (!articulo) throw notFound();
    return { articulo };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.articulo;
    return pageHead({
      path: `/articulos/${a?.slug ?? ""}`,
      title: a?.seoTitle,
      description: a?.seoDescription,
      exact: true,
    });
  },
});

function fechaLarga(yyyyMmDd: string) {
  const [y, m, d] = yyyyMmDd.split("-").map(Number);
  return new Intl.DateTimeFormat("es", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(Date.UTC(y ?? 2026, (m ?? 1) - 1, d ?? 1)),
  );
}

function ArticuloPage() {
  const { articulo: a } = Route.useLoaderData();
  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <ArticleJsonLd
        headline={a.title}
        path={`/articulos/${a.slug}`}
        published={a.published}
        modified={a.published}
      />
      <Volver />
      <p className="font-sans text-xs tracking-[0.2em] text-gold uppercase">Artículo · {a.pasaje}</p>
      <h1 className="mt-3 font-serif text-4xl md:text-5xl">{a.title}</h1>
      <p className="kicker mt-4">
        Alejandro Sirit · <time dateTime={a.published}>{fechaLarga(a.published)}</time>
      </p>

      {a.secciones.map((s, i) => (
        <section key={s.titulo ?? i}>
          {s.titulo ? <h2 className="mt-12 font-serif text-3xl">{s.titulo}</h2> : null}
          {s.parrafos.map((p) => (
            <Prosa key={p.slice(0, 40)} texto={p} />
          ))}
        </section>
      ))}

      <p className="mt-10 font-sans text-sm tracking-wide text-gold">Alejandro Sirit</p>

      <h2 className="mt-12 font-serif text-3xl">Para seguir leyendo</h2>
      <ul className="mt-5 space-y-3">
        {a.relacionados.map((r) => (
          <li key={r.to}>
            <a href={r.to} className="text-link underline">
              {r.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-10 font-sans text-sm">
        <Link to="/articulos" className="text-link underline">
          Todos los artículos
        </Link>
      </p>
    </main>
  );
}
