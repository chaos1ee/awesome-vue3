<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="Name">
      <template #default="scope">
        <router-link
          :to="{ path: 'player_detail/' + scope.row.name }"
          class="text-primary"
        >
          {{ scope.row.name }}
        </router-link>
      </template>
    </el-table-column>
    <el-table-column prop="uid" :label="t('player_id')"> </el-table-column>
    <el-table-column prop="fpid" label="Fpid"> </el-table-column>
    <el-table-column prop="kid" label="Kindom Id"> </el-table-column>
    <el-table-column :label="t('registration_date')">
      <template #default="scope">
        {{ format(scope.row.createTime) }}
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import dayjs from 'dayjs'

export default defineComponent({
  name: 'KgPlayerTable',
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const { t } = useI18n()

    return {
      t,
      format(timeStamp: string) {
        return dayjs(timeStamp).format('YYYY-MM-DD HH:mm:ss')
      },
    }
  },
})
</script>
