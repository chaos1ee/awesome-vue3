<template>
  <kg-filter-wrap>
    <el-form
      ref="fromRef"
      :model="formModel"
      inline
      class="grid grid-cols-3 gap-4"
    >
      <el-form-item prop="ban_type">
        <template #label>{{ t('ban_type') }}</template>
        <el-select v-model="formModel.ban_type" class="w-full">
          <el-option
            v-for="item in banTypes"
            :key="item.value"
            :label="t(item.label)"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="player_id">
        <template #label>Uid</template>
        <el-input
          v-model="formModel.uid"
          :placeholder="t('please_input')"
          class="prefix-with-prefix"
        >
        </el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button type="primary">{{ t('search') }}</el-button>
      <el-button>{{ t('reset') }}</el-button>
    </template>
  </kg-filter-wrap>
  <el-table :data="tableData">
    <el-table-column prop="uid" label="Uid" width="150px"></el-table-column>
    <el-table-column prop="reason" :label="t('reason')"></el-table-column>
    <el-table-column prop="memo" :label="t('memo')"></el-table-column>
    <el-table-column prop="end_time" :label="t('end_time')" width="200px">
      <template #default="scope">
        {{ format(scope.row.end_time) }}
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { KgFilterWrap } from '/components/index'
import dayjs from 'dayjs'

export default defineComponent({
  name: 'KgPlayerQuery',
  components: { KgFilterWrap },
  setup() {
    const { t } = useI18n()

    const formModel = reactive({
      ban_type: 1,
      uid: '',
    })

    const tableData = [
      {
        uid: 1,
        reason: '有害信息',
        memo: 'Level 1',
        end_time: 1628048298184,
      },
      {
        uid: 2,
        reason: '语言攻击其他玩家',
        memo: 'Level 1',
        end_time: 1628048299184,
      },
      {
        uid: 3,
        reason: '玉蛟龙',
        memo: 'Level 1',
        end_time: 1628148229184,
      },
      {
        uid: 4,
        reason: '玉蛟龙',
        memo: 'Level 1',
        end_time: 1628148293184,
      },
    ]

    return {
      t,
      tableData,
      formModel,
      banTypes: [
        {
          label: 'ban_login',
          value: 1,
        },
        {
          label: 'ban_chat',
          value: 2,
        },
      ],
      format(timeStamp: number) {
        return dayjs(new Date(timeStamp)).format('YYYY-MM-DD HH:mm:ss')
      },
    }
  },
})
</script>
