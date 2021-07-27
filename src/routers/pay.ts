import { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/pay',
    component: () => import('/views/Pay/index.vue'),
    meta: {
      name: 'pay',
      icon: 'grape',
    },
  },
] as RouteRecordRaw[]
