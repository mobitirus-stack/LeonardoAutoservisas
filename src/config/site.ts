// =====================================================================
// Leonardo autoservisas – VIENAS duomenų šaltinis.
// Iš čia generuojami puslapiai, schema, sitemap, llms.txt, ai.json ir kt.
// Visi TODO_ laukai – užpildyti gavus duomenis iš kliento.
// =====================================================================

/** Domenas be galinio „/“. Galima perrašyti per aplinkos kintamąjį SITE_URL. */
export const SITE_URL: string = (process.env.SITE_URL || 'https://TODO_DOMAIN').replace(/\/$/, '');

/**
 * Ar rodyti tipines, su klientu dar nepatvirtintas paslaugas.
 * false → jos dingsta iš puslapių, sitemap, schemos, llms.txt, ai.json ir DUK.
 * Galima perrašyti: SHOW_UNCONFIRMED_SERVICES=false npm run build
 */
export const SHOW_UNCONFIRMED_SERVICES: boolean = process.env.SHOW_UNCONFIRMED_SERVICES
  ? process.env.SHOW_UNCONFIRMED_SERVICES !== 'false'
  : true;

/** Build data – naudojama „Atnaujinta“, dateModified, sitemap lastmod. */
export const BUILD_DATE: string = process.env.BUILD_DATE || new Date().toISOString().slice(0, 10);

const isTodo = (v: string | null | undefined) => !v || v.startsWith('TODO_');
export const filled = (v: string | null | undefined): v is string => !isTodo(v);

export const site = {
  name: 'Leonardo autoservisas',
  shortName: 'Leonardo',
  legalName: 'TODO_LEGAL_NAME',
  companyCode: 'TODO_COMPANY_CODE',
  vatCode: 'TODO_VAT',
  category: 'Autoservisas',
  description:
    'Leonardo autoservisas – automobilių remonto servisas Vilniuje, Pašilaičiuose, adresu Laisvės pr. 125. Pagrindinės paslaugos – tepalų keitimas ir stabdžių remontas.',

  phone: '+370 699 47163',
  phoneHref: 'tel:+37069947163',
  phoneE164: '+37069947163',
  email: 'TODO_EMAIL',

  address: {
    street: 'Laisvės pr. 125',
    postalCode: '06118',
    city: 'Vilnius',
    country: 'Lietuva',
    countryCode: 'LT',
    district: 'Pašilaičiai',
    full: 'Laisvės pr. 125, 06118 Vilnius',
  },
  /** Įvažiavimo pastaba – TODO: patikrinti, ar įvažiavimas iš J. Baltrušaičio g. */
  entrance: 'TODO_ENTRANCE',
  /** Parkavimas – TODO */
  parking: 'TODO_PARKING',

  /** Iš kliento pateikto oficialaus „Google Maps“ embed kodo */
  geo: { lat: '54.7277283', lng: '25.235555' },

  mapsCid: '15243629170133193209',
  mapsUrl: 'https://maps.google.com/?cid=15243629170133193209',
  MAP_EMBED_URL:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.966779204012!2d25.235555!3d54.727728299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd94055529fabf%3A0xd38c3ff74d9251f9!2sLeonardo%20autoservisas!5e1!3m2!1slt!2slt!4v1794585451661!5m2!1slt!2slt',

  rating: { value: 4.5, valueText: '4,5', count: 48, source: 'Google', asOf: '2026-11' },
  /** Atsiliepimų tekstų NEKURTI – tik tikri, su kliento sutikimu. */
  reviews: [] as { author: string; text: string; rating: number; date: string }[],

  /**
   * Darbo laikas – TODO_HOURS: žinoma tik, kad užsidaro 17:00.
   * Placeholderis: I–V 08:00–17:00, VI–VII nedirba.
   */
  hoursTodo: true,
  hours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], label: 'Pirmadienis–penktadienis', short: 'I–V', opens: '08:00', closes: '17:00' },
    { days: ['Saturday'], label: 'Šeštadienis', short: 'VI', opens: null, closes: null },
    { days: ['Sunday'], label: 'Sekmadienis', short: 'VII', opens: null, closes: null },
  ] as { days: string[]; label: string; short: string; opens: string | null; closes: string | null }[],
  hoursShort: 'I–V 08:00–17:00',
  hoursSentence: 'Darbo dienomis nuo 08:00 iki 17:00, savaitgaliais nedirba.',

  social: { facebook: 'TODO_FACEBOOK' },
  priceRange: 'TODO_PRICE_RANGE',

  /** Papildomi „Kodėl mes“ pranašumai – įrašyti tik kliento patvirtintus faktus (pvz. garantija, patirtis). */
  extraAdvantages: [] as { title: string; text: string }[],

  areas: ['Pašilaičiai', 'Fabijoniškės', 'Justiniškės', 'Šeškinė', 'Viršuliškės', 'Pilaitė', 'Perkūnkiemis', 'Bajorai', 'Santariškės', 'Karoliniškės'],

  verification: { google: '', bing: '', yandex: '' },
  GA4_ID: '',
  indexNowKey: '7c3e9f1a5b2d4e8f9a0b1c2d3e4f5a6b',
  themeColor: '#893842',
};

export const sameAs = (): string[] => [site.mapsUrl, ...(filled(site.social.facebook) ? [site.social.facebook] : [])];
export const abs = (path: string) => SITE_URL + path;
