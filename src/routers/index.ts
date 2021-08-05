import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import i18n from '../i18n'

function getRoutes() {
  const modules = import.meta.globEager('./*.ts')
  const routes: RouteRecordRaw[] = []

  for (const path in modules) {
    const module = modules[path]
    routes.push(...module.default)
  }

  return [
    ...routes,
    {
      path: '/:patchMatch(.*)*',
      component: () => import('/views/NotFoundPage/index.vue'),
    },
  ]
}

const router = createRouter({
  history: createWebHistory(),
  routes: getRoutes(),
  scrollBehavior() {
    document.getElementById('main')?.scrollIntoView()
  },
})

router.afterEach(to => {
  const prefix = import.meta.env.VITE_DOCUMENT_TITLE as string
  const name = to.meta.name as string

  if (name) {
    document.title = `${prefix} | ${i18n.global.t(name)}`
  } else {
    document.title = prefix
  }
})

export default router
