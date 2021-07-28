<template>
  <div class="flex items-center justify-between z-10 bg-orange-500">
    <div
      class="flex items-center justify-center header--left"
      :class="{ collapse: isCollapse }"
    >
      <div v-if="!isCollapse" class="w-8 h-8 ml-4 mr-4">
        <img class="w-8 h-8" src="/@/assets/images/logo.png" alt="logo" />
      </div>
      <div v-if="!isCollapse" class="flex-1 text-xl font-bold">
        {{ title }}
      </div>
      <el-button type="text" :icon="logo" @click="toogle"></el-button>
    </div>
    <div class="mr-4">
      <kg-locale></kg-locale>
      <router-link to="/home">
        <el-button type="text" icon="el-icon-user-solid"></el-button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick } from 'vue'
import { useStore } from 'vuex'
import KgLocale from '../Locale/index.vue'

export default defineComponent({
  name: 'KgHeader',
  components: { KgLocale },
  setup() {
    const store = useStore()
    const isCollapse = computed(() => store.state.nav.isCollapse)

    return {
      isCollapse,
      toogle: () => {
        store.commit('nav/toogle')
        nextTick(() => {
          if (isCollapse.value) {
            localStorage.setItem('collapse', '1')
          } else {
            localStorage.removeItem('collapse')
          }
        })
      },
      logo: computed(() => `el-icon-s-${isCollapse.value ? 'unfold' : 'fold'}`),
      title: import.meta.env.VITE_DOCUMENT_TITLE,
    }
  },
})
</script>

<style lang="scss" scoped>
::v-deep(*[class|='el-icon']) {
  font-size: 18px;
}

.header--left {
  width: 240px;
  box-sizing: padding-box;
  color: #fff;

  &.collapse {
    width: 64px;
  }
}

img {
  width: 100%;
  height: 100%;
}

::v-deep(.el-button--text) {
  color: #fff;

  &:hover,
  &:focus {
    color: #fff;
  }
}
</style>
