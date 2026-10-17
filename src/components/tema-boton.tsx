import { Monitor, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { aplicarTema, leerTema, type Tema } from "@/lib/tema";

const SIGUIENTE: Record<Tema, Tema> = { sistema: "oscuro", oscuro: "claro", claro: "sistema" };
const NOMBRE: Record<Tema, string> = {
  sistema: "como el sistema",
  oscuro: "oscuro",
  claro: "claro",
};

/** Un solo botón que rota claro → sistema → oscuro. El nombre accesible dice el estado y lo que hará. */
export function TemaBoton({ className = "icono-btn" }: { className?: string }) {
  const [tema, setTema] = useState<Tema>("sistema");

  useEffect(() => {
    setTema(leerTema());
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (leerTema() === "sistema") aplicarTema("sistema");
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const Icono = tema === "oscuro" ? Moon : tema === "claro" ? Sun : Monitor;
  const sig = SIGUIENTE[tema];

  return (
    <button
      type="button"
      className={className}
      aria-label={`Tema ${NOMBRE[tema]}. Cambiar a ${NOMBRE[sig]}`}
      title={`Tema: ${NOMBRE[tema]}`}
      onClick={() => {
        aplicarTema(sig);
        setTema(sig);
      }}
    >
      <Icono size={19} aria-hidden />
    </button>
  );
}
