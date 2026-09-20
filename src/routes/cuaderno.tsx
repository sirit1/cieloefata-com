import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { LeerCapitulo } from "@/components/leer-capitulo";
import { Refs } from "@/components/cite";
import { aulaSinActo, cerrarAulaSiEscrito, type AulaAbierta } from "@/lib/aula-abierta";
import { loadCuaderno, saveCuaderno, type CuadernoEntry } from "@/lib/cuaderno-store";
import { Motif } from "@/components/motif";
import { PRIMERA_VEZ, semana } from "@/lib/pilar";
import { MANUAL_CAMPO } from "@/lib/verdad";

export const Route = createFileRoute("/cuaderno")({
  validateSearch: (raw: Record<string, unknown>) => ({
    ref: typeof raw.ref === "string" ? raw.ref : "",
  }),
  component: CuadernoPage,
});

function CuadernoPage() {
  const { ref } = Route.useSearch();
  const [items, setItems] = useState<CuadernoEntry[]>([]);
  const [indicativo, setIndicativo] = useState("");
  const [decision, setDecision] = useState("");
  const [testigo, setTestigo] = useState("");
  const [note, setNote] = useState("");
  const [passage, setPassage] = useState(ref);
  const [pendiente, setPendiente] = useState<AulaAbierta | null>(null);
  const [guardado, setGuardado] = useState("");

  useEffect(() => {
    setItems(loadCuaderno());
    const abierta = aulaSinActo();
    setPendiente(abierta);
    if (!ref && abierta) setPassage(abierta.pasaje);
  }, [ref]);

  useEffect(() => {
    if (ref) setPassage(ref);
  }, [ref]);

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
    saveCuaderno(next);
    setItems(next);
    setIndicativo("");
    setDecision("");
    setTestigo("");
    setNote("");
    cerrarAulaSiEscrito(passage.trim() || "Sin referencia");
    setPendiente(aulaSinActo());
    setGuardado(passage.trim() || "Sin referencia");
  }

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
      <form onSubmit={save} className="mt-8 space-y-4 border border-rule bg-parchment p-5">
        <label className="block font-sans text-xs tracking-widest text-muted uppercase">
          Pasaje
          <input
            value={passage}
            onChange={(e) => setPassage(e.target.value)}
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
            <LeerCapitulo ref={guardado} />
          </span>
        </p>
      ) : null}
      <section className="mt-12">
        <h2 className="font-serif text-2xl">Lo escrito</h2>
        {items.length === 0 ? (
          pendiente ? (
            <p className="mt-4 leading-relaxed text-ink-soft">
              El aula de {pendiente.titulo} se oyó. El acto de {pendiente.pasaje} aún no está
              escrito.
            </p>
          ) : (
            <p className="mt-4 leading-relaxed text-ink-soft">
              Aún no hay un paso escrito. La clase de esta semana es {semana.ref}. Si nunca se ha
              leído, se empieza por {PRIMERA_VEZ.ref}.
              <span className="mt-3 block">
                <Link
                  to="/estudios/$slug"
                  params={{ slug: semana.slug }}
                  className="text-link underline"
                >
                  Abrir {semana.title}
                </Link>
                {" · "}
                <Link
                  to="/estudios/$slug"
                  params={{ slug: PRIMERA_VEZ.slug }}
                  className="text-link underline"
                >
                  Abrir {PRIMERA_VEZ.title}
                </Link>
              </span>
            </p>
          )
        ) : (
          <ul className="mt-6 space-y-6">
            {items.map((item) => (
              <li key={item.at} className="border-t border-rule pt-4">
                <p className="font-sans text-xs text-muted">
                  {item.ref} · {new Date(item.at).toLocaleDateString("es")}
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
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
