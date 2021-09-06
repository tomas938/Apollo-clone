export const services = [
  {
    id: 1,
    description: 'Wifi pripojenie zdarma a bez hesla',
    img: 'home-1.svg',
  },
  {
    id: 2,
    description: 'Výhodná ponuka pre rodinné izby',
    img: 'home-2.svg',
  },
  {
    id: 3,
    description: 'Ubytovanie aj so štvornohým priateľom',
    img: 'home-3.svg',
  },
  {
    id: 4,
    description: 'Bohaté bufetové raňajky',
    img: 'home-4.svg',
  },
  {
    id: 5,
    description: 'Moderne zariadené konferenčné priestory',
    img: 'home-5.svg',
  },
  {
    id: 6,
    description: 'Wellness pre oddych a relax',
    img: 'home-6.svg',
  },
  {
    id: 7,
    description: 'Room service',
    img: 'home-7.svg',
  },
  {
    id: 8,
    description: 'Parkovisko priamo pred hotelom',
    img: 'home-8.svg',
  },
]
export const reviews = [
  {
    id: 1,
    personInformation: 'Lucia V, Praha, Česká republika, Tripadvisor',
    title: 'Vždy spokojenost, fantastické snídaně',
    description:
      'Do hotelu jezdím pravidelně na služební cesty a vždy maximální spokojenost. Pokoje jsou prostorné, jídlo v hotelu vynikající, ať už se jedná o jídlo servírované v restauraci nebo velmi bohaté snídaně. Obsluha příjemná.',
    img: 'review-1.jpg',
  },
  {
    id: 2,
    personInformation: 'Simona Prochaczkova, Facebook',
    title: 'Svadba v Apollo hoteli',
    description:
      'Prednedavnom sme mali svadobnu hostinu v restauracii Sv. Huberta. Musim povedat, ze s organizovanim aj priebehom celeho eventu sme boli nadmieru spokojni. Krasne priestory, ochotny a mily personal, ktory presne splnil nase poziadavky, ustretovy pristup pri planovani dna na x- stretnutiach ci pri mnohych vymenenych emailoch (s rychlou odozvou), od event managerky. V buducnosti urcite radi vyuzijeme ich sluzby opat.',
    img: 'review-2.jpg',
  },
]
export const accomadations = [
  {
    id: 1,
    link: 'ubytovanie',
    type: 'accommodation',
    img: 'accommodation-1.jpg',
    name: 'Kategória Komfort',
  },
  {
    id: 2,
    link: 'ubytovanie',
    type: 'accommodation',
    img: 'accommodation-2.jpg',
    name: 'Kategória Deluxe',
  },
  {
    id: 3,
    link: 'ubytovanie',
    type: 'accommodation',
    img: 'accommodation-3.jpg',
    name: 'Apartmány',
  },
  {
    id: 4,
    link: 'ubytovanie',
    type: 'accommodation',
    img: 'accommodation-4.jpg',
    name: 'Rodinná izba',
  },
]
export const parking = {
  type: 'parking',
  title: 'Parkovanie',
  subTitleInfo: 'Základné informácie a organizácia',
  navigation:
    'Vstup na hotelové parkovisko sa nachádza z Páričkovej ulice. Pri vstupe stlačíte tlačidlo, automat Vám vydá lístok a rampa sa otvorí. V prípade, že parkovací automat nereaguje, skúste zacúvať a prísť k rampe znovu. Pravdepodobne Vás nezachytil senzor.',
  capacity:
    'Kapacita hotelového parkoviska je 65 parkovacích miest. Nie je povolené parkovať alebo stáť na prechode pre chodcov, ani na iných miestach vyznačených bielymi pruhmi. Príjazdová cesta je jednosmerná ( východ z hotelového parkoviska sa nachádza na Kvačalovej ul. ).',
  restrictions:
    'Voľný prejazd nie je povolený. V prípade, ak ste priviezli alebo prišli vyzdvihnúť hotelových zákazníkov, lístok Vám do 15 min. zdarma odblokujú na recepcii.',
  subTitlePrice: 'Cena a platba',
  price:
    'Hotelové parkovisko je spoplatnené sumou 1,90 € / hodina. Platbu je možné zrealizovať v parkovacom automate v hotelovej lobby, prípadne priamo na recepcii. Návštevníci hotelovej reštaurácie a lobby baru majú zdarma 90 minút, po prekročení časového limitu je potrebné zaplatiť rozdieľ na recepcii.',
  priceCustomers:
    'Pre ubytovaných hotelových hostí je parkovanie spoplatnené zvýhodnenou paušálnou sumou 9,50 € auto/noc ( lístok je platný do času check-outu, teda 11:00 ). Parkovací lístok si prosím aktivujte na recepcii, po aktivácií s ním môžete až do uplynutia časového limitu kedykoľvek opustiť parkovací priestor a uskutočniť návrat. Platba prebieha na recepcii.',
  others:
    'V prípade, že ste učastníkom konferencie, oslavy, svadby alebo inej udalosti v hotelových priestoroch, informujte sa prosím o možnostiach parkovania u organizátora podujatia.',
  img: ['parking-1.jpg', 'parking-2.jpg', 'parking-3.jpg'],
}
export const wedding = {
  type: 'event-wedding',
  title: 'Konferencie a Eventy',
  subTitle: 'Svadobná hostina v Reštaurácii Sv. Huberta',
  description:
    'Od úvodného prípitku na šťastné manželstvo, až po odchod posledných spokojných hostí sa postaráme o svadbu plnú nádherných zážitkov.',
  listTitle: 'Prečo zorganizovať svadbu v Apollo Hoteli?',
  listDescription: [
    'jedinečná atmosféra priestorov s výhľadom na námestie so sochou „Milencov“',
    'výber z rôznych druhov svadobných sedení',
    'možnosť prípravy obradnej miestnosti priamo v hoteli',
    'vychýrená kuchyňa',
    'ubytovanie pre mladomanželov s raňajkami na izbu grátis',
    'poradenstvo a dlhoročné skúsenosti pri organizácii svadieb',
    'dar Apollo Hotela pre novomanželov – darčekový poukaz na slávnostnú večeru s prípitkom v reštaurácii Sv. Huberta k 1. výročiu sobáša',
    'cenovo výhodné svadobné menu od 39 € / osoba',
  ],
  img: [
    'wedding-1.jpg',
    'wedding-2.jpg',
    'wedding-3.jpg',
    'wedding-4.jpg',
    'wedding-5.jpg',
  ],
}
export const party = {
  type: 'event-party',
  subtitle: 'Oslava v jednom z našich súkromných salónikov',
  description: 'Už viac ako 20 rokov sme súčasťou Vašich výnimočných dní.',
  listDescription: [
    'Každý zo salóníkov má kapacitu približne 50 hostí',
    'Levante je zariadený v štýle francúzskej elegancie s originálmi malieb od známeho súčasného slovenského umelca J. Ťapáka',
    'Súčasťou salónika Levante je menšia terasa',
    'V prípade osláv alebo svadieb je možné pripraviť parket na tancovanie',
    'Salóniky Levante, Poľovník a Reštaurácia Sv. Huberta sú navzájom prepojiteľné',
  ],
  img: ['party-1.jpg', 'party-2.jpg', 'party-3.jpg', 'party-4.jpg'],
}
export const conference = {
  type: 'event-conference',
  subtitle: 'Konferenčné centrum',
  listDescription: [
    '3 navzájom prepojiteľné sály s kapacitou do 120 hostí',
    'príjemné prostredie',
    'denné svetlo',
    'moderné technické vybavenie',
    'možnosť posedenia na Galérii pred konferenčnými priestormi',
  ],
  img: [
    'conference-1.jpg',
    'conference-2.jpg',
    'conference-3.jpg',
    'conference-4.jpg',
    'conference-5.jpg',
    'conference-6.jpg',
    'conference-7.jpg',
    'conference-8.jpg',
  ],
}
export const wellnes = [
  {
    id: 1,
    link: 'wellness',
    type: 'wellness',
    img: 'wellness-1.jpg',
    name: 'Masáž',
  },
  {
    id: 2,
    link: 'wellness',
    type: 'wellness',
    img: 'wellness-2.jpg',
    name: 'Soľná jaskyňa',
  },
  {
    id: 3,
    link: 'wellness',
    type: 'wellness',
    img: 'wellness-3.jpg',
    name: 'Fitness centrum',
  },
]
export const gallery = [
  {
    id: '1',
    link: 'galeria',
    type: 'gallery',
    img: 'gallery-1.jpg',
    name: 'Konferencie',
  },
  {
    id: 2,
    link: 'galeria',
    type: 'gallery',
    img: 'gallery-2.jpg',
    name: 'Raňajky',
  },
  {
    id: 3,
    link: 'galeria',
    type: 'gallery',
    img: 'gallery-3.jpg',
    name: 'Izby',
  },
  {
    id: 4,
    link: 'galeria',
    type: 'gallery',
    img: 'gallery-4.jpg',
    name: 'Apollo hotel',
  },
  {
    id: 5,
    link: 'galeria',
    type: 'gallery',
    img: 'gallery-5.jpg',
    name: 'Reštaurácia Sv. Huberta',
  },
  {
    id: 6,
    link: 'galeria',
    type: 'gallery',
    img: 'gallery-6.jpg',
    name: 'Lobby bar a letná terasa',
  },
]
export const contact = [
  {
    id: 1,
    title: 'Recepcia - rezrvácie a ubytovania',
    phone: '+421 2 55 968 922,  +421 903 231 893',
    mail: 'hotel@apollohotel.sk',
  },
  {
    id: 2,
    title: 'F&B manžér',
    name: 'Eugen Pastierik',
    phone: '+421 2 55 969 830',
    mail: 'eugenl@apollohotel.sk',
  },
  {
    id: 3,
    title: 'Reštaurácia Sv. Huberta - rezervácie',
    phone: '+421 902 944 918, +421 2 5 968 534',
    mail: 'marketing@apollohotel.sk ("prosím počas víkendových dní a štátnych sviatkov použite na rezerváciu telefónne číslo")',
  },
  {
    id: 4,
    title: 'Apollo Hotel ****',
    mail: 'eugenl@apollohotel.sk',
  },
  {
    id: 2,
    title: 'F&B manžér',
    name: 'Eugen Pastierik',
    phone: '+421 2 55 969 830',
    mail: 'eugenl@apollohotel.sk',
  },
  {
    id: 2,
    title: 'F&B manžér',
    name: 'Eugen Pastierik',
    phone: '+421 2 55 969 830',
    mail: 'eugenl@apollohotel.sk',
  },
  {
    id: 2,
    title: 'F&B manžér',
    name: 'Eugen Pastierik',
    phone: '+421 2 55 969 830',
    mail: 'eugenl@apollohotel.sk',
  },
  {
    id: 2,
    title: 'F&B manžér',
    name: 'Eugen Pastierik',
    phone: '+421 2 55 969 830',
    mail: 'eugenl@apollohotel.sk',
  },
  {
    id: 2,
    title: 'F&B manžér',
    name: 'Eugen Pastierik',
    phone: '+421 2 55 969 830',
    mail: 'eugenl@apollohotel.sk',
  },
  {
    id: 2,
    title: 'F&B manžér',
    name: 'Eugen Pastierik',
    phone: '+421 2 55 969 830',
    mail: 'eugenl@apollohotel.sk',
  },
  {
    id: 2,
    title: 'F&B manžér',
    name: 'Eugen Pastierik',
    phone: '+421 2 55 969 830',
    mail: 'eugenl@apollohotel.sk',
  },
]
