import { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/player_management',
    component: () => import('../views/PlayerManagement/index.vue'),
    meta: { name: 'player_management', icon: 'user' },
    children: [
      {
        path: 'player_list',
        component: () => import('/views/PlayerManagement/List/index.vue'),
        meta: { name: 'player_list', icon: 'user' },
      },
      {
        path: 'ban_player',
        component: () => import('/views/PlayerManagement/BanPlayer/index.vue'),
        meta: { name: 'ban_player', icon: 'user' },
      },
      {
        path: 'reissue_rewards',
        component: () =>
          import('/views/PlayerManagement/ReissueRewards/index.vue'),
        meta: { name: 'reissue_rewards', icon: 'user' },
      },
      {
        path: 'return_players',
        component: () =>
          import('/views/PlayerManagement/ReturnPlayers/index.vue'),
        meta: { name: 'return_players', icon: 'user' },
      },
    ],
  },
] as RouteRecordRaw[]
