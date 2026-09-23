/** Versículos que viajan solos → el tratado que los restituye al capítulo. */

export type Objecion = {
  verse: string;
  lemma: string;
  tratadoSlug: string;
  line: string;
};

export const OBJECIONES: Objecion[] = [
  {
    verse: "Filipenses 4:13",
    lemma: "Todo lo puedo en Cristo",
    tratadoSlug: "todo-lo-puedo",
    line: "El «todo» es el contentamiento de la cárcel, no un cheque de conquista.",
  },
  {
    verse: "Jeremías 29:11",
    lemma: "Porque yo sé los pensamientos",
    tratadoSlug: "el-pensamiento-que-no-era-tuyo",
    line: "El pensamiento de paz es de Jehová a un pueblo desterrado, no una póliza individual.",
  },
  {
    verse: "Mateo 6:33",
    lemma: "Buscad primeramente el reino",
    tratadoSlug: "buscad-primeramente",
    line: "El Sermón del Monte reprende el afán; el reino no es palanca para lo que el afán ya quería.",
  },
  {
    verse: "3 Juan 2",
    lemma: "Que te vaya bien y tengas salud",
    tratadoSlug: "prospere-tu-alma",
    line: "El saludo mide el alma que camina en la verdad, no una factura de caudal.",
  },
  {
    verse: "Malaquías 3:10",
    lemma: "Traed los diezmos y probadme",
    tratadoSlug: "las-ventanas-de-los-cielos",
    line: "Las ventanas se abren sobre un pacto robado, no sobre un contrato de retorno.",
  },
  {
    verse: "Proverbios 18:21",
    lemma: "La muerte y la vida están en poder de la lengua",
    tratadoSlug: "la-muerte-y-la-vida",
    line: "El proverbio pone peso moral, no un decreto para fabricar mundos.",
  },
  {
    verse: "Marcos 11:23–24",
    lemma: "Al que dijere a este monte",
    tratadoSlug: "a-este-monte",
    line: "La higuera y el templo miden la fe; el 25 manda perdonar.",
  },
  {
    verse: "Romanos 8:28",
    lemma: "Todas las cosas les ayudan a bien",
    tratadoSlug: "para-bien",
    line: "El bien es la imagen del Hijo, no el alivio de que todo pasa por algo.",
  },
  {
    verse: "Romanos 8:31",
    lemma: "Si Dios es por nosotros",
    tratadoSlug: "si-dios-por-nosotros",
    line: "Nadie condena al que el Hijo compró; la lista del 35 no se evapora.",
  },
  {
    verse: "2 Timoteo 1:7",
    lemma: "No nos ha dado Dios espíritu de cobardía",
    tratadoSlug: "espiritu-de-poder",
    line: "El don ya dado no es un cartel de autoayuda contra el miedo natural.",
  },
  {
    verse: "Isaías 53:5",
    lemma: "Por su llaga fuimos nosotros curados",
    tratadoSlug: "isaias-53",
    line: "La llaga es del Siervo, por nuestras rebeliones; el lector no se sube al versículo.",
  },
  {
    verse: "Mateo 18:18–20",
    lemma: "Todo lo que atéis en la tierra",
    tratadoSlug: "atar-y-desatar",
    line: "Atar y desatar es disciplina y perdón de iglesia, no un hechizo contra el aire.",
  },
  {
    verse: "Nehemías 8:8",
    lemma: "Leían claramente y ponían el sentido",
    tratadoSlug: "el-texto-manda",
    line: "El pueblo recibió la Palabra abierta, no una técnica para recitar.",
  },
  {
    verse: "Santiago 1:22–25",
    lemma: "Sed hacedores de la palabra",
    tratadoSlug: "el-crisol-de-lo-oido",
    line: "Oír y no hacer no es un retraso inocente: es engaño de sí.",
  },
];
