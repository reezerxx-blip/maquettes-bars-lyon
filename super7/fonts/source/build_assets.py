"""Génère la police pixel « Super7 Pixel » (dessin original, grille 5x7),
le monogramme S7, le favicon et l'image de partage.
Usage : python build_assets.py  (depuis ce dossier)
Police : dessin original, publiée sous SIL OFL 1.1 pour cette maquette."""
import os
from fontTools.fontBuilder import FontBuilder
from fontTools.pens.ttGlyphPen import TTGlyphPen
from PIL import Image, ImageDraw

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, "..", ".."))

G = {}
def g(ch, rows):
    G[ch] = rows

g("A", [".###.","#...#","#...#","#####","#...#","#...#","#...#"])
g("B", ["####.","#...#","#...#","####.","#...#","#...#","####."])
g("C", [".####","#....","#....","#....","#....","#....",".####"])
g("D", ["####.","#...#","#...#","#...#","#...#","#...#","####."])
g("E", ["#####","#....","#....","####.","#....","#....","#####"])
g("F", ["#####","#....","#....","####.","#....","#....","#...."])
g("G", [".####","#....","#....","#..##","#...#","#...#",".####"])
g("H", ["#...#","#...#","#...#","#####","#...#","#...#","#...#"])
g("I", ["#####","..#..","..#..","..#..","..#..","..#..","#####"])
g("J", ["..###","...#.","...#.","...#.","...#.","#..#.",".##.."])
g("K", ["#...#","#..#.","#.#..","##...","#.#..","#..#.","#...#"])
g("L", ["#....","#....","#....","#....","#....","#....","#####"])
g("M", ["#...#","##.##","#.#.#","#.#.#","#...#","#...#","#...#"])
g("N", ["#...#","##..#","##..#","#.#.#","#..##","#..##","#...#"])
g("O", [".###.","#...#","#...#","#...#","#...#","#...#",".###."])
g("P", ["####.","#...#","#...#","####.","#....","#....","#...."])
g("Q", [".###.","#...#","#...#","#...#","#.#.#","#..#.",".##.#"])
g("R", ["####.","#...#","#...#","####.","#.#..","#..#.","#...#"])
g("S", [".####","#....","#....",".###.","....#","....#","####."])
g("T", ["#####","..#..","..#..","..#..","..#..","..#..","..#.."])
g("U", ["#...#","#...#","#...#","#...#","#...#","#...#",".###."])
g("V", ["#...#","#...#","#...#","#...#","#...#",".#.#.","..#.."])
g("W", ["#...#","#...#","#...#","#.#.#","#.#.#","##.##","#...#"])
g("X", ["#...#","#...#",".#.#.","..#..",".#.#.","#...#","#...#"])
g("Y", ["#...#","#...#",".#.#.","..#..","..#..","..#..","..#.."])
g("Z", ["#####","....#","...#.","..#..",".#...","#....","#####"])
g("0", [".###.","#...#","#..##","#.#.#","##..#","#...#",".###."])
g("1", ["..#..",".##..","..#..","..#..","..#..","..#..",".###."])
g("2", [".###.","#...#","....#","...#.","..#..",".#...","#####"])
g("3", [".###.","#...#","....#","..##.","....#","#...#",".###."])
g("4", ["...#.","..##.",".#.#.","#..#.","#####","...#.","...#."])
g("5", ["#####","#....","####.","....#","....#","#...#",".###."])
g("6", ["..##.",".#...","#....","####.","#...#","#...#",".###."])
g("7", ["#####","....#","...#.","..#..",".#...",".#...",".#..."])
g("8", [".###.","#...#","#...#",".###.","#...#","#...#",".###."])
g("9", [".###.","#...#","#...#",".####","....#","...#.",".##.."])
g(".", [".....",".....",".....",".....",".....",".....","..#.."])
g(",", [".....",".....",".....",".....",".....","..#..",".#..."])
g(":", [".....",".....","..#..",".....","..#..",".....","....."])
g(";", [".....",".....","..#..",".....",".....","..#..",".#..."])
g("!", ["..#..","..#..","..#..","..#..","..#..",".....","..#.."])
g("?", [".###.","#...#","....#","...#.","..#..",".....","..#.."])
g("-", [".....",".....",".....",".###.",".....",".....","....."])
g("+", [".....","..#..","..#..","#####","..#..","..#..","....."])
g("/", ["....#","....#","...#.","..#..",".#...","#....","#...."])
g("&", [".##..","#..#.","#.#..",".#...","#.#.#","#..#.",".##.#"])
g("@", [".###.","#...#","#.###","#.#.#","#.###","#....",".####"])
g("(", ["...#.","..#..",".#...",".#...",".#...","..#..","...#."])
g(")", [".#...","..#..","...#.","...#.","...#.","..#..",".#..."])
g("#", [".#.#.","#####",".#.#.",".#.#.",".#.#.","#####",".#.#."])
g("'", ["..#..","..#..",".#...",".....",".....",".....","....."])
g('"', [".#.#.",".#.#.",".....",".....",".....",".....","....."])
g("°", [".##..","#..#.",".##..",".....",".....",".....","....."])
g("%", ["##..#","##..#","...#.","..#..",".#...","#..##","#..##"])
g("·", [".....",".....",".....","..#..",".....",".....","....."])
g("_", [".....",".....",".....",".....",".....",".....","#####"])
g("*", [".....","#.#.#",".###.","#####",".###.","#.#.#","....."])
g("«", [".....","...#.","..#..",".#...","..#..","...#.","....."])
g("»", [".....",".#...","..#..","...#.","..#..",".#...","....."])
g(" ", [".....",".....",".....",".....",".....",".....","....."])

