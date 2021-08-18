<template>
  <el-card>
    <template #header>
      <div class="relative flex items-center justify-center">
        <span class="absolute left-0">{{ t('info') }}</span>
        <el-avatar
          :size="50"
          src="/@/assets/images/avatar.png"
          alt="avatar"
        ></el-avatar>
        <div class="absolute right-0">
          <el-dropdown>
            <el-button type="text" icon="el-icon-more"></el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>
                  {{ t('open_permanent_protective_cover') }}
                </el-dropdown-item>
                <el-dropdown-item>
                  {{ t('repair_alliance_data') }}
                </el-dropdown-item>
                <el-dropdown-item divided>
                  {{ t('reset_fpid') }}
                </el-dropdown-item>
                <el-dropdown-item>{{ t('reset_portrait') }}</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </template>
    <el-skeleton v-if="loading" :rows="6" animated />
    <el-descriptions v-else :column="3" border>
      {{ data }}
      <el-descriptions-item :label="t('funplus_id')">
        {{ data.fpid }}
      </el-descriptions-item>
      <el-descriptions-item :label="t('player_name')">
        {{ data.owner.PlayerName }}
      </el-descriptions-item>
      <el-descriptions-item :label="t('nickname')">
        {{ data.owner.nickName }}
      </el-descriptions-item>
      <el-descriptions-item :label="t('privilege')">
        {{ data.owner.privilege }}
      </el-descriptions-item>
      <el-descriptions-item :label="t('race')">
        {{ data.basics.raceId }}
      </el-descriptions-item>
      <el-descriptions-item :label="t('end_novice')">
        {{ data.novice.endNovice }}
      </el-descriptions-item>
      <el-descriptions-item :label="t('level')">
        {{ data.basics.level }}
      </el-descriptions-item>
      <el-descriptions-item :label="t('exp')">
        {{ data.exp }}
      </el-descriptions-item>
      <el-descriptions-item :label="t('language')">
        <el-tag size="small">{{ data.basics?.lang }}</el-tag>
      </el-descriptions-item>
      <el-descriptions-item :label="t('vip_level')">
        {{ data.vip_level }}
      </el-descriptions-item>
      <el-descriptions-item :label="t('alliance')">
        {{ data.basics?.allianceJoinTime }}
      </el-descriptions-item>
      <el-descriptions-item :label="t('guild')">
        {{ data.guild }}
      </el-descriptions-item>
      <el-descriptions-item :label="t('kingdom_id')">
        {{ data.kid }}
      </el-descriptions-item>
      <el-descriptions-item :label="t('x_y_axis')">
        <a href="javascript:void(0);" class="text-primary">
          <span>X: {{ data.mapBasics?.X }}</span>
          <span class="mx-2">|</span>
          <span>Y: {{ data.mapBasics?.Y }}</span>
        </a>
      </el-descriptions-item>
      <el-descriptions-item :label="t('registration_date')">
        {{ formatStandard(data.basics?.kingdomJoinTime) }}
      </el-descriptions-item>
      <el-descriptions-item :label="t('last_login')">
        {{ formatStandard(data.basics?.latestLoginTime) }}
      </el-descriptions-item>
      <el-descriptions-item :label="t('building_id')">
        {{ data.building_id }}
      </el-descriptions-item>
    </el-descriptions>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { formatStandard } from '/@/utils'

export default defineComponent({
  name: 'KgPlayerInfo',
  props: {
    data: {
      type: Object,
      require: true,
      default: null,
    },
    loading: {
      type: Boolean,
      require: true,
    },
  },
  setup() {
    const { t } = useI18n()

    return {
      t,
      formatStandard,
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
  open_permanent_protective_cover: Open the permanent protective cover
  repair_alliance_data: Repair alliance data
  reset_portrait: Reset Portrait
  reset_fpid: Reset Fpid
  building_id: Building ID
zh-cn:
  open_permanent_protective_cover: 开启永久保护罩
  repair_alliance_data: 修复联盟数据
  reset_portrait: 重置 Portrait
  reset_fpid: 重置 Fpid
  building_id: Building ID
</i18n>
