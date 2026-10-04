import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { LeerCapitulo } from "@/components/leer-capitulo";
import { Refs } from "@/components/cite";
import { Retomar } from "@/components/retomar";
import { aulaSinActo, cerrarAulaSiEscrito, type AulaAbierta } from "@/lib/aula-abierta";
import { useCurrentUser } from "@/lib/auth/use-current-user";
import { authEnabled, signIn } from "@/lib/auth/client";
import { GROK_PROVIDERS } from "@/lib/auth/providers";
import { guardarActo, leerActos } from "@/lib/cuaderno.functions";
import {
  clearBorrador,
  loadBorrador,
  loadCuaderno,
  saveBorrador,
  saveCuaderno,
  type CuadernoDraft,
  type CuadernoEntry,
} from "@/lib/cuaderno-store";
import { Motif } from "@/components/motif";
import { semanaVigente } from "@/lib/calendario";
import { CUADERNO_VACIO } from "@/lib/copy-nivel";
import { PRIMERA_VEZ } from "@/lib/pilar";
import { pageHead, tituloSeccion } from "@/lib/seo";
import { urlPuenteRevelatio } from "@/lib/puente-revelatio";
import { fichaEstudio } from "@/lib/fichas-portada";
import { MANUAL_CAMPO } from "@/lib/verdad";

export const Route = createFileRoute("/cuaderno")({
  validateSearch: (raw: Record<string, unknown>): { ref?: string; cita?: string } => {
    const search: { ref?: string; cita?: string } = {};
    if (typeof raw.ref === "string" && raw.ref.trim()) search.ref = raw.ref.trim();
    if (typeof raw.cita === "string" && raw.cita.trim()) search.cita = raw.cita.trim();
    return search;
  },
  beforeLoad: ({ search }) => {
    if (!search.cita) return;
    const href = urlPuenteRevelatio({ ref: search.cita, desde: "/cuaderno" });
    if (!href) return;
    throw redirect({ href });
  },
  head: () =>
    pageHead({
      path: "/cuaderno",
      title: tituloSeccion("Cuaderno"),
      description:
        "Sed hacedores. Aquí se escribe el indicativo del texto, un solo acto y un testigo. No es un diario de ánimos.",
      detalle: CUADERNO_VACIO,
    }),
  component: CuadernoPage,
});

