"""Corrige el EPUB del tratado 15: notas reales en «Notas» (en lugar de NOTAS_AQUI) y reglas .vers/.voz."""
import re,os,zipfile,shutil,sys
SRC='/workspace/kindle-update/El_yugo_desigual_en_esta_era.epub'
OUT='/workspace/tratados/_combinados/15 - El yugo desigual en esta era.epub'
w='/tmp/fix15'; shutil.rmtree(w,ignore_errors=True); zipfile.ZipFile(SRC).extractall(w)
ch=w+'/EPUB/text/ch001.xhtml'; s=open(ch).read()
fn=re.search(r'<section id="footnotes"[^>]*>\s*<hr />(.*?)</section>\n',s,re.S)
s=s.replace(fn.group(0),'')
assert s.count('<p>NOTAS_AQUI</p>')==1
s=s.replace('<p>NOTAS_AQUI</p>',fn.group(1).strip())
assert 'NOTAS_AQUI' not in s and s.count('epub:type="footnote"')==6
open(ch,'w').write(s)
css=w+'/EPUB/styles/stylesheet1.css'; c=open(css).read()
if '.vers{' not in c: c+='\n.vers{font-style:italic;color:#2e6bd9}\n.voz{font-style:italic;color:#cf3a3a}\n'
open(css,'w').write(c)
if os.path.exists(OUT): os.remove(OUT)
with zipfile.ZipFile(OUT,'w') as z:
    z.write(w+'/mimetype','mimetype',compress_type=zipfile.ZIP_STORED)
    for r,_,fs in sorted(os.walk(w)):
        for f in sorted(fs):
            p=os.path.join(r,f);a=os.path.relpath(p,w)
            if a!='mimetype': z.write(p,a,compress_type=zipfile.ZIP_DEFLATED)
print(OUT)
