"""EPUB -> PDF con la misma tubería WeasyPrint de las v2 (/workspace/t2/pdf.py): 5.5x8.5 in, portada a sangre, folio abajo."""
import os,re,sys,zipfile,shutil,tempfile
import weasyprint
def epub2pdf(epub,out,title):
    d=tempfile.mkdtemp(); zipfile.ZipFile(epub).extractall(d)
    c=open(d+'/META-INF/container.xml').read();opf=re.search(r'full-path="([^"]+)"',c).group(1)
    base=os.path.dirname(os.path.join(d,opf));o=open(os.path.join(d,opf),encoding='utf8').read()
    man={m.group(1):m.group(2) for m in re.finditer(r'<item [^>]*id="([^"]+)"[^>]*href="([^"]+)"',o)}
    man.update({m.group(2):m.group(1) for m in re.finditer(r'<item [^>]*href="([^"]+)"[^>]*id="([^"]+)"',o)})
    spine=re.findall(r'<itemref [^>]*idref="([^"]+)"',o)
    parts=[]  # [(css_tuple,[bodies])] : cada tramo con su propia hoja de estilo
    for s in spine:
        h=man[s];p=os.path.join(base,h);t=open(p,encoding='utf8').read()
        css=tuple(os.path.normpath(os.path.join(os.path.dirname(p),l)) for l in re.findall(r'<link[^>]*href="([^"]+\.css)"',t))
        b=re.search(r'<body[^>]*>(.*)</body>',t,re.S).group(1)
        b=re.sub(r'(src|xlink:href)="(?!http|#|data:)([^"]+)"',lambda m:f'{m.group(1)}="file://{os.path.normpath(os.path.join(os.path.dirname(p),m.group(2)))}"',b)
        b=re.sub(r'href="[^"#]*\.xhtml(#[^"]*)"',r'href="\1"',b)
        cls='cover' if 'cover' in h else ''
        if parts and (parts[-1][0]==css): parts[-1][1].append(f'<div class="pg {cls}">{b}</div>')
        else: parts.append((css,[f'<div class="pg {cls}">{b}</div>']))
    extra='''@page{size:5.5in 8.5in;margin:0.7in 0.6in 0.75in;@bottom-center{content:counter(page);font-size:8pt;color:#777}}
@page cov{margin:0;@bottom-center{content:none}}
.pg{break-before:page} .pg:first-child{break-before:auto}
.cover{page:cov} .cover img,.cover svg{width:100%;height:100%;max-height:none;object-fit:contain;display:block;margin:0}
.cover *{margin:0;padding:0}
nav#landmarks,nav[epub\\:type=landmarks]{display:none}'''
    # nav.xhtml y portada comparten tramo con lo que sigue si la hoja es la misma; si no, cada tramo se compone aparte
    docs=[];npag=0
    for css,bodies in parts:
        links=''.join(f'<link rel="stylesheet" href="file://{c}"/>' for c in css)
        cont='' if npag==0 else f'@page:first{{counter-increment:page {npag+1}}}'
        html=f'<!DOCTYPE html><html lang="es"><head><meta charset="utf-8"/><title>{title}</title>{links}<style>{extra}{cont}</style></head><body>{"".join(bodies)}</body></html>'
        rd=weasyprint.HTML(string=html,base_url=base+'/').render(); docs.append(rd); npag+=len(rd.pages)
    if len(docs)==1: docs[0].write_pdf(out)
    else: docs[0].copy([p for d in docs for p in d.pages]).write_pdf(out)
    shutil.rmtree(d)
if __name__=='__main__': epub2pdf(sys.argv[1],sys.argv[2],sys.argv[3])
