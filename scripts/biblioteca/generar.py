#!/usr/bin/env python3
"""Genera, desde la biblioteca bíblica local, los datos que el sitio puede publicar.

Solo se publica lo que es de dominio público o del propio sitio:
  · Diccionarios de Strong (1890, dominio público; edición JSON de Open Scriptures, CC BY-SA: se atribuye).
  · Textus Receptus Scrivener 1894 con números Strong (dominio público, ed. M. A. Robinson).
  · Westminster Leningrad Codex (dominio público; mismo códice que la BHS).
  · Las glosas en castellano que el sitio ya escribe (src/lib/strong.ts y strong-prosa.ts).
NO se publica: LXX de Rahlfs (CC BY-NC-SA), rollos del Mar Muerto (CC BY-NC) ni la base RVR1960.
De la RVR1960 solo salen los versículos que /preguntas cita (menos de veinte, con el aviso del titular).

Uso: python3 scripts/biblioteca/generar.py [/ruta/a/biblia.db]
"""
import json, os, re, sqlite3, sys, unicodedata

RAIZ = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
DB = sys.argv[1] if len(sys.argv) > 1 else "/workspace/biblioteca-biblica/biblia.db"
con = sqlite3.connect(f"file:{DB}?mode=ro", uri=True)
SRC = os.path.join(RAIZ, "src")
PUB = os.path.join(RAIZ, "public")

libros = {r[3]: (r[1], r[4], r[0]) for r in con.execute("SELECT n,usfm,osis,nombre,abrev FROM libros")}
POR_USFM = {v[0]: (k, v[1], v[2]) for k, v in libros.items()}
ALIAS = {"Salmo": "Salmos", "Cantar": "Cantares"}

def plano(s):
    return unicodedata.normalize("NFD", s).encode("ascii", "ignore").decode().lower()

def libro_usfm(nombre):
    nombre = ALIAS.get(nombre, nombre)
    if nombre in libros:
        return libros[nombre][0]
    for k, v in libros.items():
        if plano(k) == plano(nombre):
            return v[0]
    return None

def versos_de(ref):
    """'Marcos 7:31–37' · 'Apocalipsis 5' · '1 Corintios 12–14' · '3 Juan 2' → [(usfm, cap, ver)]."""
    ref = ref.replace("–", "-").replace("—", "-")
    m = re.match(r"^(\d?\s?[^\d]+?)\s+(\d+)(?::(\d+)(?:-(\d+))?)?(?:-(\d+))?$", ref.strip())
    if not m:
        return []
    u = libro_usfm(m[1].strip())
    if not u:
        return []
    c1 = int(m[2])
    q = "SELECT cap, ver FROM versos WHERE texto=? AND libro=? AND cap=? ORDER BY ver"
    texto = "tr" if POR_USFM[u][2] >= 40 else "wlc"
    if m[3]:
        v1 = int(m[3]); v2 = int(m[4]) if m[4] else v1
        unico = con.execute("SELECT max(cap) FROM versos WHERE texto='rvr1960' AND libro=?", (u,)).fetchone()[0] == 1
        if unico and not m[4]:
            pass
        return [(u, c1, v) for v in range(v1, v2 + 1)]
    caps = range(c1, int(m[5]) + 1) if m[5] else [c1]
    unico = con.execute("SELECT max(cap) FROM versos WHERE texto='rvr1960' AND libro=?", (u,)).fetchone()[0] == 1
    if unico and not m[5]:  # «3 Juan 2» = 3 Juan 1:2
        return [(u, 1, c1)]
    out = []
    for c in caps:
        out += [(u, c, v) for (_, v) in con.execute(q, (texto, u, c))]
    return out

def cita(u, c, v):
    return f"{POR_USFM[u][1]} {c}:{v}"

# ── 1. Glosas castellanas que el sitio ya tiene ──────────────────────────────
glosa_es, lema_sitio = {}, {}
for f in ("lib/strong.ts", "lib/strong-prosa.ts"):
    t = open(os.path.join(SRC, f), encoding="utf-8").read()
    for m in re.finditer(r'strong:\s*"([GH])0*(\d+)"[^}]*?(?:lemma:\s*"([^"]+)")?[^}]*?gloss:\s*"([^"]+)"', t):
        sid = m[1] + m[2]
        glosa_es.setdefault(sid, m[4]); 
        if m[3]: lema_sitio.setdefault(sid, m[3])
    for m in re.finditer(r'gloss:\s*"([^"]+)"[^}]*?strong:\s*"([GH])0*(\d+)"(?:[^}]*?lemma:\s*"([^"]+)")?', t):
        sid = m[2] + m[3]
        glosa_es.setdefault(sid, m[1])
        if m[4]: lema_sitio.setdefault(sid, m[4])

# ── 2. Interlineal de los pasajes de estudios y tratados ─────────────────────
def leer_indice(ruta, patron):
    t = open(os.path.join(SRC, ruta), encoding="utf-8").read()
    return re.findall(patron, t)

