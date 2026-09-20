import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { aulaSinActo, type AulaAbierta } from "@/lib/aula-abierta";
import { loadCuaderno, type CuadernoEntry } from "@/lib/cuaderno-store";
import { semana } from "@/lib/pilar";

export function SeguirActo() {
  const [last, setLast] = useState<CuadernoEntry | null>(null);
  const [pendiente, setPendiente] = useState<AulaAbierta | null>(null);

  useEffect(() => {
    setLast(loadCuaderno()[0] ?? null);
    setPendiente(aulaSinActo());
  }, []);

  if (pendiente) {
    return (
      <p className="mt-6 leading-relaxed text-ink-soft">
        El aula de {pendiente.titulo} se oyó. El acto de {pendiente.pasaje} aún no está escrito.{" "}
        <Link to="/cuaderno" search={{ ref: pendiente.pasaje }} className="text-link underline">
          Escribir el acto
        </Link>
      </p>
    );
  }

  if (!last) return null;

  return (
    <p className="mt-6 leading-relaxed text-ink-soft">
      La última obediencia escrita fue sobre {last.ref}: «{last.decision}».{" "}
      <Link to="/cuaderno" search={{ ref: last.ref }} className="text-link underline">
        Seguir {last.ref}
      </Link>
      {last.ref.toLowerCase().includes("romanos 1") ? null : (
        <> El pasaje de esta semana sigue siendo {semana.ref}.</>
      )}
    </p>
  );
}
