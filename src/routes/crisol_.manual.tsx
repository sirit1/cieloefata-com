import { createFileRoute } from "@tanstack/react-router";
import { MANUALES, ManualPage } from "@/components/manual";
import { MANUAL_HTML } from "@/lib/manuales/crisol";
import { pageHead, tituloSeccion } from "@/lib/seo";

export const Route = createFileRoute("/crisol_/manual")({
  component: () => (
    <ManualPage
      kicker="Manual fundacional"
      title="Método C.R.I.S.O.L."
      subtitulo="Cotejo canónico · Radiografía de frutos · Inmunización léxica · Sometimiento afectivo · Oración · Legitimidad eclesial"
      html={MANUAL_HTML}
      hermanos={MANUALES.filter((m) => m.to !== "/crisol/manual")}
    />
  ),
  head: () =>
    pageHead({
      path: "/crisol/manual",
      title: tituloSeccion("Manual del Método C.R.I.S.O.L."),
      description: "El manual fundacional del Método C.R.I.S.O.L. de Alejandro Sirit: seis pestillos para que la aplicación de la Escritura sea del texto y no del yo.",
    }),
});
