export const state = () => ({
  categories: [
    {
      id: 1,
      title: 'Kategória Komfort',
      aboutRoom:
        'Dvojlôžkové izby s terasou sa nachádzajú na 6. poschodí hotela, majú terasy a krásny výhľad na mesto. Rozlohu 24m2, posteľ o rozmere 180x200cm a novo zrekonštruované, moderné kúpeľne.',
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
      roomImg: ['komfort-1.jpg'],
    },
    {
      id: 2,
      title: 'druhee',
    },
    {
      id: 3,
      title: 'tretie',
    },
    {
      id: 4,
      title: 'stvrte',
    },
  ],
})
export const getters = {
  getProductById: (state) => (id) => {
    return state.categories.find((category) => category.id === id)
  },
}
