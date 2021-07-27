<template>
  <div class="menu-item">
    <template v-for="(item, key) in menuItems" :key="key">
      <template v-if="'children' in item">
        <el-submenu :index="getPath(item.path)" :popper-append-to-body="true">
          <template #title>
            <template v-if="item.meta?.icon">
              <el-icon :name="item.meta.icon"></el-icon>
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
            <el-icon :name="item.meta.icon"></el-icon>
          </template>
          <template #title>
            <span :class="{ 'title-overflow': !isCollapse }">
              {{ t(String(item.meta?.name)) }}
            </span>
          </template>
        </el-menu-item>
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

    return {
      t,
      menuItems: computed(() => props.routes as RouteRecordRaw[]),
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
  width: calc(100% - 40px);
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
