import { Link } from "@tanstack/react-router";
import { Cite } from "@/components/cite";
import { BtnArrow } from "@/components/motif";
import { OFRENDA } from "@/lib/ofrenda";

export function Sostener() {
  return (
    <section
      id="sostener"
      className="border-t border-gold-soft/35 bg-navy px-4 py-16 text-parchment md:py-20"
    >
      <div className="mx-auto grid max-w-5xl items-start gap-10 md:grid-cols-[1fr_auto]">
        <div>
          <p className="kicker text-gold-soft">Ofrenda</p>
          <h2 className="mt-3 font-serif text-3xl text-parchment">{OFRENDA.title}</h2>
          <p className="mt-5 max-w-[36em] text-lg leading-relaxed text-parchment/90">{OFRENDA.gate}</p>
          <p className="mt-6 font-serif text-2xl tracking-wide">{OFRENDA.phone}</p>
          <p className="mt-1 font-sans text-sm tracking-wide text-gold-soft">{OFRENDA.phoneNote}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={OFRENDA.wa} rel="noopener noreferrer" target="_blank" className="btn btn-gold">
              {OFRENDA.escribir}
              <BtnArrow />
            </a>
            <a href={OFRENDA.tel} className="btn btn-ghost btn-ghost-navy">
              {OFRENDA.llamar}
            </a>
          </div>
          <p className="mt-5 font-sans text-sm tracking-wide text-gold-soft">
            <Cite>{OFRENDA.refs}</Cite>
          </p>
        </div>
        <a
          href={OFRENDA.wa}
          rel="noopener noreferrer"
          target="_blank"
          className="justify-self-start md:justify-self-end"
          aria-label="Escanear para sostener este trabajo por WhatsApp"
        >
          <img
            src={OFRENDA.qr}
            alt="Código QR para sostener este trabajo por WhatsApp"
            width={176}
            height={176}
            className="h-40 w-40 bg-parchment p-2 sm:h-44 sm:w-44"
            decoding="async"
            loading="lazy"
            fetchPriority="low"
          />
          <p className="mt-2 text-center font-sans text-[0.65rem] tracking-[0.16em] text-gold-soft uppercase">
            {OFRENDA.qrLabel}
          </p>
        </a>
      </div>
    </section>
  );
}

export function SostenerBoton({
  className = "",
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link to="/sostener" className={className} onClick={onClick}>
      Sostener
    </Link>
  );
}
