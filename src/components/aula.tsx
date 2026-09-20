import { Link, useNavigate } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useEffect, useMemo, useRef } from "react";
import { Escuchar } from "@/components/escuchar";
import { marcarAula } from "@/lib/aula-abierta";
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
      data-aula
      className="fixed inset-0 z-50 overflow-y-auto"
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
        <div className="mb-8 flex flex-wrap items-center gap-3 font-sans text-sm">
          <Escuchar partes={partes} etiqueta={etiqueta} />
          <Link to={salir} className="ml-auto inline-flex min-h-11 items-center gap-2 text-gold">
            <X size={18} aria-hidden />
            Cerrar
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
}
