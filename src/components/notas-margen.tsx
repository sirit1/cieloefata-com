import { useEffect, useState } from "react";

function tienePaso(texto: string, paso: string) {
  const n = texto.toLocaleLowerCase("es");
  const p = paso.toLocaleLowerCase("es");
  return new RegExp(`(?:^|[^\\p{L}])${p}(?:$|[^\\p{L}])`, "iu").test(n);
}

const PASOS = ["Ver", "Entorno", "Revelación", "Doctrina", "Argumento", "Decisión"] as const;

/** Las notas al pie ya firmadas «—A. S.» pasan al margen. No se reescriben. */
export function NotasMargen({ raiz }: { raiz: string }) {
  useEffect(() => {
    const hoja = document.getElementById(raiz);
    const margen = document.getElementById("margen-notas");
    if (!hoja || !margen) return;
    const notas = hoja.querySelector(".footnotes, .footnotes-end-of-document, aside.footnotes");
    if (notas && notas.parentElement !== margen) margen.appendChild(notas);
  }, [raiz]);

  return (
    <aside className="margen" id="margen-notas" aria-label="Notas al margen">
      <IndiceCuaderno raiz={raiz} />
      <p className="lbl">Notas al margen</p>
    </aside>
  );
}

/** Apartados que la hoja ya trae, para no bajar a ciegas. */
export function IndiceCuaderno({ raiz }: { raiz: string }) {
  const [items, setItems] = useState<{ id: string; texto: string }[]>([]);

  useEffect(() => {
    const hoja = document.getElementById(raiz);
    if (!hoja) return;
    const list: { id: string; texto: string }[] = [];
    for (const h of hoja.querySelectorAll("h2")) {
      if (!h.id) h.id = `cuaderno-h-${list.length + 1}`;
      const texto = (h.textContent ?? "").replace(/\s+/g, " ").trim();
      if (texto) list.push({ id: h.id, texto });
    }
    setItems(list);
  }, [raiz]);

  if (items.length === 0) return null;

  return (
    <nav className="indice-cuaderno" aria-label="En este cuaderno">
      <p className="lbl">En este cuaderno</p>
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

/** Seis pasos del método. Cada letra enlaza el apartado de la hoja que ya lleva ese nombre. */
export function PasosCuaderno({ raiz }: { raiz: string }) {
  const [destino, setDestino] = useState<Record<string, string>>({});

  useEffect(() => {
    const hoja = document.getElementById(raiz);
    if (!hoja) return;
    const mapa: Record<string, string> = {};
    for (const h of hoja.querySelectorAll("h2, h3")) {
      if (!h.id) h.id = `cuaderno-${mapaSize(mapa)}`;
        const texto = h.textContent ?? "";
        for (const paso of PASOS) {
          if (!mapa[paso] && tienePaso(texto, paso)) mapa[paso] = h.id;
        }
    }
    setDestino(mapa);
  }, [raiz]);

  return (
    <div className="tabs" aria-label="Método V.E.R.D.A.D.">
      {PASOS.map((paso) => {
        const id = destino[paso];
        const letra = paso[0];
        return id ? (
          <a key={paso} href={`#${id}`} className={paso === "Ver" ? "on" : undefined}>
            <i>{letra}</i>
            {paso}
          </a>
        ) : (
          <span key={paso}>
            <i>{letra}</i>
            {paso}
          </span>
        );
      })}
    </div>
  );
}

function mapaSize(mapa: Record<string, string>) {
  return Object.keys(mapa).length + 1;
}
