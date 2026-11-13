import type { APIRoute } from 'astro';
import { aiJson } from '../lib/content';
export const GET: APIRoute = () => new Response(JSON.stringify(aiJson(), null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
