<template>
  <el-card>
    <template #header>{{ t('resources') }}</template>
    <el-skeleton v-if="loading" :rows="5" animated />
    <template v-else>
      <div class="grid grid-cols-2 gap-6">
        <el-descriptions :column="2" :title="t('basic')" border class="mb-6">
          <el-descriptions-item
            v-for="item in data"
            :key="item.id"
            :label="item.name"
          >
            {{ item.num }}
          </el-descriptions-item>
        </el-descriptions>
        <el-descriptions :column="2" :title="t('other')" border>
          <el-descriptions-item :label="t('lord_experience')"
            >1000</el-descriptions-item
          >
          <el-descriptions-item :label="t('talent_points')"
            >1000</el-descriptions-item
          >
          <el-descriptions-item :label="t('action_points')"
            >1000</el-descriptions-item
          >
          <el-descriptions-item :label="t('td_research_technology_points')"
            >1000</el-descriptions-item
          >
          <el-descriptions-item :label="t('hero_experience')"
            >1000</el-descriptions-item
          >
          <el-descriptions-item :label="t('physical_strength')"
            >1000</el-descriptions-item
          >
        </el-descriptions>
      </div>
    </template>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { playerApi } from '/@/apis'

export default defineComponent({
  name: 'KgPlayerResources',
  props: {
    uid: {
      type: Number,
      require: true,
      default: 0,
    },
  },
  setup() {
    const { t } = useI18n()

    const loading = ref()
    const data = ref()

    ;(async () => {
      loading.value = true
      data.value = await playerApi.getPackage({ uid: 1 })
      loading.value = false
    })()

    return {
      t,
      data,
      loading,
    }
  },
})
</script>

<style lang="scss" scoped>
::v-deep(.el-descriptions__label) {
  width: 200px;
}
</style>

<i18n lang="yaml">
en:
  td_research_technology_points: TD research technology points
zh-cn:
  td_research_technology_points: TD 研究科技点数
</i18n>
