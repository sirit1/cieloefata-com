/**
 * Versículos clave de la escuela. Cada texto es la Reina-Valera 1960 literal, cotejada
 * con /workspace/biblioteca-biblica/consulta.py (17-10-2026). El hebreo es el del Códice de
 * Leningrado (WLC/OSHB, el texto que edita la BHS); el griego, el Textus Receptus de
 * Scrivener (1894), sin acentos en la fuente digital. Los lemas, transliteraciones,
 * definiciones y conteos salen del léxico de Strong de la misma biblioteca.
 */
import type { AulaKind } from "@/lib/content";

export type Versiculo = {
  slug: string;
  ref: string;
  texto: string;
  lengua: "hebreo" | "griego";
  /** Forma tal como está en el texto original del versículo. */
  forma: string;
  lema: string;
  translit: string;
  strong: string;
  /** Palabra de la RVR1960 que traduce el término. */
  traduce: string;
  /** Explicación del número Strong, en prosa. */
  strongProsa: string;
  /** Lo que el término aporta al versículo, sin salir del capítulo. */
  lectura: string;
  obra?: string;
  aula?: { kind: AulaKind; slug: string; title: string };
  pregunta: string;
};

export const VERSICULOS: readonly Versiculo[] = [
  {
    slug: "marcos-7-34",
    ref: "Marcos 7:34",
    texto: "y levantando los ojos al cielo, gimió, y le dijo: Efata, es decir: Sé abierto.",
    lengua: "griego",
    forma: "εφφαθα",
    lema: "ἐφφαθά",
    translit: "ephphathá",
    strong: "G2188",
    traduce: "Efata",
    strongProsa:
      "El número Strong G2188 es la etiqueta que el diccionario de James Strong (1890) da a ἐφφαθά (ephphathá). Strong la define como un imperativo, «¡sé abierto!», y anota que es de origen arameo: la remite a H6606, el verbo arameo abrir. En todo el Nuevo Testamento griego del Textus Receptus aparece una sola vez: aquí.",
    lectura:
      "Marcos conserva la palabra aramea que salió de la boca de Jesús y la traduce él mismo con un verbo griego, διανοιχθητι (G1272, abrir del todo). No es una fórmula para repetir: es la orden del Hijo, dicha a un hombre que otros trajeron, y el versículo siguiente dice que al momento fueron abiertos sus oídos.",
    obra: "efata",
    aula: { kind: "estudio", slug: "marcos-7", title: "Marcos 7" },
    pregunta: "¿Qué significa Efata en Marcos 7:34?",
  },
  {
    slug: "isaias-53-5",
    ref: "Isaías 53:5",
    texto:
      "Mas él herido fue por nuestras rebeliones, molido por nuestros pecados; el castigo de nuestra paz fue sobre él, y por su llaga fuimos nosotros curados.",
    lengua: "hebreo",
    forma: "מְחֹלָל",
    lema: "חָלַל",
    translit: "châlal",
    strong: "H2490",
    traduce: "herido",
    strongProsa:
      "El número Strong H2490 corresponde a la raíz hebrea חָלַל (châlal). Strong explica que su sentido propio es horadar, y de ahí herir; en otras formas la misma raíz significa también profanar o comenzar. El texto hebreo del Antiguo Testamento la usa 142 veces; en este versículo va en participio pasivo: el que ha sido traspasado.",
    lectura:
      "El versículo pone cuatro palabras de daño sobre una sola persona: herido, molido (H1792, triturar), castigo (H4148, disciplina) y llaga (H2250, la marca del golpe). Y las cuatro llevan delante la causa ajena: nuestras rebeliones (H6588, revuelta), nuestros pecados. El que sufre no es el lector; el lector es el curado.",
    obra: "el-siervo-no-tu",
    aula: { kind: "tratado", slug: "isaias-53", title: "Isaías 53" },
    pregunta: "¿Qué significa «herido fue por nuestras rebeliones» en Isaías 53:5?",
  },
  {
    slug: "2-corintios-12-9",
    ref: "2 Corintios 12:9",
    texto:
      "Y me ha dicho: Bástate mi gracia; porque mi poder se perfecciona en la debilidad. Por tanto, de buena gana me gloriaré más bien en mis debilidades, para que repose sobre mí el poder de Cristo.",
    lengua: "griego",
    forma: "αρκει",
    lema: "ἀρκέω",
    translit: "arkéō",
    strong: "G714",
    traduce: "Bástate",
    strongProsa:
      "El número Strong G714 es ἀρκέω (arkéō). Strong le da el sentido propio de rechazar o detener, y por extensión el de bastar, ser suficiente; la KJV lo traduce «be enough», «suffice», «be content». Aparece ocho veces en el Textus Receptus.",
    lectura:
      "El verbo está en presente: la gracia basta, no bastará cuando el aguijón se vaya. El Señor no le promete a Pablo quitarle la debilidad, sino que su poder se perfecciona en ella, y por eso Pablo termina gloriándose en lo mismo que había pedido tres veces que se le quitara.",
    obra: "bastate-mi-gracia",
    aula: { kind: "estudio", slug: "2-corintios-12", title: "2 Corintios 12" },
    pregunta: "¿Qué significa «Bástate mi gracia» en 2 Corintios 12:9?",
  },
  {
    slug: "job-42-5",
    ref: "Job 42:5",
    texto: "De oídas te había oído; Mas ahora mis ojos te ven.",
    lengua: "hebreo",
    forma: "רָאָתְךָ",
    lema: "רָאָה",
    translit: "râʼâh",
    strong: "H7200",
    traduce: "te ven",
    strongProsa:
      "El número Strong H7200 es רָאָה (râʼâh), ver, el verbo de la vista en hebreo, con sus usos literales y figurados. Es de los más frecuentes del Antiguo Testamento: 1305 veces en el texto hebreo.",
    lectura:
      "El hebreo pone frente a frente dos sentidos: el oído (H241, אֹזֶן) que solo había oído decir (H8085, שָׁמַע), y el ojo que ahora ha visto. El verbo está en perfecto y el sujeto es singular, «mi ojo te ha visto». Job no recibe la respuesta a su pleito; recibe a Dios mismo.",
    obra: "cuando-el-cielo-se-cae",
    pregunta: "¿Qué quiso decir Job con «ahora mis ojos te ven»?",
  },
  {
    slug: "santiago-1-22",
    ref: "Santiago 1:22",
    texto:
      "Pero sed hacedores de la palabra, y no tan solamente oidores, engañándoos a vosotros mismos.",
    lengua: "griego",
    forma: "ποιηται",
    lema: "ποιητής",
    translit: "poiētḗs",
    strong: "G4163",
    traduce: "hacedores",
    strongProsa:
      "El número Strong G4163 es ποιητής (poiētḗs), derivado del verbo hacer (G4160, ποιέω). Strong lo define como el que ejecuta algo, y anota que en particular designa al poeta. Aparece seis veces en el Textus Receptus: en Hechos 17:28 la RVR1960 lo traduce «poetas»; en Santiago 1:22, 1:23, 1:25 y 4:11, y en Romanos 2:13, «hacedores».",
    lectura:
      "Santiago no opone oír a hacer como si fueran dos opciones: el oidor que no hace se engaña a sí mismo. El versículo siguiente pone a ese hombre delante de un espejo, que se mira, se va y olvida cómo era.",
    obra: "el-altar-del-espejo",
    aula: { kind: "estudio", slug: "santiago-1", title: "Santiago 1" },
    pregunta: "¿Qué significa ser hacedores de la palabra en Santiago 1:22?",
  },
  {
    slug: "santiago-3-10",
    ref: "Santiago 3:10",
    texto:
      "De una misma boca proceden bendición y maldición. Hermanos míos, esto no debe ser así.",
    lengua: "griego",
    forma: "στοματος",
    lema: "στόμα",
    translit: "stóma",
    strong: "G4750",
    traduce: "boca",
    strongProsa:
      "El número Strong G4750 es στόμα (stóma), la boca. Strong añade que por extensión significa el lenguaje, en figura una abertura de la tierra, y en particular el filo de una espada. Aparece 79 veces en el Textus Receptus.",
    lectura:
      "El griego dice «de la misma boca»: no son dos personas, una que bendice y otra que maldice, sino una sola. Por eso Santiago no termina con una técnica para hablar menos, sino con una pregunta sobre la fuente: ninguna echa por una misma abertura agua dulce y amarga.",
    obra: "de-una-misma-boca",
    aula: { kind: "tratado", slug: "la-muerte-y-la-vida", title: "La muerte y la vida" },
    pregunta: "¿Qué enseña Santiago 3:10 sobre la boca que bendice y maldice?",
  },
  {
    slug: "1-juan-4-1",
    ref: "1 Juan 4:1",
    texto:
      "Amados, no creáis a todo espíritu, sino probad los espíritus si son de Dios; porque muchos falsos profetas han salido por el mundo.",
    lengua: "griego",
    forma: "δοκιμαζετε",
    lema: "δοκιμάζω",
    translit: "dokimázō",
    strong: "G1381",
    traduce: "probad",
    strongProsa:
      "El número Strong G1381 es δοκιμάζω (dokimázō), derivado de δόκιμος (G1384, aprobado tras la prueba). Strong lo define como poner a prueba y, por implicación, aprobar. Aparece 23 veces en el Textus Receptus; la RVR1960 lo traduce también «examinadlo todo» (1 Tesalonicenses 5:21) y «comprobéis» (Romanos 12:2).",
    lectura:
      "Juan manda probar, no sospechar de todo ni creerlo todo. El imperativo está en presente: es una práctica continua. Y en los versículos siguientes da la piedra de toque, la confesión de que Jesucristo ha venido en carne.",
    obra: "diakrisis",
    pregunta: "¿Qué significa «probad los espíritus» en 1 Juan 4:1?",
  },
  {
    slug: "efesios-2-8",
    ref: "Efesios 2:8",
    texto:
      "Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios;",
    lengua: "griego",
    forma: "δωρον",
    lema: "δῶρον",
    translit: "dōron",
    strong: "G1435",
    traduce: "don",
    strongProsa:
      "El número Strong G1435 es δῶρον (dōron). Strong lo define como un regalo y, en particular, un sacrificio; la KJV lo traduce «gift» y «offering». Aparece 19 veces en el Textus Receptus, por ejemplo en Mateo 5:23, donde la RVR1960 dice «si traes tu ofrenda al altar».",
    lectura:
      "En griego la frase termina «de Dios el don», con Dios delante de la palabra don. La salvación no viene del hombre: viene por gracia, por medio de la fe, y el versículo siguiente quita la última salida: no por obras, para que nadie se gloríe.",
    obra: "nunca-tocaras-mi-fe",
    pregunta: "¿Qué significa «es don de Dios» en Efesios 2:8?",
  },
  {
    slug: "lucas-24-27",
    ref: "Lucas 24:27",
    texto:
      "Y comenzando desde Moisés, y siguiendo por todos los profetas, les declaraba en todas las Escrituras lo que de él decían.",
    lengua: "griego",
    forma: "διηρμηνευεν",
    lema: "διερμηνεύω",
    translit: "diermēneúō",
    strong: "G1329",
    traduce: "declaraba",
    strongProsa:
      "El número Strong G1329 es διερμηνεύω (diermēneúō), compuesto de διά (G1223, a través) y ἑρμηνεύω (G2059, interpretar). Strong lo define como explicar a fondo y, por implicación, traducir. Aparece seis veces en el Textus Receptus: en Hechos 9:36 la RVR1960 lo vierte «traducido», y en 1 Corintios 12 y 14 es el verbo de interpretar las lenguas.",
    lectura:
      "El que explica es el Resucitado, y lo que explica no es un versículo suelto sino todas las Escrituras, desde Moisés y por todos los profetas, en lo que de él decían. La historia es una, y el centro de esa historia es él.",
    obra: "portico-a-la-escritura",
    pregunta: "¿Qué explicó Jesús en Lucas 24:27?",
  },
  {
    slug: "filipenses-2-7",
    ref: "Filipenses 2:7",
    texto:
      "sino que se despojó a sí mismo, tomando forma de siervo, hecho semejante a los hombres;",
    lengua: "griego",
    forma: "εκενωσεν",
    lema: "κενόω",
    translit: "kenóō",
    strong: "G2758",
    traduce: "se despojó",
    strongProsa:
      "El número Strong G2758 es κενόω (kenóō), derivado de κενός (G2756, vacío). Strong lo define como vaciar y, en sentido figurado, rebajar, anular o hacer vano. Aparece cinco veces en el Textus Receptus; en Romanos 4:14 la RVR1960 lo traduce «vana resulta la fe», y en 1 Corintios 1:17, «para que no se haga vana la cruz de Cristo».",
    lectura:
      "Pablo no dice de qué se vació; dice cómo: tomando forma de siervo. El despojo no es pérdida de lo que Cristo es, sino lo que tomó, y el versículo siguiente lo lleva hasta la muerte, y muerte de cruz. El himno está puesto para una iglesia a la que Pablo acaba de pedir que sienta lo mismo y que nada haga por contienda (Filipenses 2:2–3).",
    aula: { kind: "estudio", slug: "filipenses-2", title: "Filipenses 2" },
    pregunta: "¿Qué significa que Cristo «se despojó a sí mismo» en Filipenses 2:7?",
  },
  {
    slug: "juan-3-16",
    ref: "Juan 3:16",
    texto:
      "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.",
    lengua: "griego",
    forma: "μονογενη",
    lema: "μονογενής",
    translit: "monogenḗs",
    strong: "G3439",
    traduce: "unigénito",
    strongProsa:
      "El número Strong G3439 es μονογενής (monogenḗs), compuesto de μόνος (G3441, solo) y γίνομαι (G1096, llegar a ser). Strong lo define como el nacido único, el solo de su clase. Aparece nueve veces en el Textus Receptus: en Lucas 7:12 es el «hijo único» de la viuda de Naín, y en Hebreos 11:17 Isaac es llamado «su unigénito».",
    lectura:
      "El versículo no habla de un amor en general: dice cuánto, «de tal manera», y lo mide por lo que Dios dio, su Hijo, el único. El versículo siguiente aclara para qué fue enviado: no para condenar al mundo, sino para que el mundo sea salvo por él.",
    pregunta: "¿Qué significa «Hijo unigénito» en Juan 3:16?",
  },
  {
    slug: "romanos-8-28",
    ref: "Romanos 8:28",
    texto:
      "Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien, esto es, a los que conforme a su propósito son llamados.",
    lengua: "griego",
    forma: "συνεργει",
    lema: "συνεργέω",
    translit: "synergéō",
    strong: "G4903",
    traduce: "ayudan",
    strongProsa:
      "El número Strong G4903 es συνεργέω (synergéō), derivado de συνεργός (G4904, colaborador). Strong lo define como trabajar juntamente, cooperar. Aparece cinco veces en el Textus Receptus; la RVR1960 lo traduce también «ayudándoles el Señor» (Marcos 16:20) y «la fe actuó juntamente con sus obras» (Santiago 2:22).",
    lectura:
      "La promesa tiene destinatario y tiene límite: es para los que aman a Dios, los llamados conforme a su propósito, y el bien está definido en el versículo siguiente, ser hechos conformes a la imagen de su Hijo. No dice que todo sea bueno; dice que todo coopera para ese bien.",
    obra: "cuando-el-cielo-se-cae",
    aula: { kind: "tratado", slug: "para-bien", title: "Para bien" },
    pregunta: "¿Qué significa «todas las cosas les ayudan a bien» en Romanos 8:28?",
  },
];

export function versiculoBySlug(slug: string) {
  return VERSICULOS.find((v) => v.slug === slug);
}
