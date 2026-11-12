/**
 * Cuaderno de estudio. Tipos, estantes y el contexto que se guarda con cada nota.
 * No inventa texto bíblico: solo compone lo que el lector seleccionó o escribió,
 * y la referencia que ya estaba en la página.
 */

export const ESTANTES = [
  { id: "escuela", nombre: "Escuela" },
  { id: "lectura", nombre: "Lectura diaria" },
  { id: "mana", nombre: "Maná" },
] as const;

export type Estante = (typeof ESTANTES)[number]["id"];

export type ContextoNota = {
  shelf: Estante;
  fuente: string;
  textoSeleccionado: string;
  referencia: string;
  dia: number | null;
  seccion: string;
  tituloDia: string;
  pasaje: string;
  fechaLectura: string | null;
  manaRef: string;
};

export type NotaEstudio = ContextoNota & {
  id: string;
  texto: string;
  tieneAudio: boolean;
  createdAt: string;
  updatedAt: string;
};

export type NuevaNota = ContextoNota & {
  texto: string;
  audioBase64?: string;
  audioMime?: string;
};

/** El día 10 cierra la primera serie, el 11 abre la segunda y el 21 abre la última serie del módulo uno. */
export function moduloDeDia(dia: number | null): string {
  if (dia != null && dia >= 1 && dia <= 10) return "Primera serie · días 1 a 10";
  if (dia != null && dia >= 11 && dia <= 20) return "Segunda serie · días 11 a 20";
  if (dia != null && dia >= 21 && dia <= 30) return "Última serie del módulo uno · días 21 a 30";
  return "Curso Experto Bíblico";
}

const CITA_LITERAL = /Así dice [^«»\n]{0,220}?\./;

/** Frase de cita tal como está escrita en el bloque. Si no está, cadena vacía. */
export function citaLiteralEnBloque(textoBloque: string): string {
  const m = textoBloque.replace(/\s+/g, " ").match(CITA_LITERAL);
  return m ? m[0].trim() : "";
}

export function contextoEscuela(input: {
  dia: number;
  titulo: string;
  seccion: string;
  citaMemoria: string;
  citaEnBloque: string;
  textoSeleccionado: string;
}): ContextoNota {
  const dia = Number.isInteger(input.dia) && input.dia >= 1 ? input.dia : null;
  const titulo = limpiar(input.titulo, 300);
  const seccion = limpiar(input.seccion, 300);
  const cita = limpiar(input.citaMemoria, 240) || limpiar(input.citaEnBloque, 400);
  const partes = [];
  if (dia) partes.push(`Día ${dia}`);
  if (seccion) partes.push(`sección «${seccion}»`);
  if (cita) partes.push(cita);
  return {
    shelf: "escuela",
    fuente: dia
      ? `Curso Experto Bíblico · Día ${dia}${titulo ? `: ${titulo}` : ""}`
      : `Curso Experto Bíblico${titulo ? ` · ${titulo}` : ""}`,
    textoSeleccionado: limpiar(input.textoSeleccionado, 8000),
    referencia: partes.join(" · "),
    dia,
    seccion,
    tituloDia: titulo,
    pasaje: "",
    fechaLectura: null,
    manaRef: "",
  };
}

export function contextoLectura(input: {
  fecha: string;
  pasaje: string;
  fuente?: string;
  referencia?: string;
  textoSeleccionado: string;
}): ContextoNota {
  const fecha = fechaValida(input.fecha);
  const pasaje = limpiar(input.pasaje, 240);
  const referencia = limpiar(input.referencia ?? "", 800) || pasaje;
  const fuenteDada = limpiar(input.fuente ?? "", 500);
  const fuente =
    fuenteDada ||
    ["Lectura diaria", fecha ?? "", pasaje].filter(Boolean).join(" · ") ||
    "Lectura diaria";
  return {
    shelf: "lectura",
    fuente,
    textoSeleccionado: limpiar(input.textoSeleccionado, 8000),
    referencia,
    dia: null,
    seccion: "",
    tituloDia: "",
    pasaje,
    fechaLectura: fecha,
    manaRef: "",
  };
}

export function contextoMana(input: {
  ref: string;
  textoSeleccionado: string;
  fuente?: string;
}): ContextoNota {
  const ref = limpiar(input.ref, 240);
  return {
    shelf: "mana",
    fuente: limpiar(input.fuente ?? "", 500) || (ref ? `Maná · ${ref}` : "Maná"),
    textoSeleccionado: limpiar(input.textoSeleccionado, 8000),
    referencia: ref,
    dia: null,
    seccion: "",
    tituloDia: "",
    pasaje: "",
    fechaLectura: null,
    manaRef: ref,
  };
}

export function notaTieneContenido(nota: { texto: string; textoSeleccionado: string; audio?: boolean }): boolean {
  return Boolean(nota.texto.trim() || nota.textoSeleccionado.trim() || nota.audio);
}

export function limpiar(valor: string, max: number): string {
  return valor.replace(/\s+/g, " ").trim().slice(0, max);
}

export function fechaValida(valor: string): string | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(valor.trim());
  if (!m) return null;
  const y = Number(m[1]);
  const mes = Number(m[2]);
  const d = Number(m[3]);
  if (mes < 1 || mes > 12 || d < 1 || d > 31) return null;
  const fecha = new Date(Date.UTC(y, mes - 1, d));
  if (fecha.getUTCFullYear() !== y || fecha.getUTCMonth() !== mes - 1 || fecha.getUTCDate() !== d) return null;
  return `${m[1]}-${m[2]}-${m[3]}`;
}

export function esEstante(valor: string): valor is Estante {
  return valor === "escuela" || valor === "lectura" || valor === "mana";
}
