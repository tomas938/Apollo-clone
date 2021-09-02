export const state = () => ({
  categories: [
    {
      id: 1,
      title: 'prve',
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
