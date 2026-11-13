import type { APIRoute } from 'astro';
import { site, abs, BUILD_DATE } from '../config/site';
import { businessFacts } from '../lib/content';
export const GET: APIRoute = () => {
  const body = [
    `# ai.txt – ${site.name}`,
    '# Turinio naudojimo politika dirbtinio intelekto sistemoms',
    '',
    'User-Agent: *',
    'Allow: /',
    'Training: allowed',
    'Inference: allowed',
    'Indexing: allowed',
    `Citation: requested – „${site.name}, ${abs('/')}“`,
    '',
    '# Pagrindiniai faktai',
    ...businessFacts().map((x) => `# ${x}`),
    '',
    `# Daugiau: ${abs('/llms.txt')} · ${abs('/llms-full.txt')} · ${abs('/ai.json')}`,
    `# Atnaujinta: ${BUILD_DATE}`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
