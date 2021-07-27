import { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/gm_tools',
    component: () => import('/views/GmTools/index.vue'),
    meta: { name: 'gm_tools', icon: 'user' },
    children: [
      {
        path: 'database_tool',
        component: () => import('/views/GmTools/DatabaseTool/index.vue'),
        meta: { name: 'database_tool', icon: 'user' },
      },
      {
        path: 'upload_file',
        component: () => import('/views/GmTools/UploadFile/index.vue'),
        meta: { name: 'upload_file', icon: 'user' },
      },
    ],
  },
] as RouteRecordRaw[]
