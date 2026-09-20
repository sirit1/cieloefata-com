import { Highlighter } from "lucide-react";
import { useEffect, useState } from "react";
import { addMarca } from "@/lib/cuaderno-store";

type Sel = { text: string; x: number; y: number };

function editable(n: Node | null) {
  const el = n instanceof Element ? n : n?.parentElement;
  return Boolean(el?.closest("input, textarea, [contenteditable='true']"));
}

export function SelectionBar() {
  const [sel, setSel] = useState<Sel | null>(null);
  const [ok, setOk] = useState(false);

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
      const x = Math.min(Math.max(rect.left + rect.width / 2, 120), window.innerWidth - 120);
      const y = Math.min(Math.max(rect.top, 80), window.innerHeight - 80);
      setSel({ text, x, y });
      setOk(false);
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

  if (!sel) return null;

  return (
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
        onClick={() => {
          addMarca(document.title.replace(" · Cielo Efata", ""), sel.text);
          setOk(true);
          setSel(null);
        }}
      >
        <Highlighter className="size-4 text-gold" aria-hidden />
        {ok ? "Guardado" : "Al cuaderno"}
      </button>
    </div>
  );
}
