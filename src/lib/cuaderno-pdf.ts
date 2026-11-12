/**
 * PDF completo del cuaderno. Cada nota lleva la anotación, la fuente consultada,
 * el texto seleccionado (literal) y la referencia de capítulo o versículo.
 * El audio no se incrusta: se menciona.
 */

import { moduloDeDia, type NotaEstudio } from "./cuaderno-estudio.ts";

export type LineaPdf = { bold: boolean; text: string };

const ANCHO = 88;

export function lineasDelCuaderno(
  notas: NotaEstudio[],
  generado: Date,
): LineaPdf[] {
  const lineas: LineaPdf[] = [];
  const push = (text: string, bold = false) => {
    for (const trozo of envolver(text, ANCHO))
      lineas.push({ bold, text: trozo });
  };
  push("Cuaderno de estudio · Cielo Efata", true);
  push("Escuela · Lectura diaria · Maná");
  push(
    `Generado el ${fechaLarga(generado)} desde la cuenta. No es una copia del aparato.`,
  );
  push("");
  const porEstante: { id: NotaEstudio["shelf"]; nombre: string }[] = [
    { id: "escuela", nombre: "Escuela" },
    { id: "lectura", nombre: "Lectura diaria" },
    { id: "mana", nombre: "Maná" },
  ];
  for (const estante of porEstante) {
    const grupo = notas
      .filter((n) => n.shelf === estante.id)
      .slice()
      .sort(comparar(estante.id));
    push(estante.nombre, true);
    push(
      grupo.length === 0
        ? "Sin notas en este estante."
        : `${grupo.length} ${grupo.length === 1 ? "nota" : "notas"}.`,
    );
    push("");
    let modulo = "";
    for (const nota of grupo) {
      if (nota.shelf === "escuela") {
        const nombre = moduloDeDia(nota.dia);
        if (nombre !== modulo) {
          modulo = nombre;
          push(nombre, true);
        }
      }
      push("—", true);
      push(`Anotada el ${fechaLarga(new Date(nota.createdAt))}`);
      push("Tu nota");
      push(nota.texto.trim() || "Sin texto escrito.");
      if (nota.tieneAudio) {
        push("Nota de voz: hay un audio guardado en la cuenta.");
        push("Este PDF solo lo menciona; no lleva el archivo de sonido.");
      }
      push("Qué se consultó");
      push(nota.fuente.trim() || "Sin fuente registrada.");
      push("Texto seleccionado");
      push(nota.textoSeleccionado.trim() || "Sin texto seleccionado.");
      push("Capítulo o versículo");
      push(nota.referencia.trim() || "Sin referencia registrada.");
      if (nota.shelf === "escuela") {
        push(`Día de la escuela: ${nota.dia ?? "—"}`);
        push(`Título del día: ${nota.tituloDia.trim() || "—"}`);
        push(`Sección: ${nota.seccion.trim() || "—"}`);
      }
      if (nota.shelf === "lectura") {
        push(`Fecha de la lectura: ${nota.fechaLectura ?? "—"}`);
        push(`Pasaje indicado: ${nota.pasaje.trim() || "—"}`);
      }
      if (nota.shelf === "mana") {
        push(`Referencia del maná: ${nota.manaRef.trim() || "—"}`);
      }
      push("");
    }
  }
  return lineas;
}

export function pdfDelCuaderno(
  notas: NotaEstudio[],
  generado: Date,
): Uint8Array {
  return construirPdf(lineasDelCuaderno(notas, generado));
}

export function nombrePdf(generado: Date): string {
  return `Cuaderno_Cielo_Efata_${fechaCaracas(generado)}.pdf`;
}

function comparar(shelf: NotaEstudio["shelf"]) {
  return (a: NotaEstudio, b: NotaEstudio) => {
    if (shelf === "escuela") {
      const d = (a.dia ?? 999) - (b.dia ?? 999);
      if (d !== 0) return d;
    }
    if (shelf === "lectura") {
      const f = (a.fechaLectura ?? "").localeCompare(b.fechaLectura ?? "");
      if (f !== 0) return f;
    }
    if (shelf === "mana") {
      const r = a.manaRef.localeCompare(b.manaRef, "es");
      if (r !== 0) return r;
    }
    return a.createdAt.localeCompare(b.createdAt);
  };
}

function envolver(text: string, ancho: number): string[] {
  const limpio = text.replace(/\s+/g, " ").trim();
  if (!limpio) return [""];
  const palabras = limpio.split(" ");
  const lineas: string[] = [];
  let actual = "";
  for (const palabra of palabras) {
    const trozos = partir(palabra, ancho);
    for (const trozo of trozos) {
      const siguiente = actual ? `${actual} ${trozo}` : trozo;
      if (siguiente.length > ancho && actual) {
        lineas.push(actual);
        actual = trozo;
      } else {
        actual = siguiente;
      }
    }
  }
  if (actual) lineas.push(actual);
  return lineas;
}