estudios = leer_indice("lib/estudios-indice.ts", r'slug:\s*"([^"]+)",\s*title:\s*"[^"]+",\s*ref:\s*"([^"]+)"')
tratados = leer_indice("lib/tratados-indice.ts", r'"slug":\s*"([^"]+)",\s*"n":\s*"[^"]+",\s*"title":\s*"[^"]+",\s*"ref":\s*"([^"]+)"')
os.makedirs(os.path.join(PUB, "interlineal"), exist_ok=True)
usados = set(glosa_es)
manifiesto = {}
for slug, ref in estudios + tratados:
    vs = versos_de(ref)
    if not vs:
        print("sin versos:", slug, ref); continue
    nt = POR_USFM[vs[0][0]][2] >= 40
    texto = "tr" if nt else "wlc"
    salida = []
    for u, c, v in vs:
        pals = con.execute("SELECT forma, strong, morf FROM palabras WHERE texto=? AND libro=? AND cap=? AND ver=? ORDER BY pos", (texto, u, c, v)).fetchall()
        if not pals:
            continue
        ws = []
        for forma, st, morf in pals:
            ids = [re.sub(r"^([GH])0*(\d+).*$", r"\1\2", x) for x in (st or "").split() if re.match(r"^[GH]\d", x)]
            usados.update(ids)
            ws.append([forma, ids[-1] if ids else "", morf or ""])
        salida.append({"ref": cita(u, c, v), "c": c, "v": v, "w": ws})
    if not salida:
        continue
    json.dump({"slug": slug, "ref": ref, "texto": "tr" if nt else "wlc", "lengua": "grc" if nt else "he", "versos": salida},
              open(os.path.join(PUB, "interlineal", f"{slug}.json"), "w", encoding="utf-8"), ensure_ascii=False, separators=(",", ":"))
    manifiesto[slug] = {"ref": ref, "versos": len(salida), "texto": "tr" if nt else "wlc"}
json.dump(manifiesto, open(os.path.join(SRC, "lib", "generado", "interlineal-indice.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)

# ── 3. Fichas de Strong (una por número usado en el sitio) ───────────────────
os.makedirs(os.path.join(PUB, "lexico"), exist_ok=True)
for f in os.listdir(os.path.join(PUB, "lexico")):
    os.remove(os.path.join(PUB, "lexico", f))
# Ocurrencias: una pasada por TR y WLC (el Strong de la fuente puede traer sufijo de letra: H1234a).
ocurr = {}
orden = {u: v[2] for u, v in POR_USFM.items()}
for texto in ("tr", "wlc"):
    for u, c, v, st in con.execute("SELECT libro, cap, ver, strong FROM palabras WHERE texto=? AND strong<>''", (texto,)):
        for x in st.split():
            m = re.match(r"^([GH])0*(\d+)", x)
            if m:
                ocurr.setdefault(m[1] + m[2], []).append((orden.get(u, 99), u, c, v))
n = 0
for sid in sorted(usados):
    row = con.execute("SELECT lema, translit, pron, derivacion, def_strong, def_kjv FROM strong WHERE id=?", (sid,)).fetchone()
    if not row:
        continue
    lema, translit, pron, deriv, dstrong, dkjv = row
    occ = sorted(ocurr.get(sid, []))
    refs, vistos = [], set()
    for _, u, c, v in occ:
        if (u, c, v) in vistos: continue
        vistos.add((u, c, v)); refs.append(cita(u, c, v))
    ficha = {
        "id": sid, "lema": lema_sitio.get(sid) or lema, "lemaStrong": lema, "translit": translit or "", "pron": pron or "",
        "glosa": glosa_es.get(sid, ""), "defStrong": (dstrong or "").strip(), "defKjv": (dkjv or "").strip(),
        "derivacion": (deriv or "").strip(), "veces": len(occ), "versos": len(refs), "refs": refs[:24],
        "texto": "Textus Receptus (Scrivener 1894)" if sid[0] == "G" else "Códice de Leningrado (WLC)",
    }
    json.dump(ficha, open(os.path.join(PUB, "lexico", f"{sid}.json"), "w", encoding="utf-8"), ensure_ascii=False, separators=(",", ":"))
    n += 1

# ── 4. Versículos de /preguntas en RVR1960 (cita breve, con aviso) ──────────
obj = open(os.path.join(SRC, "lib/objeciones.ts"), encoding="utf-8").read()
versos = {}
for ref in re.findall(r'verse:\s*"([^"]+)"', obj):
    partes = []
    for u, c, v in versos_de(ref):
        t = con.execute("SELECT texto_verso FROM versos WHERE texto='rvr1960' AND libro=? AND cap=? AND ver=?", (u, c, v)).fetchone()
        if t: partes.append({"v": v, "t": t[0].strip()})
    versos[ref] = partes
json.dump(versos, open(os.path.join(SRC, "lib", "generado", "versos-preguntas.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(f"interlineal: {len(manifiesto)} pasajes · fichas Strong: {n} · versos de preguntas: {sum(len(x) for x in versos.values())}")
