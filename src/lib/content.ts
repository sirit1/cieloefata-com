import { AMAZON_AUTHOR, whatsappColeccion } from "@/lib/amazon";

export const school = {
  name: "Cielo Efata",
  tagline: "La Escritura manda sobre el comentario.",
  confession: "Confesión, conversión y firmeza",
  lead: "La Escritura tiene la última palabra. Todo lo demás —el comentario, el método, el predicador de moda— va detrás, con humildad.",
  leadRef: "2 Ti. 3:16–17",
  colophon:
    "Escuela de estudio bíblico dirigida por Alejandro Sirit. Nueve libros y el método V.E.R.D.A.D. para estudiar el capítulo entero, sin recortar, adornar ni sustituir el texto.",
  colophonRef: "2 Ti. 3:16–17 · 2 Ti. 2:15",
  director: "Alejandro Sirit",
  welcome:
    "Cielo Efata es una escuela de estudio bíblico, y aquí el capítulo se abre entero antes de que nadie lo comente. Aquí no se lee un versículo suelto para animarse cuando el siglo aprieta. Se lee un pasaje completo, se estudia con la cadena, y se sale con un solo paso para esta semana, dicho a alguien que pueda preguntar mañana.",
  welcomeRef: "Neh. 8:8 · 2 Ti. 2:15",
};

export const adquisicion = {
  // Primary author hub (merge in progress).
  // Fallback during the merge: https://www.amazon.com/Alejandro-Sirit/e/B0GWKX4RCV
  amazon: AMAZON_AUTHOR,
  whatsapp: whatsappColeccion(),
};

export const CORPUS = {
  title: "Los libros",
  gate: "Nueve libros de Alejandro Sirit, publicados por Editorial Cielo Efata. No son manuales de autoayuda: son libros para leer la Escritura entera, someter el pensamiento a lo que Dios dice y dejar atrás la religión de consumo.",
  efata:
    "En Éfata, Alejandro Sirit presenta el método V.E.R.D.A.D. —Ver, Entorno, Revelación, Doctrina, Argumento y Decisión—, una manera de leer que cura la versiculitis y devuelve cada versículo a su capítulo. Es el método con el que se estudia en esta escuela.",
  line: "Te sugerimos leerlos en este orden, que no es el de publicación: I Pórtico a la Escritura, que recorre los sesenta y seis libros como una sola historia; II Éfata, donde se aprende a leer el capítulo entero; III El Siervo, no tú; IV Bástate; V Cuando el cielo se cae; VI El altar del espejo; VII De una misma boca; VIII Diákrisis, sobre el discernimiento; y IX Nunca tocarás mi fe, un testimonio que cierra la serie. Cada libro se lee junto al capítulo de la Biblia en que se apoya.",
  refs: "Mr. 7:34 · 2 Ti. 2:15 · 2 Co. 12:9",
};

export const bible = {
  title: "Qué es la Biblia",
  lead: "Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia. No es una antología de genios religiosos ni un almanaque de consuelos, sino Palabra de Dios, y se lee como se oye a quien manda.",
  leadRef: "2 Ti. 3:16",
  facts: [
    {
      k: "66 libros",
      v: "Treinta y nueve en el Antiguo Testamento. Veintisiete en el Nuevo. Un solo testimonio: la ley, los profetas y los salmos hablan de Cristo, y el que los recorta para quedarse con una idea ya ha elegido otro canon.",
      ref: "Lc. 24:44–45",
    },
    {
      k: "Cerca de cuarenta autores",
      v: "Reyes, profetas, pastores, un médico, un cobrador de impuestos. Cerca de quince siglos. Nunca la profecía fue traída por voluntad humana, sino que hombres hablaron de parte de Dios, siendo inspirados por el Espíritu Santo.",
      ref: "2 P. 1:21",
    },
    {
      k: "Tres lenguas",
      v: "Hebreo en casi todo el Antiguo Testamento, arameo en algunas partes de Daniel y Esdras, y griego en el Nuevo. El diccionario sirve al pasaje; no lo reemplaza. Quien abre el léxico antes de leer el capítulo deja que una definición hable en lugar de Dios.",
      ref: "Dn. 2:4",
    },
    {
      k: "Se lee el pasaje",
      v: "Las divisiones de capítulo y versículo llegaron siglos después. Útiles para citar. El eunuco no leyó un recorte: leyó a Isaías hasta que Felipe le abrió el texto, y el texto le abrió a Cristo.",
      ref: "Hch. 8:30–35",
    },
    {
      k: "Un relato",
      v: "Creación, caída, promesa, redención, consumación. Y comenzando desde Moisés, y siguiendo por todos los profetas, les declaraba en todas las Escrituras lo que de él decían. El hilo no es una idea; es una Persona.",
      ref: "Lc. 24:27",
    },
    {
      k: "Autoridad",
      v: "Hombres hablaron de parte de Dios, siendo inspirados por el Espíritu Santo. La autoridad no es el lector ni el predicador de moda, sino el texto. El comentario se sienta atrás.",
      ref: "2 P. 1:21 · 2 Ti. 3:16",
    },
  ],
  close:
    "Siete estantes abren el mapa del canon. No hay que saberlos todos para empezar. Hay que saber que esto no es un libro de frases, sino Escritura, y se estudia hasta que pida una obediencia.",
  closeRef: "Jos. 1:8 · Sal. 1:2",
};


