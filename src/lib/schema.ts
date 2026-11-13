// JSON-LD: vienas @graph per puslapį, ryšiai per @id. Tik matomi faktai.
import { site, SITE_URL, BUILD_DATE, abs, filled, sameAs } from '../config/site';
import { services, serviceUrl, type Service, type QA } from '../data/services';

export const ids = {
  business: `${SITE_URL}/#business`,
  website: `${SITE_URL}/#website`,
  logo: `${SITE_URL}/#logo`,
};

export function businessNode() {
  const node: Record<string, unknown> = {
    '@type': ['AutoRepair', 'LocalBusiness'],
    '@id': ids.business,
    name: site.name,
    description: site.description,
    url: abs('/'),
    logo: { '@type': 'ImageObject', '@id': ids.logo, url: abs('/img/leonardo-logo.png'), width: 868, height: 780, caption: site.name },
    image: [abs('/img/hero-1920.jpg'), abs('/img/leonardo-logo.png')],
    telephone: site.phoneE164,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      postalCode: site.address.postalCode,
      addressCountry: site.address.countryCode,
    },
    hasMap: site.mapsUrl,
    openingHoursSpecification: site.hours
      .filter((h) => h.opens && h.closes)
      .map((h) => ({ '@type': 'OpeningHoursSpecification', dayOfWeek: h.days, opens: h.opens, closes: h.closes })),
    areaServed: [
      { '@type': 'City', name: 'Vilnius' },
      ...site.areas.map((a) => ({ '@type': 'Place', name: `${a}, Vilnius` })),
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(site.rating.value),
      bestRating: '5',
      worstRating: '1',
      ratingCount: String(site.rating.count),
      reviewCount: String(site.rating.count),
    },
    sameAs: sameAs(),
    knowsAbout: services.map((s) => s.name),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Leonardo autoserviso paslaugos',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', '@id': abs(serviceUrl(s)) + '#service', name: s.name, url: abs(serviceUrl(s)) },
        ...(s.priceFrom ? { price: String(s.priceFrom), priceCurrency: 'EUR' } : {}),
      })),
    },
  };
  if (filled(site.email)) node.email = site.email;
  if (filled(site.geo.lat) && filled(site.geo.lng)) node.geo = { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng };
  if (filled(site.priceRange)) node.priceRange = site.priceRange;
  if (filled(site.legalName)) node.legalName = site.legalName;
  if (filled(site.companyCode)) node.identifier = { '@type': 'PropertyValue', propertyID: 'Įmonės kodas', value: site.companyCode };
  return node;
}

export const websiteNode = () => ({
  '@type': 'WebSite',
  '@id': ids.website,
  url: abs('/'),
  name: site.name,
  inLanguage: 'lt-LT',
  publisher: { '@id': ids.business },
});

export interface Crumb { name: string; path: string }

export function webPageNode(o: { path: string; title: string; description: string; type?: string; crumbs?: Crumb[]; image?: string }) {
  const url = abs(o.path);
  return {
    '@type': o.type ? ['WebPage', o.type] : 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: o.title,
    description: o.description,
    inLanguage: 'lt-LT',
    isPartOf: { '@id': ids.website },
    about: { '@id': ids.business },
    primaryImageOfPage: { '@type': 'ImageObject', url: abs(o.image || '/img/hero-1920.jpg') },
    dateModified: BUILD_DATE,
    ...(o.crumbs ? { breadcrumb: { '@id': `${url}#breadcrumb` } } : {}),
  };
}

export const breadcrumbNode = (path: string, crumbs: Crumb[]) => ({
  '@type': 'BreadcrumbList',
  '@id': `${abs(path)}#breadcrumb`,
  itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: abs(c.path) })),
});

export const faqNode = (path: string, qa: QA[]) => ({
  '@type': 'FAQPage',
  '@id': `${abs(path)}#faq`,
  mainEntity: qa.map((x) => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })),
});

export const serviceNode = (s: Service) => ({
  '@type': 'Service',
  '@id': abs(serviceUrl(s)) + '#service',
  name: s.name,
  serviceType: s.name,
  description: s.answer,
  url: abs(serviceUrl(s)),
  provider: { '@id': ids.business },
  areaServed: { '@type': 'City', name: 'Vilnius' },
  ...(s.priceFrom
    ? { offers: { '@type': 'Offer', price: String(s.priceFrom), priceCurrency: 'EUR', priceSpecification: { '@type': 'PriceSpecification', minPrice: String(s.priceFrom), priceCurrency: 'EUR' } } }
    : {}),
});

export const itemListNode = (path: string) => ({
  '@type': 'ItemList',
  '@id': `${abs(path)}#itemlist`,
  name: 'Leonardo autoserviso paslaugos',
  numberOfItems: services.length,
  itemListElement: services.map((s, i) => ({ '@type': 'ListItem', position: i + 1, name: s.name, url: abs(serviceUrl(s)) })),
});

export const graph = (nodes: unknown[]) => JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes });
