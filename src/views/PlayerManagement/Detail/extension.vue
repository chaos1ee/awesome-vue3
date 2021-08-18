<template>
  <el-card>
    <template #header>{{ t('extension') }}</template>
    <el-skeleton v-if="loading" :rows="5" animated />
    <template v-else>
      <el-descriptions :column="2" border>
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
    </template>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { playerApi } from '/@/apis'

export default defineComponent({
  name: 'KgPlayerExtension',
  props: {
    uid: {
      type: Number,
      require: true,
      default: 0,
    },
  },
  setup(props) {
    const { t } = useI18n()

    const loading = ref()
    const data = ref()

    ;(async () => {
      loading.value = true
      data.value = await playerApi.getPlayerCityExt(props.uid)
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
