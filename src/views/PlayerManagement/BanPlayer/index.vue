<template>
  <el-card>
    <el-tabs v-model="activeName">
      <el-tab-pane :label="t('ban')" name="1">
        <kg-ban-player-form></kg-ban-player-form>
      </el-tab-pane>
      <el-tab-pane :label="t('log')" name="2">
        <kg-log-list></kg-log-list>
      </el-tab-pane>
      <el-tab-pane :label="t('review')" name="3">
        <kg-review></kg-review>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import KgBanPlayerForm from './form.vue'
import KgLogList from './log-list.vue'
import KgReview from './review.vue'

export default defineComponent({
  name: 'KgBanPlayer',
  components: { KgBanPlayerForm, KgLogList, KgReview },
  setup() {
    const { t } = useI18n()

    return {
      t,
      activeName: ref('1'),
    }
  },
})
</script>
