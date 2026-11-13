// IndexNow: praneša Bing/Yandex ir kt. apie visus sitemap URL. Paleisti po deploy: npm run indexnow
import fs from 'node:fs';
const sitemap = fs.readFileSync('dist/sitemap.xml', 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const host = new URL(urls[0]).host;
if (host.startsWith('todo_domain') || host.startsWith('TODO_DOMAIN')) { console.error('Pirmiausia nustatykite SITE_URL (domeną).'); process.exit(1); }
const key = fs.readdirSync('dist').find((f) => /^[0-9a-f]{32}\.txt$/.test(f)).replace('.txt', '');
const res = await fetch('https://api.indexnow.org/indexnow', { method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' }, body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList: urls }) });
console.log('IndexNow:', res.status, res.statusText, `(${urls.length} URL)`);
