import { ConLemas } from "@/components/lema";
import type { Profundo } from "@/lib/escuela";

export function ContextoHistorico({ p }: { p: Profundo }) {
  const filas = [
    { k: "Quién escribe", v: p.autor },
    { k: "A quién", v: p.audiencia },
    { k: "Dónde y cuándo", v: [p.lugar, p.epoca].filter(Boolean).join(" · ") },
    { k: "Qué pasaba en ese sitio", v: p.situacion },
    { k: "Qué quería el autor", v: p.proposito },
    { k: "Género", v: p.genero },
  ].filter((f) => f.v);

  return (
    <section className="mt-12">
      <h2 className="font-serif text-3xl">Contexto histórico y literario</h2>
      <p className="mt-4 text-lg leading-relaxed">
        Un texto sin sitio es un oráculo fabricado. Antes de oír las palabras se pregunta quién
        escribe, a quién, dónde, qué ardía en esa calle y para qué se tomó la pluma. El Espíritu no
        borra esa mano: la usa.
      </p>
      <dl className="mt-8 grid gap-8 sm:grid-cols-2">
        {filas.map((f) => (
          <div key={f.k}>
            <dt className="kicker">{f.k}</dt>
            <dd className="mt-2 leading-relaxed">
              <ConLemas>{f.v}</ConLemas>
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-8 text-lg leading-relaxed">
        <ConLemas>{p.literario}</ConLemas>
      </p>
    </section>
  );
}
