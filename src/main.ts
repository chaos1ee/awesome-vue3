import { createApp } from 'vue'
import Root from './App.vue'
import './styles/index.scss'
import './styles/element-plus/index.css'
import store from './stores/index'
import i18n from './i18n'
import editorWorker from 'monaco-editor/esm/vs/editor/browser/editorBrowser?worker'
import jsonWorker from 'monaco-editor/esm/vs/language/json/jsonWorker?worker'
import ElementPlus from 'element-plus'
import router from './routers'

/**
 * Set worker for monaco-editor
 * https://github.com/vitejs/vite/discussions/1791?sort=old#discussioncomment-321046
 **/
;(window as any).MonacoEnvironment = {
  getWorker(_: any, label: any) {
    if (label === 'json') {
      return new jsonWorker()
    }
    return new editorWorker()
  },
}

const app = createApp(Root)

app.use(i18n)
app.use(store)
app.use(router)

// FIXME: 因为 ElementPlus 国际化不能按需加载，所以暂时全部导入
app.use(ElementPlus, { i18n: i18n.global.t })

app.mount('#app')
