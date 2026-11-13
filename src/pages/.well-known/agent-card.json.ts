import type { APIRoute } from 'astro';
import { site, abs, BUILD_DATE } from '../../config/site';
import { services, serviceUrl } from '../../data/services';
export const GET: APIRoute = () => new Response(JSON.stringify({
  schemaVersion: '1.0',
  name: site.name,
  description: site.description,
  url: abs('/'),
  type: 'LocalBusiness/AutoRepair',
  languages: ['lt'],
  location: { address: site.address.full, district: site.address.district, country: site.address.countryCode, map: site.mapsUrl },
  openingHours: site.hours.map((h) => ({ days: h.days, opens: h.opens, closes: h.closes })),
  actions: [
    { name: 'call', description: 'Paskambinti ir užsiregistruoti', method: 'tel', target: site.phoneHref },
    { name: 'directions', description: 'Maršrutas į servisą', method: 'url', target: site.mapsUrl },
  ],
  services: services.map((s) => ({ name: s.name, url: abs(serviceUrl(s)) })),
  resources: { llms: abs('/llms.txt'), llmsFull: abs('/llms-full.txt'), aiJson: abs('/ai.json') },
  updated: BUILD_DATE,
}, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
