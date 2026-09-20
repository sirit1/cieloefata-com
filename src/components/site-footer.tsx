import { Link } from "@tanstack/react-router";
import { Cite } from "@/components/cite";
import { ConLemas } from "@/components/lema";
import { Seal } from "@/components/seal";
import { Sostener } from "@/components/sostener";
import { school } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="mt-16">
      <Sostener />
      <div className="border-t border-rule/50 bg-parchment text-ink">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-10 md:flex-row md:items-end md:justify-between">
          <div className="flex gap-4">
            <Link to="/sello" className="shrink-0" aria-label="El sello de Cielo Efata">
              <Seal size={96} decorative className="h-24 w-24" />
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
          <nav className="flex flex-wrap gap-4 font-sans text-sm" aria-label="Pie de la escuela">
            <Link to="/canon" className="hover:text-gold">
              Canon
            </Link>
            <Link to="/estudios" className="hover:text-gold">
              Estudios
            </Link>
            <Link to="/tratados" className="hover:text-gold">
              Tratados
            </Link>
            <Link to="/metodo" className="hover:text-gold">
              Cómo leer
            </Link>
            <Link to="/cuaderno" search={{ ref: "" }} className="hover:text-gold">
              Cuaderno
            </Link>
            <Link to="/sello" className="hover:text-gold">
              El sello
            </Link>
            <Link to="/obras" className="hover:text-gold">
              Obras
            </Link>
            <a href="#sostener" className="hover:text-gold">
              Sostener
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}