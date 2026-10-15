import { createFileRoute } from "@tanstack/react-router";
import { MANUALES, ManualPage } from "@/components/manual";
import { MANUAL_HTML } from "@/lib/manuales/verdad";
import { pageHead, tituloSeccion } from "@/lib/seo";

export const Route = createFileRoute("/metodo_/manual")({
  component: () => (
    <ManualPage
      kicker="Manual fundacional"
      title="Método V.E.R.D.A.D."
      subtitulo="Ver · Entorno · Revelación · Doctrina · Argumento · Decisión"
      html={MANUAL_HTML}
      hermanos={MANUALES.filter((m) => m.to !== "/metodo/manual")}
    />
  ),
  head: () =>
    pageHead({
      path: "/metodo/manual",
      title: tituloSeccion("Manual del Método V.E.R.D.A.D."),
      description: "El manual fundacional del Método V.E.R.D.A.D. de Alejandro Sirit: leer el capítulo entero, en seis eslabones, con fundamento bíblico, histórico y un ejemplo completo en Marcos 7.",
    }),
});
