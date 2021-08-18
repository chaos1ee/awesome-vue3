<template>
  <el-card>
    <kg-filter-wrap>
      <el-form
        ref="formRef"
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
            @change="refetch"
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
      </template>
    </kg-filter-wrap>
    <kg-player-table :table-data="tableData"></kg-player-table>
    <div class="mt-4 flex justify-end">
      <el-pagination
        v-model:currentPage="formModel.currentPage"
        v-model:page-size="formModel.pageSize"
        background
        :total="total"
        :page-sizes="[10, 20, 50]"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="refetch"
        @current-change="refetch"
      >
      </el-pagination>
    </div>
  </el-card>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import KgPlayerTable from './table.vue'
import { kingdomApi, playerApi } from '/@/apis'
import { PlayerItem } from '/@/apis/player/type'
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

    const formModel = reactive<
      Partial<{
        kingdom_id: string
        player_type: string
        player_id: number
        player_name: string
        currentPage: number
        pageSize: number
      }>
    >({
      player_type: 'Fpid',
      currentPage: 1,
      pageSize: 10,
    })

    const kindom_ids = ref()

    const tableData = ref<PlayerItem[]>([])

    kingdomApi.getKingdomList().then(res => {
      kindom_ids.value = res
      formModel.kingdom_id = res[0]
      refetch()
    })
    ;(async () => {
      try {
        kindom_ids.value = await kingdomApi.getKingdomList()
        formModel.kingdom_id = kindom_ids.value[0]
        refetch()
      } catch (err) {}
    })()

    async function refetch() {
      const { list } = await playerApi.getPlayerList({
        kingdomId: formModel.kingdom_id,
        uid: formModel.player_id,
        uname: formModel.player_name,
        p: formModel.currentPage,
        per_page_num: formModel.pageSize,
      })

      tableData.value = list
    }

    return {
      t,
      kindom_ids,
      formRef,
      formModel,
      playerTypes,
      tableData,
      total: computed(() => tableData.value.length),
      refetch,
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
