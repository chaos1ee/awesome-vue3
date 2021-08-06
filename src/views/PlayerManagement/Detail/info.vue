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
                <el-dropdown-item>{{
                  t('open_permanent_protective_cover')
                }}</el-dropdown-item>
                <el-dropdown-item>{{
                  t('repair_alliance_data')
                }}</el-dropdown-item>
                <el-dropdown-item divided>{{
                  t('reset_fpid')
                }}</el-dropdown-item>
                <el-dropdown-item>{{ t('reset_portrait') }}</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </template>
    <el-skeleton v-if="loading" :rows="10" animated />
    <el-descriptions
      v-else
      :column="4"
      size="medium"
      border
      direction="vertical"
    >
      <el-descriptions-item :label="t('funplus_id')">{{
        data.funplus_id
      }}</el-descriptions-item>
      <el-descriptions-item :label="t('player_name')">{{
        data.player_name
      }}</el-descriptions-item>
      <el-descriptions-item :label="t('nickname')">{{
        data.nickname
      }}</el-descriptions-item>
      <el-descriptions-item :label="t('privilege')">{{
        data.privilege
      }}</el-descriptions-item>
      <el-descriptions-item :label="t('race')">{{
        data.race
      }}</el-descriptions-item>
      <el-descriptions-item :label="t('end_novice')">{{
        data.end_novice
      }}</el-descriptions-item>
      <el-descriptions-item :label="t('level')">{{
        data.level
      }}</el-descriptions-item>
      <el-descriptions-item :label="t('exp')">{{
        data.exp
      }}</el-descriptions-item>
      <el-descriptions-item :label="t('language')">
        <el-tag size="small">{{ data.language }}</el-tag>
      </el-descriptions-item>
      <el-descriptions-item :label="t('vip_level')">{{
        data.vip_level
      }}</el-descriptions-item>
      <el-descriptions-item :label="t('alliance')">{{
        data.alliance
      }}</el-descriptions-item>
      <el-descriptions-item :label="t('guild')">{{
        data.guild
      }}</el-descriptions-item>
      <el-descriptions-item :label="t('kingdom_id')">{{
        data.kid
      }}</el-descriptions-item>
      <el-descriptions-item :label="t('x_y_axis')">
        <a href="javascript:void(0);" class="text-primary">
          <span>X: {{ data.axis.x }}</span>
          <span class="mx-2">|</span>
          <span>Y: {{ data.axis.y }}</span>
        </a>
      </el-descriptions-item>
      <el-descriptions-item :label="t('registration_date')">{{
        formatStandard(data.registration_date)
      }}</el-descriptions-item>
      <el-descriptions-item :label="t('last_login')">{{
        formatStandard(data.last_login)
      }}</el-descriptions-item>
      <el-descriptions-item :label="t('building_id')">{{
        data.building_id
      }}</el-descriptions-item>
      <el-descriptions-item :label="t('gender')">{{
        t(data.gender)
      }}</el-descriptions-item>
    </el-descriptions>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { formatStandard } from '/@/utils'

const MOCK_DATA = {
  funplus_id: 0,
  player_name: 'wod0-2015_S1',
  nickname: 'wod0-2015_S1',
  privilege: '_Robot',
  race: 2,
  end_novice: 1,
  level: 1,
  exp: 45187,
  language: 'en',
  vip_level: 2,
  alliance: true,
  guild: 'yes',
  kid: 'k1',
  axis: {
    x: 3061,
    y: 402,
  },
  registration_date: 1627974910257,
  last_login: 1627970261864,
  building_id: 295,
  gender: 'male',
}

export default defineComponent({
  name: 'KgPlayerInfo',

  setup() {
    const { t } = useI18n()

    const loading = ref(true)
    const data = ref<any>(null)

    new Promise(resolve => setTimeout(resolve, 2000)).then(() => {
      loading.value = false
      data.value = MOCK_DATA
    })

    return {
      t,
      loading,
      data: MOCK_DATA,
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
