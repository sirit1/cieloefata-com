export type Voz = { name: string; body: string };

const COMUN: Voz[] = [
  {
    name: "Matthew Henry",
    body: "Henry no se apresura al lema. Recorre el pasaje como quien camina un campo: contexto, palabras, doctrina, uso. La piedad no sustituye al texto; nace de oírlo entero. Si el capítulo pide temor, no lo cambia por consuelo. Si pide fe, no la cambia por esfuerzo.\n\nPor consiguiente su comentario es un mapa, no un púlpito segundo. Donde el párrafo afirma un indicativo de Dios, Henry no lo convierte en un consejo de mejora. Donde hay un mandato, no lo aplaza. El que lea a Henry para ahorrarse el capítulo ha invertido el oficio: el testigo sirve; el pasaje manda.",
  },
  {
    name: "Juan Calvino",
    body: "Calvino sirve al pasaje con claridad y con temor. Dios habla; el hombre no mejora el dictado. La Escritura se interpreta consigo misma. Donde el texto afirma la soberanía, no se suaviza. Donde afirma la carne del Hijo, no se espiritualiza. El comentario se sienta atrás.\n\nAhora bien, esa claridad no es sequedad. Es el temor de quien sabe que un solo recorte fabrica otro evangelio. Calvino no ofrece una técnica de lectura: ofrece un oído. Quien lo cite para ganar una polémica y no para arrodillarse ante el párrafo ya lo usó como aparato, no como testigo.",
  },
  {
    name: "Charles Spurgeon",
    body: "Spurgeon predica para que alguien se vuelva. El púlpito no es un aula de curiosos, sino el lugar donde Cristo se ofrece a pecadores. La doctrina que no llega al corazón todavía no se oyó. La emoción que no nace del texto es teatro.\n\nPor tanto no se le pide a Spurgeon que sustituya la exégesis. Se le pide que recuerde el fin: el pecador oye, se compunge y pregunta qué hacer. Si el estudio cierra sin ese corte, se ha hecho erudición. Si cierra solo con el corte y sin el párrafo, se ha hecho espectáculo. El pasaje manda los dos.",
  },
  {
    name: "John MacArthur",
    body: "MacArthur insiste en lo que el griego y el hebreo ya dijeron, sin convertir el léxico en un segundo evangelio. El señorío de Cristo no es un anexo opcional. El pasaje manda la aplicación; la aplicación no elige otro versículo más cómodo.\n\nEl número de Strong, en su mano, no es talismán, sino freno. Impide que se predique una palabra que el texto no conjuga. Quien lo imite solo en la dureza y no en la sumisión al párrafo habrá tomado el tono y dejado el oído.",
  },
];

