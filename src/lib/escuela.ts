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
  "romanos-1": {
    autor: "Pablo, siervo de Jesucristo, llamado a ser apóstol.",
    epoca: "Hacia el 57 d. C., desde Corinto, antes de subir a Jerusalén.",
    audiencia: "Santos en Roma, iglesia que Pablo no fundó, judíos y gentiles bajo un mismo techo imperial.",
    genero: "Carta doctrinal. No es lema. Es exposición del evangelio.",
    literario: "Romanos 1:1–15 presenta al siervo y el propósito de la visita. El 16–17 es la tesis. El 18 abre la ira de Dios revelada contra toda impiedad. Quien cita el 16 sin el 18 ha cortado el poder del que habla. La carta entera —justificación, santificación, Israel, culto del cuerpo— cuelga de este anuncio: el evangelio es poder de Dios para salvación.",
    lemmas: [
      {
        orig: "οὐ ἐπαισχύνομαι",
        sense: "no me avergüenzo: no recorto para no ofender."
      },
      {
        orig: "δύναμις θεοῦ",
        sense: "poder de Dios, no consejo ni técnica."
      },
      {
        orig: "δικαιοσύνη θεοῦ",
        sense: "justicia de Dios revelada, no fabricada en el oyente."
      },
      {
        orig: "ἐκ πίστεως εἰς πίστιν",
        sense: "por fe y para fe: el justo por la fe vivirá (Hab. 2:4)."
      }
    ],
    cristo: "El evangelio que Pablo no avergüenza es el del Hijo declarado en 1:3–4: nacido de la simiente de David, declarado Hijo de Dios con poder por la resurrección. La justicia que se revela es la que más tarde se verá en el propiciatorio (3:25). Habacuc 2:4 no entra como consigna de superación: entra porque el justo vivirá por la fe en ese Hijo. El que se avergüenza de este evangelio se avergüenza de Cristo.",
    cruces: "Hab. 2:4 · Ro. 1:3–4 · Ro. 1:18 · Ro. 3:21–26 · 1 Co. 1:18 · 2 Ti. 1:8",
    preguntas: [
      "¿De qué evangelio me he avergonzado esta semana, y ante quién?",
      "Si es poder de Dios, ¿qué he estado negociando como si fuera consejo?",
      "¿Leo el versículo 16 con el 18, o lo recorto para que no moleste?"
    ]
  },
  "marcos-1": {
    autor: "Marcos, intérprete de Pedro, según el testimonio antiguo de la Iglesia.",
    epoca: "Década del 60, en un clima de persecución, probablemente ligado a Roma.",
    audiencia: "Oídos que necesitan un evangelio corto, para oírse de una vez, sin adorno.",
    genero: "Evangelio narrativo. Predicación en forma de relato.",
    literario: "Marcos 1:1–13 es el umbral: Isaías, el Bautista, el bautismo, el desierto. El 14–15 es el primer anuncio del Señor. Juan ya está preso: el precursor sale para que el Reino hable. Galilea, no Jerusalén. Detrás viene el llamado de los cuatro y la autoridad que enseña. El mandato no espera a que el lector se sienta listo.",
    lemmas: [
      {
        orig: "μετανοεῖτε",
        sense: "presente imperativo: volveos, y sostened la vuelta."
      },
      {
        orig: "πιστεύετε",
        sense: "creed: fiarse del evangelio que se predica, no opinar que Dios existe."
      },
      {
        orig: "βασιλεία τοῦ θεοῦ",
        sense: "el reinado de Dios se acercó; no una sensación interior."
      },
      {
        orig: "πεπλήρωται ὁ καιρός",
        sense: "el tiempo se ha cumplido: no hay un tercer verbo «más tarde»."
      }
    ],
    cristo: "El que anuncia el reino es el Hijo amado del bautismo (1:11). Isaías 40:3 ya abrió el libro: preparad el camino del Señor. El Señor que llega no ofrece una técnica de estudio. En 7:34 dirá Éfata. Aquí, en Galilea, pide dos verbos que el resto del evangelio no suaviza: volverse y creer. La cruz, aún lejana en el relato, ya está en el llamado. Nadie se vuelve a un reino abstracto: se vuelve a este Jesús.",
    cruces: "Is. 40:3 · Mr. 1:11 · Mr. 7:34 · Mt. 4:17 · Hch. 2:38 · Ro. 10:9",
    preguntas: [
      "¿Qué tercer verbo he añadido para aplazar el mandato?",
      "¿De qué me estoy volviendo, con nombre, esta semana?",
      "¿Creo el evangelio o solo lo admira mi vocabulario?"
    ]
  },
  "juan-3": {
    autor: "Juan, el discípulo a quien Jesús amaba.",
    epoca: "Finales del siglo I. La Iglesia ya enfrenta lecturas que recortan al Hijo.",
    audiencia: "Creyentes que necesitan saber quién es Jesús, y un maestro de Israel que vino de noche.",
    genero: "Evangelio. Diálogo que es umbral, no café teológico.",
    literario: "Juan 2:24–25 acaba de decir que Jesús conoce lo que hay en el hombre. Nicodemo es el caso. Fariseo, principal, maestro de Israel. El diálogo corre hasta 3:21. Luego Juan el Bautista cede: es menester que él crezca. El «de lo alto» de 3:3 no es un lema de enero: es la condición para ver el reino.",
    lemmas: [
      {
        orig: "ἄνωθεν",
        sense: "de nuevo y de lo alto. Los dos sentidos caben; ninguno es metáfora de hábitos."
      },
      {
        orig: "γεννηθῇ",
        sense: "naciere. El que no nace, no ve. El hombre no se da este nacimiento."
      },
      {
        orig: "ἐξ ὕδατος καὶ πνεύματος",
        sense: "de agua y de Espíritu: nacimiento que Dios da."
      },
      {
        orig: "πνεῦμα",
        sense: "viento y Espíritu: sopla donde quiere. No se programa."
      }
    ],
    cristo: "El que habla es el que bajó del cielo (3:13). El Hijo del hombre será levantado como la serpiente en el desierto (3:14–15; Nm. 21). Juan 3:16 no es un cartel suelto: es la lógica del que debe nacer de lo alto porque el Hijo fue dado. El nuevo nacimiento no es un anexo de la cruz: es lo que la cruz produce por el Espíritu. Nicodemo, de noche, oye al que es la luz.",
    cruces: "Nm. 21:8–9 · Ez. 36:25–27 · Jn. 1:12–13 · Jn. 3:13–16 · Tit. 3:5 · 1 P. 1:3",
    preguntas: [
      "¿Estoy tratando el nuevo nacimiento como metáfora de un cambio de hábitos?",
      "Si ya enseño, ¿he nacido de lo alto, o solo sé hablar de Dios?",
      "¿Qué haré esta semana con alguien que ya cree, sin negociar el umbral?"
    ]
  },
  "hechos-2": {
    autor: "Lucas, el médico, compañero de Pablo.",
    epoca: "Hacia los años 60–80. Relato del comienzo, no de un taller.",
    audiencia: "Teófilo y cuantos necesitan saber que el evangelio llegó a las naciones con hechos, no con rumores.",
    genero: "Historia teológica. Pentecostés es cumplimiento, no espectáculo.",
    literario: "Hechos 1 espera la promesa. El 2 la recibe. Joel entra. David entra. El cargo clava: a este Jesús a quien vosotros crucificasteis, Dios le ha hecho Señor y Cristo. La pregunta «¿qué haremos?» no es curiosidad. El 42–47 muestra lo que nació: enseñanza, comunión, partimiento del pan, oraciones. La Iglesia no sale de un retiro: sale de un corte.",
    lemmas: [
      {
        orig: "κατενύγησαν τὴν καρδίαν",
        sense: "fueron atravesados el corazón. No un cosquilleo."
      },
      {
        orig: "μετανοήσατε",
        sense: "arrepentíos. Imperativo otra vez. No un ánimo de grupo."
      },
      {
        orig: "βαπτισθήτω ἕκαστος",
        sense: "bautícese cada uno. La fe no se diluye en la muchedumbre."
      },
      {
        orig: "εἰς ἄφεσιν τῶν ἁμαρτιῶν",
        sense: "hacia el perdón de los pecados. El rito no está vacío; tampoco salva por magia."
      }
    ],
    cristo: "El sermón es cristología pública. El Jesús crucificado es el Señor del Salmo 110 y el Santo que no vio corrupción (Sal. 16). Pentecostés no desplaza a Cristo: lo declara. El Espíritu convence, como el Señor prometió en Juan 16:8. Los tres mil no recibieron un lema: recibieron al Señor y Cristo, el perdón y el don. Felipe, más tarde, abrirá Isaías 53. Aquí Pedro abre a David. El canon habla de un solo Hijo.",
    cruces: "Jl. 2:28–32 · Sal. 16:8–11 · Sal. 110:1 · Jn. 16:8 · Hch. 2:42 · Hch. 8:35",
    preguntas: [
      "Si oí y no pregunto «qué haremos», ¿oí de verdad?",
      "¿Hay un bautismo o un acto de obediencia que estoy aplazando?",
      "¿El Espíritu es para mí un adorno, o el que convence por el texto?"
    ]
  },
  "juan-1": {
    autor: "Juan el evangelista.",
    epoca: "Finales del siglo I. Contra lecturas que recortan al Hijo.",
    audiencia: "La Iglesia que necesita la tesis antes del relato: quién es este Jesús.",
    genero: "Prólogo teológico. No villancico. Tesis del libro.",
    literario: "Juan 1:1–18 es el umbral de todo el evangelio. Génesis 1 suena en «en el principio». El testimonio del Bautista (1:6–8, 15) impide que el Verbo se vuelva una idea. El 19 abre la narrativa. El que recorta 1:14 a diciembre no ha leído: hay eternidad, creación, rechazo, tabernáculo, gloria y el Unigénito que declara al Padre.",
    lemmas: [
      {
        orig: "λόγος",
        sense: "Verbo. No un lema. La Palabra que era, que estaba con Dios, que era Dios."
      },
      {
        orig: "θεὸς ἦν ὁ λόγος",
        sense: "el Verbo era Dios. Identidad divina sin borrar la distinción (πρὸς τὸν θεόν)."
      },
      {
        orig: "ἐσκήνωσεν",
        sense: "plantó tabernáculo. Carne, no disfraz."
      },
      {
        orig: "ἐξηγήσατο",
        sense: "exegesó, declaró al Padre. Nadie le ha visto; el Hijo le da a conocer."
      }
    ],
    cristo: "Colosenses 1:15–17 y Hebreos 1:1–3 leen el mismo Hijo: imagen, heredero, por quien fueron hechos los mundos. Juan 1 no es un poema suelto. Es el canon diciendo que el que tabernaculaba en el desierto ahora tabernacula en carne. Los suyos no le recibieron. A los que le reciben, les da autoridad de ser hechos hijos de Dios. El prólogo ya contiene la cruz: el rechazo. Y ya contiene la gloria: la del Unigénito.",
    cruces: "Gn. 1:1 · Éx. 25:8 · Col. 1:15–17 · He. 1:1–3 · Jn. 1:14 · Jn. 20:31",
    preguntas: [
      "¿Qué afirma este prólogo de Cristo que yo había dejado blando?",
      "¿Recorto «el Verbo era Dios» para no ofender, o lo leo en voz alta?",
      "¿He recibido al que tabernaculá, o solo celebro un nacimiento?"
    ]
  },
  "isaias-53": {
    autor: "Isaías hijo de Amoz, según el encabezamiento del libro. Un solo rollo, un solo siervo.",
    epoca: "Siglo VIII a. C. El Gran Rollo de Isaías (~125 a. C.) ya trae este canto antes de la cruz.",
    audiencia: "Judá bajo amenaza, y todo Israel que esperaba un brazo visible.",
    genero: "Profecía. El cuarto canto del Siervo (52:13–53:12).",
    literario: "Isaías 52:13 abre: he aquí mi siervo. El 53 no es un poema de resiliencia. Despreciado, varón de dolores, herido, molido, silencioso, sepultado con los ricos, justificador de muchos. Hechos 8 no improvisa: el eunuco lee este rollo y Felipe le abre a Cristo. Primera de Pedro 2:24 lo clava: llevó nuestros pecados en su cuerpo sobre el madero.",
    lemmas: [
      {
        orig: "נָשָׂא / סָבַל",
        sense: "llevar y soportar. El Siervo carga lo que no es suyo."
      },
      {
        orig: "אָשָׁם",
        sense: "ofrenda por la culpa. Sustitución en el hebreo, no un invento latino."
      },
      {
        orig: "הַפְגִּיעַ",
        sense: "Jehová quiso quebrantarlo. La cruz no es un accidente."
      },
      {
        orig: "צַדִּיק",
        sense: "el justo siervo justificará a muchos. La paz nace de su llaga."
      }
    ],
    cristo: "El cordero de Éxodo 12, el macho cabrío de Levítico 16, el justo de Isaías 53 y el Cordero de Apocalipsis 5 son un solo hilo. Jesús no cabe aquí como ejemplo de amor sin cargo. Cabe como el que fue hecho pecado por nosotros (2 Co. 5:21). El Gran Rollo de Qumrán quita la coartada de un canto inventado después de Gólgota. El texto estaba. La cruz lo cumplió.",
    cruces: "Éx. 12:13 · Lv. 16:21–22 · Is. 52:13 · Hch. 8:32–35 · 1 P. 2:24 · 2 Co. 5:21",
    preguntas: [
      "¿He llamado «herida» a lo que el texto llama rebelión?",
      "Si mi cruz es un ejemplo sin cargo, ¿es esta cruz?",
      "¿Confesaré esta semana, a Dios y a una persona, el pecado que el Siervo llevó?"
    ]
  },
  "romanos-3": {
    autor: "Pablo.",
    epoca: "La misma carta que 1:16. El «pero ahora» es el tiempo de la cruz.",
    audiencia: "Judío y gentil, ambos bajo pecado, ambos sin boca.",
    genero: "Carta. El corazón de la justificación.",
    literario: "Romanos 1:18–3:20 cierra toda boca. El 3:21 abre: pero ahora, aparte de la ley, se ha manifestado la justicia de Dios, testificada por la ley y los profetas. El 27–31 pregunta dónde está la jactancia. El 4 trae a Abraham. Nadie llega a 3:21 sin haber oído que no hay justo ni aun uno.",
    lemmas: [
      {
        orig: "ἱλαστήριον",
        sense: "propiciatorio. El lugar de la sangre. No un adorno cultual."
      },
      {
        orig: "ἀπολύτρωσις",
        sense: "redención, manumisión. Precio pagado."
      },
      {
        orig: "πάρεσις",
        sense: "Dios había pasado por alto pecados anteriores; ahora demuestra su justicia."
      },
      {
        orig: "δικαιοῦντα τὸν ἐκ πίστεως Ἰησοῦ",
        sense: "el que justifica al que es de la fe de Jesús."
      }
    ],
    cristo: "El ἱλαστήριον es el propiciatorio del arca (Éx. 25:17–22) y es Cristo puesto por Dios. Levítico 16 se cumple. Dios no deja de ser justo para perdonar: justifica por la sangre. El Hijo es el lugar donde la ira y la misericordia se encuentran sin mentira. Habacuc 2:4, ya en 1:17, llega aquí a su claridad: el justo por la fe vivirá, porque Dios es justo y el que justifica.",
    cruces: "Éx. 25:17–22 · Lv. 16 · Hab. 2:4 · Ro. 1:17 · Ro. 3:19–26 · 2 Co. 5:21",
    preguntas: [
      "¿Mezclo mi hoja de servicios con la justificación?",
      "Si mi evangelio salva sin propiciatorio, ¿es Romanos 3?",
      "¿Diré esta semana, a alguien, que soy justificado por la fe en Jesús, sin la ley?"
    ]
  },
  "2-pedro-1": {
    autor: "Simón Pedro, siervo y apóstol.",
    epoca: "Cerca de su muerte (1:14). Segunda carta. Hay maestros que prometen libertad y son esclavos.",
    audiencia: "Los que han recibido una fe igualmente preciosa: creyentes que pueden volverse ociosos.",
    genero: "Carta. Testamento pastoral. El capítulo 2 desenmascara a quienes prometen libertad siendo esclavos de corrupción.",
    literario: "1:1–2 saluda. 1:3–11 es la pendiente: Dios dio todo; ahora añadid. 1:12–15 es el memorial antes de morir. 1:16–21 es el origen de la profecía. El capítulo 2 espera con los falsos maestros. El 1 no es un listado de hábitos: es lo que evita caer en esa esclavitud.",
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
    cristo: "El que nos llamó por su gloria y excelencia es el Señor (1:3). Participar de la naturaleza divina no es fusión panteísta: es huir de la corrupción y ser hechos semejantes al Hijo. Las virtudes no sustituyen a Cristo: las da el que ya nos dio todo. El que no añade no es humilde. Es ciego, y se olvidó de la purificación de sus antiguos pecados.",
    cruces: "Jn. 15:1–8 · Gá. 5:22–23 · Stg. 2:17 · 2 P. 1:3–11 · 2 P. 2:19 · Jud. 3",
    preguntas: [
      "¿Cuál es el eslabón que no estoy costeando?",
      "¿He llamado humildad a la ociosidad?",
      "¿Qué añadiré esta semana, uno solo, dicho a alguien de confianza?"
    ]
  },
  "2-corintios-5": {
    autor: "Pablo.",
    epoca: "Hacia el 55–56 d. C. Defensa del ministerio. El tribunal de Cristo está en 5:10.",
    audiencia: "Corinto, iglesia querida y herida, que mide a los siervos por apariencia.",
    genero: "Carta. Apología que se vuelve evangelio.",
    literario: "5:1–10 es el cuerpo y el tribunal. 5:11–15 es el amor de Cristo que constriñe. 5:16–21 es la nueva creación y el ministerio de la reconciliación. Nadie llega a «nueva criatura» sin el versículo 21. El 6:1 ruega que no se reciba en vano la gracia.",
    lemmas: [
      {
        orig: "καινὴ κτίσις",
        sense: "creación nueva. No un yo recableado."
      },
      {
        orig: "καταλλαγή",
        sense: "reconciliación. Dios estaba en Cristo reconciliando al mundo."
      },
      {
        orig: "πρεσβεύομεν",
        sense: "somos embajadores. El mensaje no se improvisa."
      },
      {
        orig: "ἁμαρτίαν ἐποίησεν",
        sense: "al que no conoció pecado, por nosotros lo hizo pecado."
      }
    ],
    cristo: "Isaías 53 está debajo: el que no conoció pecado es hecho pecado. La justicia de Dios en él es Romanos 3 leído desde el ministerio. La nueva creación de Génesis 1 y de Apocalipsis 21 asoma aquí: si alguno está en Cristo. No es un tatuaje. Es el cambio de reino que la cruz compró. El embajador no recablea al enemigo: le ruega que se reconcilie.",
    cruces: "Is. 53:6 · Ro. 3:24–26 · 2 Co. 5:10 · 2 Co. 5:17–21 · Col. 1:20 · Ap. 21:5",
    preguntas: [
      "¿Uso «nueva criatura» para sentirme otro sin haberme reconciliado?",
      "Si el 21 no está, ¿qué queda del 17?",
      "¿A quién hablaré esta semana como embajador, una vez, con nombre?"
    ]
  },
  "filipenses-2": {
    autor: "Pablo, desde la cárcel.",
    epoca: "Hacia el 60–62 d. C.",
    audiencia: "Filipos, iglesia querida con grietas de vanagloria (2:1–4).",
    genero: "Carta. El himno (2:6–11) es credo metido en la ética.",
    literario: "2:1–4 pide un mismo sentir. El himno no es adorno: es la medida. 2:12–18 pide ocupar la salvación con temor. Timoteo y Epafrodito encarnan el himno. El que canta 2:9–11 sin 2:7 no ha leído.",
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
    literario: "1:19–21 pide recibir con mansedumbre la palabra implantada. El 22–25 es el espejo. El 26–27 es la religión pura. La ira del hombre no obra la justicia. La lengua espera en el capítulo 3. El que se mira y se va no es un caso clínico: es el oyente de esta escuela si cierra el cuaderno sin acto.",
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
    cristo: "La palabra implantada es la que salva las almas (1:21). El Padre de las luces nos engendró por la palabra de verdad (1:18). El espejo no es un método: es oír a Cristo y no irse. Mateo 7:24–27 está debajo: el que oye y no hace es casa sobre arena. El Señor que dijo Éfata no deja el oído abierto para el archivo. Lo deja abierto para el acto.",
    cruces: "Ez. 33:31–32 · Mt. 7:24–27 · Jn. 13:17 · Stg. 1:18–25 · Stg. 2:17 · Ro. 2:13",
    preguntas: [
      "¿Qué me mostró el espejo, y lo haré antes de siete días?",
      "¿Estoy llamando estudio a lo que Santiago llama engaño de sí?",
      "¿Con quién hablaré el acto, para que no se quede en el cuaderno?"
    ]
  },
  "romanos-12": {
    autor: "Pablo.",
    epoca: "La misma carta. El «así que» de 12:1 no es un giro moralista: es consecuencia de once capítulos de misericordia.",
    audiencia: "Hermanos en Roma. El culto sale del templo y se pone sobre el cuerpo.",
    genero: "Carta. Exhortación que nace de la doctrina.",
    literario: "Romanos 9–11 acaba de tratar a Israel y la misericordia. El 12:1–2 es el umbral de la ética. Luego el cuerpo, los dones, el amor, las autoridades. Nadie presenta el cuerpo si aún discute la justificación como si fuera un taller. Las misericordias preceden al mandato.",
    lemmas: [
      {
        orig: "λογικὴν λατρείαν",
        sense: "culto razonable, de la Palabra. El cuerpo es el altar."
      },
      {
        orig: "συσχηματίζεσθε",
        sense: "no os ensambléis al esquema de este siglo."
      },
      {
        orig: "μεταμορφοῦσθε",
        sense: "sed transformados. Pasiva: Dios obra. Presente: se sostiene."
      },
      {
        orig: "ἀνακαινώσει τοῦ νοός",
        sense: "renovación de la mente. No un recableado interior de moda."
      }
    ],
    cristo: "El sacrificio vivo es posible porque el Hijo se ofreció (Ro. 3:25; 8:32; Ef. 5:2). El siglo tiene molde; Cristo tiene forma de siervo (Fil. 2). La mente renovada discierne la voluntad de Dios porque ha oído las misericordias, no porque haya leído un manual de hábitos. El pueblo no se conforma: se presenta.",
    cruces: "Lv. 1 · Ro. 3:21–26 · Ro. 8:32 · Ro. 12:1–2 · Fil. 2:5 · Ef. 4:23",
    preguntas: [
      "¿Cuál es el molde de este siglo al que me estoy adaptando?",
      "¿Mi culto es emoción sin cuerpo y sin un no?",
      "¿Qué no concreto diré esta semana, a alguien, como presentación del cuerpo?"
    ]
  },
  "juan-14": {
    autor: "Juan, el discípulo a quien Jesús amaba.",
    epoca: "La noche en que Judas sale y el Señor es entregado. El discurso de despedida, antes de Getsemaní.",
    audiencia: "Los once. Corazones que se turban. Tomás no sabe a dónde va el Señor. Felipe pide ver al Padre.",
    genero: "Evangelio. Palabras del Señor a los suyos, no un mapa de caminos espirituales.",
    literario:
      "Esto no se oye como un lema suelto. En el capítulo 13 Jesús lava los pies de los discípulos, Judas sale a la noche, y el Señor da el mandamiento nuevo: que os améis unos a otros. El 14 abre con un consuelo concreto: no se turbe vuestro corazón. Hay casa en el Padre, y Él va a prepararla. Tomás pregunta el camino porque no sabe a dónde va el Señor, y recibe una persona, no un diagrama: yo soy el camino, y la verdad, y la vida. Más adelante, en los versículos 16 y 17, Jesús promete otro Paráclito, el Espíritu de verdad, que estará con ellos. En el 26 promete que ese Espíritu les enseñará todas las cosas y les recordará lo que Él ha dicho. Nadie llega a «yo soy el camino» recortando el versículo para un cartel. Llega como respuesta a un discípulo que no sabe a dónde va su Señor.",
    lemmas: [
      {
        orig: "ἐγώ εἰμι",
        sense: "yo soy. No señala un camino. Él es el camino."
      },
      {
        orig: "ἡ ὁδός, ἡ ἀλήθεια, ἡ ζωή",
        sense: "artículos. El camino, la verdad, la vida. No un recurso entre otros."
      },
      {
        orig: "οὐδεὶς ἔρχεται πρὸς τὸν πατέρα εἰ μὴ δι’ ἐμοῦ",
        sense: "nadie viene al Padre sino por mí. Exclusión clara."
      },
      {
        orig: "παράκλητος",
        sense: "abogado, consolador. El Espíritu Santo, prometido en este mismo capítulo."
      }
    ],
    cristo: "El Padre se alcanza por el Hijo. Hebreos 10:19–20 llama a su carne el velo recién abierto. Hechos 4:12 niega otro nombre. El Paráclito no abre un segundo camino: glorifica a este (16:13–14). «Muchos caminos» no sobrevive a Juan 14:6. El texto obliga a ofender o a creer. Tomás recibió una persona, no un diagrama.",
    cruces: "Jn. 10:9 · Jn. 14:6 · Jn. 14:16 · Jn. 16:13–14 · Hch. 4:12 · He. 10:19–20",
    preguntas: [
      "¿He suavizado «nadie viene» para no ofender?",
      "¿Busco un mapa, o al que es el camino?",
      "¿A quién diré esta semana, sin grosería y sin rebaja, que el Padre se alcanza por Jesús?"
    ]
  },
  "salmo-23": {
    autor: "David.",
    epoca: "Israel real. Pastoreo que no es postal.",
    audiencia: "El pueblo que camina valles, no el que colecciona frases.",
    genero: "Salmo. Confianza. Poesía que se reza, no que se recorta.",
    literario: "El Salmo 22 es el clamor del abandonado. El 23 es el Pastor. El 24 es el Rey de gloria. El valle no se medita para que desaparezca. El «tú» llega en el valle: de tercera persona (Jehová es mi pastor) a segunda (tú estás conmigo). La mesa es en presencia de enemigos. El bien y el hesed persiguen.",
    lemmas: [
      {
        orig: "יְהוָה רֹעִי",
        sense: "YHWH es mi pastor. El Nombre, no un arquetipo."
      },
      {
        orig: "לֹא אֶחְסָר",
        sense: "nada me faltará. La falta se mide por Él, no por el siglo."
      },
      {
        orig: "גֵּיא צַלְמָוֶת",
        sense: "valle de sombra profunda. El valle está. El Pastor también."
      },
      {
        orig: "שֵׁבֶט / מִשְׁעֶנֶת",
        sense: "vara y cayado: disciplina y sostén. No solo caricia."
      }
    ],
    cristo: "Juan 10: el Buen Pastor da la vida por las ovejas. Hebreos 13:20: el Dios de paz trajo de los muertos a nuestro Señor Jesucristo, el gran Pastor. Apocalipsis 7:17: el Cordero los pastoreará. El Salmo 23 no es mindfulness hebreo. Es el Nombre que pastorea, y el Hijo que entra al valle hasta la cruz, y sale. El que usa este salmo para negar el valle lo invierte.",
    cruces: "Ez. 34:11–16 · Sal. 22 · Sal. 23 · Jn. 10:11 · He. 13:20 · Ap. 7:17",
    preguntas: [
      "¿Dónde tengo miedo, y nombraré al Pastor en segunda persona: «tú estás conmigo»?",
      "¿Uso este salmo para negar el valle?",
      "¿Quién camina el mismo valle, y se lo diré?"
    ]
  },
  "genesis-3": {
    autor: "Moisés, siervo de Jehová, según el testimonio de la Iglesia.",
    epoca: "Origen. El pacto de obras aún no ha sido transgredido cuando el capítulo 2 cierra.",
    audiencia: "Israel, y por Israel el mundo: el acta del pacto quebrantado.",
    genero: "Narración primordial. Historia teológica, no mito de origen.",
    literario: "Génesis 1–2 da el don y el mandato, dos infinitivos absolutos. El 2:25 cose la desnudez sin vergüenza. El 3 abre con una pregunta sobre el mandato: cuatro bocas, una glosa, una mordedura, un juicio, una simiente. El 4 ya es sangre. El observador que entre por 3:6 sin 3:1 ha perdido la primera hermenéutica invertida: la glosa precede a la mordedura. El oficio se invierte: el que debía guardar es guardado fuera; el animal habla; el hombre calla.",
    lemmas: [
      {
        orig: "נָחָשׁ",
        sense: "serpiente: criatura hecha, del campo, que habla. No un símbolo suelto."
      },
      {
        orig: "עָרוּם",
        sense: "astuta. El oído hebreo oye el parentesco con עֵירֻם y עֲרוּמִּים: desnudos (2:25), antes de cualquier doctrina."
      },
      {
        orig: "אַף",
        sense: "ʾap̄ kî: «conque». La partícula que pone el mandato entre comillas. Primera hermenéutica de rebelión."
      },
      {
        orig: "מוֹת",
        sense: "muerte. לֹא־מוֹת תְּמֻתוּן parasita el מוֹת תָּמוּת de 2:17: la contradicción se viste de corrección."
      },
      {
        orig: "כֵּאלֹהִים",
        sense: "como Dios. No deidad ontológica: el oficio de determinar el bien y el mal. La serpiente jamás dice YHWH."
      },
      {
        orig: "חַוָּה",
        sense: "Eva. Nombrada después de 3:15, madre de todos los vivientes, no desde la hoja de higuera."
      },
      {
        orig: "עָפָר",
        sense: "polvo. Al polvo volverás. El juicio al hombre nombra la materia, no un ánimo."
      },
      {
        orig: "זֶרַע",
        sense: "simiente. La promesa se oye como simiente y herida. La LXX oye αὐτός en el que herirá la cabeza."
      },
      {
        orig: "שׁוּף",
        sense: "herir. Cabeza y calcañar. No es un empate. El juicio a la serpiente es evangelio."
      }
    ],
    cristo: "Romanos 5 y 1 Corintios 15 no improvisan un último Adán: lo leen aquí. La simiente de la mujer es el que herirá la cabeza. Las túnicas de pieles no son un taller de costura: Dios cubre al que no pudo cubrirse. Filipenses 2 oye el oficio usurpado y el Hijo que no lo retuvo. Romanos 16:20: el Dios de paz aplastará en breve a Satanás bajo vuestros pies. Apocalipsis 12:9 nombra a la serpiente antigua. El que se reconozca como David en este capítulo todavía no se reconoció como pecador bajo el pacto.",
    cruces: "Gn. 2:16–17 · Gn. 3:15 · Gn. 3:21 · Os. 6:7 · Mt. 19:4 · Ro. 5:12–19 · 1 Co. 15:21–22 · Ro. 16:20 · Ap. 12:9",
    preguntas: [
      "¿Qué mandato de esta semana he puesto entre comillas con un אַף, y a quién se lo confieso?",
      "¿Leo Génesis 3 como mito de autoestima herida, o como acta del pacto?",
      "Si Adán no cayó, ¿qué queda de Cristo como último Adán?",
      "¿Coso todavía hojas de higuera, o dejo que Él vista?"
    ]
  },
  "salmo-22": {
    autor: "David.",
    epoca: "Israel real. El justo perseguido ya conocido en la historia del rey.",
    audiencia: "La asamblea a la que el abandonado promete anunciar el Nombre.",
    genero: "Salmo de lamento real. Poesía del pacto, no diario íntimo.",
    literario: "Queja, confianza, proclamación. El 22 no viaja solo: el 23 es el Pastor, el 24 el Rey. Mateo 27 no cita un adorno. El paralelismo estrecha; no rellena. El «yo» es David, y —con autoridad canónica— el Hijo de David.",
    lemmas: [
      {
        orig: "עֲזַבְתָּנִי",
        sense: "me has desamparado. El clamor es a Dios, no al vacío."
      },
      {
        orig: "כָּאֲרִי / כָּאֲרוּ",
        sense: "como león, o han horadado. La variante se sirve; no se bautiza la duda."
      },
      {
        orig: "יַדַי וְרַגְלָי",
        sense: "mis manos y mis pies. El cuerpo está en el metro."
      },
      {
        orig: "אֲסַפְּרָה שִׁמְךָ",
        sense: "anunciaré tu nombre a mis hermanos. Hebreos 2:12 oye esto en Cristo."
      }
    ],
    cristo: "Mateo 27 clava el clamor. Juan 19 sortea las vestiduras. Hebreos 2:12 pone al Hijo en la asamblea. El salmo no es crónica del Gólgota escrita como reportaje: es oración que el Espíritu destinó al Gólgota. Quien tome cada «yo» como autobiografía del lector hurta al Mesías.",
    cruces: "Sal. 22 · Mt. 27:35, 46 · Jn. 19:24 · He. 2:12 · Sal. 22:22",
    preguntas: [
      "¿He usado el versículo 1 como amuleto de abandono, sin oír el 24?",
      "¿Leo este «yo» como si yo fuera el justo, o como David y el Hijo de David?",
      "¿Qué anunciaré a la asamblea, si el indicativo es «me has oído»?"
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
    cristo: "Génesis 49: el cetro de Judá. El go'el de Levítico 25 y Rut: pariente de sangre que paga. Hebreos 2:14–15: toma carne para redimir. El Cordero recibe la adoración que el ángel rechaza. El que abre el libro es el que abre al sordo. León, Cordero y Fuego no son adorno del sello: son este capítulo.",
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
  "genesis-3": {
    tablaTitulo: "Lo que Dios dijo, y lo que la boca glosó",
    tabla: [
      {
        palabra: "De todo árbol del huerto podrás comer.",
        glosa: "¿Conque Dios os ha dicho: No comáis de todo árbol del huerto?",
      },
      {
        palabra: "Ciertamente morirás.",
        glosa: "No moriréis.",
      },
      {
        palabra: "Jehová Dios manda y da.",
        glosa: "Dios envidia. Sabe que seréis como Dios.",
      },
    ],
    casillas: [
      {
        name: "Dios",
        body: "Habla y da; viste con pieles; pone enemistad; anuncia la simiente. No es el envidioso de la glosa.",
      },
      {
        name: "Pecado",
        body: "Tuerce la Palabra antes de morder, cose hojas, se esconde y acusa al que le fue dado. Nadie confiesa sin señalar a otro.",
      },
      {
        name: "Cristo",
        body: "La simiente de la mujer, el que herirá la cabeza, el que cubre al que no pudo cubrirse. El último Adán se lee aquí, no se importa.",
      },
      {
        name: "Pueblo",
        body: "Expulsado y cubierto, puesto bajo promesa y no bajo mito. El oficio de guardar se pierde; el camino queda guardado por otro.",
      },
    ],
    analogiaAntecedente:
      "Solo Génesis 1–2. Don, imagen, mandato, desnudez sin vergüenza, oficio de guardar. Eso basta para oír la transgresión. El sistema entra después, y entra etiquetado.",
    analogiaPlena:
      "Romanos 5:12–19. 1 Corintios 15:21–22. Filipenses 2. Romanos 16:20. Apocalipsis 12:9. El protoevangelio se oye como simiente y herida, no como folleto. Quien llene 3:6 con un ordo salutis aún no ha oído a Moisés.",
    status: "¿Saga etiológica, mito de origen, o historia del pacto quebrantado?",
    distingo:
      "Hay etiología literaria —dolor, tierra, querubines— y no hay mito ontológico. El género es narración, no reportaje moderno; eso no la vuelve fábula. Jesús toma Génesis 2 como Palabra del Creador.",
    fontes:
      "El texto. Mateo 19:4–6. Oseas 6:7. Ireneo, Adversus Haereses III.23. Calvino, Institución II.i. Hamilton sirve el hebreo. Wellhausen y Gunkel no legislan.",
    reductio:
      "Si la serpiente dice verdad, Dios miente. Si Adán no cayó, Cristo no es último Adán. La forma cultual de 3:1, hoy: «¿Conque esto ocurrió?»",
    acto: "Leer Génesis 3 entero, en voz alta. Confesar la negociación delante de un testigo. Quitar el אַף de un mandato que esta semana se ha puesto entre comillas. Las hojas de higuera se nombran porque 3:7 las conjuga. La fruta, no.",
  },
  "salmo-22": {
    tablaTitulo: "El clamor, y lo que el versículo suelto hurta",
    tabla: [
      {
        palabra: "Dios mío, Dios mío, ¿por qué me has desamparado?",
        glosa: "El versículo 1 tomado como amuleto de abandono, sin el 24.",
      },
      {
        palabra: "No me has despreciado ni abominado.",
        glosa: "El abandono oído como el final, cuando el salmo vuelve a la asamblea.",
      },
      {
        palabra: "Anunciaré tu nombre a mis hermanos.",
        glosa: "El «yo» del lector disfrazado de justo, hurtando al Mesías.",
      },
    ],
    casillas: [
      {
        name: "Dios",
        body: "Es el abandonador y el oidor. El clamor va a Él, no al vacío. El 24 lo confiesa: no me has despreciado.",
      },
      {
        name: "Pecado",
        body: "Rodea como toros y perros. Sortea vestiduras. Se relame. No es un ánimo: es un cerco.",
      },
      {
        name: "Cristo",
        body: "Mateo 27 clava el clamor. Juan 19 sortea las vestiduras. Hebreos 2:12 pone al Hijo en la asamblea.",
      },
      {
        name: "Pueblo",
        body: "La asamblea a la que el abandonado promete anunciar el Nombre. No un diario íntimo.",
      },
    ],
    analogiaAntecedente:
      "David primero. El justo perseguido ya conocido en la historia del rey. El paralelismo hebreo estrecha; no rellena. El Salmo 23 y el 24 esperan: Pastor y Rey. Nadie llega al Gólgota sin haber oído a David.",
    analogiaPlena:
      "Mateo 27. Juan 19. Hebreos 2:12. El salmo no es crónica del Gólgota escrita como reportaje: es oración que el Espíritu destinó al Gólgota. El Nuevo Testamento no cita un adorno.",
    status: "¿Oración de David, o del Hijo?",
    distingo:
      "De David, y del Hijo con autoridad canónica. El «yo» no es autobiografía del lector. Quien se vista con este clamor para no oír al Mesías hurta el salmo.",
    fontes:
      "El texto. Mateo 27:35, 46. Juan 19:24. Hebreos 2:12. La variante כארי / כארו se sirve; no se bautiza la duda.",
    reductio:
      "Si el clamor de la cruz es cita ornamental, Mateo testifica en vano. El crítico que reduce el salmo a «relectura cristiana» miente contra la Pasión.",
    acto: "Leer el salmo entero, en voz alta. El indicativo es «me has oído». Di a alguien la alabanza que el abandonado promete a la asamblea. Queda prohibido «hoy muero a mis sentimientos de abandono» sin el verbo del texto.",
  },
  "isaias-53": {
    tablaTitulo: "Lo que el Siervo carga, y lo que el siglo recablea",
    tabla: [
      {
        palabra: "Herido por nuestras rebeliones.",
        glosa: "Herido como ejemplo de resiliencia, sin cargo.",
      },
      {
        palabra: "Jehová cargó en él el pecado de todos nosotros.",
        glosa: "La cruz como lección moral. El «todos» recortado para dejar una excepción piadosa.",
      },
      {
        palabra: "Por su llaga fuimos nosotros curados.",
        glosa: "Curación como taller de autoestima. «Herida» donde el texto dice rebelión.",
      },
    ],
    casillas: [
      {
        name: "Dios",
        body: "Jehová quiso quebrantarlo. No mira a otro lado. Pone el pecado sobre el Siervo.",
      },
      {
        name: "Pecado",
        body: "Rebelión y descarriarse como ovejas. Se carga. No se administra. No se rebautiza como herida para no arrodillarse.",
      },
      {
        name: "Cristo",
        body: "El Siervo de Isaías, el cordero de Éxodo 12, el macho cabrío de Levítico 16, el Cordero de Apocalipsis 5. Hechos 8 no improvisa.",
      },
      {
        name: "Pueblo",
        body: "Justificados muchos porque Él lleva iniquidades. Sanos por llaga ajena, no por técnica interior.",
      },
    ],
    analogiaAntecedente:
      "Isaías 52:13 abre: he aquí mi siervo. Israel esperaba un brazo visible. El texto pone un varón de dolores. El canto se oye en el rollo, no en el folleto de soteriología.",
    analogiaPlena:
      "Hechos 8:32–35. 1 Pedro 2:24. 2 Corintios 5:21. El eunuco lee este rollo y Felipe le abre a Jesús. El Gran Rollo de Qumrán (~125 a. C.) quita la coartada de un canto inventado después de Gólgota.",
    status: "¿Poema de resiliencia, o sustitución?",
    distingo:
      "Hay dolor, y hay cargo. El silencio ante los trasquiladores no es estoicismo: es obediencia. La curación nace de la herida ajena, no de la nuestra bien contada.",
    fontes:
      "El texto. El hebreo: נָשָׂא, סָבַל, אָשָׁם. Hechos 8. 1 Pedro 2. 2 Corintios 5. El Gran Rollo. Qumrán no legisla el evangelio: quita la coartada.",
    reductio:
      "Si tu cruz es un ejemplo de amor sin cargo, no es Isaías 53. Si el Siervo no lleva iniquidades, el pueblo no queda sano. El que aún cree que puede pagar no ha leído.",
    acto: "Confesar esta semana, a Dios y a una persona, un pecado que se ha llamado herida para no llamarlo rebelión. Nombrarlo bajo la llaga del Siervo. Luego el capítulo entero.",
  },
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
      "Filipenses 2:1–4 pide un mismo sentir. El himno no es adorno: es la medida. Nadie canta 2:9 si aún pelea el primer asiento. El 2:12–18 pide ocupar la salvación con temor.",
    analogiaPlena:
      "Isaías 45:23: a mí se doblará toda rodilla. Marcos 10:45. Juan 13. Hebreos 12:2. Apocalipsis 5:12. El Nombre es el del Siervo exaltado, no un lema de culto.",
    status: "¿Himno de kénosis para el seminario, o medida de la mente de Filipos?",
    distingo:
      "ἐκένωσεν no es dejar de ser quién es: es tomar lo que no debía. La infamia de la cruz es el punto, no un detalle. Toda rodilla es escatología, no eslogan.",
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
