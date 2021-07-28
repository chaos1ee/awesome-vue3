<template>
  <nav :style="{ backgroundColor }" style="border-right: 1px solid #e5e7eb">
    <el-menu
      class="el-menu-vertical"
      :collapse="isCollapse"
      :unique-opened="true"
      :background-color="backgroundColor"
      :text-color="textColor"
      :active-text-color="activeTextColor"
      :router="true"
      :default-active="activePath"
    >
      <kg-nav-items :routes="routes"></kg-nav-items>
    </el-menu>
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import KgNavItems from './nav-items.vue'

export default defineComponent({
  name: 'KgMenu',
  components: { KgNavItems },
  props: {
    textColor: {
      type: String,
      default: '#111827',
    },
    backgroundColor: {
      type: String,
      default: '#ffffff',
    },
    activeTextColor: {
      type: String,
      default: '#FF5A00',
    },
  },
  setup() {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()
    const routes = router.options.routes
      .filter(
        (route) => route.path !== '/' && !route.path.startsWith('/:patchMatch')
      )
      .sort((a, b) => {
        return (
          /** 升序排列 **/
          (Number(a.meta?.order) || Number.MAX_SAFE_INTEGER) -
          (Number(b.meta?.order) || Number.MAX_SAFE_INTEGER)
        )
      })

    return {
      routes,
      activePath: computed(() => route.path),
      isCollapse: computed(() => store.state.nav.isCollapse),
    }
  },
})
</script>

<style lang="scss" scoped>
::v-deep(.el-menu) {
  border-right: none;
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 240px;
}
</style>
