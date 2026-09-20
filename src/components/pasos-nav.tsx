import { VERDAD_PASOS } from "@/lib/verdad";

export function pasoId(d: string) {
  return `paso-${d}`;
}

export function PasosNav() {
  return (
    <nav aria-label="Cadena V.E.R.D.A.D." className="mt-8 flex flex-wrap items-center gap-2">
      {VERDAD_PASOS.map((step) => (
        <a
          key={step.d}
          href={`#${pasoId(step.d)}`}
          className="inline-flex min-h-11 min-w-11 items-center justify-center bg-navy font-sans text-sm font-semibold tracking-[0.12em] text-parchment hover:bg-gold-soft hover:text-ink"
          title={`${step.name}: ${step.verbo}`}
        >
          {step.letter}
        </a>
      ))}
    </nav>
  );
}
