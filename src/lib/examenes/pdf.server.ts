import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import QRCode from "qrcode";
import { DIRECTOR } from "./catalogo.ts";
import { urlCertificado } from "./certificado.ts";
import { SELLO_PNG_BASE64 } from "./sello-png.ts";

export type DatosCertificado = {
  codigo: string;
  nombre: string;
  titulo: string;
  puntaje: number;
  fecha: string;
};

const NAVY = rgb(0x1a / 255, 0x23 / 255, 0x40 / 255);
const GOLD = rgb(0x7a / 255, 0x54 / 255, 0x14 / 255);
const GOLD_SOFT = rgb(0xc4 / 255, 0xa3 / 255, 0x5a / 255);
const PARCHMENT = rgb(0xf4 / 255, 0xef / 255, 0xe4 / 255);
const INK_SOFT = rgb(0x3a / 255, 0x46 / 255, 0x5c / 255);

/** Times (WinAnsi) no tiene raya larga ni caracteres fuera del latín. */
function pdfTexto(text: string): string {
  return text
    .replaceAll("—", "-")
    .replaceAll("–", "-")
    .replace(/[^\u0000-\u00FF]/g, "");
}

function fechaLarga(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const fecha = new Date(Date.UTC(y, (m ?? 1) - 1, d ?? 1));
  return new Intl.DateTimeFormat("es", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(fecha);
}

/** PDF de una página con el sello que ya está en el repositorio. */
export async function dibujarCertificado(datos: DatosCertificado): Promise<Uint8Array> {
  const pdf = await PDFDocument.create();
  const page = pdf.addPage([612, 792]);
  const { width, height } = page.getSize();
  const serif = await pdf.embedFont(StandardFonts.TimesRoman);
  const serifBold = await pdf.embedFont(StandardFonts.TimesRomanBold);
  const sans = await pdf.embedFont(StandardFonts.Helvetica);

  page.drawRectangle({ x: 0, y: 0, width, height, color: PARCHMENT });
  page.drawRectangle({
    x: 28,
    y: 28,
    width: width - 56,
    height: height - 56,
    borderColor: GOLD_SOFT,
    borderWidth: 1.5,
  });
  page.drawRectangle({
    x: 36,
    y: 36,
    width: width - 72,
    height: height - 72,
    borderColor: GOLD,
    borderWidth: 0.6,
  });

  const logo = await pdf.embedPng(Buffer.from(SELLO_PNG_BASE64, "base64"));
  const logoSize = 84;
  page.drawImage(logo, {
    x: (width - logoSize) / 2,
    y: height - 150,
    width: logoSize,
    height: logoSize,
  });

  const centro = (text: string, font: typeof serif, size: number) =>
    (width - font.widthOfTextAtSize(text, size)) / 2;
  const tamano = (text: string, font: typeof serif, size: number) => {
    let n = size;
    while (n > 11 && font.widthOfTextAtSize(text, n) > width - 120) n -= 1;
    return n;
  };

  let y = height - 180;
  const casa = "Cielo Efata";
  page.drawText(casa, { x: centro(casa, serifBold, 22), y, size: 22, font: serifBold, color: NAVY });
  y -= 18;
  const escuela = "Escuela Bíblica";
  page.drawText(escuela, { x: centro(escuela, sans, 11), y, size: 11, font: sans, color: GOLD });
  y -= 36;
  const cert = "Certificado";
  page.drawText(cert, { x: centro(cert, serif, 28), y, size: 28, font: serif, color: NAVY });
  y -= 28;
  const otorga = "Se otorga a";
  page.drawText(otorga, { x: centro(otorga, sans, 11), y, size: 11, font: sans, color: INK_SOFT });
  y -= 32;
  const nombre = pdfTexto(datos.nombre).slice(0, 80);
  const nombreSize = tamano(nombre, serifBold, 22);
  page.drawText(nombre, {
    x: centro(nombre, serifBold, nombreSize),
    y,
    size: nombreSize,
    font: serifBold,
    color: NAVY,
  });
  y -= 28;
  const por = "por haber aprobado";
  page.drawText(por, { x: centro(por, sans, 11), y, size: 11, font: sans, color: INK_SOFT });
  y -= 26;
  const titulo = pdfTexto(datos.titulo).slice(0, 90);
  const tituloSize = tamano(titulo, serifBold, 16);
  page.drawText(titulo, {
    x: centro(titulo, serifBold, tituloSize),
    y,
    size: tituloSize,
    font: serifBold,
    color: NAVY,
  });
  y -= 28;
  const nota = `Nota: ${datos.puntaje} %  ·  ${fechaLarga(datos.fecha)}`;
  page.drawText(nota, { x: centro(nota, sans, 12), y, size: 12, font: sans, color: INK_SOFT });
  y -= 48;
  page.drawText(DIRECTOR, { x: centro(DIRECTOR, serif, 13), y, size: 13, font: serif, color: NAVY });
  y -= 14;
  const cargo = "Director";
  page.drawText(cargo, { x: centro(cargo, sans, 10), y, size: 10, font: sans, color: GOLD });

  const url = urlCertificado(datos.codigo);
  const qr = await QRCode.toBuffer(url, {
    type: "png",
    margin: 1,
    width: 180,
    color: { dark: "#1a2340", light: "#f4efe4" },
  });
  const qrImg = await pdf.embedPng(qr);
  page.drawImage(qrImg, { x: 72, y: 72, width: 78, height: 78 });
  page.drawText("Código", { x: 164, y: 128, size: 9, font: sans, color: GOLD });
  page.drawText(pdfTexto(datos.codigo), { x: 164, y: 112, size: 9, font: sans, color: NAVY });
  const verifica = "Verificación: cieloefata.com/certificado";
  page.drawText(verifica, { x: 164, y: 94, size: 9, font: sans, color: INK_SOFT });

  return pdf.save();
}
