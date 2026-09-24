import { AMAZON_AUTHOR, whatsappColeccion } from "@/lib/amazon";

export const school = {
  name: "Cielo Efata",
  tagline: "La Escritura manda sobre el comentario.",
  confession: "Confesión, conversión y firmeza",
  lead: "La Escritura tiene la última palabra. Lo demás —el comentario, el método, el predicador de moda— se sienta atrás, y se sienta de rodillas.",
  leadRef: "2 Ti. 3:16–17",
  colophon:
    "Casa de estudio bíblico. La dirige el Dr. Alejandro Sirit. Siete tratados y el Método V.E.R.D.A.D.™: se estudia el capítulo entero, y el comentario se sienta atrás. El texto no se recorta, no se adorna, no se sustituye.",
  colophonRef: "2 Ti. 3:16–17 · 2 Ti. 2:15",
  director: "Dr. Alejandro Sirit",
  welcome:
    "Cielo Efata es una escuela de estudio bíblico. RevelatiO es el lugar donde se abre el capítulo entero. Las dos son una sola obra. Aquí no se lee un versículo suelto para animarse cuando el siglo aprieta. Se lee un pasaje completo, se estudia con la cadena, y se sale con un solo paso para esta semana, dicho a alguien que pueda preguntar mañana.",
  welcomeRef: "Neh. 8:8 · 2 Ti. 2:15",
};

export const adquisicion = {
  // Primary author hub (merge in progress).
  // Fallback during the merge: https://www.amazon.com/Alejandro-Sirit/e/B0GWKX4RCV
  amazon: AMAZON_AUTHOR,
  whatsapp: whatsappColeccion(),
};

export const CORPUS = {
  title: "Siete tomos",
  gate: "Este corpus teológico, forjado por el Dr. Alejandro Sirit bajo el sello de Editorial Cielo Efata, no es una colección de manuales de autoayuda. Son siete tratados forjados para someter el intelecto a la Escritura y derribar la religión de consumo. Sin embargo, el arma no es el tono: es el capítulo entero, leído de rodillas, con el método que Éfata entrega y que los satélites aplican sin convertirlo en ídolo.",
  efata:
    "Éfata es el primer tomo y el long seller de la casa. En él el Dr. Alejandro Sirit entregó el Método V.E.R.D.A.D.™ —Ver, Entorno, Revelación, Doctrina, Argumento y Decisión— para extirpar la versiculitis y devolver el oído al capítulo entero. No es un lema de marca: es el cauce por el que se estudia en esta escuela. Quien entra por Éfata no colecciona un título: recibe el oficio.",
  line: "Los siete existen en tapa impresa y en ebook. No son artículos de un portal ni descargas de consuelo: son libros. El orden de publicación no es el de lectura. Quien comienza por Éfata aprende primero a leer el capítulo entero, y solo después habla. El orden de lectura —no el de publicación— es: I Éfata; II El Siervo, no tú; III Bástate («Bástate mi gracia»); IV Cuando el cielo se cae; V La fe no basta; VI El altar del espejo; VII Callar para ganar. Bástate, publicado como séptimo, se lee en el tercer puesto: no es un satélite. Cada tapa se abre junto al capítulo que la sostiene.",
  refs: "Mr. 7:34 · 2 Ti. 2:15 · 2 Co. 12:9",
};

export const bible = {
  title: "Qué es la Biblia",
  lead: "Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia. No es una antología de genios religiosos ni un almanaque de consuelos: es Palabra de Dios, y se lee como se oye a quien manda.",
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
      v: "Hebreo y arameo en la primera alianza. Griego en la segunda. El diccionario sirve al pasaje; no lo predica. El que abre el léxico antes de abrir el capítulo deja que una glosa hable por Dios.",
      ref: "Hch. 2:8–11",
    },
    {
      k: "Se lee el pasaje",
      v: "Las divisiones de capítulo y versículo llegaron siglos después. Útiles para citar. El eunuco no leyó un recorte: leyó a Isaías hasta que Felipe le abrió el texto, y el texto le abrió a Cristo.",
      ref: "Hch. 8:30–35",
    },
    {
      k: "Un relato",
      v: "Creación, caída, promesa, redención, consumación. Y comenzando desde Moisés, y siguiendo por todos los profetas, les declaraba en todas las Escrituras lo que de él decían. El hilo no es una idea: es una Persona.",
      ref: "Lc. 24:27",
    },
    {
      k: "Autoridad",
      v: "Hombres hablaron de parte de Dios, siendo inspirados por el Espíritu Santo. La autoridad no es el lector ni el predicador de moda: es el texto. El comentario se sienta atrás.",
      ref: "2 P. 1:21 · 2 Ti. 3:16",
    },
  ],
  close:
    "Siete estantes abren el mapa del canon. No hay que saberlos todos para empezar. Hay que saber que esto no es un libro de frases: es Escritura, y se estudia hasta que pida una obediencia.",
  closeRef: "Jos. 1:8 · Sal. 1:2",
};

