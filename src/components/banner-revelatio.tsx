import { BtnArrow } from "@/components/motif";
import { DOS_CASAS } from "@/lib/pilar";

export function BannerRevelatio() {
  return (
    <aside className="cv-auto bg-navy text-parchment">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-14 md:grid-cols-[1fr_auto] md:py-16">
        <div>
          <a
            href={DOS_CASAS.appHref}
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-parchment"
          >
            <img
              src="/brand/revelatio-book.webp"
              alt="El lector de la Escritura de Cielo Efata"
              width={56}
              height={56}
              className="h-12 w-auto object-contain sm:h-14"
              decoding="async"
              loading="lazy"
              fetchPriority="low"
            />
            <span className="leading-none">
              <span className="block font-serif text-2xl tracking-[0.16em] sm:text-3xl">
                RevelatiO
              </span>
              <span className="mt-1 block font-sans text-[0.7rem] tracking-[0.2em] text-gold-soft uppercase">
                by Cielo Efata
              </span>
            </span>
          </a>
          <p className="mt-3 font-sans text-sm tracking-[0.18em] text-gold-soft uppercase">
            revelatio.app
          </p>
          <h2 className="mt-6 font-serif text-3xl">Lee con RevelatiO</h2>
          <ul className="mt-3 max-w-[36em] space-y-1 text-lg leading-relaxed">
            <li><strong>Lectura:</strong> el capítulo entero, con otras versiones al lado.</li>
            <li><strong>Lentes:</strong> pregúntale al pasaje desde un solo enfoque, sin añadirle lo que no dice.</li>
            <li><strong>Cuaderno:</strong> guarda versículos y notas; se conecta con tus estudios aquí.</li>
          </ul>
          <p className="mt-3 text-gold-soft">RevelatiO es el lector compañero; el estudio, los tratados y los libros viven aquí, en Cielo Efata.</p>
          {DOS_CASAS.banner.map((p) => (
            <p key={p.slice(0, 24)} className="mt-5 max-w-[36em] text-lg leading-relaxed">
              {p}
            </p>
          ))}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={DOS_CASAS.leerHref} rel="noopener noreferrer" className="btn btn-gold">
              {DOS_CASAS.leerLabel}
              <BtnArrow />
            </a>
            <a href={DOS_CASAS.appHref} rel="noopener noreferrer" className="btn btn-ghost btn-ghost-navy">
              {DOS_CASAS.instalarLabel}
            </a>
            <a href="/como-se-complementan" className="btn btn-ghost btn-ghost-navy">
              Cómo se complementan
            </a>
          </div>
        </div>
        <a
          href={DOS_CASAS.appHref}
          rel="noopener noreferrer"
          className="justify-self-start md:justify-self-end"
        >
          <img
            src="/brand/revelatio-qr.webp"
            alt="Código QR para instalar revelatio.app"
            width={176}
            height={176}
            className="h-40 w-40 bg-parchment p-2 sm:h-44 sm:w-44"
            decoding="async"
            loading="lazy"
            fetchPriority="low"
          />
          <p className="mt-2 text-center font-sans text-[0.65rem] tracking-[0.16em] text-gold-soft uppercase">
            Escanea e instala
          </p>
        </a>
      </div>
    </aside>
  );
}
