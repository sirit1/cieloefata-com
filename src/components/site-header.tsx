import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Seal } from "@/components/seal";
import { school } from "@/lib/content";

const nav = [
  { to: "/canon", label: "Canon" },
  { to: "/estudios", label: "Estudios" },
  { to: "/tratados", label: "Tratados" },
  { to: "/metodo", label: "Cómo leer" },
  { to: "/cuaderno", label: "Cuaderno" },
  { to: "/obras", label: "Obras" },
] as const;

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
    <header className="sticky top-0 z-40 border-b border-gold-soft/35 bg-navy text-parchment">
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
      <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 py-3">
        <Link
          to="/"
          className="flex min-h-11 min-w-0 items-center gap-3 text-parchment"
          onClick={() => setOpen(false)}
        >
          <Seal variant="onNavy" size={44} decorative priority className="h-11 w-11 shrink-0" />
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
              search={item.to === "/cuaderno" ? { ref: "" } : undefined}
              aria-current={isCurrent(pathname, item.to) ? "page" : undefined}
              className="inline-flex min-h-11 items-center px-2.5 font-sans text-xs tracking-[0.14em] text-parchment uppercase hover:text-gold-soft aria-[current=page]:text-gold-soft"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="ml-auto inline-flex min-h-11 min-w-11 items-center justify-center border border-gold-soft text-parchment lg:hidden"
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
          <ul className="mx-auto max-w-5xl">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  search={item.to === "/cuaderno" ? { ref: "" } : undefined}
                  aria-current={isCurrent(pathname, item.to) ? "page" : undefined}
                  className="flex min-h-11 items-center tracking-wide text-parchment hover:text-gold-soft aria-[current=page]:text-gold-soft"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-4 max-w-5xl font-serif text-sm text-parchment/80">
            {school.tagline}
          </p>
        </nav>
      ) : null}
    </header>
  );
}