# Marques d'accent : (rangées au dessus de la hauteur de capitale, rangées sous la ligne de base)
ACC = {
    "acute":  {7: "..#..", 8: "...#."},
    "grave":  {7: "..#..", 8: ".#..."},
    "circ":   {7: ".#.#.", 8: "..#.."},
    "diaer":  {7: ".#.#."},
    "cedil":  {-1: "..#..", -2: ".#..."},
}
ACCENTED = {
    "À": ("A", "grave"), "Â": ("A", "circ"), "Ä": ("A", "diaer"),
    "É": ("E", "acute"), "È": ("E", "grave"), "Ê": ("E", "circ"), "Ë": ("E", "diaer"),
    "Î": ("I", "circ"), "Ï": ("I", "diaer"), "Ô": ("O", "circ"), "Ö": ("O", "diaer"),
    "Ù": ("U", "grave"), "Û": ("U", "circ"), "Ü": ("U", "diaer"), "Ç": ("C", "cedil"),
}

def pixels(base, accent=None):
    """Liste (col, row) avec row 0 = ligne de base, row 6 = haut de capitale."""
    px = set()
    rows = G[base]
    for r, line in enumerate(rows):
        for c, ch in enumerate(line):
            if ch == "#":
                px.add((c, 6 - r))
    if accent:
        for row, line in ACC[accent].items():
            for c, ch in enumerate(line):
                if ch == "#":
                    px.add((c, row))
    return px

U = 100  # unités par pixel
ADV = 700

def glyph_from(px):
    pen = TTGlyphPen(None)
    # une bande par ligne, en fusionnant les segments horizontaux contigus
    rows = {}
    for c, r in px:
        rows.setdefault(r, []).append(c)
    for r, cols in rows.items():
        cols.sort()
        start = prev = cols[0]
        runs = []
        for c in cols[1:]:
            if c == prev + 1:
                prev = c
            else:
                runs.append((start, prev)); start = prev = c
        runs.append((start, prev))
        for a, b in runs:
            x0, x1 = a * U + 50, (b + 1) * U + 50
            y0, y1 = r * U, (r + 1) * U
            # léger recouvrement vertical pour éviter les coutures
            pen.moveTo((x0, y0)); pen.lineTo((x0, y1 + 1)); pen.lineTo((x1, y1 + 1)); pen.lineTo((x1, y0)); pen.closePath()
    return pen.glyph()

order = [".notdef"]
glyphs = {}
cmap = {}
metrics = {}
empty = TTGlyphPen(None).glyph()
glyphs[".notdef"] = glyph_from(pixels("O") ^ pixels("O") | {(0, 0), (4, 0), (0, 6), (4, 6)})
metrics[".notdef"] = (ADV, 0)

def add(ch, px):
    name = "uni%04X" % ord(ch)
    order.append(name)
    glyphs[name] = glyph_from(px) if px else empty
    adv = 400 if ch == " " else ADV
    metrics[name] = (adv, 0)
    cmap[ord(ch)] = name
    return name

for ch in G:
    add(ch, pixels(ch) if ch != " " else set())
for ch, (b, a) in ACCENTED.items():
    add(ch, pixels(b, a))
