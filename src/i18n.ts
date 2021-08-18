import messages from '@intlify/vite-plugin-vue-i18n/messages'
import { createI18n } from 'vue-i18n'

const locale = localStorage.getItem('locale') || 'zh-cn'

localStorage.setItem('locale', locale)

const i18n = createI18n({
  legacy: false,
  locale,
  messages,
  missingWarn: false,
  fallbackWarn: false,
})

Object.entries(messages as Record<string, any>).forEach(([name, value]) => {
  import(`../node_modules/element-plus/es/locale/lang/${name}.js`).then(
    locale => {
      i18n.global.setLocaleMessage(name, {
        el: locale.default.el,
        ...value,
      })
    },
  )
})

export default i18n
