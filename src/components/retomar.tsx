import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { aulaSinActo, type AulaAbierta } from "@/lib/aula-abierta";
import { semanaVigente } from "@/lib/calendario";
import {
  RETOMAR_TITULO,
  retomarAulaSinActo,
  retomarEnlace,
  retomarObediencia,
} from "@/lib/copy-nivel";
import {
  loadBorrador,
  ultimoActo,
  type CuadernoDraft,
  type CuadernoEntry,
} from "@/lib/cuaderno-store";
import { actoDe } from "@/lib/actos";
import { studyBySlug } from "@/lib/studies";

function fechaCorta(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("es", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

export function Retomar({
  userId,
  onContinuar,
}: {
  userId?: string | null;
  onContinuar?: (draft: CuadernoDraft | { ref: string }) => void;
}) {
  const [pendiente, setPendiente] = useState<AulaAbierta | null>(null);
  const [borrador, setBorrador] = useState<CuadernoDraft | null>(null);
  const [ultimo, setUltimo] = useState<CuadernoEntry | null>(null);

  useEffect(() => {
    setPendiente(aulaSinActo());
    setBorrador(loadBorrador(userId));
    setUltimo(ultimoActo(userId));
  }, [userId]);

  const semana = semanaVigente();
  const study = studyBySlug(semana.studySlug);
  const acto = actoDe(semana.studySlug);

  if (!pendiente && !borrador && !ultimo && !acto) return null;

  return (
    <aside className="mt-8 border border-rule bg-paper px-5 py-6">
      <p className="font-serif text-xl">{RETOMAR_TITULO}</p>
      <ul className="mt-5 space-y-4">
        {pendiente ? (
          <li>
            <p className="font-sans text-xs tracking-[0.16em] text-gold uppercase">
              Aula sin acto · {fechaCorta(pendiente.at)}
            </p>
            <p className="mt-1 leading-relaxed">
              {retomarAulaSinActo(pendiente.titulo, pendiente.pasaje)}
            </p>
            <div className="mt-3 flex flex-col gap-2 sm:flex-row">
              <Link
                to="/cuaderno"
                search={{ ref: pendiente.pasaje }}
                className="btn btn-ink"
                onClick={() => onContinuar?.({ ref: pendiente.pasaje })}
              >
                {retomarEnlace(pendiente.pasaje)}
              </Link>
              {pendiente.kind === "estudio" ? (
                <Link
                  to="/estudios/$slug"
                  params={{ slug: pendiente.slug }}
                  className="btn btn-ghost"
                >
                  Volver al aula
                </Link>
              ) : (
                <Link
                  to="/tratados/$slug"
                  params={{ slug: pendiente.slug }}
                  className="btn btn-ghost"
                >
                  Volver al tratado
                </Link>
              )}
            </div>
          </li>
        ) : null}
        {borrador ? (
          <li>
            <p className="font-sans text-xs tracking-[0.16em] text-gold uppercase">
              Borrador · {fechaCorta(borrador.updatedAt)}
            </p>
            <p className="mt-1 leading-relaxed">
              Quedó a medias {borrador.ref || "un pasaje aún sin nombre"}.
              {borrador.decision ? ` «${borrador.decision}»` : ""}
            </p>
            {onContinuar ? (
              <button type="button" className="btn btn-ink mt-3" onClick={() => onContinuar(borrador)}>
                {retomarEnlace(borrador.ref || "el borrador")}
              </button>
            ) : (
              <Link
                to="/cuaderno"
                search={borrador.ref ? { ref: borrador.ref } : undefined}
                className="btn btn-ink mt-3"
              >
                {retomarEnlace(borrador.ref || "el borrador")}
              </Link>
            )}
          </li>
        ) : null}
        {ultimo ? (
          <li>
            <p className="font-sans text-xs tracking-[0.16em] text-gold uppercase">
              Último acto · {fechaCorta(ultimo.at)}
            </p>
            <p className="mt-1 leading-relaxed">
              {retomarObediencia(ultimo.ref, ultimo.decision)}
            </p>
            {ultimo.testigo ? (
              <p className="mt-1 font-sans text-sm text-gold">Testigo: {ultimo.testigo}</p>
            ) : null}
            <Link
              to="/cuaderno"
              search={{ ref: ultimo.ref }}
              className="btn btn-ghost mt-3"
              onClick={() => onContinuar?.({ ref: ultimo.ref })}
            >
              {retomarEnlace(ultimo.ref)}
            </Link>
          </li>
        ) : null}
        {acto && study ? (
          <li>
            <p className="font-sans text-xs tracking-[0.16em] text-gold uppercase">
              Decisión de esta semana
            </p>
            <p className="mt-1 leading-relaxed">
              {study.ref} · {study.title}. {acto.escrito}
            </p>
            <Link
              to="/cuaderno"
              search={{ ref: study.ref }}
              className="btn btn-ghost mt-3"
              onClick={() => onContinuar?.({ ref: study.ref })}
            >
              {retomarEnlace(study.ref)}
            </Link>
          </li>
        ) : null}
      </ul>
    </aside>
  );
}
