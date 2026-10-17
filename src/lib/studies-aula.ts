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
    passage: "Simón Pedro, siervo y apóstol de Jesucristo, a los que habéis alcanzado, por la justicia de nuestro Dios y Salvador Jesucristo, una fe igualmente preciosa que la nuestra: Gracia y paz os sean multiplicadas, en el conocimiento de Dios y de nuestro Señor Jesús. Como todas las cosas que pertenecen a la vida y a la piedad nos han sido dadas por su divino poder, mediante el conocimiento de aquel que nos llamó por su gloria y excelencia, por medio de las cuales nos ha dado preciosas y grandísimas promesas, para que por ellas llegaseis a ser participantes de la naturaleza divina, habiendo huido de la corrupción que hay en el mundo a causa de la concupiscencia; vosotros también, poniendo toda diligencia por esto mismo, añadid a vuestra fe virtud; a la virtud, conocimiento; al conocimiento, dominio propio; al dominio propio, paciencia; a la paciencia, piedad; a la piedad, afecto fraternal; y al afecto fraternal, amor. Porque si estas cosas están en vosotros, y abundan, no os dejarán estar ociosos ni sin fruto en cuanto al conocimiento de nuestro Señor Jesucristo. Pero el que no tiene estas cosas tiene la vista muy corta; es ciego, habiendo olvidado la purificación de sus antiguos pecados. Por lo cual, hermanos, tanto más procurad hacer firme vuestra vocación y elección; porque haciendo estas cosas, no caeréis jamás. Porque de esta manera os será otorgada amplia y generosa entrada en el reino eterno de nuestro Señor y Salvador Jesucristo.",
    ver: "Pedro pide añadir a la fe, a costa propia, una cadena de siete eslabones. No es un cartel de virtudes. Es lo que el capítulo 2 va a exigir cuando desenmascare a quienes prometen libertad siendo esclavos de corrupción. Dios dio todo lo que concierne a la vida y a la piedad; ahora se suministra, se costea, se añade. El que no añade no es humilde. Es ciego, y se olvidó de la purificación de sus antiguos pecados. La fe que no se ejercita se vuelve estéril.",
  },
  {
    slug: "filipenses-2",
    kicker: "Himno",
    ref: "Filipenses 2:5–11",
    title: "El himno del Siervo",
    passage: "Haya, pues, en vosotros este sentir que hubo también en Cristo Jesús, el cual, siendo en forma de Dios, no estimó el ser igual a Dios como cosa a que aferrarse, sino que se despojó a sí mismo, tomando forma de siervo, hecho semejante a los hombres; y estando en la condición de hombre, se humilló a sí mismo, haciéndose obediente hasta la muerte, y muerte de cruz. Por lo cual Dios también le exaltó hasta lo sumo, y le dio un nombre que es sobre todo nombre, para que en el nombre de Jesús se doble toda rodilla de los que están en los cielos, y en la tierra, y debajo de la tierra; y toda lengua confiese que Jesucristo es el Señor, para gloria de Dios Padre.",
    ver: "El himno humilla al yo antes de exaltarlo. Forma de siervo, muerte de cruz, el Nombre sobre todo nombre. Filipenses 2 no se escribió para que el seminario aplaudiera la kénosis. Se escribió para que Evodia y Síntique dejaran de pelearse el primer asiento. El credo está metido en la ética. Quien canta 2:9–11 sin 2:7 no ha leído: ha cantado.",
  },
  {
    slug: "santiago-1",
    kicker: "Espejo",
    ref: "Santiago 1:19–27",
    title: "Pronto para oír",
    passage: "Por esto, mis amados hermanos, todo hombre sea pronto para oír, tardo para hablar, tardo para airarse; porque la ira del hombre no obra la justicia de Dios. Por lo cual, desechando toda inmundicia y abundancia de malicia, recibid con mansedumbre la palabra implantada, la cual puede salvar vuestras almas. Pero sed hacedores de la palabra, y no tan solamente oidores, engañándoos a vosotros mismos. Porque si alguno es oidor de la palabra pero no hacedor de ella, éste es semejante al hombre que considera en un espejo su rostro natural. Porque él se considera a sí mismo, y se va, y luego olvida cómo era. Mas el que mira atentamente en la perfecta ley, la de la libertad, y persevera en ella, no siendo oidor olvidadizo, sino hacedor de la obra, éste será bienaventurado en lo que hace. Si alguno se cree religioso entre vosotros, y no refrena su lengua, sino que engaña su corazón, la religión del tal es vana. La religión pura y sin mácula delante de Dios el Padre es esta: Visitar a los huérfanos y a las viudas en sus tribulaciones, y guardarse sin mancha del mundo.",
    ver: "El oyente que se mira y se va. Oír y no hacer es engaño de sí, no un retraso inocente. El altar no es el sentimiento de haber oído, ni la liturgia de un estudio bien anotado. Es el hombre que permanece en la ley perfecta, la de la libertad, y es hacedor de la obra. El que cierra el cuaderno sin acto ha vuelto a mirarse y se ha ido. Esta escuela, si no decide, es el hombre del espejo.",
  },
  {
    slug: "marcos-7",
    kicker: "Laboratorio IV",
    ref: "Marcos 7:31–37",
    title: "Éfata",
    passage: "Y levantando los ojos al cielo, gimió, y le dijo: Efata, es decir: Sé abierto. Al momento fueron abiertos sus oídos, y se desató la ligadura de su lengua, y hablaba bien.",
    voz: "Efata, es decir: Sé abierto.",
    ver: "El párrafo entero, no el vocablo extraído como piedra preciosa. Lo toman aparte. Dedos en los oídos. Saliva. Gemido al cielo. Un mandato. Al momento: oídos abiertos, lengua desatada, hablaba bien. El oído precede a la lengua. El versículo 36 estropea el final feliz: les mandó que no lo dijesen, y cuanto más les mandaba, tanto más lo divulgaban. Se puede recitar Isaías y desobedecer a Jesús en la misma respiración. El sordo no es el agente. El agente queda fuera de la morfología.",
  },
  {
    slug: "apocalipsis-5",
    kicker: "Laboratorio VI",
    ref: "Apocalipsis 5",
    title: "El Cordero y el rollo",
    passage: "Y uno de los ancianos me dijo: No llores. He aquí que el León de la tribu de Judá, la raíz de David, ha vencido para abrir el libro y desatar sus siete sellos. Y miré, y vi que en medio del trono y de los cuatro seres vivientes, y en medio de los ancianos, estaba en pie un Cordero como inmolado, que tenía siete cuernos, y siete ojos, los cuales son los siete espíritus de Dios enviados por toda la tierra. Y vino, y tomó el libro de la mano derecha del que estaba sentado en el trono.",
    ver: "Juan llora porque nadie es digno. El anciano manda: no llores. Se anuncia un León. Se ve un Cordero. En pie, como inmolado. Toma el libro. La creación entera canta. El observador registra la paradoja y no la resuelve antes de tiempo: el que vence es el que fue degollado. El cántico nuevo declara el porqué: porque fuiste inmolado, y con tu sangre nos has redimido para Dios. Quien lea el 5 como novela de rapto ha cambiado de género.",
  },
  {
    slug: "1-corintios-12-14",
    kicker: "Dones",
    ref: "1 Corintios 12–14",
    title: "Los dones del Espíritu",
    passage: "Porque a éste es dada por el Espíritu palabra de sabiduría; a otro, palabra de ciencia según el mismo Espíritu; a otro, fe por el mismo Espíritu; y a otro, dones de sanidades por el mismo Espíritu. A otro, el hacer milagros; a otro, profecía; a otro, discernimiento de espíritus; a otro, diversos géneros de lenguas; y a otro, interpretación de lenguas. Pero todas estas cosas las hace uno y el mismo Espíritu, repartiendo a cada uno en particular como él quiere. … Ahora bien, hay diversidad de dones, pero el Espíritu es el mismo. … Porque por un solo Espíritu fuimos todos bautizados en un cuerpo, sean judíos o griegos, sean esclavos o libres; y a todos se nos dio a beber de un mismo Espíritu.",
    ver: "Pablo no abre un catálogo de poderes para que Corinto se exhiba. Abre un cuerpo. Hay diversidad de dones, y un solo Espíritu; diversidad de ministerios, y un solo Señor; diversidad de operaciones, y un solo Dios. El que se lleva un don como trofeo aún no ha oído el 12: el mismo Espíritu reparte como él quiere. El que se lleva el amor del 13 como poema de boda aún no ha oído el 14: procurad los dones, y que todo se haga para edificación, con orden.",
  },
  {
    slug: "galatas-5",
    kicker: "Fruto",
    ref: "Gálatas 5:22–23",
    title: "El fruto del Espíritu",
    passage: "Mas el fruto del Espíritu es amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre, templanza; contra tales cosas no hay ley. Pero los que son de Cristo han crucificado la carne con sus pasiones y deseos. Si vivimos por el Espíritu, andemos también por el Espíritu.",
    ver: "Pablo no ofrece un cartel de virtudes para que el yo se mida y se apruebe. Ofrece un fruto. Singular. Nueve nombres, un solo árbol. El que se lleva «amor, gozo, paz» como lema de clima interior aún no ha visto el 16: andad en el Espíritu, y no satisfagáis los deseos de la carne. El que se lleva la lista y deja la crucifixión del 24 ha fabricado un carácter sin cruz.",
  },
  {
    slug: "2-corintios-12",
    kicker: "Gracia",
    ref: "2 Corintios 12:1–10",
    title: "Bástate mi gracia",
    passage: "Y para que la grandeza de las revelaciones no me exaltase desmedidamente, me fue dado un aguijón en mi carne, un mensajero de Satanás que me abofetee, para que no me enaltezca sobremanera; respecto a lo cual tres veces he rogado al Señor, que lo quite de mí. Y me ha dicho: Bástate mi gracia; porque mi poder se perfecciona en la debilidad. Por tanto, de buena gana me gloriaré más bien en mis debilidades, para que repose sobre mí el poder de Cristo.",
    voz: "Bástate mi gracia; porque mi poder se perfecciona en la debilidad.",
    ver: "Pablo no exhibe un viaje al tercer cielo para que Corinto aplaudiera. Exhibe un aguijón que no se quita. Tres veces rogó. La respuesta no es la extracción, sino la palabra. Bástate mi gracia. El que se lleva el 9 como consuelo genérico aún no ha visto el 7: para que no me enaltezca. El que se lleva el aguijón como romance de sufrimiento aún no ha oído el poder que se perfecciona donde ya no se puede.",
  },
  {
    slug: "viajes-de-pablo",
    kicker: "Misión",
    ref: "Hechos 13–14",
    title: "Los viajes de Pablo",
    passage: "Ellos, entonces, enviados por el Espíritu Santo, descendieron a Seleucia, y de allí navegaron a Chipre. Y llegados a Salamina, anunciaban la palabra de Dios en las sinagogas de los judíos. Tenían también a Juan de ayudante. … confirmando los ánimos de los discípulos, exhortándoles a que permaneciesen en la fe, y diciéndoles: Es necesario que a través de muchas tribulaciones entremos en el reino de Dios.",
    ver: "Lucas no escribe un itinerario de turismo apostólico. Escribe un envío. El Espíritu Santo habla en Antioquía; apartan a Bernabé y a Saulo; les imponen las manos; bajan a Seleucia. El que se lleva «viajes de Pablo» como mapa de éxito aún no ha oído 14:22: es necesario que a través de muchas tribulaciones entremos en el reino de Dios. El que se lleva Chipre y deja Listra ha fabricado una misión sin piedras.",
  },
  {
    slug: "1-corintios-1-2",
    kicker: "Retórica",
    ref: "1 Corintios 1–2",
    title: "La retórica de Pablo",
    passage: "Pues no me envió Cristo a bautizar, sino a predicar el evangelio; no con sabiduría de palabras, para que no se haga vana la cruz de Cristo. Porque la palabra de la cruz es locura a los que se pierden; pero a los que se salvan, esto es, a nosotros, es poder de Dios. … y ni mi palabra ni mi predicación fue con palabras persuasivas de humana sabiduría, sino con demostración del Espíritu y de poder,",
    ver: "Pablo no desprecia las palabras. Desprecia la sabiduría de palabras que deja vana la cruz. Corinto se partía por nombres —Pablo, Apolos, Cefas, Cristo— y medía el púlpito por el brillo. El que se lleva «no con sabiduría» como disculpa de la ignorancia aún no ha oído el 2:6: hablamos sabiduría entre los que han alcanzado madurez. El que se lleva la retórica como adorno aún no ha oído el 1:17: para que no se haga vana la cruz.",
  },
  {
    slug: "teologia-de-la-cruz",
    kicker: "Cruz",
    ref: "1 Corintios 1:18–31",
    title: "Teología de la cruz",
    passage: "Porque la palabra de la cruz es locura a los que se pierden; pero a los que se salvan, esto es, a nosotros, es poder de Dios. … Pues ya que en la sabiduría de Dios, el mundo no conoció a Dios mediante la sabiduría, agradó a Dios salvar a los creyentes por la locura de la predicación. … sino que lo necio del mundo escogió Dios, para avergonzar a los sabios; y lo débil del mundo escogió Dios, para avergonzar a lo fuerte;",
    ver: "Pablo no ofrece una «teología de la cruz» como lema de escuela. Ofrece un tajo. La palabra de la cruz parte a la humanidad: locura para los que se pierden, poder para los que se salvan. El que se lleva el 18 como consigna contra los intelectuales aún no ha visto el 21: el mundo no conoció a Dios mediante la sabiduría. El que se lleva lo necio como orgullo de ignorancia aún no ha visto el 30: Cristo nos ha sido hecho sabiduría, justificación, santificación y redención.",
  },
  {
    slug: "teologia-de-la-gloria",
    kicker: "Gloria",
    ref: "1 Corintios 4:8–13",
    title: "Teología de la gloria",
    passage: "Ya estáis saciados, ya estáis ricos, sin nosotros reináis. ¡Y ojalá reinaseis, para que nosotros reinásemos también juntamente con vosotros! Porque según pienso, Dios nos ha exhibido a nosotros los apóstoles como postreros, como a sentenciados a muerte; pues hemos llegado a ser espectáculo al mundo, a los ángeles y a los hombres.",
    ver: "Pablo no escribe un tratado contra el espectáculo: lo desnuda. Corinto ya se saciaba, ya era rica, ya reinaba —sin los apóstoles—. El que se lleva «teología de la gloria» como lema de combate aún no ha visto el 9: Dios exhibió a los apóstoles como últimos, como a sentenciados a muerte. El que se lleva el espectáculo como pecadillo de escenario aún no ha oído que el reinado adelantado es otra cruz: una cruz que no padece.",
  },
  {
    slug: "romanos-8-17",
    kicker: "Herencia",
    ref: "Romanos 8:17",
    title: "Herederos y padecimiento",
    passage: "Y si hijos, también herederos; herederos de Dios y coherederos con Cristo, si es que padecemos juntamente con él, para que juntamente con él seamos glorificados. Pues tengo por cierto que las aflicciones del tiempo presente no son comparables con la gloria venidera que en nosotros ha de manifestarse.",
    ver: "Pablo no ofrece una herencia sin cruz. Si hijos, también herederos; coherederos con Cristo, si es que padecemos juntamente con él. El que se lleva «hijos» como lema de identidad aún no ha oído el εἴπερ: si es que. El que se lleva el padecimiento como romanticismo aún no ha oído el 18: las aflicciones no se comparan con la gloria que ha de manifestarse. El capítulo gime. El heredero también.",
  }
];

export function studyBySlug(slug: string) {
  return aulas.find((s) => s.slug === slug);
}
