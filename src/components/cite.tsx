import { Link } from "@tanstack/react-router";
import { abrirCita, partirCitas } from "@/lib/citas";

function Card({ texto }: { texto: string }) {
  return (
    <span className="glosa-card" role="tooltip">
      {texto}
    </span>
  );
}

function CiteOne({ raw }: { raw: string }) {
  const c = abrirCita(raw);
  const title = `${c.full}: ${c.preview}`;
  const slug = c.internal ? c.href.replace("/estudios/", "") : "";
  const name = `${c.raw}. ${c.preview}`;

  if (c.internal && slug) {
    return (
      <Link to="/estudios/$slug" params={{ slug }} className="cite" aria-label={name}>
        {c.raw}
        <Card texto={title} />
      </Link>
    );
  }

  return (
    <a href={c.href} className="cite" aria-label={name}>
      {c.raw}
      <Card texto={title} />
    </a>
  );
}

export function Cite({ children }: { children: React.ReactNode }) {
  const parts = partirCitas(String(children ?? ""));
  if (parts.length === 0) return null;
  return (
    <>
      {parts.map((raw, i) => (
        <span key={`${raw}-${i}`}>
          {i === 0 ? " " : " · "}
          <CiteOne raw={raw} />
        </span>
      ))}
    </>
  );
}

export function Term({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <abbr className="term" tabIndex={0}>
      {children}
      <Card texto={title} />
    </abbr>
  );
}

export function Refs({ refs }: { refs: string | readonly string[] }) {
  const blob = Array.isArray(refs) ? refs.join(" · ") : refs;
  return (
    <p className="citas mt-3 font-sans text-sm tracking-wide">
      <Cite>{blob}</Cite>
    </p>
  );
}

export function Verso({ texto, voz }: { texto: string; voz?: string }) {
  let inner: React.ReactNode = texto;
  if (voz) {
    const i = texto.indexOf(voz);
    if (voz === texto || i < 0) {
      inner = <span className="voz-dios">{texto}</span>;
    } else {
      inner = (
        <>
          {texto.slice(0, i)}
          <span className="voz-dios">{voz}</span>
          {texto.slice(i + voz.length)}
        </>
      );
    }
  }
  return <blockquote className="verso mt-8">{inner}</blockquote>;
}
