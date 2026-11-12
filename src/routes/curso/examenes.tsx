import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { EXAMENES, MENSAJE_BANCO_VACIO } from "@/lib/examenes/catalogo";
import { listarExamenes } from "@/lib/examenes/functions";
import { authEnabled, signIn } from "@/lib/auth/client";
import { GROK_PROVIDERS } from "@/lib/auth/providers";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { pageHead, tituloSeccion } from "@/lib/seo";

export const Route = createFileRoute("/curso/examenes")({
  head: () =>
    pageHead({
      path: "/curso/examenes",
      title: tituloSeccion("Exámenes · Curso Experto Bíblico"),
      description:
        "Exámenes gratis del Curso Experto Bíblico: uno por módulo y un examen final. Dos intentos, con tiempo, y certificado al aprobar.",
    }),
  component: ExamenesPage,
});

type Fila = {
  id: string;
  titulo: string;
  detalle: string;
  abierto: boolean;
  intentosUsados: number;
  maxIntentos: number;
  aprobado: boolean;
  certificado: string | null;
};

function ExamenesPage() {
  const { user, isPending } = useCurrentUserState();
  const [filas, setFilas] = useState<Fila[] | null>(null);
  const [curso, setCurso] = useState<string | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isPending || !user) return;
    let vivo = true;
    listarExamenes()
      .then((data) => {
        if (!vivo) return;
        setFilas(data.examenes);
        setCurso(data.certificadoCurso);
      })
      .catch((err: unknown) => {
        if (vivo) setError(err instanceof Error ? err.message : "No se pudieron cargar los exámenes");
      });
    return () => {
      vivo = false;
    };
  }, [isPending, user]);

  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <p className="kicker">Escuela Bíblica Cielo Efata</p>
      <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">Exámenes</h1>
      <p className="mt-6 text-lg leading-relaxed">
        El Curso Experto Bíblico es gratis. No hay pago para entrar, para el examen ni para el certificado. Hay un
        examen por cada uno de los doce módulos y un examen final. Cada uno dura lo que marca el reloj del servidor y
        admite dos intentos.
      </p>
      <p className="mt-4">
        <Link to="/curso" className="text-link underline">
          Volver al curso
        </Link>
        {" · "}
        <Link to="/certificado" className="text-link underline">
          Verificar certificado
        </Link>
      </p>
      {isPending ? <p className="mt-8 text-ink-soft">Cargando…</p> : null}
      {authEnabled && !isPending && !user ? (
        <p className="mt-8 font-sans text-sm">
          Para ver tus intentos, entra.{" "}
          {GROK_PROVIDERS.map((p, i) => (
            <span key={p.providerId}>
              {i > 0 ? " · " : null}
              <button
                type="button"
                className="text-link underline"
                onClick={() => signIn(p.providerId, { callbackURL: "/curso/examenes" })}
              >
                Entrar con {p.label}
              </button>
            </span>
          ))}
        </p>
      ) : null}
      {error ? <p className="mt-6 text-danger">{error}</p> : null}
      {curso ? (
        <p className="mt-8">
          <Link to="/certificado/$codigo" params={{ codigo: curso }} className="text-link underline">
            Certificado del curso completo
          </Link>
        </p>
      ) : null}
      <ol className="mt-10 space-y-6">
        {(filas ?? EXAMENES.map((e) => ({ ...e, abierto: false, intentosUsados: 0, maxIntentos: 2, aprobado: false, certificado: null }))).map(
          (examen) => (
            <li key={examen.id} className="border-t border-rule pt-5">
              <p className="kicker">{examen.detalle}</p>
              <Link
                to="/curso/examen/$slug"
                params={{ slug: examen.id }}
                className="mt-1 block font-serif text-2xl text-link underline"
              >
                {examen.titulo}
              </Link>
              <p className="mt-2 text-sm text-ink-soft">
                {filas ? estadoTexto(examen) : user ? "Cargando…" : "Entra para ver tus intentos."}
              </p>
            </li>
          ),
        )}
      </ol>
    </main>
  );
}

function estadoTexto(examen: Fila): string {
  if (!examen.abierto) return MENSAJE_BANCO_VACIO;
  if (examen.aprobado) return "Aprobado.";
  if (examen.intentosUsados >= examen.maxIntentos) return "Sin intentos restantes.";
  if (examen.intentosUsados === 0) return "Sin comenzar.";
  return `Intento ${examen.intentosUsados} de ${examen.maxIntentos}.`;
}
