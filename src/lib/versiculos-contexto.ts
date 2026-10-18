/**
 * «Versículos fuera de contexto»: páginas «¿Qué significa…?» (/versiculos/…), una por versículo muy citado
 * a solas. Cada una recorre el texto con el método V.E.R.D.A.D. y remite al tratado completo de la casa, que
 * no se copia aquí. Citas castellanas: Reina-Valera 1960 literal, cotejada el 18-10-2026 con
 * /workspace/biblioteca-biblica/consulta.py. Hebreo: Códice de Leningrado (WLC/OSHB, el texto que edita la BHS).
 * Griego: Textus Receptus de Scrivener (1894), sin acentos en la fuente digital. Lemas, definiciones y conteos:
 * léxico de Strong de la misma biblioteca (WLC y TR). Nada de esto se inventa: lo que no se pudo verificar no entra.
 */

export type Verso = { v: number; t: string };
export type Palabra = {
  lengua: "hebreo" | "griego";
  lema: string;
  translit: string;
  strong: string;
  /** Explicación del número Strong y de lo que la palabra aporta, en prosa. */
  prosa: string;
};
export type Cita = { ref: string; t: string; nota: string };
export type Faq = { q: string; a: string };

export type VersiculoContexto = {
  slug: string;
  ref: string;
  /** Pasaje que se lee entero (para RevelatiO y la caja del método). */
  capitulo: string;
  /** Lo que el texto original carga en la página: «hebreo» o «griego». */
  lengua: "hebreo" | "griego";
  titulo: string;
  description: string;
  texto: string;
  /** El uso suelto que se oye, dicho con honestidad. */
  usoSuelto: string;
  respuesta: string;
  parrafo: { ref: string; versos: Verso[] };
  original: { texto: string; fuente: string };
  verdad: {
    ver: string;
    entorno: string;
    revelacion: string;
    palabras: Palabra[];
    doctrina: string;
    argumento: { objecion: string; respuesta: string };
    decision: string;
  };
  referencias: Cita[];
  faq: Faq[];
  tratado: { slug: string; title: string };
  relacionados: { href: string; label: string }[];
  og: string;
};

