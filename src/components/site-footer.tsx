import { Link, useRouterState } from "@tanstack/react-router";
import { Cite } from "@/components/cite";
import { ConLemas } from "@/components/lema";
import { Seal } from "@/components/seal";
import { Sostener } from "@/components/sostener";
import { school } from "@/lib/content";

const columnas = [
  {
    titulo: "Estudiar",
    items: [
      { to: "/estudios", label: "Estudios" },
      { to: "/tratados", label: "Tratados" },
      { to: "/pasajes", label: "Explorar por pasaje" },
      { to: "/preguntas", label: "¿Qué dice la Biblia sobre…?" },
      { to: "/versiculo", label: "Versículos clave" },
      { to: "/objeciones", label: "Objeciones" },
      { to: "/articulos", label: "Artículos" },
    ],
  },
  {
    titulo: "Aprender a leer",
    items: [
      { to: "/metodo", label: "Cómo leer" },
      { to: "/verdad", label: "Guía V.E.R.D.A.D. gratis" },
      { to: "/canon", label: "Canon" },
      { to: "/glosario", label: "Glosario" },
      { to: "/guias", label: "Guías" },
      { to: "/palabra", label: "Palabra" },
      { to: "/cuaderno", label: "Cuaderno" },
    ],
  },
  {
    titulo: "La casa",
    items: [
      { to: "/obras", label: "Libros" },
      { to: "/serie", label: "La serie, en orden" },
      { to: "/recibir", label: "Recibir el capítulo 1" },
      { to: "/nosotros", label: "Nosotros" },
      { to: "/lo-que-creemos", label: "Lo que creemos" },
      { to: "/camino", label: "El camino" },
      { to: "/sello", label: "El sello" },
      { to: "/sostener", label: "Sostener" },
      { to: "/buscar", label: "Buscar" },
      { to: "/privacidad", label: "Privacidad" },
    ],
  },
] as const;

export function SiteFooter() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <footer className="mt-16">
      {pathname === "/sostener" ? null : <Sostener />}
      <div className="border-t border-rule/50 bg-parchment text-ink">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex max-w-md gap-4">
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
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:gap-10">
            {columnas.map((col) => (
              <nav key={col.titulo} aria-label={col.titulo} className="font-sans text-sm">
                <p className="kicker">{col.titulo}</p>
                <ul className="mt-3 space-y-1">
                  {col.items.map((item) => (
                    <li key={item.to}>
                      <Link to={item.to} className="inline-flex min-h-8 items-center text-ink-soft hover:text-gold">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                  {col.titulo === "La casa" ? (
                    <li>
                      <a href="https://revelatio.app/" className="inline-flex min-h-8 items-center text-ink-soft hover:text-gold">
                        RevelatiO, el lector
                      </a>
                    </li>
                  ) : null}
                </ul>
              </nav>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
