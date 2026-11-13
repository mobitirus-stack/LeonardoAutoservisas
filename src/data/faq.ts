// Pagrindinio puslapio DUK. FAQPage schema generuojama iš to paties teksto.
import { site, SHOW_UNCONFIRMED_SERVICES, filled } from '../config/site';
import type { QA } from './services';

const P = site.phone;

export const homeFaq: QA[] = [
  {
    q: 'Kur yra Leonardo autoservisas?',
    a: `Leonardo autoservisas yra Vilniuje, Pašilaičiuose, adresu ${site.address.full}, prie Laisvės prospekto. Maršrutą patogiausia atsidaryti per „Google Maps“ nuorodą šioje svetainėje.`,
  },
  {
    q: 'Kokios Leonardo autoserviso darbo valandos?',
    a: `Leonardo autoservisas dirba darbo dienomis nuo 08:00 iki 17:00, savaitgaliais nedirba. Prieš atvykstant rekomenduojame paskambinti telefonu ${P}.`,
  },
  {
    q: 'Ar keičiate tepalus?',
    a: `Taip, tepalų keitimas – viena pagrindinių Leonardo autoserviso paslaugų. Keičiami variklio tepalai ir tepalų filtras; dėl laiko susitarkite telefonu ${P}.`,
  },
  {
    q: 'Ar taisote stabdžius?',
    a: 'Taip, Leonardo autoservisas remontuoja stabdžių sistemą: tikrina ir keičia stabdžių kaladėles, diskus ir stabdžių skystį. Jei stabdant girdisi pašaliniai garsai, automobilį verta patikrinti kuo greičiau.',
  },
  ...(SHOW_UNCONFIRMED_SERVICES
    ? [
        { q: 'Ar atliekate kompiuterinę diagnostiką?', a: `Taip, Leonardo autoservisas nuskaito automobilio valdymo blokų klaidų kodus, kai užsidega „Check Engine“ ar kita įspėjamoji lemputė. Dėl laiko susitarkite telefonu ${P}.` },
        { q: 'Ar keičiate padangas ir ratus?', a: 'Taip, montuojame padangas, keičiame ir balansuojame ratus. Sezono metu rekomenduojame registruotis iš anksto.' },
      ]
    : []),
  {
    q: 'Ar reikia registruotis iš anksto?',
    a: `Rekomenduojame registruotis iš anksto telefonu ${P}. Taip susitarsite dėl jums patogaus laiko ir išvengsite laukimo.`,
  },
  {
    q: 'Kiek kainuoja tepalų keitimas?',
    a: 'Tepalų keitimo kaina priklauso nuo automobilio variklio, alyvos kiekio ir specifikacijos bei tepalų filtro. Kaina suderinama prieš pradedant darbus.',
  },
  {
    q: 'Kaip atvykti ir kur pasistatyti automobilį?',
    a: filled(site.parking)
      ? `Leonardo autoservisas yra adresu ${site.address.full}. ${site.parking}`
      : `Leonardo autoservisas yra adresu ${site.address.full}, Pašilaičiuose, prie Laisvės prospekto. Tikslų įvažiavimą ir vietą automobiliui pasakysime paskambinus ${P}.`,
  },
  {
    q: 'Kokį įvertinimą Leonardo autoservisas turi „Google“?',
    a: `Leonardo autoservisas „Google“ turi ${site.rating.valueText} iš 5 įvertinimą pagal ${site.rating.count} atsiliepimus (${site.rating.asOf} duomenimis). Atsiliepimus galite perskaityti „Google Maps“.`,
  },
];
