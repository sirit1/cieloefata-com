import { Cite } from "@/components/cite";

export type Dato = {
  n: string;
  k: string;
  line: string;
  ref: string;
};

export function Datos({
  items,
  onNavy = false,
}: {
  items: readonly Dato[];
  onNavy?: boolean;
}) {
  const name = onNavy ? "text-parchment" : "text-ink";
  const mute = onNavy ? "text-parchment/80" : "text-ink-soft";
  const num = onNavy ? "text-gold-soft" : "text-gold";
  const rule = onNavy ? "border-gold-soft/50" : "border-rule";

  return (
    <dl className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((m) => (
        <div key={m.k} className={`border-t ${rule} pt-5`}>
          <dt className={`dato-n font-serif text-5xl leading-none md:text-6xl ${num}`}>{m.n}</dt>
          <dt className={`mt-4 font-serif text-xl ${name}`}>{m.k}</dt>
          <dd className={`mt-2 max-w-[22em] leading-relaxed ${mute}`}>{m.line}</dd>
          <dd className={`mt-2 font-sans text-sm tracking-wide ${num}`}>
            <Cite>{m.ref}</Cite>
          </dd>
        </div>
      ))}
    </dl>
  );
}
