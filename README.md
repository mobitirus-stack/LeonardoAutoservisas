# Leonardo autoservisas – Premium svetainė

Statinė lietuviška svetainė autoservisui **Leonardo autoservisas** (Laisvės pr. 125, Vilnius, Pašilaičiai).
Stilius – „modernus vintažas“ pagal logotipą: tatuiruotės rožė, kaspinai, gotikinis užrašas, kreminis popierius ir bordo.

**Technologijos:** Astro 5 (`output: static`), beveik be klientinio JS (tik žemėlapio facade). Šriftai self-hosted:
Fraunces, Inter ir Grenze Gotisch su lietuviškomis raidėmis. CSS View Transitions, scroll-driven animacijos, kurios išjungiamos su `prefers-reduced-motion`.

## Paleidimas

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # -> dist/
npm run preview
npm run check      # SEO, schema, kontrastas, LT glifai (po build)
npm run assets     # tik pakeitus brand/ ar hero-source.jpg: perkuria paveikslėlius, ikonas, šriftus
```

Reikia Node ≥ 20.3.

## Vienas duomenų šaltinis

| Failas | Kas jame |
|---|---|
| `src/config/site.ts` | NAP, darbo laikas, įvertinimas, vietovės, TODO laukai, `SITE_URL`, `SHOW_UNCONFIRMED_SERVICES`, `GA4_ID`, verifikacijos |
| `src/data/services.ts` | 8 paslaugos su visu turiniu (`confirmed`, `priceFrom`) |
| `src/data/faq.ts` | pagrindinio puslapio DUK |

Iš jų generuojama viskas: puslapiai, JSON-LD, `sitemap.xml`, `robots.txt`, `llms.txt`, `llms-full.txt`, `ai.json`, `ai.txt`,
`.well-known/agent-card.json`, `.well-known/security.txt`, `humans.txt`, `site.webmanifest`, OG paveikslėliai (`/og/*.jpg`) ir IndexNow raktas.

## Nepatvirtintos paslaugos

Google profilyje nurodytos tik **Tepalų keitimas** ir **Stabdžių remontas**. Šios 6 yra tipinės ir **PRIEŠ PALEIDIMĄ JAS REIKIA PATVIRTINTI SU KLIENTU**:
Kompiuterinė diagnostika, Važiuoklės remontas, Techninė priežiūra ir filtrų keitimas, Paruošimas techninei apžiūrai, Padangų montavimas, Variklio remontas.

- Paslėpti visas: `SHOW_UNCONFIRMED_SERVICES = "false"` (Netlify env arba `src/config/site.ts`). Jos dingsta iš puslapių, sitemap, schemos, llms, ai.json ir DUK.
- Patvirtinti vieną: `services.ts` nustatyti `confirmed: true`.
- Pašalinti vieną: ištrinti jos objektą iš `services.ts` ir nuorodas iš kitų paslaugų `related`.

## TODO prieš paleidimą

| TODO | Kur |
|---|---|
| Domenas | Netlify env `SITE_URL=https://domenas.lt` (arba `site.ts` / `astro.config.mjs`) |
| Darbo laikas (dabar placeholderis I–V 08:00–17:00) | `site.ts` → `hours`, `hoursShort`, `hoursSentence`, `hoursTodo:false`; `faq.ts` 2-as klausimas |
| El. paštas | `site.ts` → `email` |
| Įvažiavimas (galbūt iš J. Baltrušaičio g.), parkavimas | `site.ts` → `entrance`, `parking` |
| Koordinatės | `site.ts` → `geo` (įrašius – atsiras `geo` schemoje ir ai.json) |
| Rekvizitai | `site.ts` → `legalName`, `companyCode`, `vatCode` (privatumo politika) |
| Facebook | `site.ts` → `social.facebook` (atsiras `sameAs`) |
| Kainos | `services.ts` → `priceFrom` (rodoma „nuo X €“ + `Offer` schema) |
| Papildomi pranašumai (garantija, patirtis) | `site.ts` → `extraAdvantages` – tik kliento patvirtinti faktai |
| Search Console / Bing verifikacija | `site.ts` → `verification` |
| Analytics | `site.ts` → `GA4_ID` (įsijungia Consent Mode v2 slapukų juosta) |
| Didelės raiškos logotipas | pakeisti `brand/*.png` → `npm run assets` |
| Tikros serviso nuotraukos | pakeisti `hero-source.jpg` → `npm run assets` |

## Deploy į Netlify

1. Netlify → **Add new site → Import from GitHub** → šis repo. `netlify.toml` jau nustato `npm run build` → `dist`, Node 20.
2. **Site settings → Environment variables:** `SITE_URL = https://jūsų-domenas.lt`.
3. Deploy, tada pridėti domeną ir įjungti HTTPS.
4. Saugumo ir cache antraštės – `public/_headers` (Netlify/Cloudflare) arba `public/.htaccess` (Apache).

## Po paleidimo

1. Google Search Console ir Bing Webmaster Tools: pridėti svetainę, pateikti `sitemap.xml`.
2. `npm run build && npm run indexnow` – praneša IndexNow (Bing ir kt.).
3. Google Business Profile: įrašyti svetainės adresą. **Papildyti paslaugų sąrašą** (dabar jame tik 2 paslaugos, tai silpnina vietinį matomumą): pridėti visas kliento patvirtintas paslaugas su aprašymais, kurie sutampa su svetaine.
4. Įkelti tikras serviso nuotraukas į GBP ir svetainę. Rinkti naujus Google atsiliepimus.

## Patikros

`npm run check` (po `npm run build`):
- `check-seo.mjs` – vienas H1, title 30–60, description 120–160, canonical, og:image, img alt/width/height, unikalumas, antraščių hierarchija, žodžių kiekis;
- `validate-schema.mjs` – JSON-LD validumas, tipai, `@id` nuorodos, FAQ = matomas tekstas, NAP, `hasOfferCatalog` = rodomos paslaugos, sitemap;
- `check-contrast.mjs` – WCAG AA;
- `check-glyphs.mjs` – lietuviškos raidės visuose šriftuose.

## Šaltiniai ir licencijos

- Hero: Unsplash (ID `jL9zfzTVSwY`), Unsplash licencija. Rekomenduojama pakeisti tikra serviso nuotrauka.
- Šriftai: Fraunces, Inter, Grenze Gotisch – SIL Open Font License (`fonts-src/`).
- Logotipas – kliento.
