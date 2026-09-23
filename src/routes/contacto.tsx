import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/contacto")({
  beforeLoad: () => {
    throw redirect({ to: "/nosotros", statusCode: 308 });
  },
});
