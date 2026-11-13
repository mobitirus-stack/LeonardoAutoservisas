// OG paveikslėliai build metu (sharp + šriftų kontūrai): kreminis „popierius“, dvigubas rėmelis, emblema, Fraunces antraštė.
import type { APIRoute } from 'astro';
import sharp from 'sharp';
import path from 'node:path';
import { site } from '../../config/site';
import { services } from '../../data/services';
// @ts-ignore – JS modulis
import { textPath } from '../../../scripts/textpath.mjs';

const root = process.cwd();
const F = (f: string) => path.join(root, 'fonts-src', f);
const FR = F('Fraunces.ttf'), IN = F('Inter.ttf'), GO = F('GrenzeGotisch.ttf');

const entries = [
  { slug: 'pagrindinis', title: 'Autoservisas Pašilaičiuose, Vilniuje', sub: 'Tepalų keitimas · Stabdžių remontas' },
  { slug: 'paslaugos', title: 'Automobilių remonto paslaugos', sub: 'Pašilaičiai, Vilnius' },
  { slug: 'kontaktai', title: 'Kontaktai ir darbo laikas', sub: site.address.full },
  ...services.map((s) => ({ slug: s.slug, title: s.h1, sub: 'Pašilaičiai, Vilnius' })),
];

export function getStaticPaths() { return entries.map((e) => ({ params: { slug: e.slug }, props: e })); }

function wrap(text: string, size: number, maxW: number) {
  const words = text.split(' '); const lines: string[] = []; let cur = '';
  for (const w of words) {
    const t = cur ? cur + ' ' + w : w;
    if (textPath(FR, t, size, 0, 0, { variation: { wght: 600, opsz: 72 } }).width > maxW && cur) { lines.push(cur); cur = w; } else cur = t;
  }
  if (cur) lines.push(cur);
  return lines;
}

export const GET: APIRoute = async ({ props }) => {
  const { title, sub } = props as { title: string; sub: string };
  const X = 470, MAXW = 1200 - X - 70;
  let size = 66; let lines = wrap(title, size, MAXW);
  while (lines.length > 3 && size > 44) { size -= 4; lines = wrap(title, size, MAXW); }
  const lh = size * 1.12;
  const blockH = 70 + lines.length * lh + 120;
  let y = Math.round((630 - blockH) / 2) + 40;
  const brand = textPath(GO, 'Leonardo', 54, X, y, { variation: { wght: 600 }, fill: '#893842' });
  const brandSub = textPath(IN, 'AUTOSERVISAS', 15, X + brand.width + 14, y - 4, { variation: { wght: 600 }, fill: '#5E222A', letterSpacing: 4 });
  y += 30 + size;
  const titleSvg = lines.map((l, i) => textPath(FR, l, size, X, y + i * lh, { variation: { wght: 600, opsz: 72 }, fill: '#1F1A1B' }).svg).join('');
  y += (lines.length - 1) * lh + 56;
  const subSvg = textPath(IN, sub, 26, X, y, { variation: { wght: 500 }, fill: '#5F5557' }).svg;
  y += 50;
  const phone = textPath(IN, `${site.phone}  ·  ${site.address.street}`, 26, X, y, { variation: { wght: 650 }, fill: '#893842' }).svg;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
    <defs><filter id="n"><feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="3" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 .35 0 0 0 0 .2 0 0 0 0 .18 0 0 0 .06 0"/></filter></defs>
    <rect width="1200" height="630" fill="#FAF5F0"/><rect width="1200" height="630" filter="url(#n)"/>
    <rect x="22" y="22" width="1156" height="586" rx="18" fill="none" stroke="#893842" stroke-width="2"/>
    <rect x="32" y="32" width="1136" height="566" rx="12" fill="none" stroke="#893842" stroke-opacity=".35" stroke-width="1"/>
    <line x1="${X}" y1="${Math.round((630 - blockH) / 2) + 62}" x2="${X + 70}" y2="${Math.round((630 - blockH) / 2) + 62}" stroke="#A55D67" stroke-width="2"/>
    ${brand.svg}${brandSub.svg}${titleSvg}${subSvg}${phone}
  </svg>`;
  const logo = await sharp(path.join(root, 'brand/leonardo-logo.png')).resize({ width: 360 }).toBuffer();
  const meta = await sharp(logo).metadata();
  const buf = await sharp(Buffer.from(svg)).composite([{ input: logo, left: 70, top: Math.round((630 - (meta.height || 324)) / 2) }]).jpeg({ quality: 84, mozjpeg: true }).toBuffer();
  return new Response(new Uint8Array(buf), { headers: { 'Content-Type': 'image/jpeg' } });
};
