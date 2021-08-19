import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import './styles/index.scss'
import store from './stores/index'
import i18n from './i18n'
import {
  ElAlert,
  ElButton,
  ElCard,
  ElDialog,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElForm,
  ElFormItem,
  ElInput,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElOption,
  ElPageHeader,
  ElPagination,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElSelect,
  ElSubmenu,
  ElTable,
  ElTableColumn,
} from 'element-plus'

if (import.meta.env.DEV) {
  import('./mock/browser').then(({ worker }) => {
    worker.start({
      quiet: true,
      onUnhandledRequest: 'bypass',
    })
  })
}

const app = createApp(App)

app.use(store)
app.use(router)
app.use(i18n)

// 按需导入组件，完整的 ElementPlus 组件列表 https://github.com/element-plus/element-plus/tree/dev/packages
;[
  ElForm,
  ElFormItem,
  ElTable,
  ElTableColumn,
  ElButton,
  ElPageHeader,
  ElSelect,
  ElOption,
  ElMenu,
  ElSubmenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElInput,
  ElPagination,
  ElCard,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElDialog,
  ElAlert,
].forEach(app.use)

app.mount('#app')
