<template>
  <el-card>
    <kg-filter-wrap>
      <el-form
        ref="fromRef"
        :model="formModel"
        inline
        class="grid grid-cols-3 gap-4"
      >
        <el-form-item prop="kingdom_id">
          <template #label> {{ t('kingdom_id') }}</template>
          <el-select
            v-model="formModel.kingdom_id"
            class="w-full"
            :placeholder="t('select_kindom_id')"
          >
            <el-option
              v-for="id in kindom_ids"
              :key="id"
              :label="id"
              :value="id"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="player_id">
          <template #label>{{ t('player_id') }}</template>
          <el-input
            v-model="formModel.player_id"
            :placeholder="t('please_input')"
            class="input-with-select"
          >
            <template #prepend>
              <el-select v-model="formModel.player_type">
                <el-option
                  v-for="type in playerTypes"
                  :key="type.value"
                  :label="type.label"
                  :value="type.value"
                >
                </el-option>
              </el-select>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="player_name">
          <template #label>{{ t('player_name') }}</template>
          <el-input
            v-model="formModel.player_name"
            :placeholder="t('please_input')"
          >
          </el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button type="primary">{{ t('search') }}</el-button>
        <el-button>{{ t('reset') }}</el-button>
        <el-button type="primary">{{ t('view_log') }}</el-button>
      </template>
    </kg-filter-wrap>
    <kg-player-table :table-data="tableData"></kg-player-table>
    <div class="mt-4 flex justify-end">
      <el-pagination
        background
        :total="total"
        :page-sizes="[10, 20, 30, 50]"
        layout="total, sizes, prev, pager, next, jumper"
      >
      </el-pagination>
    </div>
  </el-card>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import KgPlayerTable from './table.vue'
import { getPlayerList, PlayerItem } from '/@/apis'
import { KgFilterWrap } from '/components/index'

export default defineComponent({
  name: 'KgPlayerList',
  components: { KgPlayerTable, KgFilterWrap },
  setup() {
    const { t } = useI18n()

    const formRef = ref<any>(null)

    const playerTypes = ref([
      {
        label: 'Fpid',
        value: 'Fpid',
      },
      {
        label: 'Uid',
        value: 'Uid',
      },
      {
        label: 'Channel Uid',
        value: 'Channel Uid',
      },
    ])

    const formModel = reactive({
      kingdom_id: '',
      player_type: 'Fpid',
      player_id: '',
      player_name: '',
    })

    const tableData = ref<PlayerItem[]>([])

    onMounted(async () => {
      const { data } = await getPlayerList({ start: 0, length: 10 })
      tableData.value = data
    })

    return {
      t,
      kindom_ids: ['k1'],
      formRef,
      formModel,
      playerTypes,
      tableData,
      total: computed(() => tableData.value.length),
    }
  },
})
</script>

<style lang="scss" scoped>
::v-deep(.input-with-select) {
  .el-input--suffix {
    width: 130px;
  }

  .el-input-group__prepend {
    background-color: #fff;
  }
}
</style>
