<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55"> </el-table-column>
    <el-table-column prop="uid" :label="t('player_id')">
      <template #default="scope">
        <router-link
          :to="{ path: 'player_detail/' + scope.row.uid }"
          class="text-primary"
        >
          {{ scope.row.uid }}
        </router-link>
      </template>
    </el-table-column>
    <el-table-column prop="name" :label="t('name')"></el-table-column>
    <el-table-column prop="fpid" label="Fpid"> </el-table-column>
    <el-table-column
      prop="kingdomId"
      :label="t('kingdom_id')"
    ></el-table-column>
    <el-table-column :label="t('registration_date')">
      <template #default="scope">
        {{ formatStandard(scope.row.createTime) }}
      </template>
    </el-table-column>
    <el-table-column width="100" align="center">
      <template #header>
        <el-button size="mini" type="danger" @click="banAll">
          {{ t('ban') }}
        </el-button>
      </template>
      <template #default="scope">
        <el-button size="mini" type="danger" @click="ban(scope.row)">
          {{ t('ban') }}
        </el-button>
      </template>
    </el-table-column>
  </el-table>

  <kg-ban-player-dialog
    v-if="dialogVisible"
    v-model="dialogVisible"
    :ids="ids"
  ></kg-ban-player-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { formatStandard } from '/@/utils'
import KgBanPlayerDialog from './ban-dialog.vue'
import { PlayerItem } from '/@/apis/player/type'

export default defineComponent({
  name: 'KgPlayerTable',
  components: { KgBanPlayerDialog },
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const { t } = useI18n()
    const multipleSelection = ref<PlayerItem[]>([])
    const dialogVisible = ref(false)
    const ids = ref<number[]>([])

    return {
      t,
      ids,
      formatStandard,
      dialogVisible,
      ban(item: PlayerItem) {
        ids.value = [item.uid]
        dialogVisible.value = true
      },
      handleSelectionChange(val: PlayerItem[]) {
        multipleSelection.value = val
      },
      banAll() {
        if (multipleSelection.value.length === 0) {
          return
        }
        ids.value = multipleSelection.value.map(item => item.uid)
        dialogVisible.value = true
      },
    }
  },
})
</script>
