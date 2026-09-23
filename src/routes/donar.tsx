import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/donar")({
  beforeLoad: () => {
    throw redirect({ to: "/sostener", statusCode: 308 });
  },
});
