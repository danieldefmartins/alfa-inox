import os, sys
sys.path.insert(0, os.path.dirname(__file__))
from PIL import Image, ImageDraw, ImageFont
import imgproc

OUT = sys.argv[1]
os.makedirs(OUT + '/status', exist_ok=True)
LOGO = '/Users/danielmartins/Projects/Alfa-Inox/Logo/alfa-inox-logo-package/'
PETROL = (11, 122, 148)
CHAR = (46, 58, 64)
SF = '/System/Library/Fonts/SFNS.ttf'


def font(size, weight='Regular'):
    f = ImageFont.truetype(SF, size)
    f.set_variation_by_name(weight)
    return f


def logo(path, width):
    im = Image.open(LOGO + path).convert('RGBA')
    im = im.crop(im.getbbox())
    h = round(im.size[1] * width / im.size[0])
    return im.resize((width, h), Image.LANCZOS)


# 1. Profile photo: icon centred on white, sized to sit well inside the circular crop
prof = Image.new('RGB', (640, 640), 'white')
ic = logo('icon/alfa-inox-icon-color-transparent.png', 390)
prof.paste(ic, ((640 - ic.size[0]) // 2, (640 - ic.size[1]) // 2), ic)
prof.save(OUT + '/perfil-640.png')

# 2. Cover 1920x1080: three real jobs side by side, no text (the profile circle covers part of it in the app)
panels = [('1000092725', 0.5, 0.5), ('1000089338', 0.5, 0.5), ('1000090327', 0.5, 0.55)]
gut = 8
pw = (1920 - 2 * gut) // 3
cover = Image.new('RGB', (1920, 1080), 'white')
x = 0
for i, (ph, cx, cy) in enumerate(panels):
    w = pw if i < 2 else 1920 - x
    im = imgproc.load(ph)
    W, H = im.size
    asp = w / 1080
    wf = min(1.0, H * asp / W)
    c = imgproc.correct(imgproc.crop(im, cx, cy, wf, asp))
    c, _ = imgproc.fit(c, w, 1080)
    cover.paste(c, (x, 0))
    x += w + gut
cover.save(OUT + '/capa-1920x1080.jpg', quality=90, optimize=True)

# 3. Status posts 1080x1920
STATUS = [
    ('1000092725', 0.5, 0.5, 'Guarda-corpo de inox\nna escada de casa'),
    ('1000089655', 0.5, 0.45, 'Guarda-corpo de vidro\ncom inox'),
    ('1000090327', 0.5, 0.55, 'Corrimão de inox na\nentrada da residência'),
    ('1000089338', 0.5, 0.5, 'Vidro e inox na\nárea da cobertura'),
    ('1000089368', 0.5, 0.5, 'Corrimão de inox\npara piscina'),
    ('1000092715', 0.5, 0.45, 'Guarda-corpo com\ntravessas na escada'),
]
PH = 1240  # photo height; petrol band below
wl = logo('horizontal/alfa-inox-horizontal-white-transparent.png', 250)
for n, (ph, cx, cy, cap) in enumerate(STATUS, 1):
    im = imgproc.load(ph)
    W, H = im.size
    asp = 1080 / PH
    wf = min(1.0, H * asp / W)
    c = imgproc.correct(imgproc.crop(im, cx, cy, wf, asp))
    c, sc = imgproc.fit(c, 1080, PH)
    post = Image.new('RGB', (1080, 1920), PETROL)
    post.paste(c, (0, 0))
    d = ImageDraw.Draw(post)
    m = 84
    y = PH + 66
    post.paste(wl, (m, y), wl)
    y += wl.size[1] + 52
    d.multiline_text((m, y), cap, font=font(64, 'Semibold'), fill='white', spacing=14)
    y += 2 * 64 + 14 + 58
    d.text((m, y), 'Peça seu orçamento pelo WhatsApp', font=font(40, 'Medium'), fill='white')
    d.text((m, y + 56), '(31) 98777-0220', font=font(40, 'Regular'), fill=(205, 232, 238))
    post.save(f'{OUT}/status/status-{n:02d}.jpg', quality=90, optimize=True)
    print('status', n, ph, 'upscale', round(sc, 2))
