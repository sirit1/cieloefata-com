import { Link, useNavigate } from "@tanstack/react-router";
import { Printer, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Compartir } from "@/components/compartir";
import { Seal } from "@/components/seal";
import { Escuchar } from "@/components/escuchar";
import { guardarProgreso, marcarAula, minutosDeLectura, progresoDe } from "@/lib/aula-abierta";
import { partirOir } from "@/lib/voice-split";

const FOCUSABLE = "a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex='-1'])";

export function Aula({
  children,
  oir,
  escritura,
  voz,
  etiqueta = "Oír el estudio",
  salir = "/estudios",
  titulo = "Aula",
  pasaje,
  slug,
}: {
  children: React.ReactNode;
  oir: string;
  escritura?: string;
  voz?: string;
  etiqueta?: string;
  salir?: "/estudios" | "/tratados";
  titulo?: string;
  pasaje: string;
  slug: string;
}) {
  const navigate = useNavigate();
  const root = useRef<HTMLDivElement>(null);
  const capa = useRef<HTMLDivElement>(null);
  const barra = useRef<HTMLSpanElement>(null);
  const [previo, setPrevio] = useState(0);
  const minutos = useMemo(() => minutosDeLectura(oir), [oir]);
  const partes = useMemo(
    () => partirOir({ titulo, ref: pasaje, escritura, voz, comentario: oir }),
    [titulo, pasaje, escritura, voz, oir],
  );

  useEffect(() => {
    marcarAula({
      kind: salir === "/tratados" ? "tratado" : "estudio",
      slug,
      pasaje,
      titulo,
    });
  }, [salir, slug, pasaje, titulo]);

  // Barra de progreso y «seguir donde ibas»: se guarda la fracción leída, nunca el texto.
  useEffect(() => {
    const el = capa.current;
    if (!el) return;
    setPrevio(progresoDe(slug));
    let raf = 0;
    let guardado = 0;
    function medir() {
      raf = 0;
      if (!el) return;
      const max = el.scrollHeight - el.clientHeight;
      const f = max > 0 ? el.scrollTop / max : 0;
      if (barra.current) barra.current.style.transform = `scaleX(${f})`;
      if (Math.abs(f - guardado) > 0.03) {
        guardado = f;
        guardarProgreso(slug, f);
      }
    }
    function onScroll() {
      if (!raf) raf = requestAnimationFrame(medir);
    }
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [slug]);

  function seguir() {
    const el = capa.current;
    if (!el) return;
    el.scrollTo({ top: previo * (el.scrollHeight - el.clientHeight), behavior: "smooth" });
    setPrevio(0);
  }

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const sheet = root.current;
    const before = document.activeElement as HTMLElement | null;
    sheet?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        void navigate({ to: salir });
        return;
      }
      if (e.key !== "Tab" || !sheet) return;
      const list = [...sheet.querySelectorAll<HTMLElement>(FOCUSABLE)].filter(
        (el) => !el.hasAttribute("disabled") && el.tabIndex !== -1,
      );
      if (list.length === 0) {
        e.preventDefault();
        sheet.focus();
        return;
      }
      const first = list[0];
      const last = list[list.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && (active === first || active === sheet)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
      before?.focus?.();
    };
  }, [navigate, salir]);

  return (
    <div
      ref={capa}
      data-aula
      className="fixed inset-0 z-50 overflow-y-auto overscroll-contain"
      style={{ background: "rgba(8, 17, 27, 0.88)" }}
    >
      <div
        ref={root}
        role="dialog"
        aria-modal="true"
        aria-label={titulo}
        tabIndex={-1}
        className="aula-hoja mx-auto w-full max-w-xl bg-parchment px-5 py-8 text-ink outline-none sm:my-10 sm:px-10 sm:shadow-[0_24px_80px_rgba(0,0,0,0.55)]"
      >
        <div className="progreso-lectura" aria-hidden>
          <span ref={barra} style={{ transform: "scaleX(0)" }} />
        </div>
        <nav
          aria-label="Cielo Efata"
          className="no-imprimir sticky top-0 z-10 -mx-5 -mt-8 mb-4 flex items-center gap-3 border-b border-rule/50 bg-parchment px-5 py-1 font-sans text-sm sm:-mx-10 sm:px-10"
        >
          <Link to="/" className="inline-flex min-h-11 items-center gap-2" aria-label="Cielo Efata, inicio">
            <Seal variant="mark" size={32} className="h-8 w-8" />
            <span className="wordmark text-sm">Cielo Efata</span>
          </Link>
          <Link to="/obras" className="ml-auto inline-flex min-h-11 items-center px-2 tracking-[0.14em] uppercase text-link">
            Libros
          </Link>
        </nav>
        <div className="no-imprimir mb-6 flex flex-wrap items-center gap-2 font-sans text-sm">
          <Escuchar partes={partes} etiqueta={etiqueta} />
          <Compartir titulo={titulo} pasaje={pasaje} ruta={`${salir}/${slug}`} />
          <button type="button" className="chip" onClick={() => window.print()}>
            <Printer size={16} aria-hidden />
            PDF
            <span className="sr-only"> (imprimir o guardar como PDF)</span>
          </button>
          <Link to={salir} className="ml-auto inline-flex min-h-11 items-center gap-2 text-gold">
            <X size={18} aria-hidden />
            Cerrar
          </Link>
        </div>
        <p className="meta-lectura mb-6">
          <span>{minutos} min de lectura</span>
          {previo > 0.05 && previo < 0.95 ? (
            <button type="button" onClick={seguir} className="text-link underline underline-offset-4">
              Seguir donde ibas ({Math.round(previo * 100)} %)
            </button>
          ) : null}
        </p>
        {children}
      </div>
    </div>
  );
}
