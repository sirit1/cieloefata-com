import { Link, useRouterState } from "@tanstack/react-router";
import { Cite } from "@/components/cite";
import { ConLemas } from "@/components/lema";
import { Seal } from "@/components/seal";
import { Sostener } from "@/components/sostener";
import { school } from "@/lib/content";

const primaria = [
  { to: "/canon", label: "Canon" },
  { to: "/estudios", label: "Estudios" },
  { to: "/tratados", label: "Tratados" },
  { to: "/metodo", label: "Cómo leer" },
  { to: "/cuaderno", label: "Cuaderno" },
  { to: "/obras", label: "Obras" },
] as const;

const secundaria = [
  { to: "/nosotros", label: "Nosotros" },
  { to: "/camino", label: "El camino" },
  { to: "/objeciones", label: "Objeciones" },
  { to: "/palabra", label: "Palabra" },
  { to: "/guias", label: "Guías" },
  { to: "/sello", label: "El sello" },
  { to: "/sostener", label: "Sostener" },
] as const;

export function SiteFooter() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <footer className="mt-16">
      {pathname === "/sostener" ? null : <Sostener />}
      <div className="border-t border-rule/50 bg-parchment text-ink">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-10 md:flex-row md:items-end md:justify-between">
          <div className="flex gap-4">
            <Link to="/sello" className="shrink-0" aria-label="El sello de Cielo Efata">
              <Seal size={96} className="h-24 w-24" />
            </Link>
            <div>
              <p className="font-serif text-lg text-ink">{school.name}</p>
              <p className="kicker mt-2">{school.tagline}</p>
              <p className="prosa mt-4 max-w-md text-ink-soft">
                <ConLemas>{school.colophon}</ConLemas>
              </p>
              <p className="mt-3 font-sans text-sm tracking-wide text-gold">
                <Cite>{school.colophonRef}</Cite>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <nav className="flex flex-wrap gap-4 font-sans text-sm" aria-label="Pie de la escuela">
              {primaria.map((item) => (
                <Link key={item.to} to={item.to} className="hover:text-gold">
                  {item.label}
                </Link>
              ))}
            </nav>
            <nav className="flex flex-wrap gap-4 font-sans text-sm text-ink-soft" aria-label="La casa">
              {secundaria.map((item) => (
                <Link key={item.to} to={item.to} className="hover:text-gold">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
