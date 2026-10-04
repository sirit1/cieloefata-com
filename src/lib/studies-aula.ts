/** Lo que el aula pinta y lo que el buscador cita. La cadena vieja no viaja con la página. */

export type AulaEstudio = {
  slug: string;
  kicker: string;
  ref: string;
  title: string;
  passage: string;
  voz?: string;
  ver: string;
};

export const aulas: readonly AulaEstudio[] = [
  {
    slug: "2-pedro-1",
    kicker: "Permanecer",
    ref: "2 Pedro 1:1–11",
    title: "Añadid a vuestra fe",
    passage: "Simón Pedro, siervo y apóstol de Jesucristo, á los que habéis alcanzado fe igualmente preciosa con nosotros en la justicia de nuestro Dios y Salvador Jesucristo: gracia y paz os sea multiplicada en el conocimiento de Dios, y de nuestro Señor Jesús. Como todas las cosas que pertenecen á la vida y á la piedad nos sean dadas de su divina potencia, por el conocimiento de aquel que nos ha llamado por su gloria y virtud: por las cuales nos son dadas preciosas y grandísimas promesas, para que por ellas fueseis hechos participantes de la naturaleza divina, habiendo huído de la corrupción que está en el mundo por concupiscencia. Vosotros también, poniendo toda diligencia por esto mismo, mostrad en vuestra fe virtud, y en la virtud ciencia; y en la ciencia templanza, y en la templanza paciencia, y en la paciencia temor de Dios; y en el temor de Dios, amor fraternal, y en el amor fraternal caridad. Porque si en vosotros hay estas cosas, y abundan, no os dejarán estar ociosos, ni estériles en el conocimiento de nuestro Señor Jesucristo. Mas el que no tiene estas cosas, es ciego, y tiene la vista muy corta, habiendo olvidado la purificación de sus antiguos pecados. Por lo cual, hermanos, procurad tanto más de hacer firme vuestra vocación y elección; porque haciendo estas cosas, no caeréis jamás. Porque de esta manera os será abundantemente administrada la entrada en el reino eterno de nuestro Señor y Salvador Jesucristo.",
    ver: "Pedro pide añadir a la fe, a costa propia, una cadena de siete eslabones. No es un cartel de virtudes. Es lo que el capítulo 2 va a exigir cuando desenmascare a quienes prometen libertad siendo esclavos de corrupción. Dios dio todo lo que concierne a la vida y a la piedad; ahora se suministra, se costea, se añade. El que no añade no es humilde. Es ciego, y se olvidó de la purificación de sus antiguos pecados. La fe que no se ejercita se vuelve estéril.",
  },
  {
    slug: "filipenses-2",
    kicker: "Himno",
    ref: "Filipenses 2:5–11",
    title: "El himno del Siervo",
    passage: "Haya, pues, en vosotros este sentir que hubo también en Cristo Jesús: el cual, siendo en forma de Dios, no tuvo por usurpación ser igual á Dios: sin embargo, se anonadó á sí mismo, tomando forma de siervo, hecho semejante á los hombres; y hallado en la condición como hombre, se humilló á sí mismo, hecho obediente hasta la muerte, y muerte de cruz. Por lo cual Dios también le ensalzó á lo sumo, y dióle un nombre que es sobre todo nombre; para que en el nombre de Jesús se doble toda rodilla de los que están en los cielos, y de los que en la tierra, y de los que debajo de la tierra; y toda lengua confiese que Jesucristo es el Señor, á la gloria de Dios Padre.",
    ver: "El himno humilla al yo antes de exaltarlo. Forma de siervo, muerte de cruz, el Nombre sobre todo nombre. Filipenses 2 no se escribió para que el seminario aplaudiera la kénosis. Se escribió para que Evodia y Síntique dejaran de pelearse el primer asiento. El credo está metido en la ética. Quien canta 2:9–11 sin 2:7 no ha leído: ha cantado.",
  },
  {
    slug: "santiago-1",
    kicker: "Espejo",
    ref: "Santiago 1:19–27",
    title: "Pronto para oír",
    passage: "Por esto, mis amados hermanos, todo hombre sea pronto para oir, tardío para hablar, tardío para airarse: porque la ira del hombre no obra la justicia de Dios. Por lo cual, dejando toda inmundicia y superfluidad de malicia, recibid con mansedumbre la palabra ingerida, la cual puede hacer salvas vuestras almas. Mas sed hacedores de la palabra, y no tan solamente oidores, engañándoos á vosotros mismos. Porque si alguno oye la palabra, y no la pone por obra, este tal es semejante al hombre que considera en un espejo su rostro natural. Porque él se consideró á sí mismo, y se fué, y luego se olvidó qué tal era. Mas el que hubiere mirado atentamente en la perfecta ley, que es la de la libertad, y perseverado en ella, no siendo oidor olvidadizo, sino hacedor de la obra, este tal será bienaventurado en su hecho. Si alguno piensa ser religioso entre vosotros, y no refrena su lengua, sino engañando su corazón, la religión del tal es vana. La religión pura y sin mácula delante de Dios y Padre es esta: Visitar los huérfanos y las viudas en sus tribulaciones, y guardarse sin mancha de este mundo.",
    ver: "El oyente que se mira y se va. Oír y no hacer es engaño de sí, no un retraso inocente. El altar no es el sentimiento de haber oído, ni la liturgia de un estudio bien anotado. Es el hombre que permanece en la ley perfecta, la de la libertad, y es hacedor de la obra. El que cierra el cuaderno sin acto ha vuelto a mirarse y se ha ido. Esta escuela, si no decide, es el hombre del espejo.",
  },
  {
    slug: "marcos-7",
    kicker: "Laboratorio IV",
    ref: "Marcos 7:31–37",
    title: "Éfata",
    passage: "Y mirando al cielo, gimió, y le dijo: Ephphatha: que es decir: Sé abierto. Y luego fueron abiertos sus oídos, y fué desatada la ligadura de su lengua, y hablaba bien.",
    voz: "Ephphatha: que es decir: Sé abierto.",
    ver: "El párrafo entero, no el vocablo extraído como piedra preciosa. Lo toman aparte. Dedos en los oídos. Saliva. Gemido al cielo. Un mandato. Al momento: oídos abiertos, lengua desatada, hablaba bien. El oído precede a la lengua. El versículo 36 estropea el final feliz: les mandó que no lo dijesen, y cuanto más les mandaba, tanto más lo divulgaban. Se puede recitar Isaías y desobedecer a Jesús en la misma respiración. El sordo no es el agente. El agente queda fuera de la morfología.",
  },
  {
    slug: "apocalipsis-5",
    kicker: "Laboratorio VI",
    ref: "Apocalipsis 5",
    title: "El Cordero y el rollo",
    passage: "Y uno de los ancianos me dice: No llores: he aquí el león de la tribu de Judá, la raíz de David, que ha vencido para abrir el libro, y desatar sus siete sellos. Y miré; y he aquí en medio del trono y de los cuatro animales, y en medio de los ancianos, estaba un Cordero como inmolado, que tenía siete cuernos, y siete ojos, que son los siete Espíritus de Dios enviados en toda la tierra. Y él vino, y tomó el libro de la mano derecha de aquel que estaba sentado en el trono.",
    ver: "Juan llora porque nadie es digno. El anciano manda: no llores. Se anuncia un León. Se ve un Cordero. En pie, como inmolado. Toma el libro. La creación entera canta. El observador registra la paradoja y no la resuelve antes de tiempo: el que vence es el que fue degollado. El cántico nuevo declara el porqué: porque fuiste inmolado, y con tu sangre nos has redimido para Dios. Quien lea el 5 como novela de rapto ha cambiado de género.",
  },
  {
    slug: "1-corintios-12-14",
    kicker: "Dones",
    ref: "1 Corintios 12–14",
    title: "Los dones del Espíritu",
    passage: "Porque á la verdad, á éste es dada por el Espíritu palabra de sabiduría; á otro, palabra de ciencia según el mismo Espíritu; á otro, fe por el mismo Espíritu; y á otro, dones de sanidades por el mismo Espíritu; á otro, operaciones de milagros; y á otro, profecía; y á otro, discreción de espíritus; y á otro, géneros de lenguas; y á otro, interpretación de lenguas. Mas todas estas cosas obra uno y el mismo Espíritu, repartiendo particularmente á cada uno como quiere. Empero hay repartimiento de dones; mas el mismo Espíritu es. Porque por un Espíritu somos todos bautizados en un cuerpo, ora Judíos ó Griegos, ora siervos ó libres; y todos hemos bebido de un mismo Espíritu.",
    ver: "Pablo no abre un catálogo de poderes para que Corinto se exhiba. Abre un cuerpo. Hay diversidad de dones, y un solo Espíritu; diversidad de ministerios, y un solo Señor; diversidad de operaciones, y un solo Dios. El que se lleva un don como trofeo aún no ha oído el 12: el mismo Espíritu reparte como él quiere. El que se lleva el amor del 13 como poema de boda aún no ha oído el 14: procurad los dones, y que todo se haga para edificación, con orden.",
  },
  {
    slug: "galatas-5",
    kicker: "Fruto",
    ref: "Gálatas 5:22–23",
    title: "El fruto del Espíritu",
    passage: "Mas el fruto del Espíritu es: caridad, gozo, paz, tolerancia, benignidad, bondad, fe, mansedumbre, templanza: contra tales cosas no hay ley. Porque los que son de Cristo, han crucificado la carne con los afectos y concupiscencias. Si vivimos en el Espíritu, andemos también en el Espíritu.",
    ver: "Pablo no ofrece un cartel de virtudes para que el yo se mida y se apruebe. Ofrece un fruto. Singular. Nueve nombres, un solo árbol. El que se lleva «amor, gozo, paz» como lema de clima interior aún no ha visto el 16: andad en el Espíritu, y no satisfagáis los deseos de la carne. El que se lleva la lista y deja la crucifixión del 24 ha fabricado un carácter sin cruz.",
  },
  {
    slug: "2-corintios-12",
    kicker: "Gracia",
    ref: "2 Corintios 12:1–10",
    title: "Bástate mi gracia",
    passage: "Y porque la grandeza de las revelaciones no me levante descomedidamente, me es dado un aguijón en mi carne, un mensajero de Satanás que me abofetee, para que no me enaltezca sobremanera. Por lo cual tres veces he rogado al Señor, que se quite de mí. Y me ha dicho: Bástate mi gracia; porque mi potencia en la flaqueza se perfecciona. Por tanto, de buena gana me gloriaré más bien en mis flaquezas, porque habite en mí la potencia de Cristo.",
    voz: "Bástate mi gracia; porque mi potencia en la flaqueza se perfecciona.",
    ver: "Pablo no exhibe un viaje al tercer cielo para que Corinto aplaudiera. Exhibe un aguijón que no se quita. Tres veces rogó. La respuesta no es la extracción, sino la palabra. Bástate mi gracia. El que se lleva el 9 como consuelo genérico aún no ha visto el 7: para que no me enaltezca. El que se lleva el aguijón como romance de sufrimiento aún no ha oído el poder que se perfecciona donde ya no se puede.",
  },
  {
    slug: "viajes-de-pablo",
    kicker: "Misión",
    ref: "Hechos 13–14",
    title: "Los viajes de Pablo",
    passage: "Y ellos, enviados así por el Espíritu Santo, descendieron á Seleucia; y de allí navegaron á Cipro. Y llegados á Salamina, anunciaban la palabra de Dios en las sinagogas de los Judíos: y tenían también á Juan en el ministerio. Confirmando los ánimos de los discípulos, exhortándoles á que permaneciesen en la fe, y que es menester que por muchas tribulaciones entremos en el reino de Dios.",
    ver: "Lucas no escribe un itinerario de turismo apostólico. Escribe un envío. El Espíritu Santo habla en Antioquía; apartan a Bernabé y a Saulo; les imponen las manos; bajan a Seleucia. El que se lleva «viajes de Pablo» como mapa de éxito aún no ha oído 14:22: es necesario que a través de muchas tribulaciones entremos en el reino de Dios. El que se lleva Chipre y deja Listra ha fabricado una misión sin piedras.",
  },
  {
    slug: "1-corintios-1-2",
    kicker: "Retórica",
    ref: "1 Corintios 1–2",
    title: "La retórica de Pablo",
    passage: "Porque no me envió Cristo á bautizar, sino á predicar el evangelio: no en sabiduría de palabras, porque no sea hecha vana la cruz de Cristo. Porque la palabra de la cruz es locura á los que se pierden; mas á los que se salvan, es á saber, á nosotros, es potencia de Dios. Y ni mi palabra ni mi predicación fué con palabras persuasivas de humana sabiduría, mas con demostración del Espíritu y de poder.",
    ver: "Pablo no desprecia las palabras. Desprecia la sabiduría de palabras que deja vana la cruz. Corinto se partía por nombres —Pablo, Apolos, Cefas, Cristo— y medía el púlpito por el brillo. El que se lleva «no con sabiduría» como disculpa de la ignorancia aún no ha oído el 2:6: hablamos sabiduría entre los que han alcanzado madurez. El que se lleva la retórica como adorno aún no ha oído el 1:17: para que no se haga vana la cruz.",
  },
  {
    slug: "teologia-de-la-cruz",
    kicker: "Cruz",
    ref: "1 Corintios 1:18–31",
    title: "Teología de la cruz",
    passage: "Porque la palabra de la cruz es locura á los que se pierden; mas á los que se salvan, es á saber, á nosotros, es potencia de Dios. Porque por no haber el mundo conocido en la sabiduría de Dios á Dios por sabiduría, agradó á Dios salvar á los creyentes por la locura de la predicación. Antes lo necio del mundo escogió Dios, para avergonzar á los sabios.",
    ver: "Pablo no ofrece una «teología de la cruz» como lema de escuela. Ofrece un tajo. La palabra de la cruz parte a la humanidad: locura para los que se pierden, poder para los que se salvan. El que se lleva el 18 como consigna contra los intelectuales aún no ha visto el 21: el mundo no conoció a Dios mediante la sabiduría. El que se lleva lo necio como orgullo de ignorancia aún no ha visto el 30: Cristo nos ha sido hecho sabiduría, justificación, santificación y redención.",
  },
  {
    slug: "teologia-de-la-gloria",
    kicker: "Gloria",
    ref: "1 Corintios 4:8–13",
    title: "Teología de la gloria",
    passage: "Ya estáis hartos, ya estáis ricos, sin nosotros reináis; y ojalá reinéis, para que nosotros reinemos también juntamente con vosotros. Porque á lo que pienso, Dios nos ha mostrado á nosotros los apóstoles por los postreros, como á sentenciados á muerte: porque somos hechos espectáculo al mundo, y á los ángeles, y á los hombres.",
    ver: "Pablo no escribe un tratado contra el espectáculo: lo desnuda. Corinto ya se saciaba, ya era rica, ya reinaba —sin los apóstoles—. El que se lleva «teología de la gloria» como lema de combate aún no ha visto el 9: Dios exhibió a los apóstoles como últimos, como a sentenciados a muerte. El que se lleva el espectáculo como pecadillo de escenario aún no ha oído que el reinado adelantado es otra cruz: una cruz que no padece.",
  },
  {
    slug: "romanos-8-17",
    kicker: "Herencia",
    ref: "Romanos 8:17",
    title: "Herederos y padecimiento",
    passage: "Y si hijos, también herederos; herederos de Dios, y coherederos de Cristo; si empero padecemos juntamente con él, para que juntamente con él seamos glorificados. Porque tengo por cierto que lo que en este tiempo se padece, no es de comparar con la gloria venidera que en nosotros ha de ser manifestada.",
    ver: "Pablo no ofrece una herencia sin cruz. Si hijos, también herederos; coherederos con Cristo, si es que padecemos juntamente con él. El que se lleva «hijos» como lema de identidad aún no ha oído el εἴπερ: si es que. El que se lleva el padecimiento como romanticismo aún no ha oído el 18: las aflicciones no se comparan con la gloria que ha de manifestarse. El capítulo gime. El heredero también.",
  }
];

export function studyBySlug(slug: string) {
  return aulas.find((s) => s.slug === slug);
}