function partir(palabra: string, ancho: number): string[] {
  if (palabra.length <= ancho) return [palabra];
  const out: string[] = [];
  for (let i = 0; i < palabra.length; i += ancho)
    out.push(palabra.slice(i, i + ancho));
  return out;
}

function fechaCaracas(fecha: Date): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Caracas",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(fecha);
}

function fechaLarga(fecha: Date): string {
  if (Number.isNaN(fecha.getTime())) return "fecha no disponible";
  return new Intl.DateTimeFormat("es", {
    timeZone: "America/Caracas",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(fecha);
}

const WIN: Record<string, number> = {
  "¡": 0xa1,
  "«": 0xab,
  "»": 0xbb,
  "¿": 0xbf,
  Á: 0xc1,
  É: 0xc9,
  Í: 0xcd,
  Ñ: 0xd1,
  Ó: 0xd3,
  Ú: 0xda,
  Ü: 0xdc,
  á: 0xe1,
  é: 0xe9,
  í: 0xed,
  ñ: 0xf1,
  ó: 0xf3,
  ú: 0xfa,
  ü: 0xfc,
  "–": 0x96,
  "—": 0x97,
  "‘": 0x91,
  "’": 0x92,
  "“": 0x93,
  "”": 0x94,
  "·": 0xb7,
};

export function pdfLiteral(texto: string): string {
  let out = "(";
  for (const ch of texto) {
    const code = ch.codePointAt(0) ?? 63;
    let byte = 63;
    if (code >= 32 && code <= 126) byte = code;
    else if (WIN[ch] != null) byte = WIN[ch];
    if (byte === 0x28 || byte === 0x29 || byte === 0x5c)
      out += `\\${String.fromCharCode(byte)}`;
    else if (byte < 32 || byte > 126)
      out += `\\${byte.toString(8).padStart(3, "0")}`;
    else out += String.fromCharCode(byte);
  }
  out += ")";
  return out;
}

function construirPdf(lineas: LineaPdf[]): Uint8Array {
  const porPagina = 48;
  const paginas: LineaPdf[][] = [];
  for (let i = 0; i < lineas.length; i += porPagina)
    paginas.push(lineas.slice(i, i + porPagina));
  if (paginas.length === 0) paginas.push([{ bold: false, text: "" }]);

  const n = paginas.length;
  const primer = 5;
  const paginaObj = (i: number) => primer + i * 2;
  const contenidoObj = (i: number) => primer + i * 2 + 1;
  const kids = paginas.map((_, i) => `${paginaObj(i)} 0 R`).join(" ");

  const objetos: string[] = [];
  objetos[1] = "<< /Type /Catalog /Pages 2 0 R >>";
  objetos[2] = `<< /Type /Pages /Count ${n} /Kids [${kids}] >>`;
  objetos[3] =
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>";
  objetos[4] =
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>";
  paginas.forEach((pagina, i) => {
    const stream = flujo(pagina);
    objetos[paginaObj(i)] =
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Contents ${contenidoObj(i)} 0 R /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> >>`;
    objetos[contenidoObj(i)] =
      `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`;
  });

  let cuerpo = "%PDF-1.4\n";
  const offsets: number[] = [0];
  for (let i = 1; i < objetos.length; i += 1) {
    if (!objetos[i]) continue;
    offsets[i] = cuerpo.length;
    cuerpo += `${i} 0 obj\n${objetos[i]}\nendobj\n`;
  }
  const startxref = cuerpo.length;
  const total = objetos.length - 1;
  let xref = `xref\n0 ${total + 1}\n`;
  xref += "0000000000 65535 f \n";
  for (let i = 1; i <= total; i += 1) {
    xref += `${String(offsets[i] ?? 0).padStart(10, "0")} 00000 n \n`;
  }
  cuerpo += xref;
  cuerpo += `trailer\n<< /Size ${total + 1} /Root 1 0 R >>\nstartxref\n${startxref}\n%%EOF`;
  return new TextEncoder().encode(cuerpo);
}

function flujo(lineas: LineaPdf[]): string {
  const cmds = ["BT", "/F1 11 Tf", "14 TL", "48 790 Td"];
  let bold = false;
  for (const linea of lineas) {
    if (linea.bold !== bold) {
      cmds.push(linea.bold ? "/F2 12 Tf" : "/F1 11 Tf");
      bold = linea.bold;
    }
    cmds.push(`${pdfLiteral(linea.text)} Tj`, "T*");
  }
  cmds.push("ET");
  return cmds.join("\n");
}
