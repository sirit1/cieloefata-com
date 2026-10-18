/** Guía gratuita y piezas sencillas del Método V.E.R.D.A.D. para quien empieza (/verdad). */
export const VERDAD_GUIA = {
  titulo: "V.E.R.D.A.D. Seis preguntas para abrir la Escritura",
  paginas: 20,
  pdf: "/verdad/verdad-guia-gratuita.pdf",
  epub: "/verdad/verdad-guia-gratuita.epub",
  hoja: "/verdad/hoja-verdad.pdf",
  tarjeta: "/verdad/tarjeta-verdad.jpg",
  portada: "/verdad/portada-verdad.jpg",
  revelatio: "https://revelatio.app/leer?libro=marcos&cap=1&metodo=1",
  revelatioReto: "https://revelatio.app/leer?libro=santiago&cap=1&metodo=1",
  efataKindle: "https://www.amazon.com/dp/B0HJ15ZXL3",
} as const;

/** Las seis letras en palabras sencillas; la versión completa vive en /metodo. */
export const LETRAS_SENCILLAS = [
  { l: "V", nombre: "Ver", pregunta: "¿Qué está escrito?", body: "Lee el capítulo entero, en voz alta si puedes. Anota quién habla, a quién, qué se repite y dónde cambia el tema.", ref: "Neh. 8:8" },
  { l: "E", nombre: "Entorno", pregunta: "¿Quién escribe, a quién y qué clase de escrito es?", body: "Un salmo no se lee como una ley, ni una carta como un relato. Mira qué viene antes y qué sigue.", ref: "2 Ti. 2:15" },
  { l: "R", nombre: "Revelación", pregunta: "¿Qué palabra lleva el peso del pasaje?", body: "Escoge una o dos palabras y búscalas por su número Strong, que es como su número de casa en el diccionario bíblico. Si hay duda, escríbela.", ref: "Mt. 5:18" },
  { l: "D", nombre: "Doctrina", pregunta: "¿Qué enseña este texto de Dios, del pecado, de Cristo y de su pueblo?", body: "Lo que el pasaje enseña y no se puede callar, leído junto con el resto de la Biblia.", ref: "2 Ti. 3:16–17" },
  { l: "A", nombre: "Argumento", pregunta: "¿Qué objeción honesta levanta, contra mí o desde mí?", body: "Nómbrala como la dirías en la cocina y respóndela con este mismo pasaje, con mansedumbre.", ref: "1 P. 3:15" },
  { l: "D", nombre: "Decisión", pregunta: "¿Qué voy a obedecer esta semana, y ante quién?", body: "Un solo acto, sacado de un verbo del texto, con fecha y con un testigo que pueda preguntarte el domingo.", ref: "Stg. 1:22" },
] as const;

export const RETO_6_DIAS = [
  { dia: 1, letra: "Ver", tarea: "Lee Santiago 1 entero, dos veces, una de ellas en voz alta. Anota qué palabras se repiten (prueba, palabra, oír) y dónde cambia el tema." },
  { dia: 2, letra: "Entorno", tarea: "¿Quién escribe y a quiénes (1:1)? ¿Qué clase de escrito es? Lee también el comienzo del capítulo 2." },
  { dia: 3, letra: "Revelación", tarea: "Escoge «hacedores» (ποιηταί, Strong G4163: los que ponen por obra) u «oidores» (ἀκροαταί, G202: los que solo escuchan) y escribe en una línea lo que añade." },
  { dia: 4, letra: "Doctrina", tarea: "Una frase sobre Dios (1:5, 1:17), el pecado (1:14–15), Cristo, el Señor a quien Santiago sirve (1:1), la palabra de verdad por la que Dios nos hizo nacer (1:18) y su pueblo (1:27)." },
  { dia: 5, letra: "Argumento", tarea: "Escribe tu propia objeción: «Ya oigo la Palabra cada domingo, con eso basta.» Respóndela con 1:22–25." },
  { dia: 6, letra: "Decisión", tarea: "Un verbo del capítulo (pedir, oír, hacer, refrenar, visitar) convertido en un acto con fecha y testigo. Envíale tu estudio." },
] as const;
