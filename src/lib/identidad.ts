/** El sello es la identidad. No se decora: se confiesa. */

export const SELLO = {
  title: "El sello",
  latin: "Post tenebras lux",
  romance: "Después de las tinieblas, luz",
  gate: "El sello no es un logotipo ni un adorno de papelería. Es una confesión. El León de Judá ha vencido; el Cordero fue inmolado; el Espíritu abre; el libro queda abierto. Quien lo pone como marca de casa sin someterse al capítulo que nombra ya lo ha traicionado, aunque lo reproduzca con fidelidad de orfebre.",
  refs: "Ap. 5:5–6 · Mr. 7:34 · 2 Co. 4:6",
};

export const FIGURAS = [
  {
    kind: "lion" as const,
    name: "El León",
    line: "Ha vencido para abrir el libro y desatar sus siete sellos. No es heráldica de imperio ni un emblema de fuerza humana: es Judá, la raíz de David, el que toma el rollo porque fue digno.",
    ref: "Ap. 5:5",
  },
  {
    kind: "lamb" as const,
    name: "El Cordero",
    line: "Fue inmolado, y está en pie. El que vence es el que fue degollado, y el cielo no comete idolatría cuando le canta: digno eres, porque fuiste inmolado.",
    ref: "Ap. 5:6",
  },
  {
    kind: "flame" as const,
    name: "El Fuego",
    line: "No es un clima de reunión. Es el Espíritu Santo. Juan bautizaba en agua; el que viene bautiza en Espíritu Santo y fuego. En Pentecostés se les aparecieron lenguas repartidas, como de fuego: el don que abre el oído y hace hablar lo que se ha oído.",
    ref: "Mt. 3:11 · Hch. 2:3",
  },
] as const;

export const TINTAS = [
  {
    name: "Tinta",
    token: "navy" as const,
    hex: "#1A2340",
    role: "El campo del sello. Encabezado. La voz que manda. No es un azul decorativo: es el marino sobre el cual el oro y el pergamino pueden hablar.",
  },
  {
    name: "Oro",
    token: "gold-soft" as const,
    hex: "#C4A35A",
    role: "El metal del anillo. Una sola lucidez, no un barniz de cada frase. El oro sirve al Nombre; no se esparce como lujo.",
  },
  {
    name: "Pergamino",
    token: "parchment" as const,
    hex: "#F4EFE4",
    role: "La página. Donde se lee. El marfil interior del sello, para que el texto no se exhiba sobre un blanco de anuncio.",
  },
] as const;

export const TIPOS = {
  pagina: {
    name: "Cormorant Garamond",
    role: "La página. Títulos, cuerpo, el texto que se oye. La letra de un tratado, no la de un cartel.",
  },
  aparato: {
    name: "Source Sans 3",
    role: "El aparato. Menú, botones, citas en versalitas, lo que sirve y no predica. La herramienta no se viste de sermón.",
  },
};

export const USO = [
  {
    name: "El León",
    body: "La clase y el estudio. No entra en el menú ni en el botón. Se nombra en versalitas, como se nombra un oficio, no como se recorta un sello. El que abre el libro es el que ha vencido.",
  },
  {
    name: "El Cordero",
    body: "El tratado y el Gólgota. El que vence es el que fue degollado. Tampoco se recorta: se lee. Donde un versículo se cita de memoria, se vuelve a oír dentro del capítulo.",
  },
  {
    name: "El Fuego",
    body: "El método, el cuaderno, el Espíritu que abre. V.E.R.D.A.D.™ es cauce, no milagro. El Fuego no se administra: se pide, y se obedece cuando el oído cede.",
  },
  {
    name: "Lo que no se hace",
    body: "No se recorta el sello. León, Cordero y Fuego no son medallones pegados al menú, ni manchas en la tarjeta, ni animales dentro del botón. El sello entero vive en el encabezado, el pie y esta página. El resto es tipografía, o silencio.",
  },
] as const;
