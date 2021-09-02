export const state = () => ({
  categories: [
    {
      id: 1,
      title: 'Kategória Komfort',
      type: 'komfort',
      aboutRoom:
        'Dvojlôžkové izby s terasou  sa nachádzajú na 6. poschodí hotela, majú terasy a krásny výhľad na mesto. Rozlohu 24m2, posteľ o rozmere 180x200cm a novo zrekonštruované, moderné kúpeľne.',
      description:
        'Dvojposteľové izby sú umiestnené na 4. a 5. poschodí, s rozlohou 25m2 a posteľami o veľkosti 90x200cm až 180x200cm poskytujú dostatok pohodlia. Trojposteľové izby sa nachádzajú na 4. a 5. poschodí s rozlohou 25m2 a sú výbornou ekonomy voľbou.',
      animalDescription:
        'Na izbe je možné ubytovať sa aj s domácim zvieratkom. Poplatok je 15 € / noc.',
      serviceTitle: 'Izby tejto kategórie zdarma poskytujú:',
      services: [
        'bohaté bufetové raňajky v Reštaurácii sv. Huberta',
        'wifi/ vysoko rýchlostné pripojenie na internet',
        'vstup do hotelového Fitness centra a Soľnej jaskyne',
        'káva a čaj s príslušenstvom',
        'individuálne regulovateľná klimatizácia/kúrenie',
        'trezor vhodný aj pre laptop',
        'LCD TV s prémiovými kanálmi',
        'zľava 10% v reštaurácii na á la carte menu',
      ],
      roomImg: [
        'komfort-1.jpg',
        'komfort-2.jpg',
        'komfort-3.jpg',
        'komfort-4.jpg',
        'komfort-5.jpg',
        'komfort-6.jpg',
      ],
    },
    {
      id: 2,
      title: 'Kategória Deluxe',
      type: 'deluxe',
      aboutRoom:
        'Dvojposteľové izby s king size posteľou (200×200 cm) sa nachádzajú na 3. poschodí. Majú 25m2 a sú zariadené v modernom štýle.',
      animalDescription:
        'Na izbe je možné ubytovať sa aj s domácim zvieratkom. Poplatok je 15 € / noc.',
      serviceTitle: 'Izby tejto kategórie zdarma poskytujú:',
      services: [
        'bohaté bufetové raňajky v Reštaurácii sv. Huberta',
        'wifi/ vysoko rýchlostné pripojenie na internet',
        'vstup do hotelového Fitness centra a Soľnej jaskyne',
        'káva a čaj s príslušenstvom',
        'individuálne regulovateľná klimatizácia/kúrenie',
        'trezor vhodný aj pre laptop',
        'LCD TV s prémiovými kanálmi',
        'zľava 10% v reštaurácii na á la carte menu',
      ],
      bonusTitle: 'Navyše v tejto kategórii zdarma poskytujeme:',
      bonuses: [
        'posteľ veľkosti „King size“ pre vyšší komfort',
        'žehliaca doska so žehličkou',
        'špeciálne kozmetické zrkadlo v kúpeľni',
      ],
      roomImg: ['deluxe-1.jpg', 'deluxe-2.jpg', 'deluxe-3.jpg'],
    },
    {
      id: 3,
      title: 'Apartmány',
      type: 'apartments',
      aboutRoom:
        'Na 3. poschodí sa nachádzajú Fitness štúdia. Majú rozlohu 35m2, spálňovú a obývačkovú časť. K aktívnemu oddychu je na izbe k dispozícii stacionárny bicykel. Štúdio je zariadené vo veľmi príjemnom, modernom štýle a poskytuje nadštandard  kategórie Deluxe.',
      description:
        'Diplomat apartmán sa nachádza na 6. poschodí hotela. S celkovou rozlohou 100m2 uspokojí požiadavky aj tých najnáročnejších hostí.Ponúka obývačku s pracovným kútom, LCD TV so systémom domáceho kina, kuchynský kútik s jedálenskou časťou, spálňu s TV a so samostatným šatníkom, luxusnú kúpeľňu s denným svetlom a dve toalety. Zaujímavosťou je súkromná terasa s pohodlným sedením a krásnym výhľadom na Bratislavu. Apartmán Diplomat je veľmi vhodný aj na dlhodobý prenájom.',
      animalDescription:
        'Na izbe je možné ubytovať sa aj s domácim zvieratkom. Poplatok je 15 € / noc.',
      serviceTitle: 'Izby tejto kategórie zdarma poskytujú:',
      services: [
        'bohaté bufetové raňajky v Reštaurácii sv. Huberta',
        'wifi/ vysoko rýchlostné pripojenie na internet',
        'vstup do hotelového Fitness centra a Soľnej jaskyne',
        'káva a čaj s príslušenstvom',
        'individuálne regulovateľná klimatizácia/kúrenie',
        'trezor vhodný aj pre laptop',
        'LCD TV s prémiovými kanálmi',
        'zľava 10% v reštaurácii na á la carte menu',
      ],
      bonusTitle: 'Navyše v tejto kategórii zdarma poskytujeme:',
      bonuses: [
        'žehliaca doska so žehličkou',
        'posteľ veľkosti „King size“ pre vyšší komfort',
        'špeciálne kozmetické zrkadlo v kúpeľni',
      ],
      roomImg: [
        'apartments-1.jpg',
        'apartments-2.jpg',
        'apartments-3.jpg',
        'apartments-4.jpg',
        'apartments-5.jpg',
        'apartments-6.jpg',
        'apartments-7.jpg',
        'apartments-8.jpg',
      ],
    },
    {
      id: 4,
      title: 'Rodinná izba',
      type: 'family-room',
      aboutRoom:
        'Rodinné izby sa nachádzajú na 3., 4. alebo 5. poschodí. Majú rozlohu cca 35m2, jednu priestrannú alebo 2 samostatné miestnosti. Ponúkajú 4 lôžka s možnosťou prístelky pre ďalšie dieťa.',
      description:
        'Rodinný Grand apartmán sa nachádza na 6. poschodí hotela. S celkovou rozlohou 100m2uspokojí požiadavky aj tých najnáročnejších hostí.Ponúka obývačku s rozkladacím gaučom, LCD TV so systémom domáceho kina, kuchynský kútik s jedálenskou časťou, spálňu s TV a so samostatným šatníkom, luxusnú kúpeľňu s denným svetlom a dve toalety. Zaujímavosťou je súkromná terasa s pohodlným sedením a krásnym výhľadom na Bratislavu. Apartmán je vhodný aj na dlhodobý prenájom.',
      animalDescription:
        'Na izbe je možné ubytovať sa aj s domácim zvieratkom. Poplatok je 15 € / noc.',
      serviceTitle: 'Izby tejto kategórie zdarma poskytujú:',
      services: [
        'bohaté bufetové raňajky v Reštaurácii sv. Huberta',
        'wifi/ vysoko rýchlostné pripojenie na internet',
        'vstup do hotelového Fitness centra a Soľnej jaskyne',
        'káva a čaj s príslušenstvom',
        'individuálne regulovateľná klimatizácia/kúrenie',
        'trezor vhodný aj pre laptop',
        'LCD TV s prémiovými kanálmi',
        'zľava 10% v reštaurácii na á la carte menu',
      ],
      bonusTitle: 'Rodinný Grand apartmán navyše ZDARMA poskytuje:',
      bonuses: [
        'posteľ veľkosti „King size“ pre vyšší komfort',
        'žehliaca doska so žehličkou',
        'špeciálne kozmetické zrkadlo v kúpeľni',
      ],
      roomImg: [
        'family-room-1.jpg',
        'family-room-2.jpg',
        'family-room-3.jpg',
        'family-room-4.jpg',
        'family-room-5.jpg',
        'family-room-6.jpg',
        'family-room-7.jpg',
        'family-room-8.jpg',
      ],
    },
  ],
  parking: {
    title: 'Parkovanie',
    subTitleInfo: 'Základné informácie a organizácia',
    navigation:
      'Vstup na hotelové parkovisko sa nachádza z Páričkovej ulice. Pri vstupe stlačíte tlačidlo, automat Vám vydá lístok a rampa sa otvorí. V prípade, že parkovací automat nereaguje, skúste zacúvať a prísť k rampe znovu. Pravdepodobne Vás nezachytil senzor.',

    subTitlePrice: 'Cena a platba',
  },
})
export const getters = {
  getProductById: (state) => (id) => {
    return state.categories.find((category) => category.id === id)
  },
}
