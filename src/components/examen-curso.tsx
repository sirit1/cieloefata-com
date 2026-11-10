import { Link } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { MENSAJE_BANCO_VACIO } from "@/lib/examenes/catalogo";
import {
  anotarEvento,
  comenzarIntento,
  entregarIntento,
  leerExamen,
} from "@/lib/examenes/functions";
import type { PreguntaPublica } from "@/lib/examenes/esquema";
import { authEnabled, signIn } from "@/lib/auth/client";
import { GROK_PROVIDERS } from "@/lib/auth/providers";
import { useCurrentUserState } from "@/lib/auth/use-current-user";

type EnCurso = {
  id: string;
  numero: number;
  venceEn: string;
};

type Estado = {
  titulo: string;
  detalle: string;
  minutos: number;
  umbral: number;
  abierto: boolean;
  intentosUsados: number;
  maxIntentos: number;
  aprobado: boolean;
  certificado: string | null;
  enCurso: EnCurso | null;
  preguntas: PreguntaPublica[] | null;
  servidorEn: string;
};

type Resultado = {
  puntaje: number;
  aprobado: boolean;
  aciertos: number;
  total: number;
  certificado: string | null;
  certificadoCurso: string | null;
  tiempoAgotado: boolean;
  intentosUsados: number;
};

function restante(venceEn: string, servidorEn: string, recibidoEn: number, ahora: number) {
  const desfase = new Date(servidorEn).getTime() - recibidoEn;
  const fin = new Date(venceEn).getTime() - desfase;
  return Math.max(0, fin - ahora);
}

function mensaje(err: unknown, fallback: string) {
  const text = err instanceof Error ? err.message : "";
  if (text === "banco vacío") return MENSAJE_BANCO_VACIO;
  if (text === "intentos agotados") return "Se agotaron los dos intentos de este examen.";
  if (text === "Unauthorized") return "Hay que entrar para presentar el examen.";
  return text || fallback;
}

