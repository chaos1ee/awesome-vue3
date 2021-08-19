<template>
  <el-dialog v-model="visible" :title="t('ban')" width="30%">
    <el-form ref="formRef" :model="formModel" status-icon label-width="110px">
      <el-form-item :label="t('baned_ids')">
        <ul>
          <li v-for="id in ids" :key="Number(id)">{{ id }}</li>
        </ul>
      </el-form-item>
      <el-form-item :label="t('ban_type')" prop="type" required>
        <el-radio-group v-model="formModel.type">
          <el-radio :label="1">{{ t('ban_login') }}</el-radio>
          <el-radio :label="2">{{ t('ban_chat') }}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item :label="t('ban_reason')" prop="reason" required>
        <el-radio-group v-model="formModel.reason">
          <el-radio label="1">
            <span>{{ t('normal') }}</span>
            <span>{{ t('left_parenthesis') }}</span>
            <span style="color: #f96868">
              {{ t('paying_players_review') }}
            </span>
            <span>{{ t('right_parenthesis') }}</span>
          </el-radio>
          <el-radio label="2">{{ t('plugin') }}</el-radio>
          <el-radio label="3">{{ t('refund') }}</el-radio>
          <el-radio label="4">{{ t('buy_resources') }}</el-radio>
          <el-radio label="5">{{ t('surrogate') }}</el-radio>
          <el-radio label="6">{{ t('sensitive_word_filtering') }}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item :label="t('ban_duration')" prop="duration" required>
        <el-select v-model="formModel.duration">
          <el-option
            v-for="duration in durations"
            :key="duration.value"
            :label="duration.label"
            :value="duration.value"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button type="primary" @click="onSubmit">
        {{ t('confirm') }}
      </el-button>
      <el-button @click="cancel">{{ t('cancel') }}</el-button>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, unref, watch } from 'vue'
import { useI18n, VueI18n } from 'vue-i18n'
import { useStore } from 'vuex'
import { playerApi } from '/@/apis'

function returnDurationsOptions(t: VueI18n['tc']) {
  return [
    {
      value: 1,
      label: '1 ' + t('minute', 1),
    },
    {
      value: 5,
      label: '5 ' + t('minute', 5),
    },
    {
      value: 30,
      label: '30 ' + t('minute', 30),
    },
    {
      value: 60,
      label: '1 ' + t('hour', 1),
    },
    {
      value: 12 * 60,
      label: '12 ' + t('hour', 12),
    },
    {
      value: 24 * 60,
      label: '1 ' + t('day', 1),
    },
    {
      value: 2 * 24 * 60,
      label: '2 ' + t('day', 2),
    },
    {
      value: 3 * 24 * 60,
      label: '3 ' + t('day', 3),
    },
    {
      value: 7 * 24 * 60,
      label: '7 ' + t('day', 7),
    },
    {
      value: 15 * 24 * 60,
      label: '15 ' + t('day', 15),
    },
    {
      value: 30 * 24 * 60,
      label: '30 ' + t('day', 30),
    },
    {
      value: -1,
      label: t('forever'),
    },
  ]
}

export default defineComponent({
  name: 'KgBanPlayerDialog',
  props: {
    modelValue: Boolean,
    ids: {
      type: Array,
      require: true,
      default: () => [],
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const store = useStore()
    const { t } = useI18n({ inheritLocale: true })
    const durations = ref(returnDurationsOptions(t))

    watch(
      () => store.state.i18n.locale,
      () => (durations.value = returnDurationsOptions(t)),
    )

    const formRef = ref<any>(null)

    const formModel = reactive<{
      type: 1 | 2
      reason: string
      duration: number
    }>({
      type: 1,
      reason: '1',
      duration: 1,
    })

    const visible = computed({
      get: () => props.modelValue,
      set: val => {
        emit('update:modelValue', val)
      },
    })

    return {
      t,
      durations,
      formModel,
      formRef,
      async onSubmit() {
        const form = unref(formRef)

        if (!form) return

        try {
          await form.validate()
          const res = await playerApi.banPlayer({
            type: formModel.type,
            reason: formModel.reason,
            duration: formModel.duration,
            uids: props.ids as number[],
          })

          if (res) {
            visible.value = false
          }
        } catch (_) {}
      },
      cancel() {
        visible.value = false
      },
      visible,
    }
  },
})
</script>

<i18n lang="yaml">
en:
  paying_players_review: Paying players need to review
  plugin: Plugin
  refund: Refund
  buy_resources: Buy Resources
  surrogate: Surrogate
  sensitive_word_filtering: Sensitive word filtering
  ban_type: Ban Type
  player_type: Player Type
  ban_reason: Ban Reason
  ban_duration: Ban Duration
  please_input_id: Please input ID
  baned_ids: Baned IDs
  ban_type_hint: Please select ban type
zh-cn:
  paying_players_review: 付费玩家需要 review
  plugin: 外挂
  refund: 退款
  buy_resources: 买资源
  surrogate: 代充
  sensitive_word_filtering: 敏感词过滤
  ban_type: 封禁类型
  player_type: 玩家类型
  ban_reason: 封禁原因
  ban_duration: 封禁时长
  please_input_id: Please input ID
  baned_ids: 被封禁的 ID
  ban_type_hint: 请选择封禁类型
</i18n>
