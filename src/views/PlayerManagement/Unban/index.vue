<template>
  <el-card>
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
    <el-table :data="data">
      <el-table-column prop="uid" label="Uid" width="150px">
        <template #default="scope">
          <router-link
            :to="{ path: 'player_detail/' + scope.row.uid }"
            class="text-primary"
          >
            {{ scope.row.uid }}
          </router-link>
        </template>
      </el-table-column>
      <el-table-column prop="reason" :label="t('reason')"></el-table-column>
      <el-table-column prop="memo" :label="t('memo')"></el-table-column>
      <el-table-column prop="end_time" :label="t('end_time')" width="200px">
        <template #default="scope">
          {{ formatStandard(scope.row.end_time) }}
        </template>
      </el-table-column>
      <el-table-column :label="t('action')" width="150" align="center">
        <template #default="scope">
          <el-button size="mini" @click="unban(scope.row)">
            {{ t('unban') }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { KgFilterWrap } from '/components/index'
import { formatStandard } from '/@/utils'
import { ElMessageBox } from 'element-plus'
import { playerApi } from '/@/apis'
import { BanedPlayer } from '/@/apis/player/type'

export default defineComponent({
  name: 'KgUnban',
  components: { KgFilterWrap },
  setup() {
    const { t } = useI18n()

    const formModel = reactive<{
      ban_type: 1 | 2
      uid: string
    }>({
      ban_type: 1,
      uid: '',
    })

    const data = ref()

    ;(async () => {
      try {
        const { list } = await playerApi.getPlayerBanedList({
          kingdomId: 'k1',
          banType: formModel.ban_type,
        })
        data.value = list
      } catch (err) {}
    })()

    return {
      t,
      data,
      formModel,
      formatStandard,
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
      async unban(player: BanedPlayer) {
        try {
          await ElMessageBox.confirm(
            t('lift_ban_confirm_title', { id: player.uid }),
            t('unban_player'),
            {
              distinguishCancelAndClose: true,
              confirmButtonText: t('confirm'),
              cancelButtonText: t('cancel'),
            },
          )
          await playerApi.unbanPlayer({ uids: [player.uid] })
        } catch (err) {}
      },
    }
  },
})
</script>

<i18n lang="yaml">
en:
  lift_ban_confirm_title: Are you sure you want to unban player "{id}" ？
  unban_player: Unban a player
zh-cn:
  lift_ban_confirm_title: 确定要解禁玩家 “{id}” 吗？
  unban_player: 解禁玩家
</i18n>
