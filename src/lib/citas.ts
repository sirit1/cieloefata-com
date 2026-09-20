import { revelatioLeer, parseRef } from "@/lib/leer";
import { studies } from "@/lib/studies";

const ABBR: [string, string][] = [
  ["2 Tesalonicenses", "2 Tesalonicenses"],
  ["1 Tesalonicenses", "1 Tesalonicenses"],
  ["2 Corintios", "2 Corintios"],
  ["1 Corintios", "1 Corintios"],
  ["2 Crónicas", "2 Crónicas"],
  ["1 Crónicas", "1 Crónicas"],
  ["2 Timoteo", "2 Timoteo"],
  ["1 Timoteo", "1 Timoteo"],
  ["Deuteronomio", "Deuteronomio"],
  ["Lamentaciones", "Lamentaciones"],
  ["Apocalipsis", "Apocalipsis"],
  ["2 Tes.", "2 Tesalonicenses"],
  ["1 Tes.", "1 Tesalonicenses"],
  ["2 Co.", "2 Corintios"],
  ["1 Co.", "1 Corintios"],
  ["2 Cr.", "2 Crónicas"],
  ["1 Cr.", "1 Crónicas"],
  ["2 Ti.", "2 Timoteo"],
  ["1 Ti.", "1 Timoteo"],
  ["2 Ts.", "2 Tesalonicenses"],
  ["1 Ts.", "1 Tesalonicenses"],
  ["2 R.", "2 Reyes"],
  ["1 R.", "1 Reyes"],
  ["2 S.", "2 Samuel"],
  ["1 S.", "1 Samuel"],
  ["2 P.", "2 Pedro"],
  ["1 P.", "1 Pedro"],
  ["2 Jn.", "2 Juan"],
  ["3 Jn.", "3 Juan"],
  ["1 Jn.", "1 Juan"],
  ["Dt.", "Deuteronomio"],
  ["Gn.", "Génesis"],
  ["Éx.", "Éxodo"],
  ["Ex.", "Éxodo"],
  ["Lv.", "Levítico"],
  ["Nm.", "Números"],
  ["Jos.", "Josué"],
  ["Jue.", "Jueces"],
  ["Rt.", "Rut"],
  ["Esd.", "Esdras"],
  ["Neh.", "Nehemías"],
  ["Est.", "Ester"],
  ["Sal.", "Salmos"],
  ["Pr.", "Proverbios"],
  ["Ec.", "Eclesiastés"],
  ["Cnt.", "Cantares"],
  ["Is.", "Isaías"],
  ["Jer.", "Jeremías"],
  ["Lm.", "Lamentaciones"],
  ["Ez.", "Ezequiel"],
  ["Dn.", "Daniel"],
  ["Os.", "Oseas"],
  ["Jl.", "Joel"],
  ["Am.", "Amós"],
  ["Abd.", "Abdías"],
  ["Jon.", "Jonás"],
  ["Mi.", "Miqueas"],
  ["Nah.", "Nahúm"],
  ["Hab.", "Habacuc"],
  ["Sof.", "Sofonías"],
  ["Hag.", "Hageo"],
  ["Zac.", "Zacarías"],
  ["Mal.", "Malaquías"],
  ["Mt.", "Mateo"],
  ["Mr.", "Marcos"],
  ["Lc.", "Lucas"],
  ["Jn.", "Juan"],
  ["Hch.", "Hechos"],
  ["Ro.", "Romanos"],
  ["Gá.", "Gálatas"],
  ["Ef.", "Efesios"],
  ["Fil.", "Filipenses"],
  ["Col.", "Colosenses"],
  ["Tit.", "Tito"],
  ["Flm.", "Filemón"],
  ["He.", "Hebreos"],
  ["Stg.", "Santiago"],
  ["Jud.", "Judas"],
  ["Ap.", "Apocalipsis"],
  ["Job", "Job"],
];

ABBR.sort((a, b) => b[0].length - a[0].length);

