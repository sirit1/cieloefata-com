import { createFileRoute, redirect } from "@tanstack/react-router";

/** Quien llega por el nombre viejo de la escuela, entra a la misma casa. */
export const Route = createFileRoute("/casa")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});