function reloj(ms: number) {
  const s = Math.ceil(ms / 1000);
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${String(r).padStart(2, "0")}`;
}

export function ExamenCurso({ examenId }: { examenId: string }) {
  const { user, isPending } = useCurrentUserState();
  const [estado, setEstado] = useState<Estado | null>(null);
  const [recibidoEn, setRecibidoEn] = useState(0);
  const [marcas, setMarcas] = useState<Record<string, number>>({});
  const [error, setError] = useState("");
  const [ocupado, setOcupado] = useState(false);
  const [resultado, setResultado] = useState<Resultado | null>(null);
  const [ahora, setAhora] = useState(() => Date.now());
  const [velado, setVelado] = useState(false);

  const cargar = useCallback(async () => {
    const data = await leerExamen({ data: examenId });
    setEstado(data);
    setRecibidoEn(Date.now());
    setAhora(Date.now());
    return data;
  }, [examenId]);

  useEffect(() => {
    if (isPending || !user) return;
    let vivo = true;
    cargar().catch((err: unknown) => {
      if (vivo) setError(mensaje(err, "No se pudo abrir el examen"));
    });
    return () => {
      vivo = false;
    };
  }, [cargar, isPending, user]);

  const intentoId = estado?.enCurso?.id ?? null;

  useEffect(() => {
    if (!intentoId) return;
    const id = window.setInterval(() => setAhora(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, [intentoId]);

  const anotar = useCallback(
    (tipo: string) => {
      if (!intentoId) return;
      void anotarEvento({ data: { intentoId, tipo } }).catch(() => undefined);
    },
    [intentoId],
  );

  useEffect(() => {
    if (!intentoId) return;
    function alOcultar() {
      if (document.hidden) {
        setVelado(true);
        anotar("oculto");
      } else {
        setVelado(false);
      }
    }
    function alDesenfoque() {
      setVelado(true);
      anotar("desenfoque");
    }
    function alFoco() {
      if (!document.hidden) setVelado(false);
    }
    function alImprimir() {
      anotar("impresion");
    }
    document.addEventListener("visibilitychange", alOcultar);
    window.addEventListener("blur", alDesenfoque);
    window.addEventListener("focus", alFoco);
    window.addEventListener("beforeprint", alImprimir);
    return () => {
      document.removeEventListener("visibilitychange", alOcultar);
      window.removeEventListener("blur", alDesenfoque);
      window.removeEventListener("focus", alFoco);
      window.removeEventListener("beforeprint", alImprimir);
    };
  }, [anotar, intentoId]);

  const ms = useMemo(() => {
    if (!estado?.enCurso || !recibidoEn) return 0;
    return restante(estado.enCurso.venceEn, estado.servidorEn, recibidoEn, ahora);
  }, [ahora, estado, recibidoEn]);

  async function empezar() {
    setError("");
    setOcupado(true);
    setResultado(null);
    try {
      const data = await comenzarIntento({ data: examenId });
      setEstado(data);
      setRecibidoEn(Date.now());
      setMarcas({});
    } catch (err) {
      setError(mensaje(err, "No se pudo comenzar"));
    } finally {
      setOcupado(false);
    }
  }

  const entregar = useCallback(async () => {
    if (!estado?.enCurso) return;
    setOcupado(true);
    setError("");
    try {
      const nota = await entregarIntento({
        data: { intentoId: estado.enCurso.id, respuestas: marcas },
      });
      setResultado(nota);
      await cargar();
    } catch (err) {
      setError(mensaje(err, "No se pudo entregar"));
    } finally {
      setOcupado(false);
    }
  }, [cargar, estado, marcas]);

  useEffect(() => {
    if (!estado?.enCurso || ocupado || resultado) return;
    if (ms > 0) return;
    void entregar();
  }, [entregar, estado, ms, ocupado, resultado]);

  if (isPending) return <p className="mt-8 text-ink-soft">Cargando…</p>;

  if (authEnabled && !user) {
    return (
      <div className="mt-8">
        <p className="leading-relaxed">Para presentar el examen hay que entrar. La escuela es gratis.</p>
        <p className="mt-4 font-sans text-sm">
          {GROK_PROVIDERS.map((p, i) => (
            <span key={p.providerId}>
              {i > 0 ? " · " : null}
              <button
                type="button"
                className="text-link underline"
                onClick={() => signIn(p.providerId, { callbackURL: `/curso/examen/${examenId}` })}
              >
                Entrar con {p.label}
              </button>
            </span>
          ))}
        </p>
      </div>
    );
  }

  if (!estado) {
    return <p className="mt-8 text-ink-soft">{error || "Cargando el examen…"}</p>;
  }

  const marcaAgua = `${user?.displayName ?? "Estudiante"} · ${user?.primaryEmail ?? ""}`.trim();
  const corte = Math.round(estado.umbral * 100);

  return (
    <div>
      <p className="mt-4 text-ink-soft">
        {estado.detalle}. {estado.minutos} minutos. Dos intentos. Nota de corte: {corte} %.
      </p>
      {error ? <p className="mt-4 text-danger">{error}</p> : null}
      {resultado ? <ResultadoNota resultado={resultado} corte={corte} /> : null}

      {!estado.abierto ? <p className="mt-8 text-lg">{MENSAJE_BANCO_VACIO}</p> : null}

      {estado.abierto && !estado.enCurso && !resultado ? (
        <div className="mt-8">
          {estado.aprobado && estado.certificado ? (
            <p>
              Ya aprobaste este examen.{" "}
              <Link to="/certificado/$codigo" params={{ codigo: estado.certificado }} className="text-link underline">
                Ver el certificado
              </Link>
              .
            </p>
          ) : null}
          {estado.intentosUsados >= estado.maxIntentos && !estado.aprobado ? (
            <p className="mt-4">Se agotaron los dos intentos de este examen.</p>
          ) : null}
          {estado.intentosUsados < estado.maxIntentos ? (
            <button type="button" className="btn btn-gold mt-6" disabled={ocupado} onClick={() => void empezar()}>
              Comenzar intento {estado.intentosUsados + 1} de {estado.maxIntentos}
            </button>
          ) : null}
        </div>
      ) : null}

      {estado.enCurso && estado.preguntas ? (
        <form
          className="examen-hoja relative mt-8"
          style={{ userSelect: "none", WebkitUserSelect: "none" }}
          onSubmit={(e) => {
            e.preventDefault();
            void entregar();
          }}
          onCopy={(e) => {
            e.preventDefault();
            anotar("copia");
          }}
          onCut={(e) => {
            e.preventDefault();
            anotar("corte");
          }}
          onContextMenu={(e) => {
            e.preventDefault();
            anotar("menu");
          }}
          onDragStart={(e) => e.preventDefault()}
          onKeyDown={(e) => {
            if ((e.ctrlKey || e.metaKey) && ["c", "x", "p", "s"].includes(e.key.toLowerCase())) {
              e.preventDefault();
              anotar(e.key.toLowerCase() === "p" ? "impresion" : e.key.toLowerCase() === "x" ? "corte" : "copia");
            }
          }}
        >
          <style>{`@media print { .examen-hoja { display: none !important; } }`}</style>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10 overflow-hidden"
            style={{
              backgroundImage: `repeating-linear-gradient(-32deg, transparent 0 46px, color-mix(in oklab, var(--color-gold) 18%, transparent) 46px 47px)`,
            }}
          >
            <p className="px-2 py-8 font-sans text-sm leading-[3.2rem] break-all text-gold opacity-40">
              {Array.from({ length: 40 }, () => marcaAgua).join("   ")}
            </p>
          </div>
          {velado ? (
            <div className="absolute inset-0 z-20 grid place-items-center bg-parchment/80 px-6 text-center backdrop-blur-md">
              <p>El examen se oculta mientras esta ventana no está activa.</p>
            </div>
          ) : null}
          <div className={velado ? "blur-md" : undefined}>
            <p className="font-sans text-sm text-gold">
              Intento {estado.enCurso.numero} de {estado.maxIntentos} · Tiempo {reloj(ms)}
            </p>
            <ol className="mt-6 space-y-8">
              {estado.preguntas.map((p, i) => (
                <li key={p.id}>
                  <p className="font-serif text-xl">
                    {i + 1}. {p.enunciado}
                  </p>
                  <div className="mt-3 space-y-2">
                    {p.opciones.map((opcion, n) => (
                      <label key={n} className="flex min-h-11 items-start gap-3 font-sans text-base">
                        <input
                          type="radio"
                          name={p.id}
                          className="mt-1"
                          checked={marcas[p.id] === n}
                          onChange={() => setMarcas((prev) => ({ ...prev, [p.id]: n }))}
                        />
                        <span>{opcion}</span>
                      </label>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
            <button type="submit" className="btn btn-gold mt-8" disabled={ocupado}>
              Entregar examen
            </button>
          </div>
        </form>
      ) : null}
    </div>
  );
}

function ResultadoNota({ resultado, corte }: { resultado: Resultado; corte: number }) {
  if (resultado.tiempoAgotado) {
    return <p className="mt-6">El tiempo de este intento terminó. La entrega no se aceptó.</p>;
  }
  return (
    <div className="mt-6 border-t border-rule pt-4">
      <p>
        {resultado.aprobado
          ? `Aprobaste con ${resultado.puntaje} %.`
          : `La nota fue ${resultado.puntaje} %. La corte es ${corte} %.`}
        {resultado.total > 0 ? ` Aciertos: ${resultado.aciertos} de ${resultado.total}.` : null}
      </p>
      {resultado.certificado ? (
        <p className="mt-3">
          <Link to="/certificado/$codigo" params={{ codigo: resultado.certificado }} className="text-link underline">
            Ver el certificado
          </Link>
        </p>
      ) : null}
      {resultado.certificadoCurso ? (
        <p className="mt-3">
          Completaste los doce módulos.{" "}
          <Link
            to="/certificado/$codigo"
            params={{ codigo: resultado.certificadoCurso }}
            className="text-link underline"
          >
            Certificado del curso completo
          </Link>
          .
        </p>
      ) : null}
      {!resultado.aprobado && resultado.intentosUsados < 2 ? <p className="mt-3">Te queda un intento.</p> : null}
    </div>
  );
}
