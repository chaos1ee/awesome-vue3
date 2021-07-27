<template>
  <el-tabs v-model="activeName">
    <el-tab-pane :label="t('ban')" name="1">
      <el-card>
        <template #header>
          <h2>{{ t('ban') }}</h2>
        </template>
        <kg-ban-player-form></kg-ban-player-form>
      </el-card>
    </el-tab-pane>
    <el-tab-pane :label="t('log')" name="2">
      <el-card>
        <template #header>
          <h2>{{ t('log') }}</h2>
        </template>
        <kg-log-list></kg-log-list>
      </el-card>
    </el-tab-pane>
    <el-tab-pane :label="t('review')" name="3">
      <el-card>
        <template #header>
          <h2>{{ t('review') }}</h2>
        </template>
        <kg-review></kg-review>
      </el-card>
    </el-tab-pane>
  </el-tabs>
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
