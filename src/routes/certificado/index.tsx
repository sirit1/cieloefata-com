import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { codigoValido } from "@/lib/examenes/certificado";
import { pageHead, tituloSeccion } from "@/lib/seo";

export const Route = createFileRoute("/certificado/")({
  head: () =>
    pageHead({
      path: "/certificado",
      title: tituloSeccion("Verificar certificado"),
      description: "Comprueba un certificado de la Escuela Bíblica Cielo Efata con su código.",
    }),
  component: VerificarPage,
});

function VerificarPage() {
  const navigate = useNavigate();
  const [codigo, setCodigo] = useState("");
  const [error, setError] = useState("");

  return (
    <main className="mx-auto max-w-[44em] px-4 py-16 md:py-24">
      <p className="kicker">Escuela Bíblica Cielo Efata</p>
      <h1 className="mt-3 font-serif text-4xl leading-tight md:text-5xl">Verificar certificado</h1>
      <p className="mt-6 leading-relaxed">
        Escribe el código que aparece en el certificado. La consulta dice si es válido, a nombre de quién, de qué
        módulo y en qué fecha. No muestra el correo.
      </p>
      <form
        className="mt-8 flex flex-col gap-3 sm:flex-row"
        onSubmit={(e) => {
          e.preventDefault();
          const limpio = codigo.trim();
          if (!codigoValido(limpio)) {
            setError("Ese código no tiene la forma de un certificado.");
            return;
          }
          void navigate({ to: "/certificado/$codigo", params: { codigo: limpio } });
        }}
      >
        <label className="sr-only" htmlFor="codigo">
          Código del certificado
        </label>
        <input
          id="codigo"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          autoComplete="off"
          spellCheck={false}
          className="min-h-11 flex-1 border border-rule bg-paper px-3 font-sans"
        />
        <button type="submit" className="btn btn-gold">
          Verificar
        </button>
      </form>
      {error ? <p className="mt-4 text-danger">{error}</p> : null}
    </main>
  );
}
