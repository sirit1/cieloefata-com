import { useEffect, useState } from "react";

/** Apartados que ya están en la hoja. No inventa títulos: lee los h2 del tratado. */
export function IndiceHoja({ raiz }: { raiz: string }) {
  const [apartados, setApartados] = useState<{ id: string; texto: string }[]>([]);

  useEffect(() => {
    const nodo = document.getElementById(raiz);
    if (!nodo) return;
    const lista = [...nodo.querySelectorAll("h2")].map((h, i) => {
      if (!h.id) h.id = `hoja-${i + 1}`;
      return { id: h.id, texto: h.textContent?.replace(/\s+/g, " ").trim() ?? "" };
    }).filter((a) => a.texto);
    setApartados(lista);
  }, [raiz]);

  if (apartados.length === 0) return null;

  return (
    <aside className="casa-lado" aria-label="En esta hoja">
      <b>En esta hoja</b>
      {apartados.map((a) => (
        <a key={a.id} href={`#${a.id}`}>{a.texto}</a>
      ))}
    </aside>
  );
}
