import { OBJECIONES } from "@/lib/objeciones";
import { mismoLibro, pliegue, revelatioDeLibro } from "@/lib/libro";
import { studies } from "@/lib/studies";
import { tratados } from "@/lib/tratados";

export { revelatioDeLibro, mismoLibro, nombreLibro, pliegue } from "@/lib/libro";

export function estudiosDeLibro(libro: string) {
  return studies.filter((s) => mismoLibro(s.ref, libro));
}

export function tratadosDeLibro(libro: string) {
  return tratados.filter((t) => mismoLibro(t.ref, libro));
}

export type Hallazgo = {
  kind: "estudio" | "tratado" | "objecion";
  slug: string;
  title: string;
  ref: string;
  blurb: string;
  href: string;
};

export function indiceBusqueda(): Hallazgo[] {
  const estudios: Hallazgo[] = studies.map((s) => ({
    kind: "estudio",
    slug: s.slug,
    title: s.title,
    ref: s.ref,
    blurb: s.ver.slice(0, 220),
    href: `/estudios/${s.slug}`,
  }));
  const ensay: Hallazgo[] = tratados.map((t) => ({
    kind: "tratado",
    slug: t.slug,
    title: t.title,
    ref: t.ref,
    blurb: t.blurb,
    href: `/tratados/${t.slug}`,
  }));
  const obj: Hallazgo[] = OBJECIONES.map((o) => ({
    kind: "objecion",
    slug: o.tratadoSlug,
    title: o.lemma,
    ref: o.verse,
    blurb: o.lead,
    href: `/objeciones#${o.tratadoSlug}`,
  }));
  return [...estudios, ...ensay, ...obj];
}

export function buscarCasa(query: string, limite = 24): Hallazgo[] {
  const q = pliegue(query);
  if (q.length < 2) return [];
  const tokens = q.split(" ").filter(Boolean);
  return indiceBusqueda()
    .map((item) => {
      const hay = pliegue(`${item.title} ${item.ref} ${item.blurb} ${item.slug}`);
      const hits = tokens.filter((t) => hay.includes(t)).length;
      return { item, hits };
    })
    .filter((row) => row.hits === tokens.length)
    .slice(0, limite)
    .map((row) => row.item);
}
