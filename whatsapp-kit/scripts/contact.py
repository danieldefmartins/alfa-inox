import glob, os
from PIL import Image, ImageDraw, ImageFont
K='/Users/danielmartins/Projects/Alfa-Inox/whatsapp-kit'
def F(s,w='Regular'):
    f=ImageFont.truetype('/System/Library/Fonts/SFNS.ttf',s); f.set_variation_by_name(w); return f
W=2400; M=60; G=24
sections=[('Perfil e capa',[f'{K}/imagens/perfil-640.png',f'{K}/imagens/capa-1920x1080.jpg'],420),
          ('Status (1080×1920)',sorted(glob.glob(f'{K}/imagens/status/*.jpg')),640),
          ('Catálogo (1080×1080)',sorted(glob.glob(f'{K}/catalogo/imagens/*.jpg')),300)]
tiles=[]; y=M+90
layout=[]
for title,files,h in sections:
    layout.append(('T',title,(M,y))); y+=70
    x=M; rowh=0
    for f in files:
        im=Image.open(f).convert('RGB'); w=round(im.size[0]*h/im.size[1])
        if x+w>W-M: x=M; y+=rowh+G+34; rowh=0
        layout.append(('I',(f,im.resize((w,h),Image.LANCZOS)),(x,y))); x+=w+G; rowh=max(rowh,h)
    y+=rowh+34+60
img=Image.new('RGB',(W,y+M),(245,247,248)); d=ImageDraw.Draw(img)
d.text((M,M),'Alfa Inox — kit WhatsApp Business',font=F(48,'Semibold'),fill=(46,58,64))
for kind,v,(x,y) in layout:
    if kind=='T': d.text((x,y),v,font=F(34,'Semibold'),fill=(11,122,148))
    else:
        f,im=v; img.paste(im,(x,y)); d.text((x,y+im.size[1]+6),os.path.basename(f),font=F(18),fill=(90,100,105))
img.save(f'{K}/contact-sheet.png',optimize=True); print(img.size)
