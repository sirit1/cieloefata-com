/**
 * Colofón de los tratados: «Fuentes, versiones y aviso de derechos».
 * Versión castellana citada: Reina-Valera 1960, con su aviso de titular.
 * Firma del autor: solo «Alejandro Sirit». Se muestra completo al cierre de cada tratado.
 */
export type BloqueColofon = { tipo: "h" | "p" | "li"; texto: string };

export const COLOFON_TITULO = "Fuentes, versiones y aviso de derechos";

export const COLOFON_TRATADOS: readonly BloqueColofon[] = [
  { tipo: "p", texto: "Editorial Cielo Efata · Alejandro Sirit · 2026" },
  { tipo: "h", texto: "Texto bíblico" },
  { tipo: "p", texto: "El texto bíblico ha sido tomado de la versión Reina-Valera © 1960 Sociedades Bíblicas en América Latina; © renovado 1988 Sociedades Bíblicas Unidas. Utilizado con permiso." },
  { tipo: "p", texto: "Reina-Valera 1960® es una marca registrada de Sociedades Bíblicas Unidas, y se puede usar solamente bajo licencia." },
  { tipo: "h", texto: "Lenguas originales" },
  { tipo: "li", texto: "Hebreo: texto masorético del Códice de Leningrado, según la Biblia Hebraica Stuttgartensia © 1977/1997 Deutsche Bibelgesellschaft, Stuttgart. Se cita el versículo; no se reproduce la edición." },
  { tipo: "li", texto: "Griego del Nuevo Testamento: Textus Receptus (Stephanus, 1550; Scrivener, 1894), de dominio público." },
  { tipo: "li", texto: "Griego del Antiguo Testamento: Septuaginta, citada solo donde el Nuevo Testamento o el argumento la siguen. No se reproduce la edición de Rahlfs-Hanhart © 2006 Deutsche Bibelgesellschaft." },
  { tipo: "li", texto: "Rollos del Mar Muerto: el gran rollo de Isaías (1QIsaª) y 4Q76 (4QXIIª), citados por su lectura publicada, solo donde confirman o precisan el sentido." },
  { tipo: "li", texto: "Léxicos: Strong (1890), Thayer (1889) y Brown-Driver-Briggs (1906), de dominio público." },
  { tipo: "h", texto: "Comentaristas citados" },
  { tipo: "p", texto: "Juan Calvino (traducciones de la Calvin Translation Society, siglo XIX) y Albert Barnes; en algunos tratados, también Matthew Henry, J. B. Lightfoot o J. C. Ryle. Todos de dominio público (Christian Classics Ethereal Library, ccel.org). Las traducciones al castellano son de esta editorial." },
  { tipo: "h", texto: "Derechos" },
  { tipo: "p", texto: "Tratado © 2026 Alejandro Sirit, Editorial Cielo Efata. Todos los derechos reservados. La Escritura no pertenece al autor; el comentario, sí." },
  { tipo: "p", texto: "Las conclusiones doctrinales son de Alejandro Sirit y no comprometen a los editores de los textos citados." },
];
