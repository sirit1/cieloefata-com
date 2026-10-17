/**
 * COPY PACK NIVEL+ — prosa de casa (2026-09-23).
 * No se reescribe para que suene más corto. El pack manda.
 */

export const ETIQUETA_ESTA_SEMANA = "Esta semana";
export const GLOSA_ESTA_SEMANA =
  "Un capítulo completo, estudiado con el método V.E.R.D.A.D., hasta un paso concreto de obediencia.";

export const ETIQUETA_TRATADO_MES = "Tratado del mes";
export const GLOSA_TRATADO_MES =
  "Un versículo muy citado, leído otra vez dentro del capítulo que lo sostiene.";

export const MARCO_RITMO =
  "No publicamos contenido para llenar redes. Abrimos la Escritura, leemos el pasaje completo y salimos con una obediencia concreta para la vida diaria. El estudio destacado es el pasaje que estamos leyendo ahora; el tratado del mes toma un versículo que a menudo se cita fuera de contexto y lo devuelve a su capítulo.";

export const MARCO_HOY = "";

/** Nueve muestras de primer capítulo. Clave: slug del libro. */
export const MUESTRAS_TOMO: Record<string, string> = {
  efata:
    "Éfata se lee de corrido, en cuarenta estaciones agrupadas en cinco partes: «Lo traen», «Éfata», «A quién oyó», «La casa» y «Permanece». Parte del oído que Cristo abre en Marcos 7, pasa por el Padre, el Hijo y el Espíritu que hablan en la Escritura, y enseña el método V.E.R.D.A.D. para leer un pasaje entero sin arrancarle una frase. No es un plan de lecturas por semanas: es un libro para leer y volver a él.",
  "el-siervo-no-tu":
    "Isaías no te ofrece un espejo: te muestra a un inocente en lugar del culpable. El cuarto Cántico del Siervo (52:13–53:12) dice lo que el título no permite mover: Él llevó; nosotros éramos. Este libro derriba la autoexpiación evangélica y la idea de un «Siervo terapéutico». La ofrenda por la culpa (ʾāšām, Isaías 53:10) no se imita. Tú no eres el Siervo: el eunuco de Hechos 8 no se pone a sí mismo en el versículo, sino que pregunta de quién habla el profeta, cree y pide el bautismo.",
  "bastate-mi-gracia":
    "Tres veces rogó Pablo que le quitaran el aguijón. El Señor no lo quitó: habló. «Bástate mi gracia» no es un lema de conferencia ni la promesa de que todo dolor será quitado; es una palabra que permanece mientras el aguijón permanece. Este libro lee 2 Corintios 12:1–10 entero —las visiones de las que Pablo no presume, el mensajero de Satanás, el ruego tres veces repetido, el poder que se perfecciona en la debilidad—. La gracia alcanza aunque el aguijón no se vaya.",
  "cuando-el-cielo-se-cae":
    "Hay un día en Uz en que cuatro mensajeros cruzan el umbral y Job bendice el Nombre con las manos vacías: Jehová dio, y Jehová quitó. Hay una noche en Getsemaní en que el Hijo llama Abba, pide que se aparte la copa y añade la cláusula que este libro no suelta: mas no lo que yo quiero, sino lo que tú. El «no» de Dios no es abandono ni resiliencia con versículo. Job 1–2 y 38–42, con Marcos 14:36 como bisagra, enseñan a orar cuando el cielo no responde a la medida de lo pedido.",
  "el-altar-del-espejo":
    "Esto es una historia, no un canto y no un comentario. El principio es un hombre delante de un cristal, y entre el principio y el fin hay un culto, el de sí mismo, que va a tomar forma de fama, de poder, de posesiones y de un lugar entre los otros. Santiago lo puso ahí sin nombre para que el lector no pueda mirarlo como a otro, y el libro no adelanta el fin: te deja a su lado, todavía mirándose.",
  "de-una-misma-boca":
    "Un hombre sin nombre ha confesado esta mañana con su boca que Jesús es el Señor. Este libro no le inventa una vida: se queda a su lado mientras el día avanza y la misma boca quiere la primera palabra, ofende, enciende el bosque y descubre que ningún hombre puede domar la lengua. De una misma boca proceden bendición y maldición, y ninguna fuente echa agua dulce y amarga por la misma abertura.",
  "portico-a-la-escritura":
    "La historia es una. Empieza con un Dios que habla, y las cosas son. Sigue por un pueblo que olvida y es guardado, y llega a un Hijo que camina, muere y resucita. Este libro recorre los sesenta y seis libros como una sola historia.",
  "diakrisis":
    "«Amados, no creáis a todo espíritu, sino probad los espíritus si son de Dios.» Vivimos en una época que ha hecho de la tolerancia indiscriminada su virtud más alta, y esa anestesia ha entrado también en la iglesia.",
  "nunca-tocaras-mi-fe":
    "«Nunca tocarás mi fe» fue un grito dirigido al maligno, no una oración ni un lema de victoria. Lo cuenta quien lo gritó, y lo pone debajo de la Escritura: «por gracia sois salvos por medio de la fe».",
};

