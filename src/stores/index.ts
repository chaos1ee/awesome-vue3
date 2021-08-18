import { createStore } from 'vuex'
import nav from './modules/nav'
import xhr from './modules/xhr'

export default createStore({
  modules: {
    nav,
    xhr,
  },
})
