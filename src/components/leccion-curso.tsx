import type { Bloque } from "@/lib/curso";

/** Cuerpo de una lección del curso: títulos de sección, párrafos y citas RVR1960. */
export function LeccionCuerpo({ bloques }: { bloques: Bloque[] }) {
  return (
    <div className="mt-10">
      {bloques.map(([t, s], i) =>
        t === "h" ? (
          <h2 key={i} id={`leccion-h-${i}`} className="mt-12 font-serif text-2xl leading-snug">
            {s}
          </h2>
        ) : t === "q" ? (
          <blockquote key={i} className="mt-5 border-l-2 border-gold pl-4 font-serif text-lg leading-relaxed">
            {s}
          </blockquote>
        ) : (
          <p key={i} className="mt-5 text-lg leading-relaxed">
            {s}
          </p>
        ),
      )}
    </div>
  );
}
