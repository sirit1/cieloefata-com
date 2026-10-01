/**
 * Serie de cincuenta, mapa del 13 de septiembre de 2026.
 * 01–12 ya tienen manuscrito. 13–50 entran con la restitución de ese mapa:
 * no se finge el PDF ni se inventa el tratado largo.
 */

export type CasaTomo = { slug: string; title: string };

export type SerieFicha = {
  n: string;
  slug: string;
  title: string;
  ref: string;
  lemma: string;
  blurb: string;
  casa: CasaTomo[];
};

const fe: CasaTomo = { slug: "la-fe-no-basta", title: "La fe no basta" };
const basta: CasaTomo = { slug: "bastate-mi-gracia", title: "Bástate" };
const cielo: CasaTomo = { slug: "cuando-el-cielo-se-cae", title: "Cuando el cielo se cae" };
const altar: CasaTomo = { slug: "el-altar-del-espejo", title: "El altar del espejo" };
const callar: CasaTomo = { slug: "callar-para-ganar", title: "Callar para ganar" };
const siervo: CasaTomo = { slug: "el-siervo-no-tu", title: "El Siervo, no tú" };
const efata: CasaTomo = { slug: "efata", title: "Éfata" };

export const SERIE_FICHAS: SerieFicha[] = [
  {
    n: "13",
    slug: "no-juzgueis",
    title: "No juzguéis",
    ref: "Mateo 7:1",
    lemma: "«No juzguéis» — ¿prohibición de discernir?",
    blurb:
      "«No juzguéis» se cita como si el Señor hubiera prohibido todo discernimiento, y Mateo pide otra cosa: no medir con la vara que uno no acepta.",
    casa: [altar],
  },
  {
    n: "14",
    slug: "si-dos-se-pusieren-de-acuerdo",
    title: "Si dos se pusieren de acuerdo",
    ref: "Mateo 18:19",
    lemma: "«Si dos se pusieren de acuerdo» — ¿palanca sobre el Padre?",
    blurb:
      "«Si dos se pusieren de acuerdo» se usa como palanca para obligar al Padre. En Mateo 18 esa oración pertenece a la disciplina de la iglesia, no al deseo de dos.",
    casa: [callar],
  },
  {
    n: "15",
    slug: "no-toqueis-a-mis-ungidos",
    title: "No toquéis a mis ungidos",
    ref: "Salmo 105:15",
    lemma: "«No toquéis a mis ungidos» — ¿inmunidad del líder?",
    blurb:
      "«No toquéis a mis ungidos» se cita como inmunidad del líder. El salmo recuerda la protección de los patriarcas en Génesis, no una patente de corso.",
    casa: [altar],
  },
  {
    n: "16",
    slug: "si-se-humillare-mi-pueblo",
    title: "Si se humillare mi pueblo",
    ref: "2 Crónicas 7:14",
    lemma: "«Si se humillare mi pueblo» — ¿receta nacional de avivamiento?",
    blurb:
      "«Si se humillare mi pueblo» se recita como receta nacional de avivamiento. Es palabra a Salomón sobre Israel y el templo: el arrepentimiento no se vota.",
    casa: [cielo],
  },
  {
    n: "17",
    slug: "te-bendecire",
    title: "Te bendeciré",
    ref: "Génesis 12:2–3",
    lemma: "«Te bendeciré» — ¿plan para heredar a Abram?",
    blurb:
      "«Te bendeciré» se siembra como plan para heredar la bendición de Abram. Es la elección de un pueblo para las naciones, no un negocio.",
    casa: [fe],
  },
  {
    n: "18",
    slug: "poder-para-hacer-las-riquezas",
    title: "Poder para hacer las riquezas",
    ref: "Deuteronomio 8:18",
    lemma: "«Él te da el poder» — ¿norma de hacerse rico?",
    blurb:
      "«Él te da el poder para hacer las riquezas» se oye como norma de riqueza. Es memoria del desierto contra el olvido de la tierra: aviso, no fórmula.",
    casa: [altar],
  },
  {
    n: "19",
    slug: "medita-en-el",
    title: "Medita en él",
    ref: "Josué 1:8",
    lemma: "«Medita en él» — ¿clave de prosperidad laboral?",
    blurb:
      "«Medita en él día y noche» se vende como clave de prosperidad laboral. La Torá va en la boca para obedecer, y el éxito nombrado es fidelidad.",
    casa: [efata],
  },
  {
    n: "20",
    slug: "la-bendicion-de-jehova",
    title: "La bendición de Jehová",
    ref: "Proverbios 10:22",
    lemma: "«La bendición de Jehová» — ¿derecho a enriquecer sin tristeza?",
    blurb:
      "«La bendición de Jehová es la que enriquece» se toma como derecho sin tristeza. Es sentencia sapiencial, no póliza, y Job permanece en el canon.",
    casa: [cielo],
  },
  {
    n: "21",
    slug: "fiate-de-jehova",
    title: "Fíate de Jehová",
    ref: "Proverbios 3:5–6",
    lemma: "«Fíate de Jehová» — ¿un GPS que prohíbe pensar?",
    blurb:
      "«Fíate de Jehová de todo tu corazón» se oye como un GPS que prohíbe pensar. Es confianza que no se apoya en el propio parecer, y la prudencia no se anula.",
    casa: [efata],
  },
  {
    n: "22",
    slug: "deleitate-en-jehova",
    title: "Deléitate en Jehová",
    ref: "Salmo 37:4",
    lemma: "«Deléitate en Jehová» — ¿firma en blanco de los antojos?",
    blurb:
      "«Deléitate en Jehová» se lee como firma en blanco de los antojos. El Señor forma los deseos de quien se deleita en él; no los entrega sueltos.",
    casa: [altar],
  },
  {
    n: "23",
    slug: "nada-me-faltara",
    title: "Nada me faltará",
    ref: "Salmo 23:1",
    lemma: "«Nada me faltará» — ¿amuleto de seguridad total?",
    blurb:
      "«Nada me faltará» se cuelga como amuleto de seguridad total. El Pastor conduce también por el valle de sombra de muerte, y el salmo no niega el valle.",
    casa: [cielo, basta],
  },
  {
    n: "24",
    slug: "no-temas",
    title: "No temas",
    ref: "Isaías 41:10",
    lemma: "«No temas» — ¿promesa de que nada malo ocurre?",
    blurb:
      "«No temas, porque yo estoy contigo» se cita como promesa de que nada malo ocurre. Es consuelo al siervo Jacob en el temor de las naciones, no un amuleto suelto.",
    casa: [cielo],
  },
  {
    n: "25",
    slug: "antes-que-te-formase",
    title: "Antes que te formase",
    ref: "Jeremías 1:5",
    lemma: "«Antes que te formase» — ¿autoestima sagrada?",
    blurb:
      "«Antes que te formase en el vientre te conocí» se usa como autoestima sagrada. Es vocación del profeta al juicio de las naciones, no espejo del lector.",
    casa: [altar],
  },
  {
    n: "26",
    slug: "formidablemente-maravilloso",
    title: "Formidablemente maravilloso",
    ref: "Salmo 139:14",
    lemma: "«Formidablemente maravilloso» — ¿elogio del yo?",
    blurb:
      "«Formidable y maravillosamente he sido hecho» se aplaude como elogio del yo. Es temor y asombro ante el Creador que conoce hasta el abismo.",
    casa: [altar],
  },
  {
    n: "27",
    slug: "de-tal-manera-amo",
    title: "De tal manera amó",
    ref: "Juan 3:16",
    lemma: "«De tal manera amó» — ¿amor sin juicio ni nuevo nacimiento?",
    blurb:
      "«De tal manera amó Dios al mundo» se recorta a un amor sin juicio. El que no cree ya ha sido juzgado, y el nuevo nacimiento del mismo capítulo no se omite.",
    casa: [siervo, efata],
  },
  {
    n: "28",
    slug: "la-verdad-os-hara-libres",
    title: "La verdad os hará libres",
    ref: "Juan 8:32",
    lemma: "«La verdad os hará libres» — ¿terapia que empodera?",
    blurb:
      "«La verdad os hará libres» se oye como terapia que empodera. La verdad es el Hijo, y el esclavo del pecado no se libera con una frase suelta.",
    casa: [efata],
  },
  {
    n: "29",
    slug: "vida-en-abundancia",
    title: "Vida en abundancia",
    ref: "Juan 10:10",
    lemma: "«Vida en abundancia» — ¿calidad de vida burguesa?",
    blurb:
      "«Vida en abundancia» se mide como calidad de vida burguesa. El texto pone al ladrón y al Pastor: la vida es eterna, no un inventario.",
    casa: [siervo],
  },
  {
    n: "30",
    slug: "pedid-en-mi-nombre",
    title: "Pedid en mi nombre",
    ref: "Juan 14:14",
    lemma: "«Pedid en mi nombre» — ¿cheque en blanco?",
    blurb:
      "«Si algo pidiereis en mi nombre, yo lo haré» se trata como cheque en blanco. Es orar en unión con el Hijo que va al Padre, y el Nombre no es una clave.",
    casa: [callar],
  },
  {
    n: "31",
    slug: "pedid-y-se-os-dara",
    title: "Pedid, y se os dará",
    ref: "Mateo 7:7",
    lemma: "«Pedid, y se os dará» — ¿técnica de obtención?",
    blurb:
      "«Pedid, y se os dará; buscad, y hallaréis» se enseña como técnica de obtención. Es perseverancia filial delante del Padre que da bienes, no un método de deseo.",
    casa: [fe],
  },
  {
    n: "32",
    slug: "dad-y-se-os-dara",
    title: "Dad, y se os dará",
    ref: "Lucas 6:38",
    lemma: "«Dad, y se os dará» — ¿caja registradora celestial?",
    blurb:
      "«Dad, y se os dará» se predica como caja que devuelve multiplicado. Es la misericordia de la medida, no una registradora celestial.",
    casa: [altar],
  },
  {
    n: "33",
    slug: "cree-en-el-senor-jesucristo",
    title: "Cree en el Señor Jesucristo",
    ref: "Hechos 16:31",
    lemma: "«Cree… y serás salvo, tú y tu casa» — ¿fórmula familiar automática?",
    blurb:
      "«Cree en el Señor Jesucristo, y serás salvo, tú y tu casa» se recorta a fórmula familiar. Es la fe del carcelero y la Palabra dicha a toda su casa.",
    casa: [efata],
  },
  {
    n: "34",
    slug: "si-confesares",
    title: "Si confesares con tu boca",
    ref: "Romanos 10:9",
    lemma: "«Si confesares con tu boca» — ¿llave mágica?",
    blurb:
      "«Si confesares con tu boca al Señor Jesús» se usa como llave mágica. Hay boca y corazón, y el capítulo no anula el señorío ni el oír.",
    casa: [fe],
  },
  {
    n: "35",
    slug: "por-gracia-sois-salvos",
    title: "Por gracia sois salvos",
    ref: "Efesios 2:8–9",
    lemma: "«Por gracia sois salvos» — ¿gracia sin el versículo 10?",
    blurb:
      "«Por gracia sois salvos» se cita cortando lo que el párrafo sigue diciendo, y la gracia queda en una fe que no camina ni obra.",
    casa: [fe],
  },
  {
    n: "36",
    slug: "no-contra-sangre-y-carne",
    title: "No contra sangre y carne",
    ref: "Efesios 6:12",
    lemma: "«No contra sangre y carne» — ¿cacería de principados?",
    blurb:
      "«No tenemos lucha contra sangre y carne» se vuelve cacería de principados. La lucha es contra potestades, y la armadura es verdad, fe y Palabra.",
    casa: [siervo],
  },
  {
    n: "37",
    slug: "mi-dios-suplira",
    title: "Mi Dios suplirá",
    ref: "Filipenses 4:19",
    lemma: "«Mi Dios suplirá todo» — ¿cobertura de cualquier antojo?",
    blurb:
      "«Mi Dios suplirá todo lo que os falta» se oye como cobertura de cualquier antojo, y Pablo habla a una iglesia que ya había dado.",
    casa: [basta],
  },
  {
    n: "38",
    slug: "la-fe-es-la-certeza",
    title: "La fe es la certeza",
    ref: "Hebreos 11:1",
    lemma: "«La fe es la certeza» — ¿visualización de lo deseado?",
    blurb:
      "«La fe es la certeza de lo que se espera» se enseña como visualización del deseo. Es certeza porque Dios habló, y los testigos murieron sin recibir la promesa.",
    casa: [fe],
  },
  {
    n: "39",
    slug: "jesucristo-es-el-mismo",
    title: "Jesucristo es el mismo",
    ref: "Hebreos 13:8",
    lemma: "«Jesucristo es el mismo» — ¿por tanto mis métodos tampoco cambian?",
    blurb:
      "«Jesucristo es el mismo ayer, y hoy, y por los siglos» se usa para congelar los métodos del ministro, pero el altar de este capítulo sigue fuera de la puerta.",
    casa: [siervo],
  },
  {
    n: "40",
    slug: "resistid-al-diablo",
    title: "Resistid al diablo",
    ref: "Santiago 4:7",
    lemma: "«Resistid al diablo» — ¿grito de guerra suelto?",
    blurb:
      "«Resistid al diablo, y huirá de vosotros» se grita como guerra suelta. El versículo pide sujetarse a Dios primero, y la resistencia nace de esa sumisión.",
    casa: [efata],
  },
  {
    n: "41",
    slug: "dios-es-amor",
    title: "Dios es amor",
    ref: "1 Juan 4:8",
    lemma: "«Dios es amor» — ¿por tanto no hay juicio?",
    blurb:
      "«Dios es amor» se cita para negar el juicio. Dios es luz y es amor; el que no ama no ha conocido, y el que permanece en muerte tampoco.",
    casa: [siervo, altar],
  },
  {
    n: "42",
    slug: "he-aqui-yo-estoy-a-la-puerta",
    title: "He aquí, yo estoy a la puerta",
    ref: "Apocalipsis 3:20",
    lemma: "«Yo estoy a la puerta» — ¿Jesús pidiendo permiso al incrédulo?",
    blurb:
      "«He aquí, yo estoy a la puerta y llamo» se predica como Jesús pidiendo permiso al incrédulo. Es voz a Laodicea, iglesia tibia: cena con quien se arrepiente.",
    casa: [efata],
  },
  {
    n: "43",
    slug: "bienaventurados-los-mansos",
    title: "Bienaventurados los mansos",
    ref: "Mateo 5:5",
    lemma: "«Bienaventurados los mansos» — ¿blandura útil al mundo?",
    blurb:
      "«Bienaventurados los mansos» se oye como blandura útil al mundo. Heredan la tierra, y el sermón del monte no cancela el juicio.",
    casa: [callar],
  },
  {
    n: "44",
    slug: "estad-firmes-en-la-libertad",
    title: "Estad firmes en la libertad",
    ref: "Gálatas 5:1",
    lemma: "«Estad firmes en la libertad» — ¿para no deber nada a nadie?",
    blurb:
      "«Estad firmes en la libertad» se usa para no deber nada a nadie. Es libertad de la ley como salvación, y el fruto del Espíritu permanece.",
    casa: [fe],
  },
  {
    n: "45",
    slug: "lo-que-ojo-no-vio",
    title: "Lo que ojo no vio",
    ref: "1 Corintios 2:9",
    lemma: "«Cosas que ojo no vio» — ¿sorpresa futura agradable?",
    blurb:
      "«Cosas que ojo no vio, ni oído oyó» se vende como sorpresa futura agradable. Es lo que Dios preparó a los que le aman, y el Espíritu ya lo reveló.",
    casa: [cielo],
  },
  {
    n: "46",
    slug: "ninguna-arma-forjada",
    title: "Ninguna arma forjada",
    ref: "Isaías 54:17",
    lemma: "«Ninguna arma forjada» — ¿inmunidad ministerial?",
    blurb:
      "«Ninguna arma forjada contra ti prosperará» se toma como inmunidad ministerial. Es promesa a Sión restaurada, y el Siervo de Isaías 53 ya ha sido herido.",
    casa: [siervo, cielo],
  },
  {
    n: "47",
    slug: "dios-no-es-hombre",
    title: "Dios no es hombre, para que mienta",
    ref: "Números 23:19",
    lemma: "«Dios no es hombre, para que mienta» — ¿mi decreto es infalible?",
    blurb:
      "«Dios no es hombre, para que mienta» no vuelve infalible un decreto humano: Balaam no puede maldecir lo que Dios ya bendijo.",
    casa: [callar],
  },
  {
    n: "48",
    slug: "decretaras-una-cosa",
    title: "Decretarás una cosa",
    ref: "Job 22:28",
    lemma: "«Decretarás una cosa» — ¿palabra de fe, o palabras de Elifaz?",
    blurb:
      "«Decretarás asimismo una cosa, y te será firme» se predica como palabra de fe. Son palabras de Elifaz, y Dios lo reprendió: no se predica al acusador.",
    casa: [cielo],
  },
  {
    n: "49",
    slug: "vosotros-sois-dioses",
    title: "Vosotros sois dioses",
    ref: "Salmo 82:6",
    lemma: "«Vosotros sois dioses» — ¿evangelio del yo divino?",
    blurb:
      "«Yo dije: vosotros sois dioses» se oye como evangelio del yo divino. El salmo reprende a jueces de Israel, y Jesús argumenta contra la blasfemia: no la enseña.",
    casa: [altar],
  },
  {
    n: "50",
    slug: "las-llaves-del-reino",
    title: "Las llaves del reino",
    ref: "Mateo 16:18–19",
    lemma: "«Las llaves del reino» — ¿cetro personal del ministro?",
    blurb:
      "«A ti te daré las llaves del reino» no es cetro del ministro: Cristo edifica su iglesia, y las llaves son confesión y disciplina.",
    casa: [efata, callar],
  },
];
