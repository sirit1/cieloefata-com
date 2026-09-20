import { useEffect, useState } from "react";
import { useRouter } from "@tanstack/react-router";

export function Volver() {
  const router = useRouter();
  const [can, setCan] = useState(false);

  useEffect(() => {
    setCan(typeof window !== "undefined" && window.history.length > 1);
  }, []);

  if (!can) return null;

  return (
    <p className="mb-8 font-sans text-sm">
      <button
        type="button"
        className="inline-flex min-h-11 items-center text-link underline"
        onClick={() => router.history.back()}
      >
        Volver a donde estabas
      </button>
    </p>
  );
}
