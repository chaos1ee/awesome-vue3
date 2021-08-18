<template>
  <div>{{ t('hello') }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'KgSystemMail',
  setup() {
    const { t } = useI18n({ inheritLocale: true })
    return { t }
  },
})
</script>

<i18n lang="yaml">
en:
  hello: hello world!
zh-cn:
  hello: 你好，世界！
</i18n>
