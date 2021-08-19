import messages from '@intlify/vite-plugin-vue-i18n/messages'
import { createI18n } from 'vue-i18n'
import { Store } from 'vuex'
import store from './stores'

export default createI18n({
  legacy: false,
  locale: (store as Store<any>).state.i18n.locale,
  messages,
  missingWarn: false,
  fallbackWarn: false,
})
