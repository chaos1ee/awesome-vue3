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

export default defineComponent({
  name: 'KgLocale',
  setup() {
    const { t, availableLocales, locale } = useI18n()

    const setLocale = (command: string) => {
      if (locale.value !== command) {
        locale.value = command
        localStorage.setItem('locale', command)

        const localeChange = new CustomEvent('localeChange', {
          detail: {
            locale: command,
          },
        })
        window.dispatchEvent(localeChange)
      }
    }

    return {
      t,
      setLocale,
      locales: availableLocales,
      hidden: computed(() => availableLocales.length === 0),
    }
  },
})
</script>
