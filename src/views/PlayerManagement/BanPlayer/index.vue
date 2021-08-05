<template>
  <el-card>
    <el-tabs v-model="activeName">
      <el-tab-pane :label="t('ban')" name="1">
        <kg-ban-player-form></kg-ban-player-form>
      </el-tab-pane>
      <el-tab-pane :label="t('query')" name="2">
        <kg-player-query></kg-player-query>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import KgBanPlayerForm from './form.vue'
import KgPlayerQuery from './query.vue'

export default defineComponent({
  name: 'KgBanPlayer',
  components: { KgBanPlayerForm, KgPlayerQuery },
  setup() {
    const { t } = useI18n()

    return {
      t,
      activeName: ref('1'),
    }
  },
})
</script>
