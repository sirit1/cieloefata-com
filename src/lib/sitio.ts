/** Quién, a quién, dónde, qué ardía, para qué se tomó la pluma. */

export type Sitio = {
  lugar: string;
  situacion: string;
  proposito: string;
};

export const SITIO: Record<string, Sitio> = {
  "romanos-1": {
    lugar: "Corinto, hacia el 57 d. C., antes de que Pablo suba a Jerusalén. El destinatario está en Roma, capital del imperio.",
    situacion:
      "Una iglesia que Pablo no fundó, judíos y gentiles bajo un mismo techo imperial, con fama de fe y con el riesgo de recortar el evangelio para que el César no se moleste. Hay una deuda con griegos y bárbaros, y hay un apóstol que aún no ha predicado en esa ciudad.",
    proposito:
      "Exponer el evangelio sin recorte, preparar una visita y anclar toda la carta —justificación, santificación, Israel, culto del cuerpo— en un solo anuncio: el evangelio es poder de Dios para salvación, no consejo ni técnica.",
  },
  "marcos-1": {
    lugar: "El relato ocurre en Galilea, no en Jerusalén. El evangelio se escribe, según el testimonio antiguo, en un clima de persecución ligado a Roma, década del 60.",
    situacion:
      "Juan el Bautista ya está preso. El precursor sale de escena para que el Reino hable. La gente trabaja; no exhibe piedad. Hay oídos que necesitan un evangelio corto, para oírse de una vez, sin adorno, porque el tiempo de aplazar se acabó.",
    proposito:
      "Marcos, intérprete de Pedro, no escribe un consuelo: escribe el primer anuncio del Señor. El tiempo se cumplió. El reino se acercó. Hay que volverse y creer. El mandato no espera a que el lector se sienta listo.",
  },
  "juan-3": {
    lugar: "Jerusalén, de noche. El evangelio se escribe a finales del siglo I, cuando ya hay lecturas que recortan al Hijo.",
    situacion:
      "Nicodemo es fariseo, principal, maestro de Israel. Viene con oficio intacto y con la pregunta a medias. Jesús acaba de decir que conoce lo que hay en el hombre. El diálogo no es un café teológico, sino el umbral del reino.",
    proposito:
      "Juan no mejora el currículo del maestro. Declara que hay que nacer de lo alto para ver el reino. El que enseña y no ha nacido sigue de noche, aunque hable de Dios con soltura.",
  },
  "hechos-2": {
    lugar: "Jerusalén, el día de Pentecostés, en la ciudad que había entregado al Justo. Lucas escribe a Teófilo para que conozca la verdad con orden.",
    situacion:
      "El Espíritu desciende. Pedro predica a la casa de Israel. El sermón atraviesa el corazón: «a este Jesús a quien vosotros crucificasteis, Dios le ha hecho Señor y Cristo». La pregunta no es qué sentir, sino qué haremos.",
    proposito:
      "Lucas muestra cómo nace la Iglesia: no de un taller de autoestima, sino de un corte. Arrepentimiento, bautismo en el nombre de Jesús, don del Espíritu. El que oye y no pregunta todavía no ha oído; ha asistido.",
  },
  "juan-1": {
    lugar: "El prólogo no tiene geografía menor: el Verbo era en el principio. El evangelio se escribe contra lecturas que recortan al Hijo, a finales del siglo I.",
    situacion:
      "Los suyos no le recibieron. Hay un pueblo que tenía la ley y no reconoció al que la cumplía. Hay también quienes le reciben y nacen de Dios, no de sangre ni de voluntad de varón.",
    proposito:
      "Juan no abre con un villancico. Abre con tesis: eternidad, creación, rechazo, tabernáculo, gloria. El Unigénito declara al Padre. Quien recorta 1:14 a diciembre ha celebrado un nacimiento sin oír al que era.",
  },
  "isaias-53": {
    lugar: "Judá, siglo VIII a. C., en la órbita de la corte y del templo, cuando el pueblo todavía puede oír a un profeta y ya está aprendiendo a no oírlo.",
    situacion:
      "El Siervo es despreciado y desechado. Las naciones y Israel tropiezan con un justificado que no parece rey. Jehová quiso quebrantarlo. El canto no es un poema de resiliencia, sino cargo, sangre y resultado.",
    proposito:
      "Isaías no consuela con una lección moral. Anuncia al que lleva iniquidades ajenas para que muchos sean justificados. El «todos» no admite excepciones piadosas. El eunuco, siglos después, leerá hasta que Felipe le abra a Cristo.",
  },
  "romanos-3": {
    lugar: "La misma carta a Roma, el corazón del argumento, después de que judío y gentil hayan quedado bajo pecado.",
    situacion:
      "Toda boca se cerró. Nadie llega a 3:21 sin haber oído que no hay justo ni aun uno. Hay quienes mezclan su hoja de servicios con este párrafo y todavía tienen la boca abierta.",
    proposito:
      "Pablo manifiesta la justicia de Dios, sin la ley como escalera, en la sangre de Cristo, para que Dios sea justo y el que justifica. El ἱλαστήριον no es un adorno cultual, sino el lugar de la sangre.",
  },
  "2-pedro-1": {
    lugar: "Segunda carta de Pedro, hacia el final de su vida, a creyentes que ya recibieron una fe igualmente preciosa.",
    situacion:
      "Pedro va a morir. Hay maestros que prometen libertad y son esclavos. El pueblo puede volverse ocioso y llamar a esa ociosidad gracia. El capítulo 2 espera con los falsos.",
    proposito:
      "Pedir que se añada a la fe, a costa propia, una cadena de virtudes. No es un cartel. Es lo que el capítulo 2 exigirá cuando desenmascare a quienes prometen libertad siendo esclavos. El que no añade no es humilde, sino ciego, y se olvidó de la purificación de sus antiguos pecados.",
  },
  "2-corintios-5": {
    lugar: "Corinto, iglesia turbulenta que discute el apostolado de Pablo y confunde la novedad con un yo recableado.",
    situacion:
      "Hay enemistad con Dios que se disfraza de inspiración. Se cita «nueva criatura» para sentirse otro sin haberse reconciliado. El ministerio de la reconciliación está siendo desplazado por el teatro del yo.",
    proposito:
      "Anunciar que Dios estaba en Cristo reconciliando al mundo a sí, no imputándole sus pecados. Nadie llega al versículo 17 sin el 21. El que fue hecho pecado es el indicativo; la novedad es el fruto, no el lema.",
  },
  "filipenses-2": {
    lugar: "Filipos, colonia romana, iglesia amada y agrietada. Pablo escribe desde la cárcel.",
    situacion:
      "Evodia y Síntique no se ponen de acuerdo. Hay quien mira su propio interés. El himno de Cristo entra en esa grieta, no en un seminario de kénosis.",
    proposito:
      "Pedir el sentir que hubo en Cristo Jesús: siendo en forma de Dios, se despojó, tomando forma de siervo. La exaltación es del Padre. Toda rodilla es escatología, no eslogan de marca.",
  },
  "santiago-1": {
    lugar: "Carta a las doce tribus en la dispersión. Santiago, hermano del Señor, habla a una iglesia que ya sabe oír.",
    situacion:
      "Hay oidores que se miran al espejo y se van. La palabra se consulta como liturgia y no se permanece en ella. El autoengaño tiene vocabulario santo.",
    proposito:
      "Mandar: sed hacedores, y no tan solamente oidores. El que permanece en la ley perfecta, la de la libertad, este será bienaventurado en lo que hace. El altar no es el sentimiento de haber oído.",
  },
  "romanos-12": {
    lugar: "Roma, después de once capítulos de misericordia. El «así que» no es un giro moralista, sino consecuencia.",
    situacion:
      "Hay quien quiere un culto de emoción sin cuerpo y sin un no al siglo. Hay quien convierte el párrafo en un manual de hábitos y corta «por las misericordias».",
    proposito:
      "Pedir que se presenten los cuerpos en sacrificio vivo. El siglo tiene molde; Cristo tiene forma de siervo. La mente se renueva porque las misericordias preceden al mandato.",
  },
  "juan-14": {
    lugar: "Jerusalén, la noche de la traición. El aposento. Judas ya salió.",
    situacion:
      "Los discípulos se turban. Tomás no sabe a dónde va el Señor. Felipe pedirá ver al Padre. Hay quien buscará después un mapa de muchos caminos para no ofender.",
    proposito:
      "Jesús no señala un camino: Él es el camino, la verdad y la vida. Nadie viene al Padre sino por mí. El Paráclito no abre un segundo sendero: toma de lo que es de Cristo y lo hace saber.",
  },
  "salmo-23": {
    lugar: "Israel, culto. Salmo de David. El 22 es el clamor del abandonado; el 23, el Pastor; el 24, el Rey de gloria.",
    situacion:
      "Hay valle de sombra de muerte. Hay enemigos. Hay un pueblo que convierte el salmo en postal de funeral o en mindfulness hebreo, y niega el valle para quedarse con el pasto.",
    proposito:
      "Confesar que Jehová es pastor en el valle, no después de que el valle se evapore. El «tú» llega en la sombra. La vara y el cayado son disciplina y sostén. El bien y el hesed persiguen.",
  },
  "genesis-3": {
    lugar: "Edén, al principio. Moisés escribe para un pueblo sacado de Egipto, que debe saber cómo se quebró el pacto antes de oír el Sinaí.",
    situacion:
      "Hay cuatro bocas: la serpiente, la mujer, el hombre y Jehová Dios. El verbo decisivo del versículo 1 no es comer, sino «dijo». La primera herida es hermenéutica. El animal habla y el hombre calla.",
    proposito:
      "Narrar la transgresión del pacto, el juicio y la promesa de la simiente. No es mito de autoestima ni saga etiológica que se evapore. Jesús toma Génesis 2 como Palabra del Creador. Quien disuelva a Adán disuelve a Cristo.",
  },
  "salmo-22": {
    lugar: "Culto de Israel. Lamento real. David primero. El Hijo de David, con autoridad canónica, en el Gólgota.",
    situacion:
      "El justo está rodeado. Hay abandono, manos y pies, sorteo de vestiduras. Quien se lleva solo el versículo 1 aún no ha oído el 24: no me has despreciado. El clamor no es el final.",
    proposito:
      "Orar el abandono hasta la asamblea. El abandonado promete anunciar el Nombre a sus hermanos. Mateo 27 no cita un adorno. Hebreos 2:12 pone al Hijo en esa asamblea.",
  },
  "marcos-7": {
    lugar: "Decápolis: oído gentil. No es viñeta de Galilea judía. Marcos escribe el milagro con saliva, gemido y una palabra aramea.",
    situacion:
      "Antes, la sirofenicia oye una palabra dura y cree; este sordo no puede oír ninguna. Más atrás, fariseos con labios y corazón lejos. La muchedumbre trae al sordo y no soporta el silencio que el Señor manda después.",
    proposito:
      "Mostrar que el sordo no se abre: es abierto. ἐφφαθά es decreto, no técnica de escucha interior. Isaías 35 está debajo. El que convierte Éfata en marca y deja al sordo cerrado ha tomado el nombre del milagro en vano.",
  },
  "apocalipsis-5": {
    lugar: "El cielo, en visión, dado a Juan en Patmos. La Iglesia es perseguida. El César parece abrir la historia.",
    situacion:
      "Hay un libro sellado y no hay quien lo abra. Juan llora. Un anciano dice: no llores. Se anuncia un León y se ve un Cordero como inmolado, de pie. El pánico profético pondrá después el cetro en el periódico.",
    proposito:
      "Declarar quién abre la historia: el que fue degollado y está de pie. El ἄξιος se ata a la sangre. El cielo no comete idolatría: el Cordero recibe lo que ninguna criatura puede recibir.",
  },
};
