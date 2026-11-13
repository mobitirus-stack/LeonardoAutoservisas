import type { APIRoute } from 'astro';
import { site, abs, filled } from '../../config/site';
export const GET: APIRoute = () => {
  const exp = new Date(); exp.setFullYear(exp.getFullYear() + 1);
  return new Response([
    `Contact: ${filled(site.email) ? 'mailto:' + site.email : site.phoneHref}`,
    `Expires: ${exp.toISOString().replace(/\.\d+Z$/, '.000Z')}`,
    'Preferred-Languages: lt, en',
    `Canonical: ${abs('/.well-known/security.txt')}`,
    '',
  ].join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
