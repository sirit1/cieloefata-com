/**
 * Artículos de la casa. Cada uno nace del material que el sitio ya tiene sobre su pasaje
 * (aquí, La fe no basta, el estudio de Santiago 1 y el tratado El crisol de lo oído).
 * Las citas, entre asteriscos, siguen la Reina-Valera 1909.
 */
export const DESCRIPCION_ARTICULOS =
  "Artículos de Alejandro Sirit sobre un pasaje entero de la Escritura, escritos desde los estudios, tratados y obras de la casa, con la Reina-Valera 1909.";

export type Articulo = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  pasaje: string;
  published: string;
  resumen: string;
  secciones: readonly { titulo?: string; parrafos: readonly string[] }[];
  relacionados: readonly { to: string; label: string }[];
};

export const articulos: readonly Articulo[] = [
  {
    slug: "santiago-2-la-fe-que-obra",
    title: "Santiago 2:14–26: la fe que obra",
    seoTitle: "Santiago 2: la fe sin obras es muerta | Alejandro Sirit",
    seoDescription:
      "Qué significa que la fe sin obras es muerta en Santiago 2:14–26: no una feria de méritos contra Pablo, sino la fe viva que salva y se ve en el hermano.",
    pasaje: "Santiago 2:14–26",
    published: "2026-10-06",
    resumen:
      "Santiago no corrige a Pablo: desnuda la mercancía que circula con el nombre de fe y no es fe, la que dice «id en paz» y no da pan.",
    secciones: [
      {
        parrafos: [
          "Hay una mercancía que circula con el nombre de fe y no es fe. Se reconoce porque habla con soltura, recita lo que conviene y despide al necesitado con una bendición en los labios y las manos vacías. Santiago la pone delante de la iglesia sin adornos y le hace una pregunta que no admite evasivas: *Hermanos míos, ¿qué aprovechará si alguno dice que tiene fe, y no tiene obras? ¿Podrá la fe salvarle?* (Santiago 2:14). El apóstol no pregunta si la fe salva, sino si salva esa fe, la que solo se dice; y la respuesta que el párrafo entero va a dar es tan sobria como terrible: la fe sin obras es muerta.",
        ],
      },
      {
        titulo: "El hermano desnudo a la puerta",
        parrafos: [
          "Santiago no argumenta en el aire. Pone un cuerpo en la puerta de la asamblea: *Y si el hermano ó la hermana están desnudos, y tienen necesidad del mantenimiento de cada día, y alguno de vosotros les dice: Id en paz, calentaos y hartaos; pero no les diereis las cosas que son necesarias para el cuerpo: ¿qué aprovechará?* (Santiago 2:15–16). Las palabras son correctas y el hermano sigue desnudo. Por eso la conclusión cae con todo su peso: *Así también la fe, si no tuviere obras, es muerta en sí misma* (Santiago 2:17).",
          "Santiago no dice que esa fe sea débil, ni incompleta, ni que le falte madurez para crecer con el tiempo; dice que está muerta. El hermano desnudo del capítulo segundo ya se anunciaba en el huérfano y la viuda del primero, donde la religión pura consistía en visitarlos en sus tribulaciones, y el que oyó la palabra y se fue sin hacer es el mismo que ahora despide al hambriento con un saludo.",
        ],
      },
      {
        titulo: "También los demonios creen",
        parrafos: [
          "El apóstol se adelanta a la objeción del que separa la fe de las obras como si fueran dos dones repartidos entre distintos creyentes: *Pero alguno dirá: Tú tienes fe, y yo tengo obras: muéstrame tu fe sin tus obras, y yo te mostraré mi fe por mis obras* (Santiago 2:18). La fe es invisible en su raíz, pero no lo es en su fruto, y el que pretende tenerla sin que nada la muestre pide que se le crea por su palabra, que es precisamente lo que está en cuestión.",
          "Luego viene la frase que debería hacer temblar a toda ortodoxia satisfecha de sí misma: *Tú crees que Dios es uno; bien haces: también los demonios creen, y tiemblan* (Santiago 2:19). Los demonios conocen la gramática del credo y tiemblan; acumular doctrina mientras se vive en amargura no es oír, sino la sordera ilustrada de quien sabe mucho y no se ha rendido. El asentimiento a una verdad correcta no es todavía la fe que salva, porque la fe que salva no se queda en la frase: se entrega a Dios, y el que se ha entregado ya no se pertenece.",
        ],
      },
      {
        titulo: "Abraham en el altar, Rahab en la ventana",
        parrafos: [
          "Santiago llama entonces a dos testigos tan distintos que nadie podría confundirlos. El primero es el padre de la fe: *¿No fué justificado por las obras Abraham nuestro padre, cuando ofreció á su hijo Isaac sobre el altar? ¿No ves que la fe obró con sus obras, y que la fe fué perfecta por las obras? Y fué cumplida la Escritura que dice: Abraham creyó á Dios, y le fué imputado á justicia, y fué llamado amigo de Dios* (Santiago 2:21–23). El orden importa. Abraham creyó y le fue contado por justicia en Génesis 15; el altar del monte llegó años después, en Génesis 22, y no compró una justicia que ya había sido imputada, sino que la mostró y la llevó a su cumplimiento. La fe obró con sus obras; no fueron las obras las que fabricaron la fe.",
          "La segunda testigo es una mujer pagana y de mala fama: *Asimismo también Rahab la ramera, ¿no fué justificada por obras, cuando recibió los mensajeros, y los echó fuera por otro camino?* (Santiago 2:25). Hebreos la cuenta entre los que vivieron por fe, y Santiago señala la prueba de esa fe: abrió la puerta a los espías y arriesgó la vida por el Dios de Israel. Entre el patriarca y la ramera no hay otra cosa en común que esta, que ambos creyeron a Dios y su fe se movió. Por eso el párrafo se cierra con una imagen que no necesita comentario: *Porque como el cuerpo sin espíritu está muerto, así también la fe sin obras es muerta* (Santiago 2:26).",
        ],
      },
      {
        titulo: "Santiago no cancela a Pablo",
        parrafos: [
          "Se ha querido enfrentar este capítulo con Romanos, como si la Escritura se contradijera. Pablo escribe: *Así que, concluímos ser el hombre justificado por fe sin las obras de la ley* (Romanos 3:28), y Santiago parece responder: *Vosotros veis, pues, que el hombre es justificado por las obras, y no solamente por la fe* (Santiago 2:24). Pero los dos apóstoles no responden a la misma pregunta ni combaten al mismo adversario. Romanos justifica al impío por la fe, contra el que pretende presentarse ante Dios con sus méritos; Santiago denuncia al que llama fe a lo que no obra, contra el que pretende presentarse ante Dios con una frase. Aun Pablo, a quien algunos oponen a Santiago, escribe que *no los oidores de la ley son justos para con Dios, mas los hacedores de la ley serán justificados* (Romanos 2:13).",
          "La analogía de la fe se mantiene así entera: la justificación es por la fe sola, y la fe que justifica nunca está sola. Es sola como instrumento y nunca sola como vida. Pablo mismo lo dice en una línea: *la fe que obra por la caridad* (Gálatas 5:6). Por eso hay dos muertos que comparten la misma tumba, el que cita a Pablo para no obrar y el que cita a Santiago para merecer. El primero ha fabricado un evangelio sin espejo; el segundo, un espejo sin evangelio.",
        ],
      },
      {
        titulo: "De la fe muerta a la fe viva",
        parrafos: [
          "Este pasaje no se escribió para que el lector mida la fe del vecino, sino para que se mire en él. Y lo primero que muestra es que no se trata de mejorar una religión, sino de conocer a Dios: *Esta empero es la vida eterna: que te conozcan el solo Dios verdadero, y á Jesucristo, al cual has enviado* (Juan 17:3). Quien descubre que su fe era solo una frase no necesita un programa de buenas obras, sino que el Espíritu le convenza, porque esa es su obra: *Y cuando él viniere redargüirá al mundo de pecado, y de justicia, y de juicio* (Juan 16:8).",
          "A la convicción le sigue el arrepentimiento, que no es un sentimiento al final de la lectura, sino un volverse: *Así que, arrepentíos y convertíos, para que sean borrados vuestros pecados* (Hechos 3:19). Pedro unió en el primer sermón de la iglesia el arrepentimiento y el agua: *Arrepentíos, y bautícese cada uno de vosotros en el nombre de Jesucristo para perdón de los pecados; y recibiréis el don del Espíritu Santo* (Hechos 2:38). El bautismo no es una obra que compre nada, sino la obediencia primera de una fe que ya no quiere quedarse en palabras. Y la conversión es esto mismo hecho vida: el que antes despedía al hermano con un saludo ahora le abre la puerta, le viste y le da pan, no para ser salvo, sino porque lo ha sido.",
          "Queda la perseverancia, que es la fe viva caminando en el tiempo. *Mas el que perseverare hasta el fin, éste será salvo* (Mateo 24:13). La fe que obra no es un arranque de fervor que se apaga con la semana; es la que permanece fundada y firme, obra tras obra, hasta el día en que el Señor la encuentre. Si al leer Santiago 2 has visto que tu fe era solo una frase, no te consueles con una frase nueva: acércate a Cristo, arrepiéntete, pide el agua del bautismo si aún no la has recibido, y busca hoy al hermano necesitado que conoces por su nombre.",
        ],
      },
    ],
    relacionados: [
      { to: "/obras/la-fe-no-basta", label: "La fe no basta · el tomo sobre Santiago 2:14–26" },
      { to: "/estudios/santiago-1", label: "Pronto para oír · estudio de Santiago 1:19–27" },
      { to: "/tratados/el-crisol-de-lo-oido", label: "El crisol de lo oído · tratado sobre Santiago 1:22–25" },
      { to: "/obras/el-altar-del-espejo", label: "El altar del espejo · Santiago 1:22–25" },
      { to: "/camino", label: "El camino · conocer a Dios, arrepentimiento, bautismo y firmeza" },
    ],
  },
];

export function articuloBySlug(slug: string) {
  return articulos.find((a) => a.slug === slug);
}
