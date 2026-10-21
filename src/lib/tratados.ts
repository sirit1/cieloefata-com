import { tratadoMesSlug } from "@/lib/calendario";

/** Ficha. El cuerpo es el libro vigente y no se guarda aquí. */
export type Tratado = {
  slug: string;
  n: string;
  kicker: string;
  ref: string;
  title: string;
  blurb: string;
  pack: boolean;
  /**
   * Excepción a la orden editorial (Puerta): publicada solo en castellano, sin pack
   * (faltan el gemelo inglés y los audios ES/EN). Aprobada por Alejandro Sirit el
   * 18-oct-2026 solo para «Este mismo Jesús» y «No juzguéis». No se usa en otra obra
   * sin su aprobación expresa. Al llegar el pack: `pack: true` y se quita este campo.
   */
  soloEs?: true;
};

/** Visible en el sitio: tiene pack o es una excepción aprobada en castellano. */
export function estaPublicado(t: Pick<Tratado, "pack" | "soloEs">) {
  return t.pack || t.soloEs === true;
}

export const tratados: Tratado[] = [
  {
    slug: "el-texto-manda",
    n: "00",
    kicker: "Método · V.E.R.D.A.D.",
    ref: "Marcos 7:31–37",
    title: "El texto manda",
    blurb:
      "V.E.R.D.A.D. —Ver, Entorno, Revelación, Doctrina, Argumento y Decisión— no es una fórmula para recitar ni una técnica más. Es la manera en que leemos el capítulo completo, como el pueblo en tiempos de Nehemías, hasta entender lo que Dios dijo y obedecerlo.",
    pack: true,
  },
  {
    slug: "el-crisol-de-lo-oido",
    n: "00b",
    kicker: "Crisol · oír y hacer",
    ref: "Santiago 1:22–25",
    title: "El crisol de lo oído",
    blurb:
      "Oír y no hacer no es un retraso inocente, sino engaño de sí. Santiago pone el espejo delante, y el que se mira y se va olvida el rostro. Este tratado ayuda a dar el paso de lo oído a lo obedecido.",
    pack: true,
  },
  {
    slug: "buscad-primeramente",
    n: "01",
    kicker: "Reino · no ansiedad",
    ref: "Mateo 6:33",
    title: "Buscad primeramente",
    blurb:
      "«Buscad primeramente el reino» no es un lema de carrera ni una técnica para que lo demás se añada como premio. Jesús habla a oídos ansiosos, en el Sermón del Monte, y el reino que se busca no es un proyecto personal: es el reinado del Padre, que ya sabe lo que necesitamos.",
    pack: true,
  },
  {
    slug: "todo-lo-puedo",
    n: "02",
    kicker: "Contentamiento · cárcel",
    ref: "Filipenses 4:13",
    title: "Todo lo puedo",
    blurb:
      "«Todo lo puedo en Cristo» no es un cheque en blanco ni un grito de cancha. Pablo escribe desde la cárcel, y el «todo» es el contentamiento: abundar y sufrir necesidad, sin que el yo ocupe el centro.",
    pack: true,
  },
  {
    slug: "el-pensamiento-que-no-era-tuyo",
    n: "03",
    kicker: "Destierro · no talismán",
    ref: "Jeremías 29:11",
    title: "El pensamiento que no era tuyo",
    blurb:
      "«Porque yo sé los pensamientos que tengo acerca de vosotros» no es una póliza individual de prosperidad. Jeremías escribe a desterrados, y el pensamiento de paz es de Jehová: setenta años, no un atajo, y un pueblo, no un eslogan.",
    pack: true,
  },
  {
    slug: "prospere-tu-alma",
    n: "04",
    kicker: "Salud · no prosperidad",
    ref: "3 Juan 2",
    title: "Prospere tu alma",
    blurb:
      "«Yo deseo que tú seas prosperado en todas las cosas, y que tengas salud» no es una promesa de prosperidad material. Juan saluda a Gayo, y el alma que prospera es la que camina en la verdad: hospitalidad, no un cuerpo como ídolo.",
    pack: true,
  },
  {
    slug: "las-ventanas-de-los-cielos",
    n: "05",
    kicker: "Diezmo · no inversión",
    ref: "Malaquías 3:10",
    title: "Las ventanas de los cielos",
    blurb:
      "«Traed todos los diezmos… y probadme ahora en esto» no es un esquema de inversión ni una amenaza de maldición doméstica. Malaquías habla a un pueblo que robaba a Dios en el culto, y las ventanas se abren sobre un pacto, no sobre un contrato de retorno.",
    pack: true,
  },
  {
    slug: "la-muerte-y-la-vida",
    n: "06",
    kicker: "Lengua · no decreto",
    ref: "Proverbios 18:21",
    title: "La muerte y la vida",
    blurb:
      "«La muerte y la vida están en poder de la lengua» no es un decreto de palabra de fe ni una técnica para crear realidades. El proverbio pone peso sobre lo que se dice, y el que ama esa lengua come su fruto: no fabrica un mundo, rinde cuentas.",
    pack: true,
  },
  {
    slug: "a-este-monte",
    n: "07",
    kicker: "Fe · no fórmula",
    ref: "Marcos 11:23–24",
    title: "A este monte",
    blurb:
      "«Cualquiera que dijere a este monte» no es una fórmula para mover obstáculos domésticos. Jesús habla camino de Jerusalén, junto a una higuera seca, y la fe que no duda se mide por el templo y por el perdón, no por el capricho.",
    pack: true,
  },
  {
    slug: "para-bien",
    n: "08",
    kicker: "Pacto · no destino",
    ref: "Romanos 8:28",
    title: "Para bien",
    blurb:
      "«Todas las cosas les ayudan a bien» no es un destino blando ni un consuelo de que todo pasa por algo. Pablo habla a los que aman a Dios, a los llamados conforme a su propósito, y el bien es la imagen del Hijo, no el alivio.",
    pack: true,
  },
  {
    slug: "si-dios-por-nosotros",
    n: "09",
    kicker: "Elección · no invencibilidad",
    ref: "Romanos 8:31",
    title: "Si Dios por nosotros",
    blurb:
      "«Si Dios es por nosotros, ¿quién contra nosotros?» no es un grito de invencibilidad ni un escudo de campaña. Pablo pregunta después de la cadena de 8:28–30, y la respuesta no es que nadie se oponga, sino que nadie puede condenar al que el Hijo compró.",
    pack: true,
  },
  {
    slug: "espiritu-de-poder",
    n: "10",
    kicker: "Don · no autoayuda",
    ref: "2 Timoteo 1:7",
    title: "Espíritu de poder",
    blurb:
      "«No nos ha dado Dios espíritu de cobardía» no es un cartel de autoayuda ni un grito contra el miedo natural. Pablo escribe a Timoteo, que debe avivar el don, y el poder, el amor y el dominio propio son el Espíritu dado, no un temperamento administrado.",
    pack: true,
  },
  {
    slug: "isaias-53",
    n: "11",
    kicker: "Expiación · Siervo",
    ref: "Isaías 53:5",
    title: "Herido por nuestras rebeliones",
    blurb:
      "La llaga del Siervo no es póliza de sanidad automática ni poesía de resiliencia. Isaías 53:5 vuelve al Cántico entero: herido por nuestras rebeliones, ofrenda por la culpa, justificación de muchos. El lector no es el Siervo. Este tratado devuelve el versículo al capítulo que lo sostiene y lleva al libro El Siervo, no tú.",
    pack: true,
  },
  {
    slug: "atar-y-desatar",
    n: "12",
    kicker: "Iglesia · no fórmula",
    ref: "Mateo 18:18–20",
    title: "Atar y desatar",
    blurb:
      "«Todo lo que atéis en la tierra» no es una fórmula de guerra espiritual ni un hechizo de dos o tres. Jesús habla de la iglesia que corrige al hermano, y el atar y desatar es disciplina y perdón, no un decreto contra el aire.",
    pack: true,
  },
  {
    slug: "este-mismo-jesus",
    n: "13",
    kicker: "Esperanza · segunda venida",
    ref: "Hechos 1:9–11",
    title: "Este mismo Jesús",
    blurb:
      "«Así vendrá como le habéis visto ir al cielo» no es un gráfico de profecías ni una fecha para calcular, sino la promesa de Cristo mismo. Desde el monte de los Olivos hasta el «ven, Señor Jesús», este tratado sigue la promesa por toda la Escritura: venida personal y visible, resurrección, juicio y nueva creación, sin tomar partido sobre el milenio.",
    pack: false,
    soloEs: true,
  },
  {
    slug: "no-juzgueis",
    n: "14",
    kicker: "Discernimiento · no mordaza",
    ref: "Mateo 7:1–6",
    title: "No juzguéis",
    blurb:
      "«No juzguéis» no es una mordaza para la verdad ni una licencia para la crítica. En el Sermón del Monte, el Señor manda sacar primero la viga propia y entonces ayudar al hermano con su paja, y en el mismo párrafo pide discernir lo santo. Este estudio devuelve el versículo a su ladera.",
    pack: false,
    soloEs: true,
  },
];

export function entradaTratado(cuerpo: readonly string[]) {
  return cuerpo.find((p) => p.length > 80 && !p.startsWith("CAPÍTULO") && p !== "PÓRTICO") ?? "";
}

export function tratadoDe(slug: string) {
  return tratados.find((t) => t.slug === slug && estaPublicado(t));
}

export { etiquetaTratado } from "@/lib/etiquetas";

export function tratadoDelMes() {
  return tratados.find((t) => t.slug === tratadoMesSlug() && t.pack) ?? tratados.find((t) => t.pack);
}

export function tratadosPublicados() {
  return tratados.filter((t) => estaPublicado(t));
}

export function tratadosProximos() {
  return tratados.filter((t) => !estaPublicado(t));
}