export type CitaAbierta = {
  raw: string;
  full: string;
  preview: string;
  href: string;
  internal: boolean;
};

const PREVIEW: Record<string, string> = {
  "2 Timoteo 3:16": "Toda la Escritura es inspirada por Dios, y útil para enseñar.",
  "Hebreos 1:1": "Dios, habiendo hablado muchas veces y de muchas maneras… nos ha hablado por el Hijo.",
  "Lucas 24:27": "Y comenzando desde Moisés, y siguiendo por todos los profetas, les declaraba en todas las Escrituras lo que de él decían.",
  "Lucas 24:44": "Es necesario que se cumpla todo lo que está escrito de mí en la ley de Moisés, en los profetas y en los salmos.",
  "Lucas 1:1": "Puesto que ya muchos han tratado de poner en orden la historia de las cosas…",
  "Lucas 1:3": "Me ha parecido también a mí, después de haber investigado con diligencia…",
  "2 Pedro 1:16": "No os hemos dado a conocer el poder y la venida… siguiendo fábulas artificiosas.",
  "2 Pedro 1:21": "Nunca la profecía fue traída por voluntad humana.",
  "1 Juan 1:1": "Lo que era desde el principio, lo que hemos oído, lo que hemos visto con nuestros ojos.",
  "1 Corintios 15:3": "Cristo murió por nuestros pecados, conforme a las Escrituras.",
  "Romanos 1:16": "No me avergüenzo del evangelio, porque es poder de Dios para salvación.",
  "Números 6:24": "Jehová te bendiga, y te guarde.",
  "Juan 14:16": "Y yo rogaré al Padre, y os dará otro Consolador.",
  "Efesios 6:17": "Y tomad el yelmo de la salvación, y la espada del Espíritu, que es la palabra de Dios.",
  "Juan 16:13": "Cuando venga el Espíritu de verdad, él os guiará a toda la verdad.",
  "Juan 3:3": "El que no naciere de nuevo, no puede ver el reino de Dios.",
  "Juan 3:5": "El que no naciere de agua y del Espíritu, no puede entrar en el reino de Dios.",
  "Juan 1:1": "En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios.",
  "Juan 1:14": "Y aquel Verbo fue hecho carne, y habitó entre nosotros.",
  "Juan 14:6": "Yo soy el camino, y la verdad, y la vida.",
  "Marcos 1:15": "El tiempo se ha cumplido, y el reino de Dios se ha acercado; arrepentíos, y creed en el evangelio.",
  "Marcos 7:34": "Éfata, que es: Sé abierto.",
  "Hechos 2:3": "Y se les aparecieron lenguas repartidas, como de fuego, y se posó sobre cada uno de ellos.",
  "Hechos 5:3": "Ananías, ¿por qué llenó Satanás tu corazón para que mintieses al Espíritu Santo?",
  "Mateo 28:19": "Bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo.",
  "Mateo 3:11": "Él os bautizará en Espíritu Santo y fuego.",
  "Deuteronomio 6:4": "Oye, Israel: Jehová nuestro Dios, Jehová uno es.",
  "Éxodo 3:14": "YO SOY EL QUE SOY.",
  "Isaías 53:5": "Mas él herido fue por nuestras rebeliones, molido por nuestros pecados.",
  "Santiago 1:22": "Sed hacedores de la palabra, y no tan solamente oidores.",
  "Tito 3:5": "Nos salvó por el lavamiento de la regeneración y por la renovación en el Espíritu Santo.",
  "Romanos 8:9": "El que no tiene el Espíritu de Cristo, no es de él.",
  "Efesios 1:13": "Fuisteis sellados con el Espíritu Santo de la promesa.",
  "1 Timoteo 2:5": "Hay un solo Dios, y un solo mediador entre Dios y los hombres, Jesucristo hombre.",
  "Apocalipsis 5:5": "El León de la tribu de Judá… ha vencido.",
  "Nehemías 8:8": "Y leían en el libro de la ley de Dios claramente, y ponían el sentido.",
  "Salmos 119:18": "Ábreme los ojos, y miraré las maravillas de tu ley.",
  "1 Samuel 3:10": "Habla, porque tu siervo oye.",
  "Isaías 8:20": "A la ley y al testimonio. Si no dijeren conforme a esto, es porque no les ha amanecido.",
  "2 Corintios 10:5": "Derribando argumentos y toda altivez que se levanta contra el conocimiento de Dios.",
  "Hechos 20:27": "Porque no he rehuido anunciaros todo el consejo de Dios.",
  "Tito 1:9": "Retenedor de la palabra fiel tal como ha sido enseñada.",
  "1 Pedro 3:15": "Estad siempre preparados para presentar defensa con mansedumbre y reverencia.",
  "Proverbios 20:12": "El oído que oye y el ojo que ve, ambas cosas ha hecho Jehová.",
  "Efesios 4:14": "Para que ya no seamos niños fluctuantes, llevados por doquiera de todo viento de doctrina.",
  "Romanos 11:33": "¡Oh profundidad de las riquezas de la sabiduría y de la ciencia de Dios!",
  "1 Tesalonicenses 5:21": "Examinadlo todo; retened lo bueno.",
  "Génesis 3:15": "Y pondré enemistad entre ti y la mujer, y entre tu simiente y la simiente suya.",
  "Génesis 3:1": "¿Conque Dios os ha dicho: No comáis de todo árbol del huerto?",
  "Salmos 22:1": "Dios mío, Dios mío, ¿por qué me has desamparado?",
  "Filipenses 2:5": "Haya, pues, en vosotros este sentir que hubo también en Cristo Jesús.",
  "Filipenses 2:7": "Sino que se despojó a sí mismo, tomando forma de siervo.",
  "Apocalipsis 5:6": "Y miré, y vi que en medio del trono… estaba un Cordero como inmolado.",
  "Apocalipsis 5:9": "Digno eres de tomar el libro y de abrir sus sellos; porque tú fuiste inmolado.",
  "2 Timoteo 2:15": "Procura con diligencia presentarte a Dios aprobado, como obrero que no tiene de qué avergonzarse.",
  "2 Timoteo 1:13": "Retén la forma de las sanas palabras que de mí oíste.",
  "Romanos 12:1": "Así que, hermanos, os ruego por las misericordias de Dios, que presentéis vuestros cuerpos en sacrificio vivo.",
  "Isaías 6:8": "Heme aquí, envíame a mí.",
  "Salmos 119:89": "Para siempre, oh Jehová, permanece tu palabra en los cielos.",
  "Isaías 35:5": "Entonces los ojos de los ciegos serán abiertos, y los oídos de los sordos se abrirán.",
  "Lucas 24:45": "Entonces les abrió el entendimiento, para que comprendiesen las Escrituras.",
  "Hechos 16:14": "El Señor abrió el corazón de ella para que estuviese atenta a lo que Pablo decía.",
  "Mateo 27:46": "Dios mío, Dios mío, ¿por qué me has desamparado?",
  "1 Corintios 15:22": "Porque así como en Adán todos mueren, también en Cristo todos serán vivificados.",
  "Romanos 5:12": "Por tanto, como el pecado entró en el mundo por un hombre, y por el pecado la muerte.",
  "Gálatas 2:20": "Con Cristo estoy juntamente crucificado, y ya no vivo yo, mas vive Cristo en mí.",
  "Lucas 9:23": "Si alguno quiere venir en pos de mí, niéguese a sí mismo, tome su cruz cada día, y sígame.",
  "Lucas 22:42": "Padre, si quieres, pasa de mí esta copa; pero no se haga mi voluntad, sino la tuya.",
  "2 Timoteo 3:1": "En los postreros días vendrán tiempos peligrosos.",
  "2 Timoteo 3:2": "Habrá hombres amadores de sí mismos, avaros, vanagloriosos, soberbios.",
  "Romanos 6:11": "Así también vosotros consideraos muertos al pecado, pero vivos para Dios en Cristo Jesús.",
  "Romanos 16:20": "Y el Dios de paz aplastará en breve a Satanás bajo vuestros pies.",
  "Mateo 7:16": "Por sus frutos los conoceréis.",
  "Mateo 6:1": "Guardaos de hacer vuestra justicia delante de los hombres, para ser vistos de ellos.",
  "Mateo 19:4": "El que los hizo al principio, varón y hembra los hizo.",
  "Jeremías 17:9": "Engañoso es el corazón más que todas las cosas, y perverso; ¿quién lo conocerá?",
  "Génesis 2:16": "Y mandó Jehová Dios al hombre, diciendo: De todo árbol del huerto podrás comer.",
  "Génesis 2:17": "Mas del árbol de la ciencia del bien y del mal no comerás; porque el día que de él comieres, ciertamente morirás.",
  "Génesis 2:25": "Y estaban ambos desnudos, Adán y su mujer, y no se avergonzaban.",
  "Génesis 3:6": "Y vio la mujer que el árbol era bueno para comer… y tomó de su fruto, y comió; y dio también a su marido, el cual comió así como ella.",
  "Génesis 3:7": "Entonces fueron abiertos los ojos de ambos, y conocieron que estaban desnudos; entonces cosieron hojas de higuera.",
  "Génesis 3:8": "Y oyeron la voz de Jehová Dios que se paseaba en el huerto… y se escondieron.",
  "Génesis 3:12": "La mujer que me diste por compañera me dio del árbol, y yo comí.",
  "Génesis 3:21": "Y Jehová Dios hizo al hombre y a su mujer túnicas de pieles, y los vistió.",
  "Santiago 5:16": "Confesaos vuestras ofensas unos a otros, y orad unos por otros, para que seáis sanados.",
  "Oseas 6:7": "Mas ellos, cual Adán, traspasaron el pacto; allí prevaricaron contra mí.",
};

