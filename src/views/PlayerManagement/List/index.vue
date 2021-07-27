<template>
  <el-card>
    <template #header>
      {{ t('player_list') }}
    </template>
    <div class="bg-blue-50 p-4">
      <el-form
        ref="fromRef"
        :model="formModel"
        inline
        class="grid grid-cols-3 gap-2"
      >
        <el-form-item prop="kingdom_id">
          <template #label> Kingdom ID </template>
          <el-select v-model="formModel.kingdom_id" class="w-full">
            <el-option v-for="id in ids" :key="id" :label="id" :value="id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="player_id">
          <template #label>Player Id</template>
          <el-input
            v-model="formModel.player_id"
            placeholder="请输入内容"
            class="prefix-with-prefix"
          >
            <template #prepend>
              <el-select v-model="formModel.player_type" placeholder="请选择">
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
          <template #label>Player Name</template>
          <el-input
            v-model="formModel.player_name"
            placeholder="请输入内容"
            class="input-with-select"
          >
          </el-input>
        </el-form-item>
      </el-form>
      <div class="flex justify-end">
        <el-button type="primary">{{ t('search') }}</el-button>
        <el-button>{{ t('reset') }}</el-button>
        <el-button type="primary">{{ t('view_log') }}</el-button>
      </div>
    </div>
    <kg-player-list-table></kg-player-list-table>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import KgPlayerListTable from './table.vue'

export default defineComponent({
  name: 'KgPlayerList',
  components: { KgPlayerListTable },
  setup() {
    const { t } = useI18n()

    const formRef = ref<any>(null)

    const playerTypes = [
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
    ]

    const formModel = reactive({
      kingdom_id: 1,
      player_type: 'Fpid',
      player_id: '',
      player_name: '',
    })

    return {
      t,
      ids: [1, 2, 3, 4],
      formRef,
      formModel,
      playerTypes,
    }
  },
})
</script>

<style lang="scss" scoped>
::v-deep(.prefix-with-prefix) {
  .el-input--suffix {
    width: 125px;
  }
}
</style>
