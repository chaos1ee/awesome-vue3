import messages from '@intlify/vite-plugin-vue-i18n/messages'
import { createI18n } from 'vue-i18n'

const locale = localStorage.getItem('locale') || 'zh-CN'

localStorage.setItem('locale', locale)

export default createI18n({
  locale,
  messages,
})
