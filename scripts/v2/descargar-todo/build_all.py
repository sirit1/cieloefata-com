"""Construye los «Descargar todo» (obra + guía) de cada tratado/estudio v2 con guía.
Uso: build_all.py <repo> [slug ...]. Originales guardados en _combinados/orig/<slug>/ (se toman de allí si ya existen)."""
import os,sys,shutil,subprocess,json,re
sys.path.insert(0,os.path.dirname(__file__))
from combine import combine
from epub2pdf import epub2pdf
import pymupdf
B='/workspace/tratados/_combinados'; ORIG=B+'/orig'
EC=['/home/box/jre17/bin/java','-jar','/workspace/epubcheck-run/epubcheck-5.2.1/epubcheck.jar']
STAMP='2026-11-10T11:00:00Z'
def fix_outline(pdf,guide_page):
    d=pymupdf.open(pdf); toc=d.get_toc(); new=[]; seen=False
    for lvl,t,p in toc:
        if p>=guide_page:
            if not seen: new.append([1,'Guía de estudio',guide_page]); seen=True
            new.append([lvl+1,t,p])
        else: new.append([lvl,t,p])
    prev=0
    for r in new:
        r[0]=min(r[0],prev+1); prev=r[0]
    d.set_toc(new); tmp=pdf+'.tmp'; d.save(tmp,garbage=3,deflate=True); d.close(); os.replace(tmp,pdf)
def txt(pdf,a=None,b=None):
    d=pymupdf.open(pdf); r=range(a or 0,b if b is not None else len(d))
    return [l.strip() for i in r for l in d[i].get_text().splitlines() if l.strip() and not l.strip().isdigit()]
def build(repo,slug,obra_epub=None,guia_epub=None,guia_pdf=None,title=None):
    pub=f'{repo}/public/tratados-v2/{slug}'; o=f'{ORIG}/{slug}'; os.makedirs(o,exist_ok=True)
    for f in (f'{slug}.epub',f'{slug}.pdf'):
        if not os.path.exists(f'{o}/{f}') and os.path.exists(f'{pub}/{f}'): shutil.copy(f'{pub}/{f}',f'{o}/{f}')
    oe=obra_epub or f'{o}/{slug}.epub'; ge=guia_epub or f'{pub}/{slug}-guia.epub'; gp=guia_pdf or f'{pub}/{slug}-guia.pdf'
    out_e=f'{pub}/{slug}.epub'; out_p=f'{pub}/{slug}.pdf'
    n=combine(oe,ge,out_e,STAMP)
    r=subprocess.run(EC+[out_e],capture_output=True,text=True); ok='0 fatals / 0 errors' in r.stdout+r.stderr
    title=title or re.search(r'<dc:title[^>]*>([^<]+)',subprocess.run(['unzip','-p',out_e,'EPUB/content.opf'],capture_output=True,text=True).stdout).group(1)
    epub2pdf(out_e,out_p,title)
    # página de la portada de la guía = primera página cuya imagen ocupa la hoja después de la obra
    obra_pdf_ref=f'/tmp/ref_{slug}.pdf'; epub2pdf(oe,obra_pdf_ref,title)
    n_obra=pymupdf.open(obra_pdf_ref).page_count
    import zipfile,html as H
    g1=re.search(r'<h1[^>]*>(.*?)</h1>',zipfile.ZipFile(ge).read('EPUB/text/ch001.xhtml').decode(),re.S).group(1)
    g1=' '.join(H.unescape(re.sub(r'<[^>]+>','',g1)).split())
    gh=[p for l,t,p in pymupdf.open(out_p).get_toc() if ' '.join(t.split())==g1][-1:]
    assert gh, 'sin h1 de guía'
    gcov=gh[0]-1; dd=pymupdf.open(out_p); assert dd[gcov-1].get_images() and len(dd[gcov-1].get_text().strip())<5, 'portada de guía no encontrada'; dd.close()
    fix_outline(out_p,gcov)
    # verificación de texto: obra = obra sola; guía = guía sola sin su portada, portadilla e índice
    full=txt(out_p); a=txt(obra_pdf_ref); g_ref=txt(gp)
    import difflib
    sm=difflib.SequenceMatcher(None,a,full[:len(a)+200],autojunk=False)
    ins=[];bad=[]
    for op,i1,i2,j1,j2 in sm.get_opcodes():
        if op=='equal': continue
        if op=='insert': ins+=full[j1:j2]
        else: bad.append((op,a[i1:i2][:3],full[j1:j2][:3]))
    last=[op for op in sm.get_opcodes() if op[0]=='equal'][-1]
    gp_start=last[4]
    obra_ok=not bad and last[2]==len(a)
    gpart=full[gp_start:]
    res_ins=[l for op,i1,i2,j1,j2 in sm.get_opcodes() if op=='insert' and j1<last[3] for l in full[j1:j2]]
    # quitar del pdf de la guía suelta las páginas de portadilla e índice (las que no están en el combinado)
    gd=pymupdf.open(gp); start=0
    for i in range(gd.page_count):
        if 'Sesión 1' in gd[i].get_text() and i>0 and not gd[i].get_text().count('Sesión')>3: start=i; break
    g_body=txt(gp,start)
    guia_ok=gpart[-len(g_body):]==g_body if g_body else False
    sz=pymupdf.open(out_p)[0].rect
    res=dict(slug=slug,sesiones=n,epubcheck=ok,obra_txt=obra_ok,indice_lineas_nuevas=res_ins,guia_txt=guia_ok,paginas=pymupdf.open(out_p).page_count,
             obra_pag=n_obra,size=(round(sz.width),round(sz.height)),epub_kb=os.path.getsize(out_e)//1024,pdf_kb=os.path.getsize(out_p)//1024,
             pdf_orig_igual=(txt(f'{o}/{slug}.pdf')==a) if os.path.exists(f'{o}/{slug}.pdf') and not obra_epub else None)
    if not ok: res['ec']=[l for l in (r.stdout+r.stderr).splitlines() if 'ERROR' in l or 'FATAL' in l][:5]
    print(json.dumps(res,ensure_ascii=False),flush=True); return res
if __name__=='__main__':
    repo=sys.argv[1]; slugs=sys.argv[2:]
    for s in slugs: build(repo,s)
