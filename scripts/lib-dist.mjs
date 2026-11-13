import fs from 'node:fs';
import path from 'node:path';
export const DIST = 'dist';
export function htmlFiles(dir = DIST) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...htmlFiles(p)); else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}
export const read = (f) => fs.readFileSync(f, 'utf8');
export const urlPath = (f) => '/' + path.relative(DIST, f).replace(/index\.html$/, '').replace(/\\/g, '/');
export const decode = (s) => s.replace(/&nbsp;| /g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
export const strip = (s) => decode(s.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
export function reporter() {
  let fail = 0;
  return { ok: (c, m) => { if (!c) { fail++; console.log('FAIL ' + m); } else if (process.env.VERBOSE) console.log('OK   ' + m); return c; }, done: (name) => { console.log(fail ? `${name}: ${fail} FAILED` : `${name}: OK`); if (fail) process.exit(1); } };
}
