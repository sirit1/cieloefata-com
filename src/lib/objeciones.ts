/** Versículos que viajan solos → el tratado que los restituye al capítulo. */

export type Objecion = {
  verse: string;
  lemma: string;
  tratadoSlug: string;
  lead: string;
};

export const OBJECIONES_INTRO =
  "Alguien objeta con un versículo que viaja solo. Esta página no inventa réplicas ingeniosas: nombra la objeción honesta y la remite al tratado donde el mismo texto vuelve al capítulo que lo sostiene. Huir al pasaje preferido es otra forma de no oír. Escudriña el tratado; abre la Escritura; deja que el contexto juzgue el lema.";

export const OBJECIONES: Objecion[] = [
  {
    verse: "Filipenses 4:13",
    lemma: "«Todo lo puedo» — ¿cheque en blanco?",
    tratadoSlug: "todo-lo-puedo",
    lead:
      "El «todo» de Pablo es el contentamiento de la cárcel, no el récord del yo. Quien recorta el 13 y deja el 12 se lleva un entrenador y abandona al que fortalece al preso.",
  },
  {
    verse: "Mateo 6:33",
    lemma: "«Buscad primeramente» — ¿atalaya hacia lo demás?",
    tratadoSlug: "buscad-primeramente",
    lead:
      "Jesús habla a oídos ansiosos, no a una escuela de gestión. El reino no es palanca para que lo demás se añada: el Padre ya sabe, y el afán no se bautiza como piedad.",
  },
  {
    verse: "3 Juan 2",
    lemma: "«Que prospere tu alma» — ¿factura de salud y caudal?",
    tratadoSlug: "prospere-tu-alma",
    lead:
      "Juan saluda a Gayo. El peso cae sobre el alma que ya camina en la verdad, no sobre la bolsa ni sobre el pulso. La hospitalidad mide el versículo, no la cuenta.",
  },
  {
    verse: "Malaquías 3:10",
    lemma: "«Las ventanas de los cielos» — ¿inversión con retorno?",
    tratadoSlug: "las-ventanas-de-los-cielos",
    lead:
      "El profeta acusa a un pueblo que robaba el culto, no firma un contrato de retorno. Las ventanas se abren sobre el alfolí, no sobre el que da para que le devuelvan.",
  },
  {
    verse: "Jeremías 29:11",
    lemma: "«Yo sé los pensamientos…» — ¿póliza personal de prosperidad?",
    tratadoSlug: "el-pensamiento-que-no-era-tuyo",
    lead:
      "La carta va a desterrados. Setenta años, no un atajo; un pueblo, no un eslogan de graduación. El pensamiento de paz era de Jehová, no del lector que se lo cuelga en la pared.",
  },
  {
    verse: "Romanos 8:28",
    lemma: "«Todas las cosas ayudan a bien» — ¿destino piadoso?",
    tratadoSlug: "para-bien",
    lead:
      "El bien tiene rostro dos versículos más allá: la imagen del Hijo. Pablo no ofrece un destino blando para que el golpe duela menos. El capítulo gime, y el consuelo no calla el lamento.",
  },
  {
    verse: "Romanos 8:31",
    lemma: "«Si Dios por nosotros» — ¿amuleto contra toda tribulación?",
    tratadoSlug: "si-dios-por-nosotros",
    lead:
      "La pregunta nace de la cadena: propósito, llamado, justificación. No promete un siglo sin adversario. Nadie condena al que el Hijo compró; la espada, no obstante, sigue en la lista.",
  },
  {
    verse: "Marcos 11:23–24",
    lemma: "«A este monte» — ¿fórmula contra obstáculos domésticos?",
    tratadoSlug: "a-este-monte",
    lead:
      "El dicho camina hacia Jerusalén, junto a una higuera seca y un templo juzgado. La fe que no duda se mide por el perdón del 25, no por el capricho que el siglo llama obstáculo.",
  },
  {
    verse: "Mateo 18:18–20",
    lemma: "«Atar y desatar» — ¿hechizo de dos o tres?",
    tratadoSlug: "atar-y-desatar",
    lead:
      "Jesús habla de disciplina y de presencia en medio de la corrección fraterna, no de un conjuro de dos o tres. El que ata un capricho y deja al hermano ha cambiado de asamblea.",
  },
  {
    verse: "Proverbios 18:21",
    lemma: "«La muerte y la vida están en la lengua» — ¿decreto de palabra de fe?",
    tratadoSlug: "la-muerte-y-la-vida",
    lead:
      "El proverbio pone peso moral sobre lo dicho, no un oficio de «haya luz». El que ama su lengua come su fruto: no fabrica un mundo, rinde cuentas. Santiago 3 espera con el bosque y la chispa.",
  },
  {
    verse: "2 Timoteo 1:7",
    lemma: "«Espíritu de poder» — ¿técnica de autoafirmación?",
    tratadoSlug: "espiritu-de-poder",
    lead:
      "Pablo escribe a Timoteo para que avive el don y no se avergüence de las prisiones. El poder, el amor y el dominio propio ya fueron dados. No son un temperamento que el yo se administra.",
  },
  {
    verse: "Isaías 53:5",
    lemma: "«Por su llaga fuimos curados» — ¿póliza clínica sin sangre?",
    tratadoSlug: "isaias-53",
    lead:
      "La llaga es del Siervo, por nuestras rebeliones. El versículo vuelve al Cántico entero: ofrenda por la culpa, justificación de muchos. El lector no se sube al verso como si fuera él.",
  },
  {
    verse: "Nehemías 8:8",
    lemma: "«El texto manda» — ¿técnica para no sudar el capítulo?",
    tratadoSlug: "el-texto-manda",
    lead:
      "Leían claramente y ponían el sentido. El pueblo no recibió un acrónimo: recibió la Palabra abierta. V.E.R.D.A.D. es el cauce, no el milagro. Si el método se sienta en el trono, se vuelve a la sordera con más libros.",
  },
  {
    verse: "Santiago 1:22–25",
    lemma: "«El crisol de lo oído» — ¿archivo bien anotado?",
    tratadoSlug: "el-crisol-de-lo-oido",
    lead:
      "Oír y no hacer no es un retraso inocente: es engaño de sí. El que se mira en el espejo y se va olvida el rostro. El crisol prueba el acto que el texto ya pidió, no fabrica un propósito genérico.",
  },
];
