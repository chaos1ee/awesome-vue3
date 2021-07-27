import { createStore, createLogger } from 'vuex'
import nav from './modules/nav'

const debug = import.meta.env.DEV

export default createStore({
  modules: {
    nav,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
})
