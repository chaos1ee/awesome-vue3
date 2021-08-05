import { createStore } from 'vuex'
import nav from './modules/nav'

export default createStore({
  modules: {
    nav,
  },
})
