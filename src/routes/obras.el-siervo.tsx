import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/obras/el-siervo")({
  beforeLoad: () => {
    throw redirect({
      to: "/obras/$slug",
      params: { slug: "el-siervo-no-tu" },
      statusCode: 308,
    });
  },
});
