import { useEffect, useState } from "react";
import { SelectionBar } from "@/components/selection-bar";

/** No bloquea la primera pintura: el resaltado espera a que el hilo esté libre. */
export function IdleBar() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    if (typeof w.requestIdleCallback === "function") {
      const id = w.requestIdleCallback(() => setOn(true), { timeout: 1800 });
      return () => w.cancelIdleCallback?.(id);
    }
    const t = window.setTimeout(() => setOn(true), 400);
    return () => window.clearTimeout(t);
  }, []);
  if (!on) return null;
  return <SelectionBar />;
}
