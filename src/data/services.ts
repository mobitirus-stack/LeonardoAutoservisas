// =====================================================================
// Paslaugos – vienas šaltinis puslapiams, schemai, sitemap, llms, ai.json.
// confirmed: true  – nurodyta Google Business Profile (Oil change, Brakes).
// confirmed: false – tipinė paslauga, PATVIRTINTI SU KLIENTU PRIEŠ PALEIDIMĄ.
// priceFrom: null  – kainų nėra; įrašius skaičių rodoma „nuo X €“ ir Offer schema.
// =====================================================================
import { SHOW_UNCONFIRMED_SERVICES } from '../config/site';

export type IconName = 'oil' | 'brake' | 'diagnostics' | 'suspension' | 'maintenance' | 'inspection' | 'tire' | 'engine';
export interface QA { q: string; a: string }
export interface Service {
  slug: string;
  name: string;
  h1: string;
  keyword: string;
  keywords: string[];
  title: string;
  description: string;
  icon: IconName;
  confirmed: boolean;
  source: string;
  priceFrom: number | null;
  summary: string;
  answer: string;
  whenTitle: string;
  when: string[];
  includesTitle: string;
  includes: string[];
  process: string[];
  priceTitle: string;
  price: string[];
  extra: { title: string; paragraphs: string[] }[];
  faqTitle: string;
  faq: QA[];
  related: string[];
}

const PHONE = '+370 699 47163';

