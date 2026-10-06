import { createFileRoute, Link } from "@tanstack/react-router";
import { LibroJsonLd } from "@/components/json-ld";
import { BtnArrow } from "@/components/motif";
import { Prosa } from "@/components/prosa";
import { Volver } from "@/components/volver";
import { PARACLITO } from "@/lib/paraclito";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/obras/el-paraclito-eterno")({
  component: ParaclitoPage,
  head: () =>
    pageHead({
      path: `/obras/${PARACLITO.slug}`,
      title: PARACLITO.seoTitle,
      description: PARACLITO.seoDescription,
      exact: true,
    }),
});

const RELACIONADOS = [
  { to: "/estudios/galatas-5", label: "El fruto del Espíritu · Gálatas 5:22–23" },
  { to: "/estudios/1-corintios-12-14", label: "Los dones del Espíritu · 1 Corintios 12–14" },
  { to: "/estudios/romanos-8-17", label: "Herederos y padecimiento · Romanos 8:17" },
  { to: "/tratados/espiritu-de-poder", label: "Espíritu de poder · 2 Timoteo 1:7" },
  { to: "/obras/efata", label: "Éfata · Marcos 7:31–37" },
] as const;

function ParaclitoPage() {
  const p = PARACLITO;
  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <LibroJsonLd title={p.title} slug={p.slug} description={p.seoDescription} />
      <Volver />
      <p className="font-sans text-xs tracking-[0.2em] text-gold uppercase">
        Estudio de la Serie Cielo Efata
      </p>
      <h1 className="mt-3 font-serif text-4xl md:text-5xl">{p.title}</h1>
      <p className="mt-2 font-sans text-sm tracking-wide text-gold">{p.subtitulo}</p>
      <p className="kicker mt-4">Alejandro Sirit · Editorial Cielo Efata</p>
      <p className="mt-2 font-sans text-sm tracking-wide text-gold">Capítulos ancla: {p.pasaje}</p>

      <Prosa texto={p.tesis} className="mt-10 text-xl leading-relaxed" />

      <h2 className="mt-12 font-serif text-3xl">Pórtico</h2>
      {p.portico.map((t) => (
        <Prosa key={t.slice(0, 40)} texto={t} />
      ))}

      <h2 className="mt-12 font-serif text-3xl">Cinco promesas en la mesa</h2>
      <p className="mt-4 leading-relaxed text-ink-soft">
        Juan 14 al 16 es un solo discurso de despedida, y en él el Espíritu aparece cinco veces,
        siempre en relación con Cristo y con los discípulos.
      </p>
      <ol className="mt-6 space-y-8">
        {p.promesas.map((m) => (
          <li key={m.ref}>
            <h3 className="font-serif text-2xl">{m.titulo}</h3>
            <blockquote className="verso mt-4">
              <em>{m.cita}</em> ({m.ref})
            </blockquote>
            <Prosa texto={m.glosa} className="mt-4 leading-relaxed" />
          </li>
        ))}
      </ol>

      <h2 className="mt-12 font-serif text-3xl">Si aún no crees</h2>
      <Prosa texto={p.siAunNoCrees} />

      <h2 className="mt-12 font-serif text-3xl">Cierre</h2>
      <Prosa texto={p.cierre} />

      <h2 className="mt-12 font-serif text-3xl">Para seguir leyendo</h2>
      <ul className="mt-5 space-y-3">
        {RELACIONADOS.map((r) => (
          <li key={r.to}>
            <a href={r.to} className="text-link underline">
              {r.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Link to="/obras" className="btn btn-gold">
          Los siete tomos
          <BtnArrow />
        </Link>
      </div>
    </main>
  );
}
