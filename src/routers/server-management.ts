import { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/server_management',
    component: () => import(`/views/ServerManagement/index.vue`),
    meta: { name: 'server_management', icon: 'server' },
    children: [
      {
        path: 'strategy_list',
        component: () =>
          import(`/views/ServerManagement/StrategyList/index.vue`),
        meta: { name: 'strategy_list' },
      },
    ],
  },
] as RouteRecordRaw[]
