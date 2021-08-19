interface State {
  locale: string
}

localStorage.setItem('locale', localStorage.getItem('locale') || 'zh-cn')

const state = (): State => ({
  locale: localStorage.getItem('locale') as string,
})

const mutations = {
  setLocale(state: State, locale: string) {
    state.locale = locale
    localStorage.setItem('locale', locale)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
}
