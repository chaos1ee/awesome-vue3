<template>
  <el-card>
    <el-form
      ref="formRef"
      :model="formModel"
      status-icon
      label-width="180px"
      label-position="right"
    >
      <kg-custom-section>
        <template #header>
          {{ t('receiver') }}
        </template>
        <el-form-item prop="receiver_type" required>
          <el-radio-group v-model="formModel.receiver_type">
            <el-radio-button :label="1"></el-radio-button>
            <el-radio-button :label="2"></el-radio-button>
          </el-radio-group>
        </el-form-item>
      </kg-custom-section>

      <!-- <el-form-item :label="t('ban_reason')" prop="reason" required>
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
    </el-form-item> -->
    </el-form>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useI18n } from 'vue-i18n'

import { KgCustomSection } from '/components/index'

export default defineComponent({
  name: 'KgSendMail',
  components: { KgCustomSection },
  setup() {
    const { t } = useI18n()
    const formModel = reactive({
      receiver_type: 1,
    })

    return {
      t,
      formModel,
    }
  },
})
</script>

<style lang="scss" scoped>
// adding your custom css styles here
</style>

<i18n lang="yaml">
en:
  receiver_type: Receiver Type
zh-cn:
  receiver_type: Type
</i18n>
