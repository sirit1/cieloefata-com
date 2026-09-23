import { createFileRoute, redirect } from "@tanstack/react-router";

/** El slug vivo de Hechos 13–14 es viajes-de-pablo. */
export const Route = createFileRoute("/estudios/hechos-13-14")({
  beforeLoad: () => {
    throw redirect({
      to: "/estudios/$slug",
      params: { slug: "viajes-de-pablo" },
      statusCode: 308,
    });
  },
});
