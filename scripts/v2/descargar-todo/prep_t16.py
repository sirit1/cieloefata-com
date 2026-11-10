"""Prepara en el repo el tratado 16 (sin publicar): assets + src/lib/libros/v2/<slug>.ts + libros/<slug>.ts."""
import sys,os,json,re,shutil,subprocess
sys.path.insert(0,os.path.dirname(__file__))
from guia_html import html,cred,P
from build_all import build
from PIL import Image
R=sys.argv[1]; S='la-crianza-de-los-hijos-en-estos-tiempos-de-redes-sociales'; T='La crianza de los hijos en estos tiempos de redes sociales'
O='/workspace/tratados/_guias/out'; CV='/workspace/tratados/covers'; GC='/workspace/tratados/_guias/covers'
pub=f'{R}/public/tratados-v2/{S}'; os.makedirs(pub,exist_ok=True)
obra=f'{O}/16 - {T}.epub'
shutil.copy(f'{O}/16 - {T} - Guía v2.epub',f'{pub}/{S}-guia.epub'); shutil.copy(f'{O}/16 - {T} - Guía.pdf',f'{pub}/{S}-guia.pdf')
shutil.copy(f'{CV}/{S}_6x9_1800x2700.jpg',f'{pub}/portada.jpg')
shutil.copy(f'{CV}/{S}_web_1200x630.jpg',f'{pub}/og.jpg')
Image.open(f'{GC}/{S}-guia_kindle_1600x2560.jpg').convert('RGB').resize((600,960),Image.LANCZOS).save(f'{pub}/portada-guia.jpg',quality=82)
r=build(R,S,obra_epub=obra,title=T)
def texto(f):
    t=subprocess.run([P,f,"-f","epub","-t","plain","--wrap=none"],capture_output=True,text=True,check=True).stdout
    t=cred(re.sub(r'\[\d+\]','',t)); return [p.strip() for p in t.split("\n\n") if p.strip()]
tx=texto(obra)
while tx and (tx[0]=='[]' or tx[0]==T): tx.pop(0)  # portada e h1, como en el 15
d=dict(slug=S,titulo=T,html=html(obra,'o-'),guiaHtml=html(f'{pub}/{S}-guia.epub','g-'),texto=tx,
  portada=f'/tratados-v2/{S}/portada.jpg',portadaGuia=f'/tratados-v2/{S}/portada-guia.jpg',og=f'/tratados-v2/{S}/og.jpg',
  descargas={'obra_pdf':f'/tratados-v2/{S}/{S}.pdf','obra_epub':f'/tratados-v2/{S}/{S}.epub','guia_pdf':f'/tratados-v2/{S}/{S}-guia.pdf','guia_epub':f'/tratados-v2/{S}/{S}-guia.epub'})
open(f'{R}/src/lib/libros/v2/{S}.ts','w').write('// Generado desde el manuscrito con el pipeline de scripts/v2 (pandoc EPUB → HTML). No editar a mano.\nimport type { ObraV2 } from "./tipo";\nconst obra: ObraV2 = '+json.dumps(d,ensure_ascii=False)+';\nexport default obra;\n')
open(f'{R}/src/lib/libros/{S}.ts','w').write('export const parrafos: readonly string[] = [\n'+''.join('  '+json.dumps(p,ensure_ascii=False)+',\n' for p in tx)+'];\n')
print(len(tx), d['html'].count('class="vers"'), d['html'].count('class="voz"'), tx[:3])
