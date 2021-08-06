import { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/gm_tools',
    component: () => import('/views/GmTools/index.vue'),
    meta: { name: 'gm_tools', icon: 'tools' },
    children: [
      {
        path: 'global_configuration',
        component: () => import('/views/GmTools/GlobalConfiguration/index.vue'),
        meta: { name: 'global_configuration' },
      },
    ],
  },
] as RouteRecordRaw[]
