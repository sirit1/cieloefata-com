/**
 * Curso Experto Bíblico · Escuela Bíblica Cielo Efata. Días 1 a 20, abiertos.
 * Fuente: los txt de Drive (carpeta «Audios para ElevenLabs (txt)»). Texto bíblico: RVR1960.
 */
export type DiaCurso = {
  n: number;
  slug: string;
  titulo: string;
  versiculo: string;
  cita: string;
  intro: string;
};

export type Bloque = ["h" | "p" | "q", string];

export const CURSO_NOMBRE = "Curso Experto Bíblico";
export const CURSO_PATH = "/curso";
export const CURSO_PUBLICADO = "2026-11-04";

export const DIAS: DiaCurso[] = [
  {
    "n": 1,
    "slug": "dia-1",
    "titulo": "La puerta del sabio",
    "versiculo": "Porque Esdras había preparado su corazón para inquirir la ley de Jehová y para cumplirla, y para enseñar en Israel sus estatutos y decretos.",
    "intro": "Bienvenido a la primera lección de esta escuela bíblica. Durante muchos días vamos a caminar juntos por la Palabra de Dios con un propósito que conviene decir en voz alta desde el principio: no venimos a acumular datos, sino a conocer a Dios. Un hombre puede aprender los nombres de las veintidós letras hebreas, recitar la lista de los reyes de Judá, distinguir un aoristo de un perfecto y explicar la ruta de los viajes de Pablo, y todavía no haber entendido lo que la Escritura llama sabiduría. Por eso la primera lección no trata de gramática ni de fechas. Trata de la puerta por donde se entra. Si la puerta está mal, todo el edificio queda torcido; si la puerta es la correcta, cada lección posterior encuentra su lugar.",
    "cita": "Esdras 7:10"
  },
  {
    "n": 2,
    "slug": "dia-2",
    "titulo": "Dios ha hablado: revelación e inspiración de la Escritura",
    "versiculo": "Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia, a fin de que el hombre de Dios sea perfecto, enteramente preparado para toda buena obra.",
    "intro": "Ayer entramos por la puerta del sabio: el temor de Jehová, el corazón preparado de Esdras, el orden de inquirir, cumplir y enseñar. Hoy ponemos el primer fundamento de todo el edificio, y es una afirmación que la Biblia hace de sí misma desde su primera página hasta la última: Dios ha hablado. Si Dios no hubiera hablado, toda religión sería un esfuerzo humano por adivinar lo que hay detrás del silencio. Pero el Dios de la Escritura no es mudo. Es el Dios que dijo sea la luz, y fue la luz. Es el Dios que llamó a Abraham, que habló a Moisés cara a cara como habla cualquiera a su compañero, que puso sus palabras en la boca de los profetas, y que en estos postreros días nos ha hablado por el Hijo.",
    "cita": "2 Timoteo 3:16-17"
  },
  {
    "n": 3,
    "slug": "dia-3",
    "titulo": "El canon de la Escritura: cuáles libros son Palabra de Dios y por qué",
    "versiculo": "Y les dijo: Estas son las palabras que os hablé, estando aún con vosotros: que era necesario que se cumpliese todo lo que está escrito de mí en la ley de Moisés, en los profetas y en los salmos.",
    "intro": "Ayer aprendimos que Dios ha hablado, que toda la Escritura es soplada por Dios, y que los santos hombres de Dios hablaron siendo llevados por el Espíritu Santo. Hoy surge inevitablemente la pregunta siguiente: ¿cuáles son esos escritos? Si toda la Escritura es inspirada, necesitamos saber qué libros forman parte de la Escritura y cuáles no. Esa pregunta tiene un nombre técnico: la pregunta por el canon.",
    "cita": "Lucas 24:44"
  },
  {
    "n": 4,
    "slug": "dia-4",
    "titulo": "De la mano de Dios a tus manos: la transmisión del texto y el Textus Receptus",
    "versiculo": "Sécase la hierba, marchítase la flor; mas la palabra del Dios nuestro permanece para siempre.",
    "intro": "En los tres primeros días hemos puesto los cimientos: la puerta del sabio, que es el temor de Jehová; la revelación y la inspiración, que nos dicen que toda la Escritura es soplada por Dios; y el canon, que nos dice cuáles son los libros inspirados. Hoy damos el paso siguiente, y respondemos a una pregunta que todo creyente pensante se ha hecho alguna vez: si los escritos originales de Moisés, de Isaías, de Pablo y de Juan se perdieron hace muchos siglos, ¿cómo podemos estar seguros de que lo que tenemos hoy en nuestras manos es lo que ellos escribieron?",
    "cita": "Isaías 40:8"
  },
  {
    "n": 5,
    "slug": "dia-5",
    "titulo": "La lengua que Dios eligió primero: introducción al hebreo bíblico y al alefato",
    "versiculo": "Oye, Israel: Jehová nuestro Dios, Jehová uno es. Y amarás a Jehová tu Dios de todo tu corazón, y de toda tu alma, y con todas tus fuerzas.",
    "intro": "En los cuatro primeros días hemos recorrido el camino que la Palabra de Dios hizo hasta llegar a tus manos: la puerta del sabio, la revelación y la inspiración, el canon de los libros sagrados y la transmisión fiel del texto a lo largo de los siglos. Hoy entramos por primera vez en una de las dos grandes lenguas en que el Espíritu Santo inspiró la Escritura: el hebreo. No pretendo que al terminar esta lección leas con soltura el texto masorético. Lo que quiero es abrirte la puerta, enseñarte a escuchar las veintidós letras, mostrarte cómo piensa esta lengua y darte las primeras llaves para que, cuando en una Biblia de estudio o en una concordancia veas una palabra hebrea con su número Strong, no te parezca un muro, sino una ventana.",
    "cita": "Deuteronomio 6:4-5"
  },
  {
    "n": 6,
    "slug": "dia-6",
    "titulo": "La lengua del evangelio: introducción al griego del Nuevo Testamento",
    "versiculo": "En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios.",
    "intro": "Ayer abrimos la puerta del hebreo, la lengua en que Dios habló a los padres por los profetas. Recorrimos las veintidós letras del alefato, leímos el primer versículo de Génesis y aprendimos el shemá. Hoy abrimos la segunda gran puerta: el griego, la lengua en que el Espíritu Santo inspiró los veintisiete libros del Nuevo Testamento. Es la lengua de los evangelios, de las cartas de Pablo, de Pedro, de Santiago, de Juan y de Judas, y del Apocalipsis. Es la lengua en que se escribió por primera vez el nombre de Jesús unido a la palabra Cristo, y en la que se anunció por escrito que el Verbo fue hecho carne.",
    "cita": "Juan 1:1"
  },
  {
    "n": 7,
    "slug": "dia-7",
    "titulo": "Usar bien la palabra de verdad: introducción a la hermenéutica bíblica",
    "versiculo": "Procura con diligencia presentarte a Dios aprobado, como obrero que no tiene de qué avergonzarse, que usa bien la palabra de verdad.",
    "intro": "En los días cinco y seis abrimos las dos grandes puertas de las lenguas bíblicas: el hebreo y el griego. Aprendimos las letras, leímos los primeros versículos de Génesis y de Juan, y conocimos más de veinticinco palabras fundamentales. Pero conocer las palabras no basta. Una persona puede saber el significado de cada palabra de un pasaje y, sin embargo, entender el pasaje al revés. Por eso hoy entramos en una de las materias más importantes de toda esta escuela: la hermenéutica, es decir, el arte y la ciencia de interpretar correctamente la Escritura.",
    "cita": "2 Timoteo 2:15"
  },
  {
    "n": 8,
    "slug": "dia-8",
    "titulo": "El Verbo hecho carne: exégesis del prólogo del evangelio de Juan",
    "versiculo": "Y aquel Verbo fue hecho carne, y habitó entre nosotros (y vimos su gloria, gloria como del unigénito del Padre), lleno de gracia y de verdad.",
    "intro": "En el día seis leímos en griego el primer versículo del evangelio de Juan, y en el día siete aprendimos los principios para interpretar bien la Escritura: observar, interpretar y aplicar; el sentido literal, gramatical e histórico; el contexto; la Escritura interpretada con la Escritura; y Cristo como centro. Hoy vamos a poner todo eso en práctica en uno de los pasajes más profundos de toda la Biblia: el prólogo del evangelio de Juan, los primeros dieciocho versículos del capítulo uno.",
    "cita": "Juan 1:14"
  },
  {
    "n": 9,
    "slug": "dia-9",
    "titulo": "El libro de los principios: recorrido panorámico por Génesis",
    "versiculo": "Y pondré enemistad entre ti y la mujer, y entre tu simiente y la simiente suya; ésta te herirá en la cabeza, y tú le herirás en el calcañar.",
    "intro": "En los días anteriores aprendimos las lenguas bíblicas, los principios de interpretación, y practicamos la exégesis en el prólogo de Juan. Hoy cambiamos de escala. En lugar de mirar un pasaje con lupa, vamos a subir a una montaña y mirar un libro entero desde lo alto. Y el libro que escogemos es el primero de la Biblia: Génesis.",
    "cita": "Génesis 3:15"
  },
  {
    "n": 10,
    "slug": "dia-10",
    "titulo": "Si Cristo no resucitó: apologética de la resurrección a partir de primera de Corintios quince",
    "versiculo": "Porque primeramente os he enseñado lo que asimismo recibí: Que Cristo murió por nuestros pecados, conforme a las Escrituras; y que fue sepultado, y que resucitó al tercer día, conforme a las Escrituras;",
    "intro": "Llegamos al día diez, que cierra la primera serie de esta escuela. Hemos estudiado la autoridad de la Escritura, su canon, sus lenguas, los principios para interpretarla, la exégesis de Juan uno y el panorama de Génesis. Hoy vamos a estudiar el acontecimiento sobre el que descansa todo lo demás: la resurrección corporal de Jesucristo. Y lo haremos desde dos ángulos a la vez. Por un lado, haremos una lectura atenta de primera de Corintios quince, el capítulo más extenso de la Biblia sobre la resurrección. Por otro lado, aprenderemos apologética, es decir, cómo presentar y defender con razones la verdad de la fe.",
    "cita": "1 Corintios 15:3-4"
  },
  {
    "n": 11,
    "slug": "dia-11",
    "titulo": "Enteramente preparado: la suficiencia de la Escritura",
    "versiculo": "La ley de Jehová es perfecta, que convierte el alma; El testimonio de Jehová es fiel, que hace sabio al sencillo.",
    "intro": "Comenzamos hoy la segunda serie de esta escuela. En los primeros diez días pusimos los cimientos: entramos por la puerta del sabio, que es el temor de Jehová; aprendimos que Dios ha hablado y que toda la Escritura es soplada por Dios; conocimos el canon y el camino que recorrió el texto hasta llegar a nuestras manos; abrimos las puertas del hebreo y del griego; aprendimos a interpretar con un método recto; leímos de cerca el prólogo de Juan, recorrimos Génesis desde lo alto y defendimos la resurrección con los testigos de primera de Corintios quince. Todo eso respondía a una pregunta: ¿ha hablado Dios, y dónde está su palabra? Hoy hacemos la pregunta siguiente, que es tan decisiva como la primera: si Dios ha hablado en la Escritura, ¿basta lo que ha dicho?",
    "cita": "Salmos 19:7"
  },
  {
    "n": 12,
    "slug": "dia-12",
    "titulo": "Lámpara es a mis pies: la claridad de la Escritura",
    "versiculo": "Lámpara es a mis pies tu palabra, Y lumbrera a mi camino.",
    "intro": "Ayer aprendimos que la Escritura es suficiente: que Dios ha dicho en ella todo lo necesario para su gloria y para nuestra salvación, fe y vida, y que no se le debe añadir ni quitar nada. Caminamos con el rey Josías, que halló el libro de la ley en la casa de Jehová y, al oírlo, rasgó sus vestidos. Pero esa historia deja una pregunta abierta. Josías entendió lo que oyó. Safán lo leyó y el rey lo comprendió lo bastante como para humillarse, hacer pacto y reformar la nación. ¿Es eso lo normal? ¿Puede un creyente común, sin estudios especiales, abrir la Biblia y entender lo que Dios dice? ¿O la Biblia es un libro oscuro, reservado a una casta de especialistas que deben interpretarlo por nosotros?",
    "cita": "Salmos 119:105"
  },
  {
    "n": 13,
    "slug": "dia-13",
    "titulo": "Comenzando desde Moisés: la Escritura se interpreta con la Escritura",
    "versiculo": "Y comenzando desde Moisés, y siguiendo por todos los profetas, les declaraba en todas las Escrituras lo que de él decían.",
    "intro": "En los dos días anteriores estudiamos dos propiedades de la palabra de Dios. Primero, su suficiencia: la Escritura basta, y no se le debe añadir ni quitar nada. Después, su claridad: la Escritura se puede entender, y lo necesario para la salvación está dicho de tal modo que los sencillos pueden comprenderlo con los medios ordinarios. Pero ayer reconocimos con el apóstol Pedro que hay en la Biblia algunas cosas difíciles de entender. Y dijimos que esas cosas difíciles se aclaran por medio de otro principio, el más importante de toda la interpretación bíblica. Hoy vamos a estudiarlo a fondo.",
    "cita": "Lucas 24:27"
  },
  {
    "n": 14,
    "slug": "dia-14",
    "titulo": "El maná de cada mañana: la lectura de toda la Biblia",
    "versiculo": "Nunca se apartará de tu boca este libro de la ley, sino que de día y de noche meditarás en él, para que guardes y hagas conforme a todo lo que en él está escrito; porque entonces harás prosperar tu camino, y todo te saldrá bien.",
    "intro": "Durante tres días hemos estudiado tres verdades sobre la palabra de Dios. La Escritura es suficiente: basta para la fe y para la vida. La Escritura es clara: se puede entender. Y la Escritura se interpreta con la Escritura: cada parte ilumina a las demás. Pero estas tres verdades tienen una consecuencia práctica que no podemos esquivar. Si la Biblia es suficiente, hay que conocerla entera. Si es clara, hay que leerla nosotros mismos. Y si cada parte ilumina a las demás, no podemos conocer bien ninguna parte sin conocer el conjunto. Por eso esta lección es, quizá, la más práctica de todo el módulo. Hoy no vamos a estudiar una doctrina nueva, sino a establecer una disciplina que sostendrá todo lo demás: la lectura de toda la Biblia, de principio a fin, con un plan y con perseverancia.",
    "cita": "Josué 1:8"
  },
  {
    "n": 15,
    "slug": "dia-15",
    "titulo": "Muchas veces y de muchas maneras: panorama del Antiguo Testamento",
    "versiculo": "Dios, habiendo hablado muchas veces y de muchas maneras en otro tiempo a los padres por los profetas, en estos postreros días nos ha hablado por el Hijo, a quien constituyó heredero de todo, y por quien asimismo hizo el universo;",
    "intro": "Ayer establecimos la disciplina de leer toda la Biblia, de principio a fin. Pero quien emprende un viaje largo necesita un mapa. El que abre el Antiguo Testamento sin un mapa se pierde fácilmente: treinta y nueve libros en nuestras Biblias, escritos a lo largo de unos mil años, con historias, leyes, genealogías, poemas, proverbios y profecías, que no siempre están ordenados según el tiempo en que ocurrieron. Muchos lectores llegan a los profetas sin saber cuándo vivió Isaías, ni qué rey gobernaba cuando predicó Jeremías, ni por qué Daniel estaba en Babilonia. Y así, cada libro queda como una isla aislada, sin relación con el resto.",
    "cita": "Hebreos 1:1-2"
  },
  {
    "n": 16,
    "slug": "dia-16",
    "titulo": "El cumplimiento del tiempo: panorama del Nuevo Testamento",
    "versiculo": "Pero cuando vino el cumplimiento del tiempo, Dios envió a su Hijo, nacido de mujer y nacido bajo la ley, para que redimiese a los que estaban bajo la ley, a fin de que recibiésemos la adopción de hijos.",
    "intro": "Ayer subimos a la montaña para mirar el Antiguo Testamento desde lo alto. Recorrimos siete épocas, desde la creación hasta el retorno del exilio, y terminamos con cuatrocientos años de espera y con la última promesa de Malaquías: he aquí, yo os envío el profeta Elías. Hoy vamos a mirar el otro valle, el del Nuevo Testamento. Es más pequeño en extensión: veintisiete libros, escritos en unos cincuenta o sesenta años, por menos de diez autores. Pero en él se cumple todo lo que el Antiguo Testamento esperaba.",
    "cita": "Gálatas 4:4-5"
  },
  {
    "n": 17,
    "slug": "dia-17",
    "titulo": "A los pies del Maestro: la vida devocional del estudioso",
    "versiculo": "Respondiendo Jesús, le dijo: Marta, Marta, afanada y turbada estás con muchas cosas. Pero sólo una cosa es necesaria; y María ha escogido la buena parte, la cual no le será quitada.",
    "intro": "Durante dieciséis días hemos estudiado mucho. Aprendimos qué es un experto bíblico, cómo se reveló y se inspiró la Escritura, cómo se formó el canon y cómo se transmitió el texto. Aprendimos las letras hebreas y griegas, las primeras reglas de la hermenéutica, la exégesis de Juan uno, el panorama del Génesis, la apologética de la resurrección, la suficiencia, la claridad y la interpretación de la Escritura por la Escritura, la lectura de toda la Biblia y el mapa de los dos testamentos. Es mucho conocimiento. Y precisamente por eso, hoy tenemos que detenernos.",
    "cita": "Lucas 10:41-42"
  },
  {
    "n": 18,
    "slug": "dia-18",
    "titulo": "Yo soy el que soy: la doctrina de Dios",
    "versiculo": "Mas alábese en esto el que se hubiere de alabar: en entenderme y conocerme, que yo soy Jehová, que hago misericordia, juicio y justicia en la tierra; porque estas cosas quiero, dice Jehová.",
    "intro": "Ayer terminamos de rodillas, a los pies del Maestro. Y es desde allí, de rodillas, desde donde hoy comenzamos la parte más alta de toda la teología: el estudio de Dios mismo. Los teólogos la llaman teología propia, porque teología significa literalmente estudio o palabra acerca de Dios, theós, ge dos mil trescientos dieciséis, y esta es la parte que trata de Dios en sí mismo, de su ser, sus nombres y sus perfecciones.",
    "cita": "Jeremías 9:24"
  },
  {
    "n": 19,
    "slug": "dia-19",
    "titulo": "Antes que Abraham fuese, yo soy: la persona de Cristo",
    "versiculo": "Porque hay un solo Dios, y un solo mediador entre Dios y los hombres, Jesucristo hombre,",
    "intro": "Ayer estudiamos la doctrina de Dios, y terminamos anunciando que hoy estudiaríamos a aquel que dijo: antes que Abraham fuese, yo soy. Hoy llegamos al centro de la fe cristiana. Todo lo que hemos aprendido en estas semanas converge aquí. Las Escrituras dan testimonio de él, como vimos en el camino de Emaús. El Antiguo Testamento lo espera, y el Nuevo lo manifiesta, lo proclama y lo explica, como vimos en los panoramas. Y el Dios que se reveló en la zarza como YO SOY se hizo carne y habitó entre nosotros.",
    "cita": "1 Timoteo 2:5"
  },
  {
    "n": 20,
    "slug": "dia-20",
    "titulo": "Que prediques la palabra: primeros pasos en la predicación, y repaso de los días once al veinte",
    "versiculo": "que prediques la palabra; que instes a tiempo y fuera de tiempo; redarguye, reprende, exhorta con toda paciencia y doctrina.",
    "intro": "Llegamos al día veinte. Hace diez días, en la lección once, comenzamos a estudiar la suficiencia de la Escritura en la historia del rey Josías y del libro hallado en el templo. Desde entonces hemos aprendido que la Escritura es suficiente, clara y se interpreta a sí misma; hemos establecido la disciplina de leerla entera; hemos dibujado el mapa de los dos testamentos; nos hemos sentado a los pies del Maestro; y hemos estudiado la doctrina de Dios y la persona de Cristo. Hoy vamos a hacer dos cosas. Primero, daremos los primeros pasos en la predicación, porque todo lo que se recibe de Dios debe compartirse. Y después repasaremos los diez días, para que nada de lo aprendido se pierda.",
    "cita": "2 Timoteo 4:2"
  },
  {
    "n": 21,
    "slug": "dia-21",
    "titulo": "He aquí el Cordero de Dios: la obra de Cristo",
    "versiculo": "El siguiente día vio Juan a Jesús que venía a él, y dijo: He aquí el Cordero de Dios, que quita el pecado del mundo.",
    "intro": "Hace dos días, en la lección diecinueve, estudiamos la persona de Cristo. Aprendimos que el que dijo antes que Abraham fuese, yo soy, es verdadero Dios y verdadero hombre, una sola persona en dos naturalezas, y que precisamente por eso es el único mediador entre Dios y los hombres. Ayer dimos los primeros pasos en la predicación y repasamos los días once al veinte. Hoy abrimos la última serie de diez lecciones del módulo uno, y la abrimos con la pregunta que nace inevitablemente de la lección diecinueve. Si ya sabemos quién es Cristo, debemos preguntar ahora qué hizo Cristo. La persona y la obra no se pueden separar: el Hijo eterno no se hizo carne para ser admirado desde lejos, sino para hacer algo que ningún otro podía hacer. Él mismo lo dijo con palabras sencillas: el Hijo del Hombre no vino para ser servido, sino para servir, y para dar su vida en rescate por muchos.",
    "cita": "Juan 1:29"
  },
  {
    "n": 22,
    "slug": "dia-22",
    "titulo": "El Espíritu de verdad: el Paráclito en la Escritura",
    "versiculo": "Pero cuando venga el Espíritu de verdad, él os guiará a toda la verdad; porque no hablará por su propia cuenta, sino que hablará todo lo que oyere, y os hará saber las cosas que habrán de venir.",
    "intro": "Ayer estuvimos junto al Jordán y al pie de la cruz. Oímos a Juan el Bautista decir: he aquí el Cordero de Dios, que quita el pecado del mundo; y oímos al Cordero decir: consumado es. Aprendimos que la obra de Cristo está terminada, que nada se le puede añadir, y que el que murió vive siempre para interceder. Pero esa enseñanza deja abierta una pregunta muy práctica, que cualquier alumno honesto se hace tarde o temprano. Si la obra se consumó hace casi dos mil años, en una colina fuera de Jerusalén, ¿cómo llega hasta mí? ¿Cómo pasa lo que Cristo hizo allá y entonces a mi corazón aquí y ahora? ¿Cómo es que un hombre muerto en sus pecados llega a mirar al Cordero, a creer, a clamar Abba, Padre, y a vivir como redimido?",
    "cita": "Juan 16:13"
  },
  {
    "n": 23,
    "slug": "dia-23",
    "titulo": "Polvo y aliento: el hombre y el pecado",
    "versiculo": "Crea en mí, oh Dios, un corazón limpio, Y renueva un espíritu recto dentro de mí.",
    "intro": "En los dos últimos días hemos estudiado lo que Dios ha hecho por nosotros. El Hijo, como Cordero de Dios, consumó la obra en la cruz; el Espíritu de verdad la aplica en el corazón, convenciendo de pecado, regenerando, sellando y dando testimonio. Pero toda esa enseñanza supone una pregunta que todavía no hemos respondido con detalle: ¿quién es ese hombre por el cual el Cordero murió? ¿Qué es eso que el Cordero quita? ¿Y por qué el Espíritu tiene que convencer de pecado a un mundo que, en general, no se siente tan culpable?",
    "cita": "Salmos 51:10"
  },
  {
    "n": 24,
    "slug": "dia-24",
    "titulo": "Justificados por la fe: la salvación que anuncia la Escritura",
    "versiculo": "Justificados, pues, por la fe, tenemos paz para con Dios por medio de nuestro Señor Jesucristo;",
    "intro": "Ayer bajamos con Jeremías a la casa del alfarero y con Pablo hasta el fondo del corazón humano. Aprendimos que el hombre es polvo con aliento de Dios, creado recto, y que buscó muchas perversiones; que el pecado es falla, deformación y rebelión; que entró por un hombre y alcanzó a todos; que su raíz está en un corazón engañoso; y que su paga es la muerte. Si la lección de ayer fue una sala de hospital, la de hoy es la sala de un tribunal. Porque la pregunta que deja el diagnóstico del pecado no es solo cómo puede ser sanado el hombre, sino algo más urgente: cómo puede un culpable quedar en pie delante del Juez santo.",
    "cita": "Romanos 5:1"
  },
  {
    "n": 25,
    "slug": "dia-25",
    "titulo": "Hebreo dos: las vocales, la raíz y una frase de Génesis",
    "versiculo": "Y creyó a Jehová, y le fue contado por justicia.",
    "intro": "Ayer estuvimos en un tribunal. Escuchamos la pregunta de Job, ¿cómo se justificará el hombre con Dios?, y la respuesta que recorre toda la Escritura: Dios justifica al impío que cree, gratuitamente, por su gracia, a causa de Cristo. Y en el centro de esa respuesta encontramos un versículo del Génesis que el Nuevo Testamento cita tres veces: en Romanos cuatro, en Gálatas tres y en Santiago dos. Escúchalo otra vez.",
    "cita": "Génesis 15:6"
  },
  {
    "n": 26,
    "slug": "dia-26",
    "titulo": "Griego dos: el artículo, el caso y una frase de Juan",
    "versiculo": "aguardando la esperanza bienaventurada y la manifestación gloriosa de nuestro gran Dios y Salvador Jesucristo,",
    "intro": "Ayer leímos en hebreo cinco palabras de Génesis: veheemín badonái, vayajshevéha lo tsedaqáh. Aprendimos las vocales por familias, la raíz y sus derivados, y las piezas pequeñas que el hebreo pega a sus palabras. Hoy haremos con el griego del Nuevo Testamento algo parecido. En el día seis conociste el alfabeto griego, oíste hablar de los casos, del artículo y del aspecto de los verbos, y leíste palabra por palabra Juan uno, uno. Allí aprendiste, entre otras cosas, por qué theós va sin artículo en la frase y el Verbo era Dios. Hoy vamos un paso más adentro.",
    "cita": "Tito 2:13"
  },
  {
    "n": 27,
    "slug": "dia-27",
    "titulo": "Yo seré vuestro Dios: los pactos de la Escritura",
    "versiculo": "De igual manera, después que hubo cenado, tomó la copa, diciendo: Esta copa es el nuevo pacto en mi sangre, que por vosotros se derrama.",
    "intro": "En los últimos tres días hemos estado junto a Abraham. En el día veinticuatro lo vimos salir de su tienda a contar las estrellas, y oímos que creyó a Jehová, y le fue contado por justicia. En el veinticinco leímos esa frase en hebreo, palabra por palabra. Y ayer, al leer Juan uno, veintinueve, volvimos a escuchar el eco de Moriah, donde Abraham dijo: Dios se proveerá de cordero. Pero si sigues leyendo Génesis quince después del versículo seis, descubres que aquella noche no terminó con la fe de Abraham. Terminó con un pacto. Escucha.",
    "cita": "Lucas 22:20"
  },
  {
    "n": 28,
    "slug": "dia-28",
    "titulo": "La iglesia: casa de Dios y columna de la verdad",
    "versiculo": "para que si tardo, sepas cómo debes conducirte en la casa de Dios, que es la iglesia del Dios viviente, columna y baluarte de la verdad.",
    "intro": "Ayer abrimos por dentro los pactos de Dios, y escuchamos la frase que los atraviesa todos: yo seré vuestro Dios, y vosotros seréis mi pueblo. Vimos que el propósito de los pactos es que Dios habite en medio de su pueblo, y terminamos en el aposento alto, con la copa del nuevo pacto en la sangre de Cristo. Hoy damos el paso siguiente. Si hay un nuevo pacto, hay un pueblo del nuevo pacto. Ese pueblo tiene un nombre en el Nuevo Testamento: la iglesia.",
    "cita": "1 Timoteo 3:15"
  },
  {
    "n": 29,
    "slug": "dia-29",
    "titulo": "Pedid, y se os dará: la oración del que estudia",
    "versiculo": "Y yo os digo: Pedid, y se os dará; buscad, y hallaréis; llamad, y se os abrirá.",
    "intro": "Ayer seguimos la historia de la iglesia de Éfeso, y vimos que la primera iglesia perseveraba en cuatro cosas: en la doctrina de los apóstoles, en la comunión unos con otros, en el partimiento del pan y en las oraciones. Hoy nos detenemos en la cuarta. Y lo hacemos para cumplir una promesa. En el día veintidós, cuando estudiamos al Espíritu de verdad, escuchamos unas palabras del Señor Jesús en el evangelio de Lucas, y te dije que las estudiaríamos de nuevo en la lección sobre la oración. Ha llegado el día.",
    "cita": "Lucas 11:9"
  },
  {
    "n": 30,
    "slug": "dia-30",
    "titulo": "Repaso del módulo uno: lo que hemos puesto por cimiento",
    "versiculo": "Todo aquel que viene a mí, y oye mis palabras y las hace, os indicaré a quién es semejante. Semejante es al hombre que al edificar una casa, cavó y ahondó y puso el fundamento sobre la roca; y cuando vino una inundación, el río dio con ímpetu contra aquella casa, pero no la pudo mover, porque estaba fundada sobre la roca.",
    "intro": "Hemos llegado al día treinta. Ayer estudiamos la oración del que estudia, y terminamos con tres verbos del Señor: pedid, buscad, llamad. Hoy cerramos el primer módulo de esta escuela. No vamos a abrir un tema nuevo. Vamos a mirar hacia atrás, al camino que hemos recorrido juntos durante treinta días, para ver qué hemos edificado, y para prepararte para el examen del módulo.",
    "cita": "Lucas 6:47-48"
  }
];

export function diaPorSlug(slug: string): DiaCurso | undefined {
  return DIAS.find((d) => d.slug === slug);
}

const textos = import.meta.glob<{ default: Bloque[] }>("./texto/dia-*.ts");

export async function textoDia(n: number): Promise<Bloque[]> {
  const key = `./texto/dia-${String(n).padStart(2, "0")}.ts`;
  const load = textos[key];
  if (!load) return [];
  return (await load()).default;
}
