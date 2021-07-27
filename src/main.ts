import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import 'element-plus/lib/theme-chalk/index.css'
import store from './stores/index'
import i18n from './i18n'
import {
  ElButton,
  ElSelect,
  ElMenu,
  ElIcon,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubmenu,
  ElTable,
  ElTableColumn,
  ElInput,
  ElSteps,
  ElStep,
  ElOption,
  ElDropdownItem,
  ElDropdown,
  ElDropdownMenu,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElForm,
  ElFormItem,
  ElCard,
  ElAlert,
  ElCol,
  ElSwitch,
  ElCheckbox,
  ElCheckboxGroup,
  ElCheckboxButton,
  ElRadio,
  ElRadioGroup,
  ElRadioButton,
  ElTabs,
  ElTabPane,
  ElUpload,
} from 'element-plus'
import router from './routers'

const app = createApp(App)

app.use(i18n)
app.use(store)
app.use(router)

// 按需引入 ElementPlus 组件
app.use(ElButton)
app.use(ElSelect)
app.use(ElMenu)
app.use(ElSubmenu)
app.use(ElMenuItem)
app.use(ElMenuItemGroup)
app.use(ElIcon)
app.use(ElTable)
app.use(ElTableColumn)
app.use(ElInput)
app.use(ElStep)
app.use(ElSteps)
app.use(ElOption)
app.use(ElDropdown)
app.use(ElDropdownMenu)
app.use(ElDropdownItem)
app.use(ElBreadcrumb)
app.use(ElBreadcrumbItem)
app.use(ElForm)
app.use(ElFormItem)
app.use(ElCard)
app.use(ElAlert)
app.use(ElCol)
app.use(ElSwitch)
app.use(ElCheckbox)
app.use(ElCheckboxGroup)
app.use(ElCheckboxButton)
app.use(ElRadio)
app.use(ElRadioGroup)
app.use(ElRadioButton)
app.use(ElTabs)
app.use(ElTabPane)
app.use(ElUpload)

app.mount('#app')
