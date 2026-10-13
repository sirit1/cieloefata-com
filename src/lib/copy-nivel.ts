/**
 * COPY PACK NIVEL+ — prosa de casa (2026-09-23).
 * No se reescribe para que suene más corto. El pack manda.
 */

export const ETIQUETA_ESTA_SEMANA = "Esta semana";
export const GLOSA_ESTA_SEMANA =
  "El aula viva del oficio: un capítulo entero, la cadena V.E.R.D.A.D. y un solo acto fechado.";

export const ETIQUETA_TRATADO_MES = "Tratado del mes";
export const GLOSA_TRATADO_MES =
  "El versículo que viajaba solo vuelve al capítulo que lo sostiene, hasta que la jactancia se calle.";

export const MARCO_RITMO =
  "Esta casa no publica «contenido de la semana» para llenar un feed. Publica un ritmo de ministerio: la Escritura se abre, se oye el párrafo entero y se sale con una obediencia que cabe en la vida ordinaria —con fecha y con testigo—, no con un lema para compartirlo. «Esta semana» nombra el aula que está abierta ahora; «Tratado del mes» nombra el pasaje que la asamblea ha estado citando fuera de contexto y que aquí se restituye al canto o al capítulo que lo guarda. Quien entra no colecciona ediciones: recibe un oficio que se repite hasta que el oído ceda y la rodilla cierre.";

export const MARCO_HOY =
  "Hoy el aula de «Esta semana» permanece en 2 Pedro 1, donde Pedro pide añadir a la fe, a costa propia, un eslabón: Dios ya dio cuanto concierne a la vida y a la piedad; el que no añade no es humilde, es ciego. No se ofrece como producto destacado, sino como el texto que esta escuela está leyendo juntos hasta que el eslabón deje de ser cita y se vuelva acto. El «Tratado del mes» permanece en «El texto manda»: V.E.R.D.A.D. no es un acrónimo para recitar. Es el cauce por el que esta casa oye el capítulo entero, hasta que el comentario se siente atrás. El texto manda. El método sirve. La rodilla cierra.";

/** Siete muestras de primer capítulo. Clave: slug del tomo. */
export const MUESTRAS_TOMO: Record<string, string> = {
  efata:
    "En la Decápolis le trajeron a Jesús un hombre sordo y tartamudo. No vino él. El Señor lo apartó de la gente, levantó los ojos al cielo, gimió y le dijo: Éfata. Este libro camina esa hora en cuarenta estaciones, de un solo tirón. No es un plan de semanas ni una hoja para copiar: después de la apertura el oído puede volverse a cerrar, y el camino pasa por el Padre, el Hijo y el Espíritu, y por el oficio de oír la Escritura sin arrancarle una frase.",
  "el-siervo-no-tu":
    "Isaías no te ofrece un espejo: te muestra a un inocente en lugar del culpable. El cuarto Cántico del Siervo (52:13–53:12) dice lo que el título no permite mover: Él llevó; nosotros éramos. Este tomo derriba la autoexpiación evangélica y el «Siervo terapéutico» que se cuela por la herida. El ʾāšām no se imita. Tú no eres el Siervo; el eunuco no se pone en el versículo: pregunta de quién habla el profeta, cree y pide el agua.",
  "bastate-mi-gracia":
    "Tres veces rogó Pablo que le quitaran el aguijón. El Señor no lo quitó: habló. «Bástate mi gracia» no es lema de conferencia ni derecho a extracción clínica; es sentencia que permanece mientras el clavo permanece. Este tomo oye 2 Corintios 12:1–10 entero —visiones que no son currículum, mensajero de Satanás, ruego reiterado, poder que se perfecciona en la flaqueza— y distingue el oficio de Job: Bástate no es Cielo. La gracia alcanza aunque el aguijón no se vaya.",
  "cuando-el-cielo-se-cae":
    "Hay un día en Uz en que cuatro mensajeros cruzan el umbral y Job bendice el Nombre con las manos vacías: Jehová dio, y Jehová quitó. Hay una noche en Getsemaní en que el Hijo llama Abba, pide que se aparte la copa y añade la cláusula que este tomo no suelta: mas no lo que yo quiero, sino lo que tú. El «no» de Dios no es abandono ni resiliencia con versículo. Job 1–2 y 38–42, con Marcos 14:36 como bisagra, enseñan a rugar cuando el cielo no responde a la medida de lo pedido.",
  "la-fe-no-basta":
    "Hay una mercancía que circula con el nombre de fe y no es fe: dice «id en paz» y no da pan. Santiago 2:14–26 desnuda ese cadáver sin tocar Romanos 3–5. Este tomo no asalta la sola fide ni monta feria de obras: distingue la fe justificante —sola como instrumento, nunca sola como vida— y pone el hermano desnudo donde se ve si hubo vida. Dos muertos —el que cita a Pablo para no obrar y el que cita a Santiago para merecer— comparten la misma tumba.",
  "el-altar-del-espejo":
    "Esto es una historia, no un canto y no un comentario. El principio es un hombre delante de un cristal, y entre el principio y el fin hay un culto, el de sí mismo, que va a tomar forma de fama, de poder, de posesiones y de un lugar entre los otros. Santiago lo puso ahí sin nombre para que el lector no pueda mirarlo como a otro, y el libro no adelanta el fin: te deja a su lado, todavía mirándose.",
  "de-una-misma-boca":
    "Un hombre sin nombre ha confesado esta mañana con su boca que Jesús es el Señor. Este libro no le inventa una vida: se queda a su lado mientras el día avanza y la misma boca quiere la primera palabra, ofende, enciende el bosque y descubre que ningún hombre puede domar la lengua. De una misma boca proceden bendición y maldición, y ninguna fuente echa agua dulce y amarga por la misma abertura.",
};

