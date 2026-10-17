/** Embudo pastoral: no es un checklist de marketing. Cada paso oye un pasaje. */

export type CaminoAlso = {
  slug: string;
  label: string;
};

export type PasoCamino = {
  slug: string;
  name: string;
  studySlug: string;
  ref: string;
  body: string;
  also?: CaminoAlso[];
};

export const CAMINO_INTRO =
  "Este camino no es un programa de bienestar. Recorre lo que la Escritura enseña sobre la vida con Dios: conocerlo, reconocer el pecado, arrepentirse, bautizarse, nacer de nuevo y permanecer firmes. Cada etapa tiene un pasaje para leer completo; algunas tienen además un estudio en este sitio.";

export const CAMINO: PasoCamino[] = [
  {
    slug: "conocer",
    name: "Conocer a Dios",
    studySlug: "juan-1",
    ref: "Juan 1:1–18",
    body: "Antes de pedirle nada al cielo, se oye quién habla. El Verbo era con Dios y era Dios, y fue hecho carne; nadie viene al Padre sino por el Hijo. Esta etapa no fabrica un dios doméstico: confiesa al que se dio a conocer.",
  },
  {
    slug: "conviccion",
    name: "Convicción de pecado",
    studySlug: "romanos-1",
    ref: "Romanos 1:16–18",
    body: "El Espíritu no administra un clima interior: convence de pecado, de justicia y de juicio. Romanos no deja coartada al que se siente bueno; el capítulo nombra la rebelión sin maquillaje. Sin esta convicción, el arrepentimiento se queda en apariencia.",
  },
  {
    slug: "arrepentimiento",
    name: "Arrepentimiento",
    studySlug: "marcos-1",
    ref: "Marcos 1:14–15",
    body: "En Galilea Jesús anuncia que el reino de Dios se ha acercado y llama con dos verbos: arrepentíos, y creed en el evangelio. No es entusiasmo de grupo ni mejora personal; es volverse al Señor. El mandato no espera a que el lector se sienta listo.",
  },
  {
    slug: "bautismo",
    name: "Bautismo",
    studySlug: "hechos-2",
    ref: "Hechos 2:36–41",
    body: "En Pentecostés el corazón atravesado pregunta qué haremos, y Pedro no suaviza: arrepentíos, y bautícese cada uno en el nombre de Jesucristo para perdón de los pecados. Aquel día unas tres mil personas recibieron la palabra y fueron bautizadas.",
  },
  {
    slug: "conversion",
    name: "Conversión",
    studySlug: "juan-3",
    ref: "Juan 3:1–8",
    body: "Nacer de nuevo no se programa. El que no naciere de agua y del Espíritu no puede entrar en el reino; el viento sopla de donde quiere. Juan 3 deja sin lugar la religión del mérito: el nuevo nacimiento es obra de Dios.",
  },
  {
    slug: "permanecer",
    name: "Firmeza en la fe",
    studySlug: "2-pedro-1",
    ref: "2 Pedro 1:1–11",
    body: "La fe que no añade se vuelve estéril. Pedro pide diligencia: virtud, conocimiento, dominio propio, paciencia, piedad, afecto fraternal, amor. Así se hace firme la vocación y elección, en la vida diaria y no en un lema.",
    also: [{ slug: "santiago-1", label: "Santiago 1" }],
  },
];
