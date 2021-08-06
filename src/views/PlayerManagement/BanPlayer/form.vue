<template>
  <el-form
    ref="formRef"
    :model="formModel"
    :rules="rules"
    status-icon
    label-width="200px"
  >
    <el-form-item :label="t('ban_type')" prop="ban_type" required>
      <el-radio-group v-model="formModel.ban_type">
        <el-radio label="1">Ban</el-radio>
        <el-radio label="2">Cancel Ban</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item :label="t('player_type')" prop="player_type" required>
      <el-radio-group v-model="formModel.player_type">
        <el-radio label="1">Fpid</el-radio>
        <el-radio label="2">Uid</el-radio>
        <el-radio label="3">Alliance id</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item :label="t('ban_reason')" prop="ban_reason" required>
      <el-radio-group v-model="formModel.ban_reason">
        <el-radio label="1">
          <span>{{ t('normal') }}</span>
          <span style="color: #f96868">({{ t('paying_players_review') }})</span>
        </el-radio>
        <el-radio label="2">{{ t('plugin') }}</el-radio>
        <el-radio label="3">{{ t('refund') }}</el-radio>
      </el-radio-group>
      <div></div>
      <el-radio-group v-model="formModel.ban_reason">
        <el-radio label="4">{{ t('buy_resources') }}</el-radio>
        <el-radio label="5">{{ t('surrogate') }}</el-radio>
        <el-radio label="6">{{ t('sensitive_word_filtering') }}</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item :label="t('ban_duration')" prop="ban_duration" required>
      <el-select v-model="formModel.ban_duration">
        <el-option
          v-for="duration in durations"
          :key="duration.value"
          :label="duration.label"
          :value="duration.value"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Ids" prop="ban_ids" required>
      <el-input v-model="formModel.ban_ids" type="textarea"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">{{ t('submit') }}</el-button>
      <el-button @click="reset">{{ t('reset') }}</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, unref } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'KgBanPlayerForm',
  setup() {
    const { t } = useI18n()

    const durations = [
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

    const formRef = ref<any>(null)

    const formModel = reactive<{
      ban_type: string
      player_type: string
      ban_reason: string
      ban_duration: number
      ban_ids: string
    }>({
      ban_type: '1',
      player_type: '1',
      ban_reason: '1',
      ban_duration: 1,
      ban_ids: '',
    })

    const onSubmit = async () => {
      const form = unref(formRef)

      if (!form) {
        return
      }

      try {
        await form.validate()
      } catch (err) {
        console.error(err)
      }
    }

    const reset = () => {
      const form = unref(formRef)

      if (!form) {
        return
      }

      form.resetFields()
    }

    const rules = reactive({
      ban_ids: [
        {
          required: true,
          message: t('please_input_id'),
          trigger: 'change',
        },
      ],
    })

    return {
      t,
      durations,
      rules,
      formModel,
      formRef,
      onSubmit,
      reset,
    }
  },
})
</script>
