import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import './styles/element-plus/index.css'
import store from './stores/index'
import i18n from './i18n'
import ElementPlus from 'element-plus'
import router from './routers'

if (import.meta.env.DEV) {
  import('./mock/browser').then(({ worker }) => {
    worker.start({
      quiet: true,
      onUnhandledRequest: 'bypass',
    })
  })
}

const app = createApp(App)

app.use(i18n)
app.use(store)
app.use(router)

// FIXME: 因为 ElementPlus 国际化不能按需加载，所以暂时全部导入
app.use(ElementPlus, { i18n: i18n.global.t })

app.mount('#app')
