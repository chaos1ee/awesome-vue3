import { Canceler } from 'axios'

interface State {
  cancelers: Map<Canceler, Canceler>
}

const state = (): State => ({
  cancelers: new Map(),
})

const mutations = {
  inject(state: State, c: Canceler) {
    state.cancelers.set(c, c)
  },
  cancel(state: State, c: Canceler) {
    c()
    state.cancelers.delete(c)
  },
  cancelAll(state: State) {
    const cancelers = state.cancelers
    cancelers.forEach(c => c())
    cancelers.clear()
  },
}

export default {
  namespaced: true,
  state,
  mutations,
}