export const RETOMAR_TITULO = "Retomar el acto";

export function retomarAulaSinActo(titulo: string, pasaje: string): string {
  return `El aula de ${titulo} ya se oyó. El acto de ${pasaje} aún no está escrito. Vuelve al cuaderno y nombra lo que el indicativo ya dijo —un verbo del pasaje, un testigo de carne y, si hace falta, una nota breve— antes de abrir otro capítulo.`;
}

export function retomarObediencia(pasaje: string, decision: string): string {
  return `La última obediencia escrita fue sobre ${pasaje}: «${decision}». Puedes seguir ese mismo texto, o escribir el acto que el aula de esta semana pide ahora. El cuaderno no acumula impresiones: guarda el hábito de oír y obedecer con fecha.`;
}

export function retomarEnlace(pasaje: string): string {
  return `Retomar el acto · Seguir ${pasaje}`;
}

export const CUADERNO_VACIO =
  "Aún no hay un paso escrito. El cuaderno de esta casa no es un diario de sensaciones ni un tablero de propósitos genéricos, sino el lugar donde el indicativo del texto se vuelve acto. Se oye lo que Dios ha hecho; se nombra un verbo que el pasaje conjuga; se pone un testigo; se firma con fecha. Si nunca se ha leído en esta escuela, se empieza por Marcos 7 (Éfata), donde el oído cede antes de que la lengua se desate. Si ya se oyó la clase de esta semana, se escribe el acto de esa aula antes de coleccionar otro capítulo. Cuando el aula te envíe aquí con un pasaje en la barra, ese campo no es decoración, sino el texto que manda sobre lo que vas a firmar.";

export const CANON_LEER =
  "Leer el capítulo. Abre este pasaje entero en el lector compañero de esta casa, para que la Escritura vaya delante del comentario.";

export const CANON_ESTUDIO =
  "Estudio. Entra al aula donde este mismo texto se escudriña con la cadena V.E.R.D.A.D. hasta un solo acto escrito.";

export const CANON_TRATADO =
  "Tratado. Lee el tratado que restituye este versículo al capítulo que lo sostiene, cuando la cita ha viajado sola.";

export const PACK_WHATSAPP: Record<string, string> = {
  efata:
    "Hola, soy de cieloefata.com; solicito el pack del tomo Éfata: La Escritura Abierta para oír Marcos 7 entero",
  "el-siervo-no-tu":
    "Hola, soy de cieloefata.com; solicito el pack del tomo El Siervo, no tú (Isaías 53) para leer el Cántico del Siervo sin hurtar el capítulo.",
  "bastate-mi-gracia":
    "Hola, soy de cieloefata.com; solicito el pack del tomo Bástate mi gracia (2 Corintios 12) sobre la gracia que basta cuando el aguijón permanece.",
  "cuando-el-cielo-se-cae":
    "Hola, soy de cieloefata.com; solicito el pack del tomo Cuando el cielo se cae (Job) para orar cuando el cielo no responde como pedí.",
  "la-fe-no-basta":
    "Hola, soy de cieloefata.com; solicito el pack del tomo La fe no basta (Santiago 2) sobre la fe que obra sin tocar Romanos.",
  "el-altar-del-espejo":
    "Hola, soy de cieloefata.com; solicito el pack del tomo El altar del espejo (Santiago 1) para dejar de ser oidor olvidadizo.",
  "de-una-misma-boca":
    "Hola, soy de cieloefata.com; solicito el pack del tomo De una misma boca (Santiago 3) sobre la boca que confiesa y la lengua que ningún hombre doma.",
};

export function textoPackWhatsApp(slug: string, title?: string): string {
  return (
    PACK_WHATSAPP[slug] ??
    (title
      ? `Hola, soy de cieloefata.com; solicito el pack del tomo ${title}.`
      : "Hola, soy de cieloefata.com; solicito el pack de un tomo de Editorial Cielo Efata.")
  );
}

export const SLUGS_TOMO = [
  "efata",
  "el-siervo-no-tu",
  "bastate-mi-gracia",
  "cuando-el-cielo-se-cae",
  "la-fe-no-basta",
  "el-altar-del-espejo",
  "de-una-misma-boca",
] as const;
