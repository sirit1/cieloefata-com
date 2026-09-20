import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/guias")({ component: GuiasPage });

const guias = [
  {
    title: "Los números Strong",
    body: "Un número Strong es una etiqueta de diccionario: señala una raíz hebrea o griega. No es revelación. No predica. Sirve cuando el pasaje ya se oyó entero, para no quedarse con una palabra castellana que el original no carga, o para no inventar una que el original no pidió. El que abre el léxico antes de abrir el capítulo deja que el diccionario hable por Dios.",
    ref: "Esd. 7:10 · 2 Ti. 2:15",
  },
  {
    title: "Cómo se lee",
    body: "La Escritura tiene la última palabra. El versículo no viaja solo: tiene autor, destinatario, lo que viene antes y lo que sigue. Las lenguas originales sirven al pasaje. Un salmo no se lee como una ley, ni Romanos como un proverbio. Quien recorta un renglón para que quede bien en una imagen todavía no ha leído.",
    ref: "Neh. 8:8 · 2 P. 3:15–16",
  },
  {
    title: "Del pasaje a la palabra dicha",
    body: "Un texto, un solo punto. Del capítulo oído se llega a una obediencia o a una confesión, no a una lista de consejos genéricos. Si vas a hablar delante de otros, el pasaje manda el tema. Lo que el texto no carga, no se añade para redondear el discurso.",
    ref: "2 Ti. 4:2 · Stg. 1:22",
  },
  {
    title: "La pregunta difícil",
    body: "Alguien objeta. Este pasaje responde, no uno más cómodo. La objeción honesta se nombra y se deja que la misma Escritura la juzgue. Huir al versículo preferido es otra forma de no oír.",
    ref: "He. 4:12–13 · Hch. 17:11",
  },
];

function GuiasPage() {
  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <p className="font-sans text-xs tracking-[0.2em] text-gold uppercase">Guías</p>
      <h1 className="mt-2 font-serif text-4xl">Para no dejar el texto a medias</h1>
      <p className="mt-5 text-lg leading-relaxed">
        Estas páginas no caducan porque el oficio no cambia: oír el capítulo, preguntar lo que el
        texto carga, obedecer lo que el indicativo manda. Quien llega aprende. El capítulo sigue
        siendo el señor de la casa, y la guía que se siente en el trono ya dejó de guiar.
      </p>
      <ul className="mt-10 space-y-10">
        {guias.map((g) => (
          <li key={g.title} className="border-t border-rule pt-6">
            <h2 className="font-serif text-2xl">{g.title}</h2>
            <p className="mt-3 leading-relaxed">{g.body}</p>
            <p className="mt-2 font-sans text-sm tracking-wide text-gold">{g.ref}</p>
          </li>
        ))}
      </ul>
      <Link to="/metodo" className="mt-10 inline-block font-sans text-sm text-link underline">
        Las seis preguntas, con el pasaje delante
      </Link>
    </main>
  );
}