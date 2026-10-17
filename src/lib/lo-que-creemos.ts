/**
 * «Lo que creemos». Aprobado por Alejandro Sirit el 17-10-2026 para publicarse.
 * Cada artículo recoge lo que Alejandro ya escribió en el sitio (pilar, nosotros, aulas) y en sus libros
 * (Pórtico a la Escritura, Éfata, Nunca tocarás mi fe, De una misma boca, Diákrisis). No se añadió
 * doctrina nueva ni etiquetas denominacionales.
 * Versículos: Reina-Valera 1960 literal, cotejada con /workspace/biblioteca-biblica/consulta.py.
 * Original: hebreo del Códice de Leningrado (WLC/OSHB, el texto que edita la BHS); griego del Textus
 * Receptus de Scrivener (1894), sin acentos en la fuente digital. Lemas y definiciones: léxico de Strong
 * de la misma biblioteca.
 */
export type Verso = { ref: string; texto: string };
export type Termino = {
  lengua: "hebreo" | "griego";
  /** Forma tal como está en el versículo. */
  forma: string;
  lema: string;
  translit: string;
  strong: string;
  /** Palabra de la RVR1960 que traduce el término. */
  traduce: string;
  /** Explicación del número Strong, en prosa. */
  prosa: string;
};
export type Articulo = {
  id: string;
  titulo: string;
  parrafos: string[];
  versos: Verso[];
  termino: Termino;
  /** Capítulo que se abre en RevelatiO. */
  leer: string;
  /** Otras citas de apoyo. */
  refs?: string;
};

export const LO_QUE_CREEMOS_ESTADO = "aprobado" as const;

export const LO_QUE_CREEMOS_INTRO =
  "Esta página resume lo que Cielo Efata enseña. No es un credo nuevo: cada punto recoge lo que la casa ya dice en sus estudios, tratados y libros, con los versículos en que se apoya, citados de la Reina-Valera 1960, y una palabra del texto original con su número Strong explicado. La Escritura manda sobre el comentario, también sobre este.";

