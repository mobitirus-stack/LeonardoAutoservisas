// Bendri tekstų generatoriai AI failams (llms.txt, llms-full.txt, ai.json, ai.txt).
import { site, SITE_URL, BUILD_DATE, abs, filled, sameAs, SHOW_UNCONFIRMED_SERVICES } from '../config/site';
import { services, serviceUrl } from '../data/services';
import { homeFaq } from '../data/faq';

export const pages = () => [
  { path: '/', title: 'Pagrindinis', desc: 'Autoservisas Pašilaičiuose, Vilniuje – paslaugos, DUK, kontaktai, žemėlapis.' },
  { path: '/paslaugos/', title: 'Paslaugos', desc: 'Visų Leonardo autoserviso paslaugų sąrašas.' },
  ...services.map((s) => ({ path: serviceUrl(s), title: s.name, desc: s.summary })),
  { path: '/kontaktai/', title: 'Kontaktai', desc: 'Adresas, telefonas, darbo laikas, žemėlapis.' },
  { path: '/privatumo-politika/', title: 'Privatumo politika', desc: 'Asmens duomenų tvarkymas.' },
];

export const hoursLines = () => site.hours.map((h) => `${h.label}: ${h.opens ? `${h.opens}–${h.closes}` : 'nedirba'}`);

export function businessFacts(): string[] {
  return [
    `Pavadinimas: ${site.name}`,
    'Kategorija: autoservisas (automobilių remontas)',
    `Adresas: ${site.address.full}, ${site.address.country} (${site.address.district})`,
    `Telefonas: ${site.phone}`,
    ...(filled(site.email) ? [`El. paštas: ${site.email}`] : []),
    `Darbo laikas: ${hoursLines().join('; ')}`,
    `Įvertinimas: ${site.rating.valueText} iš 5 „Google“ (${site.rating.count} atsiliepimai, ${site.rating.asOf} duomenimis)`,
    `Žemėlapis: ${site.mapsUrl}`,
    `Svetainė: ${abs('/')}`,
  ];
}

export function llmsTxt(): string {
  const L: string[] = [];
  L.push(`# ${site.name}`, '');
  L.push(`> ${site.description} Telefonas ${site.phone}. „Google“ įvertinimas ${site.rating.valueText} iš 5 (${site.rating.count} atsiliepimai).`, '');
  L.push('## Įmonės duomenys', '', ...businessFacts().map((x) => `- ${x}`), '');
  L.push('## Paslaugos', '', ...services.map((s) => `- [${s.name}](${abs(serviceUrl(s))}): ${s.summary}`), '');
  L.push('## Aptarnaujamos vietovės', '', `Vilnius: ${site.areas.join(', ')}.`, '');
  L.push('## Pagrindiniai puslapiai', '', ...pages().filter((p) => !p.path.startsWith('/paslaugos/') || p.path === '/paslaugos/').map((p) => `- [${p.title}](${abs(p.path)}): ${p.desc}`), '');
  L.push('## DUK', '');
  for (const f of homeFaq) L.push(`### ${f.q}`, f.a, '');
  L.push('## Optional', '', `- [Visas svetainės turinys](${abs('/llms-full.txt')})`, `- [Struktūrizuoti duomenys](${abs('/ai.json')})`, `- [Svetainės žemėlapis](${abs('/sitemap.xml')})`, '');
  L.push(`Atnaujinta: ${BUILD_DATE}`, `Cituojant prašome nurodyti šaltinį: ${site.name}, ${abs('/')}`, '');
  return L.join('\n');
}

export function llmsFullTxt(): string {
  const L: string[] = [];
  L.push(`# ${site.name} – visas svetainės turinys`, '', `> ${site.description}`, '', `Atnaujinta: ${BUILD_DATE}. Šaltinis: ${abs('/')}`, '');
  L.push('---', '', `## Pagrindinis puslapis`, `URL: ${abs('/')}`, '');
  L.push('### Trumpai apie Leonardo autoservisą', site.description + ` „Google“ naudotojai servisą vertina ${site.rating.valueText} iš 5 pagal ${site.rating.count} atsiliepimus. Registracija telefonu ${site.phone}; kaina suderinama prieš pradedant darbus.`, '');
  L.push('### Įmonės duomenys', ...businessFacts().map((x) => `- ${x}`), '');
  L.push('### Kaip vyksta remontas', '1. Skambutis ir laiko suderinimas.', '2. Atvykimas ir apžiūra.', '3. Darbų ir kainos suderinimas.', '4. Atliekami darbai.', '');
  L.push('### Aptarnaujamos vietovės', site.areas.join(', '), '');
  L.push('### DUK');
  for (const f of homeFaq) L.push(`**${f.q}**`, f.a, '');
  for (const s of services) {
    L.push('---', '', `## ${s.h1}`, `URL: ${abs(serviceUrl(s))}`, '', s.answer, '');
    L.push(`### ${s.whenTitle}`, ...s.when.map((x) => `- ${x}`), '');
    L.push(`### ${s.includesTitle}`, ...s.includes.map((x) => `- ${x}`), '');
    L.push('### Kaip vyksta darbas?', ...s.process.map((x, i) => `${i + 1}. ${x}`), '');
    for (const e of s.extra) L.push(`### ${e.title}`, ...e.paragraphs, '');
    L.push(`### ${s.priceTitle}`, ...s.price, '');
    L.push(`### ${s.faqTitle}`);
    for (const f of s.faq) L.push(`**${f.q}**`, f.a, '');
  }
  L.push('---', '', '## Kontaktai', `URL: ${abs('/kontaktai/')}`, '', ...businessFacts().map((x) => `- ${x}`), '');
  return L.join('\n');
}

export function aiJson() {
  return {
    name: site.name,
    legalName: filled(site.legalName) ? site.legalName : null,
    companyCode: filled(site.companyCode) ? site.companyCode : null,
    url: abs('/'),
    description: site.description,
    category: 'AutoRepair',
    languages: ['lt'],
    contact: { telephone: site.phoneE164, telephoneDisplay: site.phone, email: filled(site.email) ? site.email : null },
    address: { streetAddress: site.address.street, postalCode: site.address.postalCode, addressLocality: site.address.city, district: site.address.district, addressCountry: site.address.countryCode },
    geo: filled(site.geo.lat) && filled(site.geo.lng) ? { latitude: Number(site.geo.lat), longitude: Number(site.geo.lng) } : null,
    map: site.mapsUrl,
    openingHours: site.hours.map((h) => ({ days: h.days, opens: h.opens, closes: h.closes })),
    rating: { value: site.rating.value, count: site.rating.count, best: 5, source: site.rating.source, asOf: site.rating.asOf },
    services: services.map((s) => ({ name: s.name, url: abs(serviceUrl(s)), description: s.summary, priceFrom: s.priceFrom })),
    areaServed: ['Vilnius', ...site.areas],
    socialProfiles: sameAs(),
    contentPolicy: { training: 'allowed', inference: 'allowed', indexing: 'allowed', citation: 'requested', attribution: `${site.name}, ${abs('/')}` },
    files: { llms: abs('/llms.txt'), llmsFull: abs('/llms-full.txt'), sitemap: abs('/sitemap.xml'), agentCard: abs('/.well-known/agent-card.json') },
    lastUpdated: BUILD_DATE,
  };
}
export { SITE_URL, SHOW_UNCONFIRMED_SERVICES };