const POR_SLUG: Record<string, Voz[]> = {
  "romanos-1": [
    {
      name: "Matthew Henry",
      body: "Henry oye en Romanos 1 el evangelio como poder, no como consejo. La vergüenza que Pablo rechaza no es un rubor de temperamento, sino la de recortar a Cristo para que Roma no se moleste. La justicia de Dios se revela; no se fabrica en el oyente. Habacuc entra en la carta y no sale como lema de superación.\n\nEl campo que Henry recorre incluye el 18, que muchos dejan fuera del cartel. La ira también se revela. Por consiguiente el que cita el 16 para valentía y silencia el 18 ha fabricado un evangelio sin juicio, y un poder sin cruz. Henry no permite ese recorte: el indicativo es salvación, y el horizonte es la impiedad del mundo que el evangelio confronta.",
    },
    {
      name: "Juan Calvino",
      body: "Calvino lee «poder de Dios para salvación» como obra de Dios, no como técnica del predicador. Al judío primeramente: la historia de Israel no se borra. Al griego también: no hay un segundo camino. La fe es el medio; la justicia es de Dios.\n\nAhora bien, esa δικαιοσύνη no es una ficción piadosa. Se revela ἐκ πίστεως εἰς πίστιν, por fe y para fe, porque el justo vivirá por la fe. Calvino no deja que Habacuc 2:4 se vuelva consigna de victoria interior. Es el umbral de la justificación que 3:21–26 pondrá sobre el propiciatorio. Quien convierta la fe en mérito ya no está leyendo a Pablo, sino su hoja de servicios.",
    },
    {
      name: "Charles Spurgeon",
      body: "Spurgeon no se avergonzaría de este versículo en ningún púlpito. El evangelio que se disculpa ya no es evangelio. Quien se sonroja de la cruz ha elegido otro señor, aunque recuerde el vocabulario.\n\nEl púlpito de Roma —y el de cualquier siglo que tema al imperio— pide un anuncio más pulido. Spurgeon respondería que el poder está precisamente en lo que ofende: un Cristo crucificado, declarado Hijo de Dios con poder por la resurrección. Si el predicador recorta para no perder oyentes, ya los perdió. El que cree, se salva. El que se avergüenza, todavía no ha oído.",
    },
    {
      name: "John MacArthur",
      body: "MacArthur detiene la lectura en δύναμις (G1411) y δικαιοσύνη (G1343): poder y justicia, no consigna. El «todo aquel que cree» no diluye el señorío. El que cree, se vuelve. Romanos 1:18 espera detrás: la ira también se revela.\n\nPor tanto el léxico no es un segundo evangelio. Impide dos falsificaciones: el consejo de vida mejor que usurpa el poder, y la fe sin arrepentimiento que usurpa el señorío. Status quaestionis: ¿es este anuncio un lema de valentía, o el poder de Dios para salvación? Si se cita el 16 sin el 18, se ha fabricado un evangelio sin ira, y por tanto sin cruz.",
    },
  ],
  "marcos-1": [
    {
      name: "Matthew Henry",
      body: "Henry oye el mandato sin consuelo previo. El reino se acercó: por eso hay que volverse y creer. Juan en la cárcel no es un detalle piadoso; es el precursor que sale para que el Hijo hable.\n\nGalilea, no Jerusalén. El anuncio llega donde la gente trabaja. Henry no deja que el lector se lleve solo un cambio de mentalidad. Hay dos verbos, y no hay un tercero. El que añade «más tarde» todavía no ha caminado este campo.",
    },
    {
      name: "Juan Calvino",
      body: "Calvino no deja que μετανοεῖτε se vuelva un momento de lágrimas. Es presente: una vuelta que se sostiene. La fe no es opinar que Dios existe; es fiarse del evangelio que se predica.\n\nEl καιρός se ha cumplido. El perfecto cierra la puerta al aplazamiento. Calvino oye el decreto del Rey, no una invitación blanda. Quien se vuelve sin creer no ha oído a Marcos; quien cree sin volverse ha fabricado un asentimiento.",
    },
    {
      name: "Charles Spurgeon",
      body: "Spurgeon predicaría este texto a quien todavía espera «más tarde». El tercer verbo no está. El reino no espera a que el oyente termine sus asuntos.\n\nEl púlpito que abre con un consuelo para ganar oído ya ha desobedecido el orden de Marcos. El Señor no pregunta cómo te sientes. Anuncia que el tiempo se cumplió y pide dos verbos. El que los oye, se vuelve. El que los aplaza, sigue de espaldas con vocabulario piadoso.",
    },
    {
      name: "John MacArthur",
      body: "MacArthur une arrepentimiento y fe como el Señor los unió. No hay un Cristo que se recibe como Salvador y se deja para después como Señor. Marcos no ofrece esa división.\n\nμετανοεῖτε y πιστεύετε son presentes imperativos. El señorío no es un anexo. El que recorte uno de los dos ha recortado el primer anuncio del evangelio según Marcos, y ha fabricado otro reino.",
    },
  ],
  "juan-3": [
    {
      name: "Matthew Henry",
      body: "Henry ve a Nicodemo llegar de noche con oficio y sin vida. El nacer ἄνωθεν no es una mejora del maestro, sino el umbral del reino. El que enseña y no ha nacido sigue muerto, con vocabulario santo.\n\nEl diálogo no es un café teológico. Jesús no mejora el currículo: pide un nacimiento que el hombre no se da. Henry recorre hasta 3:21 y no deja el «de lo alto» como lema de enero.",
    },
    {
      name: "Juan Calvino",
      body: "Calvino guarda los dos sentidos de ἄνωθεν: de nuevo y de lo alto. El Espíritu sopla donde quiere. Nadie programa el nacimiento. El agua y el Espíritu no se reducen a un rito que el hombre se administra.\n\nNicodemo oye «nacer» y pregunta por el vientre. Jesús oye a Ezequiel 36 y habla de agua y Espíritu. El malentendido no es torpeza, sino la carne intentando administrar lo que solo Dios da.",
    },
    {
      name: "Charles Spurgeon",
      body: "Spurgeon insistiría: es menester nacer de nuevo. El más culto de Jerusalén oye la misma sentencia que el más ignorante. El púlpito no negocia el umbral.\n\nHay un oficio que sabe y aún no ha nacido. Spurgeon no consuela a ese oficio. Lo pone de noche, delante del que conoce lo que hay en el hombre, y deja que el viento sople.",
    },
    {
      name: "John MacArthur",
      body: "MacArthur no deja que «nacer de nuevo» se vuelva metáfora de un cambio de hábitos. Juan 3:5–8 es regeneración. El que no naciere, no ve.\n\nγεννηθῇ ἐξ ὕδατος καὶ πνεύματος: nacimiento que el hombre no se da. El léxico aquí no adorna: cierra la puerta a la mejora del yo. El reino no se ve por erudición.",
    },
  ],
  "hechos-2": [
    {
      name: "Matthew Henry",
      body: "Henry oye la pregunta que nace de un corazón herido: ¿qué haremos? Pedro no suaviza. El mismo Jesús a quien crucificasteis es Señor y Cristo. El Espíritu no llega para adorno: convence.\n\nLa Iglesia no nace de un taller. Nace de un corte. Henry recorre el sermón hasta el agua: arrepentíos, bautícese cada uno, y recibiréis el don. Quien oye y no pregunta aún no ha oído; ha asistido.",
    },
    {
      name: "Juan Calvino",
      body: "Calvino lee Pentecostés como cumplimiento, no como espectáculo. Joel entra. El don no desplaza a la Escritura: la abre. El arrepentimiento y el bautismo no se eligen a la carta.\n\nEl Espíritu convence de pecado, de justicia y de juicio. Calvino no deja que las lenguas se vuelvan un clima. El que recibe el don, se vuelve. El que busca el don sin el corte ha invertido a Pedro.",
    },
    {
      name: "Charles Spurgeon",
      body: "Spurgeon amaría esta pregunta. No es curiosidad. Es un pecador que ya no puede quedarse donde estaba. El evangelio responde con un mandato y una promesa.\n\nEl púlpito que produce emoción y no produce «qué haremos» no ha predicado Hechos 2. Pedro nombra el crimen, nombra al Señor y abre el agua. Spurgeon no suavizaría ninguno de los tres.",
    },
    {
      name: "John MacArthur",
      body: "MacArthur no separa el Señorío proclamado en 2:36 de la respuesta de 2:38. El que se compunge, se vuelve. El que se vuelve, es añadido.\n\nμετανοήσατε no es un anexo del don. Es el primer verbo. El léxico y el orden del párrafo impiden un Espíritu que se reciba sin arrepentimiento. Pedro no miente.",
    },
  ],
  "juan-1": [
    {
      name: "Matthew Henry",
      body: "Henry no deja que el prólogo se vuelva adorno de diciembre. Eternidad, creación, rechazo, tabernáculo, gloria. El Unigénito declara al Padre. Quien recorta Juan 1:14 ha dejado de leer.\n\n«En el principio» evoca Génesis 1, y no por casualidad. El Verbo no empieza en Belén. Los suyos no le recibieron: la cruz ya está en la apertura.",
    },
    {
      name: "Juan Calvino",
      body: "Calvino afirma sin temblor: el Verbo era Dios. No un dios segundo. La carne no disminuye la deidad; la deidad no anula la carne. El que niega uno de los dos no tiene al Cristo de este evangelio.\n\nθεὸς ἦν ὁ λόγος. La gramática ya está. Calvino no ofrece un Cristo útil. Ofrece al que era con Dios y era Dios, y fue hecho carne.",
    },
    {
      name: "Charles Spurgeon",
      body: "Spurgeon se detendría en «habitó entre nosotros». El tabernáculo no es una idea. Dios se acercó en carne, y los suyos no le recibieron. El que le recibe, nace de Dios.\n\nHay un pueblo que tenía la ley y no reconoció al que la cumplía. Spurgeon predicaría esa negativa sin disculpa, y la promesa sin rebaja: a los que le recibieron, les dio potestad de ser hechos hijos.",
    },
    {
      name: "John MacArthur",
      body: "MacArthur lee 1:1 con la gramática que ya está: θεὸς ἦν ὁ λόγος. El fin del libro está aquí: para que creáis. El prólogo no es poesía suelta; es tesis.\n\nEl léxico de σκηνόω —tabernacular— impide un Verbo que no toque historia. El que espiritualice la carne ha recortado el evangelio que Juan escribió para que creáis que Jesús es el Cristo.",
    },
  ],
  "isaias-53": [
    {
      name: "Matthew Henry",
      body: "Henry recorre al Siervo sin convertirlo en un poema de resiliencia. Despreciado, herido, molido. Jehová cargó en él el pecado de todos nosotros. El consuelo nace de la herida ajena, no de la nuestra bien contada.\n\nEl «todos» no admite excepciones piadosas. Quien recablee este canto como lección moral todavía no se ha puesto bajo la llaga. Henry no deja ese recorte.",
    },
    {
      name: "Juan Calvino",
      body: "Calvino oye la sustitución sin disculpa. El justo por los injustos. El Siervo no inspira: carga. La voluntad de Jehová se cumple en esa muerte, no a pesar de ella.\n\nנָשָׂא y סָבַל: llevar y soportar. אָשָׁם: ofrenda por la culpa. La sustitución no es un invento latino; está en el hebreo. Calvino no ofrece un amor que no lleve rebelión.",
    },
    {
      name: "Charles Spurgeon",
      body: "Spurgeon predicaría este capítulo a quien todavía cree que puede pagar. Las heridas son suyas; la paz, si hay paz, es por ellas. No hay un tercer camino entre el Siervo y el juicio.\n\nEl púlpito que convierte la cruz en ejemplo de entrega sin cargo ha cambiado de Siervo. Spurgeon no negociaría esa sangre.",
    },
    {
      name: "John MacArthur",
      body: "MacArthur ata Isaías 53 a 1 Pedro 2:24 y a Hechos 8. El eunuco no leyó un recorte: leyó hasta que Felipe le abrió a Cristo. El rollo de Qumrán confirma que el Siervo estaba escrito antes de la cruz; no lo inventó la Iglesia.\n\nEl léxico hebreo sirve al cargo. Quien llame «herida» a lo que el texto llama rebelión ha cambiado el vocabulario para no arrodillarse.",
    },
  ],
  "romanos-3": [
    {
      name: "Matthew Henry",
      body: "Henry oye que toda boca se cierra. Luego se manifiesta la justicia de Dios, sin la ley, por la fe en Jesucristo. El ἱλαστήριον no es un adorno cultual, sino sangre.\n\nNadie llega a 3:21 sin haber oído que no hay justo ni aun uno. El que mezcla su hoja de servicios con este párrafo todavía tiene la boca abierta. Henry recorre el cierre de la boca hasta el propiciatorio.",
    },
    {
      name: "Juan Calvino",
      body: "Calvino no deja que la justificación se vuelva una ficción piadosa. Dios es justo y el que justifica. La fe no merece; recibe. La ley calló para que la gracia hable, no para que el pecado reine.\n\nEl «aparte de la ley» no despide a Moisés: lo pone a testificar. Calvino oye la analogía de la Escritura, no un divorcio. Habacuc 2:4 ya estaba en 1:17; llega aquí a su claridad.",
    },
    {
      name: "Charles Spurgeon",
      body: "Spurgeon anunciaría aquí el milagro: el impío justificado. No el que ya mejoró. El que cree. El púlpito que niega esto niega a Pablo.\n\nHay un oficio que quiere conservar la jactancia. El 27–31 pregunta dónde está. Spurgeon no le devolvería el primer asiento. El que es justificado, cierra la boca y confiesa al que es justo y justifica.",
    },
    {
      name: "John MacArthur",
      body: "MacArthur detiene la palabra ἱλαστήριον (G2435): propiciación, el lugar de la sangre. Romanos 3:26 impide un evangelio que perdone sin justicia. La cruz no es un gesto, sino juicio llevado.\n\nδικαιοσύνη θεοῦ, sin la ley como escalera, en la sangre de Cristo. El léxico cierra dos puertas: el mérito y el perdón barato. Dios es justo cuando justifica al que es de la fe de Jesús.",
    },
  ],
  "genesis-3": [
    {
      name: "Matthew Henry",
      body: "Henry oye que la primera herida no es la mordedura, sino la pregunta. La serpiente pone en boca de Dios lo que Dios no dijo. La mujer cede el texto. El hombre calla. El juicio sigue el orden de la transgresión, y la simiente ya está anunciada antes de que se cosean las hojas.\n\nEl campo de Génesis 3 no es un taller de autoestima. Es pacto quebrantado, glosa, silencio, acusación y cubierta. Henry no deja que el lector se lleve solo la fruta.",
    },
    {
      name: "Juan Calvino",
      body: "Calvino no deja Génesis 3 en fábula. Institución II.i: Adán es cabeza; la caída es histórica; la corrupción no es un rasguño de la voluntad. La promesa de 3:15 es evangelio, no adorno etiológico. Quien disuelva a Adán disuelve a Cristo. Ireneo, Adversus Haereses III.23, ya había oído la recapitulatio en la misma simiente. El párrafo manda. Los padres sirven.\n\nEl oficio se invierte: el animal habla y el hombre calla. Calvino oye en esa inversión el peccatum originis, no un mito de origen. Mateo 19 toma Génesis 2 como Palabra del Creador. Oseas 6:7 nombra a Adán como transgresor del pacto.",
    },
    {
      name: "Charles Spurgeon",
      body: "Spurgeon predicaría aquí contra el diablo glosador. El enemigo sigue preguntando «conque Dios os ha dicho». El púlpito que suaviza el mandato ya respondió como Eva.\n\nHay una partícula —אַף— que pone el don entre comillas. Spurgeon no permitiría esa glosa en el púlpito. El que añade «ni le tocaréis» y suaviza la muerte ya está negociando. Luego la contradicción se instala, nítida: No moriréis.",
    },
    {
      name: "John MacArthur",
      body: "MacArthur ata Génesis 3 a Romanos 5. El pecado entra por un hombre; la justificación, por Otro. La analogía no es capricho paulino, sino el texto leyéndose a sí mismo.\n\nEl hebreo de 3:1 no legislado por Wellhausen. El נָחָשׁ es criatura, no símbolo suelto. Si la serpiente dice verdad, Dios miente. Si Adán no cayó, Cristo no es último Adán. El criticismo que disuelve Génesis 3 disuelve el evangelio.",
    },
  ],
  "salmo-22": [
    {
      name: "Matthew Henry",
      body: "Henry recorre el lamento hasta la asamblea. El abandonado anuncia el Nombre. El salmo no se queda en el versículo 1: llega al 22 y al 27. Los confines de la tierra se acordarán.\n\nQuien se lleve solo el clamor como amuleto de abandono aún no ha oído el 24: no me has despreciado ni abominado. Henry no deja el salmo a medias.",
    },
    {
      name: "Juan Calvino",
      body: "Calvino oye a David y, con el canon, al Hijo. No hurta el clamor a Cristo ni lo arranca de David. Mateo 27 no cita un adorno. Cita este salmo.\n\nEl género es lamento real. El paralelismo hebreo es la gramática. Calvino no convierte cada «yo» en autobiografía del lector. El justo perseguido es David primero; el Hijo de David, con autoridad canónica.",
    },
    {
      name: "Charles Spurgeon",
      body: "Spurgeon se arrodillaría en el «¿por qué me has desamparado?» sin convertirlo en terapia del ánimo. El justo rodeado no es el lector disfrazado, sino el que lleva el pecado ajeno.\n\nEl púlpito que usa este clamor para consolar un ego herido hurta el salmo. Spurgeon lo pondría en la cruz, donde Mateo lo puso, y luego en la asamblea, donde el abandonado promete anunciar el Nombre.",
    },
    {
      name: "John MacArthur",
      body: "MacArthur sirve la variante de las manos y los pies sin bautizar la duda. El aparato es siervo. Mateo 27 manda. El crítico que habla de relectura cristiana miente contra el evangelista.\n\nעֲזַבְתָּנִי: me has desamparado. El clamor va a Dios, no al vacío. Juan 19 sortea las vestiduras. Hebreos 2:12 pone al Hijo en la asamblea. El léxico y el canon coinciden.",
    },
  ],
  "marcos-7": [
    {
      name: "Matthew Henry",
      body: "Henry oye el itinerario gentil y el mandato de callar. La muchedumbre trae al sordo y no soporta el silencio. Se puede decir «bien lo ha hecho todo» y desobedecer al que lo hizo.\n\nDecápolis: oído gentil. El milagro no es viñeta de Galilea judía. Henry recorre el cuerpo —dedos, saliva, gemido— y no lo evapora en metáfora de inclusión.",
    },
    {
      name: "Juan Calvino",
      body: "Calvino oye el poder y oye la carne. El gemido, alzando los ojos al cielo, es vehemencia de amor. Y, sin embargo, no deja el milagro en la ternura: tiene poder supremo quien simplemente ordena que la lengua y los oídos se abran. Marcos insertó aquella palabra caldea para testificar el poder divino de Cristo.\n\nVere Deus, vere homo: toca porque es hombre y ordena porque es Dios. El sordo no es el agente. El agente queda fuera de la morfología. Calvino no deja que Éfata se vuelva técnica de escucha interior.",
    },
    {
      name: "Charles Spurgeon",
      body: "Spurgeon no convertiría Éfata en lema de casa. El sordo no se abre: es abierto. El púlpito que grita «ábrete tú» ha invertido el pasivo. El milagro es decreto, no técnica.\n\nHay un pueblo que recita Isaías y desobedece a Jesús en la misma respiración. Spurgeon predicaría el versículo 36, que estropea el final feliz: les mandó que no lo dijesen, y cuanto más les mandaba, tanto más lo divulgaban.",
    },
    {
      name: "John MacArthur",
      body: "MacArthur detiene ἐφφαθά (G2188) y διανοίχθητι (G1272): hapax, aoristo pasivo, el mismo verbo de Lucas 24:45. El léxico sirve al párrafo. Isaías 35 está debajo. Quien evapore el cuerpo evapora el oráculo.\n\nEl arameo אתפתח es reflexivo-pasivo: no «abre tú», sino «sé abierto». Marcos traduce de inmediato. El que convierta Éfata en marca y deje al sordo cerrado ha tomado el nombre del milagro en vano.",
    },
  ],
  "filipenses-2": [
    {
      name: "Matthew Henry",
      body: "Henry oye el himno dentro de la grieta de Filipos. El credo entra en la ética. Evodia y Síntique no necesitan una conferencia sobre kénosis: necesitan el sentir de quien se despojó.\n\nEl campo no es un seminario. Es una colonia romana con una iglesia amada y agrietada. Henry no deja que se cante la exaltación y se evite la forma de siervo.",
    },
    {
      name: "Juan Calvino",
      body: "Calvino no deja que ἐκένωσεν signifique que el Hijo dejó de ser quien es. Tomó forma de siervo. La exaltación es del Padre. Toda rodilla es escatología, no eslogan de marca.\n\nμορφὴ θεοῦ y μορφὴ δούλου. El que era igual a Dios no estimó el ser igual como cosa a que aferrarse. Calvino oye la kénosis como asunción, no como merma de deidad.",
    },
    {
      name: "Charles Spurgeon",
      body: "Spurgeon predicaría el Nombre sobre todo nombre sin recortar la cruz. El que no baja no tiene este himno. El púlpito que aplaude la kénosis y retiene el primer asiento aún no oyó a Pablo.\n\nHay un sentir que se pide. No es un adorno litúrgico. Es la forma del que se despojó hasta la muerte, y muerte de cruz. Spurgeon no cantaría la exaltación sin esa bajada.",
    },
    {
      name: "John MacArthur",
      body: "MacArthur sirve μορφὴ θεοῦ y μορφὴ δούλου. El ἁρπαγμόν no se resuelve con un grito piadoso. El indicativo produce el imperativo: haya este sentir, porque Él se despojó.\n\nG3444, G2758, G1401. El léxico impide dos errores: que el Hijo dejara de ser Dios, y que la iglesia cante el himno sin bajar. Filipenses 2 no es un tratado de cristología para el archivo, sino medida de la mente de Filipos.",
    },
  ],
  "apocalipsis-5": [
    {
      name: "Matthew Henry",
      body: "Henry oye el llanto y el «no llores». Se anuncia un León y se ve un Cordero. El observador no resuelve la paradoja antes de tiempo: el que vence es el que fue degollado.\n\nEl campo es el cielo, no el periódico. Henry no deja que el lector ponga el cetro en el César. El cántico nuevo lo pone en la sangre.",
    },
    {
      name: "Juan Calvino",
      body: "Calvino oye en el Cordero degollado y en pie la simultaneidad de la cruz y de la resurrección. El que fue inmolado está de pie. Recibe la adoración que ninguna criatura puede recibir.\n\nEl cielo no comete idolatría. Si el Cordero recibe lo que se le da al que está en el trono, el Cordero es Dios. Calvino no ofrece un semidiós útil.",
    },
    {
      name: "Charles Spurgeon",
      body: "Spurgeon anunciaría aquí que la historia no la abre el César. El púlpito del pánico profético pone el cetro en el periódico. El cántico nuevo lo pone en la sangre.\n\n«Digno eres» no es un coro de ambiente. Es el decreto de quién abre el libro. Spurgeon predicaría el ἄξιος a una iglesia perseguida, no a un público de novelas del fin.",
    },
    {
      name: "John MacArthur",
      body: "MacArthur ata el ἄξιος a la sangre. El derecho de abrir el libro fue conferido en la cruz, no aplazado a un milenio de novela. El Cordero es Dios: el cielo no comete idolatría.\n\nEl léxico de la visión —León, raíz de David, Cordero como inmolado— no se recorta. Quien se quede solo con el León sin la sangre ha oído al anciano y no ha mirado.",
    },
  ],
  "2-pedro-1": [
    {
      name: "Matthew Henry",
      body: "Henry oye que se añade a la fe, a costa propia. No es un cartel de virtudes. Es lo que el capítulo 2 exigirá cuando desenmascare a quienes prometen libertad siendo esclavos. El que no añade no es humilde, sino ciego, y se olvidó de la purificación de sus antiguos pecados.\n\nDios dio todo lo que concierne a la vida y a la piedad. Ahora se suministra. Henry no deja que la ociosidad se llame gracia.",
    },
    {
      name: "Juan Calvino",
      body: "Calvino no discute a Pablo cuando Pedro pide diligencia. La fe que no se ejercita se vuelve estéril. La elección se confirma en el camino, no en el eslogan.\n\nHay un descanso en Cristo, y hay un suministro. El primero no anula al segundo. Calvino oye la analogía de la fe: Santiago 2 y Judas 3 leen el mismo peligro.",
    },
    {
      name: "Charles Spurgeon",
      body: "Spurgeon predicaría contra la fe que no se mueve. El «ya creí, ya está» no sobrevive a este párrafo. El que no añade se vuelve estéril, aunque conserve el vocabulario de la justificación.\n\nEl púlpito que llama gracia a la ociosidad ha tomado el nombre de Pedro en vano. Spurgeon pediría fruto, no un cartel.",
    },
    {
      name: "John MacArthur",
      body: "MacArthur sirve ἐπιχορηγήσατε: suministrar, costear. El léxico no es un taller de hábitos. Es lo que evita el abismo del capítulo 2.\n\nEste tomo, en la colección, se llama La fe no basta, y no discute a Pablo: desnuda al que cita a Pablo para no añadir. El señorío no es anexo.",
    },
  ],
  "2-corintios-5": [
    {
      name: "Matthew Henry",
      body: "Henry oye que nueva criatura no es un yo recableado. Es reconciliación. Dios estaba en Cristo reconciliando al mundo a sí, no imputándole sus pecados. Nadie llega al 17 sin el 21.\n\nEl que usa el lema para sentirse otro sin haberse reconciliado ha tomado la frase y ha dejado el ministerio. Henry recorre hasta el embajador.",
    },
    {
      name: "Juan Calvino",
      body: "Calvino no deja que la novedad se vuelva un tatuaje de conversión. El que fue hecho pecado es el indicativo. La justicia de Dios en él es el fruto. La imputación no es una ficción, sino el acto de no contar los pecados porque otro los llevó.\n\nEl ministerio de la reconciliación no es un anexo del yo nuevo. Es su origen. Calvino sienta el comentario atrás de 5:21.",
    },
    {
      name: "Charles Spurgeon",
      body: "Spurgeon anunciaría aquí al que no conoció pecado, hecho pecado por nosotros. El púlpito que predica novedad sin ese cargo predica un lema.\n\nHay un embajador que no tiene nada que decir si el 21 no está. Spurgeon le devolvería el mensaje: reconciliaos con Dios.",
    },
    {
      name: "John MacArthur",
      body: "MacArthur ata καινὴ κτίσις a καταλλαγή. Nueva criatura y reconciliación no se divorcian. El léxico impide un yo recableado que sigue siendo enemigo.\n\nSi «nueva criatura» te deja igual de enemigo y solo más inspirado, no leíste el versículo 21. Status quaestionis: ¿recableado del yo, o reconciliación por el que fue hecho pecado?",
    },
  ],
  "santiago-1": [
    {
      name: "Matthew Henry",
      body: "Henry oye el espejo. El que oye y no hace se parece al que mira su rostro natural y se va, y luego olvida. El altar no es el sentimiento de haber oído, ni la liturgia de un estudio bien anotado.\n\nEs el hombre que permanece en la ley perfecta, la de la libertad, y es hacedor de la obra. Henry no deja el aula en el oído.",
    },
    {
      name: "Juan Calvino",
      body: "Calvino no discute a Pablo cuando Santiago manda hacer. El autoengaño es liturgia de los que solo escuchan. La libertad no es huir de la ley, sino permanecer en ella.\n\nMateo 7:24–27 está debajo: el que oye y no hace es casa sobre arena. Calvino oye la analogía. El Señor que dijo Éfata no deja el oído abierto para el archivo.",
    },
    {
      name: "Charles Spurgeon",
      body: "Spurgeon predicaría contra el oidor profesional. Hay un pueblo que colecciona sermones y olvida el rostro. El púlpito que no pide un acto ha dejado a Santiago fuera.\n\nUn solo paso. Un testigo. No una lista. Spurgeon no permitiría un «hoy muero a…» que el pasaje no conjuga. El verbo aquí es hacer.",
    },
    {
      name: "John MacArthur",
      body: "MacArthur sirve ποιηταὶ λόγου: hacedores de la palabra. El léxico no es un anexo de la fe. Es su verificación. C.R.I.S.O.L.™, en El Altar del Espejo, guarda este eslabón.\n\nEl que mira y se va olvida. El que permanece, es bienaventurado en lo que hace. El señorío se verifica en el acto, no en el vocabulario de la justificación usado para no obedecer.",
    },
  ],
  "romanos-12": [
    {
      name: "Matthew Henry",
      body: "Henry oye el «así que». No es un giro moralista, sino consecuencia de once capítulos de misericordia. Nadie presenta el cuerpo si aún discute la justificación como si fuera un taller.\n\nLas misericordias preceden al mandato. Quien convierte este párrafo en un manual de hábitos ha cortado el «por las misericordias». Henry recorre el cuerpo como altar.",
    },
    {
      name: "Juan Calvino",
      body: "Calvino lee λογικὴν λατρείαν: culto razonable, de la Palabra. El cuerpo es el altar. No os ensambléis al esquema de este siglo. Sed transformados: pasiva, Dios obra; presente, se sostiene.\n\nEl sacrificio vivo es posible porque el Hijo se ofreció. Calvino no deja un culto de emoción sin cuerpo y sin un no al siglo.",
    },
    {
      name: "Charles Spurgeon",
      body: "Spurgeon pediría cuerpos, no climas. El siglo tiene molde. Cristo tiene forma de siervo. El púlpito que predica renovación de la mente y deja el cuerpo al siglo no ha leído Romanos 12.\n\nHay un no y un sí. Spurgeon no suavizaría el no. El que se conforma, se ensambla. El que se presenta, es culto.",
    },
    {
      name: "John MacArthur",
      body: "MacArthur sirve συσχηματίζεσθε y μεταμορφοῦσθε (G4964, G3339). No os ensambléis; sed transformados. El léxico impide un recableado interior de moda que deja el cuerpo al siglo.\n\nStatus quaestionis: ¿recableado interior, o presentación del cuerpo por las misericordias? Si el «así que» se corta, el mandato nace de la voluntad, no de la misericordia, y se ha vuelto a la ley.",
    },
  ],
  "juan-14": [
    {
      name: "Matthew Henry",
      body: "Henry oye a Tomás y oye a una Persona, no un mapa. Jesús no señala un camino. Él es el camino, la verdad y la vida. «Nadie viene» no es un tono, sino la gramática.\n\nLa noche de la traición. Judas salió. El Padre tiene casa. Henry no deja que se suavice οὐδεὶς para no ofender. Quien suaviza ya eligió ofender al que habla.",
    },
    {
      name: "Juan Calvino",
      body: "Calvino afirma la exclusividad sin temblor. El Padre se alcanza por el Hijo. El Paráclito no abre un segundo camino: toma de lo que es de Cristo y lo hace saber.\n\nἐγώ εἰμι. Artículos: el camino, la verdad, la vida. No un recurso entre otros. Calvino no ofrece un Cristo útil entre muchos senderos.",
    },
    {
      name: "Charles Spurgeon",
      body: "Spurgeon predicaría Juan 14:6 a quien busca un mapa. Tomás recibió una persona. El que todavía dibuja sendas paralelas no ha oído al que habla en el aposento.\n\nEl púlpito inclusivo pierde al Padre por no ofender. Spurgeon ofendería con mansedumbre, y no recortaría οὐδεὶς.",
    },
    {
      name: "John MacArthur",
      body: "MacArthur detiene οὐδεὶς ἔρχεται πρὸς τὸν πατέρα εἰ μὴ δι’ ἐμοῦ. Nadie viene. El léxico no admite un tercer camino. Hebreos 10:19–20 llama a su carne el velo. Hechos 4:12 niega otro nombre.\n\n«Muchos caminos» no sobrevive a Juan 14:6. Distingo: hay gentileza, y hay verdad; la primera no autoriza a recortar el adverbio. El señorío está en la exclusividad del Hijo.",
    },
  ],
  "salmo-23": [
    {
      name: "Matthew Henry",
      body: "Henry oye el valle y oye al Pastor dentro, no al valle fuera. El «tú» llega en la sombra: de tercera persona —Jehová es mi pastor— a segunda —tú estás conmigo—. La mesa es en presencia de enemigos.\n\nQuien use este salmo para negar el valle lo invierte. Henry no deja el pasto sin la vara, ni el descanso sin la sombra.",
    },
    {
      name: "Juan Calvino",
      body: "Calvino lee יְהוָה רֹעִי: el Nombre pastorea, no un arquetipo. La falta se mide por Él, no por el siglo. El valle está. El Pastor también.\n\nJuan 10, Hebreos 13:20, Apocalipsis 7:17: el Buen Pastor, el gran Pastor, el Cordero que pastorea. Calvino no deja el Salmo 23 en mindfulness hebreo.",
    },
    {
      name: "Charles Spurgeon",
      body: "Spurgeon predicaría este salmo en el valle, no en el funeral como postal. El bien y el hesed persiguen; no se coleccionan como frases.\n\nEl púlpito que reza para que el valle se vaya aún no ha llegado al «tú». El que ha llegado, no niega la sombra: la atraviesa.",
    },
    {
      name: "John MacArthur",
      body: "MacArthur sirve גֵּיא צַלְמָוֶת: valle de sombra profunda. El léxico no evapora el valle. שֵׁבֶט y מִשְׁעֶנֶת: vara y cayado. Disciplina y sostén, no solo caricia.\n\nStatus quaestionis: ¿postal de consuelo, o pastoreo del Nombre en la sombra? Si el valle se medita hasta desaparecer, el «tú estás conmigo» sobra, y Juan 10 da la vida por un paisaje.",
    },
  ],
};

export function vocesDe(slug: string): Voz[] {
  return POR_SLUG[slug] ?? COMUN;
}