export { tratados as essays } from "@/lib/tratados";

export const canonDoors = [
  {
    name: "Ley",
    span: "Génesis — Deuteronomio",
    author: "Moisés",
    line: "Dios crea, promete, liberta y da la ley. El que dijo «sea la luz» es el Verbo que era en el principio, y el cordero de la noche de Egipto ya espera al que ha de ser inmolado.",
    link: "Gn. 1:3 habla con Jn. 1:1–3. El cordero de Éx. 12 espera al de Ap. 5. La simiente de Gn. 3:15 no es un mito de origen: es la primera promesa.",
    ref: "Lc. 24:44",
  },
  {
    name: "Historia",
    span: "Josué — Ester",
    author: "Profetas y escribas",
    line: "El pueblo en la tierra: fidelidad y caída, jueces y reyes, exilio y vuelta. Ninguna palabra de Jehová cayó a tierra, aunque el pueblo sí cayó.",
    link: "Jos. 21:45 sostiene a 2 Co. 1:20: las promesas son sí en Cristo. El trono de David no se apaga; el Mesías lo hereda.",
    ref: "Jos. 21:45",
  },
  {
    name: "Escritos",
    span: "Job — Cantar",
    author: "David, Salomón, y otros",
    line: "Lamento, sabiduría, alabanza, temor de Jehová. El justificado medita de día y de noche, y el abandonado clama antes de que el Pastor le lleve por el valle.",
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
    line: "Jesucristo: vida, muerte, resurrección. Cuatro testigos, un Señor. El reino se acerca con dos verbos, y el Verbo planta tabernáculo en carne.",
    link: "Jn. 20:31 da el fin del libro: para que creáis, y creyendo tengáis vida. Mr. 7:34 abre el oído. Lc. 1:1–4 investiga para que Teófilo conozca la verdad.",
    ref: "Jn. 20:31",
  },
  {
    name: "Iglesia",
    span: "Hechos — Judas",
    author: "Lucas, Pablo, Santiago, Pedro, Juan, Judas",
    line: "El Espíritu, las cartas, el permanecer. La iglesia persevera en la doctrina de los apóstoles, y la fe que no obra se oye muerta en el espejo de Santiago.",
    link: "Hch. 2:42 es el ritmo. Ro. 1:16 es el evangelio que no se avergüenza. Stg. 1:22 impide que el estudio se quede en la cabeza.",
    ref: "Hch. 2:42",
  },
  {
    name: "Consumación",
    span: "Apocalipsis",
    author: "Juan",
    line: "El León de Judá es el Cordero inmolado. Cielo nuevo, tierra nueva. El que abre el libro es el que fue degollado, y el llanto de Juan termina cuando el rollo cambia de manos.",
    link: "Ap. 5:5–6: el León de Judá es el Cordero inmolado. Ap. 21:5: he aquí, yo hago nuevas todas las cosas. El sello de esta casa es este capítulo, no un adorno.",
    ref: "Ap. 5:5–6",
  },
] as const;

export const ROMANO = ["", "I", "II", "III", "IV", "V", "VI", "VII"] as const;

export type Obra = {
  n: number;
  lectura: number;
  slug: string;
  title: string;
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
};

/** Front covers from Drive KDP packs under 00_Cielo_Efata/01_LIBROS, file 04_portada.jpg. */
export function tapaPath(slug: string) {
  return `/TAPAS/${slug}.jpg`;
}

