import { createFileRoute, Link } from "@tanstack/react-router";
import { Cite, Refs } from "@/components/cite";
import { ConLemas } from "@/components/lema";
import { Seal } from "@/components/seal";
import { Volver } from "@/components/volver";
import { FIGURAS, SELLO, TINTAS, TIPOS, USO } from "@/lib/identidad";

export const Route = createFileRoute("/sello")({ component: SelloPage });

function SelloPage() {
  return (
    <main>
      <section className="px-4 py-20 md:py-28">
        <div className="mx-auto max-w-[40em]">
          <Volver />
        </div>
        <div className="mx-auto max-w-[40em] text-center">
          <Seal variant="full" size={280} className="mx-auto mb-10 h-auto w-[13rem] md:w-[16rem]" />
          <p className="lema-latin glosa" tabIndex={0}>
            {SELLO.latin}
            <span className="glosa-card" role="tooltip">
              {SELLO.romance}
            </span>
          </p>
          <p className="lema-romance">{SELLO.romance}</p>
          <h1 className="mt-10 font-serif text-4xl md:text-5xl">{SELLO.title}</h1>
          <p className="mt-8 text-left text-lg leading-relaxed">
            <ConLemas>{SELLO.gate}</ConLemas>
          </p>
          <div className="text-left">
            <Refs refs={SELLO.refs} />
          </div>
        </div>
      </section>

      <section className="border-y border-rule/40 bg-paper px-4 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl">Tres figuras, un Nombre</h2>
          <p className="mt-4 max-w-[40em] leading-relaxed">
            El sello no inventa un dios. Nombra al que ya está en el libro. El León y el Cordero
            no son dos cristos: son el mismo, visto de dos lados, como Apocalipsis 5 los anuncia
            y los ve. El Fuego no es un clima de reunión. Es el Espíritu Santo: el que Juan
            anunció —bautizará en Espíritu Santo y fuego— y el que en Pentecostés se apareció
            como lenguas de fuego. El que dijo Éfata en Galilea es el León y el Cordero; el
            Fuego es el Espíritu que ese mismo Señor envía.
          </p>
          <ul className="mt-12 grid gap-10 sm:grid-cols-3">
            {FIGURAS.map((f) => (
              <li key={f.name}>
                <h3 className="font-serif text-2xl">{f.name}</h3>
                <p className="mt-2 leading-relaxed">{f.line}</p>
                <p className="mt-2 font-sans text-sm tracking-wide text-gold">
                  <Cite>{f.ref}</Cite>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-4 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl">Tres tintas</h2>
          <p className="mt-4 max-w-[40em] leading-relaxed">
            No hay una cuarta. El marino es el campo. El oro es el anillo. El pergamino es la
            página. Lo demás se sienta atrás, porque una paleta que se multiplica ya ha dejado de
            confesar y ha empezado a decorar.
          </p>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {TINTAS.map((t) => (
              <li key={t.name}>
                <TintaSwatch token={t.token} />
                <p className="mt-4 font-serif text-2xl">{t.name}</p>
                <p className="mt-1 font-sans text-xs tracking-[0.16em] text-muted uppercase">
                  {t.hex}
                </p>
                <p className="mt-3 leading-relaxed text-ink-soft">{t.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-rule/40 bg-navy px-4 py-20 text-parchment md:py-28">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row md:items-center md:gap-16">
          <Seal
            variant="onNavy"
            size={200}
            className="h-40 w-40 shrink-0 md:h-48 md:w-48"
          />
          <div className="max-w-[40em]">
            <p className="kicker kicker-navy">El tipo de la página</p>
            <h2 className="mt-4 font-serif text-4xl italic md:text-5xl">{TIPOS.pagina.name}</h2>
            <p className="mt-6 text-lg leading-relaxed text-parchment/90">{TIPOS.pagina.role}</p>
            <p className="mt-10 kicker kicker-navy">El tipo del aparato</p>
            <p className="mt-4 font-sans text-xl tracking-wide">{TIPOS.aparato.name}</p>
            <p className="mt-3 leading-relaxed text-parchment/90">{TIPOS.aparato.role}</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:py-28">
        <div className="mx-auto max-w-[40em]">
          <h2 className="font-serif text-3xl">Cómo se usa</h2>
          <ol className="mt-10 space-y-8">
            {USO.map((u, i) => (
              <li key={u.name} className="border-t border-rule pt-6">
                <p className="font-sans text-xs tracking-[0.2em] text-gold uppercase">
                  {String(i + 1).padStart(2, "0")} · {u.name}
                </p>
                <p className="mt-3 leading-relaxed">{u.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12">
            <Seal variant="full" size={160} decorative className="h-40 w-auto" />
            <p className="mt-4 font-sans text-xs tracking-wide text-muted">
              El sello entero: León, Cordero y Fuego juntos. No se recorta.
            </p>
          </div>
          <Link to="/" className="btn btn-ink mt-16">
            Volver a la casa
          </Link>
        </div>
      </section>
    </main>
  );
}

function TintaSwatch({ token }: { token: (typeof TINTAS)[number]["token"] }) {
  const cls =
    token === "navy"
      ? "bg-navy"
      : token === "gold-soft"
        ? "bg-gold-soft"
        : "bg-parchment ring-1 ring-rule/50";
  return <div className={`h-24 w-full ${cls}`} aria-hidden />;
}
