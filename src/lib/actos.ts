/** Un acto por pasaje. Queda prohibido recitar el de Romanos 1 en Marcos 7. */

export type ActoEscrito = {
  prohibido: string;
  escrito: string;
};

export const ACTOS: Record<string, ActoEscrito> = {
  "romanos-1": {
    prohibido:
      "No escribas «seré menos tímido» ni «hoy muero a la vergüenza». Eso no está en el párrafo. Pablo no pide un ánimo nuevo: declara un evangelio del que no se avergüenza, y ese evangelio incluye la ira de Dios, no solo el poder que consuela.",
    escrito:
      "Nombra, con nombre, de qué parte del evangelio te has avergonzado —la ira, el juicio, lo que recortaste para que nadie se molestara— y créelo en voz alta delante de un hermano. El domingo, que te pregunten si todavía negocias ese poder como si fuera un consejo.",
  },
  "marcos-1": {
    prohibido:
      "No escribas «cambiaré mi mentalidad» ni «hoy muero al aplazamiento». Marcos no abre un taller de hábitos. El Señor pide dos verbos, y los pide ahora: volveos, y creed en el evangelio.",
    escrito:
      "Nombra de qué te estás volviendo —con nombre, no con niebla— y cree el evangelio en voz alta. Un paso. El que añade un tercer verbo, «más tarde», todavía no ha oído el anuncio de Galilea.",
  },
  "juan-3": {
    prohibido:
      "No escribas «seré una mejor versión de mí» ni «hoy nací de nuevo otra vez». Nicodemo no necesitaba un curso. Necesitaba nacer. El viento no se programa, y el vientre no explica lo que Jesús pide.",
    escrito:
      "Deja de tratar el nuevo nacimiento como una metáfora de mejora. Ora con alguien que ya cree, y pregunta en serio si has nacido de lo alto. Si la respuesta es niebla, no añadas un currículo: pide el milagro que el Espíritu da donde quiere.",
  },
  "hechos-2": {
    prohibido:
      "No escribas «me sentí muy tocado en el sermón» ni «hoy muero a mi zona de confort». Pedro no pidió un clima de reunión. Pidió un corte: arrepentíos, y bautícese cada uno en el nombre de Jesucristo.",
    escrito:
      "Si aún no has sido bautizado en el nombre de Jesucristo, habla esta semana con quien pueda administrarlo. Si ya lo fuiste, di a alguien el siguiente acto de obediencia, no un sentimiento. El que se queda en la emoción ha oído a Pedro como se oye un concierto.",
  },
  "juan-1": {
    prohibido:
      "No escribas «valoraré más la Navidad» ni «hoy muero a mi Jesús de diciembre». El prólogo no es un villancico. Afirma que el Verbo era Dios y que ese Verbo fue hecho carne.",
    escrito:
      "Lee Juan 1:1–18 entero, en voz alta, dos veces. Escribe una sola frase: qué afirma de Cristo que tú habías dejado blando. No memorices el himno. Óyelo hasta que el tabernáculo te deje sin un Jesús de calendario.",
  },
  "isaias-53": {
    prohibido:
      "No escribas «sanaré mis heridas» ni «hoy muero al dolor». Isaías 53 no es un poema para sobrellevar tu sufrimiento. El Siervo no inspira: carga. La llaga del texto es la suya, por nuestras rebeliones. Convertirla en tu historia bien contada es invertir el capítulo.",
    escrito:
      "Confiesa esta semana, a Dios y a una persona, un pecado que has llamado «herida» para no llamarlo rebelión. Nómbralo bajo la llaga del Siervo, sin un eufemismo que lo suavice. Después lee el capítulo entero, en voz alta. El tratado no sustituye a Isaías 53: lo sirve, y se sienta atrás.",
  },
  "romanos-3": {
    prohibido:
      "No escribas «dejaré de ser tan orgulloso» ni «hoy muero a mi currículum». Toda boca ya se cerró. No hace falta un taller de humildad. Pablo no pide un yo más modesto: declara que no hay justo ni aun uno, y que Dios justifica al que cree en Jesús.",
    escrito:
      "Deja de mezclar tu hoja de servicios con la justificación. Di a alguien, esta semana: soy justificado por la fe en Jesús, sin las obras de la ley. Luego lee Romanos 3:21–26 dentro de 3:9–31. El que conserva la jactancia todavía tiene la boca abierta.",
  },
  "2-pedro-1": {
    prohibido:
      "No escribas «trabajaré en mis virtudes» ni «hoy muero a la pereza». Pedro no pide un cartel de cualidades. Pide que se añada a la fe, a costa propia, un eslabón concreto. El que elige siete no ha elegido ninguno.",
    escrito:
      "Elige un solo eslabón para esta semana —virtud, conocimiento, dominio propio, paciencia, piedad, afecto fraternal o amor—. Escríbelo en el cuaderno y dilo a alguien de confianza. Costéalo. El que no lo dice a un testigo lo ha dejado en el eslogan.",
  },
  "2-corintios-5": {
    prohibido:
      "No escribas «me siento nueva criatura» ni «hoy muero al yo viejo». El versículo 17, sin el 21, es un espejo: uno se siente otro y sigue siendo enemigo. Nueva criatura es reconciliación, no un cambio de humor.",
    escrito:
      "Habla una vez, esta semana, como embajador. Di a alguien concreto —con nombre— que Dios llama a reconciliarse consigo por Cristo, no a recablear el yo. Un ruego. No un hilo. El que se queda en el 17 sin el 21 ha convertido la nueva creación en un lema.",
  },
  "filipenses-2": {
    prohibido:
      "No escribas «seré más humilde» ni «hoy muero al ego». El himno no pide un anuncio de kénosis. Cristo se despojó, tomó forma de siervo y fue obediente hasta la muerte de cruz. El acto no es un cartel de humildad, sino un derecho cedido y no publicado.",
    escrito:
      "Cede un derecho esta semana —uno que te estaba inflando— y no lo anuncies. Hazlo porque el himno manda, no porque quieras parecer siervo. Evodia y Síntique no necesitaban otro taller: necesitaban este Cristo.",
  },
  "santiago-1": {
    prohibido:
      "No escribas «hoy muero a no aplicar» ni «seré más constante». Santiago no conjuga esa mortificación. Conjuga hacer. El que oye y no hace se engaña a sí mismo: no es un retraso inocente.",
    escrito:
      "Lo que este texto te mostró, hazlo antes de siete días. Anótalo. Dilo a un testigo. Si se queda en el cuaderno sin acto, volviste a mirarte al espejo y te fuiste.",
  },
  "romanos-12": {
    prohibido:
      "No escribas «renovaré mi mente» ni «hoy muero al mundo». El «así que» de Romanos 12 nace de las misericordias de once capítulos. Pide un cuerpo en el altar y un no concreto al siglo, no un clima de culto.",
    escrito:
      "Nombra un molde de este siglo al que te estás adaptando. Preséntalo esta semana: un no concreto, dicho a alguien. El cuerpo es el altar. El que se queda en la emoción del culto, sin un no, ha oído Romanos 12 como se oye un himno.",
  },
  "juan-14": {
    prohibido:
      "No escribas «respetaré todos los caminos» ni «hoy muero a la intolerancia». Tomás no recibió un mapa. Recibió una persona. Jesús no señaló un camino: Él es el camino, y nadie viene al Padre sino por Él.",
    escrito:
      "Deja de suavizar «nadie viene». Di a una persona, esta semana, sin grosería y sin rebaja, que el Padre se alcanza por Jesús. El que busca un mapa todavía no ha oído a Tomás. El que ha oído, habla.",
  },
  "salmo-23": {
    prohibido:
      "No escribas «pediré que el valle se vaya» ni «hoy muero al miedo». El salmo no evapora la sombra. Pone un «tú» dentro de ella: aunque ande en valle de sombra de muerte, no temeré mal alguno, porque tú estarás conmigo.",
    escrito:
      "Donde ahora tienes miedo, nombra al Pastor en segunda persona: «tú estás conmigo». Dilo a alguien que camine el mismo valle. El que ha llegado a ese «tú» no niega la sombra: la atraviesa.",
  },
  "genesis-3": {
    prohibido:
      "No escribas «hoy muero a la fruta». Ese verbo no está en el capítulo. El verbo de Génesis 3:1 es la glosa: la serpiente pone el mandato de Dios entre comillas. El pecador cose hojas, se esconde y señala a otro. Esos verbos sí están.",
    escrito:
      "Lee Génesis 3 entero, en voz alta. Confiesa delante de un testigo la negociación: un mandato de esta semana que has puesto entre comillas. Nombra las hojas de higuera si te has cubierto a ti mismo. La fruta, no: el capítulo no pide esa mortificación.",
  },
  "salmo-22": {
    prohibido:
      "No escribas «hoy muero a mis sentimientos de abandono». El clamor no es terapia del ánimo. El abandonado, más adelante, promete anunciar el Nombre a sus hermanos. Quedarse en el versículo 1 como amuleto es no llegar al 24.",
    escrito:
      "Lee el salmo entero, en voz alta. El indicativo, cuando llega, es «me has oído». Di a alguien la alabanza que el abandonado promete a la asamblea. El que se quede en el clamor sin la asamblea aún no ha leído el salmo.",
  },
  "marcos-7": {
    prohibido:
      "No escribas «hoy muero a mi sordera» ni «me abriré más». El sordo no se abre: es abierto. Jesús alzó los ojos al cielo, gimió y dijo Éfata. El púlpito que grita «ábrete tú» ha invertido el milagro.",
    escrito:
      "Lee Marcos 7 entero, en voz alta, y nombra delante de alguien lo que aún no oyes. Mañana se vuelve al mismo texto. El oído no se abre una sola vez. El que convierte Éfata en marca y deja al sordo cerrado ha tomado el nombre del milagro en vano.",
  },
  "apocalipsis-5": {
    prohibido:
      "No escribas «dejaré de preocuparme por las noticias» ni «hoy muero a la ansiedad escatológica». El anciano no pide serenidad. Pide: no llores. El León ha vencido; el Cordero toma el libro.",
    escrito:
      "Cesa esta semana una lectura de la historia que pone el cetro en el César, y di a alguien que el rollo está en las manos atravesadas. El llanto por el libro cerrado termina cuando se adora al que lo tomó.",
  },
};

export function actoDe(slug?: string): ActoEscrito | undefined {
  if (!slug) return undefined;
  return ACTOS[slug];
}
