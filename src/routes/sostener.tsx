import { createFileRoute, Link } from "@tanstack/react-router";
import { Cite } from "@/components/cite";
import { BtnArrow } from "@/components/motif";
import { Volver } from "@/components/volver";
import { OFRENDA } from "@/lib/ofrenda";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/sostener")({
  component: SostenerPage,
  head: () =>
    pageHead({
      path: "/sostener",
      title: "Sostener · Cielo Efata",
      description:
        "Esta casa no cobra la lectura de la Biblia. La ofrenda sostiene la consulta, los packs y la impresión. WhatsApp +58 424 167 4909.",
    }),
});

function SostenerPage() {
  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <Volver />
      <p className="kicker">Ofrenda</p>
      <h1 className="mt-2 font-serif text-4xl">{OFRENDA.title}</h1>
      <p className="mt-6 text-lg leading-relaxed">{OFRENDA.gate}</p>
      <p className="mt-5 text-lg leading-relaxed">{OFRENDA.mission}</p>
      <p className="mt-8 font-serif text-2xl tracking-wide">{OFRENDA.phone}</p>
      <p className="mt-1 font-sans text-sm tracking-wide text-gold">{OFRENDA.phoneNote}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a href={OFRENDA.wa} rel="noopener noreferrer" target="_blank" className="btn btn-ink">
          {OFRENDA.escribir}
          <BtnArrow />
        </a>
        <a href={OFRENDA.tel} className="btn btn-ghost">
          {OFRENDA.llamar}
        </a>
      </div>
      <a
        href={OFRENDA.wa}
        rel="noopener noreferrer"
        target="_blank"
        className="mt-10 inline-block"
        aria-label="Escanear para sostener este trabajo por WhatsApp"
      >
        <img
          src={OFRENDA.qr}
          alt="Código QR para sostener este trabajo por WhatsApp"
          width={176}
          height={176}
          className="h-40 w-40 bg-paper p-2 sm:h-44 sm:w-44"
        />
        <p className="mt-2 font-sans text-[0.65rem] tracking-[0.16em] text-gold uppercase">
          {OFRENDA.qrLabel}
        </p>
      </a>
      <p className="mt-8 font-sans text-sm tracking-wide text-gold">
        <Cite>{OFRENDA.refs}</Cite>
      </p>
      <p className="mt-10 font-sans text-sm">
        <Link to="/nosotros" className="text-link underline">
          Quién enseña
        </Link>
        {" · "}
        <Link to="/" hash="sostener" className="text-link underline">
          La ofrenda en la portada
        </Link>
      </p>
    </main>
  );
}
