<template>
  <el-config-provider :locale="locale">
    <kg-header class="bg-white h-14 fixed left-0 right-0 top-0"></kg-header>
    <div class="flex h-screen pt-14">
      <kg-nav class="border-r z-50 overflow-auto"></kg-nav>
      <div class="flex-1 overflow-auto">
        <main id="main" class="min-h-full pt-8 px-8 pb-16">
          <div v-if="routeName" class="pb-6">
            <el-page-header v-if="showPageHeader" @back="$router.back()">
              <template #title>{{ t('back') }}</template>
              <template #content>{{ t(routeName) }}</template>
            </el-page-header>
            <div v-else class="h-6 leading-6 text-xl">
              {{ t(routeName) }}
            </div>
          </div>
          <router-view></router-view>
        </main>
        <kg-footer
          class="h-10 -mt-10 border-t text-xs text-primary"
        ></kg-footer>
      </div>
    </div>
  </el-config-provider>
</template>

<script lang="ts">
import { KgHeader, KgNav, KgFooter } from '/components/index'
import { computed, defineComponent, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { ElConfigProvider } from 'element-plus'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'App',
  components: {
    KgHeader,
    KgNav,
    KgFooter,
    ElConfigProvider,
  },
  setup() {
    const { t } = useI18n()
    const route = useRoute()
    const store = useStore()
    const locale = ref()

    loadLocale(store.state.i18n.locale)

    watch(() => store.state.i18n.locale, loadLocale)

    async function loadLocale(name: string) {
      try {
        const res = await import(
          `../node_modules/element-plus/es/locale/lang/${name}.js`
        )
        locale.value = res.default
      } catch (_) {}
    }

    return {
      t,
      locale,
      routeName: computed(() =>
        typeof route.meta.name === 'string' ? route.meta.name : '',
      ),
      showPageHeader: computed(() => route.meta.showPageHeader),
    }
  },
})
</script>
