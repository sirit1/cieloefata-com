import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { LeerCapitulo } from "@/components/leer-capitulo";
import { Refs } from "@/components/cite";
import { aulaSinActo, cerrarAulaSiEscrito, type AulaAbierta } from "@/lib/aula-abierta";
import { actoDe } from "@/lib/actos";
import { loadCuaderno, saveCuaderno, type CuadernoEntry } from "@/lib/cuaderno-store";
import { Motif } from "@/components/motif";
import { PRIMERA_VEZ, semana } from "@/lib/pilar";
import { pageHead } from "@/lib/seo";
import { MANUAL_CAMPO } from "@/lib/verdad";

export const Route = createFileRoute("/cuaderno")({
  validateSearch: (raw: Record<string, unknown>): { ref?: string } => {
    if (typeof raw.ref === "string" && raw.ref.trim()) return { ref: raw.ref };
    return {};
  },
  head: () =>
    pageHead({
      path: "/cuaderno",
      title: "Cuaderno · Cielo Efata",
      description:
        "Sed hacedores. Aquí se escribe el indicativo del texto, un solo acto y un testigo. No es un diario de ánimos.",
    }),
  component: CuadernoPage,
});

function CuadernoPage() {
  const { ref = "" } = Route.useSearch();
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
    setPendiente(aulaSinActo());
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

  const actoSemana = actoDe(semana.slug);
  const vacio = items.length === 0;

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

      {vacio ? (
        <aside className="mt-8 border border-rule bg-paper px-5 py-6">
          <p className="font-serif text-xl">Aún no hay un paso escrito</p>
          <p className="mt-3 leading-relaxed">
            El cuaderno no guarda impresiones: guarda el acto que el aula pidió —indicativo oído,
            un verbo del pasaje, testigo de carne y, si hace falta, una nota breve—. Si nunca se
            ha leído en esta escuela, se empieza por Marcos 7 (Éfata). Si ya se oyó la clase de
            esta semana, se escribe el acto de Filipenses 2 antes de coleccionar otro capítulo.
          </p>
          <p className="mt-4 leading-relaxed">
            Cuando el aula te envíe aquí con un pasaje en la barra, ese campo no es decoración: es
            el texto que manda sobre lo que vas a firmar. No guardes un propósito genérico. Nombra
            lo que el indicativo ya dijo.
          </p>
          {actoSemana ? (
            <p className="mt-4 leading-relaxed text-ink-soft">
              El acto de esta semana, {semana.ref}: {actoSemana.escrito}
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
              params={{ slug: semana.slug }}
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
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => setPassage(semana.ref)}
            >
              Usar el pasaje de esta semana
            </button>
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
            <LeerCapitulo ref={guardado} />
          </span>
        </p>
      ) : null}
      <section className="mt-12">
        <h2 className="font-serif text-2xl">Lo escrito</h2>
        {items.length === 0 ? (
          <p className="mt-4 leading-relaxed text-ink-soft">
            Cuando se guarde el primer acto, quedará aquí. El navegador lo recuerda; no se envía a
            otra parte.
          </p>
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