export const RETOMAR_TITULO = "Retomar mi paso";

export function retomarAulaSinActo(titulo: string, pasaje: string): string {
  return `Ya leíste ${titulo}, pero aún no has escrito tu paso sobre ${pasaje}. Vuelve al cuaderno y anota lo que el pasaje te pide, con el nombre de alguien de confianza, antes de abrir otro capítulo.`;
}

export function retomarObediencia(pasaje: string, decision: string): string {
  return `La última obediencia escrita fue sobre ${pasaje}: «${decision}». Puedes seguir con ese mismo texto o escribir el paso que te pide el estudio de esta semana. El cuaderno no acumula impresiones: guarda, con fecha, el hábito de oír y obedecer.`;
}

export function retomarEnlace(pasaje: string): string {
  return `Retomar mi paso · Seguir ${pasaje}`;
}

export const CUADERNO_VACIO =
  "Este cuaderno no es un diario de emociones ni una lista de buenos propósitos: es el lugar donde lo que el texto dice se vuelve obediencia. Anota lo que Dios ha hecho según el pasaje, el paso concreto que te pide, el nombre de alguien de confianza y la fecha. Si es tu primera vez, empieza por Marcos 7. Si ya leíste el estudio destacado, escribe aquí tu paso antes de pasar a otro capítulo.";

export const CANON_LEER =
  "Leer el capítulo. Abre este pasaje completo en RevelatiO, nuestro lector, para que la Escritura vaya antes que el comentario.";

export const CANON_ESTUDIO =
  "Estudio. Este mismo texto, estudiado con el método V.E.R.D.A.D. hasta un paso concreto de obediencia.";

export const CANON_TRATADO =
  "Tratado. Lee el tratado que devuelve este versículo al capítulo que lo sostiene, cuando se ha citado fuera de contexto.";

export const PACK_WHATSAPP: Record<string, string> = {
  efata:
    "Hola, soy de cieloefata.com; solicito el pack del libro Éfata: La Escritura Abierta para oír Marcos 7 entero",
  "el-siervo-no-tu":
    "Hola, soy de cieloefata.com; solicito el pack del libro El Siervo, no tú (Isaías 53) para leer el Cántico del Siervo sin hurtar el capítulo.",
  "bastate-mi-gracia":
    "Hola, soy de cieloefata.com; solicito el pack del libro Bástate mi gracia (2 Corintios 12) sobre la gracia que basta cuando el aguijón permanece.",
  "cuando-el-cielo-se-cae":
    "Hola, soy de cieloefata.com; solicito el pack del libro Cuando el cielo se cae (Job) para orar cuando el cielo no responde como pedí.",
  "el-altar-del-espejo":
    "Hola, soy de cieloefata.com; solicito el pack del libro El altar del espejo (Santiago 1) para dejar de ser oidor olvidadizo.",
  "de-una-misma-boca":
    "Hola, soy de cieloefata.com; solicito el pack del libro De una misma boca (Santiago 3) sobre la boca que confiesa y la lengua que ningún hombre doma.",
  "portico-a-la-escritura":
    "Hola, soy de cieloefata.com; solicito el pack del libro Pórtico a la Escritura (los 66 libros de la Biblia).",
  "diakrisis":
    "Hola, soy de cieloefata.com; solicito el pack del libro Diákrisis (1 Juan 4) sobre el discernimiento bíblico y el Método P.R.O.B.A.D..",
  "nunca-tocaras-mi-fe":
    "Hola, soy de cieloefata.com; solicito el pack del libro Nunca tocarás mi fe (Efesios 2) sobre la fe que es don de Dios.",
};

export function textoPackWhatsApp(slug: string, title?: string): string {
  return (
    PACK_WHATSAPP[slug] ??
    (title
      ? `Hola, soy de cieloefata.com; solicito el pack del libro ${title}.`
      : "Hola, soy de cieloefata.com; solicito el pack de un libro de Editorial Cielo Efata.")
  );
}

export const SLUGS_TOMO = [
  "efata",
  "el-siervo-no-tu",
  "bastate-mi-gracia",
  "cuando-el-cielo-se-cae",
  "el-altar-del-espejo",
  "de-una-misma-boca",
  "portico-a-la-escritura",
  "diakrisis",
  "nunca-tocaras-mi-fe",
] as const;
