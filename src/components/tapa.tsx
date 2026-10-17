import { tapaPath, type Obra } from "@/lib/content";

const SIZE = {
  lg: "w-full max-w-xs",
  ficha: "w-full max-w-[13rem]",
  pdp: "w-full max-w-xs",
  sm: "w-[7.75rem] shrink-0 sm:w-[8.75rem]",
  lista: "w-[7.75rem] shrink-0 sm:w-[8.75rem]",
  umbral: "w-[9.25rem] shrink-0 sm:w-[11rem]",
  rejilla: "w-[7.25rem]",
} as const;

/** Miniaturas WebP de 360 px generadas desde public/TAPAS/*.jpg. */
const MINIATURAS = new Set([
  "bastate-mi-gracia",
  "cuando-el-cielo-se-cae",
  "de-una-misma-boca",
  "diakrisis",
  "efata",
  "el-altar-del-espejo",
  "el-siervo-no-tu",
  "nunca-tocaras-mi-fe",
  "portico-a-la-escritura",
]);

const SIZES: Record<keyof typeof SIZE, string> = {
  lg: "(min-width: 640px) 320px, 100vw",
  // Ficha del libro: la tapa nunca pasa de 13rem; con 200px el móvil toma la miniatura WebP.
  ficha: "200px",
  pdp: "(min-width: 640px) 320px, 100vw",
  sm: "140px",
  lista: "140px",
  umbral: "176px",
  rejilla: "116px",
};

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
      srcSet={
        MINIATURAS.has(obra.slug)
          ? `/TAPAS/${obra.slug}-360.webp 360w, ${tapaPath(obra.slug)} 900w`
          : undefined
      }
      sizes={MINIATURAS.has(obra.slug) ? SIZES[size] : undefined}
      alt={`Tapa de ${obra.title}, Alejandro Sirit. Editorial Cielo Efata.`}
      width={900}
      height={1350}
      decoding="async"
      fetchPriority={priority ? "high" : "low"}
      loading={priority ? "eager" : "lazy"}
      className={`h-auto border border-gold-soft/40 bg-navy object-cover shadow-[0_12px_28px_-18px_rgba(26,35,64,0.55)] ${SIZE[size]} ${className}`}
    />
  );
}
