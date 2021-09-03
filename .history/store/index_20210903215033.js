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
      img: [
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
      img: ['deluxe-1.jpg', 'deluxe-2.jpg', 'deluxe-3.jpg'],
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
      img: [
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
      img: [
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
  wellnessCategories: [
    {
      id: 1,
      type: 'massage',
      title: 'Masáž',
      description:
        'V príjemnej atmosfére masážnej miestnosti zažijete pri relaxačnej hudbe oddych a uvoľnenie po namáhavom dni. Naša skúsená masérka kombináciou hudby, vône a jemného dotyku dokonale zregeneruje unavené telo aj myseľ.',
      listTitle: 'Druhy masáže:',
      listItems: [
        '60 minútová Relaxačná masáž  : 49 Eur',
        '75 minútová Relaxačná masáž  : 55 Eur',
        '30 minútová Klasická masáž chrbta : 29 Eur',
        '20 + 20 minútová Liftingová masáž tváre a relaxačná masáž chrba pre dámy : 35 Eur',
        '60 minútová Thajska relaxačná masáž : 59 Eur',
        '90 minútová Thajska relaxačná masáž : 79 Eur',
      ],
      reservation:
        'Storno rezervovaného termínu je možné najneskôr  hodinu dopredu. Pri liftingovej masáži tváre, poprosíme dámy, aby prišli nenalíčené. Platba za masáž prebieha  v hotovosti priamo masérke.',
      img: ['massage-1.jpg', 'massage-2.jpg', 'massage-3.jpg'],
    },
    {
      id: 2,
      type: 'cave',
      title: 'Soľná jaskyňa',
      description:
        'Soľná jaskyňa nám ponúka špeciálnu mikroklímu po celý rok. Sú postavené z elementov čistej soli z najslanšieho mora sveta – z Mŕtveho mora, v kombinácií so skalami zo soľných jaskýň v Poľsku a v Pakistane. Ventilačný systém, ktorý ženie vzduch do jaskyne cez soľné steny, zabezpečuje ideálne ionizované ovzdušie. Pri stálej teplote 20°C-23°C sa toto ovzdušie obohacuje o minerály, nachádzajúce sa v morskej soli, vlhkosť sa pohybuje od 40% do 60%. V ovzduší jaskyne je výnimočná mikroklíma, ktorá je charakteristická jedinečnou bakteriologickou čistotou.',
      listTitle: 'Pobyt v soľnej jaskyni pomáha pri liečení:',
      listItems: [
        'horných a dolných dýchacích ciest',
        'znížená funkcia štítnej žľazy – hypothyreóza',
        'srdcovo-cievne ochorenia',
        'choroby zažívacieho traktu',
        'choroby dermatologické',
        'neuróza, stres a stavy únavy',
        'choroby reumatické, zrýchľuje spaľovanie tukov, vyhladzuje vrásky, spomaľuje proces starnutia',
      ],
      reservation:
        'Storno rezervovaného termínu je možné najneskôr  hodinu dopredu. Pri liftingovej masáži tváre, poprosíme dámy, aby prišli nenalíčené. Platba za masáž prebieha  v hotovosti priamo masérke.',
      price:
        'Permanentka na 10 vstupov: 50,- €. Na jednu permanentku je povolený vstup max. 1 dieťaťu do 12 rokov grátis.',
      opening:
        'Soľná jaskyňa je k dispozícii od pondelka do piatku v čase  08:00 – 22:00 (posledný vstup je o 20.30 hod.)',
      openingWeekend:
        'a počas víkendu je k dispozícii 08:00 – 20:00 (posledný vstup je o 18.30 hod.).',
      img: ['cave-1.jpg', 'cave-2.jpg', 'cave-3.jpg'],
    },
    {
      id: 3,
      type: 'fitness',
      title: 'Fitness centrum',
      description:
        'V príjemnej atmosfére masážnej miestnosti zažijete pri relaxačnej hudbe oddych a uvoľnenie po namáhavom dni. Naša skúsená masérka kombináciou hudby, vône a jemného dotyku dokonale zregeneruje unavené telo aj myseľ.',
      listTitle: 'Druhy masáže:',
      listItems: [
        '60 minútová Relaxačná masáž  : 49 Eur',
        '75 minútová Relaxačná masáž  : 55 Eur',
        '30 minútová Klasická masáž chrbta : 29 Eur',
        '20 + 20 minútová Liftingová masáž tváre a relaxačná masáž chrba pre dámy : 35 Eur',
        '60 minútová Thajska relaxačná masáž : 59 Eur',
        '90 minútová Thajska relaxačná masáž : 79 Eur',
      ],
      reservation:
        'Storno rezervovaného termínu je možné najneskôr  hodinu dopredu. Pri liftingovej masáži tváre, poprosíme dámy, aby prišli nenalíčené. Platba za masáž prebieha  v hotovosti priamo masérke.',
      img: ['massage-1.jpg', 'massage-2.jpg', 'massage-3.jpg'],
    },
  ],
})
export const getters = {
  getProductById: (state) => (id) => {
    return state.categories.find((category) => category.id === id)
  },
  getWellnessById: (state) => (id) => {
    return state.wellnessCategories.find((category) => category.id === id)
  },
}
