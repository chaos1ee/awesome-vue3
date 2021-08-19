import { createRouter, createWebHistory } from 'vue-router'
import i18n from '../i18n'
import store from '../stores'

const RouterView = import('/components/RouterView/index.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      path: '/dashboard',
      component: () => import('/views/Dashboard/index.vue'),
      meta: {
        name: 'dashboard',
        icon: 'dashboard',
      },
    },
    {
      path: '/player_management',
      component: () => RouterView,
      meta: {
        name: 'player_management',
        icon: 'user',
      },
      children: [
        {
          path: 'player_list',
          component: () => import(`/views/PlayerManagement/List/index.vue`),
          meta: { name: 'player_list' },
        },
        {
          path: 'player_detail/:uid',
          component: () => import('/views/PlayerManagement/Detail/index.vue'),
          meta: {
            name: 'player_detail',
            hidden: true,
            showPageHeader: true,
          },
        },
        {
          path: 'unban',
          component: () => import('/views/PlayerManagement/Unban/index.vue'),
          meta: { name: 'left_ban_player' },
        },
      ],
    },
    {
      path: '/mail_management',
      component: () => RouterView,
      meta: { name: 'mail_management', icon: 'email' },
      children: [
        {
          path: 'send_mail',
          component: () => import(`/views/MailManagement/SendMail/index.vue`),
          meta: { name: 'send_mail' },
        },
        {
          path: 'system_mail',
          component: () => import(`/views/MailManagement/SystemMail/index.vue`),
          meta: { name: 'system_mail' },
        },
      ],
    },
    {
      path: '/gm_tools',
      component: () => RouterView,
      meta: {
        name: 'gm_tools',
        icon: 'tools',
      },
      children: [
        {
          path: 'global_configuration',
          component: () =>
            import('/views/GmTools/GlobalConfiguration/index.vue'),
          meta: {
            name: 'global_configuration',
          },
        },
      ],
    },
    {
      path: '/server_management',
      component: () => RouterView,
      meta: { name: 'server_management', icon: 'server' },
      children: [
        {
          path: 'strategy_list',
          component: () =>
            import(`/views/ServerManagement/StrategyList/index.vue`),
          meta: { name: 'strategy_list' },
        },
        {
          path: 'kingdom_list',
          component: () =>
            import(`/views/ServerManagement/KingdomList/index.vue`),
          meta: { name: 'kingdom_list' },
        },
        {
          path: 'version_control',
          component: () =>
            import(`/views/ServerManagement/VersionControl/index.vue`),
          meta: { name: 'version_control' },
        },
        {
          path: 'etcd_info',
          component: () => import(`/views/ServerManagement/EtcdInfo/index.vue`),
          meta: { name: 'etcd_info' },
        },
        {
          path: 'kingdom_state',
          component: () =>
            import(`/views/ServerManagement/KindomState/index.vue`),
          meta: { name: 'kingdom_state' },
        },
      ],
    },
  ],
  scrollBehavior() {
    document.getElementById('main')?.scrollIntoView()
  },
})

router.beforeEach(() => {
  // Cancel all http requests
  store.commit('xhr/cancelAll')
})

router.afterEach(to => {
  const title = import.meta.env.VITE_DOCUMENT_TITLE as string
  const suffix = to.meta.name as string
  document.title = suffix ? `${title} | ${i18n.global.t(suffix)}` : title
})

export default router
