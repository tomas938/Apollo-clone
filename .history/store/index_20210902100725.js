export const state = () => ({
  category: [
    {
      id: 1,
      title: 'RodinnĂ¡ izba',
    },
  ],
})
export const getters = {
  getProductById: (state) => (id) => {
    return state.products.find((product) => product.id === id)
  },
}