export const VERSICULOS_CONTEXTO: readonly VersiculoContexto[] = [
  {
    slug: "jeremias-29-11",
    ref: "Jeremías 29:11",
    capitulo: "Jeremías 29",
    lengua: "hebreo",
    titulo: "¿Qué significa Jeremías 29:11? Contexto, hebreo y uso correcto",
    description:
      "Jeremías 29:11 en su carta: a desterrados en Babilonia, con setenta años de plazo. El hebreo, los Strong y el uso correcto, paso a paso con V.E.R.D.A.D.",
    texto:
      "Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis.",
    usoSuelto:
      "Se regala en graduaciones y se cuelga en la pared como si dijera: «Dios tiene un plan para que tu proyecto salga bien pronto».",
    respuesta:
      "Jeremías 29:11 es una cláusula de la carta que el profeta envió a los judíos deportados a Babilonia. Dios les promete paz y un porvenir, pero después de setenta años de destierro (29:10), no en dos, como anunciaban los falsos profetas. El «vosotros» es plural: un pueblo bajo disciplina, al que se le manda edificar, plantar y orar por la ciudad enemiga mientras espera. El versículo sí habla hoy al creyente, porque lo escrito se escribió para nuestra enseñanza (Romanos 15:4), pero enseña la fidelidad de Dios a su palabra a través de la espera, no un atajo para el plan personal de cada lector.",
    parrafo: {
      ref: "Jeremías 29:10–14",
      versos: [
        { v: 10, t: "Porque así dijo Jehová: Cuando en Babilonia se cumplan los setenta años, yo os visitaré, y despertaré sobre vosotros mi buena palabra, para haceros volver a este lugar." },
        { v: 11, t: "Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis." },
        { v: 12, t: "Entonces me invocaréis, y vendréis y oraréis a mí, y yo os oiré;" },
        { v: 13, t: "y me buscaréis y me hallaréis, porque me buscaréis de todo vuestro corazón." },
        { v: 14, t: "Y seré hallado por vosotros, dice Jehová, y haré volver vuestra cautividad, y os reuniré de todas las naciones y de todos los lugares adonde os arrojé, dice Jehová; y os haré volver al lugar de donde os hice llevar." },
      ],
    },
    original: {
      texto: "כִּי אָנֹכִי יָדַעְתִּי אֶת־הַמַּחֲשָׁבֹת אֲשֶׁר אָנֹכִי חֹשֵׁב עֲלֵיכֶם נְאֻם־יְהוָה מַחְשְׁבוֹת שָׁלוֹם וְלֹא לְרָעָה לָתֵת לָכֶם אַחֲרִית וְתִקְוָה",
      fuente: "Jeremías 29:11, Códice de Leningrado (WLC), sin acentos de cantilación.",
    },
    verdad: {
      ver: "Lee Jeremías 29 entero antes de detenerte en el versículo once. El versículo empieza con «porque»: explica el anterior, donde Dios fija el plazo de setenta años. Lo siguen tres verbos de oración (invocaréis, oraréis, buscaréis) y una promesa de regreso. A lo largo del capítulo se repiten «transportados» (29:1, 29:20) y «falsamente» (29:9, 29:21, 29:23): es una carta a deportados contra los profetas que prometían un regreso rápido.",
      entorno:
        "El primer versículo nombra a los destinatarios: «Estas son las palabras de la carta que el profeta Jeremías envió de Jerusalén a los ancianos que habían quedado de los que fueron transportados, y a los sacerdotes y profetas y a todo el pueblo que Nabucodonosor llevó cautivo de Jerusalén a Babilonia» (Jeremías 29:1). Es una carta profética a deportados. Un capítulo antes, Hananías había anunciado en nombre de Dios: «Dentro de dos años haré volver a este lugar todos los utensilios de la casa de Jehová» (Jeremías 28:3). Jeremías responde que eso es mentira: «Porque falsamente os profetizan ellos en mi nombre; no los envié, ha dicho Jehová» (29:9). Por eso manda lo contrario de hacer maletas: «Edificad casas, y habitadlas; y plantad huertos, y comed del fruto de ellos» (29:5), y «procurad la paz de la ciudad a la cual os hice transportar, y rogad por ella a Jehová; porque en su paz tendréis vosotros paz» (29:7).",
      revelacion:
        "Cinco palabras del hebreo llevan el peso del versículo. Ninguna de ellas promete éxito individual; todas hablan de lo que Dios ha determinado para su pueblo.",
      palabras: [
        {
          lengua: "hebreo",
          lema: "מַחֲשָׁבָה",
          translit: "machăshâbâh",
          strong: "H4284",
          prosa:
            "«Pensamientos». El número Strong H4284 es la etiqueta que el diccionario de James Strong da a מַחֲשָׁבָה (machăshâbâh), que viene del verbo חָשַׁב (châshab, H2803: tejer, idear). Strong la define como designio, plan o intención. El texto hebreo del Antiguo Testamento la usa 56 veces, y el versículo la pone dos veces y con el verbo de la misma raíz: los pensamientos que yo pienso. Isaías usa la misma palabra para marcar la distancia: «Porque mis pensamientos no son vuestros pensamientos» (Isaías 55:8). El designio es de Jehová, no del lector.",
        },
        {
          lengua: "hebreo",
          lema: "עַל",
          translit: "ʻal",
          strong: "H5921",
          prosa:
            "«Acerca de vosotros». La preposición עַל (ʻal, Strong H5921: sobre, acerca de) lleva aquí el sufijo de segunda persona del plural: עֲלֵיכֶם (ʻălêykem). En hebreo, como en la Reina-Valera, el destinatario es «vosotros», no «tú». El versículo se dirige a una comunidad entera bajo juicio, no a un individuo que busca dirección para su carrera.",
        },
        {
          lengua: "hebreo",
          lema: "שָׁלוֹם",
          translit: "shâlôwm",
          strong: "H7965",
          prosa:
            "«Paz». שָׁלוֹם (shâlôwm, Strong H7965) significa integridad, bienestar y paz. La misma palabra aparece tres veces en el versículo 7, en la paz de Babilonia que los desterrados deben procurar. La paz del versículo 11 no anula la orden del 7: la paz que Dios piensa para su pueblo pasa por orar por la ciudad del destierro.",
        },
        {
          lengua: "hebreo",
          lema: "אַחֲרִית",
          translit: "ʼachărîyth",
          strong: "H319",
          prosa:
            "«El fin». אַחֲרִית (ʼachărîyth, Strong H319) es lo último, el final, y de ahí el porvenir y también la descendencia. Lo que Dios promete es un final, no un comienzo inmediato. Por eso el versículo 6 manda casar a los hijos y a las hijas: setenta años abarcan generaciones, y la promesa también.",
        },
        {
          lengua: "hebreo",
          lema: "תִּקְוָה",
          translit: "tiqvâh",
          strong: "H8615",
          prosa:
            "«Que esperáis». תִּקְוָה (tiqvâh, Strong H8615) significa literalmente cuerda y, en sentido figurado, expectativa o esperanza. Es el «cordón de grana» de Rahab (Josué 2:18) y la esperanza de Jeremías 31:17: «Esperanza hay también para tu porvenir, dice Jehová, y los hijos volverán a su propia tierra». Allí aparecen juntas las mismas dos palabras, y el sujeto vuelve a ser «los hijos».",
        },
      ],
      doctrina:
        "El texto enseña que Dios gobierna la historia, incluso la disciplina de su pueblo, y que su palabra se cumple a su tiempo. La Escritura misma registra el cumplimiento: «En el primer año de Ciro rey de Persia, para que se cumpliese la palabra de Jehová por boca de Jeremías, despertó Jehová el espíritu de Ciro» (Esdras 1:1). Daniel leyó esta profecía y oró: «yo Daniel miré atentamente en los libros el número de los años de que habló Jehová al profeta Jeremías» (Daniel 9:2). Para el creyente, la promesa no se apropia saltándose el contexto, sino en Cristo: «porque todas las promesas de Dios son en él Sí, y en él Amén» (2 Corintios 1:20). La esperanza bíblica tiene la forma de la carta: fidelidad de Dios, espera obediente y oración de todo corazón (29:13).",
      argumento: {
        objecion: "«Entonces, ¿este versículo no es para mí?»",
        respuesta:
          "Sí lo es, pero tal como Dios lo escribió. «Porque las cosas que se escribieron antes, para nuestra enseñanza se escribieron, a fin de que por la paciencia y la consolación de las Escrituras, tengamos esperanza» (Romanos 15:4). Pablo une la esperanza con la paciencia, igual que Jeremías. Lo que el versículo no te da es una garantía de que tu plan saldrá bien pronto; lo que sí te da es un Dios que cumple lo que dice aunque tarde setenta años, y que se deja hallar por quien lo busca de todo corazón (29:13).",
      },
      decision:
        "Esta semana lee Jeremías 29:1–14 en voz alta. Copia los tres mandatos de los versículos 5 al 7 (edificad, plantad, procurad la paz) y escoge uno para obedecerlo donde Dios te ha puesto hoy, aunque no sea donde querías estar. Ora por tu ciudad un día concreto y cuéntaselo a alguien de confianza.",
    },
    referencias: [
      { ref: "Jeremías 25:11", t: "Toda esta tierra será puesta en ruinas y en espanto; y servirán estas naciones al rey de Babilonia setenta años.", nota: "El plazo ya estaba anunciado: setenta años." },
      { ref: "Isaías 55:8", t: "Porque mis pensamientos no son vuestros pensamientos, ni vuestros caminos mis caminos, dijo Jehová.", nota: "La misma palabra hebrea (H4284): el designio es de Dios." },
      { ref: "Lamentaciones 3:26", t: "Bueno es esperar en silencio la salvación de Jehová.", nota: "El mismo profeta, la misma espera." },
      { ref: "2 Crónicas 36:21", t: "para que se cumpliese la palabra de Jehová por boca de Jeremías, hasta que la tierra hubo gozado de reposo; porque todo el tiempo de su asolamiento reposó, hasta que los setenta años fueron cumplidos.", nota: "La Escritura registra el cumplimiento." },
    ],
    faq: [
      {
        q: "¿A quién se dirige Jeremías 29:11?",
        a: "A los judíos deportados a Babilonia. El capítulo es una carta que Jeremías envió desde Jerusalén «a los ancianos que habían quedado de los que fueron transportados, y a los sacerdotes y profetas y a todo el pueblo» (Jeremías 29:1). En hebreo el «vosotros» es plural.",
      },
      {
        q: "¿Qué significa «el fin que esperáis» en hebreo?",
        a: "Traduce dos palabras: אַחֲרִית (ʼachărîyth, Strong H319), que es el final o el porvenir, y תִּקְוָה (tiqvâh, Strong H8615), que es literalmente una cuerda y, en sentido figurado, la esperanza. Dios promete un porvenir y una esperanza al final del destierro, no un éxito inmediato.",
      },
      {
        q: "¿Cuándo se cumplió Jeremías 29:11?",
        a: "Al cumplirse los setenta años del versículo 10. Esdras 1:1 dice que en el primer año de Ciro rey de Persia, «para que se cumpliese la palabra de Jehová por boca de Jeremías», Dios despertó su espíritu para permitir el regreso.",
      },
      {
        q: "¿Puedo aplicar Jeremías 29:11 a mi vida?",
        a: "Sí, como enseñanza (Romanos 15:4): Dios es fiel a su palabra y se deja hallar por quien lo busca de todo corazón (29:13). No como garantía de que un plan personal saldrá bien pronto, porque el versículo habla de setenta años de espera obediente.",
      },
    ],
    tratado: { slug: "el-pensamiento-que-no-era-tuyo", title: "El pensamiento que no era tuyo" },
    relacionados: [
      { href: "/tratados/para-bien", label: "Tratado «Para bien» (Romanos 8:28)" },
      { href: "/tratados/las-ventanas-de-los-cielos", label: "Tratado «Las ventanas de los cielos» (Malaquías 3:10)" },
      { href: "/objeciones", label: "Otros versículos que se citan solos" },
    ],
    og: "/og/versiculos/jeremias-29-11.jpg",
  },
  {
    slug: "filipenses-4-13",
    ref: "Filipenses 4:13",
    capitulo: "Filipenses 4",
    lengua: "griego",
    titulo: "¿Qué significa Filipenses 4:13? Contexto, griego y uso correcto",
    description:
      "«Todo lo puedo en Cristo» lo escribió un preso que aprendió a contentarse. El griego, los Strong y el uso correcto de Filipenses 4:13 con V.E.R.D.A.D.",
    texto: "Todo lo puedo en Cristo que me fortalece.",
    usoSuelto:
      "Se lleva tatuado o se recita antes del partido, del examen o de la venta, como si dijera: «con Cristo puedo lograr cualquier meta que me proponga».",
    respuesta:
      "Filipenses 4:13 lo escribe Pablo preso, al agradecer una ofrenda de la iglesia de Filipos. El «todo» se refiere a lo que acaba de decir en el versículo 12: vivir humildemente y tener abundancia, estar saciado y tener hambre. Pablo no promete que Cristo hará ganar cualquier meta, sino que Cristo le da fuerza para estar contento en cualquier situación, sea de escasez o de abundancia. El versículo es para todo creyente, pero con su perímetro: la fuerza para el contentamiento y la fidelidad, no un cheque en blanco para los planes propios.",
    parrafo: {
      ref: "Filipenses 4:10–14",
      versos: [
        { v: 10, t: "En gran manera me gocé en el Señor de que ya al fin habéis revivido vuestro cuidado de mí; de lo cual también estabais solícitos, pero os faltaba la oportunidad." },
        { v: 11, t: "No lo digo porque tenga escasez, pues he aprendido a contentarme, cualquiera que sea mi situación." },
        { v: 12, t: "Sé vivir humildemente, y sé tener abundancia; en todo y por todo estoy enseñado, así para estar saciado como para tener hambre, así para tener abundancia como para padecer necesidad." },
        { v: 13, t: "Todo lo puedo en Cristo que me fortalece." },
        { v: 14, t: "Sin embargo, bien hicisteis en participar conmigo en mi tribulación." },
      ],
    },
    original: {
      texto: "παντα ισχυω εν τω ενδυναμουντι με χριστω",
      fuente: "Filipenses 4:13, Textus Receptus de Scrivener (1894); la fuente digital no trae acentos.",
    },
    verdad: {
      ver: "Lee Filipenses 4 entero, y al menos los versículos 10 al 20. El versículo 13 está entre dos frases sobre dinero y necesidad: antes, «he aprendido a contentarme» (4:11); después, «bien hicisteis en participar conmigo en mi tribulación» (4:14). Las palabras que se repiten son abundancia, necesidad y «aprendido» o «enseñado». El tema del párrafo no es el logro, sino el contentamiento y la gratitud.",
      entorno:
        "Pablo escribe desde la prisión: «mis prisiones se han hecho patentes en Cristo en todo el pretorio, y a todos los demás» (Filipenses 1:13). La carta agradece un envío de Filipos: «todo lo he recibido, y tengo abundancia; estoy lleno, habiendo recibido de Epafrodito lo que enviasteis» (4:18). Es una carta de amistad y gratitud de un preso a una iglesia que lo sostuvo, no un discurso de motivación.",
      revelacion:
        "Cinco palabras del griego del Textus Receptus muestran de qué «todo» habla Pablo y de dónde viene la fuerza.",
      palabras: [
        {
          lengua: "griego",
          lema: "πᾶς",
          translit: "pâs",
          strong: "G3956",
          prosa:
            "«Todo». πάντα, de πᾶς (pâs, Strong G3956: todo, cada, el conjunto), es el objeto del verbo. En el versículo anterior Pablo ya dijo qué incluye ese todo: «en todo y por todo estoy enseñado» (4:12), con la misma palabra. El todo tiene perímetro: hartura y hambre, abundancia y necesidad.",
        },
        {
          lengua: "griego",
          lema: "ἰσχύω",
          translit: "ischýō",
          strong: "G2480",
          prosa:
            "«Puedo». ἰσχύω (ischýō, Strong G2480) significa tener o ejercer fuerza, ser capaz. Es tener fuerza para resistir y cumplir, no la garantía de un resultado. La Reina-Valera traduce el mismo verbo «prevalecer» en Hechos 19:20: «Así crecía y prevalecía poderosamente la palabra del Señor».",
        },
        {
          lengua: "griego",
          lema: "ἐνδυναμόω",
          translit: "endynamóō",
          strong: "G1743",
          prosa:
            "«Que me fortalece». ἐνδυναμόω (endynamóō, Strong G1743: dar poder, fortalecer) está en participio presente: el que me está fortaleciendo, una y otra vez. La fuerza no es de Pablo, sino de Otro. El Textus Receptus nombra a ese Otro al final de la frase: Χριστῷ (Christṓ), a Cristo. Algunas ediciones griegas modernas omiten esa palabra, pero el sentido no cambia, porque el párrafo entero dice «en el Señor» (4:10). La palabra aparece 8 veces en el Nuevo Testamento del Textus Receptus; Pablo la usa de nuevo en la cárcel: «el Señor estuvo a mi lado, y me dio fuerzas» (2 Timoteo 4:17).",
        },
        {
          lengua: "griego",
          lema: "αὐτάρκης",
          translit: "autárkēs",
          strong: "G842",
          prosa:
            "«Contentarme» (4:11). αὐτάρκης (autárkēs, Strong G842) significa contento, al que le basta lo que tiene. En el griego de la época podía significar también bastarse a sí mismo; Pablo lo pone al revés, porque le basta lo que tiene precisamente porque Otro le fortalece. Solo aparece aquí en todo el Nuevo Testamento del Textus Receptus. Su pariente αὐτάρκεια (G841) está en 1 Timoteo 6:6: «gran ganancia es la piedad acompañada de contentamiento».",
        },
        {
          lengua: "griego",
          lema: "μυέω",
          translit: "myéō",
          strong: "G3453",
          prosa:
            "«Estoy enseñado» (4:12). μυέω (myéō, Strong G3453) significa iniciar, instruir. Pablo dice que fue enseñado, como quien aprende un secreto a fuerza de vivirlo. El contentamiento no es un temperamento: se aprende en la escuela de la escasez y de la abundancia. También aparece una sola vez en el Nuevo Testamento del Textus Receptus.",
        },
      ],
      doctrina:
        "El texto enseña la unión del creyente con Cristo: separados de él no hay fuerza, porque «separados de mí nada podéis hacer» (Juan 15:5). Enseña que el poder de Cristo se muestra en la debilidad: «Bástate mi gracia; porque mi poder se perfecciona en la debilidad» (2 Corintios 12:9). Y enseña que Dios provee para su pueblo: «Mi Dios, pues, suplirá todo lo que os falta conforme a sus riquezas en gloria en Cristo Jesús» (Filipenses 4:19). La fuerza de 4:13 es la gracia suficiente para estar contento y fiel en cualquier situación, no un poder para dominar las circunstancias.",
      argumento: {
        objecion: "«Entonces, ¿no puedo pedirle a Dios fuerzas para mi examen, mi trabajo o mi partido?»",
        respuesta:
          "Puedes y debes orar por todo: «Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con acción de gracias» (Filipenses 4:6). Pero el versículo 13 no promete el resultado. Promete que, si ganas o pierdes, si tienes o te falta, Cristo te dará fuerza para estar contento y seguir siendo fiel. Esa promesa es mayor que la del tatuaje, porque sirve también el día en que pierdes.",
      },
      decision:
        "Esta semana lee Filipenses 4:10–20 dos veces. Escribe una situación concreta de escasez o de abundancia que estás viviendo, y escribe al lado qué significa estar contento en Cristo en esa situación. Luego haz lo que hicieron los filipenses (4:14): participa con algo concreto en la necesidad de un hermano, y cuéntaselo a alguien de confianza.",
    },
    referencias: [
      { ref: "2 Corintios 12:10", t: "Por lo cual, por amor a Cristo me gozo en las debilidades, en afrentas, en necesidades, en persecuciones, en angustias; porque cuando soy débil, entonces soy fuerte.", nota: "La misma escuela: fuerza en la debilidad." },
      { ref: "Juan 15:5", t: "Yo soy la vid, vosotros los pámpanos; el que permanece en mí, y yo en él, este lleva mucho fruto; porque separados de mí nada podéis hacer.", nota: "El «en Cristo» de 4:13 es unión con él." },
      { ref: "1 Timoteo 1:12", t: "Doy gracias al que me fortaleció, a Cristo Jesús nuestro Señor, porque me tuvo por fiel, poniéndome en el ministerio,", nota: "El mismo verbo griego (G1743): Cristo fortalece para la fidelidad." },
      { ref: "1 Timoteo 6:6", t: "Pero gran ganancia es la piedad acompañada de contentamiento;", nota: "El contentamiento como ganancia (G841)." },
    ],
    faq: [
      {
        q: "¿Qué significa realmente «todo lo puedo en Cristo»?",
        a: "Que Cristo da fuerza para estar contento en cualquier situación. El «todo» se refiere al versículo 12: vivir humildemente y tener abundancia, estar saciado y tener hambre. Pablo lo escribe preso, agradeciendo una ofrenda.",
      },
      {
        q: "¿Dónde estaba Pablo cuando escribió Filipenses 4:13?",
        a: "En prisión. Él mismo dice que sus prisiones se habían hecho patentes en Cristo en todo el pretorio (Filipenses 1:13), y escribe para agradecer lo que la iglesia de Filipos le envió por medio de Epafrodito (4:18).",
      },
      {
        q: "¿Qué significa «me fortalece» en griego?",
        a: "Traduce ἐνδυναμόω (endynamóō, Strong G1743), dar poder o fortalecer. Está en participio presente: el que me está fortaleciendo de continuo. La fuerza viene de Cristo, no del creyente.",
      },
      {
        q: "¿Está mal usar Filipenses 4:13 en el deporte o en los estudios?",
        a: "Se puede orar por todo (Filipenses 4:6), pero el versículo no promete ganar. Promete fuerza para estar contento y fiel tanto si se gana como si se pierde, que es lo que Pablo había aprendido.",
      },
    ],
    tratado: { slug: "todo-lo-puedo", title: "Todo lo puedo" },
    relacionados: [
      { href: "/versiculo/2-corintios-12-9", label: "2 Corintios 12:9: «Bástate mi gracia»" },
      { href: "/estudios/2-corintios-12", label: "Estudio de 2 Corintios 12" },
      { href: "/estudios/filipenses-2", label: "Estudio de Filipenses 2" },
      { href: "/objeciones", label: "Otros versículos que se citan solos" },
    ],
    og: "/og/versiculos/filipenses-4-13.jpg",
  },
];

export function versiculoContexto(slug: string) {
  return VERSICULOS_CONTEXTO.find((v) => v.slug === slug);
}

/** FAQPage de schema.org con las preguntas visibles de la página (no se añaden otras). */
export function faqJsonLd(v: Pick<VersiculoContexto, "faq">) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: v.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export const DESCRIPCION_VERSICULOS =
  "Versículos que se citan fuera de contexto, leídos en su capítulo: el hebreo y el griego, los números Strong y el uso correcto, con el método V.E.R.D.A.D.";
