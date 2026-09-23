/** Embudo pastoral: no es un checklist de marketing. Cada paso oye un pasaje. */

export type PasoCamino = {
  slug: string;
  name: string;
  studySlug: string;
  ref: string;
  body: string;
};

export const CAMINO: PasoCamino[] = [
  {
    slug: "conocer",
    name: "Conocer a Dios",
    studySlug: "juan-1",
    ref: "Juan 1:1–18",
    body: "Nadie llega al arrepentimiento por un dios doméstico. El prólogo de Juan no abre con un consuelo: declara que el Verbo era Dios, que fue hecho carne y que los suyos no le recibieron. Conocer a Dios, en esta casa, es oír al Unigénito que declara al Padre. El que recorta el Hijo para no ofender ya eligió otro señor, aunque conserve el vocabulario de la piedad.",
  },
  {
    slug: "conviccion",
    name: "Convicción",
    studySlug: "romanos-1",
    ref: "Romanos 1:16–18",
    body: "El evangelio es poder de Dios para salvación, y en el mismo umbral se revela la ira. Pablo no se avergüenza de un consejo: anuncia una justicia que se revela, y una impiedad contra la cual Dios no calla. La convicción no es un clima de reunión. Es el corte por el cual el oyente deja de negociar el poder como si fuera técnica.",
  },
  {
    slug: "arrepentimiento",
    name: "Arrepentimiento",
    studySlug: "marcos-1",
    ref: "Marcos 1:14–15",
    body: "En Galilea el Señor no pregunta cómo te sientes. El tiempo se ha cumplido; el reino se ha acercado; arrepentíos, y creed en el evangelio. μετανοεῖτε es presente: una vuelta que se sostiene, no un momento de lágrimas. Quien añade un tercer verbo, «más tarde», todavía no ha oído el primer anuncio del Señor.",
  },
  {
    slug: "bautismo",
    name: "Bautismo",
    studySlug: "hechos-2",
    ref: "Hechos 2:36–41",
    body: "Los que oyeron preguntaron qué haríamos. Pedro no suaviza: arrepentíos, y bautícese cada uno en el nombre de Jesucristo para perdón de los pecados, y recibiréis el don del Espíritu Santo. La Iglesia no nace de un taller de autoestima. Nace de un corte, y el corte tiene agua y Nombre.",
  },
  {
    slug: "conversion",
    name: "Conversión",
    studySlug: "juan-3",
    ref: "Juan 3:1–8",
    body: "Nicodemo ya sabe y ya enseña. Viene de noche, con el oficio intacto. Jesús no le mejora el currículo: le pide nacer ἄνωθεν, de lo alto. El reino no se ve por erudición. Hay que nacer. El viento sopla de donde quiere: nadie se administra ese milagro, ni lo compra con un curso.",
  },
  {
    slug: "permanecer",
    name: "Permanecer",
    studySlug: "2-pedro-1",
    ref: "2 Pedro 1:1–11",
    body: "Dios dio todo lo que concierne a la vida y a la piedad. Ahora se añade a la fe, a costa propia. El que no añade no es humilde: es ciego, y se olvidó de la purificación de sus antiguos pecados. Permanecer no es un eslogan de constancia. Es el camino por el cual la vocación se hace firme, y el pueblo no se vuelve ocioso llamando gracia a esa ociosidad.",
  },
];