export const canonDoors = [
  {
    name: "Ley",
    span: "Génesis — Deuteronomio",
    author: "Moisés",
    line: "Dios crea, promete, liberta y da la ley. El que dijo «sea la luz» es el Verbo que era en el principio, y el cordero de la noche de Egipto ya espera al que ha de ser inmolado.",
    link: "Gn. 1:3 habla con Jn. 1:1–3. El cordero de Éx. 12 espera al de Ap. 5. La simiente de Gn. 3:15 no es un mito de origen, sino la primera promesa.",
    ref: "Lc. 24:44",
  },
  {
    name: "Historia",
    span: "Josué — Ester",
    author: "Profetas y escribas",
    line: "El pueblo en la tierra: fidelidad y caída, jueces y reyes, exilio y vuelta. No faltó ninguna de las buenas promesas de Jehová, aunque el pueblo sí faltó.",
    link: "Jos. 21:45 sostiene a 2 Co. 1:20: las promesas son sí en Cristo. El trono de David no se extingue; el Mesías lo hereda.",
    ref: "Jos. 21:45",
  },
  {
    name: "Escritos",
    span: "Job — Cantar",
    author: "David, Salomón, y otros",
    line: "Lamento, sabiduría, alabanza, temor de Jehová. El bienaventurado medita en la ley de Jehová de día y de noche, y el que se siente abandonado clama a Dios antes de cantar que Jehová es su pastor.",
    link: "Sal. 22 es la cruz antes de la cruz; el Señor la toma en Mt. 27:46. El «yo» del salmo no es autobiografía del lector.",
    ref: "Sal. 1:2",
  },
  {
    name: "Profetas",
    span: "Isaías — Malaquías",
    author: "Isaías, Jeremías, los doce",
    line: "Juicio y consuelo; el Siervo y el día del Señor. El Siervo herido no es un poema de resiliencia, ni el día del Señor un almanaque de pánico.",
    link: "Is. 53:5 es 1 P. 2:24. El que no pecó carga lo que no es suyo. Hab. 2:4 espera a Romanos.",
    ref: "Is. 53:5",
  },
  {
    name: "Evangelios",
    span: "Mateo — Juan",
    author: "Mateo, Marcos, Lucas, Juan",
    line: "Jesucristo: vida, muerte, resurrección. Cuatro testigos, un Señor. Jesús llama a arrepentirse y creer, y el Verbo hecho carne habita entre nosotros.",
    link: "Jn. 20:31 da el fin del libro: para que creáis, y creyendo tengáis vida. Mr. 7:34 abre el oído. Lc. 1:1–4 investiga para que Teófilo conozca la verdad.",
    ref: "Jn. 20:31",
  },
  {
    name: "Iglesia",
    span: "Hechos — Judas",
    author: "Lucas, Pablo, Santiago, Pedro, Juan, Judas",
    line: "El Espíritu, las cartas, el permanecer. La iglesia persevera en la doctrina de los apóstoles, y Santiago advierte que la fe sin obras está muerta.",
    link: "Hch. 2:42 es el ritmo. Ro. 1:16 es el evangelio que no se avergüenza. Stg. 1:22 impide que el estudio se quede en la cabeza.",
    ref: "Hch. 2:42",
  },
  {
    name: "Consumación",
    span: "Apocalipsis",
    author: "Juan",
    line: "El León de Judá es el Cordero inmolado. Cielo nuevo, tierra nueva. El que abre el libro es el que fue degollado, y el llanto de Juan termina cuando el rollo cambia de manos.",
    link: "Ap. 5:5–6: el León de Judá es el Cordero inmolado. Ap. 21:5: he aquí, yo hago nuevas todas las cosas. El sello de esta casa sale de este capítulo.",
    ref: "Ap. 5:5–6",
  },
] as const;

