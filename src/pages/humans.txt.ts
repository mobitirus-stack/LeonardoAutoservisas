import type { APIRoute } from 'astro';
import { site, BUILD_DATE } from '../config/site';
export const GET: APIRoute = () => new Response([
  '/* KLIENTAS */', `  ${site.name}`, `  ${site.address.full}`, `  ${site.phone}`, '',
  '/* SVETAINĖ */', `  Atnaujinta: ${BUILD_DATE}`, '  Kalba: lietuvių', '  Technologijos: Astro, HTML, CSS', '  Šriftai: Fraunces, Inter, Grenze Gotisch (SIL OFL)', '',
].join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
