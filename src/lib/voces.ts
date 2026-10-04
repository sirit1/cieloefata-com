export type Voz = { name: string; body: string };

const COMUN: Voz[] = [
  {
    name: "Matthew Henry",
    body: "Henry no se apresura al lema. Recorre el pasaje como quien camina un campo: contexto, palabras, doctrina, uso. La piedad no sustituye al texto; nace de oírlo entero. Si el capítulo pide temor, no lo cambia por consuelo. Si pide fe, no la cambia por esfuerzo.\n\nPor consiguiente su comentario es un mapa, no un púlpito segundo. Donde el párrafo afirma un indicativo de Dios, Henry no lo convierte en un consejo de mejora. Donde hay un mandato, no lo aplaza. El que lea a Henry para ahorrarse el capítulo ha invertido el oficio: el testigo sirve; el pasaje manda.",
  },
  {
    name: "Juan Calvino",
    body: "Calvino sirve al pasaje con claridad y con temor. Dios habla; el hombre no mejora el dictado. La Escritura se interpreta consigo misma. Donde el texto afirma la soberanía, no se suaviza. Donde afirma la carne del Hijo, no se espiritualiza. El comentario se sienta atrás.\n\nAhora bien, esa claridad no es sequedad. Es el temor de quien sabe que un solo recorte fabrica otro evangelio. Calvino no ofrece una técnica de lectura: ofrece un oído. Quien lo cite para ganar una polémica y no para arrodillarse ante el párrafo ya lo usó como aparato, no como testigo.",
  },
  {
    name: "Charles Spurgeon",
    body: "Spurgeon predica para que alguien se vuelva. El púlpito no es un aula de curiosos, sino el lugar donde Cristo se ofrece a pecadores. La doctrina que no llega al corazón todavía no se oyó. La emoción que no nace del texto es teatro.\n\nPor tanto no se le pide a Spurgeon que sustituya la exégesis. Se le pide que recuerde el fin: el pecador oye, se compunge y pregunta qué hacer. Si el estudio cierra sin ese corte, se ha hecho erudición. Si cierra solo con el corte y sin el párrafo, se ha hecho espectáculo. El pasaje manda los dos.",
  },
  {
    name: "John MacArthur",
    body: "MacArthur insiste en lo que el griego y el hebreo ya dijeron, sin convertir el léxico en un segundo evangelio. El señorío de Cristo no es un anexo opcional. El pasaje manda la aplicación; la aplicación no elige otro versículo más cómodo.\n\nEl número de Strong, en su mano, no es talismán, sino freno. Impide que se predique una palabra que el texto no conjuga. Quien lo imite solo en la dureza y no en la sumisión al párrafo habrá tomado el tono y dejado el oído.",
  },
];

