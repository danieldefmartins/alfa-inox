import sys, math
from PIL import Image, ImageDraw, ImageFilter, ImageChops
N=2160; C=N//2
cut=Image.open(sys.argv[1]).convert("RGBA"); top=float(sys.argv[3]) if len(sys.argv)>3 else 70
mark=Image.open(sys.argv[2]).convert("RGBA")
# background: deep graphite with a soft brand-teal light behind the head
bg=Image.new("RGB",(N,N),(20,27,31))
glow=Image.new("L",(N,N),0); ImageDraw.Draw(glow).ellipse((C-900,250,C+900,1950),fill=255)
glow=glow.filter(ImageFilter.GaussianBlur(320))
bg=Image.composite(Image.new("RGB",(N,N),(11,92,112)),bg,glow.point(lambda v:int(v*0.55)))
vig=Image.new("L",(N,N),0); ImageDraw.Draw(vig).ellipse((-500,-500,N+500,N+500),fill=255)
vig=vig.filter(ImageFilter.GaussianBlur(260))
bg=Image.composite(bg,Image.new("RGB",(N,N),(10,14,16)),vig)
img=bg.convert("RGBA")
# person: square crop, scaled to canvas
w,h=cut.size
sc=N*0.86/w; pw,ph=int(w*sc),int(h*sc)
p=cut.resize((pw,ph),Image.LANCZOS)
al=p.split()[3].filter(ImageFilter.MinFilter(5)).filter(ImageFilter.GaussianBlur(1.5)); p.putalpha(al)
sq=Image.new("RGBA",(N,N),(0,0,0,0)); sq.alpha_composite(p,((N-pw)//2,int(N*0.15-185*sc)))
# soft rim light: slightly brightened teal edge from the alpha
a=sq.split()[3]; edge=ImageChops.subtract(a,a.filter(ImageFilter.MinFilter(9))).filter(ImageFilter.GaussianBlur(6))
rim=Image.new("RGBA",(N,N),(127,202,219,0)); rim.putalpha(edge.point(lambda v:int(v*0.12)))
img.alpha_composite(sq); img.alpha_composite(rim)
# thin brand ring just inside WhatsApp's circle crop
ring=Image.new("RGBA",(N,N),(0,0,0,0)); R=C-16
ImageDraw.Draw(ring).ellipse((C-R,C-R,C+R,C+R),outline=(11,122,148,255),width=14)
img.alpha_composite(ring)
# badge at 4:30, sitting on the ring like a verified mark
S=360; ang=math.radians(45); d=R-S*0.42
bx,by=int(C+d*math.cos(ang)),int(C+d*math.sin(ang))
sh=Image.new("RGBA",(N,N),(0,0,0,0)); ImageDraw.Draw(sh).ellipse((bx-S//2,by-S//2+14,bx+S//2,by+S//2+14),fill=(0,0,0,120))
img.alpha_composite(sh.filter(ImageFilter.GaussianBlur(18)))
b=ImageDraw.Draw(img)
b.ellipse((bx-S//2,by-S//2,bx+S//2,by+S//2),fill=(255,255,255,255))
b.ellipse((bx-S//2+14,by-S//2+14,bx+S//2-14,by+S//2-14),outline=(11,122,148,255),width=10)
m=int(S*0.56); mk=mark.copy(); mk.thumbnail((m,m),Image.LANCZOS)
img.alpha_composite(mk,(bx-mk.width//2,by-mk.height//2+8))
out=img.convert("RGB").resize((1080,1080),Image.LANCZOS)
out.save(sys.argv[4] if len(sys.argv)>4 else "perfil.png")
mask=Image.new("L",(1080,1080),0); ImageDraw.Draw(mask).ellipse((0,0,1079,1079),fill=255)
pv=Image.new("RGB",(1080,1080),(255,255,255)); pv.paste(out,(0,0),mask); pv.resize((540,540),Image.LANCZOS).save("previa.png")