export const LO_QUE_CREEMOS: Articulo[] = [
  {
    id: "escritura",
    titulo: "1. La Escritura",
    parrafos: [
      "La Biblia tiene sesenta y seis libros, treinta y nueve en el Antiguo Testamento y veintisiete en el Nuevo. Es la Palabra que Dios habló por medio de muchos hombres, muchas veces y de muchas maneras, y al fin por el Hijo. El canon es la lista que la Iglesia recibió, no la que cada generación se arma según su herida o su moda.",
      "Por eso el texto va primero, las ciencias bíblicas después, y nada que el pasaje no contenga.",
    ],
    versos: [
      {
        ref: "2 Timoteo 3:16–17",
        texto:
          "Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia, a fin de que el hombre de Dios sea perfecto, enteramente preparado para toda buena obra.",
      },
      {
        ref: "2 Pedro 1:21",
        texto:
          "porque nunca la profecía fue traída por voluntad humana, sino que los santos hombres de Dios hablaron siendo inspirados por el Espíritu Santo.",
      },
    ],
    termino: {
      lengua: "griego",
      forma: "θεοπνευστος",
      lema: "θεόπνευστος",
      translit: "theópneustos",
      strong: "G2315",
      traduce: "inspirada por Dios",
      prosa:
        "El número Strong G2315 corresponde a θεόπνευστος (theópneustos), palabra compuesta de θεός, «Dios» (G2316), y del verbo πνέω, «soplar» (G4154). Strong la define como «soplada por Dios». En todo el Nuevo Testamento griego aparece una sola vez, aquí. Pablo no dice que la Escritura inspire al lector, sino que Dios la exhaló: el origen del texto está en Dios.",
    },
    leer: "2 Timoteo 3:16",
    refs: "Hebreos 1:1–2 · Lucas 24:27",
  },
  {
    id: "dios",
    titulo: "2. Un solo Dios: Padre, Hijo y Espíritu Santo",
    parrafos: [
      "Hay un solo Dios. El Padre es Dios, el Hijo es Dios y el Espíritu Santo es Dios; y el Padre no es el Hijo, ni el Hijo es el Espíritu. La palabra Trinidad no está en la Biblia, y no hace falta que esté: es el nombre que la iglesia antigua dio a lo que la Biblia enseña en todas partes. En el bautismo del Jordán las tres personas aparecen juntas sin confundirse: el Hijo sube del agua, el Espíritu desciende sobre él como paloma y la voz del Padre habla desde el cielo.",
      "Quien quiso simplificar este misterio, diciendo que Jesús fue solo un hombre muy santo, que el Padre, el Hijo y el Espíritu son tres máscaras de un mismo actor o que son tres dioses distintos, terminó con un dios más pequeño que el de la Escritura. El Dios de la Biblia crea por su Palabra, habla y guarda pacto, y no da su gloria a otro.",
    ],
    versos: [
      {
        ref: "Deuteronomio 6:4",
        texto: "Oye, Israel: Jehová nuestro Dios, Jehová uno es.",
      },
      {
        ref: "Mateo 28:19",
        texto:
          "Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo;",
      },
    ],
    termino: {
      lengua: "hebreo",
      forma: "אֶחָֽד",
      lema: "אֶחָד",
      translit: "ʼejad",
      strong: "H259",
      traduce: "uno",
      prosa:
        "El número Strong H259 corresponde a אֶחָד (ʼejad), el numeral «uno», que Strong define como «unido, es decir, uno». Es la última palabra del Shemá: Jehová es uno. La misma palabra cierra Génesis 2:24, donde el hombre y su mujer «serán una sola carne»: una unidad verdadera que no borra a quienes la forman. La palabra sola no prueba la Trinidad; la enseña la Escritura entera, que llama Dios al Padre, al Hijo y al Espíritu sin dejar de confesar a un solo Dios.",
    },
    leer: "Deuteronomio 6:4",
    refs: "Mateo 3:16–17 · Isaías 42:8 · 2 Corintios 13:14",
  },
  {
    id: "cristo",
    titulo: "3. Jesucristo",
    parrafos: [
      "El Verbo era Dios, y aquel Verbo fue hecho carne: verdadero Dios y verdadero hombre. Es el único mediador entre Dios y los hombres; nadie viene al Padre sino por él. Solo Dios puede pagar lo que el hombre debe a Dios, y solo un hombre puede pagarlo en lugar de los hombres.",
      "En la cruz cargó lo que no era suyo. Al tercer día resucitó. Volverá.",
    ],
    versos: [
      {
        ref: "Juan 1:1",
        texto:
          "En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios.",
      },
      {
        ref: "Juan 1:14",
        texto:
          "Y aquel Verbo fue hecho carne, y habitó entre nosotros (y vimos su gloria, gloria como del unigénito del Padre), lleno de gracia y de verdad.",
      },
      {
        ref: "1 Timoteo 2:5–6",
        texto:
          "Porque hay un solo Dios, y un solo mediador entre Dios y los hombres, Jesucristo hombre, el cual se dio a sí mismo en rescate por todos, de lo cual se dio testimonio a su debido tiempo.",
      },
    ],
    termino: {
      lengua: "griego",
      forma: "λογος",
      lema: "λόγος",
      translit: "lógos",
      strong: "G3056",
      traduce: "Verbo",
      prosa:
        "El número Strong G3056 corresponde a λόγος (lógos), del verbo λέγω, «decir» (G3004): la palabra dicha junto con el pensamiento que expresa. Strong anota que, con artículo, en el evangelio de Juan designa la Expresión divina, es decir, a Cristo. Juan abre su evangelio con ella: el que era con Dios y era Dios es la Palabra con que Dios se dio a conocer, y esa Palabra se hizo carne.",
    },
    leer: "Juan 1:14",
    refs: "Juan 14:6 · 1 Corintios 15:3–4",
  },
  {
    id: "espiritu",
    titulo: "4. El Espíritu Santo",
    parrafos: [
      "El Espíritu Santo es Dios, no un ambiente ni una energía que se administra. Inspiró la Escritura, convence de pecado y obra el nuevo nacimiento, que nadie se da a sí mismo. Nos da a entender lo que Dios nos ha concedido.",
      "El Espíritu no dicta un oráculo privado que desplace al texto: toma de lo que es de Cristo y lo hace saber. La verdad a la que guía es la que ya fue dicha.",
    ],
    versos: [
      {
        ref: "Juan 14:26",
        texto:
          "Mas el Consolador, el Espíritu Santo, a quien el Padre enviará en mi nombre, él os enseñará todas las cosas, y os recordará todo lo que yo os he dicho.",
      },
      {
        ref: "Juan 16:13–14",
        texto:
          "Pero cuando venga el Espíritu de verdad, él os guiará a toda la verdad; porque no hablará por su propia cuenta, sino que hablará todo lo que oyere, y os hará saber las cosas que habrán de venir. Él me glorificará; porque tomará de lo mío, y os lo hará saber.",
      },
    ],
    termino: {
      lengua: "griego",
      forma: "παρακλητος",
      lema: "παράκλητος",
      translit: "paráklētos",
      strong: "G3875",
      traduce: "Consolador",
      prosa:
        "El número Strong G3875 corresponde a παράκλητος (paráklētos), el que es llamado al lado de otro. Strong lo define como «intercesor, consolador». En el Nuevo Testamento griego aparece cinco veces: cuatro en las palabras de Jesús en Juan 14 al 16, y una en 1 Juan 2:1, donde se dice de Cristo: «abogado tenemos para con el Padre, a Jesucristo el justo». Por eso Jesús promete «otro Consolador» (Juan 14:16): el Espíritu está al lado de los suyos como Cristo estuvo con ellos.",
    },
    leer: "Juan 14:26",
    refs: "Hechos 5:3–4 · Juan 3:5–8 · Juan 16:8 · 1 Corintios 2:12",
  },
  {
    id: "hombre",
    titulo: "5. El hombre y el pecado",
    parrafos: [
      "Dios creó al hombre, varón y hembra, a su imagen. Por un hombre entró el pecado en el mundo, y por el pecado la muerte. La caída no borró la imagen de Dios, pero la deformó; por eso el hombre caído sigue llevando una dignidad que no se puede maldecir sin ofender al que la puso.",
      "No hay diferencia, porque todos pecaron. El hombre respetable que nunca robó no tiene derecho a mirar desde arriba al que salió de la calle: los pecados de uno y otro salen del mismo lugar, y todos necesitan la misma gracia.",
    ],
    versos: [
      {
        ref: "Génesis 1:27",
        texto:
          "Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó.",
      },
      {
        ref: "Romanos 5:12",
        texto:
          "Por tanto, como el pecado entró en el mundo por un hombre, y por el pecado la muerte, así la muerte pasó a todos los hombres, por cuanto todos pecaron.",
      },
      {
        ref: "Romanos 3:23",
        texto:
          "por cuanto todos pecaron, y están destituidos de la gloria de Dios",
      },
    ],
    termino: {
      lengua: "griego",
      forma: "ημαρτον",
      lema: "ἁμαρτάνω",
      translit: "hamartánō",
      strong: "G264",
      traduce: "pecaron",
      prosa:
        "El número Strong G264 corresponde a ἁμαρτάνω (hamartánō), «pecar». Strong explica su sentido propio: errar el blanco, y así quedarse sin el premio. En Romanos 3:23 está en aoristo, ἥμαρτον, «pecaron»: Pablo resume en un solo verbo la historia de todos. El mismo versículo dice cuál es el blanco perdido: la gloria de Dios.",
    },
    leer: "Romanos 3:23",
    refs: "Génesis 3 · Santiago 3:9",
  },
  {
    id: "salvacion",
    titulo: "6. La salvación, por gracia mediante la fe",
    parrafos: [
      "La salvación viene por gracia, que es el favor que Dios concede a quien no lo merece; la palabra misma excluye cualquier pago, cualquier mérito y cualquier negociación. Viene por medio de la fe, y la fe no es la causa sino el instrumento: la mano vacía que recibe lo que otro ha puesto en ella. Y no viene de nosotros, porque es don de Dios, para que nadie se gloríe.",
      "Dios justifica al pecador que cree: lo declara justo a cuenta de Cristo, no de las obras del acusado. La fe verdadera produce obras sin que las obras sean la causa de la salvación. Son el fruto de una raíz que ya estaba viva, no el agua que la hace vivir. Por eso todo apunta a lo mismo: conocer a Dios, reconocer el pecado, arrepentirse, convertirse a Cristo y permanecer firmes en la fe.",
    ],
    versos: [
      {
        ref: "Efesios 2:8–9",
        texto:
          "Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios; no por obras, para que nadie se gloríe.",
      },
      {
        ref: "Romanos 3:24",
        texto:
          "siendo justificados gratuitamente por su gracia, mediante la redención que es en Cristo Jesús",
      },
      {
        ref: "Santiago 2:17",
        texto: "Así también la fe, si no tiene obras, es muerta en sí misma.",
      },
    ],
    termino: {
      lengua: "griego",
      forma: "χαριτι",
      lema: "χάρις",
      translit: "cháris",
      strong: "G5485",
      traduce: "gracia",
      prosa:
        "El número Strong G5485 corresponde a χάρις (cháris), «gracia», de la familia de χαίρω, «alegrarse» (G5463): lo que se da por pura benevolencia. Strong incluye en su definición «la influencia divina sobre el corazón y su reflejo en la vida». En Efesios 2:8 está en dativo, τῇ χάριτι, «por la gracia»: es el medio por el que Dios salva, no un premio que el hombre cobra.",
    },
    leer: "Efesios 2:8",
    refs: "Marcos 1:15 · Juan 3:5 · Tito 3:5 · Romanos 1:16",
  },
  {
    id: "iglesia",
    titulo: "7. La iglesia",
    parrafos: [
      "Cristo es la cabeza, y la iglesia es su cuerpo. En Efesios la palabra no designa solo una congregación local, sino el cuerpo de Cristo universal, su plenitud y su esposa. La fe salva porque une al creyente con Cristo, y esa unión lo hace miembro de su cuerpo, donde vive por su Espíritu y es gobernado por él.",
      "Cristo dio a su iglesia ministerios a fin de perfeccionar a los santos para la obra del ministerio y para la edificación del cuerpo, hasta que todos lleguemos a la unidad de la fe y del conocimiento del Hijo de Dios.",
    ],
    versos: [
      {
        ref: "Efesios 1:22–23",
        texto:
          "y sometió todas las cosas bajo sus pies, y lo dio por cabeza sobre todas las cosas a la iglesia, la cual es su cuerpo, la plenitud de Aquel que todo lo llena en todo.",
      },
      {
        ref: "Efesios 4:11–13",
        texto:
          "Y él mismo constituyó a unos, apóstoles; a otros, profetas; a otros, evangelistas; a otros, pastores y maestros, a fin de perfeccionar a los santos para la obra del ministerio, para la edificación del cuerpo de Cristo, hasta que todos lleguemos a la unidad de la fe y del conocimiento del Hijo de Dios, a un varón perfecto, a la medida de la estatura de la plenitud de Cristo;",
      },
    ],
    termino: {
      lengua: "griego",
      forma: "εκκλησια",
      lema: "ἐκκλησία",
      translit: "ekklēsía",
      strong: "G1577",
      traduce: "iglesia",
      prosa:
        "El número Strong G1577 corresponde a ἐκκλησία (ekklēsía), formada con ἐκ, «fuera de» (G1537), y una derivada de καλέω, «llamar» (G2564): la asamblea de los llamados. En la versión griega del Antiguo Testamento traduce sobre todo קָהָל, la asamblea de Israel. En Efesios 1:22 Pablo la une a Cristo como el cuerpo a su cabeza.",
    },
    leer: "Efesios 1:22",
    refs: "Efesios 5:25 · Santiago 2:14",
  },
  {
    id: "fin",
    titulo: "8. Las últimas cosas",
    parrafos: [
      "Cristo volverá en persona y de manera visible. Los muertos resucitarán, habrá un juicio final y Dios hará la nueva creación, donde enjugará toda lágrima.",
      "Sobre el milenio de Apocalipsis 20 los creyentes han leído de varias maneras. Pórtico a la Escritura expone las tres lecturas principales, y las tres confiesan lo mismo: la venida personal y visible de Cristo, la resurrección de los muertos, el juicio final y la nueva creación. El libro mismo pide sabiduría, no cálculo de fechas.",
    ],
    versos: [
      {
        ref: "1 Tesalonicenses 4:15–17",
        texto:
          "Por lo cual os decimos esto en palabra del Señor: que nosotros que vivimos, que habremos quedado hasta la venida del Señor, no precederemos a los que durmieron. Porque el Señor mismo con voz de mando, con voz de arcángel, y con trompeta de Dios, descenderá del cielo; y los muertos en Cristo resucitarán primero. Luego nosotros los que vivimos, los que hayamos quedado, seremos arrebatados juntamente con ellos en las nubes para recibir al Señor en el aire, y así estaremos siempre con el Señor.",
      },
      {
        ref: "Apocalipsis 21:4",
        texto:
          "Enjugará Dios toda lágrima de los ojos de ellos; y ya no habrá muerte, ni habrá más llanto, ni clamor, ni dolor; porque las primeras cosas pasaron.",
      },
    ],
    termino: {
      lengua: "griego",
      forma: "παρουσιαν",
      lema: "παρουσία",
      translit: "parousía",
      strong: "G3952",
      traduce: "venida",
      prosa:
        "El número Strong G3952 corresponde a παρουσία (parousía), del verbo πάρειμι, «estar presente» (G3918): presencia, llegada. En el mundo griego nombraba la llegada solemne de un rey a una ciudad. En 1 Tesalonicenses 4:15 es «la venida del Señor», y Pablo la nombra en la misma carta en 2:19, 3:13 y 5:23.",
    },
    leer: "1 Tesalonicenses 4:16",
    refs: "Hechos 17:31 · 1 Corintios 15:23 · Apocalipsis 20",
  },
];

/** Cierre: cómo lee la casa y con qué textos. Sale del método y del colofón ya publicados. */
export const LO_QUE_CREEMOS_CIERRE = [
  "La Palabra se obedece. Santiago compara al que oye la Palabra y no la hace con un hombre que se mira al espejo y se va. Por eso el estudio no termina cuando se ha entendido el pasaje, sino cuando hay un paso concreto que sale de ese texto.",
  "En castellano citamos la Reina-Valera 1960, al pie de la letra. El hebreo se lee según el texto masorético del Códice de Leningrado, que edita la Biblia Hebraica Stuttgartensia; el griego del Nuevo Testamento, según el Textus Receptus. Cada número de Strong se da con su palabra original y su sentido: nunca un número suelto.",
];