function CuadernoPage() {
  const { ref = "" } = Route.useSearch();
  const user = useCurrentUser();
  const userId = user && !user.isDevFallback ? user.id : null;
  const [items, setItems] = useState<CuadernoEntry[]>([]);
  const [indicativo, setIndicativo] = useState("");
  const [decision, setDecision] = useState("");
  const [testigo, setTestigo] = useState("");
  const [note, setNote] = useState("");
  const [passage, setPassage] = useState(ref);
  const [pendiente, setPendiente] = useState<AulaAbierta | null>(null);
  const [guardado, setGuardado] = useState("");
  const [hidratado, setHidratado] = useState(false);

  useEffect(() => {
    setHidratado(false);
    const local = loadCuaderno(userId);
    setItems(local);
    setPendiente(aulaSinActo());
    const draft = loadBorrador(userId);
    if (userId) {
      leerActos()
        .then((rows) => {
          const byAt = new Map<string, CuadernoEntry>();
          for (const row of rows) byAt.set(row.at, row);
          for (const row of local) {
            if (!byAt.has(row.at)) {
              byAt.set(row.at, row);
              void guardarActo({ data: row }).catch(() => undefined);
            }
          }
          const merged = [...byAt.values()].sort((a, b) => b.at.localeCompare(a.at));
          saveCuaderno(merged, userId);
          setItems(merged);
        })
        .catch(() => undefined);
    }
    if (ref) {
      setPassage(ref);
      if (draft && draft.ref === ref) {
        setIndicativo(draft.indicativo);
        setDecision(draft.decision);
        setTestigo(draft.testigo);
        setNote(draft.note);
      }
    } else if (draft) {
      setPassage(draft.ref);
      setIndicativo(draft.indicativo);
      setDecision(draft.decision);
      setTestigo(draft.testigo);
      setNote(draft.note);
    }
    const t = window.setTimeout(() => setHidratado(true), 0);
    return () => window.clearTimeout(t);
  }, [ref, userId]);

  useEffect(() => {
    if (!hidratado) return;
    saveBorrador({ ref: passage, indicativo, decision, testigo, note }, userId);
  }, [hidratado, passage, indicativo, decision, testigo, note, userId]);

  function aplicar(draft: CuadernoDraft | { ref: string }) {
    setPassage(draft.ref);
    if ("indicativo" in draft) {
      setIndicativo(draft.indicativo);
      setDecision(draft.decision);
      setTestigo(draft.testigo);
      setNote(draft.note);
    }
  }

  function save(e: React.FormEvent) {
    e.preventDefault();
    if (!decision.trim()) return;
    const next: CuadernoEntry[] = [
      {
        ref: passage.trim() || "Sin referencia",
        indicativo: indicativo.trim(),
        decision: decision.trim(),
        testigo: testigo.trim(),
        note: note.trim(),
        at: new Date().toISOString(),
      },
      ...items,
    ];
    saveCuaderno(next, userId);
    if (userId) void guardarActo({ data: next[0] }).catch(() => undefined);
    setItems(next);
    setIndicativo("");
    setDecision("");
    setTestigo("");
    setNote("");
    setPassage("");
    clearBorrador(userId);
    cerrarAulaSiEscrito(passage.trim() || "Sin referencia");
    setPendiente(aulaSinActo());
    setGuardado(passage.trim() || "Sin referencia");
  }

  const semana = semanaVigente();
  const ficha = fichaEstudio(semana.studySlug);
  const vacio = items.length === 0;
  const persistencia = userId
    ? "El acto queda en tu cuenta. Otro teléfono, con la misma sesión, lo encuentra. No se envía a otra casa."
    : "El acto queda en este navegador hasta que entres. Con la sesión, te sigue. Sin ella, el otro teléfono no lo ve.";

  return (
    <main className="mx-auto max-w-2xl px-4 py-16 md:py-24">
      <Motif kind="flame" />
      <h1 className="mt-2 font-serif text-4xl">Sed hacedores de la palabra</h1>
      <p className="mt-5 text-lg leading-relaxed">
        No tan solamente oidores, engañándoos a vosotros mismos. Aquí se escribe el indicativo del
        texto —lo que Dios ha hecho—, el verbo que el pasaje conjuga, un solo acto y un testigo
        que pueda preguntar mañana. No es un diario de ánimos. Queda prohibido un «hoy muero a…»
        que el pasaje no nombra, porque esa mortificación de ocasión es SOAP con léxico de cruz.
      </p>
      <Refs refs="Stg. 1:22 · Lc. 8:15 · Ro. 12:1" />
      <p className="mt-6 leading-relaxed text-ink-soft">{MANUAL_CAMPO.lead}</p>
      <ol className="mt-4 space-y-2">
        {MANUAL_CAMPO.prompts.map((p) => (
          <li key={`${p.letter}-${p.name}`} className="leading-relaxed">
            <span className="italic">{p.name}. </span>
            {p.prompt}
          </li>
        ))}
      </ol>
      <p className="mt-4 leading-relaxed italic text-ink-soft">{MANUAL_CAMPO.prohibicion}</p>
      <p className="mt-4 font-sans text-sm">
        <Link to="/metodo" className="text-link underline">
          Los seis eslabones, enteros
        </Link>
        {" · "}
        <Link to="/crisol" className="text-link underline">
          C.R.I.S.O.L.™ en El Altar del Espejo
        </Link>
      </p>

      <Retomar userId={userId} onContinuar={aplicar} />

      {vacio ? (
        <aside className="mt-8 border border-rule bg-paper px-5 py-6">
          <p className="font-serif text-xl">Aún no hay un paso escrito</p>
          <p className="mt-3 leading-relaxed">{CUADERNO_VACIO}</p>
          {ficha ? (
            <p className="mt-4 leading-relaxed text-ink-soft">
              El acto de esta semana se lee en {ficha.title}, {ficha.ref}, y se escribe aquí.
            </p>
          ) : null}
          {pendiente ? (
            <p className="mt-4 leading-relaxed">
              El aula de {pendiente.titulo} se oyó. El acto de {pendiente.pasaje} aún no está
              escrito.
            </p>
          ) : null}
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              to="/estudios/$slug"
              params={{ slug: semana.studySlug }}
              className="btn btn-ink"
            >
              Abrir estudio de esta semana
            </Link>
            <Link
              to="/estudios/$slug"
              params={{ slug: PRIMERA_VEZ.slug }}
              className="btn btn-ghost"
            >
              Abrir Éfata
            </Link>
            {ficha ? (
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setPassage(ficha.ref)}
              >
                Usar el pasaje de esta semana
              </button>
            ) : null}
            {pendiente ? (
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setPassage(pendiente.pasaje)}
              >
                Usar el pasaje del aula
              </button>
            ) : null}
          </div>
        </aside>
      ) : null}

      <form onSubmit={save} className="mt-8 space-y-4 border border-rule bg-parchment p-5">
        <label className="block font-sans text-xs tracking-widest text-muted uppercase">
          Pasaje
          <input
            value={passage}
            onChange={(e) => setPassage(e.target.value)}
            placeholder="El capítulo que se oyó. Vacío hasta que se elija."
            className="mt-2 min-h-11 w-full border border-rule bg-paper px-3 font-serif text-base"
          />
        </label>
        <label className="block font-sans text-xs tracking-widest text-muted uppercase">
          Indicativo del texto
          <textarea
            value={indicativo}
            onChange={(e) => setIndicativo(e.target.value)}
            rows={2}
            placeholder="Qué ha hecho Dios en este pasaje. El verbo que el texto conjuga."
            className="mt-2 w-full border border-rule bg-paper px-3 py-2 font-serif text-base"
          />
        </label>
        <label className="block font-sans text-xs tracking-widest text-muted uppercase">
          Un acto
          <textarea
            required
            value={decision}
            onChange={(e) => setDecision(e.target.value)}
            rows={3}
            placeholder="Una obediencia o una confesión. El imperativo que nace de ese indicativo."
            className="mt-2 w-full border border-rule bg-paper px-3 py-2 font-serif text-base"
          />
        </label>
        <label className="block font-sans text-xs tracking-widest text-muted uppercase">
          Testigo
          <input
            value={testigo}
            onChange={(e) => setTestigo(e.target.value)}
            placeholder="A quién se lo dices. El domingo, que te pregunten."
            className="mt-2 min-h-11 w-full border border-rule bg-paper px-3 font-serif text-base"
          />
        </label>
        <label className="block font-sans text-xs tracking-widest text-muted uppercase">
          Nota (opcional)
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={2}
            className="mt-2 w-full border border-rule bg-paper px-3 py-2 font-serif text-base"
          />
        </label>
        <button
          type="submit"
          className="min-h-11 bg-gold-soft px-5 font-sans text-sm font-semibold text-ink"
        >
          Guardar lo escrito
        </button>
      </form>
      {guardado ? (
        <p className="mt-6 leading-relaxed">
          El acto de {guardado} quedó escrito. El capítulo sigue abierto.
          <span className="mt-3 block">
            <LeerCapitulo ref={guardado} desde={`/cuaderno?ref=${guardado}`} />
          </span>
        </p>
      ) : null}
      <section className="mt-12">
        <h2 className="font-serif text-2xl">Lo escrito</h2>
        <p className="mt-3 font-sans text-sm text-ink-soft">{persistencia}</p>
        {authEnabled && !userId ? (
          <p className="mt-3 font-sans text-sm">
            {GROK_PROVIDERS.map((p, i) => (
              <span key={p.providerId}>
                {i > 0 ? " · " : null}
                <button
                  type="button"
                  className="text-link underline"
                  onClick={() => signIn(p.providerId, { callbackURL: "/cuaderno" })}
                >
                  Entrar con {p.label}
                </button>
              </span>
            ))}
          </p>
        ) : null}
        {items.length === 0 ? (
          <p className="mt-4 leading-relaxed text-ink-soft">
            Cuando se guarde el primer acto, quedará aquí, con fecha.
            {userId ? " La cuenta lo guarda." : " Este navegador lo recuerda hasta que entres."}
          </p>
        ) : (
          <ul className="mt-6 space-y-6">
            {items.map((item) => (
              <li key={item.at} className="border-t border-rule pt-4">
                <p className="font-sans text-xs text-muted">
                  {item.ref} ·{" "}
                  {new Date(item.at).toLocaleDateString("es", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                {item.indicativo ? (
                  <p className="mt-2 italic text-ink-soft">{item.indicativo}</p>
                ) : null}
                <p className="mt-2 text-lg">{item.decision}</p>
                {item.testigo ? (
                  <p className="mt-1 font-sans text-sm text-gold">
                    Testigo: {item.testigo}
                  </p>
                ) : null}
                {item.note ? <p className="mt-1 text-ink-soft">{item.note}</p> : null}
                <button
                  type="button"
                  className="mt-3 font-sans text-sm text-link underline"
                  onClick={() => setPassage(item.ref)}
                >
                  Continuar desde {item.ref}
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
