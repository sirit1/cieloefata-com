import { createFileRoute, redirect } from "@tanstack/react-router";

/** Quien busca «libros» entra al catálogo de obras. */
export const Route = createFileRoute("/libros")({
  beforeLoad: () => {
    throw redirect({ to: "/obras", statusCode: 308 });
  },
});
