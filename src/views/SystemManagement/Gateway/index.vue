<template>gateway</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'KgGateway',
  setup() {
    const { t } = useI18n()

    return {
      t,
    }
  },
})
</script>
