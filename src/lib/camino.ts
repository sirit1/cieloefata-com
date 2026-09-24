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
  "Este camino no es un menú de bienestar. Es el orden en que la Escritura suele herir y sanar: conocer a Dios, oír el pecado con nombre, volverse, entrar al agua, nacer de nuevo y permanecer. Cada etapa apunta a un estudio ya publicado en esta casa; el capítulo manda, el aula acompaña.";

export const CAMINO: PasoCamino[] = [
  {
    slug: "conocer",
    name: "Conocer a Dios",
    studySlug: "juan-1",
    ref: "Juan 1:1–18",
    body: "Antes de pedirle nada al cielo, se oye quién habla. El Verbo era con Dios y era Dios, y fue hecho carne; nadie viene al Padre sino por el Hijo. Esta etapa no fabrica un dios doméstico: confiesa al que se dio a conocer.",
    also: [{ slug: "juan-14", label: "Juan 14" }],
  },
  {
    slug: "conviccion",
    name: "Convicción de pecado",
    studySlug: "romanos-1",
    ref: "Romanos 1:16–18",
    body: "El Espíritu no administra un clima interior: convence de pecado, de justicia y de juicio. Romanos no deja coartada al que se siente bueno; el capítulo nombra la rebelión sin maquillaje. Sin esta herida, el arrepentimiento es teatro.",
    also: [{ slug: "genesis-3", label: "Génesis 3" }],
  },
  {
    slug: "arrepentimiento",
    name: "Arrepentimiento",
    studySlug: "marcos-1",
    ref: "Marcos 1:14–15",
    body: "En Galilea el Reino se acerca con dos verbos: arrepentíos y creed en el evangelio. Ahora bien, eso no es un ánimo de grupo ni una mejora del yo; es volverse al Señor que ya está cerca. El mandato no espera a que el lector se sienta listo.",
  },
  {
    slug: "bautismo",
    name: "Bautismo",
    studySlug: "hechos-2",
    ref: "Hechos 2:36–41",
    body: "En Pentecostés el corazón atravesado pregunta qué haremos, y Pedro no suaviza: arrepentíos, y bautícese cada uno en el nombre de Jesucristo para perdón de los pecados. La Iglesia no nace de un taller: nace de un corte que tiene agua y Nombre.",
  },
  {
    slug: "conversion",
    name: "Conversión",
    studySlug: "juan-3",
    ref: "Juan 3:1–8",
    body: "Nacer de nuevo no se programa. El que no naciere de agua y del Espíritu no puede entrar en el reino; el viento sopla de donde quiere. Juan 3 quita la religión de mérito y deja al que mira al Hijo levantado.",
    also: [{ slug: "2-corintios-5", label: "2 Corintios 5" }],
  },
  {
    slug: "permanecer",
    name: "Firmeza en la fe",
    studySlug: "2-pedro-1",
    ref: "2 Pedro 1:1–11",
    body: "La fe que no añade se vuelve estéril. Pedro pide diligencia: virtud, conocimiento, dominio propio, paciencia, piedad, afecto fraternal, amor. Se hace firme la vocación en el camino, no en el eslogan.",
    also: [
      { slug: "romanos-12", label: "Romanos 12" },
      { slug: "santiago-1", label: "Santiago 1" },
    ],
  },
];
