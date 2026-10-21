# Genera src/lib/libros/v2/<slug>.ts y public/tratados-v2/<slug>/ desde /workspace/tratados_v2 (fuera del repo).
import json, os, re, shutil, subprocess, sys
SRC="/workspace/tratados_v2"; R="/workspace/cieloefata-update"
M={ # slug del sitio -> (carpeta v2, nombre)
 "el-texto-manda":("el-texto-manda","El texto manda"),
 "el-crisol-de-lo-oido":("el-crisol-de-lo-oido","El crisol de lo oído"),
 "buscad-primeramente":("buscad-primeramente","Buscad primeramente"),
 "todo-lo-puedo":("todo-lo-puedo","Todo lo puedo"),
 "el-pensamiento-que-no-era-tuyo":("el-pensamiento-que-no-era-tuyo","El pensamiento que no era tuyo"),
 "prospere-tu-alma":("prospere-tu-alma","Prospere tu alma"),
 "las-ventanas-de-los-cielos":("las-ventanas-de-los-cielos","Las ventanas de los cielos"),
 "la-muerte-y-la-vida":("la-muerte-y-la-vida","La muerte y la vida"),
 "a-este-monte":("a-este-monte","A este monte"),
 "para-bien":("para-bien","Para bien"),
 "si-dios-por-nosotros":("si-dios-por-nosotros","Si Dios por nosotros"),
 "espiritu-de-poder":("espiritu-de-poder","Espíritu de poder"),
 "isaias-53":("herido-por-nuestras-rebeliones","Herido por nuestras rebeliones"),
 "atar-y-desatar":("atar-y-desatar","Atar y desatar"),
 "este-mismo-jesus":("este-mismo-jesus","Este mismo Jesús"),
 "teologia-de-la-gloria":("teologia-de-la-gloria","Teología de la gloria"),
 "el-paraclito-eterno":("el-paraclito-eterno","El Paráclito Eterno"),
}
def html(md, pref):
    h=subprocess.run(["pandoc",md,"-f","epub","-t","html5","--id-prefix",pref],capture_output=True,text=True,check=True).stdout
    h=re.sub(r'</?span[^>]*>','',h); h=re.sub(r'</?div(?! class="footnotes| role)[^>]*>','',h)
    h=re.sub(r'<svg.*?</svg>','',h,flags=re.S); h=re.sub(r'<p>\s*(<img[^>]*>)?\s*</p>','',h)
    h=re.sub(r'<nav.*?</nav>','',h,flags=re.S); h=re.sub(r'(id="|href="#)'+pref+r'[\w.-]*?\.xhtml#',r'\1'+pref,h)
    h=re.sub(r'<h1[^>]*>.*?</h1>','',h,count=1,flags=re.S)  # el título ya lo pinta la página
    if "/workspace" in h or "biblioteca privada" in h.lower(): sys.exit("ABORT biblioteca mention "+md)
    return h.strip()
def texto(md):
    t=subprocess.run(["pandoc",md,"-f","epub","-t","plain","--wrap=none"],capture_output=True,text=True,check=True).stdout
    t=re.sub(r'\[\d+\]','',t)
    return [p.strip() for p in t.split("\n\n") if p.strip()]
os.makedirs(f"{R}/src/lib/libros/v2",exist_ok=True); car=[]
for slug,(d,n) in M.items():
    md=f"{SRC}/{d}/{n}.epub"; mg=f"{SRC}/{d}/{n} - Guía.epub"  # el EPUB final es la fuente
    pub=f"{R}/public/tratados-v2/{slug}"; os.makedirs(pub,exist_ok=True)
    files={}
    for suf,key in [("","obra"),(" - Guía","guia")]:
        for ext in ("pdf","epub"):
            s=f"{SRC}/{d}/{n}{suf}.{ext}"
            if not os.path.exists(s): sys.exit("falta "+s)
            dst=f"{slug}{'-guia' if key=='guia' else ''}.{ext}"; shutil.copy(s,f"{pub}/{dst}")
            files[f"{key}_{ext}"]=f"/tratados-v2/{slug}/{dst}"
    for v,src in [("portada",f"{d}_kindle_1600x2560.jpg"),("portada-guia",f"{d}-guia_kindle_1600x2560.jpg")]:
        subprocess.run(["convert",f"{SRC}/_covers/final/{src}","-resize","600x","-quality","82",f"{pub}/{v}.jpg"],check=True)
    shutil.copy(f"{SRC}/_covers/final/{d}_web_1200x630.jpg",f"{pub}/og.jpg")
    data=dict(slug=slug,titulo=n,html=html(md,"o-"),guiaHtml=html(mg,"g-"),texto=texto(md),
      portada=f"/tratados-v2/{slug}/portada.jpg",portadaGuia=f"/tratados-v2/{slug}/portada-guia.jpg",og=f"/tratados-v2/{slug}/og.jpg",descargas=files)
    open(f"{R}/src/lib/libros/v2/{slug}.ts","w").write("// Generado por scripts/v2/gen.py. No editar a mano.\nimport type { ObraV2 } from \"./tipo\";\nconst obra: ObraV2 = "+json.dumps(data,ensure_ascii=False)+";\nexport default obra;\n")
    car.append(f'  "{slug}": () => import("./{slug}.ts"),')
open(f"{R}/src/lib/libros/v2/index.ts","w").write('import type { ObraV2 } from "./tipo";\n\nconst cargadores: Record<string, () => Promise<{ default: ObraV2 }>> = {\n'+"\n".join(car)+'\n};\n\nexport async function obraV2(slug: string): Promise<ObraV2 | null> {\n  const c = cargadores[slug];\n  return c ? (await c()).default : null;\n}\n')
open(f"{R}/src/lib/libros/v2/tipo.ts","w").write('export type ObraV2 = {\n  slug: string;\n  titulo: string;\n  html: string;\n  guiaHtml: string;\n  texto: string[];\n  portada: string;\n  portadaGuia: string;\n  og: string;\n  descargas: Record<"obra_pdf" | "obra_epub" | "guia_pdf" | "guia_epub", string>;\n};\n')
print("ok",len(car))
