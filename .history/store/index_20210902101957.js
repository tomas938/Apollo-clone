export const state = () => ({
  category: [
    {
      id: 1,
      title: 'Rodinná izba',
    },
    {
      id: 2,
      title:
        'Rodinná izbaRodinná izbaRodinná izbaRodinná izbaRodinná izbaRodinná izbaRodinná izba',
    },
    {
      id: 3,
      title:
        'Rodinná Rodinná izbaRodinná izbaRodinná izbaRodinná izbaRodinná izba',
    },
  ],
})
export const getters = {
  getCategoryById: (state) => (id) => {
    return state.category.find((category) => category.id === id)
  },
}