# apostrophe typographique
cmap[0x2019] = cmap[ord("'")]
# minuscules et minuscules accentuées -> capitales
for ch in list(G) + list(ACCENTED):
    lo = ch.lower()
    if lo != ch and ord(lo) not in cmap:
        cmap[ord(lo)] = cmap[ord(ch)]
cmap[0xA0] = cmap[ord(" ")]
cmap[0x202F] = cmap[ord(" ")]

fb = FontBuilder(1000, isTTF=True)
fb.setupGlyphOrder(order)
fb.setupCharacterMap(cmap)
fb.setupGlyf(glyphs)
fb.setupHorizontalMetrics({n: (metrics[n][0], 0) for n in order})
fb.setupHorizontalHeader(ascent=1000, descent=-250)
fb.setupNameTable({
    "familyName": "Super7 Pixel", "styleName": "Regular",
    "copyright": "Dessin original pour la maquette Super7 (non officielle), SIL OFL 1.1",
    "licenseDescription": "SIL Open Font License 1.1",
    "licenseInfoURL": "https://openfontlicense.org",
})
fb.setupOS2(sTypoAscender=1000, sTypoDescender=-250, usWinAscent=1000, usWinDescent=250, sxHeight=700, sCapHeight=700)
fb.setupPost()
fb.font.flavor = "woff2"
out = os.path.join(ROOT, "fonts", "super7-pixel.woff2")
fb.save(out)
print("police ->", out, os.path.getsize(out), "octets")

# ---------- Monogramme S7 (rond orange, S7 en pixels) ----------
def rects(word, cell, x0, y0, gap=1):
    out = []
    x = x0
    for ch in word:
        for r, line in enumerate(G[ch]):
            for c, v in enumerate(line):
                if v == "#":
                    out.append((x + c * cell, y0 + r * cell, cell, cell))
        x += (5 + gap) * cell
    return out

def logo_svg(bg="#FF5A14", fg="#1B0F0B", size=120):
    cell = 8
    w = (5 + 1 + 5) * cell
    h = 7 * cell
    cx = size / 2
    x0 = cx - w / 2 + 0
    y0 = size / 2 - h / 2
    rs = "".join(f'<rect x="{x:.0f}" y="{y:.0f}" width="{wd}" height="{ht}"/>' for x, y, wd, ht in rects("S7", cell, round(x0), round(y0)))
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {size} {size}" width="{size}" height="{size}">'
            f'<circle cx="{cx}" cy="{cx}" r="{cx}" fill="{bg}"/><g fill="{fg}" shape-rendering="crispEdges">{rs}</g></svg>')

with open(os.path.join(ROOT, "images", "logo-s7.svg"), "w", encoding="utf-8") as f:
    f.write(logo_svg())
with open(os.path.join(ROOT, "favicon.svg"), "w", encoding="utf-8") as f:
    f.write(logo_svg())
print("logo + favicon ok")

# ---------- Image de partage 1200x630 ----------
W, H = 1200, 630
im = Image.new("RGB", (W, H), (27, 15, 11))
d = ImageDraw.Draw(im)
# briques de verre rouges (bande droite)
bs = 90
for i in range(4):
    for j in range(7):
        x, y = 720 + i * bs, j * bs
        d.rectangle([x + 3, y + 3, x + bs - 4, y + bs - 4], fill=(140, 24, 22))
        d.rectangle([x + 16, y + 16, x + bs - 17, y + bs - 17], fill=(176, 36, 30))
        d.rectangle([x + 22, y + 22, x + 34, y + 25], fill=(214, 92, 70))
cell = 18
x = 60
for ch in "SUPER7":
    for r, line in enumerate(G[ch]):
        for c, v in enumerate(line):
            if v == "#":
                d.rectangle([x + c * cell, 150 + r * cell, x + c * cell + cell - 1, 150 + r * cell + cell - 1], fill=(255, 90, 20))
    x += 6 * cell
cell2 = 5
for ly, line_txt in ((340, "LIEU DE VIE ET CLUB"), (400, "LYON 7E")):
    x = 60
    for ch in line_txt:
        if ch in G:
            for r, line in enumerate(G[ch]):
                for c, v in enumerate(line):
                    if v == "#":
                        d.rectangle([x + c * cell2, ly + r * cell2, x + c * cell2 + cell2 - 1, ly + r * cell2 + cell2 - 1], fill=(222, 215, 204))
        x += 6 * cell2
im.save(os.path.join(ROOT, "images", "og.png"), optimize=True)
print("og ok")
