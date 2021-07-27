<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="player_id" :label="t('player_id')">
    </el-table-column>
    <el-table-column prop="player_name" :label="t('player_name')">
    </el-table-column>
    <el-table-column prop="hero_level" :label="t('hero_level')">
    </el-table-column>
    <el-table-column prop="city_level" :label="t('city_level')">
    </el-table-column>
    <el-table-column prop="kg_tag" :label="t('kg_tag')"> </el-table-column>
    <el-table-column prop="last_login" :label="t('last_login')">
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'KgReview',
  setup() {
    const { t } = useI18n()

    const tableData = [
      {
        player_id: '1',
        player_name: '玉蛟龙',
        hero_level: 'Level 1',
        city_level: '1',
        kg_tag: '愣头青',
        last_login: '1986-08-01',
      },
      {
        player_id: '2',
        player_name: '罗小虎',
        hero_level: 'Level 2',
        city_level: '2',
        kg_tag: '铁头娃',
        last_login: '1986-08-01',
      },
      {
        player_id: '3',
        player_name: '李慕白',
        hero_level: 'Level 3',
        city_level: '3',
        kg_tag: '高人',
        last_login: '1986-08-01',
      },
      {
        player_id: '4',
        player_name: '俞秀莲',
        hero_level: 'Level 4',
        city_level: '4',
        kg_tag: '侠女',
        last_login: '1986-08-01',
      },
    ]

    return {
      t,
      tableData,
    }
  },
})
</script>
