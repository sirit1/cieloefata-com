import { TRATADO_MES_SLUG, tratadoTienePack } from "@/lib/catalogo";

export type Tratado = {
  slug: string;
  n: string;
  kicker: string;
  ref: string;
  title: string;
  blurb: string;
  cuerpo: string[];
  pack: boolean;
};

export const tratados: Tratado[] = [
  {
    slug: "el-texto-manda",
    n: "00",
    kicker: "Método · V.E.R.D.A.D.",
    ref: "Nehemías 8:8",
    title: "El texto manda",
    blurb:
      "V.E.R.D.A.D. —Ver, Entorno, Revelación, Doctrina, Argumento y Decisión— no es un acrónimo para recitar ni un noveno puesto en la feria de técnicas. Es el cauce por el que esta casa oye el capítulo entero, hasta que el comentario se sienta atrás y el oído ceda.",
    pack: true,
    cuerpo: [
      "Hay un versículo que se cita para no leer el capítulo, y hay un método que se recita para no sudar el texto. Este tratado abre la serie no con un amuleto, sino con el oficio: el texto manda. Lo demás —el comentario, el predicador de moda, el diccionario, el acrónimo mismo— se sienta atrás, y se sienta de rodillas. Nehemías 8:8 no es un lema de escuela: leían en el libro de la ley de Dios claramente, y ponían el sentido, y se entendía la lectura. El pueblo no recibió una técnica. Recibió la Palabra abierta.",
      "El Método V.E.R.D.A.D.™ —Ver, Entorno, Revelación, Doctrina, Argumento y Decisión— nace de un lamento, no de una vanidad. Durante generaciones se ha hecho creer al pueblo de Dios que debe escoger entre la piedad ardiente pero ignorante y la erudición técnica pero gélida. Las Escrituras no ofrecen esa dicotomía. La doctrina más profunda produce la doxología más encendida. Por consiguiente, esta cadena no se inventa para rivalizar con Calvino o con Lightfoot: les devuelve lo que daban por sentado, que la Escritura es un discurso, no un mosaico.",
      "El mal que el método extirpa tiene nombre: versiculitis. Extraer una unidad delimitada por la numeración tardía de Estienne y desgajarla del párrafo, del pacto y del canon. Un texto fuera de su contexto se convierte en pretexto. Filipenses 4:13, leído sin la cárcel y sin el contentamiento, se vuelve cheque en blanco. Jeremías 29:11, leído sin el destierro, se vuelve talismán de prosperidad. Ahora bien, V.E.R.D.A.D. no opera por magia de iniciales. El que recita los seis pasos y no marca un verbo, no abre un léxico, no sitúa un pacto y no se arrodilla, no ha usado el método: lo ha nombrado.",
      "Cada eslabón depende del anterior y prepara el posterior. Invertir el orden no es adaptar: es eiségesis. Nadie llega a Decisión sin haber pasado por Ver. Nadie invoca Doctrina para ahorrarse Revelación. Nadie usa Argumento como primer movimiento. El que empieza por A para ganar una polémica no está haciendo Éfata: está haciendo teatro. El milagro, no obstante, sigue siendo de Marcos 7: Éfata, sé abierto. El método es el cauce, no el milagro. Si el acrónimo se sienta en el trono, se ha vuelto a la sordera con más libros.",
      "Este tratado no pide que memorices la cadena para exhibirla. Pide que abras un capítulo entero, en voz alta, y que dejes que el texto mande sobre el comentario. El resto de la serie toma el versículo que se cita de memoria y lo restituye al párrafo que lo sostiene. Quien salga de aquí con un lema y sin un oído habrá invertido el oficio. El texto manda. El método sirve. La rodilla cierra.",
    ],
  },
  {
    slug: "el-crisol-de-lo-oido",
    n: "00b",
    kicker: "Crisol · oír y hacer",
    ref: "Santiago 1:22–25",
    title: "El crisol de lo oído",
    blurb:
      "Oír y no hacer no es un retraso inocente: es engaño de sí. Santiago pone el espejo delante, y el que se mira y se va olvida el rostro. Este tratado es la compuerta: lo oído se prueba hasta que quede un acto, no un archivo.",
    pack: true,
    cuerpo: [
      "Hay un estudio que cierra con una frase bien hecha y un corazón intacto. Santiago no le da nombre de retraso: le da nombre de engaño. Sed hacedores de la palabra, y no tan solamente oidores, engañándoos a vosotros mismos. El altar no es el sentimiento de haber oído, ni la liturgia de un cuaderno bien anotado. Es el hombre que permanece en la ley perfecta, la de la libertad, y es hacedor de la obra. El que cierra el pasaje sin acto ha vuelto a mirarse y se ha ido.",
      "El espejo de 1:23–24 no es una metáfora de autoestima. Es el rostro natural que se ve y se olvida. παραλογιζόμενοι ἑαυτούς: el retraso no es inocente. La palabra implantada ya está; el Padre de las luces nos engendró por ella. Ahora bien, esa palabra no se consulta para archivar un hallazgo. Se permanece en ella. Mateo 7:24–27 está debajo: el que oye y no hace es casa sobre arena. El Señor que dijo Éfata no deja el oído abierto para el archivo. Lo deja abierto para el acto.",
      "C.R.I.S.O.L.™ —expuesto en *El altar del espejo*— no es un método segundo ni un rival de V.E.R.D.A.D. Es la compuerta pastoral de Decisión: cotejo canónico, fruto, verbo del texto, afecto sometido, oración y cuerpo. Quien mortifica en secreto de redes ha convertido la obediencia en teatro. Quien recita «hoy muero a…» sin el verbo del pasaje ha importado un ego genérico. El crisol no fabrica un acto: prueba el que el texto ya pidió.",
      "Este tratado no pide siete propósitos. Pide uno. Lo que el texto mostró, hazlo antes de siete días. Anótalo. Dilo a un testigo. Si se queda en el cuaderno sin acto, volviste a mirarte y te fuiste. La bienaventuranza de Santiago no está en el oír pulido: está en el hacer. Por tanto, el que colecciona estudios y no permanece ha convertido la escuela en tocador.",
    ],
  },
  {
    slug: "buscad-primeramente",
    n: "01",
    kicker: "Reino · no ansiedad",
    ref: "Mateo 6:33",
    title: "Buscad primeramente",
    blurb:
      "«Buscad primeramente el reino» no es un lema de carrera ni una técnica para que lo demás se añada como premio. Jesús habla a oídos ansiosos, en el Sermón del Monte, y el reino que se busca no es un proyecto personal: es el Padre que ya sabe.",
    pack: true,
    cuerpo: [
      "Hay un versículo que viaja en el bolsillo de quien quiere que Dios le organice la vida. Mateo 6:33 se cita como si el reino fuera una palanca: busca esto, y lo demás —el puesto, la casa, el descanso— se añade. El Sermón del Monte, no obstante, no abre una escuela de gestión. Abre una reprimenda a la ansiedad. No os afanéis. El Padre sabe. Mirad las aves. Considerad los lirios. Por consiguiente, quien convierte «buscad primeramente» en un método para prosperar ya ha invertido el párrafo: ha puesto el añadido en el trono y el reino en la herramienta.",
      "El contexto no es un taller de propósito. Es el monte, y es el discípulo que no puede servir a Dios y a las riquezas. Nadie puede servir a dos señores. El 6:33 no viaja solo: detrás está el tesoro que la polilla come, delante está el «no os afanéis por el día de mañana». ζητεῖτε δὲ πρῶτον: buscad primero. τὴν βασιλείαν τοῦ θεοῦ καὶ τὴν δικαιοσύνην αὐτοῦ: el reino de Dios y su justicia. La justicia que se busca no es una hoja de servicios; es la del Padre que ve en lo secreto. El añadido —ταῦτα πάντα— son comida y vestido, no el imperio del yo.",
      "Ahora bien, el texto no desprecia el pan. El Padre lo da. El que no se afana no es el que no trabaja: es el que no adora al mañana. El reino se busca porque el Rey está cerca, no porque el siglo premie la piedad. Quien recita 6:33 para justificar su prisa todavía está afanado, aunque cite al Señor. El tratado restituye el versículo al monte: primero el Reino, y el Reino no es un atajo hacia lo que el afán ya quería.",
      "Esta semana, nombra un afán que habías bautizado como «buscar el reino». Déjalo en el párrafo. El Padre ya sabe que tienes necesidad. El que busca primero lo que se añade aún no ha oído el sermón: ha oído un lema de carrera.",
    ],
  },
  {
    slug: "todo-lo-puedo",
    n: "02",
    kicker: "Contentamiento · cárcel",
    ref: "Filipenses 4:13",
    title: "Todo lo puedo",
    blurb:
      "«Todo lo puedo en Cristo» no es un cheque en blanco ni un grito de cancha. Pablo escribe desde la cárcel, y el «todo» es el contentamiento: abundar y sufrir necesidad, sin que el yo se vuelva el verbo.",
    pack: true,
    cuerpo: [
      "Hay un versículo que se pinta en un estadio y se recita antes de un examen, como si Cristo fuera el combustible del yo. Filipenses 4:13 no es ese grito. Pablo no anuncia que puede todo lo que se le antoje. Anuncia que ha aprendido a contentarse. Sé vivir humildemente, y sé tener abundancia. En todo y por todo estoy enseñado. El «todo» del 13 es el «todo» del 12: abundar y sufrir necesidad. Quien recorta el 13 para un cartel de superación ha dejado a Pablo en la cárcel y se ha llevado el lema.",
      "La carta se escribe desde la prisión, hacia el 60–62, a una iglesia querida que ha enviado ayuda. El 4:10–20 es acción de gracias, no un manual de potencial. ἐν τῷ ἐνδυναμοῦντί με: en el que me fortalece. El sujeto no es el apóstol. El poder no es una técnica de enfoque. Es Cristo, y Cristo no se alquila para el récord de esta semana. Ahora bien, el texto no niega la fuerza: la sitúa. El que puede es el que ha aprendido a pasar hambre sin apostatar y a abundar sin ensoberbecerse.",
      "El himno de 2:5–11 ya midió la mente de Filipos: forma de siervo, muerte de cruz. El 4:13 no deshace ese himno. Lo encarna en la flaqueza cotidiana. Por tanto, si tu «todo lo puedo» no cabe en una cárcel, no es Filipenses. El tratado quita el cheque en blanco y devuelve el contentamiento. Cristo fortalece para permanecer, no para coronar el yo.",
      "Esta semana, deja de citar 4:13 como lema de conquista. Di a alguien qué necesidad estás aprendiendo a sufrir, o qué abundancia estás aprendiendo a no adorar. El que se lleva el versículo y deja el 12 ha fabricado otro Cristo: un entrenador, no el que fortalece al preso.",
    ],
  },
  {
    slug: "el-pensamiento-que-no-era-tuyo",
    n: "03",
    kicker: "Destierro · no talismán",
    ref: "Jeremías 29:11",
    title: "El pensamiento que no era tuyo",
    blurb:
      "«Porque yo sé los pensamientos que tengo acerca de vosotros» no es una póliza individual de prosperidad. Jeremías escribe a desterrados, y el pensamiento de paz es de Jehová: setenta años, no un atajo, y un pueblo, no un eslogan.",
    pack: true,
    cuerpo: [
      "Hay un versículo que se regala en graduaciones y se cuelga en la pared como si Dios debiera un futuro próspero a cada lector. Jeremías 29:11 no es esa póliza. El profeta escribe a los llevados a Babilonia. Edificad casas. Plantad huertos. Multiplicaos. Buscad el bien de la ciudad. Y cuando setenta años se cumplan —no cuando el ánimo lo pida—, yo os visitaré. El pensamiento de paz no era del desterrado. Era de Jehová. Quien lo toma como talismán personal ha hurtado la carta a un pueblo y se la ha puesto en el bolsillo.",
      "El 29 no viaja solo. Detrás están los falsos profetas que prometían un regreso pronto. Delante está la sentencia contra Semaías. מַחְשְׁבוֹת שָׁלוֹם וְלֹא לְרָעָה: pensamientos de paz, y no de mal. El shalom de este párrafo no es un aumento: es que el destierro no será el final, y que el pueblo buscará a Dios con todo el corazón. Ahora bien, esa paz no anula los setenta años. El que recita 29:11 para no oír el 29:10 ha fabricado un dios que no sabe esperar.",
      "El pensamiento que no era tuyo es precisamente ese: Jehová no consulta tu calendario. Promete un futuro y un fin, y pide que se habite el destierro sin mentira. Por tanto, si tu versículo de «planes de prosperidad» no cabe en Babilonia, no es Jeremías. El tratado restituye la carta a los desterrados. El lector no es el destinatario primero. Es oidor de un Dios que guarda pacto cuando el siglo promete un atajo.",
      "Esta semana, deja de colgar 29:11 sobre un futuro que tú inventaste. Lee 29:4–14 entero, y nombra delante de alguien el destierro que no se evapora con un lema. El pensamiento de paz permanece. El talismán, no.",
    ],
  },
  {
    slug: "prospere-tu-alma",
    n: "04",
    kicker: "Salud · no factura",
    ref: "3 Juan 2",
    title: "Prospere tu alma",
    blurb:
      "«Que te vaya bien en todas las cosas, y que tengas salud» no es una factura de prosperidad. Juan saluda a Gayo, y el alma que prospera es la que camina en la verdad: hospitalidad, no un cuerpo como ídolo.",
    pack: true,
    cuerpo: [
      "Hay un versículo que se predica como si el apóstol hubiera firmado un cheque de salud y caudal. 3 Juan 2 es un saludo. Amado, yo deseo que tú seas prosperado en todas las cosas, y que tengas salud, así como prospera tu alma. El peso no cae sobre la bolsa ni sobre el pulso: cae sobre el alma que ya camina en la verdad. Gayo recibe a los hermanos. Diótrefes ama el primer lugar. Demetrio tiene buen testimonio. Quien extrae el 2 para una doctrina de factura ha dejado la carta y se ha llevado un lema de consumo.",
      "εὐοδοῦσθαι: que el camino te vaya bien. El verbo no legisla un caudal. ὑγιαίνειν: que tengas salud. Juan no desprecia el cuerpo; tampoco lo corona. καθώς εὐοδοῦταί σου ἡ ψυχή: así como prospera tu alma. El «así como» es la medida. Si el alma no camina en la verdad, el saludo no se convierte en derecho. Ahora bien, el texto no pide enfermedad como virtud. Pide que nadie convierta un deseo apostólico en un ídolo de bienestar.",
      "La verdad de esta carta se ve en la puerta: Gayo hospeda a los que salieron por causa del Nombre. Diótrefes los echa. Por tanto, prosperar aquí es permanecer en esa verdad, no cobrar un versículo. El tratado quita la factura y devuelve el saludo. El alma que prospera recibe hermanos; no recita 3 Juan 2 para no recibirlos.",
      "Esta semana, mide el versículo por la hospitalidad, no por la cuenta. Di a alguien a quién has cerrado la puerta mientras citabas la prosperidad del alma. El que se lleva el 2 y deja a Gayo ha fabricado otro evangelio: el del cuerpo como prueba, y el del caudal como sello.",
    ],
  },
  {
    slug: "las-ventanas-de-los-cielos",
    n: "05",
    kicker: "Diezmo · no inversión",
    ref: "Malaquías 3:10",
    title: "Las ventanas de los cielos",
    blurb:
      "«Traed los diezmos y probadme» no es un esquema de inversión ni una amenaza de maldición doméstica. Malaquías habla a un pueblo que robaba a Dios en el culto, y las ventanas se abren sobre un pacto, no sobre un contrato de retorno.",
    pack: true,
    cuerpo: [
      "Hay un versículo que se predica con calculadora. Malaquías 3:10 se cita como si Jehová hubiera firmado un contrato de retorno: trae el diezmo, y las ventanas se abren, y no habrá espacio para guardar. El profeta, no obstante, no abre una oficina de inversiones. Acusa a un pueblo que robaba a Dios: el pan de la casa, la porción del levita, el temor del Nombre. Traed todos los diezmos al alfolí, y haya alimento en mi casa. El alimento es para la casa de Dios, no para el que da como quien compra una bendición.",
      "El 3:8–12 no viaja solo. Detrás está el mensajero, y el Señor que viene a su templo como fuego. Delante está el libro de memoria y el sol de justicia. בְּחָנוּנִי נָא: probadme ahora en esto. La prueba no es un truco de fe para el caudal. Es el desafío a un pueblo cínico que decía «es en vano servir a Dios». Ahora bien, el texto no anula el dar. El Nuevo Testamento oye 2 Corintios 9 y no oye un esquema: cada uno dé como propuso en su corazón, no con tristeza ni por necesidad. El que convierte Malaquías en un embudo de ofrenda ha hurtado el pacto y ha puesto un contrato.",
      "Las ventanas de los cielos, en el relato del diluvio, no se abren para enriquecer: se abren porque Dios actúa. Aquí se abren para un pueblo que deja de robar el culto. Por tanto, si tu «probadme» no cabe en un templo despreciado, no es Malaquías. El tratado restituye el versículo al alfolí. El que da para que le devuelvan aún no ha oído al profeta: ha oído un vendedor.",
      "Esta semana, deja de citar 3:10 como inversión. Si das, da al Nombre, no al retorno. El que retiene el pan de la casa y recita las ventanas ha robado dos veces: a Dios, y al texto.",
    ],
  },
  {
    slug: "la-muerte-y-la-vida",
    n: "06",
    kicker: "Lengua · no decreto",
    ref: "Proverbios 18:21",
    title: "La muerte y la vida",
    blurb:
      "«La muerte y la vida están en poder de la lengua» no es un decreto de palabra de fe ni una técnica para crear realidades. El proverbio pone peso sobre lo que se dice, y el que ama esa lengua come su fruto: no fabrica un mundo, rinde cuentas.",
    pack: true,
    cuerpo: [
      "Hay un versículo que se predica como si la lengua creara mundos. Proverbios 18:21 se cita para decretar salud, caudal y clima, como si Jehová hubiera entregado al creyente el oficio de «haya luz». El proverbio, no obstante, no es un manual de ontología. Muerte y vida están en poder de la lengua, y el que la ama comerá de sus frutos. El peso es moral, no mágico. Quien convierte el 21 en una técnica de decreto ha dejado la sabiduría y se ha llevado un talismán.",
      "El 18 no viaja solo. El 18:20 ya dijo que del fruto de la boca se sacia el vientre. El 18:13 reprende al que responde antes de oír. Santiago 3 espera con el bosque y la chispa: la lengua es un fuego, y nadie puede domarla. Ahora bien, ese fuego no fabrica realidades: incendia hermanos. דְּבָרֶיהָ: sus palabras. El que ama la lengua —la propia, la que se exhibe, la que no calla— come lo que sembró. El fruto no es un milagro decretado. Es la cosecha de lo dicho.",
      "Por tanto, si tu «muerte y vida» no cabe en un proverbio que también manda callar, no es este texto. El tratado quita el decreto y devuelve el temor. Callar para ganar, en esta casa, no es huir: es no encender el bosque por una chispa, y hablar cuando el pasaje manda hablar. El que usa 18:21 para no oír a Santiago ha fabricado otra lengua: la del mago, no la del testigo.",
      "Esta semana, nombra una palabra tuya que hayas tratado como decreto —una promesa al aire, una maldición suave, un «yo declaro»—. Sométela al proverbio. El que ama su lengua para crear aún no ha comido el fruto: lo está aplazando.",
    ],
  },
  {
    slug: "a-este-monte",
    n: "07",
    kicker: "Fe · no fórmula",
    ref: "Marcos 11:23–24",
    title: "A este monte",
    blurb:
      "«Al que dijere a este monte» no es una fórmula para mover obstáculos domésticos. Jesús habla camino de Jerusalén, junto a una higuera seca, y la fe que no duda se mide por el templo y por el perdón, no por el capricho.",
    pack: true,
    cuerpo: [
      "Hay un versículo que se recita contra el alquiler, contra la enfermedad y contra el jefe, como si «este monte» fuera cualquier molestia. Marcos 11:23–24 no es esa fórmula. Jesús entra en Jerusalén. Maldice la higuera. Limpia el templo. A la mañana, la higuera está seca hasta la raíz. Entonces dice: el que dijere a este monte. El monte está a la vista, en el camino de Betania a la ciudad, y el templo acaba de ser juzgado. Quien convierte el 23 en un hechizo de obstáculos ha dejado la higuera y se ha llevado el lema.",
      "ἔχετε πίστιν θεοῦ: tened fe de Dios. μὴ διακριθῇ: no dude en su corazón. πιστεύῃ ὅτι ὃ λαλεῖ γίνεται: crea que será hecho lo que dice. El 24 ensancha: todo lo que pidiereis orando, creed que lo recibiréis. Ahora bien, el 25 cierra la puerta al capricho: cuando os pongáis a orar, perdonad. La fe que mueve el monte no es un músculo de visualización. Es confianza en Dios, atada al juicio del templo y al perdón del hermano. El que pide sin perdonar ya oyó el 24 y tapó el 25.",
      "Por tanto, si tu «este monte» no cabe junto a una higuera que simboliza un culto estéril, no es Marcos 11. El tratado restituye el dicho al camino de Jerusalén. La oración de fe no es un decreto del yo. Es pedir al Padre, sin duda y sin rencor, lo que su reino ya juzgó. El que usa el versículo para no perdonar ha fabricado otra fe: la del mago, no la del discípulo.",
      "Esta semana, deja de apuntar el 23 a un obstáculo que el siglo te dictó. Lee 11:12–25 entero. Si hay un hermano sin perdonar, el monte espera. El que recita la fórmula y retiene la ofensa todavía no ha orado: ha decretado.",
    ],
  },
  {
    slug: "para-bien",
    n: "08",
    kicker: "Pacto · no destino",
    ref: "Romanos 8:28",
    title: "Para bien",
    blurb:
      "«Todas las cosas les ayudan a bien» no es un destino blando ni un consuelo de que todo pasa por algo. Pablo habla a los que aman a Dios, a los llamados conforme a su propósito, y el bien es la imagen del Hijo, no el alivio.",
    pack: true,
    cuerpo: [
      "Hay un versículo que se dice en los velorios para que duela menos. Romanos 8:28 se cita como si Dios debiera un sentido a cada golpe, y como si «para bien» significara «para que yo entienda y descanse». Pablo, no obstante, no ofrece un destino blando. Sabemos que a los que aman a Dios, todas las cosas les ayudan a bien, esto es, a los que conforme a su propósito son llamados. El bien tiene nombre dos versículos más allá: ser hechos conformes a la imagen de su Hijo. Quien recorta el 28 para un consuelo genérico ha dejado la predestinación y se ha llevado un lema de resignación.",
      "El 8 no viaja solo. Detrás gimen la creación, los que tienen las primicias del Espíritu, y el Espíritu mismo con gemidos indecibles. Delante está la cadena: a los que antes conoció, predestinó, llamó, justificó, glorificó. συνεργεῖ: obran juntas. El verbo no promete que cada hecho sea bueno. Promete que Dios las hace obrar hacia un bien que el gemido aún no ve. Ahora bien, ese bien no es el alivio. Es el Hijo. El que cita 8:28 para no gemir ha invertido el capítulo: ha puesto la explicación donde Pablo pone la esperanza.",
      "Por tanto, si tu «para bien» no cabe en un valle que todavía gime, no es Romanos 8. El tratado restituye el versículo a los llamados. El lector no es un destinatario de coincidencias piadosas. Es alguien a quien el Espíritu ayuda, y a quien el Padre conforma al Hijo. El que usa el 28 para callar un lamento ha fabricado otro dios: el del destino, no el del propósito.",
      "Esta semana, deja de decir «todo pasa por algo» donde el texto dice «a los que aman a Dios». Gime, si hay que gemir. El bien tiene rostro. El que se lleva el lema y deja el 29 aún no ha oído: ha consolado.",
    ],
  },
  {
    slug: "si-dios-por-nosotros",
    n: "09",
    kicker: "Elección · no invencibilidad",
    ref: "Romanos 8:31",
    title: "Si Dios por nosotros",
    blurb:
      "«Si Dios es por nosotros, ¿quién contra nosotros?» no es un grito de invencibilidad ni un escudo de campaña. Pablo pregunta después de la cadena de 8:28–30, y la respuesta no es que nadie se oponga: es que nadie puede condenar al que el Hijo compró.",
    pack: true,
    cuerpo: [
      "Hay un versículo que se grita como si el creyente hubiera quedado inmune. Romanos 8:31 se cita en campañas, en pleitos y en enfermedades, como si «quién contra nosotros» significara «nadie podrá tocarme». Pablo, no obstante, no promete un siglo sin adversario. Pregunta: ¿qué, pues, diremos a esto? Si Dios es por nosotros, ¿quién contra nosotros? El «esto» es la cadena que acaba de oírse: propósito, llamado, justificación, gloria. El que no dio a su propio Hijo, ¿cómo no nos dará también con él todas las cosas? Quien recorta el 31 para un escudo de invencibilidad ha dejado al Hijo entregado y se ha llevado el grito.",
      "El 31–39 es un tribunal, no un himno de conquista. ¿Quién acusará? Dios es el que justifica. ¿Quién condenará? Cristo es el que murió, resucitó e intercede. ¿Quién nos apartará? Tribulación, angustia, persecución, hambre, desnudez, peligro, espada: la lista está, y no se evapora. ἐν τούτοις πᾶσιν ὑπερνικῶμεν: en todas estas cosas somos más que vencedores. No aparte de ellas. Ahora bien, el amor de Dios en Cristo Jesús no es un talismán contra el hierro. Es la imposibilidad de que esa lista separe.",
      "Por tanto, si tu «quién contra nosotros» no cabe junto a una espada, no es Romanos 8. El tratado restituye la pregunta al tribunal. Dios es por nosotros porque entregó al Hijo, no porque el lector sea inmune. El que usa el 31 para no sufrir ha fabricado otra elección: la del invencible, no la del justificado.",
      "Esta semana, nombra un «contra» que habías tratado como imposibilidad teológica. El texto no lo niega. Niega que condene. El que se lleva el grito y deja el 35 aún no ha comparecido: ha alardeado.",
    ],
  },
  {
    slug: "espiritu-de-poder",
    n: "10",
    kicker: "Don · no autoayuda",
    ref: "2 Timoteo 1:7",
    title: "Espíritu de poder",
    blurb:
      "«No nos ha dado Dios espíritu de cobardía» no es un cartel de autoayuda ni un grito contra el miedo natural. Pablo escribe a Timoteo, que debe avivar el don, y el poder, el amor y el dominio propio son el Espíritu dado, no un temperamento administrado.",
    pack: true,
    cuerpo: [
      "Hay un versículo que se recita para no temblar, como si el miedo fuera, en bloque, desobediencia, y el valor, en bloque, fe. 2 Timoteo 1:7 no es ese cartel. Porque no nos ha dado Dios espíritu de cobardía, sino de poder, de amor y de dominio propio. Pablo escribe a un hijo querido que debe avivar el don, no avergonzarse del testimonio ni de las prisiones. El «espíritu» no es un temperamento que Timoteo se administra. Es el don ya dado. Quien convierte el 7 en un grito de autoayuda ha dejado la cárcel de Pablo y se ha llevado un lema de temple.",
      "δειλία: cobardía, pusilanimidad. δύναμις, ἀγάπη, σωφρονισμός: poder, amor, juicio sano. Los tres vienen juntos. El poder que no ama es dureza. El amor que no se domina es clima. El dominio que no nace del don es estoicismo. Ahora bien, el 6 manda: aviva el don de Dios que está en ti. El 8 manda: no te avergüences. El 12 confiesa: yo sé a quién he creído. El versículo 7 no viaja como consigna de valentía genérica. Viaja como razón para no abandonar el evangelio cuando el siglo avergüenza.",
      "Por tanto, si tu «espíritu de poder» no cabe junto a unas prisiones, no es 2 Timoteo. El tratado restituye el versículo a Timoteo. El miedo que el texto reprende es el de tapar el testimonio. El que usa el 7 para no temblar ante un examen ha fabricado otro espíritu: el del yo entrenado, no el que Dios dio.",
      "Esta semana, nombra de qué testimonio te has avergonzado —no de qué emoción te has avergonzado—. Aviva el don. El poder, el amor y el dominio propio ya fueron dados. El que recita el lema y calla el evangelio todavía tiene espíritu de cobardía, aunque hable fuerte.",
    ],
  },
  {
    slug: "isaias-53",
    n: "11",
    kicker: "Expiación · Siervo",
    ref: "Isaías 53:5",
    title: "Herido por nuestras rebeliones",
    blurb:
      "La llaga del Siervo no es póliza de sanidad automática ni poesía de resiliencia. Isaías 53:5 vuelve al Cántico entero: herido por nuestras rebeliones, ofrenda por la culpa, justificación de muchos. El lector no es el Siervo.",
    pack: true,
    cuerpo: [
      "«Por su llaga fuimos nosotros curados» circula como amuleto clínico y como consuelo sin sangre. Este tratado restituye Isaías 53:5 a Isaías 52:13–53:12: el Siervo exaltado y desfigurado, el «nosotros» descarriado, el castigo de nuestra paz sobre él, el אשם (ofrenda por la culpa). La Escritura interpreta la Escritura —Hechos 8, 1 Pedro 2, Mateo 8— y derriba la prosperidad de las heridas, la empatía vaga y la autoexpiación. Conduce al tomo *El Siervo, no tú* y, mientras el cuerpo gime, a *Bástate mi gracia*.",
      "El canto abre en 52:13: he aquí mi siervo. Israel esperaba un brazo visible, un poder que se viera y un cetro que no temblara. El texto, no obstante, pone a un hombre de quien se esconde el rostro, sin parecer, sin hermosura, contado con los transgresores. El Gran Rollo de Isaías, copiado hacia el 125 a. C., ya trae estas líneas. Qumrán quita la coartada de un canto inventado después de Gólgota. El texto estaba. La cruz lo cumplió. Por consiguiente, el que dice que la Iglesia fabricó al Siervo herido para explicar a un nazareno ejecutado miente contra el rollo y contra el desierto de Judá.",
      "נָשָׂא y סָבַל: llevar y soportar. אָשָׁם: ofrenda por la culpa. La sustitución no es un invento latino, ni una teoría medieval, ni un esquema de Anselmo puesto sobre el hebreo. Está en el hebreo. Jehová quiso quebrantarlo. La cruz no es un accidente que Dios aprovechó. Es la voluntad que se cumple. El silencio ante los trasquiladores no es estoicismo: es obediencia. El Siervo no muere porque el siglo sea cruel; muere porque el Padre pone sobre él la iniquidad de todos nosotros.",
      "Hechos 8 no improvisa. El eunuco lee este rollo y no entiende. Felipe le abre la boca y le anuncia el evangelio de Jesús. Primera de Pedro 2:24 clava: llevó nuestros pecados en su cuerpo sobre el madero. Segunda de Corintios 5:21: al que no conoció pecado, por nosotros lo hizo pecado, para que nosotros fuésemos hechos justicia de Dios en él. Mateo 8 oye la llaga cuando Jesús carga enfermedades; no convierte el cántico en póliza automática para todo cuerpo que gime. El canon no ofrece un Cristo de ejemplo sin cargo. El que predica un amor que no lleva rebelión ha cambiado de Siervo.",
      "La curación no es un taller de autoestima, ni la gestión piadosa de una herida que se niega a llamarse pecado. Es paz con Dios porque el castigo de nuestra paz fue sobre él. Todos nos descarriamos como ovejas. El «todos» no admite excepciones piadosas. El que aún cree que puede pagar no ha leído. El que llama «herida» a lo que el texto llama rebelión ha cambiado el vocabulario para no arrodillarse. Ahora bien, el texto no niega que haya heridas; niega que la herida sea el nombre último de lo que el Siervo carga, y niega que el lector se suba al versículo como si fuera el Siervo.",
      "El cordero de Éxodo 12, el macho cabrío de Levítico 16, el justo de Isaías 53 y el Cordero de Apocalipsis 5 son un solo hilo. Esta escuela no mezcla religiones ni arquetipos. Lee el rollo. El Siervo justifica a muchos porque lleva iniquidades. El pueblo queda sano por llaga ajena. Por tanto, si tu cruz es un ejemplo de amor sin cargo, no es Isaías 53. El texto te quita el derecho de decir «yo me curo a mí mismo».",
      "Confiesa esta semana, a Dios y a una persona, un pecado que has llamado herida para no llamarlo rebelión. Nómbralo bajo la llaga del Siervo, sin eufemismo y sin teatro. Luego abre el capítulo entero. El tratado no sustituye a Isaías 53. Lo sirve, y se sienta atrás. Descarga el tratado. Camínalo en RevelatiO.app. Si este texto te quitó el lema de la llaga, *El Siervo, no tú* te espera.",
    ],
  },
  {
    slug: "atar-y-desatar",
    n: "12",
    kicker: "Iglesia · no fórmula",
    ref: "Mateo 18:18–20",
    title: "Atar y desatar",
    blurb:
      "«Todo lo que atéis en la tierra» no es una fórmula de guerra espiritual ni un hechizo de dos o tres. Jesús habla a la iglesia que corrige al hermano, y el atar y desatar es disciplina y perdón, no un decreto contra el aire.",
    pack: true,
    cuerpo: [
      "Hay un versículo que se grita contra principados, contra deudas y contra el clima, como si «atar y desatar» fuera un hechizo que dos o tres pueden lanzar. Mateo 18:18–20 no es esa fórmula. Jesús habla de la oveja perdida, del hermano que peca, de la corrección a solas, de dos o tres testigos, y de decírselo a la iglesia. De cierto os digo que todo lo que atéis en la tierra, será atado en el cielo. El cielo no espera un decreto improvisado: confirma la disciplina de un pueblo que ya oyó al Señor. Quien extrae el 18 para una guerra de eslóganes ha dejado al hermano y se ha llevado el lema.",
      "El 19–20 no es un truco de quórum. Si dos de vosotros se pusieren de acuerdo en la tierra acerca de cualquiera cosa que pidieren, les será hecho por mi Padre. Porque donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos. El «dos o tres» ya apareció: son los testigos de 18:16. El Nombre no es un ambiente. Es la autoridad del Hijo en medio de una iglesia que ata y suelta pecados, no meteorología. Ahora bien, el 21 abre la pregunta de Pedro: ¿hasta siete? El perdón de las setenta veces siete cierra lo que el atar abrió. El que ata y no perdona ha oído a medias.",
      "Juan 20:23 y Mateo 16:19 leen el mismo oficio: no un poder mágico sobre el aire, sino el anuncio de lo que el evangelio ya ató y soltó. Por tanto, si tu «atar» no cabe en una corrección fraterna, no es Mateo 18. El tratado restituye el dicho a la iglesia. El que usa el 18 para no hablar con el hermano ha fabricado otra llave: la del espectáculo, no la del rebaño.",
      "Esta semana, si hay un hermano a quien debías ir a solas, ve. El cielo no espera tu decreto contra un principado innombrado. Espera la obediencia de 18:15. El que se junta de dos o tres para atar el aire y evita la cara del prójimo todavía no se ha congregado en el Nombre: se ha congregado en la fórmula.",
    ],
  },
  {
    slug: "juan-1",
    n: "—",
    kicker: "Cristología",
    ref: "Juan 1:1–18",
    title: "El Verbo se hizo carne",
    blurb:
      "El prólogo de Juan no es un poema para abrir el libro ni un villancico de diciembre: es la tesis del Evangelio. Ahora bien, esa tesis no viaja en consignas sueltas. Dice que el Verbo era Dios, que fue hecho carne, que los suyos no le recibieron, que plantó tabernáculo entre nosotros y que el Unigénito declara al Padre. Por tanto, quien cita «el Verbo se hizo carne» sin Juan 1:1–18 aún no ha oído el tratado: ha oído un lema.",
    pack: false,
    cuerpo: [
      "Hay un versículo que la Iglesia recita en diciembre y olvida en marzo, como si la encarnación fuese un adorno de calendario y no la tesis del evangelio. Juan 1:14 no es un villancico: es el centro de gravedad de todo el libro, donde la eternidad, la creación, el rechazo, el tabernáculo y la gloria del Unigénito se anudan en un solo período. Quien lo oye como adorno aún no ha leído. Quien lo oye como tesis ya no puede recortar al Hijo sin traicionar al evangelista.",
      "«En el principio era el Verbo». Génesis 1 suena, y no por casualidad. El que dijo «sea la luz» es este λόγος. No empieza en Belén. No es un dios segundo, ni un eón tardío, ni una metáfora de la razón cósmica. ἦν πρὸς τὸν θεόν: estaba con Dios, en comunión, no en soledad. θεὸς ἦν ὁ λόγος: era Dios. La gramática no tiembla, y la Iglesia que suaviza 1:1 para no ofender ya eligió otro señor, aunque conserve el vocabulario de la fiesta y el incienso de la novena. Ahora bien, el prólogo no discute con Arrio porque Arrio aún no ha nacido: discute con todo oído que quiera un Jesús útil y un Dios intacto.",
      "Juan mete al Bautista en el umbral para que nadie convierta al Verbo en una idea. Hubo un hombre enviado de Dios. Vino por testimonio. No era la luz. El Verbo, por tanto, no es un símbolo de iluminación interior, ni el arquetipo del maestro despierto. Es alguien de quien se puede dar testimonio, y a quien los suyos no recibieron. El rechazo ya está en la apertura. La cruz no es un accidente del relato: está anunciada en el prólogo, antes de que el Cordero sea señalado y antes de que Pilato pregunte qué es la verdad.",
      "ἐσκήνωσεν: plantó tabernáculo. Éxodo 25 no era un museo. Dios quería habitar en medio de su pueblo, y ahora habita en carne. No en disfraz. La carne no disminuye la deidad; la deidad no anula la carne. El que niega uno de los dos no tiene al Cristo de este evangelio, aunque recite el himno con voz limpia. Colosenses 1 y Hebreos 1 leen el mismo Hijo: imagen del Dios invisible, heredero de todo, por quien fueron hechos los mundos. El prólogo de Juan no es, por consiguiente, un poema suelto. Es el canon diciendo que el que tabernaculaba en el desierto ahora tabernacula en carne.",
      "«Y vimos su gloria, gloria como del unigénito del Padre, lleno de gracia y de verdad». La gloria no es un aura de diciembre. Es la del Unigénito. μονογενής. ἐξηγήσατο: el Hijo exegesó al Padre. Nadie le ha visto. El Hijo le da a conocer. Quien busca al Padre por otro camino no ha oído a Tomás, ni a este prólogo, ni a Juan 14:6. La exclusión no es un tono: es la gramática del evangelio. El Padre se alcanza por el Hijo, o no se alcanza.",
      "A los que le recibieron, les dio autoridad de ser hechos hijos de Dios, los que no son engendrados de sangre, ni de voluntad de carne, ni de varón, sino de Dios. El nuevo nacimiento de Juan 3 ya está aquí, antes de que Nicodemo venga de noche. El maestro de Israel oirá lo que el prólogo ya dijo: hay que nacer. El Verbo no mejora oficios. Da vida. Por tanto, el que ya enseña y todavía no ha nacido no tiene un déficit de curso: está muerto y habla de Dios.",
      "Calvino oye en este prólogo la deidad del Verbo sin merma y la carne sin disfraz. Owen no deja que la comunión πρὸς τὸν θεόν se vuelva una metáfora de cercanía vaga. Packer recuerda que el Hijo no es un apéndice del teísmo: es el que declara al Padre. Esta escuela no cita a estos hombres para sustituir a Juan. Los sienta atrás, y deja el tabernáculo en el centro.",
      "Este tratado no pide que memorices el himno ni que lo recites en la cena de diciembre. Pide que leas Juan 1:1–18 entero, en voz alta, dos veces esta semana, y que escribas una sola frase: qué afirma de Cristo que tú habías dejado blando. El capítulo espera en RevelatiO. La escuela no sustituye la lectura. La sostiene hasta que el oído ceda, y hasta que el Verbo, que era en el principio, deje de ser un adorno del año litúrgico.",
    ],
  },
  {
    slug: "romanos-3",
    n: "—",
    kicker: "Justificación",
    ref: "Romanos 3:21–26",
    title: "Justicia de Dios, sin la ley",
    blurb:
      "Toda boca se cierra. Entonces se manifiesta la justicia de Dios, sin la ley como escalera, en la sangre de Cristo, para que Dios sea justo y el que justifica al que cree. Este ensayo aún no tiene pack en Drive: se lee como preparación, no como tratado numerado de la serie.",
    pack: false,
    cuerpo: [
      "Toda boca se cerró. Romanos 3:19 no es un adorno retórico ni un golpe de efecto para abrir un sermón. Es el umbral. Judío y gentil, bajo pecado, sin jactancia, sin una hoja de servicios que se pueda presentar como moneda. Entonces —pero ahora— se manifiesta la justicia de Dios, aparte de la ley, testificada por la ley y por los profetas. El «aparte» no despide a Moisés: lo pone a testificar. Habacuc 2:4 ya estaba en 1:17. Llega aquí a su claridad. El justo por la fe vivirá, no porque la fe merezca, sino porque Dios justifica.",
      "δικαιοσύνη θεοῦ: justicia de Dios. No un ánimo, no una ficción piadosa, no el «Dios te ve con buenos ojos» de la religión de consumo. Se manifiesta en Jesucristo, para todos los que creen, sin distinción, porque todos pecaron y están destituidos de la gloria de Dios. La fe no merece. Recibe. El que mezcla su hoja de servicios con este párrafo todavía tiene la boca abierta. Por consiguiente, el evangelio que salva al que ya mejoró no es este evangelio: es la ley disfrazada de gracia.",
      "ἱλαστήριον: propiciatorio. Éxodo 25. Levítico 16. El lugar de la sangre. Pablo no elige una metáfora suave. Elige el mueble donde Dios decía que se encontraría con Israel, entre querubines, sobre sangre. Cristo es puesto por Dios como ese lugar. ἀπολύτρωσις: redención, manumisión. Hay precio. Hay manumisión. No hay un evangelio que perdone sin justicia. El Padre no dejó de ser justo para poder perdonar: justifica por la sangre. Quien recorta el ἱλαστήριον para no hablar de ira ha recortado también la misericordia, porque ha convertido el perdón en un gesto barato.",
      "πάρεσις: Dios había pasado por alto pecados anteriores. El ahora —ἐν τῷ νῦν καιρῷ— demuestra su justicia. El Gólgota no es, por tanto, un cambio de humor en el cielo. Es la demostración pública de que el Santo no mira a otro lado. Justifica por la sangre. Es justo y el que justifica al que es de la fe de Jesús. Romanos 3:26 impide dos herejías: la del perdón sin juicio, y la del juicio sin cruz. La primera fabrica un dios doméstico; la segunda, un verdugo sin evangelio. El párrafo sostiene las dos verdades sin mentir.",
      "Calvino no deja que la justificación se vuelva un juego de palabras ni una imputación hueca. Spurgeon anunciaría aquí el milagro: el impío justificado, no el que ya mejoró, el que cree. MacArthur detiene ἱλαστήριον porque el léxico sirve al párrafo, no al revés. Henry oye que la jactancia se excluyó. Esta escuela no cita a estos hombres para sustituir a Pablo. Los sienta atrás, y deja el propiciatorio en el centro. El tratado no es un curso. Es este párrafo, oído otra vez, hasta que la jactancia se calle.",
      "Si tu evangelio salva sin ἱλαστήριον, no es Romanos 3. El texto cierra la boca que aún quiere aportar ley como moneda. Abraham espera en el capítulo 4, no como héroe de hábitos, sino como el que creyó a Dios y le fue contado por justicia. Ahora bien, esa fe no es un salto al vacío: es fiarse de la promesa, y la promesa tiene sangre. El que aún mezcla su expediente con este anuncio todavía no ha oído el «pero ahora».",
      "Esta semana, deja de mezclar tu hoja de servicios con la justificación. Di a alguien, sin teatro y sin disculpa: soy justificado por la fe en Jesús, sin la ley. Luego lee 3:21–26 dentro de 3:9–31. RevelatiO abre el capítulo. Aquí se sostiene el oído hasta que la boca, que 3:19 cerró, se abra otra vez solo para confesar al que es justo y justifica.",
    ],
  },
];

export function tratadoDe(slug: string) {
  return tratados.find((t) => t.slug === slug);
}

export function etiquetaTratado(slug: string) {
  if (slug === TRATADO_MES_SLUG) return "Tratado · este mes";
  if (tratadoTienePack(slug)) return "Tratado";
  return "Próximamente";
}

export function tratadoDelMes() {
  return tratados.find((t) => t.slug === TRATADO_MES_SLUG) ?? tratados.find((t) => t.pack);
}

export function tratadosPublicados() {
  return tratados.filter((t) => t.pack);
}

export function tratadosProximos() {
  return tratados.filter((t) => !t.pack);
}