function expandRaw(raw: string): string {
  const t = raw.trim();
  for (const [abbr, full] of ABBR) {
    if (t === abbr || t.startsWith(abbr + " ") || t.startsWith(abbr)) {
      return t.replace(abbr, full).replace(/\s+/g, " ").trim();
    }
  }
  return t;
}

function previewOf(full: string): string {
  const exact = PREVIEW[full];
  if (exact) return exact;
  const cut = full.replace(/[–-]\d+$/, "").replace(/,\s*\d+$/, "");
  if (PREVIEW[cut]) return PREVIEW[cut];
  const chap = cut.replace(/:\d+$/, "");
  const hit = Object.entries(PREVIEW).find(([k]) => k.startsWith(chap + ":") || k === chap);
  return hit?.[1] ?? "Pasaje de la Escritura. El texto manda.";
}

function studyHref(full: string): string | null {
  const p = parseRef(full);
  if (!p) return null;
  const found = studies.find((s) => {
    const sp = parseRef(s.ref);
    return sp && sp.slug === p.slug && sp.cap === p.cap;
  });
  return found ? `/estudios/${found.slug}` : null;
}

export function abrirCita(raw: string): CitaAbierta {
  const full = expandRaw(raw);
  const internal = studyHref(full);
  const ext = revelatioLeer(full);
  return {
    raw,
    full,
    preview: previewOf(full),
    href: internal ?? ext ?? "/canon",
    internal: Boolean(internal),
  };
}

export function partirCitas(blob: string): string[] {
  return blob
    .split("·")
    .map((s) => s.trim())
    .filter(Boolean);
}

export const VOLVER_KEY = "cieloefata-volver";

export function guardarVolver() {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(VOLVER_KEY, window.location.pathname + window.location.search + window.location.hash);
}

export function leerVolver(): string | null {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem(VOLVER_KEY);
}