export const obras: Obra[] = [
  {
    n: 6,
    lectura: 1,
    slug: "efata",
    title: "Éfata",
    line: "«Éfata» —sé abierto— no es un lema de marca ni una técnica de escucha interior. En Marcos 7 el Hijo toma a un sordo, alza los ojos, gime y manda que el oído y la lengua cedan. Por consiguiente, este tomo no administra un rito de atención plena: pide el milagro que solo Cristo hace, y el oficio de leer el capítulo entero una vez que el oído ha cedido.",
    thesis:
      "Jesús tomó a un sordo tartamudo, alzó los ojos al cielo, gimió y dijo: Éfata, que es: Sé abierto. Este tomo no ofrece técnicas de escucha interior ni un lema de marca. Pide el milagro que solo el Hijo hace: oídos que oyen la Palabra y lengua que la confiesa. Quien ya oye, no se pavonea. Quien no oye, no se administra un rito. El Espíritu, enviado por ese mismo Señor, sigue abriendo. El sordo no se abre: es abierto.",
    sample:
      "Jesús tomó a un sordo tartamudo, alzó los ojos al cielo, gimió y dijo: Éfata, que es: Sé abierto. Este tomo no ofrece técnicas de escucha interior ni un lema de marca. Pide el milagro que solo el Hijo hace: oídos que oyen la Palabra y lengua que la confiesa.",
    ref: "Mr. 7:34 · Hch. 2:4",
    pasaje: "Marcos 7",
    studySlug: "marcos-7",
    asinEbook: "B0HJ15ZXL3",
  },
  {
    n: 5,
    lectura: 2,
    slug: "el-siervo-no-tu",
    title: "El Siervo, no tú",
    line: "El Gólgota no es un emblema de resiliencia ni un «código» para imitar la cruz como marca personal. Tiene lugar, prefecto, cargo y sangre. Isaías vio al Siervo herido por nuestras rebeliones; nosotros éramos. Por tanto, este tomo rehúsa la autoexpiación piadosa: el justo muere por los injustos, y el lector no se sube al versículo como si fuera el Siervo.",
    thesis:
      "El Gólgota no es un emblema de resiliencia ni un «código» para imitar la cruz como marca personal. Tiene lugar, prefecto, cargo y sangre. El Siervo fue herido por nuestras rebeliones; Jehová cargó en él el pecado de todos nosotros. Este tomo rehúsa la autoexpiación piadosa y recablear la cruz como ejemplo sin sustitución. El justo muere por los injustos, para llevarnos a Dios. Quien predica un amor que no lleva rebelión ha cambiado de Siervo, y el lector no se sube al versículo como si fuera él.",
    sample:
      "El Gólgota no es un emblema de resiliencia ni un «código» para imitar la cruz como marca personal. Tiene lugar, prefecto, cargo y sangre. El Siervo fue herido por nuestras rebeliones; Jehová cargó en él el pecado de todos nosotros.",
    ref: "Is. 53:5 · 1 P. 3:18",
    pasaje: "Isaías 53",
    studySlug: "isaias-53",
    tratadoSlug: "isaias-53",
    asinEbook: "B0HKQGBYV4",
  },
  {
    n: 7,
    lectura: 3,
    slug: "bastate-mi-gracia",
    title: "Bástate",
    amazonTitle: "Bástate mi gracia",
    line: "«Bástate mi gracia.» El lector recibe la palabra dicha a Pablo en la flaqueza: el poder se perfecciona donde ya no se puede. El aguijón permanece; el Señor también.",
    thesis:
      "Bástate es el séptimo, no un satélite ni un epílogo piadoso. A Pablo le fue dicho: bástate mi gracia, porque mi poder se perfecciona en la debilidad. El que ya no puede no es despedido de la casa: es sostenido. La gracia no es un adorno del fuerte ni un consuelo genérico; es el poder del que aprendió a gloriarse en las flaquezas, para que el poder de Cristo more en él. El aguijón permanece; el Señor también.",
    sample:
      "A Pablo le fue dicho: bástate mi gracia, porque mi poder se perfecciona en la debilidad. El que ya no puede no es despedido de la casa: es sostenido. La gracia no es un adorno del fuerte ni un consuelo genérico; es el poder del que aprendió a gloriarse en las flaquezas.",
    ref: "2 Co. 12:9",
    pasaje: "2 Corintios 12",
    studySlug: "2-corintios-12",
  },
  {
    n: 4,
    lectura: 4,
    slug: "cuando-el-cielo-se-cae",
    title: "Cuando el cielo se cae",
    line: "El lector recibe un lamento que no se recablea para que duela menos. Job no obtiene un manual: obtiene a Dios en el valle.",
    thesis:
      "Hay dolores que no se explican para que duelan menos, y hay teologías que pecan de prisa cuando convierten el valle en un taller de sentido. Job no recibe un manual; recibe a Dios. Las misericordias de Jehová son la causa de no ser consumidos. Este tomo enseña a llorar sin apostatar, y a no convertir el lamento en un ídolo de la queja. El «tú» llega en el valle: el Pastor no niega la sombra; la atraviesa con el que clama.",
    sample:
      "Hay dolores que no se explican para que duelan menos, y hay teologías que pecan de prisa cuando convierten el valle en un taller de sentido. Job no recibe un manual; recibe a Dios. Las misericordias de Jehová son la causa de no ser consumidos.",
    ref: "Job 42:5–6 · Lm. 3:22–23",
    pasaje: "Job 42",
    studySlug: "",
    studyNote:
      "No hay aún una clase de Job en el aula. El lamento se oye en este tomo, junto al capítulo. Salmo 22 permanece como laboratorio en preparación: es el clamor del abandonado, no un sustituto del libro de Job.",
    isbnPrint: "9798176466690",
  },
  {
    n: 3,
    lectura: 5,
    slug: "la-fe-no-basta",
    title: "La fe no basta",
    line: "El lector recibe el espejo de Santiago. La fe que no obra está muerta, aunque recite a Pablo para no obedecer.",
    thesis:
      "Santiago no pide permiso. La fe si no tiene obras, es muerta en sí misma. No se trata de añadir mérito a Cristo: se trata de no llamar fe a un asentimiento que no se mueve. El espejo de la Palabra no se consulta para olvidar el rostro. El que oye y no hace se engaña a sí mismo, y el engaño no es un retraso inocente. Este tomo no discute a Pablo: desnuda al que cita a Pablo para no obedecer.",
    sample:
      "Santiago no pide permiso. La fe si no tiene obras, es muerta en sí misma. No se trata de añadir mérito a Cristo: se trata de no llamar fe a un asentimiento que no se mueve. El espejo de la Palabra no se consulta para olvidar el rostro.",
    ref: "Stg. 2:17 · Stg. 1:23–24",
    pasaje: "Santiago 2",
    studySlug: "santiago-1",
    tratadoSlug: "el-crisol-de-lo-oido",
    asinEbook: "B0GYFR8YDQ",
  },
  {
    n: 2,
    lectura: 6,
    slug: "el-altar-del-espejo",
    title: "El altar del espejo",
    line: "El lector recibe la compuerta entre oír y hacer. Quien mira el espejo y se va olvida el rostro; quien permanece, es hacedor de la obra.",
    thesis:
      "El que oye y no hace se parece al que mira su rostro natural en un espejo y se va, y luego olvida. El altar no es el sentimiento de haber oído, ni la liturgia de un estudio bien anotado. Es el hombre que permanece en la ley perfecta, la de la libertad, y es hacedor de la obra. C.R.I.S.O.L.™ vive aquí: la compuerta pastoral de Decisión, para que la cadena no se vuelva un cadáver erudito.",
    sample:
      "El que oye y no hace se parece al que mira su rostro natural en un espejo y se va, y luego olvida. El altar no es el sentimiento de haber oído, ni la liturgia de un estudio bien anotado. Es el hombre que permanece en la ley perfecta, la de la libertad, y es hacedor de la obra.",
    ref: "Stg. 1:22–25",
    pasaje: "Santiago 1",
    studySlug: "santiago-1",
    tratadoSlug: "el-crisol-de-lo-oido",
    crisol: true,
    isbnPrint: "9798176414967",
  },
  {
    n: 1,
    lectura: 7,
    slug: "callar-para-ganar",
    title: "Callar para ganar",
    line: "El lector recibe el dominio de la lengua. Callar no es huir: es no encender el bosque, y hablar cuando el pasaje manda hablar.",
    thesis:
      "La lengua es un fuego. El que no ofende en palabra, es varón perfecto. Este tomo no enseña la cobardía ni el silencio cómplice: enseña el dominio que el Espíritu da, para no encender el bosque por una chispa, y para hablar cuando el pasaje manda hablar. Callar no es huir. Callar, aquí, es no pelear el primer asiento, y no convertir la doctrina en un deporte de redes.",
    sample:
      "La lengua es un fuego. El que no ofende en palabra, es varón perfecto. Este tomo no enseña la cobardía ni el silencio cómplice: enseña el dominio que el Espíritu da, para no encender el bosque por una chispa, y para hablar cuando el pasaje manda hablar.",
    ref: "Stg. 3:2–6 · Pr. 17:27",
    pasaje: "Santiago 3",
    studySlug: "",
    tratadoSlug: "la-muerte-y-la-vida",
    asinEbook: "B0GPF3NHQT",
    isbnPrint: "9798253959213",
  },
];

export function obraBySlug(slug: string) {
  return obras.find((o) => o.slug === slug);
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
    passages: ["Marcos 1:15", "Hechos 2:38", "2 Corintios 7:10"],
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
    passages: ["Isaías 52:13", "Isaías 53:11", "Filipenses 2:7"],
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
    passages: ["Salmo 23:1", "Juan 10:11", "1 Pedro 5:4"],
  },
] as const;

export function wordOfDay(d = new Date()) {
  const start = Date.UTC(d.getFullYear(), 0, 0);
  const day = Math.floor((d.getTime() - start) / 86400000);
  return words[day % words.length];
}
