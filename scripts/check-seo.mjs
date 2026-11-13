// SEO patikra po build: H1, title, description, canonical, og:image, img atributai, unikalumas, žodžių kiekis.
import { htmlFiles, read, urlPath, strip, decode, reporter } from './lib-dist.mjs';
const { ok, done } = reporter();
const titles = new Map(), descs = new Map();
const rows = [];
for (const f of htmlFiles()) {
  const h = read(f), p = urlPath(f), is404 = p.endsWith('404.html');
  const title = decode((h.match(/<title>(.*?)<\/title>/) || [])[1] || '');
  const desc = decode((h.match(/<meta name="description" content="([^"]*)"/) || [])[1] || '');
  const h1 = (h.match(/<h1[\s>]/g) || []).length;
  ok(h1 === 1, `${p}: H1 count ${h1}`);
  ok(title.length >= 30 && title.length <= 60, `${p}: title ${title.length} „${title}“`);
  ok(desc.length >= 120 && desc.length <= 160, `${p}: description ${desc.length}`);
  if (!is404) {
    ok(/<link rel="canonical" href="https?:\/\/[^"]+\/"/.test(h), `${p}: canonical`);
    ok(!titles.has(title), `${p}: duplicate title with ${titles.get(title)}`); titles.set(title, p);
    ok(!descs.has(desc), `${p}: duplicate description with ${descs.get(desc)}`); descs.set(desc, p);
  }
  ok(/<meta property="og:image" content="https?:\/\/[^"]+"/.test(h), `${p}: og:image`);
  for (const img of h.match(/<img [^>]*>/g) || []) ok(/ alt="/.test(img) && / width="/.test(img) && / height="/.test(img), `${p}: img attrs ${img.slice(0, 80)}`);
  // antraščių hierarchija be šuolių
  const levels = [...h.matchAll(/<h([1-6])[\s>]/g)].map((m) => +m[1]);
  for (let i = 1; i < levels.length; i++) ok(levels[i] - levels[i - 1] <= 1, `${p}: heading jump h${levels[i - 1]}→h${levels[i]}`);
  let words = '';
  const art = h.match(/<article class="prose">([\s\S]*?)<\/article>/);
  if (art) words = strip((h.match(/<h1[\s\S]*?<\/h1>/) || [''])[0] + ' ' + art[1]).split(' ').filter((w) => /\p{L}/u.test(w)).length;
  rows.push({ path: p, title: title.length, desc: desc.length, words });
}
console.table(rows);
done('check-seo');
