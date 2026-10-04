import { SITIO } from "@/lib/sitio";

export type Profundo = {
  autor: string;
  epoca: string;
  audiencia: string;
  genero: string;
  literario: string;
  lugar?: string;
  situacion?: string;
  proposito?: string;
  lemmas: { orig: string; sense: string }[];
  cristo: string;
  cruces: string;
  preguntas: string[];
};

export type LabFila = { palabra: string; glosa: string };
export type LabCasilla = { name: string; body: string };

export type LabExtra = {
  tablaTitulo: string;
  tabla: LabFila[];
  casillas: LabCasilla[];
  analogiaAntecedente: string;
  analogiaPlena: string;
  status: string;
  distingo: string;
  fontes: string;
  reductio: string;
  acto: string;
};

export const profundo: Record<string, Profundo> = {
                "2-pedro-1": {
    autor: "Simón Pedro, siervo y apóstol.",
    epoca: "Cerca de su muerte (1:14). Segunda carta. Hay maestros que prometen libertad y son esclavos.",
    audiencia: "Los que han recibido una fe igualmente preciosa: creyentes que pueden volverse ociosos.",
    genero: "Carta. Testamento pastoral. El capítulo 2 desenmascara a quienes prometen libertad siendo esclavos de corrupción.",
    literario: "1:1–2 saluda. 1:3–11 es la pendiente: Dios dio todo; ahora añadid. 1:12–15 es el memorial antes de morir. 1:16–21 es el origen de la profecía. El capítulo 2 espera con los falsos maestros. El 1 no es un listado de hábitos, sino lo que evita caer en esa esclavitud.",
    lemmas: [
      {
        orig: "ἐπιχορηγήσατε",
        sense: "suministrad, costead. Añadir cuesta."
      },
      {
        orig: "σπουδὴν πᾶσαν",
        sense: "toda diligencia, toda prisa. No un ánimo vago."
      },
      {
        orig: "μυωπάζων",
        sense: "corto de vista el que no añade. La fe que no se ejercita se vuelve estéril."
      },
      {
        orig: "βεβαίαν",
        sense: "hacer firme el llamamiento y la elección. Se confirma en el camino, no en el eslogan."
      }
    ],
    cristo: "El que nos llamó por su gloria y excelencia es el Señor (1:3). Participar de la naturaleza divina no es fusión panteísta, sino huir de la corrupción y ser hechos semejantes al Hijo. Las virtudes no sustituyen a Cristo: las da el que ya nos dio todo. El que no añade no es humilde. Es ciego, y se olvidó de la purificación de sus antiguos pecados.",
    cruces: "Jn. 15:1–8 · Gá. 5:22–23 · Stg. 2:17 · 2 P. 1:3–11 · 2 P. 2:19 · Jud. 3",
    preguntas: [
      "¿Cuál es el eslabón que no estoy costeando?",
      "¿He llamado humildad a la ociosidad?",
      "¿Qué añadiré esta semana, uno solo, dicho a alguien de confianza?"
    ]
  },
    "filipenses-2": {
    autor: "Pablo, desde la cárcel.",
    epoca: "Hacia el 60–62 d. C.",
    audiencia: "Filipos, iglesia querida con grietas de vanagloria (2:1–4).",
    genero: "Carta. El himno (2:6–11) es credo metido en la ética.",
    literario: "2:1–4 pide un mismo sentir. El himno no es adorno, sino la medida. 2:12–18 pide ocupar la salvación con temor. Timoteo y Epafrodito encarnan el himno. El que canta 2:9–11 sin 2:7 no ha leído.",
    lemmas: [
      {
        orig: "μορφὴ θεοῦ / μορφὴ δούλου",
        sense: "forma de Dios, forma de siervo. No teatro: naturaleza y obediencia."
      },
      {
        orig: "ἐκένωσεν",
        sense: "se despojó. No dejó de ser quién es. Tomó lo que no debía."
      },
      {
        orig: "μέχρι θανάτου δὲ σταυροῦ",
        sense: "hasta la muerte, y muerte de cruz. La infamia es el punto, no un detalle."
      },
      {
        orig: "ὑπερύψωσεν",
        sense: "el Padre le sobreexaltó. Toda rodilla. Escatología, no eslogan."
      }
    ],
    cristo: "Isaías 45:23 entra: a mí se doblará toda rodilla. El Nombre sobre todo nombre es YHWH dado al Hijo. El himno no es un poema de autoayuda sobre bajar el ego. Es el camino del Hijo: igualdad con Dios no aferrada, siervo, cruz, exaltación. El sentir que se pide a Filipos es este Cristo, no un talante amable.",
    cruces: "Is. 45:23 · Mr. 10:45 · Jn. 13:3–5 · Fil. 2:5–11 · He. 12:2 · Ap. 5:12",
    preguntas: [
      "¿Qué derecho me está inflando, y lo cederé esta semana sin anunciarlo?",
      "¿Canto la exaltación y evito la forma de siervo?",
      "¿El himno mide mi mente, o solo adorna el culto?"
    ]
  },
  "santiago-1": {
    autor: "Santiago, siervo de Dios y del Señor Jesucristo, hermano del Señor.",
    epoca: "Temprana, quizá los años 40–50. A las doce tribus en la dispersión.",
    audiencia: "Creyentes pobres y tentados, que oyen mucho y hacen poco.",
    genero: "Carta sapiencial. Espejo, no consigna.",
    literario: "1:19–21 pide recibir con mansedumbre la palabra implantada. El 22–25 es el espejo. El 26–27 es la religión pura. La ira del hombre no obra la justicia. La lengua espera en el capítulo 3. El que se mira y se va no es un caso clínico, sino el oyente de esta escuela si cierra el cuaderno sin acto.",
    lemmas: [
      {
        orig: "ποιηταὶ λόγου",
        sense: "hacedores de la palabra. No solamente oidores."
      },
      {
        orig: "παραλογιζόμενοι ἑαυτούς",
        sense: "engañándoos a vosotros mismos. El retraso no es inocente."
      },
      {
        orig: "ἔσοπτρον",
        sense: "espejo. El rostro natural se ve y se olvida."
      },
      {
        orig: "νόμον τέλειον τὸν τῆς ἐλευθερίας",
        sense: "la ley perfecta, la de la libertad. Permanecer, no huir."
      }
    ],
    cristo: "La palabra implantada es la que salva las almas (1:21). El Padre de las luces nos engendró por la palabra de verdad (1:18). El espejo no es un método, sino oír a Cristo y no irse. Mateo 7:24–27 está debajo: el que oye y no hace es casa sobre arena. El Señor que dijo Éfata no deja el oído abierto para el archivo. Lo deja abierto para el acto.",
    cruces: "Ez. 33:31–32 · Mt. 7:24–27 · Jn. 13:17 · Stg. 1:18–25 · Stg. 2:17 · Ro. 2:13",
    preguntas: [
      "¿Qué me mostró el espejo, y lo haré antes de siete días?",
      "¿Estoy llamando estudio a lo que Santiago llama engaño de sí?",
      "¿Con quién hablaré el acto, para que no se quede en el cuaderno?"
    ]
  },
            "marcos-7": {
    autor: "Marcos, intérprete de Pedro.",
    epoca: "Década del 60. Pedagogía del oído, de Galilea a Jerusalén.",
    audiencia: "Oídos gentiles y oídos que, teniendo órgano, no oyen.",
    genero: "Narración evangélica. El sordo es un sordo. La saliva es saliva.",
    literario: "Marcos 7:1–23, labios que honran y corazón lejos. 7:24–30, la sirofenicia oye una palabra dura y cree. 7:31–37, el sordo de Decápolis. 8:1–10, pan para gentiles. 8:18: ¿teniendo oídos no oís? Isaías 35 es el cielo del milagro.",
    lemmas: [
      {
        orig: "ἐφφαθά",
        sense: "sé abierto. Hapax. Reflexivo-pasivo: el sordo no es el agente."
      },
      {
        orig: "διανοίχθητι",
        sense: "sé abierto de par en par. Aoristo pasivo. Lucas 24:45. Hechos 16:14."
      },
      {
        orig: "ἐστέναξεν",
        sense: "gimió. Antes de abrir, padece el cierre. Romanos 8 gime con la misma familia."
      },
      {
        orig: "μογιλάλον",
        sense: "tartamudo. Hapax. La LXX de Isaías 35:6. El vocablo es una cita."
      }
    ],
    cristo: "Vere Deus, vere homo. Toca porque es hombre. Ordena porque es Dios. Calvino: Marcos insertó la palabra caldea para testificar el poder divino de Cristo. El oído abierto y el libro abierto son el mismo misterio: Dios no deja cerrado lo que ha decidido abrir. Este tratado se llama Éfata porque coinciden.",
    cruces: "Is. 35:5–6 · Mr. 4:9 · Mr. 7:34 · Lc. 24:45 · Hch. 16:14 · Ap. 5:5",
    preguntas: [
      "¿He convertido Éfata en marca, y dejado al sordo cerrado?",
      "¿Hablo de la Escritura sin haber sido abierto para oírla?",
      "¿Qué aún no oigo, y a quién se lo nombraré esta semana?"
    ]
  },
  "apocalipsis-5": {
    autor: "Juan, desterrado en Patmos.",
    epoca: "Final del siglo I. Culto al César. La Iglesia bajo imperio.",
    audiencia: "Las siete iglesias, y con ellas todo el que tenga oído.",
    genero: "Apocalipsis. Simbolismo saturado de alusiones, no diagrama bélico.",
    literario: "Apocalipsis 4: el trono. El 5: el libro cerrado y el llanto. Se anuncia un León; se ve un Cordero. El cántico nuevo declara el porqué: porque fuiste inmolado. El 6 abre sellos. Quien lea el 5 como novela de rapto ha cambiado de género.",
    lemmas: [
      {
        orig: "ἄξιος",
        sense: "digno. La balanza. Nadie equilibraba el rollo."
      },
      {
        orig: "ἀρνίον … ὡς ἐσφαγμένον",
        sense: "Cordero en pie, como inmolado. Degollado y de pie."
      },
      {
        orig: "ἠγοράσας",
        sense: "compraste. Sangre. Todo linaje, lengua, pueblo y nación."
      },
      {
        orig: "οὐ κλαῖε",
        sense: "no llores. El primer imperativo del laboratorio es al que llora porque el libro está cerrado."
      }
    ],
    cristo: "Génesis 49: el cetro de Judá. El go'el de Levítico 25 y Rut: pariente de sangre que paga. Hebreos 2:14–15: toma carne para redimir. El Cordero recibe la adoración que el ángel rechaza. El que abre el libro es el que abre al sordo. León, Cordero y Fuego no son adorno del sello, sino este capítulo.",
    cruces: "Gn. 49:9–10 · Lv. 25:25 · Rt. 4 · Dn. 7:13–14 · Ap. 5:5–6 · Ap. 5:9",
    preguntas: [
      "¿Pongo el cetro de la historia en el César, o en las manos atravesadas?",
      "¿Adoro al Cordero como se adora a Dios, o lo dejo en semidiós útil?",
      "El anciano dice «no llores». ¿Qué llanto cesa esta semana?"
    ]
  }
};

