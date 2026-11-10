import { useEffect, useState } from "react";

/** Apartados que la lección ya trae. */
export function IndiceLeccion({ raiz }: { raiz: string }) {
  const [items, setItems] = useState<{ id: string; texto: string }[]>([]);

  useEffect(() => {
    const hoja = document.getElementById(raiz);
    if (!hoja) return;
    const list: { id: string; texto: string }[] = [];
    for (const h of hoja.querySelectorAll("h2")) {
      if (!h.id) h.id = `leccion-h-${list.length + 1}`;
      const texto = (h.textContent ?? "").replace(/\s+/g, " ").trim();
      if (texto) list.push({ id: h.id, texto });
    }
    setItems(list);
  }, [raiz]);

  if (items.length === 0) return null;

  return (
    <nav className="indice-leccion" aria-label="En esta lección">
      <p className="kicker">En esta lección</p>
      <ol>
        {items.map((it) => (
          <li key={it.id}>
            <a href={`#${it.id}`}>{it.texto}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
