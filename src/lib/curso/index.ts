/**
 * Curso Experto Bíblico · Escuela Bíblica Cielo Efata.
 * Publicado hoy: el módulo uno, días 1 a 30. El índice público lleva título y cita.
 * El versículo, el párrafo de entrada y el cuerpo se cargan en el servidor.
 * Fuente: los txt de Drive (carpeta «Audios para ElevenLabs (txt)»). Texto bíblico: RVR1960.
 */
export type DiaCurso = {
  n: number;
  slug: string;
  titulo: string;
  cita: string;
};

export type Bloque = ["h" | "p" | "q", string];

export const CURSO_NOMBRE = "Curso Experto Bíblico";
export const CURSO_PATH = "/curso";
export const CURSO_PUBLICADO = "2026-11-04";

export const DIAS: DiaCurso[] = [
  {
    n: 1,
    slug: "dia-1",
    titulo: "La puerta del sabio",
    cita: "Esdras 7:10",
  },
  {
    n: 2,
    slug: "dia-2",
    titulo: "Dios ha hablado: revelación e inspiración de la Escritura",
    cita: "2 Timoteo 3:16-17",
  },
  {
    n: 3,
    slug: "dia-3",
    titulo: "El canon de la Escritura: cuáles libros son Palabra de Dios y por qué",
    cita: "Lucas 24:44",
  },
  {
    n: 4,
    slug: "dia-4",
    titulo: "De la mano de Dios a tus manos: la transmisión del texto y el Textus Receptus",
    cita: "Isaías 40:8",
  },
  {
    n: 5,
    slug: "dia-5",
    titulo: "La lengua que Dios eligió primero: introducción al hebreo bíblico y al alefato",
    cita: "Deuteronomio 6:4-5",
  },
  {
    n: 6,
    slug: "dia-6",
    titulo: "La lengua del evangelio: introducción al griego del Nuevo Testamento",
    cita: "Juan 1:1",
  },
  {
    n: 7,
    slug: "dia-7",
    titulo: "Usar bien la palabra de verdad: introducción a la hermenéutica bíblica",
    cita: "2 Timoteo 2:15",
  },
  {
    n: 8,
    slug: "dia-8",
    titulo: "El Verbo hecho carne: exégesis del prólogo del evangelio de Juan",
    cita: "Juan 1:14",
  },
  {
    n: 9,
    slug: "dia-9",
    titulo: "El libro de los principios: recorrido panorámico por Génesis",
    cita: "Génesis 3:15",
  },
  {
    n: 10,
    slug: "dia-10",
    titulo: "Si Cristo no resucitó: apologética de la resurrección a partir de primera de Corintios quince",
    cita: "1 Corintios 15:3-4",
  },
  {
    n: 11,
    slug: "dia-11",
    titulo: "Enteramente preparado: la suficiencia de la Escritura",
    cita: "Salmos 19:7",
  },
  {
    n: 12,
    slug: "dia-12",
    titulo: "Lámpara es a mis pies: la claridad de la Escritura",
    cita: "Salmos 119:105",
  },
  {
    n: 13,
    slug: "dia-13",
    titulo: "Comenzando desde Moisés: la Escritura se interpreta con la Escritura",
    cita: "Lucas 24:27",
  },
  {
    n: 14,
    slug: "dia-14",
    titulo: "El maná de cada mañana: la lectura de toda la Biblia",
    cita: "Josué 1:8",
  },
  {
    n: 15,
    slug: "dia-15",
    titulo: "Muchas veces y de muchas maneras: panorama del Antiguo Testamento",
    cita: "Hebreos 1:1-2",
  },
  {
    n: 16,
    slug: "dia-16",
    titulo: "El cumplimiento del tiempo: panorama del Nuevo Testamento",
    cita: "Gálatas 4:4-5",
  },
  {
    n: 17,
    slug: "dia-17",
    titulo: "A los pies del Maestro: la vida devocional del estudioso",
    cita: "Lucas 10:41-42",
  },
  {
    n: 18,
    slug: "dia-18",
    titulo: "Yo soy el que soy: la doctrina de Dios",
    cita: "Jeremías 9:24",
  },
  {
    n: 19,
    slug: "dia-19",
    titulo: "Antes que Abraham fuese, yo soy: la persona de Cristo",
    cita: "1 Timoteo 2:5",
  },
  {
    n: 20,
    slug: "dia-20",
    titulo: "Que prediques la palabra: primeros pasos en la predicación, y repaso de los días once al veinte",
    cita: "2 Timoteo 4:2",
  },
  {
    n: 21,
    slug: "dia-21",
    titulo: "He aquí el Cordero de Dios: la obra de Cristo",
    cita: "Juan 1:29",
  },
  {
    n: 22,
    slug: "dia-22",
    titulo: "El Espíritu de verdad: el Paráclito en la Escritura",
    cita: "Juan 16:13",
  },
  {
    n: 23,
    slug: "dia-23",
    titulo: "Polvo y aliento: el hombre y el pecado",
    cita: "Salmos 51:10",
  },
  {
    n: 24,
    slug: "dia-24",
    titulo: "Justificados por la fe: la salvación que anuncia la Escritura",
    cita: "Romanos 5:1",
  },
  {
    n: 25,
    slug: "dia-25",
    titulo: "Hebreo dos: las vocales, la raíz y una frase de Génesis",
    cita: "Génesis 15:6",
  },
  {
    n: 26,
    slug: "dia-26",
    titulo: "Griego dos: el artículo, el caso y una frase de Juan",
    cita: "Tito 2:13",
  },
  {
    n: 27,
    slug: "dia-27",
    titulo: "Yo seré vuestro Dios: los pactos de la Escritura",
    cita: "Lucas 22:20",
  },
  {
    n: 28,
    slug: "dia-28",
    titulo: "La iglesia: casa de Dios y columna de la verdad",
    cita: "1 Timoteo 3:15",
  },
  {
    n: 29,
    slug: "dia-29",
    titulo: "Pedid, y se os dará: la oración del que estudia",
    cita: "Lucas 11:9",
  },
  {
    n: 30,
    slug: "dia-30",
    titulo: "Repaso del módulo uno: lo que hemos puesto por cimiento",
    cita: "Lucas 6:47-48",
  },
];

export function diaPorSlug(slug: string): DiaCurso | undefined {
  return DIAS.find((d) => d.slug === slug);
}
