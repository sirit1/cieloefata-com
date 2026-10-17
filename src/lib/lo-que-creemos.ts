/**
 * «Lo que creemos» — BORRADOR pendiente de la aprobación de Alejandro Sirit.
 * Cada artículo está armado con frases que el sitio ya publica (pilar.ts, nosotros.ts, colofon.ts,
 * metodo y cierre de las aulas). No se añadió doctrina nueva. Lo que falta decidir va entre corchetes.
 * Mientras sea borrador: noindex, fuera del menú, del pie y del sitemap.
 */
export type Articulo = { titulo: string; parrafos: string[]; refs: string };

export const LO_QUE_CREEMOS_ESTADO = "borrador" as const;

export const LO_QUE_CREEMOS_INTRO =
  "Esta página resume lo que Cielo Efata confiesa y enseña. No es un credo nuevo: cada artículo recoge lo que la casa ya dice en sus estudios, tratados y libros, con los versículos en que se apoya. La Escritura manda sobre el comentario, también sobre este.";

export const LO_QUE_CREEMOS: Articulo[] = [
  {
    titulo: "1. La Escritura",
    parrafos: [
      "La Biblia es la Escritura de la Iglesia: sesenta y seis libros, treinta y nueve en el Antiguo Testamento y veintisiete en el Nuevo. Es la Palabra que Dios habló, por muchos hombres, en muchas veces y de muchas maneras, y al fin por el Hijo.",
      "Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia. Nunca la profecía fue traída por voluntad humana: hombres hablaron de parte de Dios, siendo inspirados por el Espíritu Santo. El canon es la lista que la Iglesia recibió, no la lista que cada generación se arma según su herida o su moda.",
      "Sola Scriptura: el texto primero, las ciencias bíblicas después, nada que el pasaje no contenga.",
    ],
    refs: "He. 1:1–2 · 2 Ti. 3:16 · 2 P. 1:21 · Lc. 24:27",
  },
  {
    titulo: "2. Un solo Dios, Padre, Hijo y Espíritu Santo",
    parrafos: [
      "Hay un solo Dios. Oye, Israel: Jehová nuestro Dios, Jehová uno es. Ese uno, no obstante, no es un solitario mudo. El Padre habla; el Hijo es el Verbo que era con Dios y era Dios, y fue hecho carne; el Espíritu Santo es Señor y da vida. Un Nombre, tres personas. No tres dioses.",
    ],
    refs: "Dt. 6:4 · Mt. 28:19 · 2 Co. 13:14",
  },
  {
    titulo: "3. El Padre",
    parrafos: [
      "El Padre crea los cielos y la tierra por su Palabra, elige, habla y guarda pacto. No da su gloria a otro, ni se deja recortar hasta convertirse en un dios doméstico.",
    ],
    refs: "Gn. 1:1 · Dt. 6:4 · Is. 42:8",
  },
  {
    titulo: "4. El Hijo",
    parrafos: [
      "El Verbo era Dios, y aquel Verbo fue hecho carne. Verdadero Dios y verdadero hombre, único mediador: nadie viene al Padre sino por él.",
      "En la cruz carga lo que no es suyo. Al tercer día resucita. Volverá.",
    ],
    refs: "Jn. 1:1, 14 · Jn. 14:6 · 1 Ti. 2:5–6 · 1 Co. 15:3–4",
  },
  {
    titulo: "5. El Espíritu Santo",
    parrafos: [
      "El Espíritu Santo es Dios, no un ambiente ni una energía que se administra. Inspiró la Escritura, convence de pecado y nos da a entender lo que Dios nos ha concedido.",
      "El Espíritu no dicta un oráculo privado que desplace al texto: toma de lo que es de Cristo y lo hace saber. La verdad a la que guía es la que ya fue dicha.",
    ],
    refs: "Hch. 5:3–4 · Jn. 16:8 · Jn. 16:13–14 · 1 Co. 2:12",
  },
  {
    titulo: "6. El pecado y la salvación",
    parrafos: [
      "Todo apunta a lo mismo: conocer a Dios, reconocer el pecado, arrepentirse, convertirse a Cristo y permanecer firmes en la fe.",
      "El que no naciere de agua y del Espíritu, no puede entrar en el reino de Dios. Nos salvó por el lavamiento de la regeneración y por la renovación en el Espíritu Santo. Nadie se da a sí mismo ese nacimiento.",
      "El poder de Dios para salvación no es el recuento de códices, sino el evangelio.",
    ],
    refs: "Mr. 1:15 · Jn. 3:5 · Tit. 3:5 · Ro. 1:16",
  },
  {
    titulo: "7. La Palabra se obedece",
    parrafos: [
      "Santiago compara al que oye la Palabra y no la hace con un hombre que se mira al espejo y se va. Por eso el estudio no termina cuando se ha entendido el pasaje, sino cuando hay un paso concreto que sale de ese texto.",
    ],
    refs: "Stg. 1:22 · Lc. 8:15",
  },
  {
    titulo: "8. Cómo leemos",
    parrafos: [
      "Aprendemos a escuchar el capítulo entero antes de hablar. El método V.E.R.D.A.D. —Ver, Entorno, Revelación, Doctrina, Argumento y Decisión— no es una fórmula mágica: se usa con humildad y oración, hasta que cada versículo vuelve a su párrafo y a su contexto.",
    ],
    refs: "Neh. 8:8 · 2 Ti. 2:15 · Hch. 17:11",
  },
  {
    titulo: "9. Textos y versiones",
    parrafos: [
      "En castellano citamos la Reina-Valera 1960, al pie de la letra. El hebreo se lee según el texto masorético del Códice de Leningrado, que edita la Biblia Hebraica Stuttgartensia. El griego del Nuevo Testamento, según el Textus Receptus. Cada número de Strong se da con su palabra original (lema) y su sentido (glosa): nunca un número suelto.",
    ],
    refs: "Neh. 8:8",
  },
];

/** Lo que el borrador no puede decidir solo: lo decide el autor. */
export const LO_QUE_CREEMOS_PENDIENTE = [
  "¿La casa adopta una confesión histórica de referencia (por ejemplo, una confesión reformada)? El sitio hoy no lo dice, y este borrador no lo afirma.",
  "¿Quieres añadir artículos sobre la Iglesia, el bautismo y la Cena, o los últimos tiempos? El sitio todavía no tiene texto propio sobre esos temas.",
  "¿Firma el texto Alejandro Sirit, o Editorial Cielo Efata?",
];
