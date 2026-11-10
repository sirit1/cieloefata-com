import { idsDeModulo, TITULO_CURSO_COMPLETO } from "./catalogo.ts";

export type FilaCertificado = {
  codigo: string;
  nombre: string;
  titulo: string;
  puntaje: number;
  emitidoEn: string;
  /** Si llega de una consulta interna, la vista pública lo descarta. */
  email?: string | null;
};

export type Verificacion =
  | { valido: false }
  | {
      valido: true;
      codigo: string;
      nombre: string;
      titulo: string;
      puntaje: number;
      fecha: string;
    };

/** Vista pública: válido o no, nombre, módulo y fecha. Sin correo. */
export function vistaPublica(fila: FilaCertificado | null | undefined): Verificacion {
  if (!fila) return { valido: false };
  const fecha = fechaIso(fila.emitidoEn);
  const nombre = fila.nombre?.trim() ?? "";
  const titulo = fila.titulo?.trim() ?? "";
  const codigo = fila.codigo?.trim() ?? "";
  if (!fecha || !nombre || !titulo || !codigo) return { valido: false };
  if (!Number.isInteger(fila.puntaje) || fila.puntaje < 0 || fila.puntaje > 100) return { valido: false };
  return { valido: true, codigo, nombre, titulo, puntaje: fila.puntaje, fecha };
}

function fechaIso(valor: string | undefined): string | null {
  if (!valor) return null;
  const m = /^(\d{4}-\d{2}-\d{2})/.exec(valor.trim());
  return m ? m[1] : null;
}

/**
 * El certificado del curso completo se emite al aprobar el duodécimo módulo.
 * El examen final no lo sustituye ni lo dispara.
 * `yaAprobados` son los módulos aprobados antes de este intento.
 */
export function debeEmitirCursoCompleto(yaAprobados: readonly string[], examenId: string): boolean {
  const modulos = idsDeModulo();
  if (!modulos.includes(examenId)) return false;
  const set = new Set(yaAprobados);
  set.add(examenId);
  return modulos.every((id) => set.has(id));
}

export function puntajeCurso(puntajes: readonly number[]): number {
  if (puntajes.length === 0) return 0;
  const media = puntajes.reduce((a, b) => a + b, 0) / puntajes.length;
  return Math.round(media);
}

export function tituloCursoCompleto(): string {
  return TITULO_CURSO_COMPLETO;
}

const CODIGO_OK = /^[A-Za-z0-9_-]{16,80}$/;

export function codigoValido(codigo: string): boolean {
  return CODIGO_OK.test(codigo);
}

/** URL fija del código, también en la vista previa. */
export function urlCertificado(codigo: string): string {
  return `https://www.cieloefata.com/certificado/${codigo}`;
}
