// JSON-LD patikra: validus JSON, tipai, FAQ = matomas tekstas, NAP = ai.json/config, hasOfferCatalog = rodomos paslaugos.
import fs from 'node:fs';
import { htmlFiles, read, urlPath, strip, reporter } from './lib-dist.mjs';
const { ok, done } = reporter();
const ai = JSON.parse(fs.readFileSync('dist/ai.json', 'utf8'));
const shownServices = ai.services.map((s) => s.url);
const sitemap = fs.readFileSync('dist/sitemap.xml', 'utf8');
for (const f of htmlFiles()) {
  const h = read(f), p = urlPath(f);
  if (p.endsWith('404.html')) continue;
  const blocks = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  ok(blocks.length === 1, `${p}: exactly one JSON-LD block (${blocks.length})`);
  let data; try { data = JSON.parse(blocks[0][1]); } catch (e) { ok(false, `${p}: JSON parse ${e.message}`); continue; }
  const g = data['@graph']; const types = g.map((n) => [].concat(n['@type']).join('+'));
  const need = ['AutoRepair+LocalBusiness', 'WebSite'];
  if (p === '/') need.push('WebPage', 'FAQPage');
  if (p.startsWith('/paslaugos/') && p !== '/paslaugos/') need.push('WebPage', 'BreadcrumbList', 'Service', 'FAQPage');
  if (p === '/paslaugos/') need.push('WebPage+CollectionPage', 'BreadcrumbList', 'ItemList');
  if (p === '/kontaktai/') need.push('WebPage+ContactPage', 'BreadcrumbList');
  for (const t of need) ok(types.includes(t), `${p}: has ${t} (${types.join(', ')})`);
  // @id nuorodos išsisprendžia
  const ids = new Set(g.map((n) => n['@id']).filter(Boolean));
  const refs = JSON.stringify(g).match(/\{"@id":"[^"]+"\}/g) || [];
  for (const r of refs) { const id = JSON.parse(r)['@id']; ok(ids.has(id), `${p}: @id ref resolves ${id}`); }
  const biz = g.find((n) => [].concat(n['@type']).includes('AutoRepair'));
  ok(biz.telephone === ai.contact.telephone, `${p}: NAP phone`);
  ok(biz.address.streetAddress === ai.address.streetAddress && biz.address.postalCode === ai.address.postalCode, `${p}: NAP address`);
  ok(String(biz.aggregateRating.ratingValue) === String(ai.rating.value) && String(biz.aggregateRating.reviewCount) === String(ai.rating.count), `${p}: rating`);
  const offered = biz.hasOfferCatalog.itemListElement.map((o) => o.itemOffered.url);
  ok(JSON.stringify(offered) === JSON.stringify(shownServices), `${p}: hasOfferCatalog = shown services`);
  const faq = g.find((n) => n['@type'] === 'FAQPage');
  if (faq) {
    const vis = [...h.matchAll(/<details[^>]*>\s*<summary>([\s\S]*?)<\/summary>\s*<div class="answer"><p>([\s\S]*?)<\/p><\/div>\s*<\/details>/g)].map((m) => [strip(m[1]), strip(m[2])]);
    ok(vis.length === faq.mainEntity.length, `${p}: FAQ count visible ${vis.length} = schema ${faq.mainEntity.length}`);
    faq.mainEntity.forEach((q, i) => ok(vis[i] && vis[i][0] === q.name && vis[i][1] === q.acceptedAnswer.text.replace(/ /g, ' '), `${p}: FAQ text match „${q.name}“`));
  }
}
for (const u of shownServices) ok(sitemap.includes(`<loc>${u}</loc>`), `sitemap has ${u}`);
ok((sitemap.match(/<loc>[^<]*\/paslaugos\/[^<]+\/<\/loc>/g) || []).length === shownServices.length, 'sitemap service count = shown services');
done('validate-schema');
