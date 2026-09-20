import { ConLemas } from "@/components/lema";
import type { LabExtra } from "@/lib/escuela";

export function LabYunque({ lab }: { lab: LabExtra }) {
  const bloques = [
    lab.analogiaAntecedente,
    lab.analogiaPlena,
    lab.status,
    lab.distingo,
    lab.fontes,
    lab.reductio,
    lab.acto,
  ].filter(Boolean);

  if (bloques.length === 0) return null;

  return (
    <section className="mt-14 border-t border-rule pt-10">
      <h2 className="font-serif text-3xl">El yunque</h2>
      {bloques.map((p) => (
        <p key={p.slice(0, 40)} className="mt-4 text-lg leading-relaxed">
          <ConLemas>{p}</ConLemas>
        </p>
      ))}
    </section>
  );
}
