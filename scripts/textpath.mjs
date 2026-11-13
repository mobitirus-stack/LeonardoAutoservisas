// Tekstas -> SVG path (be sistemos šriftų), naudojama favicon ir OG generavimui.
import * as fontkit from 'fontkit';
const cache = new Map();
export function textPath(fontFile, text, size, x, y, { variation, fill = '#000', anchor = 'start', letterSpacing = 0 } = {}) {
  const key = fontFile + JSON.stringify(variation || {});
  let font = cache.get(key);
  if (!font) { font = fontkit.openSync(fontFile); if (variation) font = font.getVariation(variation); cache.set(key, font); }
  const run = font.layout(text);
  const s = size / font.unitsPerEm;
  let width = 0; for (const p of run.positions) width += p.xAdvance * s + letterSpacing;
  let cx = anchor === 'middle' ? x - width / 2 : anchor === 'end' ? x - width : x;
  let d = '';
  run.glyphs.forEach((g, i) => {
    const p = run.positions[i];
    d += g.path.scale(s, -s).translate(cx + p.xOffset * s, y - p.yOffset * s).toSVG();
    cx += p.xAdvance * s + letterSpacing;
  });
  return { svg: `<path fill="${fill}" d="${d}"/>`, width };
}
