import { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/gm_tools',
    component: () => import('/views/GmTools/index.vue'),
    meta: { name: 'gm_tools', icon: 'tools' },
    children: [
      {
        path: 'database_tool',
        component: () => import('/views/GmTools/DatabaseTool/index.vue'),
        meta: { name: 'database_tool' },
      },
    ],
  },
] as RouteRecordRaw[]
