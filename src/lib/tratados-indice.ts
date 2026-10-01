/** Índice de tratados: número, título, cita y tesis. El cuerpo se carga al abrir el tratado. */
export type IndiceTratado = {
  slug: string;
  n: string;
  title: string;
  ref: string;
  blurb: string;
  pack: boolean;
};

export const TRATADOS_INDICE: IndiceTratado[] = [
  {
    "slug": "el-texto-manda",
    "n": "00",
    "title": "El texto manda",
    "ref": "Nehemías 8:8",
    "blurb": "V.E.R.D.A.D. —Ver, Entorno, Revelación, Doctrina, Argumento y Decisión— no es un acrónimo para recitar ni un noveno puesto en la feria de técnicas. Es el cauce por el que esta casa oye el capítulo entero, hasta que el comentario se sienta atrás y el oído ceda.",
    "pack": true
  },
  {
    "slug": "el-crisol-de-lo-oido",
    "n": "00b",
    "title": "El crisol de lo oído",
    "ref": "Santiago 1:22–25",
    "blurb": "Oír y no hacer no es un retraso inocente, sino engaño de sí. Santiago pone el espejo delante, y el que se mira y se va olvida el rostro. Este tratado es la compuerta: lo oído se prueba hasta que quede un acto, no un archivo.",
    "pack": true
  },
  {
    "slug": "buscad-primeramente",
    "n": "01",
    "title": "Buscad primeramente",
    "ref": "Mateo 6:33",
    "blurb": "«Buscad primeramente el reino» no es un lema de carrera ni una técnica para que lo demás se añada como premio. Jesús habla a oídos ansiosos, en el Sermón del Monte, y el reino que se busca no es un proyecto personal, sino el Padre que ya sabe.",
    "pack": true
  },
  {
    "slug": "todo-lo-puedo",
    "n": "02",
    "title": "Todo lo puedo",
    "ref": "Filipenses 4:13",
    "blurb": "«Todo lo puedo en Cristo» no es un cheque en blanco ni un grito de cancha. Pablo escribe desde la cárcel, y el «todo» es el contentamiento: abundar y sufrir necesidad, sin que el yo se vuelva el verbo.",
    "pack": true
  },
  {
    "slug": "el-pensamiento-que-no-era-tuyo",
    "n": "03",
    "title": "El pensamiento que no era tuyo",
    "ref": "Jeremías 29:11",
    "blurb": "«Porque yo sé los pensamientos que tengo acerca de vosotros» no es una póliza individual de prosperidad. Jeremías escribe a desterrados, y el pensamiento de paz es de Jehová: setenta años, no un atajo, y un pueblo, no un eslogan.",
    "pack": true
  },
  {
    "slug": "prospere-tu-alma",
    "n": "04",
    "title": "Prospere tu alma",
    "ref": "3 Juan 2",
    "blurb": "«Que te vaya bien en todas las cosas, y que tengas salud» no es una factura de prosperidad. Juan saluda a Gayo, y el alma que prospera es la que camina en la verdad: hospitalidad, no un cuerpo como ídolo.",
    "pack": true
  },
  {
    "slug": "las-ventanas-de-los-cielos",
    "n": "05",
    "title": "Las ventanas de los cielos",
    "ref": "Malaquías 3:10",
    "blurb": "«Traed los diezmos y probadme» no es un esquema de inversión ni una amenaza de maldición doméstica. Malaquías habla a un pueblo que robaba a Dios en el culto, y las ventanas se abren sobre un pacto, no sobre un contrato de retorno.",
    "pack": true
  },
  {
    "slug": "la-muerte-y-la-vida",
    "n": "06",
    "title": "La muerte y la vida",
    "ref": "Proverbios 18:21",
    "blurb": "«La muerte y la vida están en poder de la lengua» no es un decreto de palabra de fe ni una técnica para crear realidades. El proverbio pone peso sobre lo que se dice, y el que ama esa lengua come su fruto: no fabrica un mundo, rinde cuentas.",
    "pack": true
  },
  {
    "slug": "a-este-monte",
    "n": "07",
    "title": "A este monte",
    "ref": "Marcos 11:23–24",
    "blurb": "«Al que dijere a este monte» no es una fórmula para mover obstáculos domésticos. Jesús habla camino de Jerusalén, junto a una higuera seca, y la fe que no duda se mide por el templo y por el perdón, no por el capricho.",
    "pack": true
  },
  {
    "slug": "para-bien",
    "n": "08",
    "title": "Para bien",
    "ref": "Romanos 8:28",
    "blurb": "«Todas las cosas les ayudan a bien» no es un destino blando ni un consuelo de que todo pasa por algo. Pablo habla a los que aman a Dios, a los llamados conforme a su propósito, y el bien es la imagen del Hijo, no el alivio.",
    "pack": true
  },
  {
    "slug": "si-dios-por-nosotros",
    "n": "09",
    "title": "Si Dios por nosotros",
    "ref": "Romanos 8:31",
    "blurb": "«Si Dios es por nosotros, ¿quién contra nosotros?» no es un grito de invencibilidad ni un escudo de campaña. Pablo pregunta después de la cadena de 8:28–30, y la respuesta no es que nadie se oponga, sino que nadie puede condenar al que el Hijo compró.",
    "pack": true
  },
  {
    "slug": "espiritu-de-poder",
    "n": "10",
    "title": "Espíritu de poder",
    "ref": "2 Timoteo 1:7",
    "blurb": "«No nos ha dado Dios espíritu de cobardía» no es un cartel de autoayuda ni un grito contra el miedo natural. Pablo escribe a Timoteo, que debe avivar el don, y el poder, el amor y el dominio propio son el Espíritu dado, no un temperamento administrado.",
    "pack": true
  },
  {
    "slug": "isaias-53",
    "n": "11",
    "title": "Herido por nuestras rebeliones",
    "ref": "Isaías 53:5",
    "blurb": "La llaga del Siervo no es póliza de sanidad automática ni poesía de resiliencia. Isaías 53:5 vuelve al Cántico entero: herido por nuestras rebeliones, ofrenda por la culpa, justificación de muchos. El lector no es el Siervo. Este tratado restituye el versículo al capítulo que lo sostiene y conduce, sin prisa de mercado, al tomo El Siervo, no tú.",
    "pack": true
  },
  {
    "slug": "atar-y-desatar",
    "n": "12",
    "title": "Atar y desatar",
    "ref": "Mateo 18:18–20",
    "blurb": "«Todo lo que atéis en la tierra» no es una fórmula de guerra espiritual ni un hechizo de dos o tres. Jesús habla a la iglesia que corrige al hermano, y el atar y desatar es disciplina y perdón, no un decreto contra el aire.",
    "pack": true
  },
  {
    "slug": "juan-1",
    "n": "—",
    "title": "El Verbo se hizo carne",
    "ref": "Juan 1:1–18",
    "blurb": "El prólogo de Juan no es un poema para abrir el libro ni un villancico de diciembre, sino la tesis del Evangelio. Ahora bien, esa tesis no viaja en consignas sueltas. Dice que el Verbo era Dios, que fue hecho carne, que los suyos no le recibieron, que plantó tabernáculo entre nosotros y que el Unigénito declara al Padre. Por tanto, quien cita «el Verbo se hizo carne» sin Juan 1:1–18 aún no ha oído el tratado: ha oído un lema.",
    "pack": false
  },
  {
    "slug": "romanos-3",
    "n": "—",
    "title": "Justicia de Dios, sin la ley",
    "ref": "Romanos 3:21–26",
    "blurb": "Toda boca se cierra. Entonces se manifiesta la justicia de Dios, sin la ley como escalera, en la sangre de Cristo, para que Dios sea justo y el que justifica al que cree. Este ensayo aún no tiene pack en Drive: se lee como preparación, no como tratado numerado de la serie.",
    "pack": false
  }
];

export function indiceTratado(slug: string) {
  return TRATADOS_INDICE.find((t) => t.slug === slug);
}
