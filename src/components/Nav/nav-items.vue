<template>
  <div class="menu-item">
    <template v-for="(item, key) in menuItems" :key="key">
      <template v-if="ifShow(item)">
        <template v-if="hasChildren(item)">
          <el-submenu :index="getPath(item.path)" :popper-append-to-body="true">
            <template #title>
              <template v-if="item.meta?.icon">
                <i :class="['el-icon-' + item.meta.icon]"></i>
              </template>
              <span :class="{ 'title-overflow': !isCollapse }">
                {{ t(String(item.meta?.name)) }}
              </span>
            </template>
            <kg-nav-items
              :routes="item.children"
              :path-prefix="getPath(item.path)"
            ></kg-nav-items>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="getPath(item.path)" :route="getPath(item.path)">
            <template v-if="item.meta?.icon">
              <i :class="['el-icon-' + item.meta.icon]"></i>
            </template>
            <template #title>
              <span :class="{ 'title-overflow': !isCollapse }">
                {{ t(String(item.meta?.name)) }}
              </span>
            </template>
          </el-menu-item>
        </template>
      </template>
    </template>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouteRecordRaw } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'KgNavItems',
  props: {
    routes: {
      type: Array,
      require: true,
      default: () => [],
    },
    pathPrefix: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const store = useStore()
    const { t } = useI18n()

    const ifShow = (route: RouteRecordRaw) => {
      return !route.meta?.hidden
    }

    return {
      t,
      menuItems: computed(() => props.routes as RouteRecordRaw[]),
      ifShow,
      hasChildren(route: RouteRecordRaw) {
        return (
          Array.isArray(route.children) &&
          route.children.filter(ifShow).length > 0
        )
      },
      isCollapse: computed(() => store.state.nav.isCollapse),
      getPath: (path: string) => {
        return `${props.pathPrefix}${path.startsWith('/') ? path : '/' + path}`
      },
    }
  },
})
</script>

<style lang="scss" scoped>
.title-overflow {
  display: inline-block;
  width: calc(100% - 40px);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