export const ROMANO = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"] as const;

export type Obra = {
  n: number;
  lectura: number;
  slug: string;
  title: string;
  /** Visible under the H1. Does not replace `pasaje` (capítulo ancla / LeerCapitulo). */
  subtitulo: string;
  seoTitle: string;
  seoDescription: string;
  line: string;
  thesis: string;
  sample: string;
  ref: string;
  pasaje: string;
  studySlug: string;
  tratadoSlug?: string;
  studyNote?: string;
  crisol?: boolean;
  asinEbook?: string;
  isbnPrint?: string;
  /** Published Amazon title when it differs from the house reading-order title. Never an invented ASIN. */
  amazonTitle?: string;
  /** Muestra en la ficha el enlace «Estudia cada capítulo de este libro con IA en RevelatiO» (revelatio.app/libros/<slug>). */
  revelatio?: boolean;
  /** Slug del libro en revelatio.app/libros y del QR cuando difiere del slug de la ficha (libro renombrado). */
  revelatioSlug?: string;
  /** Edición nueva aún no publicada en Amazon: la ficha no muestra botón ni búsqueda de Amazon. */
  sinAmazon?: boolean;
};

/** Enlace de la ficha del libro a su libro en RevelatiO, con utm_campaign = slug. */
export function urlRevelatioLibro(slug: string) {
  return `https://revelatio.app/libros/${slug}?utm_source=web&utm_medium=cta&utm_campaign=${slug}`;
}

/** QR del mismo libro (sin UTM), copiado de /workspace/qr a public/qr. */
export function qrRevelatioPath(slug: string) {
  return `/qr/qr-${slug}.svg`;
}

export type AulaKind = "estudio" | "tratado";

/** Aulas that close with a line to a libro. Keyed by kind so `isaias-53` (estudio y tratado) no se confunde. */
const OBRAS_DESDE_AULA: Record<`${AulaKind}:${string}`, readonly string[]> = {
  "estudio:marcos-7": ["efata"],
  "tratado:el-texto-manda": ["efata"],
  "tratado:isaias-53": ["el-siervo-no-tu"],
  "estudio:teologia-de-la-cruz": ["el-siervo-no-tu"],
  "estudio:2-corintios-12": ["bastate-mi-gracia"],
  "tratado:todo-lo-puedo": ["bastate-mi-gracia"],
  "tratado:la-muerte-y-la-vida": ["cuando-el-cielo-se-cae"],
  "tratado:para-bien": ["cuando-el-cielo-se-cae"],
  "estudio:santiago-1": ["el-altar-del-espejo", "de-una-misma-boca"],
  "tratado:el-crisol-de-lo-oido": ["el-altar-del-espejo"],
};

/** Front covers from Drive KDP packs under 00_Cielo_Efata/01_LIBROS, file 04_portada.jpg. */
export function tapaPath(slug: string) {
  return `/TAPAS/${slug}.jpg`;
}

