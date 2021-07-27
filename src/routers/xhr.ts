import { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/xhr',
    component: () => import('/views/Xhr/index.vue'),
    meta: {
      name: 'xhr',
      icon: 'grape',
    },
  },
] as RouteRecordRaw[]
