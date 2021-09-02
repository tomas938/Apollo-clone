export const state = () => ({
  categories: [
    {
      id: 1,
      title: 'Kategória Komfort',
      aboutRoom:
        'Dvojlôžkové izby s terasou sa nachádzajú na 6. poschodí hotela, majú terasy a krásny výhľad na mesto. Rozlohu 24m2, posteľ o rozmere 180x200cm a novo zrekonštruované, moderné kúpeľne.',
      description: '',
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