export const allServices: Service[] = [
  {
    slug: 'tepalu-keitimas',
    name: 'Tepalų keitimas',
    h1: 'Tepalų keitimas Pašilaičiuose, Vilniuje',
    keyword: 'tepalų keitimas Vilniuje',
    keywords: ['variklio alyvos keitimas', 'tepalų filtras', 'tepalų keitimas Pašilaičiuose'],
    title: 'Tepalų keitimas Pašilaičiuose | Leonardo autoservisas',
    description: 'Tepalų keitimas Vilniuje, Pašilaičiuose: variklio alyva ir tepalų filtras, kaina suderinama prieš darbus. Laisvės pr. 125. Skambinkite +370 699 47163.',
    icon: 'oil',
    confirmed: true,
    source: 'Google Business Profile: Oil change',
    priceFrom: null,
    summary: 'Variklio alyvos ir tepalų filtro keitimas pagal automobilio gamintojo reikalavimus.',
    answer: `Tepalų keitimas – tai senos variklio alyvos išleidimas, tepalų filtro pakeitimas ir naujos, automobiliui tinkamos alyvos įpylimas. Leonardo autoservisas tepalus keičia Laisvės pr. 125, Pašilaičiuose, Vilniuje. Kaina suderinama prieš darbus, o dėl laiko galite susitarti telefonu ${PHONE}.`,
    whenTitle: 'Kada reikia keisti variklio tepalus?',
    when: [
      'Suėjo gamintojo nurodytas ridos ar laiko intervalas – jis nurodomas serviso knygelėje arba rodomas prietaisų skydelyje.',
      'Prietaisų skydelyje užsidegė tepalų slėgio lemputė arba serviso priminimas.',
      'Tepalų lygis matuoklėje nukrito žemiau minimalios žymos arba alyva tapo tamsi ir tiršta.',
      'Variklis dirba garsiau nei įprastai, ypač ką tik užvedus šaltą.',
      'Įsigijote naudotą automobilį ir nežinote, kada tepalai buvo keisti paskutinį kartą.',
      'Ruošiatės ilgesnei kelionei ar artėja šaltasis sezonas.',
    ],
    includesTitle: 'Ką apima tepalų keitimas?',
    includes: [
      'Senos variklio alyvos išleidimas.',
      'Tepalų filtro pakeitimas nauju.',
      'Išleidimo kamščio ir jo tarpinės patikra.',
      'Naujos alyvos, atitinkančios gamintojo specifikaciją ir klampumą, įpylimas.',
      'Tepalų lygio ir sandarumo patikra užvedus variklį.',
      'Serviso intervalo priminimo atstatymas, jei automobilis tai leidžia.',
    ],
    process: [
      `Paskambinate ${PHONE} ir susitariame dėl laiko. Patogu iš karto nurodyti automobilio markę, modelį, variklį ir ridą.`,
      'Atvykus patikslinama automobiliui tinkama alyva ir tepalų filtras, suderinama kaina.',
      'Išleidžiama sena alyva, pakeičiamas filtras ir įpilama nauja alyva.',
      'Užvedus variklį patikrinamas tepalų lygis ir ar niekur nesisunkia.',
      'Grąžindami automobilį pasakome, kas atlikta, ir atkreipiame dėmesį, jei pastebėjome ką nors, ką verta patikrinti.',
    ],
    priceTitle: 'Kiek kainuoja tepalų keitimas?',
    price: [
      'Tepalų keitimo kaina priklauso nuo automobilio variklio, reikalingo alyvos kiekio ir specifikacijos bei tepalų filtro. Skirtingiems varikliams reikia skirtingo alyvos kiekio ir tipo, todėl tiksli kaina nurodoma tik žinant automobilį.',
      `Kainą sužinosite paskambinę ${PHONE}. Darbų ir medžiagų kaina suderinama prieš pradedant darbus.`,
    ],
    extra: [
      {
        title: 'Kaip dažnai keisti variklio tepalus?',
        paragraphs: [
          'Tepalų keitimo intervalą nustato automobilio gamintojas. Jis nurodomas serviso knygelėje, naudotojo vadove arba rodomas prietaisų skydelyje. Dažniausiai intervalas apibrėžiamas ir rida, ir laiku – tepalus reikia keisti, kai sukanka bet kuri iš šių ribų, net jei automobilis važinėja nedaug.',
          'Jei automobilis dažnai važiuoja trumpus atstumus mieste, ilgai stovi spūstyse ar tempia priekabą, alyva sensta greičiau. Tokiomis sąlygomis tepalus verta keisti dažniau, nei nurodo bendras intervalas.',
        ],
      },
      {
        title: 'Kodėl kartu keičiamas ir tepalų filtras?',
        paragraphs: [
          'Tepalų filtras sulaiko metalo daleles, suodžius ir kitus nešvarumus, kurie su alyva cirkuliuoja variklyje. Užsikimšęs filtras blogiau valo alyvą, o šviežia alyva greitai susimaišytų su senu filtre likusiu nešvarumu. Todėl keičiant tepalus įprasta keisti ir filtrą.',
        ],
      },
      {
        title: "Ką daryti, jei užsidegė tepalų lemputė?",
        paragraphs: [
          "Raudona tepalų slėgio lemputė reiškia, kad variklyje gali trūkti alyvos slėgio. Tokiu atveju rekomenduojama kuo greičiau saugiai sustoti, išjungti variklį ir patikrinti tepalų lygį matuokle. Važiuoti toliau su degančia raudona lempute rizikinga – variklis gali būti rimtai pažeistas.",
          "Geltona ar oranžinė lemputė dažniausiai reiškia žemą tepalų lygį arba serviso priminimą. Tokiu atveju verta papildyti alyvos ir susitarti dėl tepalų keitimo. Jei nesate tikri, ką reiškia lemputė, paskambinkite – patarsime, ką daryti.",
        ],
      },
      {
        title: "Kodėl svarbu laiku keisti tepalus?",
        paragraphs: [
          "Variklio alyva tepa judančias dalis, mažina trintį, padeda aušinti variklį ir surenka nešvarumus. Laikui bėgant ji praranda savybes: tirštėja, kaupia suodžius ir blogiau apsaugo variklį. Laiku keičiami tepalai padeda išvengti spartesnio dalių dėvėjimosi ir brangesnio remonto ateityje.",
        ],
      },
    ],
    faqTitle: 'Dažni klausimai apie tepalų keitimą',
    faq: [
      { q: 'Kiek kainuoja tepalų keitimas?', a: `Tepalų keitimo kaina priklauso nuo variklio, alyvos kiekio ir specifikacijos bei tepalų filtro. Tikslią kainą suderiname prieš darbus – paskambinkite ${PHONE} ir nurodykite automobilio duomenis.` },
      { q: 'Kokius tepalus pilate?', a: 'Pilama alyva, atitinkanti automobilio gamintojo nurodytą specifikaciją ir klampumą. Konkretų variantą ir jo kainą suderiname su jumis prieš pradedant darbus.' },
      { q: 'Ar reikia registruotis tepalų keitimui?', a: `Rekomenduojame registruotis iš anksto telefonu ${PHONE}, kad nereikėtų laukti. Skambindami nurodykite automobilio markę, modelį ir variklį.` },
      { q: 'Kur Pašilaičiuose galima pasikeisti tepalus?', a: 'Leonardo autoservisas tepalus keičia adresu Laisvės pr. 125, Pašilaičiuose, Vilniuje. Servisas patogiai pasiekiamas iš Pašilaičių, Fabijoniškių, Justiniškių ir Pilaitės.' },
      { q: "Ar galima tik papildyti tepalų, užuot juos keitus?", a: "Papildyti tepalų verta, jei lygis nukrito žemiau normos, tačiau tai nepakeičia periodinio keitimo. Sena alyva praranda savybes, todėl ją reikia keisti pagal gamintojo intervalą." },
      { q: "Ką pasakyti skambinant dėl tepalų keitimo?", a: "Nurodykite automobilio markę, modelį, pagaminimo metus, variklio tūrį, kuro tipą ir apytikslę ridą. Pagal šiuos duomenis galėsime patikslinti tinkamą alyvą, filtrą ir preliminarią kainą." },
    ],
    related: ['stabdziu-remontas', 'technine-prieziura', 'kompiuterine-diagnostika'],
  },
  {
    slug: 'stabdziu-remontas',
    name: 'Stabdžių remontas',
    h1: 'Stabdžių remontas Vilniuje',
    keyword: 'stabdžių remontas Vilniuje',
    keywords: ['stabdžių kaladėlių keitimas', 'stabdžių diskų keitimas', 'stabdžių skystis'],
    title: 'Stabdžių remontas Vilniuje | Leonardo autoservisas',
    description: 'Stabdžių remontas Vilniuje: kaladėlių, diskų ir stabdžių skysčio keitimas Pašilaičiuose, Laisvės pr. 125. Kaina prieš darbus. Skambinkite +370 699 47163.',
    icon: 'brake',
    confirmed: true,
    source: 'Google Business Profile: Brakes',
    priceFrom: null,
    summary: 'Stabdžių kaladėlių, diskų ir stabdžių skysčio patikra bei keitimas.',
    answer: `Stabdžių remontas – stabdžių sistemos patikra ir susidėvėjusių dalių keitimas: stabdžių kaladėlių, diskų, suportų dalių ir stabdžių skysčio. Leonardo autoservisas stabdžius remontuoja Laisvės pr. 125, Pašilaičiuose, Vilniuje. Darbų apimtis ir kaina suderinamos prieš pradedant, registracija telefonu ${PHONE}.`,
    whenTitle: 'Kada reikia remontuoti stabdžius?',
    when: [
      'Stabdant girdisi cypimas, girgždesys ar metalo šlifavimo garsas.',
      'Stabdant vibruoja vairas arba stabdžių pedalas.',
      'Stabdomas automobilis traukia į vieną pusę.',
      'Pedalas tapo minkštas, nusileidžia giliau nei anksčiau arba jį reikia spausti stipriau.',
      'Prietaisų skydelyje užsidegė stabdžių sistemos ar kaladėlių dėvėjimosi lemputė.',
      'Stabdžių skystis nekeistas ilgiau, nei nurodo gamintojas.',
      'Jaučiamas perkaitusių stabdžių kvapas arba ant ratlankių neįprastai daug stabdžių dulkių.',
    ],
    includesTitle: 'Ką apima stabdžių remontas?',
    includes: [
      'Stabdžių sistemos apžiūra, kaladėlių ir diskų nusidėvėjimo įvertinimas.',
      'Priekinių ir galinių stabdžių kaladėlių keitimas.',
      'Stabdžių diskų keitimas.',
      'Suportų ir jų kreipiančiųjų patikra, valymas ir sutepimas.',
      'Stabdžių skysčio keitimas ir sistemos nuorinimas.',
      'Stovėjimo (rankinio) stabdžio patikra.',
      'Stabdžių žarnelių ir vamzdelių apžiūra.',
    ],
    process: [
      `Susitariame dėl laiko telefonu ${PHONE}. Papasakokite, kokius požymius pastebėjote.`,
      'Apžiūrime stabdžių sistemą ir įvertiname, kurias dalis reikia keisti.',
      'Suderiname darbų apimtį ir kainą prieš pradedant.',
      'Pakeičiame susidėvėjusias dalis, prireikus – stabdžių skystį.',
      'Patikriname stabdžių veikimą ir grąžiname automobilį.',
    ],
    priceTitle: 'Kiek kainuoja stabdžių remontas?',
    price: [
      'Stabdžių remonto kaina priklauso nuo to, kurios ašies stabdžius reikia tvarkyti, ar keičiamos tik kaladėlės, ar ir diskai, nuo automobilio modelio ir pasirinktų dalių. Dažnai kaladėlės keičiamos be diskų, tačiau jei diskai nusidėvėję iki leistinos ribos ar deformuoti, jie keičiami kartu.',
      `Tikslią kainą pasakysime apžiūrėję stabdžius arba žinodami automobilio duomenis – paskambinkite ${PHONE}. Kaina suderinama prieš pradedant darbus.`,
    ],
    extra: [
      {
        title: 'Kada keisti stabdžių kaladėles ir diskus?',
        paragraphs: [
          'Kaladėlių ir diskų dėvėjimasis priklauso nuo vairavimo stiliaus, automobilio masės ir važiavimo sąlygų: mieste stabdoma dažniau, todėl dalys dyla greičiau. Gamintojas nurodo minimalų leistiną kaladėlių frikcinio sluoksnio ir diskų storį – jį pasiekus dalis reikia keisti.',
          'Diskai paprastai tarnauja ilgiau nei kaladėlės, todėl dažniausiai keičiamos tik kaladėlės, o diskai – rečiau. Kaladėlės visada keičiamos visai ašiai iš karto, kad automobilis stabdytų tolygiai.',
        ],
      },
      {
        title: 'Kodėl reikia keisti stabdžių skystį?',
        paragraphs: [
          'Stabdžių skystis laikui bėgant sugeria drėgmę iš aplinkos. Dėl to žemėja jo virimo temperatūra, o intensyviai stabdant gali sumažėti stabdžių efektyvumas. Todėl gamintojai nurodo stabdžių skystį keisti periodiškai – dažniausiai kas kelerius metus, nepriklausomai nuo ridos.',
        ],
      },
      {
        title: "Ką reiškia stabdžių garsai ir vibracija?",
        paragraphs: [
          "Aukštas cypimas stabdant dažnai reiškia, kad kaladėlės nusidėvėjo iki dėvėjimosi indikatoriaus. Šiurkštus metalo šlifavimo garsas gali reikšti, kad frikcinė medžiaga visai nudilusi ir metalas trinasi į diską – tokiu atveju stabdžius reikia tvarkyti nedelsiant.",
          "Vairo vibracija stabdant dažniausiai rodo deformuotus ar netolygiai nusidėvėjusius stabdžių diskus. Jei automobilis stabdant traukia į šoną, priežastis gali būti užstrigęs suportas arba netolygiai veikiantys stabdžiai.",
        ],
      },
      {
        title: "Ar saugu važiuoti su susidėvėjusiais stabdžiais?",
        paragraphs: [
          "Susidėvėję stabdžiai ilgina stabdymo kelią ir gali pažeisti kitas sistemos dalis – pavyzdžiui, visai nudilusios kaladėlės greitai sugadina diskus, todėl remontas pabrangsta. Jei pastebėjote kurį nors iš aukščiau išvardintų požymių, automobilį verta patikrinti kuo greičiau.",
        ],
      },
    ],
    faqTitle: 'Dažni klausimai apie stabdžių remontą',
    faq: [
      { q: 'Kaip suprasti, kad reikia keisti stabdžių kaladėles?', a: 'Dažniausi požymiai – cypimas ar šlifavimo garsas stabdant, ilgesnis stabdymo kelias ir užsidegusi kaladėlių dėvėjimosi lemputė. Tiksliausiai nusidėvėjimą įvertina apžiūra servise.' },
      { q: 'Ar kartu su kaladėlėmis reikia keisti ir diskus?', a: 'Ne visada. Diskai keičiami, jei jų storis pasiekė gamintojo nurodytą minimumą, jie deformuoti ar stipriai įbrėžti; kitu atveju pakanka pakeisti kaladėles.' },
      { q: 'Ar stabdžių kaladėles reikia keisti poromis?', a: 'Taip, kaladėlės keičiamos visai ašiai iš karto – abiejuose ratuose. Taip automobilis stabdo tolygiai ir netraukia į šoną.' },
      { q: 'Kiek kainuoja stabdžių remontas?', a: `Kaina priklauso nuo automobilio, ašies ir to, kurias dalis reikia keisti. Tikslią kainą suderiname prieš darbus – skambinkite ${PHONE}.` },
      { q: 'Kur Vilniuje pakeisti stabdžių kaladėles?', a: 'Leonardo autoservisas stabdžių kaladėles, diskus ir stabdžių skystį keičia adresu Laisvės pr. 125, Pašilaičiuose, Vilniuje.' },
      { q: "Kaip dažnai keisti stabdžių skystį?", a: "Stabdžių skysčio keitimo intervalą nurodo automobilio gamintojas – dažniausiai kas kelerius metus. Jei nežinote, kada skystis keistas paskutinį kartą, jo būklę galima patikrinti servise." },
      { q: "Kiek laiko trunka stabdžių kaladėlių keitimas?", a: "Laikas priklauso nuo automobilio ir nuo to, ar keičiamos tik kaladėlės, ar ir diskai. Tiksliau pasakysime susitardami dėl laiko telefonu." },
    ],
    related: ['tepalu-keitimas', 'vaziuokles-remontas', 'paruosimas-technine-apziurai'],
  },
  {
    slug: 'kompiuterine-diagnostika',
    name: 'Kompiuterinė diagnostika',
    h1: 'Kompiuterinė automobilio diagnostika',
    keyword: 'kompiuterinė diagnostika Vilniuje',
    keywords: ['klaidų nuskaitymas', 'check engine', 'automobilio diagnostika Pašilaičiuose'],
    title: 'Kompiuterinė diagnostika Vilniuje | Leonardo autoservisas',
    description: 'Kompiuterinė automobilio diagnostika Vilniuje: klaidų kodų nuskaitymas, kai dega „Check Engine“. Laisvės pr. 125, Pašilaičiai. Skambinkite +370 699 47163.',
    icon: 'diagnostics',
    confirmed: false,
    source: 'tipinė paslauga',
    priceFrom: null,
    summary: 'Valdymo blokų klaidų kodų nuskaitymas, kai užsidega „Check Engine“ ar kita įspėjamoji lemputė.',
    answer: `Kompiuterinė diagnostika – automobilio elektroninių valdymo blokų klaidų kodų ir jutiklių duomenų nuskaitymas specialia įranga. Ji padeda nustatyti, kodėl užsidegė „Check Engine“ ar kita įspėjamoji lemputė. Leonardo autoservisas – Laisvės pr. 125, Pašilaičiai, Vilnius, tel. ${PHONE}.`,
    whenTitle: 'Kada reikia kompiuterinės diagnostikos?',
    when: [
      'Prietaisų skydelyje užsidegė „Check Engine“ ar kita įspėjamoji lemputė.',
      'Variklis dirba netolygiai, trūkčioja arba sumažėjo jo galia.',
      'Neįprastai padidėjo kuro sąnaudos.',
      'Automobilis sunkiai užsiveda.',
      'Automatinė pavarų dėžė pavaras perjungia neįprastai.',
      'Prieš perkant naudotą automobilį.',
    ],
    includesTitle: 'Ką apima kompiuterinė diagnostika?',
    includes: [
      'Klaidų kodų nuskaitymas iš variklio ir kitų valdymo blokų.',
      'Klaidų kodų reikšmės ir galimų priežasčių įvertinimas.',
      'Jutiklių duomenų peržiūra realiuoju laiku.',
      'Rezultatų paaiškinimas ir remonto rekomendacijos.',
      'Klaidų ištrynimas pašalinus gedimą.',
    ],
    process: [
      `Susitariame dėl laiko telefonu ${PHONE}.`,
      'Diagnostikos įrangą prijungiame prie automobilio diagnostikos lizdo ir nuskaitome duomenis.',
      'Įvertiname klaidas ir, jei reikia, papildomai patikriname susijusius mazgus.',
      'Paaiškiname rezultatus ir suderiname tolesnio remonto apimtį bei kainą.',
    ],
    priceTitle: 'Kiek kainuoja kompiuterinė diagnostika?',
    price: [
      `Kaina priklauso nuo automobilio, tikrinamų sistemų skaičiaus ir to, ar reikia papildomų matavimų. Tikslią kainą suderiname prieš darbus – paskambinkite ${PHONE}.`,
    ],
    extra: [
      {
        title: 'Ar užtenka tik ištrinti klaidą?',
        paragraphs: [
          'Klaidos ištrynimas nepašalina gedimo priežasties – jei problema išlieka, lemputė netrukus vėl užsidegs. Klaidos kodas nurodo sistemą ar jutiklį, kuriame aptiktas nukrypimas, tačiau ne visada tiksliai įvardija sugedusią dalį, todėl po diagnostikos dažnai reikia papildomos patikros.',
        ],
      },
      {
        title: "Kokias sistemas galima patikrinti?",
        paragraphs: [
          "Šiuolaikiniuose automobiliuose yra daug elektroninių valdymo blokų: variklio, automatinės pavarų dėžės, stabdžių (ABS, ESP), oro pagalvių, klimato kontrolės ir kitų. Kiek sistemų galima nuskaityti, priklauso nuo automobilio markės, modelio ir naudojamos įrangos. Dažniausiai diagnostika pradedama nuo sistemos, kurios lemputė užsidegė, o prireikus tikrinamos ir susijusios sistemos.",
        ],
      },
      {
        title: "Diagnostika perkant naudotą automobilį",
        paragraphs: [
          "Prieš perkant naudotą automobilį kompiuterinė diagnostika padeda pamatyti išsaugotas klaidas, kurių vairuotojas gali ir nepastebėti. Ji nepakeičia visos apžiūros, tačiau leidžia iš anksto sužinoti apie galimus elektronikos ar variklio valdymo gedimus ir geriau įvertinti automobilio būklę.",
        ],
      },
    ],
    faqTitle: 'Dažni klausimai apie kompiuterinę diagnostiką',
    faq: [
      { q: 'Ką reiškia užsidegusi „Check Engine“ lemputė?', a: 'Ji reiškia, kad variklio valdymo blokas užfiksavo nukrypimą kurioje nors variklio ar išmetimo sistemos dalyje. Tikslią priežastį padeda nustatyti kompiuterinė diagnostika.' },
      { q: 'Ar galima važiuoti, kai dega „Check Engine“?', a: 'Jei lemputė šviečia nuolat, o automobilis važiuoja įprastai, dažniausiai galima atsargiai atvažiuoti iki serviso. Jei lemputė mirksi arba variklis akivaizdžiai dirba blogai, geriau nevažiuoti ir pasitarti telefonu.' },
      { q: 'Kiek trunka kompiuterinė diagnostika?', a: 'Klaidų nuskaitymas trunka neilgai, tačiau jei reikia papildomų matavimų, užtrunka ilgiau. Tikslesnį laiką pasakysime susitardami telefonu.' },
      { q: "Ar diagnostika parodo tikslų gedimą?", a: "Ne visada. Klaidos kodas nurodo, kurioje sistemoje ar kuriame jutiklyje aptiktas nukrypimas, tačiau tikslią priežastį dažnai padeda nustatyti papildoma patikra." },
    ],
    related: ['variklio-remontas', 'technine-prieziura', 'tepalu-keitimas'],
  },
  {
    slug: 'vaziuokles-remontas',
    name: 'Važiuoklės remontas',
    h1: 'Važiuoklės remontas Vilniuje',
    keyword: 'važiuoklės remontas Vilniuje',
    keywords: ['pakabos remontas', 'amortizatoriai', 'šarnyrų keitimas'],
    title: 'Važiuoklės remontas Vilniuje | Leonardo autoservisas',
    description: 'Važiuoklės ir pakabos remontas Vilniuje: amortizatoriai, šarnyrai, traukės, įvorės. Leonardo autoservisas, Laisvės pr. 125. Skambinkite +370 699 47163.',
    icon: 'suspension',
    confirmed: false,
    source: 'tipinė paslauga',
    priceFrom: null,
    summary: 'Pakabos dalių – amortizatorių, šarnyrų, traukių ir įvorių – patikra ir keitimas.',
    answer: `Važiuoklės remontas – automobilio pakabos ir vairo mechanizmo dalių patikra bei susidėvėjusių dalių keitimas: amortizatorių, spyruoklių, šarnyrų, traukių ir įvorių. Leonardo autoservisas važiuoklę remontuoja Laisvės pr. 125, Pašilaičiuose, Vilniuje. Registracija telefonu ${PHONE}.`,
    whenTitle: 'Kada reikia važiuoklės remonto?',
    when: [
      'Važiuojant per nelygumus girdisi bildesys ar kalimas.',
      'Automobilis traukia į šoną arba vairas nebėra tiesus.',
      'Padangos dyla netolygiai.',
      'Vairas tapo laisvas arba sukant girdisi girgždesys.',
      'Automobilis stipriai supasi, „plaukia“ posūkiuose ar stabdant linksta į priekį.',
      'Matomas alyvos nuotėkis ant amortizatoriaus.',
      'Po smūgio į duobę ar bortelį pasikeitė automobilio elgesys kelyje.',
    ],
    includesTitle: 'Ką apima važiuoklės remontas?',
    includes: [
      'Važiuoklės ir vairo mechanizmo laisvumų patikra.',
      'Amortizatorių ir spyruoklių keitimas.',
      'Šarnyrų, vairo traukių ir jų galų keitimas.',
      'Svirčių ir įvorių keitimas.',
      'Stabilizatoriaus traukelių ir įvorių keitimas.',
      'Ratų guolių patikra ir keitimas.',
    ],
    process: [
      `Susitariame dėl laiko telefonu ${PHONE} ir išklausome, kokius požymius pastebėjote.`,
      'Automobilį pakeliame ir patikriname važiuoklės bei vairo mechanizmo laisvumus.',
      'Suderiname keičiamas dalis ir kainą prieš pradedant.',
      'Pakeičiame susidėvėjusias dalis ir patikriname rezultatą.',
    ],
    priceTitle: 'Kiek kainuoja važiuoklės remontas?',
    price: [
      `Kaina priklauso nuo automobilio modelio, keičiamų dalių kiekio ir jų rūšies. Tikslią kainą pasakysime apžiūrėję važiuoklę – darbai ir kaina suderinami prieš pradedant. Skambinkite ${PHONE}.`,
    ],
    extra: [
      {
        title: 'Kodėl po važiuoklės remonto verta patikrinti ratų geometriją?',
        paragraphs: [
          'Keičiant vairo trauką, svirtis ar kitas pakabos dalis gali pasikeisti ratų suvedimo kampai. Netinkama ratų geometrija greitina padangų dėvėjimąsi ir blogina automobilio valdymą, todėl po tokių darbų ratų suvedimą rekomenduojama patikrinti.',
        ],
      },
      {
        title: "Kodėl svarbu laiku sutvarkyti važiuoklę?",
        paragraphs: [
          "Susidėvėjusios pakabos dalys blogina automobilio valdymą ir stabilumą, ilgina stabdymo kelią ir greitina padangų dėvėjimąsi. Be to, vienos dalies gedimas dažnai padidina apkrovą kitoms – pavyzdžiui, sugedęs amortizatorius greičiau dėvi atramas ir padangas. Laiku pakeitus susidėvėjusią dalį, išvengiama didesnio remonto.",
        ],
      },
      {
        title: "Kada tikrinti važiuoklę?",
        paragraphs: [
          "Važiuoklę verta patikrinti bent kartą per metus, pavyzdžiui, keičiant padangas sezonui, taip pat po stipraus smūgio į duobę ar bortelį. Patikra ypač naudinga prieš techninę apžiūrą, nes važiuoklės laisvumai – vienas dažniausiai vertinamų dalykų.",
        ],
      },
    ],
    faqTitle: 'Dažni klausimai apie važiuoklės remontą',
    faq: [
      { q: 'Kaip suprasti, kad sugedę amortizatoriai?', a: 'Dažniausi požymiai – automobilis po nelygumo ilgai supasi, stabdant stipriai linksta į priekį, ant amortizatoriaus matomas alyvos nuotėkis, o padangos dyla dėmėmis.' },
      { q: 'Ar galima pakeisti tik vieną amortizatorių?', a: 'Amortizatorius rekomenduojama keisti poromis toje pačioje ašyje. Taip abiejų pusių pakaba veikia vienodai ir automobilis išlieka stabilus.' },
      { q: 'Kiek kainuoja važiuoklės remontas?', a: `Kaina priklauso nuo automobilio ir keičiamų dalių. Ją suderiname apžiūrėję važiuoklę ir prieš pradedant darbus – skambinkite ${PHONE}.` },
      { q: "Ar galima važiuoti su bildančia važiuokle?", a: "Trumpą atstumą iki serviso dažniausiai galima nuvažiuoti atsargiai, tačiau ilgai delsti nerekomenduojama – bildesys gali reikšti laisvą ar lūžusią dalį, kuri blogina valdymą." },
      { q: "Kaip dažnai keisti amortizatorius?", a: "Amortizatorių tarnavimo laikas priklauso nuo kelių būklės, apkrovos ir vairavimo stiliaus, todėl vieno intervalo nėra. Jų būklę verta patikrinti per periodinę priežiūrą arba pajutus pirmuosius požymius." },
    ],
    related: ['stabdziu-remontas', 'padangu-montavimas', 'paruosimas-technine-apziurai'],
  },
  {
    slug: 'technine-prieziura',
    name: 'Techninė priežiūra ir filtrų keitimas',
    h1: 'Automobilio techninė priežiūra ir filtrų keitimas',
    keyword: 'automobilio techninė priežiūra Vilniuje',
    keywords: ['oro filtras', 'salono filtras', 'periodinis aptarnavimas'],
    title: 'Automobilio techninė priežiūra | Leonardo autoservisas',
    description: 'Automobilio techninė priežiūra Vilniuje: oro, salono ir kuro filtrų keitimas, skysčių patikra. Laisvės pr. 125, Pašilaičiai. Skambinkite +370 699 47163.',
    icon: 'maintenance',
    confirmed: false,
    source: 'tipinė paslauga',
    priceFrom: null,
    summary: 'Periodinė priežiūra: oro, salono ir kuro filtrų keitimas, skysčių ir pagrindinių mazgų patikra.',
    answer: `Automobilio techninė priežiūra – periodiniai darbai pagal gamintojo intervalus: filtrų keitimas, skysčių lygių ir pagrindinių mazgų patikra. Reguliari priežiūra padeda smulkius gedimus pastebėti laiku. Leonardo autoservisas – Laisvės pr. 125, Pašilaičiai, Vilnius, tel. ${PHONE}.`,
    whenTitle: 'Kada reikia techninės priežiūros?',
    when: [
      'Suėjo serviso knygelėje ar prietaisų skydelyje nurodytas intervalas.',
      'Įsigijote naudotą automobilį ir nežinote jo priežiūros istorijos.',
      'Salone jaučiamas nemalonus kvapas arba dažnai rasoja langai – gali būti užsikimšęs salono filtras.',
      'Artėja žiemos arba vasaros sezonas.',
      'Planuojate ilgesnę kelionę.',
    ],
    includesTitle: 'Ką apima techninė priežiūra?',
    includes: [
      'Oro filtro keitimas.',
      'Salono filtro keitimas.',
      'Kuro filtro keitimas, jei to reikalauja gamintojas.',
      'Aušinimo, stabdžių ir langų plovimo skysčių lygių patikra.',
      'Diržų, žarnų ir apšvietimo apžiūra.',
      'Valytuvų ir langų plovimo sistemos patikra.',
      'Pastebėtų trūkumų aptarimas su jumis.',
    ],
    process: [
      `Susitariame dėl laiko telefonu ${PHONE}; jei turite serviso knygelę, pasiimkite ją.`,
      'Pagal gamintojo intervalus nustatome, kuriuos darbus atlikti dabar.',
      'Suderiname darbų sąrašą ir kainą.',
      'Atliekame priežiūrą ir pasakome, ką pastebėjome.',
    ],
    priceTitle: 'Kiek kainuoja techninė priežiūra?',
    price: [
      `Kaina priklauso nuo automobilio ir to, kuriuos filtrus bei darbus reikia atlikti pagal gamintojo intervalą. Darbų sąrašas ir kaina suderinami prieš pradedant – skambinkite ${PHONE}.`,
    ],
    extra: [
      {
        title: 'Kuo skiriasi oro ir salono filtrai?',
        paragraphs: [
          'Oro filtras valo orą, kuris patenka į variklį – užsikimšęs jis gali padidinti kuro sąnaudas ir sumažinti galią. Salono filtras valo į saloną tiekiamą orą nuo dulkių ir žiedadulkių. Abu filtrai keičiami pagal gamintojo intervalą, o esant dulkėtoms sąlygoms – dažniau.',
        ],
      },
      {
        title: "Kodėl verta laikytis gamintojo priežiūros intervalų?",
        paragraphs: [
          "Gamintojo intervalai sudaryti taip, kad susidėvinčios dalys ir skysčiai būtų pakeisti, kol dar nespėjo pakenkti kitiems mazgams. Reguliariai prižiūrimas automobilis rečiau sugenda netikėtai, o pažymėta priežiūros istorija naudinga ir parduodant automobilį.",
        ],
      },
      {
        title: "Ką patikrinti prieš žiemą?",
        paragraphs: [
          "Prieš šaltąjį sezoną verta patikrinti akumuliatoriaus būklę, aušinimo skysčio užšalimo temperatūrą, langų plovimo skystį, valytuvų būklę ir apšvietimą. Tai padeda išvengti nemalonių staigmenų pirmųjų šalčių metu.",
        ],
      },
    ],
    faqTitle: 'Dažni klausimai apie techninę priežiūrą',
    faq: [
      { q: 'Kaip dažnai reikia techninės priežiūros?', a: 'Dažnumą nustato automobilio gamintojas – jis nurodomas serviso knygelėje arba rodomas prietaisų skydelyje. Dažniausiai intervalas apibrėžiamas rida ir laiku.' },
      { q: 'Kada keisti salono filtrą?', a: 'Salono filtras keičiamas pagal gamintojo intervalą, dažnai kartu su kitais priežiūros darbais. Jei salone jaučiamas kvapas ar silpnai pučia ventiliacija, filtrą verta pakeisti anksčiau.' },
      { q: 'Ar kartu galima pakeisti ir tepalus?', a: `Taip, tepalų keitimą galima atlikti kartu su kitais priežiūros darbais. Tai patogu suderinti registruojantis telefonu ${PHONE}.` },
      { q: "Ar priežiūra reikalinga, jei automobilis važiuoja gerai?", a: "Taip. Daugelis dalių ir skysčių sensta palaipsniui, todėl jų būklė ne visada jaučiama vairuojant. Periodinė priežiūra padeda pastebėti problemas anksčiau, nei jos tampa gedimais." },
      { q: "Ar svarbi serviso knygelė?", a: "Serviso knygelėje arba elektroninėje priežiūros istorijoje nurodyti gamintojo intervalai ir atlikti darbai. Turėdami ją, lengviau nustatysime, kokių darbų reikia dabar." },
    ],
    related: ['tepalu-keitimas', 'paruosimas-technine-apziurai', 'kompiuterine-diagnostika'],
  },
  {
    slug: 'paruosimas-technine-apziurai',
    name: 'Paruošimas techninei apžiūrai',
    h1: 'Automobilio paruošimas techninei apžiūrai',
    keyword: 'paruošimas techninei apžiūrai Vilniuje',
    keywords: ['TA paruošimas', 'pasiruošimas techninei apžiūrai'],
    title: 'Paruošimas techninei apžiūrai | Leonardo autoservisas',
    description: 'Automobilio paruošimas techninei apžiūrai Vilniuje: stabdžių, apšvietimo, važiuoklės ir padangų patikra. Laisvės pr. 125. Skambinkite +370 699 47163.',
    icon: 'inspection',
    confirmed: false,
    source: 'tipinė paslauga',
    priceFrom: null,
    summary: 'Stabdžių, apšvietimo, važiuoklės ir išmetimo sistemos patikra bei trūkumų šalinimas prieš techninę apžiūrą.',
    answer: `Paruošimas techninei apžiūrai – automobilio patikra pagal dažniausiai vertinamus mazgus ir rastų trūkumų pašalinimas prieš vykstant į techninės apžiūros centrą. Leonardo autoservisas automobilius ruošia Laisvės pr. 125, Pašilaičiuose, Vilniuje. Registracija telefonu ${PHONE}.`,
    whenTitle: 'Kada verta paruošti automobilį techninei apžiūrai?',
    when: [
      'Artėja privalomosios techninės apžiūros terminas.',
      'Ankstesnėje apžiūroje buvo rasta trūkumų.',
      'Automobilis ilgai nebuvo prižiūrimas servise.',
      'Prietaisų skydelyje dega įspėjamosios lemputės.',
      'Perkate arba parduodate naudotą automobilį.',
    ],
    includesTitle: 'Ką apima paruošimas techninei apžiūrai?',
    includes: [
      'Stabdžių būklės ir veikimo patikra.',
      'Apšvietimo ir signalizavimo įrenginių patikra.',
      'Važiuoklės ir vairo mechanizmo laisvumų patikra.',
      'Padangų protektoriaus ir būklės įvertinimas.',
      'Išmetimo sistemos sandarumo patikra.',
      'Stiklų, valytuvų ir skysčių nuotėkių apžiūra.',
      'Įspėjamųjų lempučių prietaisų skydelyje patikra.',
    ],
    process: [
      `Susitariame dėl laiko telefonu ${PHONE}.`,
      'Patikriname automobilį pagal dažniausiai vertinamus mazgus.',
      'Pateikiame rastų trūkumų sąrašą ir suderiname taisymo kainą.',
      'Pašaliname trūkumus – automobilis paruoštas vykti į apžiūrą.',
    ],
    priceTitle: 'Kiek kainuoja paruošimas techninei apžiūrai?',
    price: [
      `Kaina priklauso nuo automobilio būklės ir to, kokių trūkumų bus rasta. Patikros rezultatus ir taisymo kainą suderiname prieš darbus – skambinkite ${PHONE}.`,
    ],
    extra: [
      {
        title: "Kodėl verta patikrinti automobilį iš anksto?",
        paragraphs: [
          "Jei techninėje apžiūroje randama trūkumų, juos reikia pašalinti ir atvykti pakartotinai. Patikrinus automobilį iš anksto, trūkumus galima sutvarkyti vienu kartu ir sutaupyti laiko. Dalį smulkių trūkumų – pavyzdžiui, perdegusią lemputę ar susidėvėjusį valytuvą – sutvarkyti paprasta, tačiau dėl jų apžiūros galima neišlaikyti.",
        ],
      },
      {
        title: 'Kas dažniausiai lemia neišlaikytą techninę apžiūrą?',
        paragraphs: [
          'Dažniausiai trūkumų randama apšvietime (perdegusios lemputės, netinkamai nureguliuoti žibintai), stabdžiuose, važiuoklės laisvumuose ir padangose. Taip pat dažnai vertinami išmetamųjų dujų rodikliai ir skysčių nuotėkiai. Šiuos mazgus patikrinus iš anksto, į apžiūrą galima vykti ramiau.',
        ],
      },
      {
        title: "Ką galite patikrinti patys?",
        paragraphs: [
          "Prieš atvykdami galite patys apžiūrėti, ar veikia visi žibintai, posūkių ir stabdžių žibintai, ar nėra įskilimų priekiniame stikle, ar gerai valo valytuvai ir ar padangų protektorius nėra per daug nusidėvėjęs. Visa kita patikrinsime servise.",
        ],
      },
    ],
    faqTitle: 'Dažni klausimai apie paruošimą techninei apžiūrai',
    faq: [
      { q: 'Ar jūs atliekate techninę apžiūrą?', a: 'Ne, privalomąją techninę apžiūrą atlieka techninės apžiūros centrai. Leonardo autoservisas padeda automobilį jai paruošti: patikrina ir pašalina trūkumus.' },
      { q: 'Kiek laiko prieš apžiūrą verta atvykti?', a: 'Geriausia atvykti likus bent kelioms dienoms iki apžiūros, kad liktų laiko užsakyti ir pakeisti reikalingas dalis.' },
      { q: 'Ką daryti, jei apžiūroje buvo rasta trūkumų?', a: `Atsivežkite apžiūros protokolą – pagal jį patikrinsime ir sutvarkysime nurodytus trūkumus. Dėl laiko susitarkite telefonu ${PHONE}.` },
      { q: "Kiek trunka paruošimas techninei apžiūrai?", a: "Patikra trunka neilgai, o trūkumų taisymo laikas priklauso nuo to, ką reikės pakeisti. Tiksliau pasakysime apžiūrėję automobilį." },
      { q: "Kas bus, jei apžiūros neišlaikysiu?", a: "Neišlaikius apžiūros, išduodamas protokolas su rastais trūkumais. Juos pašalinus, automobilį reikia pateikti pakartotinei apžiūrai per nustatytą terminą." },
      { q: "Ar galima atvykti be išankstinės registracijos?", a: "Rekomenduojame registruotis iš anksto telefonu, kad patikrai ir galimam remontui užtektų laiko iki apžiūros datos." },
    ],
    related: ['stabdziu-remontas', 'vaziuokles-remontas', 'padangu-montavimas'],
  },
  {
    slug: 'padangu-montavimas',
    name: 'Padangų montavimas',
    h1: 'Padangų montavimas ir keitimas',
    keyword: 'padangų montavimas Vilniuje',
    keywords: ['ratų keitimas', 'balansavimas', 'padangų keitimas Pašilaičiuose'],
    title: 'Padangų montavimas Vilniuje | Leonardo autoservisas',
    description: 'Padangų montavimas ir ratų balansavimas Vilniuje, Pašilaičiuose. Sezoninis ratų keitimas Laisvės pr. 125. Registracija telefonu +370 699 47163.',
    icon: 'tire',
    confirmed: false,
    source: 'tipinė paslauga',
    priceFrom: null,
    summary: 'Padangų montavimas, sezoninis ratų keitimas ir balansavimas.',
    answer: `Padangų montavimas – padangų uždėjimas ant ratlankių, ratų balansavimas ir sumontavimas ant automobilio. Leonardo autoservisas padangas montuoja ir ratus keičia Laisvės pr. 125, Pašilaičiuose, Vilniuje. Prieš sezoną rekomenduojama registruotis iš anksto telefonu ${PHONE}.`,
    whenTitle: 'Kada reikia keisti padangas?',
    when: [
      'Keičiasi sezonas: Lietuvoje žieminės padangos privalomos nuo lapkričio 10 d. iki kovo 31 d.',
      'Protektorius nusidėvėjęs: vasarinių padangų minimalus gylis – 1,6 mm, žieminių – 3 mm.',
      'Padanga pradurta, įtrūkusi ar turi išsipūtimą šone.',
      'Važiuojant didesniu greičiu jaučiama vairo vibracija – gali reikėti balansavimo.',
    ],
    includesTitle: 'Ką apima padangų montavimas?',
    includes: [
      'Ratų nuėmimas ir uždėjimas.',
      'Padangų nuėmimas nuo ratlankių ir sumontavimas.',
      'Ratų balansavimas.',
      'Padangų slėgio patikra ir nustatymas.',
      'Ratų varžtų priveržimas reikiamu momentu.',
      'Padangų būklės apžiūra.',
    ],
    process: [
      `Užsiregistruojate telefonu ${PHONE} – sezono metu laisvų laikų mažiau.`,
      'Nuimame ratus ir įvertiname padangų būklę.',
      'Sumontuojame padangas, subalansuojame ratus.',
      'Uždedame ratus, priveržiame varžtus ir patikriname slėgį.',
    ],
    priceTitle: 'Kiek kainuoja padangų montavimas?',
    price: [
      `Kaina priklauso nuo ratlankių skersmens ir tipo, padangų rūšies ir to, ar reikia tik keisti ratus, ar ir montuoti padangas. Tikslią kainą pasakysime telefonu ${PHONE}.`,
    ],
    extra: [
      {
        title: 'Kodėl ratus reikia balansuoti?',
        paragraphs: [
          'Net nauja padanga ir ratlankis turi nedidelių masės netolygumų. Nesubalansuotas ratas sukelia vairo vibraciją, greičiau dėvi padangas ir pakabos dalis, todėl montuojant padangas ratai visada balansuojami.',
        ],
      },
      {
        title: "Kaip patikrinti padangų slėgį?",
        paragraphs: [
          "Rekomenduojamas slėgis nurodomas gamintojo lipduke – dažniausiai ant vairuotojo durelių staktos, degalų bako dangtelio vidinėje pusėje arba naudotojo vadove. Slėgį verta tikrinti kartą per mėnesį ir prieš ilgesnę kelionę, kai padangos šaltos. Per mažas slėgis didina kuro sąnaudas ir greitina padangų dėvėjimąsi.",
        ],
      },
      {
        title: "Kaip laikyti sezonines padangas?",
        paragraphs: [
          "Nenaudojamas padangas geriausia laikyti vėsioje, sausoje ir tamsioje vietoje, atokiau nuo šildymo prietaisų ir tirpiklių. Padangas su ratlankiais patogu laikyti gulsčias arba pakabintas, o be ratlankių – stačias, retkarčiais jas pasukant.",
        ],
      },
    ],
    faqTitle: 'Dažni klausimai apie padangų montavimą',
    faq: [
      { q: 'Kada keisti padangas į žiemines?', a: 'Lietuvoje žieminės padangos privalomos nuo lapkričio 10 d. iki kovo 31 d. Rudenį ratus verta pasikeisti iš anksto, kai oro temperatūra nukrenta iki kelių laipsnių.' },
      { q: 'Ar reikia balansuoti ratus kiekvieną sezoną?', a: 'Jei padangos montuojamos ant ratlankių iš naujo – taip. Jei keičiami jau subalansuoti ratai, balansavimas rekomenduojamas pajutus vibraciją.' },
      { q: 'Kiek kainuoja padangų montavimas?', a: `Kaina priklauso nuo ratlankių dydžio ir darbų apimties. Ją pasakysime telefonu ${PHONE}.` },
      { q: "Ar galima montuoti skirtingas padangas toje pačioje ašyje?", a: "Ne, toje pačioje ašyje turi būti to paties dydžio, tipo ir sezoniškumo padangos. Geriausia, kad jos būtų ir to paties gamintojo bei modelio." },
      { q: "Kodėl važiuojant vibruoja vairas?", a: "Dažniausia priežastis – nesubalansuoti ratai, ypač jei vibracija jaučiama tam tikru greičiu. Ją taip pat gali sukelti deformuotas ratlankis, pažeista padanga ar važiuoklės gedimas, todėl verta patikrinti." },
      { q: "Kada galima keisti padangas į vasarines?", a: "Lietuvoje žieminės padangos privalomos iki kovo 31 d., todėl vasarines galima montuoti nuo balandžio 1 d. Jas verta uždėti, kai oro temperatūra nuolat laikosi aukštesnė nei keli laipsniai šilumos." },
    ],
    related: ['vaziuokles-remontas', 'stabdziu-remontas', 'paruosimas-technine-apziurai'],
  },
  {
    slug: 'variklio-remontas',
    name: 'Variklio remontas',
    h1: 'Variklio remontas Vilniuje',
    keyword: 'variklio remontas Vilniuje',
    keywords: ['variklio gedimai', 'diržų keitimas', 'paskirstymo diržo keitimas'],
    title: 'Variklio remontas Vilniuje | Leonardo autoservisas',
    description: 'Variklio remontas Vilniuje: gedimų nustatymas, paskirstymo ir kitų diržų keitimas, sandarinimas. Laisvės pr. 125, Pašilaičiai. Skambinkite +370 699 47163.',
    icon: 'engine',
    confirmed: false,
    source: 'tipinė paslauga',
    priceFrom: null,
    summary: 'Variklio gedimų nustatymas ir šalinimas, paskirstymo ir kitų diržų keitimas.',
    answer: `Variklio remontas – variklio gedimų nustatymas ir šalinimas: nuo diržų, tarpinių ir sandariklių keitimo iki sudėtingesnių darbų. Leonardo autoservisas variklius remontuoja Laisvės pr. 125, Pašilaičiuose, Vilniuje. Darbų apimtis ir kaina suderinamos prieš pradedant, tel. ${PHONE}.`,
    whenTitle: 'Kada reikia variklio remonto?',
    when: [
      'Dega variklio („Check Engine“) lemputė.',
      'Variklis dirba netolygiai, trūkčioja arba prarado galią.',
      'Girdisi pašaliniai garsai – kalimas, švilpimas ar barškėjimas.',
      'Po automobiliu matomos tepalų ar aušinimo skysčio dėmės.',
      'Iš išmetimo vamzdžio rūksta mėlyni, balti ar juodi dūmai.',
      'Variklis perkaista.',
      'Artėja gamintojo nurodytas paskirstymo diržo keitimo intervalas.',
    ],
    includesTitle: 'Ką apima variklio remontas?',
    includes: [
      'Gedimo priežasties nustatymas.',
      'Paskirstymo diržo ar grandinės komplekto keitimas.',
      'Pagalbinių diržų keitimas.',
      'Tarpinių ir sandariklių keitimas, nuotėkių šalinimas.',
      'Uždegimo žvakių ir ričių keitimas.',
      'Aušinimo sistemos dalių – vandens pompos, termostato – keitimas.',
    ],
    process: [
      `Susitariame dėl laiko telefonu ${PHONE} ir išklausome, kokius požymius pastebėjote.`,
      'Nustatome gedimo priežastį.',
      'Suderiname darbų apimtį, dalis ir kainą prieš pradedant.',
      'Atliekame remontą ir patikriname variklio darbą.',
    ],
    priceTitle: 'Kiek kainuoja variklio remontas?',
    price: [
      `Variklio remonto kaina labai priklauso nuo gedimo, automobilio modelio ir reikalingų dalių. Ją galima nurodyti tik nustačius priežastį – darbai ir kaina suderinami prieš pradedant. Skambinkite ${PHONE}.`,
    ],
    extra: [
      {
        title: 'Kodėl svarbu laiku pakeisti paskirstymo diržą?',
        paragraphs: [
          'Paskirstymo diržas sinchronizuoja alkūninio ir skirstomojo velenų darbą. Daugelyje variklių nutrūkus diržui susiduria vožtuvai ir stūmokliai, o remontas tampa gerokai sudėtingesnis ir brangesnis. Keitimo intervalą nustato gamintojas – jį verta laikyti.',
        ],
      },
      {
        title: "Ką reiškia dūmų spalva?",
        paragraphs: [
          "Mėlyni dūmai dažniausiai rodo, kad variklyje dega tepalai. Balti, tiršti ir saldoko kvapo dūmai gali reikšti, kad į cilindrus patenka aušinimo skystis. Juodi dūmai dažniausiai susiję su per turtingu kuro mišiniu, pavyzdžiui, dėl purkštukų ar oro tiekimo problemų. Nedideli balti garai šaltą dieną ką tik užvedus variklį yra normalūs.",
        ],
      },
      {
        title: "Kaip išvengti brangaus variklio remonto?",
        paragraphs: [
          "Daugelio brangių variklio gedimų galima išvengti laikantis gamintojo priežiūros intervalų: laiku keičiant tepalus, filtrus, paskirstymo diržą ir aušinimo skystį. Taip pat svarbu nedelsti pastebėjus pirmuosius požymius – degančią lemputę, neįprastus garsus ar nuotėkius.",
        ],
      },
    ],
    faqTitle: 'Dažni klausimai apie variklio remontą',
    faq: [
      { q: 'Kada keisti paskirstymo diržą?', a: 'Paskirstymo diržas keičiamas pagal gamintojo nurodytą ridą arba laiką – kas įvyksta anksčiau. Intervalą rasite serviso knygelėje arba pasakysime telefonu.' },
      { q: 'Ar galima važiuoti, jei variklis kala?', a: 'Pašaliniai garsai variklyje gali reikšti rimtą gedimą, todėl važiuoti nerekomenduojama. Pirmiausia paskambinkite ir pasitarkite.' },
      { q: 'Kiek kainuoja variklio remontas?', a: `Kaina priklauso nuo gedimo ir automobilio. Ją suderiname nustatę priežastį ir prieš pradedant darbus – skambinkite ${PHONE}.` },
      { q: "Kodėl variklis perkaista?", a: "Dažniausios priežastys – trūkstamas aušinimo skystis, sugedęs termostatas, vandens pompa ar ventiliatorius. Perkaitus variklį reikia sustoti ir jį išjungti, kad nebūtų pažeista cilindrų galvutė." },
      { q: "Ką daryti, jei po automobiliu atsirado dėmė?", a: "Pirmiausia atkreipkite dėmesį į spalvą: rudos ar juodos dėmės dažniausiai rodo tepalų nuotėkį, žalios, rožinės ar mėlynos – aušinimo skysčio. Bet kokį nuotėkį verta patikrinti, nes trūkstant skysčių variklis gali būti pažeistas." },
    ],
    related: ['kompiuterine-diagnostika', 'tepalu-keitimas', 'technine-prieziura'],
  },
];

/** Rodomos paslaugos (pagal SHOW_UNCONFIRMED_SERVICES). Patvirtintos – pirmos. */
export const services: Service[] = allServices
  .filter((s) => s.confirmed || SHOW_UNCONFIRMED_SERVICES)
  .sort((a, b) => Number(b.confirmed) - Number(a.confirmed));

export const unconfirmedServices = allServices.filter((s) => !s.confirmed);
export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
export const relatedServices = (s: Service) =>
  s.related.map(serviceBySlug).filter((x): x is Service => Boolean(x)).slice(0, 3);
export const serviceUrl = (s: Service) => `/paslaugos/${s.slug}/`;
export const formatPrice = (n: number) => `nuo ${n.toLocaleString('lt-LT')} €`;
