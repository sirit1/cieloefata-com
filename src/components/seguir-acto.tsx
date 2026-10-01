import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { aulaSinActo, mismaRef, type AulaAbierta } from "@/lib/aula-abierta";
import { semanaVigente } from "@/lib/calendario";
import { loadCuaderno, type CuadernoEntry } from "@/lib/cuaderno-store";
import { fichaEstudio } from "@/lib/fichas-portada";

export function SeguirActo() {
  const [last, setLast] = useState<CuadernoEntry | null>(null);
  const [pendiente, setPendiente] = useState<AulaAbierta | null>(null);

  useEffect(() => {
    setLast(loadCuaderno()[0] ?? null);
    setPendiente(aulaSinActo());
  }, []);

  const refSemana = fichaEstudio(semanaVigente().studySlug)?.ref;

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
      {refSemana ? <> El pasaje de esta semana sigue siendo {refSemana}.</> : null}
    </p>
  );
}

/** Una línea, encima del pliegue, solo si este navegador ya tiene acto o aula. */
export function PuertaRegreso() {
  const [estado, setEstado] = useState<"mudo" | "abierto" | "escrito">("mudo");
  const semana = semanaVigente();
  const ficha = fichaEstudio(semana.studySlug);

  useEffect(() => {
    if (!ficha) return;
    const escrito = loadCuaderno().some((item) => mismaRef(item.ref, ficha.ref));
    const visita = loadCuaderno().length > 0 || aulaSinActo() || loadAulaSilenciosa();
    if (!visita && !escrito) return;
    setEstado(escrito ? "escrito" : "abierto");
  }, [ficha]);

  if (!ficha || estado === "mudo") return null;

  if (estado === "escrito") {
    return (
      <p className="mt-8 text-lg leading-relaxed">
        El acto de {ficha.ref} quedó escrito. El pasaje sigue siendo el mismo.{" "}
        <Link
          to="/estudios/$slug"
          params={{ slug: semana.studySlug }}
          className="text-link underline"
        >
          Volver al pasaje
        </Link>
      </p>
    );
  }

  return (
    <p className="mt-8 text-lg leading-relaxed">
      El acto de esta semana sigue sin escribirse.{" "}
      <Link to="/cuaderno" search={{ ref: ficha.ref }} className="text-link underline">
        Escribir el acto
      </Link>
    </p>
  );
}

function loadAulaSilenciosa() {
  try {
    return Boolean(localStorage.getItem("cieloefata-aula-abierta"));
  } catch {
    return false;
  }
}
