"""Shared helpers: load a real photo, straighten/crop, light exposure + white-balance correction."""
from PIL import Image, ImageOps, ImageFilter, ImageStat
import numpy as np

FOTOS = '/Users/danielmartins/Projects/Alfa-Inox/fotos/'


def load(name):
    im = Image.open(FOTOS + name + '.jpg')
    im = ImageOps.exif_transpose(im).convert('RGB')
    return im


def correct(im, wb=0.5, expo=True):
    """Gentle gray-world white balance (partial) + mild exposure toward a mid median. No look/filters."""
    a = np.asarray(im).astype(np.float32)
    # white balance on mid-tones only (ignore clipped / very dark pixels)
    lum = a.mean(axis=2)
    m = (lum > 40) & (lum < 230)
    means = a[m].mean(axis=0)
    g = means.mean()
    gains = 1 + wb * (g / means - 1)
    gains = np.clip(gains, 0.9, 1.1)
    a = a * gains
    if expo:
        lum = a.mean(axis=2)
        med = np.median(lum)
        target = 128.0
        # gamma so that median moves toward target, limited
        gm = np.log(target / 255) / np.log(max(med, 1) / 255)
        gm = float(np.clip(1 + 0.6 * (gm - 1), 0.82, 1.18))
        a = 255 * (np.clip(a, 0, 255) / 255) ** gm
        # light levels stretch (0.3% / 99.7%), partial
        lo, hi = np.percentile(a, [0.3, 99.7])
        lo = min(lo, 18)
        hi = max(hi, 238)
        a = (a - lo) * 255 / (hi - lo)
    return Image.fromarray(np.clip(a, 0, 255).astype(np.uint8))


def crop(im, cx, cy, w_frac, aspect, rot=0.0):
    """cx, cy = crop centre as fraction of the image; w_frac = crop width as fraction of image width;
    aspect = w/h of output. rot = degrees to straighten (positive = counter-clockwise)."""
    if rot:
        W, H = im.size
        im = im.rotate(rot, resample=Image.BICUBIC, expand=False)
        # crop away rotated borders
        import math
        r = math.radians(abs(rot))
        dx = int(H * math.sin(r)) + 2
        dy = int(W * math.sin(r)) + 2
        im = im.crop((dx, dy, W - dx, H - dy))
    W, H = im.size
    cw = W * w_frac
    ch = cw / aspect
    if ch > H:
        ch = H
        cw = ch * aspect
    x0 = min(max(cx * W - cw / 2, 0), W - cw)
    y0 = min(max(cy * H - ch / 2, 0), H - ch)
    return im.crop((round(x0), round(y0), round(x0 + cw), round(y0 + ch)))


def fit(im, w, h):
    scale = w / im.size[0]
    out = im.resize((w, h), Image.LANCZOS)
    if scale > 1.05:
        out = out.filter(ImageFilter.UnsharpMask(radius=1.2, percent=45, threshold=2))
    return out, scale


def make(name, size, cx=0.5, cy=0.5, w=1.0, rot=0.0, wb=0.5):
    W, H = size
    im = load(name)
    c = crop(im, cx, cy, w, W / H, rot)
    c = correct(c, wb=wb)
    out, scale = fit(c, W, H)
    return out, scale, c.size
