<template>
  <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55"> </el-table-column>
    <el-table-column label="IP">
      <template #default="scope">{{ scope.row }}</template>
    </el-table-column>
    <el-table-column :label="t('action')" width="80">
      <el-button
        size="mini"
        type="danger"
        icon="el-icon-delete"
        circle
      ></el-button>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const tableData = [
  '127.0.0.1',
  '219.141.227.166',
  '202.60.224.162',
  '218.189.10.188',
  '52.24.109.189',
  '137.59.100.146',
  '45.137.237.7',
  '45.113.164.16',
  '106.39.87.194',
  '69.172.85.194',
  '111.202.159.2',
  '202.60.225.162',
  '202.60.225.163',
  '202.60.225.164',
  '202.60.225.165',
  '202.60.225.166',
  '202.60.225.167',
  '202.60.225.168',
]

export default defineComponent({
  name: 'KgFpidWhiteList',
  setup() {
    const { t } = useI18n()
    const selection = ref<string[]>([])

    return {
      t,
      tableData,
      handleSelectionChange(val: string[]) {
        selection.value = val
      },
    }
  },
})
</script>
