import json,re,shutil,subprocess,sys
P="/home/box/.local/lib/python3.13/site-packages/pypandoc/files/pandoc"; E="/workspace/epub"; R="/workspace/cef"; PUB=R+"/public"
C={"el-texto-manda":"E1","el-crisol-de-lo-oido":"00","buscad-primeramente":"01","todo-lo-puedo":"02","el-pensamiento-que-no-era-tuyo":"03","prospere-tu-alma":"04","las-ventanas-de-los-cielos":"05","la-muerte-y-la-vida":"06","a-este-monte":"07","para-bien":"08","si-dios-por-nosotros":"09","espiritu-de-poder":"10","isaias-53":"11","atar-y-desatar":"12","este-mismo-jesus":"E4","teologia-de-la-gloria":"E3","el-paraclito-eterno":"E2","no-juzgueis":"E17","teologia-de-la-cruz":"E15"}
def cred(h):
    h=h.replace("© 2026 Alejandro Sirit","© 2026 Dr. (h. c.) Alejandro Sirit")
    return re.sub(r'\s*Utilizado con permiso\.?','',h)
import zipfile,os
def prep(f):
    o=f"/tmp/prep_{os.path.basename(f)}"; zi=zipfile.ZipFile(f); zo=zipfile.ZipFile(o,"w")
    for it in zi.infolist():
        b=zi.read(it.filename)
        if it.filename.endswith(".xhtml"):
            b=re.sub(r'<em class="(vers|voz)">(.*?)</em>',r'<span class="\1">\2</span>',b.decode(),flags=re.S).encode()
        zo.writestr(it,b)
    zo.close(); return o
def html(f,pref):
    f=prep(f)
    h=subprocess.run([P,f,"-f","epub","-t","html5","--id-prefix",pref],capture_output=True,text=True,check=True).stdout
    from bs4 import BeautifulSoup
    so=BeautifulSoup(h,"html.parser")
    for sp in so.find_all("span"):
        if not (sp.get("class") and sp["class"][0] in ("vers","voz")): sp.unwrap()
        else: sp.attrs={"class":sp["class"][0]}
    h=str(so)
    h=re.sub(r'</?div(?! class="footnotes| role)[^>]*>','',h)
    h=re.sub(r'<svg.*?</svg>','',h,flags=re.S); h=re.sub(r'<p>\s*(<img[^>]*>)?\s*</p>','',h)
    h=re.sub(r'<nav.*?</nav>','',h,flags=re.S); h=re.sub(r'(id="|href="#)'+pref+r'[\w.-]*?\.xhtml#',r'\1'+pref,h)
    h=re.sub(r'<h1[^>]*>.*?</h1>','',h,count=1,flags=re.S)
    if "/workspace" in h: sys.exit("ABORT "+f)
    return cred(h.strip())
def texto(f):
    t=subprocess.run([P,f,"-f","epub","-t","plain","--wrap=none"],capture_output=True,text=True,check=True).stdout
    t=cred(re.sub(r'\[\d+\]','',t)); return [p.strip() for p in t.split("\n\n") if p.strip()]
for s,c in C.items():
    p=f"{R}/src/lib/libros/v2/{s}.ts"; src=open(p).read()
    m=re.search(r'const obra: ObraV2 = (.*);\nexport default',src,re.S); d=json.loads(m.group(1))
    d["html"]=html(f"{E}/{c}.epub","o-"); d["guiaHtml"]=html(f"{E}/{c}g.epub","g-"); d["texto"]=texto(f"{E}/{c}.epub")
    shutil.copy(f"{E}/{c}.epub",PUB+d["descargas"]["obra_epub"]); shutil.copy(f"{E}/{c}g.epub",PUB+d["descargas"]["guia_epub"])
    open(p,"w").write(src[:m.start(1)]+json.dumps(d,ensure_ascii=False)+src[m.end(1):])
    print(s,d["html"].count('class="vers"'),d["html"].count('class="voz"'),d["guiaHtml"].count('class="vers"'),d["guiaHtml"].count('class="voz"'),d["html"].count("Dr. (h. c.)"))
