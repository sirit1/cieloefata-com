import { revelatioLeer } from "@/lib/leer";

export function LeerCapitulo({ ref, className = "" }: { ref: string; className?: string }) {
  const href = revelatioLeer(ref);
  if (!href) return null;
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      className={
        className || "btn btn-ghost"
      }
    >
      Abrir la Escritura
      <span className="sr-only"> en RevelatiO</span>
    </a>
  );
}
