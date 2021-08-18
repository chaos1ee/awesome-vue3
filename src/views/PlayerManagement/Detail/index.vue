<template>
  <kg-player-info :data="data" :loading="loading"></kg-player-info>
  <kg-player-resources class="mt-6" :uid="uid"></kg-player-resources>
  <kg-player-extension class="mt-6" :uid="uid"></kg-player-extension>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import KgPlayerInfo from './info.vue'
import KgPlayerResources from './resources.vue'
import KgPlayerExtension from './extension.vue'
import { playerApi } from '/@/apis'

export default defineComponent({
  name: 'KgPlayerDetail',
  components: { KgPlayerInfo, KgPlayerResources, KgPlayerExtension },
  setup() {
    const { t } = useI18n()
    const route = useRoute()
    const data = ref()
    const loading = ref(true)
    const uid = +route.params.uid

    ;(async () => {
      data.value = await playerApi.getPlayerDetail(uid)
      loading.value = false
    })()

    return {
      t,
      uid,
      data,
      loading,
    }
  },
})
</script>
