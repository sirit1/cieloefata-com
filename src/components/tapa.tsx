import { Seal } from "@/components/seal";
import { ROMANO, type Obra } from "@/lib/content";

/** Cubiertas reales, solo si el archivo existe en /public. Hoy no hay tapas KDP. */
export const TAPAS: Partial<Record<string, string>> = {
  // "efata": "/covers/efata.webp",
};

export function tapaSrc(slug: string): string | undefined {
  return TAPAS[slug];
}

export function Tapa({
  obra,
  size = "lg",
}: {
  obra: Obra;
  size?: "lg" | "sm";
}) {
  const src = tapaSrc(obra.slug);
  const alto = size === "lg" ? "max-w-sm" : "max-w-[9.5rem]";
  const titulo = size === "lg" ? "text-3xl md:text-4xl" : "text-lg";

  if (src) {
    return (
      <img
        src={src}
        alt={`Cubierta de ${obra.title}, Dr. Alejandro Sirit`}
        width={size === "lg" ? 360 : 152}
        height={size === "lg" ? 540 : 228}
        className={`${alto} w-full border border-gold-soft/40 object-cover`}
      />
    );
  }

  return (
    <div
      className={`${alto} relative flex aspect-[3/4] w-full flex-col justify-between border border-gold-soft/50 bg-navy px-5 py-6 text-parchment md:px-6`}
      role="img"
      aria-label={`Cubierta tipográfica de ${obra.title}, con el sello de Cielo Efata`}
    >
      <Seal variant="onNavy" size={size === "lg" ? 64 : 40} decorative className="opacity-90" />
      <div>
        <p className="font-sans text-[0.65rem] tracking-[0.2em] text-gold-soft uppercase">
          Serie Cielo Efata · {ROMANO[obra.lectura]}
        </p>
        <p className={`mt-3 font-serif leading-tight ${titulo}`}>{obra.title}</p>
        <p className="mt-4 font-sans text-sm tracking-wide text-gold-soft">Dr. Alejandro Sirit</p>
      </div>
    </div>
  );
}
