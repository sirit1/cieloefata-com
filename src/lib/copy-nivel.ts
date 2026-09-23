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
  "Hoy el aula de «Esta semana» permanece en Filipenses 2, donde el himno del Siervo humilla al yo antes de exaltarlo: forma de siervo, muerte de cruz, el Nombre sobre todo nombre. No se ofrece como producto destacado, sino como el texto que esta escuela está leyendo juntos hasta que el sentir de Cristo Jesús deje de ser cita y se vuelva acto. El «Tratado del mes» permanece en Isaías 53, no para vender una herida terapéutica, sino para devolver la llaga del Siervo al Cántico entero: Él llevó; nosotros éramos. Quien quiera solo consuelo de mercado encontrará aquí un capítulo; quien quiera oír, encontrará un oficio.";

/** Siete muestras de primer capítulo. Clave: slug del tomo. */
export const MUESTRAS_TOMO: Record<string, string> = {
  efata:
    "En Decápolis pusieron delante de Jesús a un sordo y tartamudo. El Hijo lo tomó aparte, alzó los ojos, gimió y dijo Éfata —sé abierto—, y al momento se abrieron sus oídos. Este tomo no ofrece un menú de técnicas para animar un grupo: ofrece el umbral de la escuela. El oído cede antes de que la lengua se desate; el método V.E.R.D.A.D. sirve como cauce, no como ídolo; y el oficio empieza cuando el capítulo entero manda otra vez sobre el comentario.",
  "el-siervo-no-tu":
    "Isaías no te ofrece un espejo: te muestra a un inocente en lugar del culpable. El cuarto Cántico del Siervo (52:13–53:12) dice lo que el título no permite mover: Él llevó; nosotros éramos. Este tomo derriba la autoexpiación evangélica y el «Siervo terapéutico» que se cuela por la herida. El ʾāšām no se imita. Tú no eres el Siervo; el eunuco no se pone en el versículo: pregunta de quién habla el profeta, cree y pide el agua.",
  "bastate-mi-gracia":
    "Tres veces rogó Pablo que le quitaran el aguijón. El Señor no lo quitó: habló. «Bástate mi gracia» no es lema de conferencia ni derecho a extracción clínica; es sentencia que permanece mientras el clavo permanece. Este tomo oye 2 Corintios 12:1–10 entero —visiones que no son currículum, mensajero de Satanás, ruego reiterado, poder que se perfecciona en la flaqueza— y distingue el oficio de Job: Bástate no es Cielo. La gracia alcanza aunque el aguijón no se vaya.",
  "cuando-el-cielo-se-cae":
    "Hay un día en Uz en que cuatro mensajeros cruzan el umbral y Job bendice el Nombre con las manos vacías: Jehová dio, y Jehová quitó. Hay una noche en Getsemaní en que el Hijo llama Abba, pide que se aparte la copa y añade la cláusula que este tomo no suelta: mas no lo que yo quiero, sino lo que tú. El «no» de Dios no es abandono ni resiliencia con versículo. Job 1–2 y 38–42, con Marcos 14:36 como bisagra, enseñan a rugar cuando el cielo no responde a la medida de lo pedido.",
  "la-fe-no-basta":
    "Hay una mercancía que circula con el nombre de fe y no es fe: dice «id en paz» y no da pan. Santiago 2:14–26 desnuda ese cadáver sin tocar Romanos 3–5. Este tomo no asalta la sola fide ni monta feria de obras: distingue la fe justificante —sola como instrumento, nunca sola como vida— y pone el hermano desnudo donde se ve si hubo vida. Dos muertos —el que cita a Pablo para no obrar y el que cita a Santiago para merecer— comparten la misma tumba.",
  "el-altar-del-espejo":
    "Un hombre se mira en el espejo de la Palabra, ve el rostro de su génesis, y a los veinte pasos ya no recuerda cómo era. Santiago no diagnostica amnesia: diagnostica negativa. El altar del espejo no ofrece taller de identidad; ofrece el metal de Santiago 1:23–25: inclinarse, permanecer, ser hacedor —no oidor olvidadizo—. El «amén» que no visita al huérfano aún no ha oído; ha pasado delante del metal y se ha ido.",
  "callar-para-ganar":
    "Isaías vio un cuerpo, no un método: el Siervo enmudeció delante de los trasquiladores. «Callar para ganar» suena a táctica; el canto no vende marca. Este tomo oye Isaías 53:7 dentro del Cántico entero, con Santiago 1:19–27 y Santiago 3 como satélites: engendrados por la Palabra, tardos para hablar, lengua bajo yugo. Distingue el silencio del Cordero del mutismo cómplice y guarda Hechos 4: cuando el evangelio exige, no podemos dejar de hablar.",
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
  "Aún no hay un paso escrito. El cuaderno de esta casa no es un diario de sensaciones ni un tablero de propósitos genéricos: es el lugar donde el indicativo del texto se vuelve acto. Se oye lo que Dios ha hecho; se nombra un verbo que el pasaje conjuga; se pone un testigo; se firma con fecha. Si nunca se ha leído en esta escuela, se empieza por Marcos 7 (Éfata), donde el oído cede antes de que la lengua se desate. Si ya se oyó la clase de esta semana, se escribe el acto de Filipenses 2 antes de coleccionar otro capítulo. Cuando el aula te envíe aquí con un pasaje en la barra, ese campo no es decoración: es el texto que manda sobre lo que vas a firmar.";

export const CANON_LEER =
  "Leer el capítulo. Abre este pasaje entero en RevelatiO, el lector compañero de esta casa, para que la Escritura vaya delante del comentario.";

export const CANON_ESTUDIO =
  "Estudio. Entra al aula donde este mismo texto se escudriña con la cadena V.E.R.D.A.D. hasta un solo acto escrito.";

export const CANON_TRATADO =
  "Tratado. Lee el tratado que restituye este versículo al capítulo que lo sostiene, cuando la cita ha viajado sola.";

export const PACK_WHATSAPP: Record<string, string> = {
  efata:
    "Hola, soy de cieloefata.com; solicito el pack del tomo Éfata: La Escritura Abierta para estudiar Marcos 7 con el método V.E.R.D.A.D.",
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
  "callar-para-ganar":
    "Hola, soy de cieloefata.com; solicito el pack del tomo Callar para ganar sobre el silencio del Siervo y la lengua bajo yugo.",
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
  "callar-para-ganar",
] as const;
