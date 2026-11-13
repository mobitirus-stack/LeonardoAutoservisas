import type { APIRoute } from 'astro';
import { abs, BUILD_DATE } from '../config/site';
import { services, serviceUrl } from '../data/services';
export const GET: APIRoute = () => {
  const urls: { path: string; img?: string }[] = [
    { path: '/', img: '/img/hero-1920.jpg' },
    { path: '/paslaugos/' },
    ...services.map((s) => ({ path: serviceUrl(s), img: `/og/${s.slug}.jpg` })),
    { path: '/kontaktai/' },
    { path: '/privatumo-politika/' },
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.map((u) => `  <url>
    <loc>${abs(u.path)}</loc>
    <lastmod>${BUILD_DATE}</lastmod>${u.img ? `
    <image:image><image:loc>${abs(u.img)}</image:loc></image:image>` : ''}
  </url>`).join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
