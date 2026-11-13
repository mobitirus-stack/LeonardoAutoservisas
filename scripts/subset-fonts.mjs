// Self-hosted šriftų subset'ai su lietuviškomis raidėmis -> public/fonts/
import subsetFont from 'subset-font';
import fs from 'node:fs';
const LAT = Array.from({ length: 0x7f - 0x20 }, (_, i) => String.fromCodePoint(0x20 + i)).join('') + ' ©®°·×«»éèàäöüÉÄÖÜ–—‘’‚“”„•…€№™✦★';
const LT = 'ąčęėįšųūžĄČĘĖĮŠŲŪŽ';
const jobs = [
  ['fonts-src/Inter.ttf', 'public/fonts/inter.woff2', { wght: { min: 400, max: 700 }, opsz: 14 }],
  ['fonts-src/Fraunces.ttf', 'public/fonts/fraunces.woff2', { wght: { min: 500, max: 700 }, opsz: 72, SOFT: 0, WONK: 0 }],
  ['fonts-src/GrenzeGotisch.ttf', 'public/fonts/grenze-gotisch.woff2', { wght: 600 }],
];
fs.mkdirSync('public/fonts', { recursive: true });
for (const [src, out, axes] of jobs) {
  const buf = await subsetFont(fs.readFileSync(src), LAT + LT, { targetFormat: 'woff2', variationAxes: axes });
  fs.writeFileSync(out, buf); console.log(out, buf.length);
}
