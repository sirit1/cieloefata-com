/**
 * Curso Experto Bíblico · Escuela Bíblica Cielo Efata. Días 1 a 10, abiertos.
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
