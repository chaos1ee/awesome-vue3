<template>
  <kg-player-info></kg-player-info>
  <kg-player-resources class="mt-6"></kg-player-resources>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import KgPlayerInfo from './info.vue'
import KgPlayerResources from './resources.vue'

export default defineComponent({
  name: 'KgPlayerDetail',
  components: { KgPlayerInfo, KgPlayerResources },
  setup() {
    const { t } = useI18n()

    return {
      t,
    }
  },
})
</script>
