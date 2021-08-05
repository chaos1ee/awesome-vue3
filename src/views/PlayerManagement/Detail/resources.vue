<template>
  <el-card>
    <template #header>{{ t('resources') }}</template>
    <el-skeleton v-if="loading" :rows="5" animated />
    <template v-else>
      <div class="grid grid-cols-2 gap-6">
        <el-descriptions
          :column="2"
          :title="t('basic')"
          direction="vertical"
          border
          class="mb-6"
        >
          <el-descriptions-item :label="t('crystal')"
            >1000</el-descriptions-item
          >
          <el-descriptions-item :label="t('grain')">1000</el-descriptions-item>
          <el-descriptions-item :label="t('wood')">1000</el-descriptions-item>
          <el-descriptions-item :label="t('stone')">1000</el-descriptions-item>
          <el-descriptions-item :label="t('gold')">1000</el-descriptions-item>
        </el-descriptions>
        <el-descriptions
          :column="2"
          :title="t('other')"
          direction="vertical"
          border
        >
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

export default defineComponent({
  name: 'KgPlayerResources',
  setup() {
    const { t } = useI18n()
    const loading = ref(true)

    new Promise(resolve => setTimeout(resolve, 2000)).then(() => {
      loading.value = false
    })

    return {
      t,
      loading,
    }
  },
})
</script>
