import { Highlighter } from "lucide-react";
import { useEffect, useState } from "react";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { contextoDesdeDom, fechaLocal } from "@/lib/cuaderno-dom";
import type { ContextoNota } from "@/lib/cuaderno-estudio";
import { crearNotaEstudio } from "@/lib/cuaderno-estudio.functions";

type Sel = { text: string; x: number; y: number; node: Node | null };

function editable(n: Node | null) {
  const el = n instanceof Element ? n : n?.parentElement;
  return Boolean(el?.closest("input, textarea, [contenteditable='true']"));
}

export function SelectionBar() {
  const { user, isPending } = useCurrentUserState();
  const conCuenta = Boolean(user) && (!authEnabled || !user?.isDevFallback);
  const [sel, setSel] = useState<Sel | null>(null);
  const [mensaje, setMensaje] = useState("");
  const [aviso, setAviso] = useState(false);
  const [guardando, setGuardando] = useState(false);

  useEffect(() => {
    function read() {
      const s = window.getSelection();
      if (!s || s.rangeCount === 0 || s.isCollapsed) {
        setSel(null);
        return;
      }
      if (editable(s.anchorNode)) {
        setSel(null);
        return;
      }
      const text = s.toString().replace(/\s+/g, " ").trim();
      if (text.length < 8) {
        setSel(null);
        return;
      }
      const rect = s.getRangeAt(0).getBoundingClientRect();
      if (rect.width < 2 && rect.height < 2) return;
      const x = Math.min(
        Math.max(rect.left + rect.width / 2, 120),
        window.innerWidth - 120,
      );
      const y = Math.min(Math.max(rect.top, 80), window.innerHeight - 80);
      setSel({ text, x, y, node: s.anchorNode });
    }
    function onDown(e: MouseEvent) {
      const t = e.target as HTMLElement | null;
      if (t?.closest?.("[data-sel-bar]")) return;
      setSel(null);
    }
    document.addEventListener("mouseup", read);
    document.addEventListener("keyup", read);
    document.addEventListener("touchend", read, { passive: true });
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("mouseup", read);
      document.removeEventListener("keyup", read);
      document.removeEventListener("touchend", read);
      document.removeEventListener("mousedown", onDown);
    };
  }, []);

  async function guardar(contexto: ContextoNota) {
    if (isPending) return;
    if (!conCuenta) {
      window.dispatchEvent(
        new CustomEvent<ContextoNota>("cuaderno-estudio-borrador", {
          detail: contexto,
        }),
      );
      setAviso(true);
      setMensaje(
        "Sin una cuenta, esta selección no se guarda. Se pierde al salir.",
      );
      setSel(null);
      return;
    }
    setGuardando(true);
    try {
      await crearNotaEstudio({ data: { ...contexto, texto: "" } });
      window.dispatchEvent(new CustomEvent("cuaderno-estudio-actualizado"));
      setAviso(false);
      setMensaje(
        "Quedó en tu cuenta, con el texto seleccionado y la referencia de esta página.",
      );
      setSel(null);
    } catch {
      setAviso(true);
      setMensaje(
        "No se pudo guardar en la cuenta. No la dejamos en este aparato.",
      );
    } finally {
      setGuardando(false);
    }
  }

  const callback =
    typeof window === "undefined"
      ? "/curso"
      : `${window.location.pathname}${window.location.search}`;

  return (
    <>
      {sel ? (
        <div
          data-sel-bar
          role="toolbar"
          aria-label="Guardar la selección en el cuaderno"
          className="fixed z-[70] flex -translate-x-1/2 -translate-y-full items-center gap-1 border border-rule bg-paper px-2 py-1 shadow-md"
          style={{ left: sel.x, top: sel.y - 8 }}
          onMouseDown={(e) => e.preventDefault()}
        >
          <button
            type="button"
            className="inline-flex min-h-11 items-center gap-2 px-3 font-sans text-xs tracking-wide text-ink"
            disabled={guardando}
            onClick={() => {
              const contexto = contextoDesdeDom(
                sel.text,
                sel.node,
                fechaLocal(),
              );
              void guardar(contexto);
            }}
          >
            <Highlighter className="size-4 text-gold" aria-hidden />
            {guardando ? "Guardando…" : "Al cuaderno"}
          </button>
        </div>
      ) : null}
      {mensaje ? (
        <div
          data-sel-bar
          className={
            aviso ? "cuaderno-flotante cuaderno-aviso" : "cuaderno-flotante"
          }
          role="status"
        >
          <p>{mensaje}</p>
          {aviso && !conCuenta ? (
            <div className="cuaderno-cuentas">
              <p className="cuaderno-kicker">Crear o abrir una cuenta</p>
              {GROK_PROVIDERS.map((p) => (
                <button
                  key={p.providerId}
                  type="button"
                  className="cuaderno-btn"
                  onClick={() =>
                    void signIn(p.providerId, { callbackURL: callback })
                  }
                >
                  Entrar con {p.label}
                </button>
              ))}
            </div>
          ) : null}
          <button
            type="button"
            className="cuaderno-link"
            onClick={() => setMensaje("")}
          >
            Cerrar
          </button>
        </div>
      ) : null}
    </>
  );
}
