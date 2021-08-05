<template>
  <div class="flex items-center border-b z-50">
    <kg-logo></kg-logo>
    <div class="flex-1 flex justify-between pr-4">
      <el-button
        type="text"
        :icon="icon"
        size="medium"
        @click="toogle"
      ></el-button>
      <div>
        <kg-locale></kg-locale>
        <el-button type="text" icon="el-icon-user-solid"></el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import KgLogo from '../Logo/index.vue'
import KgLocale from '../Locale/index.vue'

export default defineComponent({
  name: 'KgHeader',
  components: { KgLogo, KgLocale },
  setup() {
    const store = useStore()
    const isCollapse = computed(() => store.state.nav.isCollapse)

    return {
      isCollapse,
      toogle: () => {
        store.commit('nav/toogle')
        if (isCollapse.value) {
          localStorage.setItem('collapse', '1')
        } else {
          localStorage.removeItem('collapse')
        }
      },
      icon: computed(() => `el-icon-s-${isCollapse.value ? 'unfold' : 'fold'}`),
      title: import.meta.env.VITE_DOCUMENT_TITLE,
    }
  },
})
</script>

<style lang="scss" scoped>
::v-deep(*[class|='el-icon']) {
  font-size: 18px;
}
</style>
