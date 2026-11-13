// Sugeneruoja paveikslėlius ir ikonas iš brand/ ir hero-source.jpg -> public/
// Paleidimas: npm run assets
import sharp from 'sharp';
import fs from 'node:fs';
import { textPath } from './textpath.mjs';

const OUT = 'public/';
const IMG = OUT + 'img/';
fs.mkdirSync(IMG, { recursive: true });
const C = { burgundy: '#893842', deep: '#5E222A', cream: '#FAF5F0' };
const GOTH = 'fonts-src/GrenzeGotisch.ttf';

// ---------- HERO ----------
// Šaltinis 2560x3840 (portretinis). Desktop – horizontalus kropas, mobile – vertikalus (art direction).
async function warm(buf) {
  const { width, height } = await sharp(buf).metadata();
  const overlay = await sharp({ create: { width, height, channels: 4, background: { r: 94, g: 34, b: 42, alpha: 0.32 } } }).png().toBuffer();
  return sharp(buf).modulate({ saturation: 0.85 }).composite([{ input: overlay, blend: 'soft-light' }]).toBuffer();
}
if (fs.existsSync('hero-source.jpg')) {
  const desk = await warm(await sharp('hero-source.jpg').extract({ left: 0, top: 1150, width: 2560, height: 1440 }).toBuffer());
  for (const w of [640, 960, 1280, 1920, 2560]) {
    const r = sharp(desk).resize(w);
    await r.clone().avif({ quality: 48, effort: 6 }).toFile(`${IMG}hero-${w}.avif`);
    await r.clone().webp({ quality: 70 }).toFile(`${IMG}hero-${w}.webp`);
    await r.clone().jpeg({ quality: 74, mozjpeg: true }).toFile(`${IMG}hero-${w}.jpg`);
  }
  const mob = await warm(await sharp('hero-source.jpg').extract({ left: 380, top: 700, width: 1800, height: 2560 }).toBuffer());
  for (const w of [480, 720, 1080]) {
    const r = sharp(mob).resize(w);
    await r.clone().avif({ quality: 48, effort: 6 }).toFile(`${IMG}hero-m-${w}.avif`);
    await r.clone().webp({ quality: 70 }).toFile(`${IMG}hero-m-${w}.webp`);
    await r.clone().jpeg({ quality: 74, mozjpeg: true }).toFile(`${IMG}hero-m-${w}.jpg`);
  }
}

// ---------- LOGO / EMBLEMA ----------
const EM = 'brand/leonardo-emblema.png';   // 809x492
const LOGO = 'brand/leonardo-logo.png';    // 868x780
for (const h of [88, 176]) {               // header 44px @1x/@2x
  const r = sharp(EM).resize({ height: h });
  await r.clone().png({ compressionLevel: 9, palette: true }).toFile(`${IMG}emblema-${h}.png`);
}
for (const w of [400, 809]) {
  const r = sharp(EM).resize({ width: w });
  await r.clone().png({ compressionLevel: 9, palette: true }).toFile(`${IMG}emblema-${w}w.png`);
  await r.clone().webp({ quality: 82 }).toFile(`${IMG}emblema-${w}w.webp`);
}
// Emblemos silueto kaukė (vandens ženklams per CSS mask-image)
await sharp(EM).resize({ width: 600 }).extractChannel('alpha').toColourspace('b-w')
  .joinChannel(await sharp(EM).resize({ width: 600 }).extractChannel('alpha').toBuffer())
  .png({ compressionLevel: 9, palette: true }).toFile(`${IMG}emblema-mask.png`);
for (const w of [300, 600, 868]) {
  const r = sharp(LOGO).resize({ width: w });
  await r.clone().png({ compressionLevel: 9, palette: true }).toFile(`${IMG}leonardo-logo-${w}.png`);
  await r.clone().webp({ quality: 82 }).toFile(`${IMG}leonardo-logo-${w}.webp`);
}
await sharp(LOGO).png({ compressionLevel: 9, palette: true }).toFile(`${IMG}leonardo-logo.png`);

// ---------- FAVICON ----------
const L = textPath(GOTH, 'L', 54, 32, 50, { variation: { wght: 700 }, fill: C.cream, anchor: 'middle' });
const favSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="${C.burgundy}"/><rect x="4" y="4" width="56" height="56" rx="11" fill="none" stroke="${C.cream}" stroke-opacity=".35" stroke-width="1.5"/>${L.svg}</svg>`;
fs.writeFileSync(OUT + 'favicon.svg', favSvg);
const sizes = [16, 32, 48];
const pngs = []; for (const s of sizes) pngs.push(await sharp(Buffer.from(favSvg)).resize(s, s).png().toBuffer());
const head = Buffer.alloc(6 + 16 * sizes.length); head.writeUInt16LE(1, 2); head.writeUInt16LE(sizes.length, 4);
let off = head.length; pngs.forEach((b, i) => { const o = 6 + 16 * i; head[o] = sizes[i]; head[o + 1] = sizes[i]; head.writeUInt16LE(1, o + 4); head.writeUInt16LE(32, o + 6); head.writeUInt32LE(b.length, o + 8); head.writeUInt32LE(off, o + 12); off += b.length; });
fs.writeFileSync(OUT + 'favicon.ico', Buffer.concat([head, ...pngs]));

// Rožės ikonos (kreminis fonas)
const emMeta = await sharp(EM).metadata();
const side = emMeta.height;
const rose = await sharp(EM).extract({ left: Math.round((emMeta.width - side) / 2), top: 0, width: side, height: side }).toBuffer();
async function roseIcon(size, pad, radius, out) {
  const inner = Math.round(size * (1 - 2 * pad));
  let buf = await sharp({ create: { width: size, height: size, channels: 4, background: C.cream } })
    .composite([{ input: await sharp(rose).resize(inner, inner).toBuffer(), gravity: 'center' }]).png().toBuffer();
  if (radius) buf = await sharp(buf).composite([{ input: Buffer.from(`<svg width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${size * radius}" fill="#fff"/></svg>`), blend: 'dest-in' }]).png().toBuffer();
  await sharp(buf).png({ compressionLevel: 9, palette: true }).toFile(out);
}
await roseIcon(180, 0.06, 0, OUT + 'apple-touch-icon.png');
await roseIcon(192, 0.06, 0.2, OUT + 'icon-192.png');
await roseIcon(512, 0.06, 0.2, OUT + 'icon-512.png');
await roseIcon(512, 0.17, 0, OUT + 'icon-maskable-512.png');
console.log('assets ok');
