export const state = () => ({
  currentPage: 'home'
})

export const mutations = {
  navigate(state, newPage) {
    state.currentPage = newPage;
  }
}

export const getters = {
  current: state => state.currentPage
}