import { useRouterState } from "@tanstack/react-router";
import { fraseSirit } from "@/lib/verdad-guia";

/** Franja del método en todo el sitio (se oculta en /verdad, que ya es la página del método). */
export function BannerVerdad() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  if (path.startsWith("/verdad")) return null;
  return (
    <a
      href="/verdad#recibir"
      className="block bg-[#B8862B] px-4 py-1.5 text-center font-sans text-sm text-[#1A2340] hover:underline"
    >
      <strong>La Biblia no se lee, se estudia</strong>
      <span className="hidden sm:inline"> · Método V.E.R.D.A.D.</span> · <span className="underline">Guía gratis</span>
    </a>
  );
}

/** Cabecera del método en cada estudio y tratado: insignia V.E.R.D.A.D. y una frase de Alejandro Sirit. */
export function SelloVerdad({ clave }: { clave: string }) {
  return (
    <p className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
      <a
        href="/verdad"
        className="inline-flex min-h-8 items-center bg-[#1A2340] px-2.5 font-sans text-xs font-semibold tracking-[0.16em] text-[#F4EEE1] uppercase"
      >
        Método V.E.R.D.A.D.
      </a>
      <span className="font-serif text-lg text-ink-soft italic">«{fraseSirit(clave)}»</span>
    </p>
  );
}
