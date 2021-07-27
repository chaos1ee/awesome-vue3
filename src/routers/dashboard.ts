import { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/dashboard',
    component: () => import('/views/Dashboard/index.vue'),
    meta: {
      name: 'dashboard',
      icon: 'grape',
      order: 1,
    },
  },
] as RouteRecordRaw[]
