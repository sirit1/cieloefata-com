import { createFileRoute, Link } from "@tanstack/react-router";
import { Cite } from "@/components/cite";
import { BtnArrow } from "@/components/motif";
import { Seal } from "@/components/seal";
import { Volver } from "@/components/volver";
import { NOSOTROS } from "@/lib/nosotros";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/nosotros")({
  component: NosotrosPage,
  head: () =>
    pageHead({
      path: "/nosotros",
      title: "Nosotros · Cielo Efata",
      description:
        "El Dr. Alejandro Sirit dirige Editorial Cielo Efata. RevelatiO es el lector compañero en revelatio.app. WhatsApp +58 424 167 4909.",
    }),
});

function NosotrosPage() {
  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <Volver />
      <Seal size={96} className="h-24 w-24" />
      <p className="kicker mt-6">{NOSOTROS.kicker}</p>
      <h1 className="mt-2 font-serif text-4xl">{NOSOTROS.title}</h1>

      <h2 className="mt-12 font-serif text-3xl">{NOSOTROS.escribe.title}</h2>
      {NOSOTROS.escribe.body.map((p) => (
        <p key={p.slice(0, 40)} className="mt-5 text-lg leading-relaxed">
          {p}
        </p>
      ))}

      <h2 className="mt-12 font-serif text-3xl">{NOSOTROS.editorial.title}</h2>
      <p className="mt-5 text-lg leading-relaxed">{NOSOTROS.editorial.body}</p>

      <h2 className="mt-12 font-serif text-3xl">{NOSOTROS.revelatio.title}</h2>
      <p className="mt-5 text-lg leading-relaxed">{NOSOTROS.revelatio.body}</p>

      <p className="mt-8 font-serif text-2xl tracking-wide">{NOSOTROS.phone}</p>
      <p className="mt-1 font-sans text-sm tracking-wide text-gold">{NOSOTROS.phoneNote}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a href={NOSOTROS.wa} rel="noopener noreferrer" target="_blank" className="btn btn-ink">
          Escribir por WhatsApp
          <BtnArrow />
        </a>
        <a href={NOSOTROS.tel} className="btn btn-ghost">
          Llamar
        </a>
      </div>
      <p className="mt-6 font-sans text-sm tracking-wide text-gold">
        <Cite>{NOSOTROS.refs}</Cite>
      </p>
      <p className="mt-10 font-sans text-sm">
        <Link to="/obras" className="text-link underline">
          Los siete tomos
        </Link>
        {" · "}
        <Link to="/sostener" className="text-link underline">
          Sostener este trabajo
        </Link>
        {" · "}
        <Link to="/camino" className="text-link underline">
          El camino
        </Link>
      </p>
    </main>
  );
}
