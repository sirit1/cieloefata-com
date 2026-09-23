/** Versículos que viajan solos → el tratado que los restituye al capítulo. */

export type Objecion = {
  verse: string;
  lemma: string;
  tratadoSlug: string;
};

export const OBJECIONES_INTRO =
  "Alguien objeta con un versículo que viaja solo. Esta página no inventa réplicas ingeniosas: nombra la objeción honesta y la remite al tratado donde el mismo texto vuelve al capítulo que lo sostiene. Huir al pasaje preferido es otra forma de no oír. Escudriña el tratado; abre la Escritura; deja que el contexto juzgue el lema.";

export const OBJECIONES: Objecion[] = [
  {
    verse: "Filipenses 4:13",
    lemma: "«Todo lo puedo» — ¿cheque en blanco?",
    tratadoSlug: "todo-lo-puedo",
  },
  {
    verse: "Mateo 6:33",
    lemma: "«Buscad primeramente» — ¿atalaya hacia lo demás?",
    tratadoSlug: "buscad-primeramente",
  },
  {
    verse: "3 Juan 2",
    lemma: "«Que prospere tu alma» — ¿factura de salud y caudal?",
    tratadoSlug: "prospere-tu-alma",
  },
  {
    verse: "Malaquías 3:10",
    lemma: "«Las ventanas de los cielos» — ¿inversión con retorno?",
    tratadoSlug: "las-ventanas-de-los-cielos",
  },
  {
    verse: "Jeremías 29:11",
    lemma: "«Yo sé los pensamientos…» — ¿póliza personal de prosperidad?",
    tratadoSlug: "el-pensamiento-que-no-era-tuyo",
  },
  {
    verse: "Romanos 8:28",
    lemma: "«Todas las cosas ayudan a bien» — ¿destino piadoso?",
    tratadoSlug: "para-bien",
  },
  {
    verse: "Romanos 8:31",
    lemma: "«Si Dios por nosotros» — ¿amuleto contra toda tribulación?",
    tratadoSlug: "si-dios-por-nosotros",
  },
  {
    verse: "Marcos 11:23–24",
    lemma: "«A este monte» — ¿fórmula contra obstáculos domésticos?",
    tratadoSlug: "a-este-monte",
  },
  {
    verse: "Mateo 18:18–20",
    lemma: "«Atar y desatar» — ¿hechizo de dos o tres?",
    tratadoSlug: "atar-y-desatar",
  },
  {
    verse: "Proverbios 18:21",
    lemma: "«La muerte y la vida están en la lengua» — ¿decreto de palabra de fe?",
    tratadoSlug: "la-muerte-y-la-vida",
  },
  {
    verse: "2 Timoteo 1:7",
    lemma: "«Espíritu de poder» — ¿técnica de autoafirmación?",
    tratadoSlug: "espiritu-de-poder",
  },
  {
    verse: "Isaías 53:5",
    lemma: "«Por su llaga fuimos curados» — ¿póliza clínica sin sangre?",
    tratadoSlug: "isaias-53",
  },
  {
    verse: "Nehemías 8:8",
    lemma: "«El texto manda»",
    tratadoSlug: "el-texto-manda",
  },
  {
    verse: "Santiago 1:22–25",
    lemma: "«El crisol de lo oído»",
    tratadoSlug: "el-crisol-de-lo-oido",
  },
];
