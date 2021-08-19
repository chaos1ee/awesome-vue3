import { createStore } from 'vuex'
import nav from './modules/nav'
import xhr from './modules/xhr'
import i18n from './modules/i18n'

export default createStore({
  modules: {
    nav,
    xhr,
    i18n,
  },
})
