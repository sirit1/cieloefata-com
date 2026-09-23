import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { aulaSinActo, type AulaAbierta } from "@/lib/aula-abierta";
import { semanaVigente } from "@/lib/calendario";
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
      <p className="font-serif text-xl">Retomar</p>
      <p className="mt-3 leading-relaxed text-ink-soft">
        El cuaderno no empieza de cero cada vez que se abre. Recuerda el aula oída, el borrador
        que quedó a medias y el último acto firmado. El pasaje no se rellena con Nehemías 8:8:
        llega cuando el aula o el lector lo traen.
      </p>
      <ul className="mt-5 space-y-4">
        {pendiente ? (
          <li>
            <p className="font-sans text-xs tracking-[0.16em] text-gold uppercase">
              Aula sin acto · {fechaCorta(pendiente.at)}
            </p>
            <p className="mt-1 leading-relaxed">
              Se oyó {pendiente.titulo}. El acto de {pendiente.pasaje} aún no está escrito.
            </p>
            <div className="mt-3 flex flex-col gap-2 sm:flex-row">
              <Link
                to="/cuaderno"
                search={{ ref: pendiente.pasaje }}
                className="btn btn-ink"
                onClick={() => onContinuar?.({ ref: pendiente.pasaje })}
              >
                Continuar la decisión
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
                Seguir el borrador
              </button>
            ) : (
              <Link
                to="/cuaderno"
                search={borrador.ref ? { ref: borrador.ref } : undefined}
                className="btn btn-ink mt-3"
              >
                Seguir el borrador
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
              {ultimo.ref}: «{ultimo.decision}»
              {ultimo.testigo ? ` · testigo: ${ultimo.testigo}` : ""}
            </p>
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
              Continuar la decisión de {study.ref}
            </Link>
          </li>
        ) : null}
      </ul>
    </aside>
  );
}
