import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/escritura")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});
