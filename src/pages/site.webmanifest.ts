import type { APIRoute } from 'astro';
import { site } from '../config/site';
export const GET: APIRoute = () => new Response(JSON.stringify({
  name: site.name, short_name: site.shortName,
  description: 'Autoservisas Pašilaičiuose, Laisvės pr. 125, Vilnius. Tepalų keitimas ir stabdžių remontas.',
  lang: 'lt', start_url: '/', scope: '/', display: 'browser', background_color: '#FAF5F0', theme_color: site.themeColor,
  icons: [
    { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    { src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
  ],
}, null, 2), { headers: { 'Content-Type': 'application/manifest+json' } });
