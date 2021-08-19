<template>
  <el-dropdown v-if="!hidden" class="pr-4" @command="setLocale($event)">
    <div class="text-primary">
      {{ t('languages') }}<i class="el-icon-arrow-down el-icon--right"></i>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="locale in locales"
          :key="locale"
          :command="locale"
        >
          {{ t(locale) }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'KgLocale',
  setup() {
    const store = useStore()
    const { t, availableLocales, locale } = useI18n()

    return {
      t,
      locales: availableLocales,
      hidden: computed(() => availableLocales.length === 0),
      setLocale(command: string) {
        if (locale.value !== command) {
          locale.value = command
          store.commit('i18n/setLocale', command)
        }
      },
    }
  },
})
</script>