export const obras: Obra[] = [
  {
    n: 7,
    lectura: 1,
    slug: "portico-a-la-escritura",
    title: "Pórtico a la Escritura",
    subtitulo: "Manual permanente a los 66 libros de la Biblia",
    seoTitle: "Pórtico a la Escritura: los 66 libros de la Biblia | Alejandro Sirit",
    seoDescription:
      "Un manual para leer los sesenta y seis libros de la Biblia como una sola historia: de dónde viene cada libro, qué dice entero y hacia quién apunta.",
    line: "La historia es una. Empieza con un Dios que habla, y las cosas son; sigue por un pueblo que olvida y es guardado, y llega a un Hijo que camina, muere y resucita. Este libro es la puerta de entrada: recorre los sesenta y seis libros para que no te quedes con versículos sueltos.",
    thesis:
      "Pórtico a la Escritura acompaña al lector por los sesenta y seis libros de la Biblia como por una sola casa: de dónde viene cada libro, qué dice entero y hacia quién apunta. No es un plan de un año ni un diario. Es un pórtico, para el creyente que quiere leer la Biblia entera sin perderse, para el maestro que enseña en la iglesia y para quien sospecha que ha estado coleccionando versículos sin oír la historia que los sostiene.",
    sample:
      "La historia es una. Empieza con un Dios que habla, y las cosas son. Sigue por un pueblo que olvida y es guardado, y llega a un Hijo que camina, muere y resucita.",
    ref: "Lc. 24:27",
    pasaje: "Lucas 24",
    studySlug: "",
    sinAmazon: true,
  },
  {
    n: 5,
    lectura: 2,
    slug: "efata",
    revelatio: true,
    title: "Éfata: La Escritura Abierta",
    subtitulo: "Deja de coleccionar versículos. Aprende a oír a Dios.",
    seoTitle: "Éfata: La Escritura Abierta, Marcos 7 | Alejandro Sirit",
    seoDescription:
      "Marcos 7:31–37 en cuarenta estaciones: el sordo de Decápolis, traído por otros, abierto por Cristo. Deja de coleccionar versículos y aprende a oír a Dios.",
    line: "En la Decápolis le trajeron a Jesús un sordo y tartamudo. No vino él. El Señor lo apartó de la gente, miró al cielo, gimió y le dijo: Éfata. Este libro recorre esa hora sin prisa y no convierte la palabra de Jesús en un lema: quien lo termina no se lleva solo un método, sino que queda bajo la Palabra.",
    thesis:
      "No es un diario ni un plan de semanas. Es una sola historia en cuarenta estaciones y cinco partes: «Lo traen», «Éfata», «A quién oyó», «La casa» y «Permanece». El hombre que Marcos no nombra no camina hacia Jesús por su virtud; otros lo ponen delante. La palabra la dice el Hijo, y al momento se abre el oído. Pero el oído abierto puede volver a cerrarse, y por eso el camino sigue: el Padre que habló desde el principio, el Hijo de quien eran esas manos, el Espíritu que no se confunde con una técnica, y el oficio de oír la Escritura entera sin arrancarle una frase. Al final incluye una guía para volver a leerlo.",
    sample:
      "No es un diario ni un plan de semanas. Es una sola historia en cuarenta estaciones. El hombre que Marcos no nombra no camina hacia Jesús por su virtud; otros lo ponen delante. La palabra la dice el Hijo, y al momento se abre el oído.",
    ref: "Mr. 7:34–35",
    pasaje: "Marcos 7",
    studySlug: "marcos-7",
    sinAmazon: true,
  },
  {
    n: 4,
    lectura: 3,
    slug: "el-siervo-no-tu",
    revelatio: true,
    title: "El Siervo, no tú",
    subtitulo: "Isaías 52:13 – 53:12",
    seoTitle: "El Siervo, no tú: Isaías 53:5 | Alejandro Sirit",
    seoDescription:
      "Isaías 53:5 y el Siervo herido por nuestras rebeliones. Alejandro Sirit presenta la cruz como sacrificio sustitutivo, no como autoexpiación.",
    line: "El Gólgota no es un emblema de resiliencia ni un «código» para imitar la cruz como marca personal. Tiene lugar, gobernador, acusación y sangre. Isaías vio al Siervo herido por nuestras rebeliones. Este libro rechaza la autoexpiación piadosa: el justo muere por los injustos, y el lector no ocupa el lugar del Siervo.",
    thesis:
      "El Gólgota no es un emblema de resiliencia ni un «código» para imitar la cruz como marca personal. Tiene lugar, gobernador, acusación y sangre. El Siervo fue herido por nuestras rebeliones; Jehová cargó en él el pecado de todos nosotros. Este libro rechaza la autoexpiación piadosa y la idea de una cruz que solo sirve de ejemplo, sin sustitución. El justo muere por los injustos, para llevarnos a Dios. Quien predica un amor que no lleva rebelión ha cambiado de Siervo, y el lector no se sube al versículo como si fuera él.",
    sample:
      "El Gólgota no es un emblema de resiliencia ni un «código» para imitar la cruz como marca personal. Tiene lugar, gobernador, acusación y sangre. El Siervo fue herido por nuestras rebeliones; Jehová cargó en él el pecado de todos nosotros.",
    ref: "Is. 53:5 · 1 P. 3:18",
    pasaje: "Isaías 53",
    studySlug: "isaias-53",
    tratadoSlug: "isaias-53",
    asinEbook: "B0HKQGBYV4",
  },
  {
    n: 6,
    lectura: 4,
    slug: "bastate-mi-gracia",
    revelatio: true,
    title: "Bástate",
    amazonTitle: "Bástate mi gracia",
    subtitulo: "2 Corintios 12:1–10",
    seoTitle: "Bástate mi gracia: 2 Corintios 12:9 | Alejandro Sirit",
    seoDescription:
      "Qué significa «Bástate mi gracia»: Alejandro Sirit lee 2 Corintios 12:9-10, donde la gracia sostiene y el poder de Cristo se perfecciona en la debilidad.",
    line: "«Bástate mi gracia.» El lector recibe la palabra dicha a Pablo en la flaqueza: el poder se perfecciona donde ya no se puede. El aguijón permanece; el Señor también.",
    thesis:
      "A Pablo le fue dicho: bástate mi gracia, porque mi poder se perfecciona en la debilidad. El que ya no puede no es despedido de la casa, sino sostenido. La gracia no es un adorno del fuerte ni un consuelo genérico; es el poder del que aprendió a gloriarse en las flaquezas, para que el poder de Cristo more en él. El aguijón permanece; el Señor también.",
    sample:
      "A Pablo le fue dicho: bástate mi gracia, porque mi poder se perfecciona en la debilidad. El que ya no puede no es despedido de la casa, sino sostenido. La gracia no es un adorno del fuerte ni un consuelo genérico; es el poder del que aprendió a gloriarse en las flaquezas.",
    ref: "2 Co. 12:9",
    pasaje: "2 Corintios 12",
    studySlug: "2-corintios-12",
  },
  {
    n: 3,
    lectura: 5,
    slug: "cuando-el-cielo-se-cae",
    revelatio: true,
    title: "Cuando el cielo se cae",
    subtitulo: "El libro de Job",
    seoTitle: "Cuando el cielo se cae: Job 42:5 | Alejandro Sirit",
    seoDescription:
      "Una lectura de Job 42:5-6 sobre el sufrimiento, el lamento y el encuentro con Dios. Alejandro Sirit no ofrece respuestas rápidas, sino la presencia del Señor.",
    line: "Un libro sobre el lamento, sin fórmulas para que duela menos. Job no recibe un manual: recibe a Dios en medio del dolor.",
    thesis:
      "Hay dolores que no se explican para que duelan menos, y hay teologías que pecan de prisa cuando convierten el valle en un taller de sentido. Job no recibe un manual; recibe a Dios. Por la misericordia de Jehová no hemos sido consumidos. Este libro enseña a llorar sin apostatar, y a no convertir el lamento en un ídolo de la queja. El Pastor no niega el valle de sombra: lo atraviesa junto al que clama.",
    sample:
      "Hay dolores que no se explican para que duelan menos, y hay teologías que pecan de prisa cuando convierten el valle en un taller de sentido. Job no recibe un manual; recibe a Dios. Por la misericordia de Jehová no hemos sido consumidos.",
    ref: "Job 42:5–6 · Lm. 3:22–23",
    pasaje: "Job 42",
    studySlug: "",
    isbnPrint: "9798176466690",
  },
  {
    n: 2,
    lectura: 6,
    slug: "el-altar-del-espejo",
    revelatio: true,
    title: "El altar del espejo",
    subtitulo: "Santiago 1",
    seoTitle: "El altar del espejo: Santiago 1:23-25 | Alejandro Sirit",
    seoDescription:
      "Santiago 1 contado como una sola historia: un hombre delante de un cristal, el culto de sí mismo y el que se queda mirando la ley perfecta de la libertad.",
    line: "Hay un hombre delante de un espejo. Santiago lo puso ahí sin oficio ni nombre, para que el lector no pueda mirarlo como a otro. Este libro acompaña su culto a sí mismo —la fama, el poder, las posesiones, el lugar entre los demás— hasta que el espejo deja de ser altar.",
    thesis:
      "Esto es una historia, no un canto y no un comentario. El principio es un hombre delante de un cristal; entre el principio y el fin hay un culto, el de sí mismo, que toma forma de fama, de poder, de posesiones y de pertenencia. El libro no adelanta el desenlace ni convierte la carta en lema, porque el que oye el fin antes de caminar se lleva la frase y deja al hombre. Santiago entero, desde el saludo a las doce tribus, pone al lector al lado de ese hombre, hasta que deja de mirarse a sí mismo y se vuelve al Señor.",
    sample:
      "Hay un hombre delante de un espejo. Santiago lo puso ahí. No le dio oficio, ni infancia, ni un nombre que pudieras usar para no ser tú el que está mirando. Lo dejó como deja una carta a las doce tribus: un varón, un cristal, un rostro.",
    ref: "Stg. 1:22–25",
    pasaje: "Santiago 1",
    studySlug: "santiago-1",
    tratadoSlug: "el-crisol-de-lo-oido",
    crisol: true,
    sinAmazon: true,
  },
  {
    n: 1,
    lectura: 7,
    slug: "de-una-misma-boca",
    revelatio: false,
    title: "De una misma boca",
    subtitulo: "Santiago 3",
    seoTitle: "De una misma boca: Santiago 3:10 | Alejandro Sirit",
    seoDescription:
      "Santiago 3 como una sola historia: la boca que confesó a Jesús como Señor y el mismo día maldice. La lengua que ningún hombre doma y la fuente nueva.",
    line: "Un hombre sin nombre ha confesado esta mañana con su boca que Jesús es el Señor. Este libro se queda a su lado el resto del día, mientras la misma boca quiere la primera palabra, ofende, arde y descubre que ningún hombre puede domar la lengua.",
    thesis:
      "La confesión de Romanos 10:9 abre la puerta, y Santiago 3 cuenta lo que esa misma boca hace cuando el día avanza. Son once estaciones: de los maestros al fuego de la lengua, de la lengua que nadie doma a la fuente y a la sabiduría de lo alto. El libro no enseña una técnica para callar ni un dominio que se compre con disciplina: la lengua no figura entre las naturalezas que el hombre doma. De una misma boca proceden bendición y maldición, y ninguna fuente echa agua dulce y amarga; solo una fuente nueva cambia lo que brota.",
    sample:
      "Hay un hombre sin nombre que esta mañana ha confesado con la boca que Jesús es el Señor. No le fabrico casa, ni oficio, ni herida: te pido que te quedes a su lado mientras el día avanza y la misma boca hace lo que Santiago 3 dice.",
    ref: "Stg. 3:10–12 · Ro. 10:9",
    pasaje: "Santiago 3",
    studySlug: "",
    tratadoSlug: "la-muerte-y-la-vida",
    sinAmazon: true,
  },
  {
    n: 8,
    lectura: 8,
    slug: "diakrisis",
    title: "Diákrisis",
    subtitulo: "Discernir con la Escritura abierta la verdad de lo que solo se le parece",
    seoTitle: "Diákrisis: discernimiento bíblico, 1 Juan 4:1 | Alejandro Sirit",
    seoDescription:
      "Probad los espíritus si son de Dios. Alejandro Sirit expone el discernimiento bíblico y el Método P.R.O.B.A.D. en seis niveles, con casos y doce semanas.",
    line: "«Amados, no creáis a todo espíritu, sino probad los espíritus si son de Dios» (1 Juan 4:1). Una época que ha hecho de la tolerancia indiscriminada su virtud más alta ha anestesiado también a la iglesia. Este libro devuelve el juicio santo que la Escritura manda: no la opinión ni la sospecha, sino el discernimiento que separa lo verdadero de lo que solo se le parece.",
    thesis:
      "La primera parte asienta el fundamento: el vocabulario bíblico del juicio, el «juzgad con justo juicio» de Juan 7:24, los sentidos ejercitados de Hebreos 5, la doctrina como primera frontera y el carácter frente al carisma. La segunda expone el Método P.R.O.B.A.D. en seis niveles: la Palabra escudriñada, la Regla de Cristo, la Opción excelente, lo Bueno retenido, el Autoexamen y la Distinción del siglo. La tercera es un gimnasio: taller, casos resueltos y doce semanas de entrenamiento.",
    sample:
      "Vivimos en una época que ha hecho de la tolerancia indiscriminada su virtud más alta y de la ausencia de convicciones su signo de madurez, y esa anestesia ha entrado también en la iglesia.",
    ref: "1 Jn. 4:1 · He. 5:14",
    pasaje: "1 Juan 4",
    studySlug: "",
    sinAmazon: true,
  },
  {
    n: 9,
    lectura: 9,
    slug: "nunca-tocaras-mi-fe",
    title: "Nunca tocarás mi fe",
    subtitulo: "No se la grité a Dios",
    seoTitle: "Nunca tocarás mi fe: Efesios 2:8 | Alejandro Sirit",
    seoDescription:
      "Un testimonio puesto debajo del texto: la fe que salva es don de Dios, no hazaña. Alejandro Sirit cuenta un grito dirigido al maligno, sin espectáculo.",
    line: "«Nunca tocarás mi fe» fue un grito dirigido al maligno, no una oración ni un lema de victoria. Lo cuenta quien lo gritó, y lo pone debajo de la Escritura: «por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios» (Efesios 2:8).",
    thesis:
      "El grito no salvó a nadie. La fe que salva es don, no hazaña; y la que un hombre aprieta en la mano cuando ya no le queda otra posesión es otra cosa, que el libro nombra sin confundirla con la primera. No hay aquí escenas adornadas ni nombres expuestos, ni una herida convertida en espectáculo. Hay un testimonio puesto debajo del texto, para que el título no mande y la gracia baste.",
    sample:
      "«Nunca tocarás mi fe» fue un grito dirigido al maligno, no una oración ni un lema de victoria. El grito no salvó a nadie. La fe que salva es don, no hazaña.",
    ref: "Ef. 2:8–9",
    pasaje: "Efesios 2",
    studySlug: "",
    sinAmazon: true,
  },
];

