type SealProps = {
  variant?: "mark" | "full" | "bw" | "onNavy";
  className?: string;
  size?: number;
  decorative?: boolean;
  priority?: boolean;
};

const src = {
  mark: "/brand/seal-colophon.webp",
  full: "/brand/seal-full.webp",
  bw: "/brand/seal-bw.webp",
  onNavy: "/brand/seal-header.webp",
} as const;

export function Seal({
  variant = "mark",
  className = "",
  size = 48,
  decorative = false,
  priority = false,
}: SealProps) {
  return (
    <img
      src={src[variant]}
      alt={decorative ? "" : "Sello Cielo Efata: el León, el Cordero y el Fuego"}
      width={size}
      height={size}
      className={`object-contain ${className}`}
      decoding="async"
      fetchPriority={priority ? "high" : "low"}
      loading={priority ? "eager" : "lazy"}
      {...(decorative ? { "aria-hidden": true } : {})}
    />
  );
}