export function profundoDe(slug: string): Profundo | undefined {
  const base = profundo[slug];
  if (!base) return undefined;
  const s = SITIO[slug];
  return s ? { ...base, ...s } : base;
}

export function textoParaOir(parts: string[]): string {
  return parts.filter(Boolean).join("\n\n");
}

export const laboratoriosExtra: Record<string, LabExtra> = {
        "marcos-7": {
    tablaTitulo: "Lo que el Señor hace, y lo que la marca hurta",
    tabla: [
      {
        palabra: "Éfata, que es: Sé abierto.",
        glosa: "Éfata como lema de casa, con el sordo todavía cerrado.",
      },
      {
        palabra: "Al momento fueron abiertos sus oídos.",
        glosa: "El milagro evaporado en metáfora de inclusión. La saliva, el gemido y el cuerpo recortados.",
      },
      {
        palabra: "Les mandó que no lo dijesen.",
        glosa: "Recitar Isaías y desobedecer a Jesús en la misma respiración.",
      },
    ],
    casillas: [
      {
        name: "Dios",
        body: "Abre. Mira al cielo. Gime. El sordo no es el agente. La morfología lo dice: sé abierto.",
      },
      {
        name: "Pecado",
        body: "Oídos que no oyen. Labios que honran y corazón lejos (7:6). Divulgar lo mandado callar.",
      },
      {
        name: "Cristo",
        body: "Toca porque es hombre. Ordena porque es Dios. Calvino: Marcos insertó la palabra caldea para testificar el poder divino.",
      },
      {
        name: "Pueblo",
        body: "Trae al sordo. Luego desobedece. Decápolis: oído gentil. El Shemá espera oídos abiertos.",
      },
    ],
    analogiaAntecedente:
      "Marcos 7:1–23, labios lejos. 7:24–30, la sirofenicia oye una palabra dura y cree. El sordo no puede oír ninguna. Marcos 4: el que tiene oídos para oír. Isaías 35 es el cielo del milagro, no su evaporación.",
    analogiaPlena:
      "Lucas 24:45: les abrió el entendimiento. Hechos 16:14: el Señor abrió el corazón de Lidia. Romanos 10:17. Apocalipsis 5: el que abre el libro es el que abre al sordo. Este tomo se llama Éfata porque coinciden.",
    status: "¿Vocablo de marca, o mandato de Cristo a un sordo?",
    distingo:
      "Como palabra de Marcos 7:34, es de Cristo. Como título de un tomo, es sierva de esa palabra, no dueña. Si la marca va primero, el sordo sigue sordo. El género es narración: la saliva es saliva.",
    fontes:
      "El texto. Isaías 35:5–6 (μογιλάλον en la LXX). Marcos 4:9. Lucas 24:45. Hechos 16:14. Calvino sobre el vocablo caldeo.",
    reductio:
      "Si se evapora el cuerpo, se evapora Isaías 35 y queda un eslogan. Si Éfata es técnica de escucha interior, el milagro ya no es del Hijo.",
    acto: "Leer Marcos 7 entero, en voz alta. Nombrar delante de alguien lo que aún no se oye. Mañana se vuelve. El oído no se abre una sola vez. El sordo no «murió hoy a su sordera»: fue abierto.",
  },
  "filipenses-2": {
    tablaTitulo: "El himno, y lo que la vanagloria canta",
    tabla: [
      {
        palabra: "Siendo en forma de Dios, no estimó el ser igual a Dios como cosa a que aferrarse.",
        glosa: "Un poema de autoayuda sobre bajar el ego, sin igualdad con Dios.",
      },
      {
        palabra: "Se despojó a sí mismo, tomando forma de siervo.",
        glosa: "Kénosis como dejar de ser quién es. Teatro de humildad. Marca de siervo sin forma de siervo.",
      },
      {
        palabra: "Por lo cual Dios también le exaltó hasta lo sumo.",
        glosa: "Cantar 2:9–11 y saltar 2:7. La exaltación como eslogan, sin la cruz.",
      },
    ],
    casillas: [
      {
        name: "Dios",
        body: "El Hijo es igual a Dios. El Padre le sobreexalta. El Nombre sobre todo nombre es YHWH dado al Hijo. Isaías 45:23 entra.",
      },
      {
        name: "Pecado",
        body: "Vanagloria. Evodia y Síntique. El primer asiento. El derecho que infla. El himno se escribió para eso, no para el seminario.",
      },
      {
        name: "Cristo",
        body: "Forma de Dios, forma de siervo, muerte de cruz, exaltación. No teatro: naturaleza y obediencia. Hasta la infamia.",
      },
      {
        name: "Pueblo",
        body: "Haya, pues, en vosotros este sentir. Filipos. El credo metido en la ética. Timoteo y Epafrodito encarnan el himno.",
      },
    ],
    analogiaAntecedente:
      "Filipenses 2:1–4 pide un mismo sentir. El himno no es adorno, sino la medida. Nadie canta 2:9 si aún pelea el primer asiento. El 2:12–18 pide ocupar la salvación con temor.",
    analogiaPlena:
      "Isaías 45:23: a mí se doblará toda rodilla. Marcos 10:45. Juan 13. Hebreos 12:2. Apocalipsis 5:12. El Nombre es el del Siervo exaltado, no un lema de culto.",
    status: "¿Himno de kénosis para el seminario, o medida de la mente de Filipos?",
    distingo:
      "ἐκένωσεν no es dejar de ser quién es, sino tomar lo que no debía. La infamia de la cruz es el punto, no un detalle. Toda rodilla es escatología, no eslogan.",
    fontes:
      "El texto. Isaías 45:23. Marcos 10:45. Juan 13:3–5. Hebreos 12:2. El himno (2:6–11) se oye dentro de 2:1–18, no recortado.",
    reductio:
      "Si tu «sentir de Cristo» no baja, no es este himno. Si se canta la exaltación y se evita la forma de siervo, se ha cambiado de señor. El texto no pide una marca: pide la forma.",
    acto: "Ceder un derecho esta semana —uno que estaba inflando— y no anunciarlo. El himno manda. Evodia y Síntique no necesitan otro taller: necesitan este Cristo.",
  },
  "apocalipsis-5": {
    tablaTitulo: "Lo que se anuncia, y lo que se ve",
    tabla: [
      {
        palabra: "He aquí que el León de la tribu de Judá ha vencido.",
        glosa: "Un mesías militar. El cetro en el César. Novela de la última guerra.",
      },
      {
        palabra: "Vi un Cordero como inmolado.",
        glosa: "Semidiós útil. Adoración rebajada. El degüello como detalle, no como el porqué.",
      },
      {
        palabra: "No llores.",
        glosa: "El llanto por el libro cerrado convertido en pánico profético, o en escepticismo.",
      },
    ],
    casillas: [
      {
        name: "Dios",
        body: "Sienta en el trono y tiene el libro. El Cordero recibe la adoración que el ángel rechaza: no es criatura.",
      },
      {
        name: "Pecado",
        body: "Nadie era digno. El cosmos sin go'el. El llanto de Juan. El culto al César en Patmos.",
      },
      {
        name: "Cristo",
        body: "León de Judá y Cordero inmolado. Pariente de sangre que paga. En pie, con las marcas del degüello. Abre el libro.",
      },
      {
        name: "Pueblo",
        body: "Comprado de todo linaje, lengua, pueblo y nación. Las siete iglesias. El que tiene oído.",
      },
    ],
    analogiaAntecedente:
      "Apocalipsis 4: el trono. El 5: el libro cerrado y el llanto. Génesis 49: el cetro de Judá. El go'el de Levítico 25 y Rut. Daniel 7. El género prohíbe el literalismo occidental y el sensacionalismo de novela.",
    analogiaPlena:
      "El que abre el libro es el que abre al sordo. Hebreos 2:14–15: toma carne para redimir. Apocalipsis 19 y 22: el ángel rechaza la adoración. El cántico nuevo declara el porqué: porque fuiste inmolado.",
    status: "¿Quién abre la historia?",
    distingo:
      "Se anuncia un León; se ve un Cordero. La paradoja no se resuelve antes de tiempo. Las visiones son retratos doctrinales, no diagramas de tecnología bélica. El rapto no habilita al que ya fue inmolado.",
    fontes:
      "El texto. Génesis 49:9–10. Levítico 25:25. Rut 4. Daniel 7:13–14. Apocalipsis 5:9. El sello de esta casa —León, Cordero y Fuego— es este capítulo, no un adorno.",
    reductio:
      "Si el Cordero no es Dios, el cielo comete idolatría. Si el cetro está en el César, Juan lloró con razón. El pánico profético y el escepticismo se caen con el mismo cántico: digno eres, porque fuiste inmolado.",
    acto: "Cesar esta semana una lectura de la historia que pone el cetro en el César. Decir a alguien que el rollo está en las manos atravesadas. El indicativo es «ha vencido». El imperativo del anciano es el nuestro: no llores.",
  },
};

export function laboratorioDe(slug: string): LabExtra | undefined {
  return laboratoriosExtra[slug];
}
