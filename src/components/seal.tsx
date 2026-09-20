type SealProps = {
  variant?: "mark" | "full" | "bw" | "onNavy";
  className?: string;
  size?: number;
  decorative?: boolean;
};

const src = {
  mark: "/brand/seal-mark.png",
  full: "/brand/seal-full.png",
  bw: "/brand/seal-bw-on-navy.png",
  onNavy: "/brand/seal-on-navy.png",
} as const;

export function Seal({ variant = "mark", className = "", size = 48, decorative = false }: SealProps) {
  return (
    <img
      src={src[variant]}
      alt={decorative ? "" : "Sello Cielo Efata: el León, el Cordero y el Fuego"}
      width={size}
      height={size}
      className={`object-contain ${className}`}
      {...(decorative ? { "aria-hidden": true } : {})}
    />
  );
}
