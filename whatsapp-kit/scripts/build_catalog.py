import os, sys, importlib
sys.path.insert(0, os.path.dirname(__file__))
import imgproc, catalog_specs
importlib.reload(catalog_specs)

OUT = sys.argv[1]
os.makedirs(OUT, exist_ok=True)
for slug, shots in catalog_specs.SPECS.items():
    for i, (photo, cx, cy, w, rot) in enumerate(shots, 1):
        out, scale, src = imgproc.make(photo, (1080, 1080), cx, cy, w, rot)
        fn = f'{OUT}/{slug}-{i}.jpg'
        out.save(fn, quality=90, optimize=True, progressive=True)
        print(f'{fn.split("/")[-1]:42s} from {photo} crop {src} upscale x{scale:.2f}')
