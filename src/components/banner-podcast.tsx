import { BtnArrow } from "@/components/motif";

const INDICE = "https://revelatio.app/episodios";
const EPISODIO_1 = "https://revelatio.app/episodios/optimizar-el-ego";

/**
 * Episodio 1 está publicado (comprobado en revelatio.app el 11-11-2026).
 * Los episodios 2 y 3 no tienen página propia: se nombran y no se enlazan.
 */
export function BannerPodcast() {
  return (
    <section className="border-b border-rule/30 px-4 py-14 md:py-16" aria-labelledby="podcast">
      <div className="casa-podcast mx-auto grid max-w-6xl gap-8 px-6 py-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:px-10 md:py-10">
        <div>
          <p className="kicker">Pódcast</p>
          <h2 id="podcast" className="seccion-titulo mt-3">
            Para oír
          </h2>
          <p className="mt-4 max-w-[38em] text-lg leading-relaxed">
            Conversaciones de Alejandro Sirit. El audio y la transcripción van juntos,
            y se escuchan en RevelatiO.
          </p>
          <ol className="mt-6 space-y-3">
            <li>
              <a href={EPISODIO_1} rel="noopener noreferrer" className="text-link underline">
                Episodio 1 · Optimizar el ego o nacer de nuevo
              </a>
            </li>
            <li>
              <span className="kicker">En preparación</span>{" "}
              <span>Episodio 2 · Cuando Dios parece callar</span>
            </li>
            <li>
              <span className="kicker">En preparación</span>{" "}
              <span>Episodio 3 · El Kybalión a la luz de la Biblia</span>
            </li>
          </ol>
        </div>
        <a href={INDICE} rel="noopener noreferrer" className="btn btn-ink">
          Oír los episodios
          <BtnArrow />
        </a>
      </div>
    </section>
  );
}
