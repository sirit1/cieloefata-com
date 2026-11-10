"""guiaHtml para ObraV2 con la misma receta de scripts/v2/regen_formato.py."""
import re,subprocess,sys,zipfile,os
P="/home/box/.local/lib/python3.13/site-packages/pypandoc/files/pandoc"
def cred(h):
    h=h.replace("© 2026 Alejandro Sirit","© 2026 Dr. (h. c.) Alejandro Sirit")
    return re.sub(r'\s*Utilizado con permiso\.?','',h)
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
