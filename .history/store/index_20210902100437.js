export const getters = {
  getProductById: (state) => (id) => {
    return state.products.find((product) => product.id === id)
  },
}
