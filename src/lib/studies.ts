import { ESTUDIOS_DRIVE, estudioTienePack } from "@/lib/catalogo";

export type Study = {
  slug: string;
  kicker: string;
  ref: string;
  title: string;
  passage: string;
  voz?: string;
  ver: string;
  entorno: string;
  revelacion: string;
  doctrina: string;
  argumento: string;
  decision: string;
  conclusion: string;
};

export const studies: Study[] = [
{
		slug: "2-pedro-1",
		kicker: "Permanecer",
		ref: "2 Pedro 1:1–11",
		title: "Añadid a vuestra fe",
		passage: "Simón Pedro, siervo y apóstol de Jesucristo, á los que habéis alcanzado fe igualmente preciosa con nosotros en la justicia de nuestro Dios y Salvador Jesucristo: gracia y paz os sea multiplicada en el conocimiento de Dios, y de nuestro Señor Jesús. Como todas las cosas que pertenecen á la vida y á la piedad nos sean dadas de su divina potencia, por el conocimiento de aquel que nos ha llamado por su gloria y virtud: por las cuales nos son dadas preciosas y grandísimas promesas, para que por ellas fueseis hechos participantes de la naturaleza divina, habiendo huído de la corrupción que está en el mundo por concupiscencia. Vosotros también, poniendo toda diligencia por esto mismo, mostrad en vuestra fe virtud, y en la virtud ciencia; y en la ciencia templanza, y en la templanza paciencia, y en la paciencia temor de Dios; y en el temor de Dios, amor fraternal, y en el amor fraternal caridad. Porque si en vosotros hay estas cosas, y abundan, no os dejarán estar ociosos, ni estériles en el conocimiento de nuestro Señor Jesucristo. Mas el que no tiene estas cosas, es ciego, y tiene la vista muy corta, habiendo olvidado la purificación de sus antiguos pecados. Por lo cual, hermanos, procurad tanto más de hacer firme vuestra vocación y elección; porque haciendo estas cosas, no caeréis jamás. Porque de esta manera os será abundantemente administrada la entrada en el reino eterno de nuestro Señor y Salvador Jesucristo.",
		ver: "Pedro pide añadir a la fe, a costa propia, una cadena de siete eslabones. No es un cartel de virtudes. Es lo que el capítulo 2 va a exigir cuando desenmascare a quienes prometen libertad siendo esclavos de corrupción. Dios dio todo lo que concierne a la vida y a la piedad; ahora se suministra, se costea, se añade. El que no añade no es humilde. Es ciego, y se olvidó de la purificación de sus antiguos pecados. La fe que no se ejercita se vuelve estéril.",
		entorno: "Segunda carta. Pedro va a morir (1:14). Hay maestros que prometen libertad y son esclavos. El 1:3–11 es la pendiente; el 1:16–21, el origen de la profecía; el capítulo 2 espera con los falsos. El 1 no es un listado de hábitos, sino lo que evita caer en esa esclavitud. Se escribe a los que han recibido una fe igualmente preciosa: creyentes que pueden volverse ociosos y llamar a esa ociosidad gracia.",
		revelacion: "ἐπιχορηγήσατε: suministrad, costead. Añadir cuesta. σπουδὴν πᾶσαν: toda diligencia, toda prisa; no un ánimo vago. ἀρετή, γνῶσις, ἐγκράτεια, ὑπομονή, εὐσέβεια, φιλαδελφία, ἀγάπη: la cadena no es un menú. μυωπάζων: corto de vista el que no añade. βεβαίαν: hacer firme el llamamiento y la elección. Se confirma en el camino, no en el eslogan. Participar de la naturaleza divina no es fusión panteísta, sino huir de la corrupción.",
		doctrina: "Dios dio todo lo que concierne a la vida y a la piedad. El creyente no improvisa el carácter: lo suministra. La elección se confirma en el camino, no en el eslogan. El pueblo que no añade se vuelve estéril. Las virtudes no sustituyen a Cristo: las da el que ya nos dio todo. Santiago 2 y Judas 3 leen el mismo peligro: llamar fe a un asentimiento que no se mueve, y llamar libertad a la esclavitud. Este tomo, en la colección, se llama La fe no basta, y no discute a Pablo: desnuda al que cita a Pablo para no añadir.",
		argumento: "La fe que no se ejercita no es humildad. Es ceguera. El texto te niega el «ya creí, ya está». Status quaestionis: ¿ociosidad piadosa, o diligencia que costea? Distingo: hay descanso en Cristo, y hay suministro; el primero no anula al segundo. Reductio: si no añadir es gracia, el capítulo 2 no desenmascara a nadie, y Pedro ha escrito en vano.",
		decision: "Elige un eslabón para esta semana. Escríbelo en el cuaderno y dilo a alguien de confianza. Uno. Costealo. El que elige siete no ha elegido ninguno. El que no lo dice a un testigo lo ha dejado en el eslogan.",
		conclusion: "Siete eslabones y una sola pendiente. La fe que no añade se vuelve estéril. — Alejandro Sirit"
	},
{
		slug: "filipenses-2",
		kicker: "Himno",
		ref: "Filipenses 2:5–11",
		title: "El himno del Siervo",
		passage: "Haya, pues, en vosotros este sentir que hubo también en Cristo Jesús: el cual, siendo en forma de Dios, no tuvo por usurpación ser igual á Dios: sin embargo, se anonadó á sí mismo, tomando forma de siervo, hecho semejante á los hombres; y hallado en la condición como hombre, se humilló á sí mismo, hecho obediente hasta la muerte, y muerte de cruz. Por lo cual Dios también le ensalzó á lo sumo, y dióle un nombre que es sobre todo nombre; para que en el nombre de Jesús se doble toda rodilla de los que están en los cielos, y de los que en la tierra, y de los que debajo de la tierra; y toda lengua confiese que Jesucristo es el Señor, á la gloria de Dios Padre.",
		ver: "El himno humilla al yo antes de exaltarlo. Forma de siervo, muerte de cruz, el Nombre sobre todo nombre. Filipenses 2 no se escribió para que el seminario aplaudiera la kénosis. Se escribió para que Evodia y Síntique dejaran de pelearse el primer asiento. El credo está metido en la ética. Quien canta 2:9–11 sin 2:7 no ha leído: ha cantado.",
		entorno: "Filipos, iglesia querida con grietas de vanagloria (2:1–4). Pablo escribe desde la cárcel, hacia el 60–62. El himno no es adorno, sino la medida de la mente de la iglesia. El 2:12–18 pide ocupar la salvación con temor. Timoteo y Epafrodito encarnan el himno. El género es carta: el carmen Christi sirve a un pleito concreto, no a un tratado de cristología suelto.",
		revelacion: "μορφὴ θεοῦ / μορφὴ δούλου: forma de Dios, forma de siervo. No teatro: naturaleza y obediencia. ἐκένωσεν: se vació, no dejó de ser quién es; tomó lo que no debía. μέχρι θανάτου δὲ σταυροῦ: hasta la muerte, y muerte de cruz. La infamia es el punto, no un detalle. διὸ καὶ ὁ θεὸς αὐτὸν ὑπερύψωσεν. πᾶν γόνυ κάμψῃ: toda rodilla. Isaías 45:23 entra. Escatología, no eslogan.",
		doctrina: "Cristo es igual a Dios y se hizo siervo. La cruz es obediencia, no accidente. La exaltación es del Padre. Toda rodilla es escatología, no eslogan. El Nombre sobre todo nombre es YHWH dado al Hijo. El sentir que se pide a Filipos es este Cristo, no un talante amable. El himno no es un poema de autoayuda sobre bajar el ego. Es el camino del Hijo: igualdad no aferrada, siervo, cruz, exaltación.",
		argumento: "Si tu «sentir de Cristo» no baja, no es este himno. El texto no te pide una marca de siervo: te pide la forma. Status quaestionis: ¿himno de kénosis para el seminario, o medida de la mente de Filipos? Distingo: ἐκένωσεν no es dejar de ser quién es. Reductio: si se canta la exaltación y se evita la forma de siervo, se ha cambiado de señor.",
		decision: "Cede un derecho esta semana —uno que te estaba inflando— y no lo anuncies. Hazlo porque el himno manda. Evodia y Síntique no necesitan otro taller: necesitan este Cristo. El que anuncia el despojo ya lo ha convertido en teatro.",
		conclusion: "El himno que humilla al yo antes de exaltarlo. — Alejandro Sirit"
	},
{
		slug: "santiago-1",
		kicker: "Espejo",
		ref: "Santiago 1:19–27",
		title: "Pronto para oír",
		passage: "Por esto, mis amados hermanos, todo hombre sea pronto para oir, tardío para hablar, tardío para airarse: porque la ira del hombre no obra la justicia de Dios. Por lo cual, dejando toda inmundicia y superfluidad de malicia, recibid con mansedumbre la palabra ingerida, la cual puede hacer salvas vuestras almas. Mas sed hacedores de la palabra, y no tan solamente oidores, engañándoos á vosotros mismos. Porque si alguno oye la palabra, y no la pone por obra, este tal es semejante al hombre que considera en un espejo su rostro natural. Porque él se consideró á sí mismo, y se fué, y luego se olvidó qué tal era. Mas el que hubiere mirado atentamente en la perfecta ley, que es la de la libertad, y perseverado en ella, no siendo oidor olvidadizo, sino hacedor de la obra, este tal será bienaventurado en su hecho. Si alguno piensa ser religioso entre vosotros, y no refrena su lengua, sino engañando su corazón, la religión del tal es vana. La religión pura y sin mácula delante de Dios y Padre es esta: Visitar los huérfanos y las viudas en sus tribulaciones, y guardarse sin mancha de este mundo.",
		ver: "El oyente que se mira y se va. Oír y no hacer es engaño de sí, no un retraso inocente. El altar no es el sentimiento de haber oído, ni la liturgia de un estudio bien anotado. Es el hombre que permanece en la ley perfecta, la de la libertad, y es hacedor de la obra. El que cierra el cuaderno sin acto ha vuelto a mirarse y se ha ido. Esta escuela, si no decide, es el hombre del espejo.",
		entorno: "Santiago, siervo de Dios y del Señor Jesucristo, escribe a las doce tribus en la dispersión, quizá en los años 40–50. Creyentes pobres y tentados, que oyen mucho y hacen poco. El 1:19–21 pide recibir con mansedumbre la palabra implantada. El 26–27 es la religión pura. La ira del hombre no obra la justicia. La lengua espera en el capítulo 3. El género es carta sapiencial: espejo, no consigna.",
		revelacion: "ποιηταὶ λόγου: hacedores de la palabra, no solamente oidores. παραλογιζόμενοι ἑαυτούς: engañándoos a vosotros mismos; el retraso no es inocente. ἔσοπτρον: espejo; el rostro natural se ve y se olvida. νόμον τέλειον τὸν τῆς ἐλευθερίας: la ley perfecta, la de la libertad, no antinomia. Permanecer, no huir. El Padre de las luces nos engendró por la palabra de verdad (1:18). El espejo no es un método, sino oír a Cristo y no irse.",
		doctrina: "La Palabra que se oye obliga. El autoengaño es liturgia de los que solo escuchan. La libertad no es huir de la ley, sino permanecer en ella y ser bienaventurado en el hacer. Mateo 7:24–27 está debajo: el que oye y no hace es casa sobre arena. El Señor que dijo Éfata no deja el oído abierto para el archivo. Lo deja abierto para el acto. C.R.I.S.O.L.™, expuesto en El Altar del Espejo, es la compuerta de este eslabón.",
		argumento: "El estudio que no decide es el hombre del espejo. Este sitio no te deja el pasaje en la cabeza. Status quaestionis: ¿retraso inocente, o engaño de sí? Distingo: hay oír, y hay hacer; el primero sin el segundo es παραλογισμός. Reductio: si el cuaderno basta, Santiago ha llamado bienaventuranza a lo que es olvido, y el espejo no era altar: era tocador.",
		decision: "Lo que este texto te mostró, hazlo antes de siete días. Anótalo. Dilo a un testigo. Si se queda en el cuaderno sin acto, volviste a mirarte y te fuiste. Queda prohibido un «hoy muero a…» que el pasaje no conjuga. El verbo aquí es hacer, no morir a un ego genérico.",
		conclusion: "Oír y no hacer es engaño de sí, no un retraso inocente. — Alejandro Sirit"
	},
{
		slug: "marcos-7",
		kicker: "Laboratorio IV",
		ref: "Marcos 7:31–37",
		title: "Éfata",
		passage: "Y mirando al cielo, gimió, y le dijo: Ephphatha: que es decir: Sé abierto. Y luego fueron abiertos sus oídos, y fué desatada la ligadura de su lengua, y hablaba bien.",
		voz: "Ephphatha: que es decir: Sé abierto.",
		ver: "El párrafo entero, no el vocablo extraído como piedra preciosa. Lo toman aparte. Dedos en los oídos. Saliva. Gemido al cielo. Un mandato. Al momento: oídos abiertos, lengua desatada, hablaba bien. El oído precede a la lengua. El versículo 36 estropea el final feliz: les mandó que no lo dijesen, y cuanto más les mandaba, tanto más lo divulgaban. Se puede recitar Isaías y desobedecer a Jesús en la misma respiración. El sordo no es el agente. El agente queda fuera de la morfología.",
		entorno: "Decápolis: oído gentil. No es viñeta de Galilea judía. Antes, la sirofenicia oye una palabra dura y cree; el sordo no puede oír ninguna. Más atrás, fariseos con labios y corazón lejos (7:1–23). Después, panes en Decápolis. El horizonte es Isaías 35:5–6. El género es narración evangélica: el sordo es un sordo, la saliva es saliva. El sentido no se obtiene evaporando el cuerpo. 8:18 preguntará: ¿teniendo oídos no oís? El milagro no es una metáfora de «abrir el corazón a tus sueños».",
		revelacion: "ἐφφαθά: hapax. Arameo אתפתח, imperativo reflexivo-pasivo: no «abre tú», sino «sé abierto». Marcos traduce de inmediato: ὅ ἐστιν Διανοίχθητι. διανοίχθητι: aoristo pasivo, apertura a través; el mismo verbo de Lucas 24:45 y Hechos 16:14. ἐστέναξεν: gimió. μογιλάλον: tartamudo, la palabra de Isaías 35 en la Septuaginta. El sordo no es el agente. Calvino oye que Marcos insertó la palabra caldea para testificar el poder divino de Cristo. Vere Deus, vere homo: toca porque es hombre y ordena porque es Dios.",
		doctrina: "Dios abre. El hombre está cerrado. Cristo toca porque es hombre y ordena porque es Dios. El pueblo trae al sordo y luego desobedece. Analogía antecedente: Marcos 4, el que tiene oídos para oír. Canon pleno: el Shemá, Isaías 6, Isaías 35, Isaías 50, Emaús, Lidia, Romanos 10:17, las siete iglesias, el Cordero que abre el libro. Este tratado se llama Éfata porque el oído y el libro coinciden. No porque el vocablo sea hermoso. El oído abierto y el libro abierto son el mismo misterio: Dios no deja cerrado lo que ha decidido abrir.",
		argumento: "Objeción primera: «Éfata es un lema de marca». Respondeo: en Marcos 7:34 es palabra de Cristo a un sordo; como título, es sierva de esa palabra, no dueña. Si la marca va primero, el sordo sigue sordo. Objeción segunda: «el milagro es metáfora de inclusión». Reductio: si se evapora el cuerpo, se evapora Isaías 35 y se queda un eslogan. Si Éfata es técnica de escucha interior, el milagro ya no es del Hijo.",
		decision: "El sordo de Marcos 7 no «murió hoy a su sordera»: fue abierto. Esa es la gramática de la gracia. Un acto: lee Marcos 7 entero, en voz alta, y nombra delante de alguien lo que aún no oyes. Mañana se vuelve. El oído no se abre una sola vez. El que convierte Éfata en marca y deja al sordo cerrado ha tomado el nombre del milagro en vano.",
		conclusion: "Jesús no le explicó al sordo el método. Le metió los dedos en los oídos, tocó la lengua, miró al cielo, suspiró y habló. El método solo enseña a no usurparle el gesto. — Alejandro Sirit"
	},
{
		slug: "apocalipsis-5",
		kicker: "Laboratorio VI",
		ref: "Apocalipsis 5",
		title: "El Cordero y el rollo",
		passage: "Y uno de los ancianos me dice: No llores: he aquí el león de la tribu de Judá, la raíz de David, que ha vencido para abrir el libro, y desatar sus siete sellos. Y miré; y he aquí en medio del trono y de los cuatro animales, y en medio de los ancianos, estaba un Cordero como inmolado, que tenía siete cuernos, y siete ojos, que son los siete Espíritus de Dios enviados en toda la tierra. Y él vino, y tomó el libro de la mano derecha de aquel que estaba sentado en el trono.",
		ver: "Juan llora porque nadie es digno. El anciano manda: no llores. Se anuncia un León. Se ve un Cordero. En pie, como inmolado. Toma el libro. La creación entera canta. El observador registra la paradoja y no la resuelve antes de tiempo: el que vence es el que fue degollado. El cántico nuevo declara el porqué: porque fuiste inmolado, y con tu sangre nos has redimido para Dios. Quien lea el 5 como novela de rapto ha cambiado de género.",
		entorno: "Apocalipsis, no almanaque de la última guerra. Lenguaje saturado de alusiones: Génesis 49, Éxodo, Daniel 7, el go'el de Levítico 25 y Rut. Patmos, imperio, culto al César. El género prohíbe el literalismo occidental y el sensacionalismo de novela. Las visiones son retratos doctrinales, no diagramas de tecnología bélica. Apocalipsis 4: el trono. El 5: el libro cerrado y el llanto. El 6 abre sellos. El sello de esta casa —León, Cordero y Fuego— es este capítulo, no un adorno.",
		revelacion: "ἄξιος: digno, la balanza. Nadie equilibraba el rollo. ἀρνίον ἑστηκὸς ὡς ἐσφαγμένον: un Cordero en pie, como inmolado —las marcas del degüello visibles, el perfecto de estar de pie. ἠγοράσας: compraste. Sangre. Todo linaje, lengua, pueblo y nación. οὐ κλαῖε: no llores. El primer imperativo del laboratorio es al que llora porque el libro está cerrado. Las casillas: Dios sienta en el trono y tiene el libro; el pecado dejó el cosmos sin go'el; Cristo es León y Cordero, pariente de sangre que paga; el pueblo es comprado.",
		doctrina: "Génesis 49: el cetro de Judá. El go'el: ningún ángel es pariente de Adán; el Verbo toma carne para redimir (He. 2:14–15). El Cordero recibe adoración que el ángel de Apocalipsis 19 y 22 rechaza: no es criatura. Analogía plena: el que abre el libro es el que abre al sordo. León, Cordero y Fuego no son adorno del sello, sino este capítulo. Majestad sin cruz sería condenación; cruz sin majestad, tragedia. El que abre la historia es el que fue degollado.",
		argumento: "Contra el pánico profético: el cántico nuevo declara por qué es digno —porque fue inmolado— no porque un rapto futuro lo habilite. Contra el escepticismo: la literatura de resistencia judía quería un mesías militar; este rollo subvierte esa fantasía. Status quaestionis: ¿quién abre la historia? Distingo: se anuncia un León; se ve un Cordero. Reductio: si el Cordero no es Dios, el cielo comete idolatría. Si el cetro está en el César, Juan lloró con razón.",
		decision: "El indicativo es «ha vencido» y «tomó el libro». El imperativo del anciano es el nuestro: no llores. Un acto: cesa esta semana una lectura de la historia que pone el cetro en el César, y di a alguien que el rollo está en las manos atravesadas. El llanto por el libro cerrado termina cuando se adora al que lo tomó.",
		conclusion: "El llanto de Juan ha terminado. El rollo no está cerrado: ha sido tomado por el Redentor. — Alejandro Sirit"
	},
{
		slug: "1-corintios-12-14",
		kicker: "Dones",
		ref: "1 Corintios 12–14",
		title: "Los dones del Espíritu",
		passage: "Porque á la verdad, á éste es dada por el Espíritu palabra de sabiduría; á otro, palabra de ciencia según el mismo Espíritu; á otro, fe por el mismo Espíritu; y á otro, dones de sanidades por el mismo Espíritu; á otro, operaciones de milagros; y á otro, profecía; y á otro, discreción de espíritus; y á otro, géneros de lenguas; y á otro, interpretación de lenguas. Mas todas estas cosas obra uno y el mismo Espíritu, repartiendo particularmente á cada uno como quiere. Empero hay repartimiento de dones; mas el mismo Espíritu es. Porque por un Espíritu somos todos bautizados en un cuerpo, ora Judíos ó Griegos, ora siervos ó libres; y todos hemos bebido de un mismo Espíritu.",
		ver: "Pablo no abre un catálogo de poderes para que Corinto se exhiba. Abre un cuerpo. Hay diversidad de dones, y un solo Espíritu; diversidad de ministerios, y un solo Señor; diversidad de operaciones, y un solo Dios. El que se lleva un don como trofeo aún no ha oído el 12: el mismo Espíritu reparte como él quiere. El que se lleva el amor del 13 como poema de boda aún no ha oído el 14: procurad los dones, y que todo se haga para edificación, con orden.",
		entorno: "Corinto, iglesia carismática y partida, hacia el 54–55. Habían convertido el don en rango y la lengua en espectáculo. El 11 acaba de corregir la Cena. El 12–14 es un solo argumento: el cuerpo, el camino más excelente, y el culto que edifica. El género es carta: no un manual de técnicas espirituales, ni un vetusto recelo contra todo lo que no se entiende. El pueblo a quien se escribe ya tiene dones. Le falta el amor que no se envanece, y el orden que no apaga.",
		revelacion: "χαρίσματα: dones de gracia, no trofeos. ἓν πνεῦμα: un solo Espíritu. τὸ σῶμα: el cuerpo; el miembro no dice al otro «no te necesito». ἡ ἀγάπη: el camino más excelente no anula el don; impide que el don se vuelva cimbalo. οἰκοδομή: edificación. εὐσχημόνως καὶ κατὰ τάξιν: decentemente y con orden. El que extrae 13:4–7 y deja 14:40 ha fabricado un amor sin asamblea, o una asamblea sin amor.",
		doctrina: "El Espíritu reparte. El Hijo es el Señor de los ministerios. El Padre opera. El pueblo es un cuerpo, no un escenario. Los dones no miden santidad: miden servicio. El amor permanece cuando las lenguas cesen. Analogía plena: Hechos 2 no es un clima; Romanos 12 pide el cuerpo; Efesios 4 da apóstoles, profetas, evangelistas, pastores y maestros para la edificación. El que apaga el Espíritu para no desordenarse, y el que desordena para no apagar, han leído a medias.",
		argumento: "Status quaestionis: ¿son los dones un trofeo, o un servicio al cuerpo? Distingo: hay manifestación, y hay edificación; la primera sin la segunda es cimbalo. Reductio: si el don se exhibe y el hermano no se edifica, 14:26 ha fallado, y el Espíritu habría repartido para el yo. Si el 13 se cita para no desear dones, Pablo ha escrito en vano el 14.",
		decision: "Esta semana, nombra un don —el tuyo o el que envidias— y ponlo al servicio de un hermano concreto, no de un escenario. Un acto. El que busca lengua para ser visto, o silencio para no servir, todavía no ha oído a Corinto.",
		conclusion: "Un solo Espíritu, un solo cuerpo, y un amor que no deja que el don se vuelva cimbalo. — Alejandro Sirit"
	},
{
		slug: "galatas-5",
		kicker: "Fruto",
		ref: "Gálatas 5:22–23",
		title: "El fruto del Espíritu",
		passage: "Mas el fruto del Espíritu es: caridad, gozo, paz, tolerancia, benignidad, bondad, fe, mansedumbre, templanza: contra tales cosas no hay ley. Porque los que son de Cristo, han crucificado la carne con los afectos y concupiscencias. Si vivimos en el Espíritu, andemos también en el Espíritu.",
		ver: "Pablo no ofrece un cartel de virtudes para que el yo se mida y se apruebe. Ofrece un fruto. Singular. Nueve nombres, un solo árbol. El que se lleva «amor, gozo, paz» como lema de clima interior aún no ha visto el 16: andad en el Espíritu, y no satisfagáis los deseos de la carne. El que se lleva la lista y deja la crucifixión del 24 ha fabricado un carácter sin cruz.",
		entorno: "Gálatas, carta de urgencia, hacia el 48–55. Hay quienes quieren que los gentiles se circunciden para completar a Cristo. El 5:1 abre: estad, pues, firmes en la libertad. El 13 impide que esa libertad se vuelva ocasión para la carne. El 19–21 nombra las obras —plural— de la carne. El 22 nombra el fruto. El género es carta polémica: no un taller de hábitos, ni un contrapunto estoico. El pueblo a quien se escribe estaba a punto de cambiar de evangelio para parecer más serio.",
		revelacion: "καρπὸς τοῦ πνεύματος: fruto del Espíritu, no frutos que el hombre cultiva como huerto propio. ἀγάπη, χαρά, εἰρήνη, μακροθυμία, χρηστότης, ἀγαθωσύνη, πίστις, πραΰτης, ἐγκράτεια. Contra tales cosas no hay ley: la ley no se opone a lo que el Espíritu produce. οἱ δὲ τοῦ Χριστοῦ: los que son de Cristo han crucificado la carne. El verbo es perfecto. El andad del 25 es presente. El fruto no se decreta. Se da donde se anda.",
		doctrina: "El Espíritu produce lo que la ley pedía y la carne no podía. Cristo libertó; la libertad no es licencia. El pueblo no improvisa el carácter: lo recibe y lo anda. Juan 15 está debajo: el pámpano no da fruto separado de la vid. El que predica las nueve palabras como técnica de mejora ha vuelto a la carne con vocabulario santo. El que predica la libertad para no crucificar nada ha vuelto a la carne con vocabulario de gracia.",
		argumento: "Status quaestionis: ¿lista de hábitos, o fruto de un Señor? Distingo: hay ejercicio, y hay producción; el primero no fabrica al segundo. Reductio: si el fruto se administra sin la crucifixión del 24, Gálatas 3 ha sido en vano, y el Espíritu sería un entrenador, no el que da vida.",
		decision: "Elige un nombre del fruto que el texto ha desnudado —uno, no nueve— y nombra delante de un testigo dónde la carne lo estaba sustituyendo. Anda. El que elige los nueve no ha elegido ninguno. El que no lo dice lo ha dejado en el cartel.",
		conclusion: "Un fruto, no un cartel. El Espíritu produce; la carne no fabrica. — Alejandro Sirit"
	},
{
		slug: "2-corintios-12",
		kicker: "Gracia",
		ref: "2 Corintios 12:1–10",
		title: "Bástate mi gracia",
		passage: "Y porque la grandeza de las revelaciones no me levante descomedidamente, me es dado un aguijón en mi carne, un mensajero de Satanás que me abofetee, para que no me enaltezca sobremanera. Por lo cual tres veces he rogado al Señor, que se quite de mí. Y me ha dicho: Bástate mi gracia; porque mi potencia en la flaqueza se perfecciona. Por tanto, de buena gana me gloriaré más bien en mis flaquezas, porque habite en mí la potencia de Cristo.",
		voz: "Bástate mi gracia; porque mi potencia en la flaqueza se perfecciona.",
		ver: "Pablo no exhibe un viaje al tercer cielo para que Corinto aplaudiera. Exhibe un aguijón que no se quita. Tres veces rogó. La respuesta no es la extracción, sino la palabra. Bástate mi gracia. El que se lleva el 9 como consuelo genérico aún no ha visto el 7: para que no me enaltezca. El que se lleva el aguijón como romance de sufrimiento aún no ha oído el poder que se perfecciona donde ya no se puede.",
		entorno: "Segunda a Corinto, hacia el 55–56. Hay superapóstoles que miden el ministerio por éxtasis y por apariencia. El 11–12 es una «locura» forzada: Pablo se gloria en lo que ellos despreciarían. El género es carta: apología que se vuelve teología de la flaqueza, no un manual de aguijones. El pueblo a quien se escribe quería un siervo impresionante. Recibe a un hombre abofeteado, y a un Señor que no quita el mensajero.",
		revelacion: "σκόλοψ τῇ σαρκί: aguijón en la carne. ἄγγελος σατανᾶ: mensajero de Satanás que abofetee. ἀρκεῖ σοι ἡ χάρις μου: bástate mi gracia. ἡ γὰρ δύναμις ἐν ἀσθενείᾳ τελεῖται: el poder se perfecciona en la debilidad. ἥδιστα οὖν μᾶλλον καυχήσομαι: de buena gana me gloriaré. El verbo de la respuesta es presente: me ha dicho, y la palabra permanece. El aguijón también.",
		doctrina: "La gracia no es un adorno del fuerte. Es el poder del que ya no puede. Cristo more en la flaqueza; no la evapora para que el ministerio luzca. El pueblo no despide al que tiene aguijón: oye en él al Señor. Este tomo, en la colección, se llama *Bástate*, y se lee en el tercer puesto: no es un satélite. Isaías 53 carga la rebelión; 2 Corintios 12 sostiene al cuerpo que todavía gime. El que predica una gracia que siempre quita el aguijón ha cambiado de Señor.",
		argumento: "Status quaestionis: ¿es el aguijón un fracaso de fe, o el lugar donde el poder se perfecciona? Distingo: hay sanidad, y hay palabra que no quita; la primera no anula a la segunda. Reductio: si el 9 se cita para extraer todo aguijón, Pablo habría desobedecido al rogar solo tres veces, y el poder de Cristo no moraría en la debilidad.",
		decision: "Nombra el aguijón que has tratado como prueba de que Dios no basta. Esta semana, deja de rogar solo para que se quite, y oye la palabra que permanece: bástate mi gracia. Dilo a alguien. El que convierte el 9 en un lema y niega la flaqueza aún no ha sido respondido: ha sido entretenido.",
		conclusion: "El aguijón permanece; el Señor también. La gracia basta donde el yo ya no puede. — Alejandro Sirit"
	},
{
		slug: "viajes-de-pablo",
		kicker: "Misión",
		ref: "Hechos 13–14",
		title: "Los viajes de Pablo",
		passage: "Y ellos, enviados así por el Espíritu Santo, descendieron á Seleucia; y de allí navegaron á Cipro. Y llegados á Salamina, anunciaban la palabra de Dios en las sinagogas de los Judíos: y tenían también á Juan en el ministerio. Confirmando los ánimos de los discípulos, exhortándoles á que permaneciesen en la fe, y que es menester que por muchas tribulaciones entremos en el reino de Dios.",
		ver: "Lucas no escribe un itinerario de turismo apostólico. Escribe un envío. El Espíritu Santo habla en Antioquía; apartan a Bernabé y a Saulo; les imponen las manos; bajan a Seleucia. El que se lleva «viajes de Pablo» como mapa de éxito aún no ha oído 14:22: es necesario que a través de muchas tribulaciones entremos en el reino de Dios. El que se lleva Chipre y deja Listra ha fabricado una misión sin piedras.",
		entorno: "Hechos, historia teológica para Teófilo. El 13–14 es el primer viaje: Chipre, Pisidia, Licaonia. Hay sinagoga, hay mago, hay celos, hay lapidación, hay presbíteros. El género prohíbe el manual de crecimiento y el almanaque de anécdotas. El pueblo a quien se escribe necesita saber que el evangelio llegó a las naciones con hechos, no con rumores, y que el envío no evapora la tribulación.",
		revelacion: "ἀφορίσατε: apartadme a Bernabé y a Saulo. ἐκπεμφθέντες ὑπὸ τοῦ ἁγίου πνεύματος: enviados por el Espíritu Santo. διὰ πολλῶν θλίψεων: a través de muchas tribulaciones. χειροτονήσαντες: designaron ancianos. El viaje no es una marca personal. Es el Espíritu que aparta, la Palabra que se anuncia, la iglesia que se confirma, y el reino que se entra con θλῖψις. El que extrae el mapa y deja el 14:22 ha recortado el oficio.",
		doctrina: "El Espíritu envía. El Hijo es el contenido del anuncio —el que no vio corrupción, el que justifica—. El pueblo se confirma en la fe y recibe ancianos. La analogía plena oye Mateo 28 y Romanos 15: no hay misión que no pase por la Palabra, ni Palabra que prometa un camino sin tribulación. El que predica viajes como técnica de expansión ha cambiado de libro: ha leído un informe, no a Lucas.",
		argumento: "Status quaestionis: ¿itinerario de éxito, o envío con tribulación? Distingo: hay fruto, y hay piedras; el primero no anula a las segundas. Reductio: si el viaje se cita para prometernos un siglo sin θλῖψις, 14:22 ha mentido, y el reino se habría vuelto un destino turístico.",
		decision: "Esta semana, nombra un envío concreto —una Palabra que debías anunciar, un hermano que debías confirmar— y no lo midas por la facilidad. El que espera un mapa sin Listra todavía no ha sido apartado: ha sido entretenido.",
		conclusion: "El Espíritu aparta. La Palabra se anuncia. El reino se entra con muchas tribulaciones. — Alejandro Sirit"
	},
{
		slug: "1-corintios-1-2",
		kicker: "Retórica",
		ref: "1 Corintios 1–2",
		title: "La retórica de Pablo",
		passage: "Porque no me envió Cristo á bautizar, sino á predicar el evangelio: no en sabiduría de palabras, porque no sea hecha vana la cruz de Cristo. Porque la palabra de la cruz es locura á los que se pierden; mas á los que se salvan, es á saber, á nosotros, es potencia de Dios. Y ni mi palabra ni mi predicación fué con palabras persuasivas de humana sabiduría, mas con demostración del Espíritu y de poder.",
		ver: "Pablo no desprecia las palabras. Desprecia la sabiduría de palabras que deja vana la cruz. Corinto se partía por nombres —Pablo, Apolos, Cefas, Cristo— y medía el púlpito por el brillo. El que se lleva «no con sabiduría» como disculpa de la ignorancia aún no ha oído el 2:6: hablamos sabiduría entre los que han alcanzado madurez. El que se lleva la retórica como adorno aún no ha oído el 1:17: para que no se haga vana la cruz.",
		entorno: "Primera a Corinto, hacia el 54–55. Ciudad de oradores, de patronazgo y de status. El 1:10–4:21 es un solo movimiento contra las bandas. El género es carta: no un tratado de elocuencia, ni un elogio de la tosquedad. El pueblo a quien se escribe quería un predicador que luciera en el ágora. Recibe a un apóstol que se plantó con temor y temblor, y a un Cristo crucificado que el siglo llama locura.",
		revelacion: "σοφία λόγου: sabiduría de palabras. κενωθῇ ὁ σταυρός: que no se vacíe la cruz. μωρία: locura, a los que se pierden. δύναμις θεοῦ: poder de Dios, a los que se salvan. ἀπόδειξις πνεύματος καὶ δυνάμεως: demostración del Espíritu y de poder. οὐκ ἐν πειθοῖς σοφίας λόγοις: no con palabras persuasivas de sabiduría. El léxico no prohíbe la claridad. Prohíbe el aparato que rivaliza con el madero.",
		doctrina: "Cristo no envió a bautizar facciones, sino a predicar. El Padre eligió lo necio del mundo. El Espíritu revela lo que el hombre natural no recibe. El pueblo no se gloria en el predicador: el que se gloria, gloríese en el Señor. Jeremías 9:24 está debajo. El que predica la cruz con el tono del ágora ha cambiado de poder. El que predica la tosquedad como virtud ha cambiado de oficio: Pablo no se niega a hablar; se niega a vaciar.",
		argumento: "Status quaestionis: ¿es la predicación un arte que convence, o un anuncio que el Espíritu demuestra? Distingo: hay palabras, y hay sabiduría de palabras; las primeras sirven, la segunda vacía. Reductio: si el 2:4 se cita para no estudiar, 2:6 ha sobrado. Si el 1:17 se cita para lucir, la cruz ya se vació.",
		decision: "Esta semana, nombra una frase tuya —en el púlpito, en la mesa, en la red— que estaba luciendo más que el madero. Quítala. El que se reforma el estilo y no se arrodilla ante la locura de la cruz todavía está en el ágora.",
		conclusion: "La cruz no se adorna para convencer. Se anuncia, y el Espíritu demuestra. — Alejandro Sirit"
	},
{
		slug: "teologia-de-la-cruz",
		kicker: "Cruz",
		ref: "1 Corintios 1:18–31",
		title: "Teología de la cruz",
		passage: "Porque la palabra de la cruz es locura á los que se pierden; mas á los que se salvan, es á saber, á nosotros, es potencia de Dios. Porque por no haber el mundo conocido en la sabiduría de Dios á Dios por sabiduría, agradó á Dios salvar á los creyentes por la locura de la predicación. Antes lo necio del mundo escogió Dios, para avergonzar á los sabios.",
		ver: "Pablo no ofrece una «teología de la cruz» como lema de escuela. Ofrece un tajo. La palabra de la cruz parte a la humanidad: locura para los que se pierden, poder para los que se salvan. El que se lleva el 18 como consigna contra los intelectuales aún no ha visto el 21: el mundo no conoció a Dios mediante la sabiduría. El que se lleva lo necio como orgullo de ignorancia aún no ha visto el 30: Cristo nos ha sido hecho sabiduría, justificación, santificación y redención.",
		entorno: "El mismo Corinto del 1–2. Judíos piden señales. Griegos buscan sabiduría. Nosotros predicamos a Cristo crucificado: tropezadero y locura. El género es carta, no un tratado luterano suelto —aunque Lutero oirá esto con razón—. El pueblo a quien se escribe quería un Cristo que luciera. Recibe al que Dios eligió: lo vil, lo menospreciado, lo que no es, para deshacer lo que es.",
		revelacion: "ὁ λόγος ὁ τοῦ σταυροῦ: la palabra de la cruz, no un adorno. σκάνδαλον: tropiezo para judíos. μωρίαν: locura para gentiles. ἐξελέξατο ὁ θεός: Dios eligió. τὰ μὴ ὄντα: lo que no es. ἵνα μὴ καυχήσηται: para que nadie se jacte. ἐξ αὐτοῦ: de él sois en Cristo Jesús. El que extrae «locura» y deja «de él sois» ha fabricado un desprecio, no una teología.",
		doctrina: "Dios salva por lo que el siglo desprecia. El Hijo crucificado es el poder y la sabiduría de Dios. El pueblo no se jacta: el que se gloria, gloríese en el Señor. La analogía plena oye Isaías 29:14 y Jeremías 9:24. *El Siervo, no tú* lee el mismo tajo desde Isaías 53: el justo muere por los injustos, y el lector no se sube al madero como si fuera el Siervo. El que predica una cruz que no avergüenza al sabio ha cambiado de cruz.",
		argumento: "Status quaestionis: ¿es la cruz un tropiezo que Dios eligió, o un emblema que el siglo puede aplaudir? Distingo: hay sabiduría de Dios, y hay sabiduría del mundo; la primera se revela en lo necio. Reductio: si la cruz se adorna hasta que deje de ser locura, 1:21 ha fallado, y nadie se habría salvado por la predicación.",
		decision: "Esta semana, nombra una jactancia —oficio, púlpito, herida bien contada— que estabas usando para no quedar en «lo que no es». Déjala. Gloríate en el Señor. El que se queda en el desprecio de los sabios y no se queda en Cristo aún no ha oído el 30.",
		conclusion: "La cruz parte. Locura o poder. Nadie se jacta, sino en el Señor. — Alejandro Sirit"
	},
{
		slug: "teologia-de-la-gloria",
		kicker: "Gloria",
		ref: "1 Corintios 4:8–13",
		title: "Teología de la gloria",
		passage: "Ya estáis hartos, ya estáis ricos, sin nosotros reináis; y ojalá reinéis, para que nosotros reinemos también juntamente con vosotros. Porque á lo que pienso, Dios nos ha mostrado á nosotros los apóstoles por los postreros, como á sentenciados á muerte: porque somos hechos espectáculo al mundo, y á los ángeles, y á los hombres.",
		ver: "Pablo no escribe un tratado contra el espectáculo: lo desnuda. Corinto ya se saciaba, ya era rica, ya reinaba —sin los apóstoles—. El que se lleva «teología de la gloria» como lema de combate aún no ha visto el 9: Dios exhibió a los apóstoles como últimos, como a sentenciados a muerte. El que se lleva el espectáculo como pecadillo de escenario aún no ha oído que el reinado adelantado es otra cruz: una cruz que no padece.",
		entorno: "Sigue 1 Corintios. El 4 cierra el argumento de las bandas: no juzguéis antes de tiempo; no os ensoberbezcáis. El género es ironía pastoral, no un slogan luterano suelto —aunque la casa oye aquí la misma advertencia: la gloria sin cruz es teatro—. El pueblo a quien se escribe quería un cristianismo que ya hubiera llegado. Recibe a apóstoles hambrientos, desnudos, abofeteados, y a un Señor que aún no ha entregado el reino visible.",
		revelacion: "ἤδη κεκορεσμένοι: ya estáis saciados. ἐβασιλεύσατε χωρὶς ἡμῶν: reinasteis sin nosotros. ἐσχάτους: últimos. ἐπιθανατίους: sentenciados a muerte. θέατρον: espectáculo. ἡμεῖς μωροὶ διὰ Χριστόν, ὑμεῖς δὲ φρόνιμοι: nosotros necios por Cristo, vosotros prudentes. El contraste no es un chiste. Es el juicio del apóstol contra una iglesia que adelantó la gloria y dejó la cruz.",
		doctrina: "La gloria es real, y es futura. El Hijo reinará; aún no se ve que todas las cosas le sean sujetas. El pueblo padece, espera y no se corona a sí mismo. Romanos 8:17 está debajo: herederos, si es que padecemos con él. *El Siervo, no tú* quita la autoexpiación; este estudio quita la autocoronación. El que predica un reino ya cobrado, sin padecimiento y sin apóstoles últimos, ha cambiado de tiempo: ha leído Apocalipsis 21 en 1 Corintios 4.",
		argumento: "Status quaestionis: ¿ya reinamos, o somos espectáculo? Distingo: hay primicias, y hay adelanto soberbio; las primeras gimen, el segundo se sacia. Reductio: si Corinto ya reina, los apóstoles son un anacronismo, y 4:8 es elogio, no ironía.",
		decision: "Nombra un «ya» que te estabas coronando —un ministerio que ya llegó, una herida que ya te hace rey, un escenario que ya te aplaude—. Esta semana, bájalo. El que se niega a ser último todavía está saciado. El texto pide espectáculo al mundo, no trono.",
		conclusion: "La gloria que se adelanta es teatro. Los apóstoles fueron exhibidos como últimos. — Alejandro Sirit"
	},
{
		slug: "romanos-8-17",
		kicker: "Herencia",
		ref: "Romanos 8:17",
		title: "Herederos y padecimiento",
		passage: "Y si hijos, también herederos; herederos de Dios, y coherederos de Cristo; si empero padecemos juntamente con él, para que juntamente con él seamos glorificados. Porque tengo por cierto que lo que en este tiempo se padece, no es de comparar con la gloria venidera que en nosotros ha de ser manifestada.",
		ver: "Pablo no ofrece una herencia sin cruz. Si hijos, también herederos; coherederos con Cristo, si es que padecemos juntamente con él. El que se lleva «hijos» como lema de identidad aún no ha oído el εἴπερ: si es que. El que se lleva el padecimiento como romanticismo aún no ha oído el 18: las aflicciones no se comparan con la gloria que ha de manifestarse. El capítulo gime. El heredero también.",
		entorno: "Romanos 8, después de «ninguna condenación» y del Espíritu de adopción que clama Abba. El 18–27 pone a la creación, a los que tienen las primicias y al Espíritu mismo a gemir. El género es carta: no un folleto de identidad, ni un manual de aguante. El pueblo a quien se escribe es justificado, y todavía no glorificado. El 8:28–39 espera; no se adelanta.",
		revelacion: "τέκνα: hijos. κληρονόμοι: herederos. συγκληρονόμοι Χριστοῦ: coherederos con Cristo. εἴπερ συμπάσχομεν: si es que padecemos con él. ἵνα καὶ συνδοξασθῶμεν: para que seamos glorificados con él. οὐκ ἄξια: no son comparables. El «si es que» no pone en duda la filiación para el que tiene el Espíritu. Ata la herencia a la forma del Hijo: padecer con él, no coronarse sin él.",
		doctrina: "El Padre adopta. El Hijo comparte herencia y padecimiento. El Espíritu es primicias, no consumación. El pueblo gime y espera. La analogía plena oye 2 Timoteo 2:12 y 1 Pedro 4:13. *Cuando el cielo se cae* enseña a llorar sin apostatar; este estudio enseña a heredar sin adelantar la gloria. El que predica filiación para no padecer ha recortado el εἴπερ. El que predica padecimiento para merecer la herencia ha recortado la adopción.",
		argumento: "Status quaestionis: ¿es la herencia un derecho sin cruz, o una co-herencia que padece? Distingo: hay filiación segura, y hay camino de Hijo; la primera no evapora al segundo. Reductio: si el 17 se cita sin συμπάσχομεν, el 18 sobra, y la creación gime en vano.",
		decision: "Esta semana, nombra un padecimiento que habías tratado como prueba de que no eres hijo. Somételo al εἴπερ: padece con él, no contra la adopción. Dilo a alguien que gima contigo. El que se corona sin gemir todavía no es coheredero, sino un espectador del 17.",
		conclusion: "Hijos, herederos, coherederos: si es que padecemos con él. La gloria espera. — Alejandro Sirit"
	}
];
export function studyBySlug(slug: string) {
  return studies.find((s) => s.slug === slug);
}

export { etiquetaEstudio } from "@/lib/etiquetas";

export function estudiosPublicados() {
  return ESTUDIOS_DRIVE.map((slug) => studyBySlug(slug)).filter(
    (s): s is NonNullable<typeof s> => Boolean(s),
  );
}

export function estudiosProximos() {
  return studies.filter((s) => !estudioTienePack(s.slug));
}

export function siguienteEstudio(slug: string) {
  const i = ESTUDIOS_DRIVE.indexOf(slug as (typeof ESTUDIOS_DRIVE)[number]);
  if (i < 0 || i >= ESTUDIOS_DRIVE.length - 1) return undefined;
  return studyBySlug(ESTUDIOS_DRIVE[i + 1]);
}
