export const state = () => ({
  category: [
    {
      id: 1,
      title: 'Rodinná izba',
    },
  ],
})
export const getters = {
  getCategoryById: (state) => (id) => {
    return state.category.find((category) => category.id === id)
  },
}
