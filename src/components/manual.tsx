import { Link } from "@tanstack/react-router";

export const MANUALES = [
  { to: "/metodo/manual", label: "Manual fundacional del Método V.E.R.D.A.D." },
  { to: "/crisol/manual", label: "Manual fundacional del Método C.R.I.S.O.L." },
  { to: "/probad", label: "Manual fundacional del Método P.R.O.B.A.D." },
] as const;

export function ManualPage({
  kicker,
  title,
  subtitulo,
  html,
  hermanos,
}: {
  kicker: string;
  title: string;
  subtitulo: string;
  html: string;
  hermanos: readonly { to: string; label: string }[];
}) {
  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <p className="font-sans text-xs tracking-[0.2em] text-gold uppercase">{kicker}</p>
      <h1 className="mt-2 font-serif text-4xl md:text-5xl">{title}</h1>
      <p className="mt-3 font-serif text-xl italic text-ink-soft">{subtitulo}</p>
      <p className="mt-2 font-sans text-sm tracking-wide text-gold">
        Alejandro Sirit · Editorial Cielo Efata · 2026
      </p>
      <article className="manual mt-10" dangerouslySetInnerHTML={{ __html: html }} />
      <nav className="mt-14 border-t border-rule pt-6" aria-label="Los tres manuales">
        <p className="kicker">Los tres manuales de la casa</p>
        <ul className="mt-3 space-y-2">
          {hermanos.map((h) => (
            <li key={h.to}>
              <a href={h.to} className="text-link underline">
                {h.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          <Link to="/obras" className="text-link underline">
            Los libros de la Serie Cielo Efata
          </Link>
        </p>
      </nav>
    </main>
  );
}
