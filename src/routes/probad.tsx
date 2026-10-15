import { createFileRoute } from "@tanstack/react-router";
import { MANUALES, ManualPage } from "@/components/manual";
import { MANUAL_HTML } from "@/lib/manuales/probad";
import { pageHead, tituloSeccion } from "@/lib/seo";

export const Route = createFileRoute("/probad")({
  component: () => (
    <ManualPage
      kicker="Manual fundacional"
      title="Método P.R.O.B.A.D."
      subtitulo="Palabra · Regla de Cristo · Opción excelente · Bueno retenido · Autoexamen · Distinción del siglo"
      html={MANUAL_HTML}
      hermanos={MANUALES.filter((m) => m.to !== "/probad")}
    />
  ),
  head: () =>
    pageHead({
      path: "/probad",
      title: tituloSeccion("Manual del Método P.R.O.B.A.D."),
      description: "El manual fundacional del Método P.R.O.B.A.D. de Alejandro Sirit: discernir con la Escritura abierta, en seis niveles, lo verdadero de lo que solo se le parece.",
    }),
});
