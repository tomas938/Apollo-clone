export const state = () => ({
  category: [
    {
      id: 1,
      title: 'Rodinná izba',
    },
  ],
})
export const getters = {
  getProductById: (state) => (id) => {
    return state.products.find((product) => product.id === id)
  },
}
