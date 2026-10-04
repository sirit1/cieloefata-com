/** Decisión breve de cada libro vigente. No se publica sola: el acto se lee en el libro. */
export const DECISION_AULA: Record<string, string> = {
                "2-pedro-1": "Elige un eslabón para esta semana. Escríbelo en el cuaderno y dilo a alguien de confianza. Uno. Costealo. El que elige siete no ha elegido ninguno. El que no lo dice a un testigo lo ha dejado en el eslogan.",
    "filipenses-2": "Cede un derecho esta semana —uno que te estaba inflando— y no lo anuncies. Hazlo porque el himno manda. Evodia y Síntique no necesitan otro taller: necesitan este Cristo. El que anuncia el despojo ya lo ha convertido en teatro.",
  "santiago-1": "Lo que este texto te mostró, hazlo antes de siete días. Anótalo. Dilo a un testigo. Si se queda en el cuaderno sin acto, volviste a mirarte y te fuiste. Queda prohibido un «hoy muero a…» que el pasaje no conjuga. El verbo aquí es hacer, no morir a un ego genérico.",
            "marcos-7": "El sordo de Marcos 7 no «murió hoy a su sordera»: fue abierto. Esa es la gramática de la gracia. Un acto: lee Marcos 7 entero, en voz alta, y nombra delante de alguien lo que aún no oyes. Mañana se vuelve. El oído no se abre una sola vez. El que convierte Éfata en marca y deja al sordo cerrado ha tomado el nombre del milagro en vano.",
  "apocalipsis-5": "El indicativo es «ha vencido» y «tomó el libro». El imperativo del anciano es el nuestro: no llores. Un acto: cesa esta semana una lectura de la historia que pone el cetro en el César, y di a alguien que el rollo está en las manos atravesadas. El llanto por el libro cerrado termina cuando se adora al que lo tomó.",
  "1-corintios-12-14": "Esta semana, nombra un don —el tuyo o el que envidias— y ponlo al servicio de un hermano concreto, no de un escenario. Un acto. El que busca lengua para ser visto, o silencio para no servir, todavía no ha oído a Corinto.",
  "galatas-5": "Elige un nombre del fruto que el texto ha desnudado —uno, no nueve— y nombra delante de un testigo dónde la carne lo estaba sustituyendo. Anda. El que elige los nueve no ha elegido ninguno. El que no lo dice lo ha dejado en el cartel.",
  "2-corintios-12": "Nombra el aguijón que has tratado como prueba de que Dios no basta. Esta semana, deja de rogar solo para que se quite, y oye la palabra que permanece: bástate mi gracia. Dilo a alguien. El que convierte el 9 en un lema y niega la flaqueza aún no ha sido respondido: ha sido entretenido.",
  "viajes-de-pablo": "Esta semana, nombra un envío concreto —una Palabra que debías anunciar, un hermano que debías confirmar— y no lo midas por la facilidad. El que espera un mapa sin Listra todavía no ha sido apartado: ha sido entretenido.",
  "1-corintios-1-2": "Esta semana, nombra una frase tuya —en el púlpito, en la mesa, en la red— que estaba luciendo más que el madero. Quítala. El que se reforma el estilo y no se arrodilla ante la locura de la cruz todavía está en el ágora.",
  "teologia-de-la-cruz": "Esta semana, nombra una jactancia —oficio, púlpito, herida bien contada— que estabas usando para no quedar en «lo que no es». Déjala. Gloríate en el Señor. El que se queda en el desprecio de los sabios y no se queda en Cristo aún no ha oído el 30.",
  "teologia-de-la-gloria": "Nombra un «ya» que te estabas coronando —un ministerio que ya llegó, una herida que ya te hace rey, un escenario que ya te aplaude—. Esta semana, bájalo. El que se niega a ser último todavía está saciado. El texto pide espectáculo al mundo, no trono.",
  "romanos-8-17": "Esta semana, nombra un padecimiento que habías tratado como prueba de que no eres hijo. Somételo al εἴπερ: padece con él, no contra la adopción. Dilo a alguien que gima contigo. El que se corona sin gemir todavía no es coheredero, sino un espectador del 17."
};

export function decisionAula(slug: string) {
  return DECISION_AULA[slug];
}
