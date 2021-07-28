<template>
  <div class="h-screen overflow-auto">
    <kg-header class="h-14 fixed top-0 left-0 right-0"></kg-header>
    <div class="h-full pt-14 flex">
      <aside class="overflow-auto">
        <kg-nav class="h-full"></kg-nav>
      </aside>
      <main class="flex-1 p-4 overflow-auto bg-gray-50 relative">
        <div v-if="routeName" class="text-xl font-bold mb-4">
          {{ t(routeName) }}
        </div>
        <div class="bg-white">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { KgHeader, KgNav } from '/components/index'
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'App',
  components: { KgHeader, KgNav },
  setup() {
    const { t } = useI18n()
    const route = useRoute()

    return {
      t,
      routeName: computed(() =>
        typeof route.meta.name === 'string' ? route.meta.name : ''
      ),
    }
  },
})
</script>
