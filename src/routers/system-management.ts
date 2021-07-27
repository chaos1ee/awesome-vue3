import { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/system_management',
    component: () => import('../views/SystemManagement/index.vue'),
    meta: { name: 'system_management', icon: 'user' },
    children: [
      {
        path: 'server_operation',
        component: () => import('/views/SystemManagement/Server/index.vue'),
        meta: { name: 'server_operation', icon: 'user' },
      },
      {
        path: 'gateway_management',
        component: () => import('/views/SystemManagement/Gateway/index.vue'),
        meta: { name: 'gateway_management', icon: 'user' },
      },
    ],
  },
] as RouteRecordRaw[]
