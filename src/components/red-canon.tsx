import { Cite } from "@/components/cite";
import { abrirCita, partirCitas } from "@/lib/citas";

export function RedCanon({ centro, cruces }: { centro: string; cruces: string }) {
  const nodos = partirCitas(cruces);
  if (nodos.length === 0) return null;
  return (
    <section className="mt-12">
      <h2 className="font-serif text-3xl">Red semántica</h2>
      <p className="mt-4 text-lg leading-relaxed">
        El pasaje no viaja solo. La Escritura se interpreta a sí misma: cada hilo de esta red es un
        texto que oye al que estás estudiando, o que este oye. No es un aparato de concordancia para
        coleccionar. Es el canon hablando en voz alta.
      </p>
      <div className="red-canon mt-8">
        <p className="red-centro">{centro}</p>
        <ul>
          {nodos.map((raw) => {
            const c = abrirCita(raw);
            return (
              <li key={raw}>
                <span className="red-ref">
                  <Cite>{raw}</Cite>
                </span>
                <span className="red-hilo">{c.preview}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
