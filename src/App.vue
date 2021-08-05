<template>
  <div class="flex">
    <aside class="border-r z-50 h-screen pt-14">
      <kg-nav class="h-full overflow-auto"></kg-nav>
    </aside>
    <div class="flex-1 bg-gray-50 overflow-auto h-screen">
      <kg-header class="bg-white h-14 fixed left-0 right-0 top-0"></kg-header>
      <main id="main" class="min-h-full pt-20 px-6 pb-16">
        <template v-if="routeName">
          <el-page-header v-if="showPageHeader" class="mb-4" @back="goBack">
            <template #title>{{ t('back') }}</template>
            <template #content>{{ t(routeName) }}</template>
          </el-page-header>
          <div v-else class="h-6 leading-6 text-lg mb-4">
            {{ t(routeName) }}
          </div>
        </template>
        <router-view></router-view>
      </main>
      <kg-footer class="h-10 -mt-10 border-t text-xs text-primary"></kg-footer>
    </div>
  </div>
</template>

<script lang="ts">
import { KgHeader, KgNav, KgFooter } from '/components/index'
import { computed, defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'App',
  components: { KgHeader, KgNav, KgFooter },
  setup() {
    const { t } = useI18n()
    const route = useRoute()
    const router = useRouter()

    return {
      t,
      routeName: computed(() =>
        typeof route.meta.name === 'string' ? route.meta.name : '',
      ),
      goBack() {
        router.back()
      },
      showPageHeader: computed(() => route.meta.showPageHeader),
    }
  },
})
</script>