const POR_SLUG: Record<string, Voz[]> = {
                    "marcos-7": [
    {
      name: "Matthew Henry",
      body: "Henry oye el itinerario gentil y el mandato de callar. La muchedumbre trae al sordo y no soporta el silencio. Se puede decir «bien lo ha hecho todo» y desobedecer al que lo hizo.\n\nDecápolis: oído gentil. El milagro no es viñeta de Galilea judía. Henry recorre el cuerpo —dedos, saliva, gemido— y no lo evapora en metáfora de inclusión.",
    },
    {
      name: "Juan Calvino",
      body: "Calvino oye el poder y oye la carne. El gemido, alzando los ojos al cielo, es vehemencia de amor. Y, sin embargo, no deja el milagro en la ternura: tiene poder supremo quien simplemente ordena que la lengua y los oídos se abran. Marcos insertó aquella palabra caldea para testificar el poder divino de Cristo.\n\nVere Deus, vere homo: toca porque es hombre y ordena porque es Dios. El sordo no es el agente. El agente queda fuera de la morfología. Calvino no deja que Éfata se vuelva técnica de escucha interior.",
    },
    {
      name: "Charles Spurgeon",
      body: "Spurgeon no convertiría Éfata en lema de casa. El sordo no se abre: es abierto. El púlpito que grita «ábrete tú» ha invertido el pasivo. El milagro es decreto, no técnica.\n\nHay un pueblo que recita Isaías y desobedece a Jesús en la misma respiración. Spurgeon predicaría el versículo 36, que estropea el final feliz: les mandó que no lo dijesen, y cuanto más les mandaba, tanto más lo divulgaban.",
    },
    {
      name: "John MacArthur",
      body: "MacArthur detiene ἐφφαθά (G2188) y διανοίχθητι (G1272): hapax, aoristo pasivo, el mismo verbo de Lucas 24:45. El léxico sirve al párrafo. Isaías 35 está debajo. Quien evapore el cuerpo evapora el oráculo.\n\nEl arameo אתפתח es reflexivo-pasivo: no «abre tú», sino «sé abierto». Marcos traduce de inmediato. El que convierta Éfata en marca y deje al sordo cerrado ha tomado el nombre del milagro en vano.",
    },
  ],
  "filipenses-2": [
    {
      name: "Matthew Henry",
      body: "Henry oye el himno dentro de la grieta de Filipos. El credo entra en la ética. Evodia y Síntique no necesitan una conferencia sobre kénosis: necesitan el sentir de quien se despojó.\n\nEl campo no es un seminario. Es una colonia romana con una iglesia amada y agrietada. Henry no deja que se cante la exaltación y se evite la forma de siervo.",
    },
    {
      name: "Juan Calvino",
      body: "Calvino no deja que ἐκένωσεν signifique que el Hijo dejó de ser quien es. Tomó forma de siervo. La exaltación es del Padre. Toda rodilla es escatología, no eslogan de marca.\n\nμορφὴ θεοῦ y μορφὴ δούλου. El que era igual a Dios no estimó el ser igual como cosa a que aferrarse. Calvino oye la kénosis como asunción, no como merma de deidad.",
    },
    {
      name: "Charles Spurgeon",
      body: "Spurgeon predicaría el Nombre sobre todo nombre sin recortar la cruz. El que no baja no tiene este himno. El púlpito que aplaude la kénosis y retiene el primer asiento aún no oyó a Pablo.\n\nHay un sentir que se pide. No es un adorno litúrgico. Es la forma del que se despojó hasta la muerte, y muerte de cruz. Spurgeon no cantaría la exaltación sin esa bajada.",
    },
    {
      name: "John MacArthur",
      body: "MacArthur sirve μορφὴ θεοῦ y μορφὴ δούλου. El ἁρπαγμόν no se resuelve con un grito piadoso. El indicativo produce el imperativo: haya este sentir, porque Él se despojó.\n\nG3444, G2758, G1401. El léxico impide dos errores: que el Hijo dejara de ser Dios, y que la iglesia cante el himno sin bajar. Filipenses 2 no es un tratado de cristología para el archivo, sino medida de la mente de Filipos.",
    },
  ],
  "apocalipsis-5": [
    {
      name: "Matthew Henry",
      body: "Henry oye el llanto y el «no llores». Se anuncia un León y se ve un Cordero. El observador no resuelve la paradoja antes de tiempo: el que vence es el que fue degollado.\n\nEl campo es el cielo, no el periódico. Henry no deja que el lector ponga el cetro en el César. El cántico nuevo lo pone en la sangre.",
    },
    {
      name: "Juan Calvino",
      body: "Calvino oye en el Cordero degollado y en pie la simultaneidad de la cruz y de la resurrección. El que fue inmolado está de pie. Recibe la adoración que ninguna criatura puede recibir.\n\nEl cielo no comete idolatría. Si el Cordero recibe lo que se le da al que está en el trono, el Cordero es Dios. Calvino no ofrece un semidiós útil.",
    },
    {
      name: "Charles Spurgeon",
      body: "Spurgeon anunciaría aquí que la historia no la abre el César. El púlpito del pánico profético pone el cetro en el periódico. El cántico nuevo lo pone en la sangre.\n\n«Digno eres» no es un coro de ambiente. Es el decreto de quién abre el libro. Spurgeon predicaría el ἄξιος a una iglesia perseguida, no a un público de novelas del fin.",
    },
    {
      name: "John MacArthur",
      body: "MacArthur ata el ἄξιος a la sangre. El derecho de abrir el libro fue conferido en la cruz, no aplazado a un milenio de novela. El Cordero es Dios: el cielo no comete idolatría.\n\nEl léxico de la visión —León, raíz de David, Cordero como inmolado— no se recorta. Quien se quede solo con el León sin la sangre ha oído al anciano y no ha mirado.",
    },
  ],
  "2-pedro-1": [
    {
      name: "Matthew Henry",
      body: "Henry oye que se añade a la fe, a costa propia. No es un cartel de virtudes. Es lo que el capítulo 2 exigirá cuando desenmascare a quienes prometen libertad siendo esclavos. El que no añade no es humilde, sino ciego, y se olvidó de la purificación de sus antiguos pecados.\n\nDios dio todo lo que concierne a la vida y a la piedad. Ahora se suministra. Henry no deja que la ociosidad se llame gracia.",
    },
    {
      name: "Juan Calvino",
      body: "Calvino no discute a Pablo cuando Pedro pide diligencia. La fe que no se ejercita se vuelve estéril. La elección se confirma en el camino, no en el eslogan.\n\nHay un descanso en Cristo, y hay un suministro. El primero no anula al segundo. Calvino oye la analogía de la fe: Santiago 2 y Judas 3 leen el mismo peligro.",
    },
    {
      name: "Charles Spurgeon",
      body: "Spurgeon predicaría contra la fe que no se mueve. El «ya creí, ya está» no sobrevive a este párrafo. El que no añade se vuelve estéril, aunque conserve el vocabulario de la justificación.\n\nEl púlpito que llama gracia a la ociosidad ha tomado el nombre de Pedro en vano. Spurgeon pediría fruto, no un cartel.",
    },
    {
      name: "John MacArthur",
      body: "MacArthur sirve ἐπιχορηγήσατε: suministrar, costear. El léxico no es un taller de hábitos. Es lo que evita el abismo del capítulo 2.\n\nEste tomo, en la colección, se llama La fe no basta, y no discute a Pablo: desnuda al que cita a Pablo para no añadir. El señorío no es anexo.",
    },
  ],
    "santiago-1": [
    {
      name: "Matthew Henry",
      body: "Henry oye el espejo. El que oye y no hace se parece al que mira su rostro natural y se va, y luego olvida. El altar no es el sentimiento de haber oído, ni la liturgia de un estudio bien anotado.\n\nEs el hombre que permanece en la ley perfecta, la de la libertad, y es hacedor de la obra. Henry no deja el aula en el oído.",
    },
    {
      name: "Juan Calvino",
      body: "Calvino no discute a Pablo cuando Santiago manda hacer. El autoengaño es liturgia de los que solo escuchan. La libertad no es huir de la ley, sino permanecer en ella.\n\nMateo 7:24–27 está debajo: el que oye y no hace es casa sobre arena. Calvino oye la analogía. El Señor que dijo Éfata no deja el oído abierto para el archivo.",
    },
    {
      name: "Charles Spurgeon",
      body: "Spurgeon predicaría contra el oidor profesional. Hay un pueblo que colecciona sermones y olvida el rostro. El púlpito que no pide un acto ha dejado a Santiago fuera.\n\nUn solo paso. Un testigo. No una lista. Spurgeon no permitiría un «hoy muero a…» que el pasaje no conjuga. El verbo aquí es hacer.",
    },
    {
      name: "John MacArthur",
      body: "MacArthur sirve ποιηταὶ λόγου: hacedores de la palabra. El léxico no es un anexo de la fe. Es su verificación. C.R.I.S.O.L.™, en El Altar del Espejo, guarda este eslabón.\n\nEl que mira y se va olvida. El que permanece, es bienaventurado en lo que hace. El señorío se verifica en el acto, no en el vocabulario de la justificación usado para no obedecer.",
    },
  ],
      };

export function vocesDe(slug: string): Voz[] {
  return POR_SLUG[slug] ?? COMUN;
}
