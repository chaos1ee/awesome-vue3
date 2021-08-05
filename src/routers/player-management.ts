import { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/player_management',
    component: () => import(`/views/PlayerManagement/index.vue`),
    meta: { name: 'player_management', icon: 'user', order: 2 },
    children: [
      {
        path: 'player_list',
        component: () => import(`/views/PlayerManagement/List/index.vue`),
        meta: { name: 'player_list' },
      },
      {
        path: 'player_detail/:name',
        component: () => import('/views/PlayerManagement/Detail/index.vue'),
        meta: { name: 'player_detail', hidden: true, showPageHeader: true },
      },
      {
        path: 'ban_player',
        component: () => import('/views/PlayerManagement/BanPlayer/index.vue'),
        meta: { name: 'ban_player' },
      },
    ],
  },
] as RouteRecordRaw[]
