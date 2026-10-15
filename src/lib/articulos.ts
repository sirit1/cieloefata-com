/**
 * Artículos de la casa. Cada uno nace del material que el sitio ya tiene sobre su pasaje
 * (aquí, el estudio de Santiago 1 y el tratado El crisol de lo oído).
 * Las citas, entre asteriscos, siguen la Reina-Valera 1960.
 * Texto bíblico tomado de la versión Reina-Valera © 1960 Sociedades Bíblicas en América Latina; © renovado 1988 Sociedades Bíblicas Unidas. Utilizado con permiso. Reina-Valera 1960 es una marca registrada de la American Bible Society, y puede ser usada solamente bajo licencia.
 */
export const DESCRIPCION_ARTICULOS =
  "Artículos de Alejandro Sirit sobre un pasaje entero de la Escritura, escritos desde los estudios, tratados y obras de la casa, con la Reina-Valera 1960.";

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
    slug: "santiago-3-de-una-misma-boca",
    title: "De una misma boca proceden bendición y maldición",
    seoTitle: "Santiago 3:9–12: de una misma boca | Alejandro Sirit",
    seoDescription:
      "Qué enseña Santiago 3:9–12: de una misma boca proceden bendición y maldición. La fuente, la higuera y el corazón nuevo que solo Dios da.",
    pasaje: "Santiago 3:9–12",
    published: "2026-10-13",
    resumen:
      "La boca que confiesa a Jesús como Señor no puede maldecir al hombre hecho a la semejanza de Dios: Santiago no pide una lengua mejor educada, sino una fuente nueva.",
    secciones: [
      {
        parrafos: [
          "Hay un hombre que esta mañana confesó con su boca que Jesús es el Señor, y la confesión fue verdadera, porque la Escritura la pone a la puerta de la salvación: *Que si confesares con tu boca al Señor Jesús, y creyeres en tu corazón que Dios le levantó de los muertos, serás salvo* (Romanos 10:9). Pero el día avanza, y antes de la noche esa misma boca habrá dicho otras cosas. Santiago no escribe para los que nunca confesaron, sino para los hermanos que sí lo hicieron, y por eso su sentencia cae dentro de la iglesia y no fuera de ella: *Con ella bendecimos al Dios y Padre, y con ella maldecimos á los hombres, los cuales son hechos á la semejanza de Dios. De una misma boca proceden bendición y maldición. Hermanos míos, no conviene que estas cosas sean así hechas* (Santiago 3:9–10).",
        ],
      },
      {
        titulo: "La misma lengua, el mismo día",
        parrafos: [
          "El apóstol no habla de dos clases de personas, unas que bendicen y otras que maldicen, sino de una sola boca que hace las dos cosas. El escándalo no está en que el impío maldiga, cosa que nadie espera de otro modo, sino en que el adorador vuelva del culto con la alabanza todavía en los labios y la descargue, convertida en desprecio, sobre el hermano que tiene delante. Santiago incluso se cuenta a sí mismo en el plural: bendecimos, maldecimos. Ya lo había confesado al principio del capítulo, cuando escribió *Porque todos ofendemos en muchas cosas* (Santiago 3:2), y quien lee este párrafo como si hablara del vecino ha dejado de leerlo en el primer pronombre.",
          "Lo que agrava la contradicción es el destinatario de la maldición. No se maldice a una cosa, sino a hombres *hechos á la semejanza de Dios*. El que bendice al Padre y maldice a su imagen pretende honrar el original mientras escupe sobre el retrato, y Dios no acepta esa división, porque toma como hecho a sí mismo lo que se hace contra el hombre que lleva su semejanza. Por eso la frase final no es una recomendación de buenos modales: *no conviene que estas cosas sean así hechas*. Es la constatación de que algo en el orden de la creación ha sido violado, y de que la alabanza de la mañana queda desmentida por la maldición de la tarde.",
        ],
      },
      {
        titulo: "La fuente no miente",
        parrafos: [
          "Santiago no se detiene en la exhortación; baja a la naturaleza de las cosas, porque quiere que el lector vea que el problema no está en la superficie de las palabras: *¿Echa alguna fuente por una misma abertura agua dulce y amarga?* (Santiago 3:11). Nadie que haya sacado agua de un pozo necesita que le expliquen la pregunta. Una fuente da lo que tiene, y si por la misma abertura sale lo dulce y lo amargo, el agua dulce no prueba que la fuente esté sana; es lo amargo lo que revela el estado de la vena.",
          "El Señor había dicho lo mismo con palabras que no dejan escapatoria: *porque de la abundancia del corazón habla la boca. El hombre bueno del buen tesoro del corazón saca buenas cosas: y el hombre malo del mal tesoro saca malas cosas* (Mateo 12:34–35). La boca es la abertura, no el manantial. Quien intenta corregir la lengua sin tocar el corazón se parece al que pinta de azul el brocal de un pozo salobre: el agua seguirá amarga aunque el borde luzca limpio. Y el mismo pasaje del Evangelio añade la cuenta que todos daremos: *Porque por tus palabras serás justificado, y por tus palabras serás condenado* (Mateo 12:37).",
        ],
      },
      {
        titulo: "La higuera no da aceitunas",
        parrafos: [
          "La segunda imagen sale del huerto y no del pozo: *Hermanos míos, ¿puede la higuera producir aceitunas, ó la vid higos? Así ninguna fuente puede hacer agua salada y dulce* (Santiago 3:12). La fuente enseñaba que la boca revela lo que hay dentro; la higuera enseña que lo de dentro tiene una naturaleza fija, y que esa naturaleza no se cambia con esfuerzo. Ningún labrador consigue aceitunas de una higuera a fuerza de podarla, regarla o reprenderla. Si quiere aceitunas, necesita otro árbol.",
          "Aquí se cierra la puerta a toda solución de fachada. Pocos versículos antes el apóstol había escrito que *ningún hombre puede domar la lengua, que es un mal que no puede ser refrenado; llena de veneno mortal* (Santiago 3:8). Toda naturaleza de bestias y de aves se doma, pero la lengua no figura en el catálogo de lo domable. Esto no es una invitación al fatalismo, sino a la desesperación sana del que deja de confiar en sí mismo. El hombre no puede domar su lengua, pero Dios puede darle un corazón nuevo; el árbol no puede cambiar su fruto, pero el Señor puede injertarlo en otra raíz.",
        ],
      },
      {
        titulo: "Labios inmundos y un carbón del altar",
        parrafos: [
          "La Escritura conoce a un hombre que descubrió su boca delante del Rey. Isaías vio la gloria de Dios y no pudo decir otra cosa que esta: *Ay de mí! que soy muerto; que siendo hombre inmundo de labios, y habitando en medio de pueblo que tiene labios inmundos, han visto mis ojos al Rey, Jehová de los ejércitos* (Isaías 6:5). El profeta no se acusó de pensamientos vagos, sino de labios. Y la respuesta del cielo no fue un curso de oratoria, sino fuego tomado del altar: *Y tocando con él sobre mi boca, dijo: He aquí que esto tocó tus labios, y es quitada tu culpa, y limpio tu pecado* (Isaías 6:7). La limpieza vino del lugar del sacrificio, y por eso apunta a la cruz, donde el Hijo derramó la sangre que limpia lo que ninguna disciplina humana alcanza.",
          "La convicción, entonces, no es un mal momento que haya que superar, sino el principio de la misericordia. El que ha oído Santiago 3 y ha reconocido su propia boca en el plural del apóstol no necesita justificarse diciendo que fue provocado, ni minimizar su maldición llamándola franqueza. Necesita confesarla con la misma boca que pecó: *Si confesamos nuestros pecados, él es fiel y justo para que nos perdone nuestros pecados, y nos limpie de toda maldad* (1 Juan 1:9).",
        ],
      },
      {
        titulo: "Volverse, y permanecer",
        parrafos: [
          "La confesión que no se vuelve arrepentimiento es otra palabra más de la misma fuente. Pedro llamó a sus oyentes a un cambio real de dirección: *Así que, arrepentíos y convertíos, para que sean borrados vuestros pecados* (Hechos 3:19). Para el que todavía no ha obedecido el evangelio, ese volverse comienza donde comenzó en Jerusalén: *Arrepentíos, y bautícese cada uno de vosotros en el nombre de Jesucristo para perdón de los pecados; y recibiréis el don del Espíritu Santo* (Hechos 2:38). Para el que ya fue bautizado y ha vuelto a maldecir, el camino es buscar al hermano ofendido antes de volver a cantar, porque la bendición que se ofrece a Dios mientras se retiene la reconciliación con su imagen sigue siendo agua amarga en la misma abertura.",
          "Después viene la perseverancia, que es la obra más larga. La lengua no se rinde en una tarde, y el creyente que hoy calla una maldición mañana tendrá que callarla otra vez. Por eso la oración del salmista no es de un solo día: *Pon, oh Jehová, guarda á mi boca: Guarda la puerta de mis labios* (Salmos 141:3). Y por eso Santiago, al terminar el capítulo, no promete una lengua domada por técnica, sino una sabiduría que viene de arriba, *primeramente es pura, después pacífica, modesta, benigna, llena de misericordia y de buenos frutos* (Santiago 3:17). Esos frutos son los de otro árbol.",
          "El que confesó esta mañana que Jesús es el Señor no tiene que fabricarse una boca nueva; tiene que permanecer junto a la fuente que no se agota y dejar que ella cambie lo que mana de él. *Porque participantes de Cristo somos hechos, con tal que conservemos firme hasta el fin el principio de nuestra confianza* (Hebreos 3:14). Si al leer este párrafo has visto en tu propia boca la contradicción que Santiago denuncia, no la cubras con una palabra amable: confiésala, vuélvete, busca hoy al hermano que maldijiste y pide al Señor que guarde la puerta de tus labios mañana también.",
        ],
      },
    ],
    relacionados: [
      { to: "/obras/de-una-misma-boca", label: "De una misma boca · el libro sobre Santiago 3" },
      { to: "/articulos/santiago-2-la-fe-que-obra", label: "Santiago 2:14–26: la fe que obra" },
      { to: "/estudios/santiago-1", label: "Pronto para oír · estudio de Santiago 1:19–27" },
      { to: "/obras/el-altar-del-espejo", label: "El altar del espejo · Santiago 1" },
      { to: "/camino", label: "El camino · conocer a Dios, arrepentimiento, bautismo y firmeza" },
    ],
  },
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
