"""Foto de perfil padrão da equipe Alfa Inox: rosto em 640x640 + selo do "A" no canto.
Uso: python3 make_profile.py FOTO.jpg SAIDA.png [centro_y_do_rosto 0-1]
O selo fica dentro do círculo que o WhatsApp recorta."""
import sys
from pathlib import Path
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[2]
src, out = sys.argv[1], sys.argv[2]
face_y = float(sys.argv[3]) if len(sys.argv) > 3 else 0.47

im = Image.open(src).convert("RGB")
w, h = im.size
side = min(w, h)
top = int(min(max(face_y * h - side / 2, 0), h - side))
left = (w - side) // 2
im = im.crop((left, top, left + side, top + side)).resize((640, 640), Image.LANCZOS)

# Selo: círculo branco com o "A" da marca, dentro do recorte redondo do WhatsApp.
S, cx, cy = 132, 498, 498
badge = Image.new("RGBA", (S, S), (0, 0, 0, 0))
d = ImageDraw.Draw(badge)
d.ellipse((0, 0, S - 1, S - 1), fill=(255, 255, 255, 255))
d.ellipse((3, 3, S - 4, S - 4), outline=(15, 23, 42, 40), width=2)
mark = Image.open(ROOT / "public/brand/mark-512.png").convert("RGBA")
m = int(S * 0.62)
mark.thumbnail((m, m), Image.LANCZOS)
badge.alpha_composite(mark, ((S - mark.width) // 2, (S - mark.height) // 2 + 2))
shadow = Image.new("RGBA", (S + 16, S + 16), (0, 0, 0, 0))
ImageDraw.Draw(shadow).ellipse((8, 10, S + 8, S + 10), fill=(0, 0, 0, 70))
im = im.convert("RGBA")
im.alpha_composite(shadow, (cx - S // 2 - 8, cy - S // 2 - 8))
im.alpha_composite(badge, (cx - S // 2, cy - S // 2))
im.convert("RGB").save(out, quality=95)

# Prévia do recorte redondo, como aparece no WhatsApp.
prev = Image.new("RGBA", (640, 640), (245, 245, 245, 255))
mask = Image.new("L", (640, 640), 0)
ImageDraw.Draw(mask).ellipse((0, 0, 639, 639), fill=255)
prev.paste(im, (0, 0), mask)
prev.convert("RGB").save(str(Path(out).with_suffix("")) + "-previa-circulo.png")
print("ok", out)