export function obraBySlug(slug: string) {
  return obras.find((o) => o.slug === slug);
}

export function obrasDesdeAula(kind: AulaKind, slug: string) {
  return (OBRAS_DESDE_AULA[`${kind}:${slug}`] ?? [])
    .map((s) => obraBySlug(s))
    .filter((o): o is Obra => Boolean(o));
}

export function obraVecina(lectura: number) {
  return {
    prev: obras.find((o) => o.lectura === lectura - 1),
    next: obras.find((o) => o.lectura === lectura + 1),
  };
}

export const words = [
  {
    lemma: "μετάνοια",
    gloss: "arrepentimiento, cambio de mente",
    strong: "G3341",
    passages: ["Marcos 1:4", "Hechos 20:21", "2 Corintios 7:10"],
  },
  {
    lemma: "ἄνωθεν",
    gloss: "de lo alto / de nuevo",
    strong: "G509",
    passages: ["Juan 3:3", "Juan 3:7", "Santiago 1:17"],
  },
  {
    lemma: "ἱλαστήριον",
    gloss: "propiciatorio, el lugar de la sangre",
    strong: "G2435",
    passages: ["Romanos 3:25", "Hebreos 9:5", "Éxodo 25:17"],
  },
  {
    lemma: "λόγος",
    gloss: "palabra, Verbo",
    strong: "G3056",
    passages: ["Juan 1:1", "Juan 1:14", "Hebreos 4:12"],
  },
  {
    lemma: "עֶבֶד",
    gloss: "siervo",
    strong: "H5650",
    passages: ["Isaías 42:1", "Isaías 52:13", "Isaías 53:11"],
  },
  {
    lemma: "δικαιοσύνη",
    gloss: "justicia",
    strong: "G1343",
    passages: ["Romanos 3:21", "Romanos 3:26", "2 Corintios 5:21"],
  },
  {
    lemma: "ποιμήν",
    gloss: "pastor",
    strong: "G4166",
    passages: ["Juan 10:11", "Hebreos 13:20", "1 Pedro 5:4"],
  },
] as const;

export function wordOfDay(d = new Date()) {
  const start = Date.UTC(d.getFullYear(), 0, 0);
  const day = Math.floor((d.getTime() - start) / 86400000);
  return words[day % words.length];
}
