// IndexNow rakto failas: /{key}.txt
import type { APIRoute } from 'astro';
import { site } from '../config/site';
export function getStaticPaths() { return [{ params: { key: site.indexNowKey } }]; }
export const GET: APIRoute = () => new Response(site.indexNowKey, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
