interface State {
  isCollapse: boolean
}

const state = (): State => ({
  isCollapse: !!localStorage.getItem('collapse'),
})

const mutations = {
  toogle(state: State) {
    state.isCollapse = !state.isCollapse
  },
}

export default {
  namespaced: true,
  state,
  mutations,
}
