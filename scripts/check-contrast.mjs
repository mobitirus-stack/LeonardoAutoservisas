// WCAG AA kontrasto patikra visoms teksto/fono poroms (tokens.css reikšmės).
import { reporter } from './lib-dist.mjs';
const { ok, done } = reporter();
const lum = (h) => { const c = h.replace('#', '').match(/\w\w/g).map((x) => parseInt(x, 16) / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4)); return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]; };
const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
const pairs = [
  ['tekstas / kremas', '#1F1A1B', '#FAF5F0', 4.5], ['antrinis / kremas', '#5F5557', '#FAF5F0', 4.5], ['antrinis / kremas-2', '#5F5557', '#F4ECE4', 4.5],
  ['antrinis / balta', '#5F5557', '#FFFFFF', 4.5], ['bordo / kremas', '#893842', '#FAF5F0', 4.5], ['bordo / balta', '#893842', '#FFFFFF', 4.5],
  ['bordo / rožinis fonas', '#893842', '#F3E4E3', 4.5], ['balta / bordo (mygtukas)', '#FFFFFF', '#893842', 4.5], ['balta / bordo-deep', '#FFFFFF', '#5E222A', 4.5],
  ['kremas / bordo-deep', '#FAF5F0', '#5E222A', 4.5], ['on-dark-muted / bordo-deep', '#E5D3D1', '#5E222A', 4.5], ['kremas / footer', '#FAF5F0', '#3B1419', 4.5],
  ['on-dark-muted / footer', '#E5D3D1', '#3B1419', 4.5], ['bordo-deep / kremas (cream mygtukas)', '#5E222A', '#FAF5F0', 4.5],
  ['hero H1 kremas / tamsiausia gradiento vieta', '#FAF5F0', '#5A2A31', 4.5], ['hero accent / gradientas', '#F1D4D2', '#5A2A31', 4.5], ['hero lead / gradientas', '#E5D3D1', '#5A2A31', 4.5],
  ['rožė (tik dekoras, ≥3:1 UI)', '#A55D67', '#FAF5F0', 3],
];
for (const [n, f, b, min] of pairs) { const r = ratio(f, b); console.log(`${r >= min ? 'OK  ' : 'FAIL'} ${n}: ${f} ant ${b} = ${r.toFixed(2)}:1 (min ${min})`); ok(r >= min, n); }
done('check-contrast');
