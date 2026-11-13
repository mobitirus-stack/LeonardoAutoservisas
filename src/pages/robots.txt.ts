import type { APIRoute } from 'astro';
import { abs } from '../config/site';
const bots = ['Googlebot', 'Bingbot', 'DuckDuckBot', 'Applebot', 'Applebot-Extended', 'YandexBot', 'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'anthropic-ai', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'CCBot', 'Amazonbot', 'Meta-ExternalAgent', 'facebookexternalhit', 'Twitterbot', 'LinkedInBot'];
export const GET: APIRoute = () => {
  const body = [
    '# Leonardo autoservisas – Laisvės pr. 125, Vilnius (Pašilaičiai)',
    '# Paieškos sistemos ir DI asistentai kviečiami indeksuoti ir cituoti šią svetainę.',
    '# Cituojant prašome nurodyti šaltinį: Leonardo autoservisas.',
    `# Santrauka DI sistemoms: ${abs('/llms.txt')}`,
    `# Visas turinys: ${abs('/llms-full.txt')}`,
    `# Struktūrizuoti duomenys: ${abs('/ai.json')} · ${abs('/ai.txt')} · ${abs('/.well-known/agent-card.json')}`,
    '',
    'User-agent: *',
    'Allow: /',
    '',
    ...bots.flatMap((b) => [`User-agent: ${b}`, 'Allow: /', '']),
    `Sitemap: ${abs('/sitemap.xml')}`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
