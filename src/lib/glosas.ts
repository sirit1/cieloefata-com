/** Glosas breves: latín, arameo, tecnicismos. El original griego/hebreo vive en strong.ts. */

export const GLOSAS: Record<string, string> = {
  "El Fuego": "El Espíritu Santo. Juan bautiza en agua; el que viene, en Espíritu Santo y fuego. Hechos 2: lenguas como de fuego.",
  "Sola Scriptura": "La Escritura sola. El texto manda sobre el comentario.",
  "sola scriptura": "La Escritura sola. El texto manda sobre el comentario.",
  "sensus literalis": "El sentido literal: lo que el texto dice en su lengua y su género.",
  "status quaestionis": "El estado de la cuestión: qué se discute, con precisión.",
  "Status quaestionis": "El estado de la cuestión: qué se discute, con precisión.",
  reductio: "Reducción al absurdo: si esto fuera así, aquello se cae.",
  Reductio: "Reducción al absurdo: si esto fuera así, aquello se cae.",
  fontes: "Las fuentes: de dónde se toma lo que se afirma.",
  Distingo: "Distingo: se separan dos cosas que el error había mezclado.",
  distingo: "Distingo: se separan dos cosas que el error había mezclado.",
  eiségesis: "Meter en el texto lo que no está. Lo contrario de exégesis.",
  exégesis: "Sacar del texto lo que está. Oír, no imponer.",
  hapax: "Hapax legomenon: palabra que aparece una sola vez en el corpus.",
  "hapax legomenon": "Palabra que aparece una sola vez en el corpus.",
  scopus: "El blanco del texto: hacia dónde apunta el pasaje.",
  Sitz: "Sitz im Leben: la situación vital en la que el texto nació.",
  "analogía antecedente": "Oír primero lo ya dado en el canon, antes de importar el resto.",
  "analogía plena": "Resumir después con todo el canon, sin usarlo como ventrílocuo.",
  "analogía de la fe": "La Escritura se interpreta a sí misma. Ningún pasaje derriba el canon.",
  versiculitis: "Extraer un versículo del párrafo, del pacto y del canon, y hacerlo oráculo.",
  "V.E.R.D.A.D.™": "Ver, Entorno, Revelación, Doctrina, Argumento, Decisión. El método de esta casa.",
  "V.E.R.D.A.D.": "Ver, Entorno, Revelación, Doctrina, Argumento, Decisión.",
  "C.R.I.S.O.L.™": "Compuerta pastoral de Decisión, en El Altar del Espejo. Impide el teatro del «hoy muero a…».",
  "C.R.I.S.O.L.": "Compuerta pastoral de Decisión. El Altar del Espejo.",
  Éfata: "Sé abierto. Palabra de Cristo al sordo, Marcos 7:34.",
  Efata: "Sé abierto. Palabra de Cristo al sordo, Marcos 7:34.",
  ἐφφαθά: "Arameo: sé abierto. Imperativo pasivo. Marcos 7:34.",
  אתפתח: "Arameo: sé abierto. No «abre tú»: sé abierto.",
  "διανοίχθητι": "Aoristo pasivo: sé abierto de parte a parte.",
  Shemá: "Oye, Israel: Jehová nuestro Dios, Jehová uno es. Deuteronomio 6:4.",
  YHWH: "El Nombre. La Reina-Valera dice Jehová.",
  "YO SOY": "Éxodo 3:14. El Nombre que no se conjuga como oficio humano.",
  "Reina-Valera": "Traducción castellana de la Escritura. Esta casa lee en ella.",
  "RevelatiO": "La Escritura abierta: el capítulo entero, las versiones, la consulta. revelatio.app",
  quadriga: "Los cuatro sentidos medievales. Esta casa los deja: el texto no es un cifrado.",
  "lectio divina": "Lectura orante. No sustituye la observación del pasaje.",
  SOAP: "Método de devocional (Scripture, Observation, Application, Prayer). Aquí no es el método.",
  elénctica: "La teología que refuta el error. Turretin: status, distingos, fontes, reductio.",
  "sensus plenior": "Un sentido más pleno que el autor humano no vio y el Espíritu sí cargó. Se afirma con el canon, no contra el párrafo.",
  "Vere Deus, vere homo": "Verdadero Dios, verdadero hombre. Calcedonia: no se recorta al Hijo.",
  "vere Deus, vere homo": "Verdadero Dios, verdadero hombre.",
  protoevangelio: "La primera promesa del evangelio: Génesis 3:15, la simiente que herirá la cabeza.",
  "imago Dei": "La imagen de Dios. El hombre la lleva; no la inventa.",
  kénosis: "El despojo de Filipenses 2:7. No dejó de ser Dios: tomó forma de siervo.",
  "ἐκένωσεν": "Se despojó. Filipenses 2:7.",
  "soli Deo gloria": "A Dios solo la gloria.",
  "Post Tenebras Lux": "Después de las tinieblas, luz.",
};

export const GLOSA_KEYS = Object.keys(GLOSAS).sort((a, b) => b.length - a.length);

export function glosaDe(token: string): string | undefined {
  return GLOSAS[token];
}

export function hallarGlosas(text: string): { start: number; end: number; token: string; texto: string }[] {
  const out: { start: number; end: number; token: string; texto: string }[] = [];
  for (const key of GLOSA_KEYS) {
    const texto = GLOSAS[key];
    let from = 0;
    while (from <= text.length) {
      const i = text.indexOf(key, from);
      if (i < 0) break;
      const before = i === 0 ? "" : text[i - 1];
      const after = text[i + key.length] ?? "";
      const boundL = !/[A-Za-záéíóúñÁÉÍÓÚÑ™]/.test(before);
      const boundR = !/[A-Za-záéíóúñÁÉÍÓÚÑ™]/.test(after);
      if (boundL && boundR) {
        out.push({ start: i, end: i + key.length, token: key, texto });
      }
      from = i + key.length;
    }
  }
  return out;
}
