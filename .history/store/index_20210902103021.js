export const state = () => ({
  products: [
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
  ],
})
export const getters = {
  getProductById: (state) => (id) => {
    return state.products.find((product) => product.id === id)
  },
}
