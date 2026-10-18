import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Seal } from "@/components/seal";
import { SostenerBoton } from "@/components/sostener";
import { TemaBoton } from "@/components/tema-boton";
import { school } from "@/lib/content";

const nav = [
  { to: "/estudios", label: "Estudios" },
  { to: "/tratados", label: "Tratados" },
  { to: "/estudios-y-tratados", label: "Cuál leer" },
  { to: "/pasajes", label: "Pasajes" },
  { to: "/obras", label: "Libros" },
  { to: "/metodo", label: "Cómo leer" },
  { to: "/lo-que-creemos", label: "Creemos" },
  { to: "/canon", label: "Canon" },
  { to: "/cuaderno", label: "Cuaderno" },
] as const;

/** Caja de búsqueda: va a /buscar?q=… (la página filtra al instante). */
function Buscador({ id, className, onDone }: { id: string; className?: string; onDone?: () => void }) {
  const navigate = useNavigate();
  return (
    <form
      role="search"
      aria-label="Buscar en Cielo Efata"
      className={`buscador-cabecera relative ${className ?? ""}`}
      onSubmit={(e) => {
        e.preventDefault();
        const q = String(new FormData(e.currentTarget).get("q") ?? "").trim();
        void navigate({ to: "/buscar", search: q ? { q } : {} });
        onDone?.();
      }}
    >
      <label htmlFor={id} className="sr-only">
        Buscar pasaje o tema
      </label>
      <Search
        size={16}
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-2.5 -translate-y-1/2 text-gold-soft"
      />
      <input id={id} name="q" type="search" placeholder="Pasaje o tema…" autoComplete="off" enterKeyHint="search" />
    </form>
  );
}

function isCurrent(pathname: string, to: string) {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sobre-navy sticky top-0 z-40 border-b border-gold-soft/35 bg-navy text-parchment shadow-[0_6px_24px_-18px_rgba(0,0,0,0.8)]">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-gold-soft focus:px-3 focus:py-2 focus:text-ink"
        onClick={(e) => {
          const t = document.getElementById("contenido");
          if (!t) return;
          e.preventDefault();
          t.focus();
        }}
      >
        Saltar al contenido
      </a>
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2.5">
        <Link
          to="/"
          className="flex min-h-11 min-w-0 items-center gap-3 text-parchment"
          onClick={() => setOpen(false)}
        >
          <Seal variant="onNavy" size={44} priority className="h-11 w-11 shrink-0" />
          <span className="wordmark text-base leading-none">Cielo Efata</span>
        </Link>
        <nav
          className="ml-auto hidden min-w-0 flex-1 items-center justify-end gap-0.5 lg:flex"
          aria-label="Escuela Cielo Efata"
        >
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              aria-current={isCurrent(pathname, item.to) ? "page" : undefined}
              className="relative inline-flex min-h-11 items-center px-2.5 font-sans text-xs tracking-[0.14em] text-parchment uppercase after:absolute after:inset-x-2.5 after:bottom-2 after:h-px after:origin-left after:scale-x-0 after:bg-gold-soft after:transition-transform hover:text-gold-soft hover:after:scale-x-100 aria-[current=page]:text-gold-soft aria-[current=page]:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
          <Buscador id="buscar-cabecera" className="ml-2 hidden xl:block" />
          <Link to="/buscar" className="icono-btn xl:hidden" aria-label="Buscar">
            <Search size={19} aria-hidden />
          </Link>
          <TemaBoton />
          <SostenerBoton
            className={`ml-1 inline-flex min-h-11 items-center border border-gold-soft px-3 font-sans text-xs tracking-[0.14em] uppercase hover:bg-gold-soft hover:text-navy ${
              pathname === "/sostener" ? "bg-gold-soft text-navy" : "text-parchment"
            }`}
          />
        </nav>
        <div className="ml-auto flex items-center lg:hidden">
          <Link to="/buscar" className="icono-btn" aria-label="Buscar" onClick={() => setOpen(false)}>
            <Search size={20} aria-hidden />
          </Link>
          <TemaBoton />
        </div>
        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center border border-gold-soft text-parchment lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="menu-escuela"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
        </button>
      </div>
      {open ? (
        <nav id="menu-escuela" className="border-t border-gold-soft/40 bg-navy px-4 py-4 font-sans lg:hidden">
          <Buscador id="buscar-menu" className="mx-auto mb-4 max-w-5xl [&_input]:w-full [&_input]:min-h-11 [&_input:focus-visible]:w-full" onDone={() => setOpen(false)} />
          <ul className="mx-auto max-w-5xl">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  aria-current={isCurrent(pathname, item.to) ? "page" : undefined}
                  className="flex min-h-11 items-center tracking-wide text-parchment hover:text-gold-soft aria-[current=page]:text-gold-soft"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <SostenerBoton
                className="flex min-h-11 items-center tracking-wide text-gold-soft"
                onClick={() => setOpen(false)}
              />
            </li>
            <li>
              <Link
                to="/nosotros"
                className="flex min-h-11 items-center tracking-wide text-parchment hover:text-gold-soft"
                onClick={() => setOpen(false)}
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                to="/camino"
                className="flex min-h-11 items-center tracking-wide text-parchment hover:text-gold-soft"
                onClick={() => setOpen(false)}
              >
                El camino
              </Link>
            </li>
          </ul>
          <p className="mx-auto mt-4 max-w-5xl font-serif text-sm text-parchment/80">
            {school.tagline}
          </p>
        </nav>
      ) : null}
    </header>
  );
}
