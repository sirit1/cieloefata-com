import { createFileRoute, Link } from "@tanstack/react-router";
import { DIRECTOR } from "@/lib/examenes/catalogo";
import { verificarCertificado } from "@/lib/examenes/functions";
import { pageHead, tituloSeccion } from "@/lib/seo";

export const Route = createFileRoute("/certificado/$codigo")({
  loader: ({ params }) => verificarCertificado({ data: params.codigo }),
  head: ({ loaderData }) =>
    pageHead({
      path: `/certificado/${loaderData?.valido ? loaderData.codigo : ""}`,
      title: tituloSeccion(loaderData?.valido ? "Certificado válido" : "Certificado"),
      description: loaderData?.valido
        ? `Certificado de ${loaderData.nombre}: ${loaderData.titulo}.`
        : "Este código no corresponde a un certificado de Cielo Efata.",
      index: false,
    }),
  component: CertificadoPage,
});

function CertificadoPage() {
  const data = Route.useLoaderData();
  if (!data.valido) {
    return (
      <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
        <p className="kicker">Escuela Bíblica Cielo Efata</p>
        <h1 className="mt-3 font-serif text-4xl">Certificado</h1>
        <p className="mt-6 text-lg">Este código no corresponde a un certificado de Cielo Efata.</p>
        <p className="mt-4">
          <Link to="/certificado" className="text-link underline">
            Verificar otro código
          </Link>
        </p>
      </main>
    );
  }

  const fecha = new Date(`${data.fecha}T00:00:00Z`).toLocaleDateString("es", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <p className="kicker">Certificado válido</p>
      <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">{data.nombre}</h1>
      <p className="mt-6 text-lg leading-relaxed">{data.titulo}</p>
      <p className="mt-4 text-ink-soft">
        Nota: {data.puntaje} %. Fecha: {fecha}.
      </p>
      <p className="mt-6">
        {DIRECTOR}
        <span className="mt-1 block font-sans text-sm text-gold">Director</span>
      </p>
      <p className="mt-6 font-sans text-sm break-all text-ink-soft">Código {data.codigo}</p>
      <p className="mt-6">
        <a className="text-link underline" href={`/api/certificado/${data.codigo}`}>
          Descargar el PDF
        </a>
        {" · "}
        <Link to="/certificado" className="text-link underline">
          Verificar otro código
        </Link>
      </p>
    </main>
  );
}
