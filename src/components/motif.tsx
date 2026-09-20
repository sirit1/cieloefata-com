export type MotifKind = "lion" | "lamb" | "flame";

const NAMES: Record<MotifKind, string> = {
  lion: "El León",
  lamb: "El Cordero",
  flame: "El Fuego",
};

/** Chevron lineal, 1px, del color del texto. Nunca un emblema. */
export function BtnArrow() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden className="shrink-0">
      <path d="M4 1.5 L9 6 L4 10.5" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

/** Marca de casa: tipografía, no recorte ni trazo deforme. */
export function Motif({
  kind,
  className = "",
  decorative = false,
}: {
  kind: MotifKind;
  size?: "sm" | "md" | "lg";
  variant?: "mark" | "wash";
  className?: string;
  decorative?: boolean;
}) {
  return (
    <span className={`kicker mb-3 block ${className}`} aria-hidden={decorative || undefined}>
      {NAMES[kind]}
    </span>
  );
}
