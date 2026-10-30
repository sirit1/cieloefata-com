export type ObraV2 = {
  slug: string;
  titulo: string;
  html: string;
  guiaHtml: string;
  texto: string[];
  portada?: string;
  portadaGuia?: string;
  og?: string;
  descargas: Partial<Record<"obra_pdf" | "obra_epub" | "guia_pdf" | "guia_epub", string>>;
};
