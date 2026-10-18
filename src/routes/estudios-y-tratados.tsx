import { createFileRoute, Link } from "@tanstack/react-router";
import { NOMBRE_TIPO, PARA_QUIEN, tipoDe, type Tipo } from "@/lib/clasificacion";
import { ESTUDIOS_INDICE } from "@/lib/estudios-indice";
import { pageHead, tituloSeccion } from "@/lib/seo";
import { TRATADOS_INDICE } from "@/lib/tratados-indice";

export const Route = createFileRoute("/estudios-y-tratados")({
  head: () =>
    pageHead({
      path: "/estudios-y-tratados",
      title: tituloSeccion("Estudios y tratados: cuál leer y por qué"),
      description:
        "Un estudio abre un pasaje versículo a versículo; un tratado recorre un tema por toda la Escritura. Para quién es cada uno, por qué existen los dos y por dónde empezar.",
    }),
  component: EstudiosYTratadosPage,
});

type Obra = { slug: string; title: string; ref: string; href: string; tipo: Tipo };

function obras(): Obra[] {
  const e: Obra[] = ESTUDIOS_INDICE.map((s) => ({
    slug: s.slug,
    title: s.title,
    ref: s.ref,
    href: s.obraHref ?? `/estudios/${s.slug}`,
    tipo: tipoDe(s.slug, "estudio"),
  }));
  const t: Obra[] = TRATADOS_INDICE.map((s) => ({
    slug: s.slug,
    title: s.title,
    ref: s.ref,
    href: `/tratados/${s.slug}`,
    tipo: tipoDe(s.slug, "tratado"),
  }));
  return [...e, ...t];
}

/** Rutas sugeridas: primero el estudio del pasaje, luego el tratado del mismo asunto. */
const RUTAS: { estudio: string; tratado: string; porque: string }[] = [
  {
    estudio: "filipenses-2",
    tratado: "teologia-de-la-cruz",
    porque: "El himno del Siervo muestra la forma de siervo y la muerte de cruz en un solo párrafo; el tratado lleva esa cruz a la predicación, donde el mundo la llama locura.",
  },
  {
    estudio: "romanos-8-17",
    tratado: "teologia-de-la-gloria",
    porque: "El versículo pone la herencia bajo la condición de padecer juntamente con Cristo; el tratado desnuda la gloria que quiere reinar sin ese padecer.",
  },
  {
    estudio: "marcos-7",
    tratado: "el-texto-manda",
    porque: "Éfata abre el oído antes que la lengua; el tratado enseña a leer el capítulo completo antes de hablar.",
  },
];

