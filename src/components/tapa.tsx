import { tapaPath, type Obra } from "@/lib/content";

const SIZE = {
  lg: "w-full max-w-xs",
  pdp: "w-full max-w-xs",
  sm: "w-[7.75rem] shrink-0 sm:w-[8.75rem]",
  lista: "w-[7.75rem] shrink-0 sm:w-[8.75rem]",
  umbral: "w-[9.25rem] shrink-0 sm:w-[11rem]",
  rejilla: "w-[7.25rem]",
} as const;

export function tapaSrc(slug: string) {
  return tapaPath(slug);
}

type TapaProps = {
  obra: Pick<Obra, "slug" | "title">;
  size?: keyof typeof SIZE;
  className?: string;
  priority?: boolean;
};

export function Tapa({ obra, size = "lg", className = "", priority = false }: TapaProps) {
  return (
    <img
      src={tapaPath(obra.slug)}
      alt={`Tapa de ${obra.title}, Dr. Alejandro Sirit. Editorial Cielo Efata.`}
      width={900}
      height={1440}
      decoding="async"
      fetchPriority={priority ? "high" : "low"}
      loading={priority ? "eager" : "lazy"}
      className={`h-auto border border-gold-soft/40 bg-navy object-cover shadow-[0_12px_28px_-18px_rgba(26,35,64,0.55)] ${SIZE[size]} ${className}`}
    />
  );
}
