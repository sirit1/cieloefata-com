"""EPUB combinado: obra (tal cual, con su portada) + «Guía de estudio» al final.
La guía entra como text/cover-guia.xhtml (su portada, sin retocar) + text/guia.xhtml (su ch001, ids con prefijo g-).
Nav y NCX: entrada «Guía de estudio» con las sesiones de la guía. No cambia texto de obra ni de guía."""
import re,os,sys,zipfile,shutil,tempfile,datetime,html
def ex(p):
    d=tempfile.mkdtemp(); zipfile.ZipFile(p).extractall(d); return d
def rd(p): return open(p,encoding='utf8').read()
def wr(p,s): open(p,'w',encoding='utf8').write(s)
def combine(obra,guia,out,stamp=None):
    A=ex(obra); G=ex(guia); E=A+'/EPUB'; GE=G+'/EPUB'
    assert os.path.exists(E+'/content.opf') and os.path.exists(GE+'/content.opf')
    gopf=rd(GE+'/content.opf')
    # portada de la guía
    gcid=re.search(r'<item [^>]*properties="cover-image"[^>]*>',gopf).group(0)
    gchref=re.search(r'href="([^"]+)"',gcid).group(1)
    ext=os.path.splitext(gchref)[1]; gcname='guia-portada'+ext
    shutil.copy(GE+'/'+gchref,E+'/media/'+gcname)
    w,h=1600,2560
    try:
        from PIL import Image; w,h=Image.open(E+'/media/'+gcname).size
    except Exception: pass
    # css de la guía: si difiere, hoja propia
    acss=rd(E+'/styles/stylesheet1.css'); gcss=rd(GE+'/styles/stylesheet1.css')
    gcssname='stylesheet1.css'
    if acss.strip()!=gcss.strip():
        gcssname='stylesheet-guia.css'; wr(E+'/styles/'+gcssname,gcss)
    # texto de la guía con ids prefijados
    gch=rd(GE+'/text/ch001.xhtml')
    ids=set(re.findall(r'\sid="([^"]+)"',gch))
    gch=re.sub(r'(\sid=")([^"]+)"',lambda m:m.group(1)+'g-'+m.group(2)+'"',gch)
    gch=re.sub(r'href="#([^"]+)"',lambda m:'href="#'+('g-'+m.group(1) if m.group(1) in ids else m.group(1))+'"',gch)
    gch=re.sub(r'href="(?:\.\./text/|)ch001\.xhtml#([^"]+)"',lambda m:'href="#g-'+m.group(1)+'"',gch)
    gch=gch.replace('href="../styles/stylesheet1.css"','href="../styles/'+gcssname+'"')
    gch=re.sub(r'<title>[^<]*</title>','<title>Guía de estudio</title>',gch,1)
    assert 'src="../media/' not in gch, 'la guía trae imágenes internas'
    wr(E+'/text/guia.xhtml',gch)
    lang=re.search(r'xml:lang="([^"]+)"',gch).group(1)
    wr(E+'/text/cover-guia.xhtml',f'''<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" lang="{lang}" xml:lang="{lang}">
<head>
  <meta charset="utf-8" />
  <title>Guía de estudio</title>
  <link rel="stylesheet" type="text/css" href="../styles/{gcssname}" />
</head>
<body id="cover-guia">
<div id="cover-image-guia">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="100%" height="100%" viewBox="0 0 {w} {h}" preserveAspectRatio="xMidYMid">
<image width="{w}" height="{h}" xlink:href="../media/{gcname}" />
</svg>
</div>
</body>
</html>
''')
    # OPF
    opf=rd(E+'/content.opf')
    assert 'guia.xhtml' not in opf
    mt='image/jpeg' if ext.lower() in ('.jpg','.jpeg') else 'image/png'
    items=(f'    <item id="guia_portada_xhtml" href="text/cover-guia.xhtml" media-type="application/xhtml+xml" properties="svg" />\n'
           f'    <item id="guia_xhtml" href="text/guia.xhtml" media-type="application/xhtml+xml" />\n'
           f'    <item id="guia_portada_img" href="media/{gcname}" media-type="{mt}" />\n')
    if gcssname!='stylesheet1.css': items+=f'    <item id="stylesheet_guia" href="styles/{gcssname}" media-type="text/css" />\n'
    opf=opf.replace('  </manifest>',items+'  </manifest>',1)
    if '<itemref idref="nav"' not in opf:  # índice visible como en las demás obras v2
        opf=re.sub(r'(<itemref idref="title_page_xhtml"[^>]*/>)',r'\1\n    <itemref idref="nav" />',opf,1)
    opf=opf.replace('  </spine>','    <itemref idref="guia_portada_xhtml" />\n    <itemref idref="guia_xhtml" />\n  </spine>',1)
    stamp=stamp or datetime.datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%SZ')
    opf=re.sub(r'<meta property="dcterms:modified">[^<]*</meta>',f'<meta property="dcterms:modified">{stamp}</meta>',opf)
    wr(E+'/content.opf',opf)
    # NAV
    gnav=rd(GE+'/nav.xhtml')
    gtoc=re.search(r'<nav epub:type="toc"[^>]*>(.*?)</nav>',gnav,re.S).group(1)
    inner=re.search(r'<ol class="toc"><li[^>]*><a href="[^"]*">[^<]*</a>(<ol class="toc">.*</ol>)</li></ol>\s*$',gtoc,re.S)
    kids=inner.group(1) if inner else ''
    kids=re.sub(r'href="text/ch001\.xhtml#([^"]+)"',r'href="text/guia.xhtml#g-\1"',kids)
    kids=kids.replace('href="text/ch001.xhtml"','href="text/guia.xhtml"')
    kids=re.sub(r'id="toc-li-(\d+)"',r'id="toc-g-li-\1"',kids)
    nav=rd(E+'/nav.xhtml')
    m=re.search(r'(<nav epub:type="toc"[^>]*>.*?)(</ol>\s*</nav>)',nav,re.S)
    li=f'<li id="toc-g-li-0"><a href="text/cover-guia.xhtml">Guía de estudio</a>{kids}</li>'
    nav=nav[:m.end(1)]+li+nav[m.end(1):]
    wr(E+'/nav.xhtml',nav)
    # NCX
    ncx=rd(E+'/toc.ncx'); gncx=rd(GE+'/toc.ncx')
    gpts=re.findall(r'<navPoint id="[^"]+">\s*<navLabel>\s*<text>([^<]*)</text>\s*</navLabel>\s*<content src="text/ch001\.xhtml#([^"]+)" />',gncx)
    sub=''.join(f'\n      <navPoint id="navPoint-g{i}">\n        <navLabel>\n          <text>{t}</text>\n        </navLabel>\n        <content src="text/guia.xhtml#g-{a}" />\n      </navPoint>' for i,(t,a) in enumerate(gpts,1))
    np=f'    <navPoint id="navPoint-g0">\n      <navLabel>\n        <text>Guía de estudio</text>\n      </navLabel>\n      <content src="text/cover-guia.xhtml" />{sub}\n    </navPoint>\n  '
    ncx=ncx.replace('</navMap>',np+'</navMap>',1)
    ncx=re.sub(r'<meta name="dtb:depth" content="1" />','<meta name="dtb:depth" content="2" />',ncx)
    wr(E+'/toc.ncx',ncx)
    if os.path.exists(out): os.remove(out)
    with zipfile.ZipFile(out,'w') as z:
        z.write(A+'/mimetype','mimetype',compress_type=zipfile.ZIP_STORED)
        for r,ds,fs in os.walk(A):
            ds.sort()
            for f in sorted(fs):
                p=os.path.join(r,f);a=os.path.relpath(p,A)
                if a!='mimetype': z.write(p,a,compress_type=zipfile.ZIP_DEFLATED)
    shutil.rmtree(A); shutil.rmtree(G)
    return len(gpts)
if __name__=='__main__': print(combine(*sys.argv[1:4]))