function EstudiosYTratadosPage() {
  const lista = obras();
  const porSlug = new Map(lista.map((o) => [o.slug, o]));
  const grupo = (tipo: Tipo) => lista.filter((o) => o.tipo === tipo);
  return (
    <main className="mx-auto max-w-[48em] px-4 py-16 md:py-24">
      <p className="kicker">Cómo usar esta casa</p>
      <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">
        Estudios y tratados: cuál leer y por qué
      </h1>
      <p className="mt-6 text-lg leading-relaxed">
        No se trata de dos tamaños de la misma cosa, sino de dos maneras de obedecer al texto. El estudio se
        sienta delante de un pasaje y no se levanta hasta haberlo oído versículo a versículo; el tratado toma un
        asunto que la Escritura entera enseña y lo sigue, con argumento ordenado, de libro en libro, hasta que la
        doctrina queda dicha con el peso que el canon le da. Por consiguiente, la diferencia no la decide el número
        de páginas, sino el enfoque: el pasaje manda en el estudio; el tema, oído en todo el canon, manda en el
        tratado.
      </p>

      <section id="estudio" className="mt-14 scroll-mt-24">
        <h2 className="font-serif text-3xl">{NOMBRE_TIPO.estudio}: un pasaje, versículo a versículo</h2>
        <p className="mt-2 font-sans text-sm text-gold">{PARA_QUIEN.estudio}</p>
        <p className="mt-5 leading-relaxed">
          El estudio hace lo que hacían los levitas cuando el pueblo volvió a oír la ley: <em>Y leían en el libro
          de la ley de Dios claramente, y ponían el sentido, de modo que entendiesen la lectura.</em> (Nehemías
          8:8) Se lee el capítulo entero, se sitúa su entorno, se pesa la palabra que carga el argumento y se llega a
          una decisión concreta para la semana. Sirve al creyente que abre la Biblia cada mañana y al grupo pequeño
          que se reúne alrededor de un texto, porque no presupone biblioteca, sino oído. Ahora bien, no es una
          lectura liviana: es la misma disciplina de los de Berea, que <em>recibieron la palabra con toda
          solicitud, escudriñando cada día las Escrituras para ver si estas cosas eran así.</em> (Hechos 17:11)
        </p>
      </section>

      <section id="tratado" className="mt-14 scroll-mt-24">
        <h2 className="font-serif text-3xl">{NOMBRE_TIPO.tratado}: un tema por toda la Escritura</h2>
        <p className="mt-2 font-sans text-sm text-gold">{PARA_QUIEN.tratado}</p>
        <p className="mt-5 leading-relaxed">
          El tratado no abandona el pasaje; lo pone en fila con los demás testigos del canon. Establece la cuestión,
          distingue lo que se confunde, cita el hebreo y el griego cuando la palabra sostiene el argumento, convoca a
          los intérpretes como siervos del texto y concluye. Por eso se dirige a quienes enseñan: <em>Lo que has
          oído de mí ante muchos testigos, esto encarga a hombres fieles que sean idóneos para enseñar también a
          otros.</em> (2 Timoteo 2:2) Es el alimento que la carta a los Hebreos reserva <em>para los que han
          alcanzado madurez, para los que por el uso tienen los sentidos ejercitados en el discernimiento del bien
          y del mal.</em> (Hebreos 5:14)
        </p>
        <p className="mt-5 leading-relaxed">
          Un tratado puede ser breve. En la tradición cristiana, la palabra nombra el modo de tratar un asunto, no el
          grosor del volumen: Lutero publicó en 1520 <em>La libertad cristiana</em>, un tratado de pocas páginas. Lo
          que hace tratado a un escrito es que ordena un tema con la Escritura entera; lo que hace estudio a otro es
          que se deja gobernar por un pasaje.
        </p>
      </section>

      <section className="mt-14">
        <h2 className="font-serif text-3xl">Por dónde empezar</h2>
        <p className="mt-5 leading-relaxed">
          Empiece por un estudio y profundice con un tratado. El orden no es de dificultad, sino de obediencia: primero
          se oye el pasaje en su casa, y solo después se lo pone a conversar con el resto del canon, para que el tema
          no se coma al texto.
        </p>
        <ol className="mt-8 space-y-6">
          {RUTAS.map((r) => {
            const e = porSlug.get(r.estudio);
            const t = porSlug.get(r.tratado);
            if (!e || !t) return null;
            return (
              <li key={r.estudio} className="border-t border-rule pt-5">
                <p className="font-sans text-sm">
                  <a href={e.href} className="text-link underline">
                    {e.title} · {e.ref}
                  </a>{" "}
                  →{" "}
                  <a href={t.href} className="text-link underline">
                    {t.title} · {t.ref}
                  </a>
                </p>
                <p className="mt-2 leading-relaxed">{r.porque}</p>
              </li>
            );
          })}
        </ol>
      </section>

      {(["estudio", "tratado"] as const).map((tipo) => (
        <section key={tipo} className="mt-14">
          <h2 className="font-serif text-3xl">{tipo === "estudio" ? "Todos los estudios" : "Todos los tratados"}</h2>
          <ul className="mt-6 divide-y divide-rule border-y border-rule">
            {grupo(tipo).map((o) => (
              <li key={o.slug}>
                <a href={o.href} className="block py-4 hover:text-gold">
                  <span className="font-sans text-sm text-gold">{o.ref}</span>
                  <span className="block font-serif text-xl">{o.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className="mt-14 border-t border-rule pt-8">
        <h2 className="font-serif text-2xl">Decisión para esta semana</h2>
        <p className="mt-4 leading-relaxed">
          Semana del 19 al 25 de octubre de 2026. Elijo un estudio de la lista y lo leo entero, un día tras otro, con
          la Biblia abierta en el capítulo. Antes del domingo 25 escribo en el cuaderno qué me mandó el pasaje, y solo
          entonces abro el tratado que lo acompaña.
        </p>
        <p className="mt-6 font-sans text-sm">
          <Link to="/estudios" className="text-link underline">
            Ir a los estudios
          </Link>{" "}
          ·{" "}
          <Link to="/tratados" className="text-link underline">
            Ir a los tratados
          </Link>
        </p>
      </section>
    </main>
  );
}
