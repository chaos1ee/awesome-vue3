<template>
  <el-card>
    <template #header> {{ t('reissue_rewards') }} </template>
    <div class="mx-20">
      <el-form ref="formRef" :model="formModel" label-width="200px">
        <el-form-item prop="fpid" required>
          <template #label>补发的 Fpid</template>
          <el-input v-model="formModel.fpid" required></el-input>
        </el-form-item>
        <el-form-item prop="login_date" required>
          <template #label>补发的活动</template>
          <el-input v-model="formModel.login_date"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="onReset">{{ t('reset') }}</el-button>
          <el-button type="primary" @click="onSubmit">
            {{ t('submit') }}
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, unref } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'KgReissueRewards',
  setup() {
    const { t } = useI18n()
    const formRef = ref()
    const formModel = reactive({
      fpid: '',
      login_date: '',
    })

    const onReset = () => {
      const form = unref(formRef)

      if (form) {
        form.resetFields()
      }
    }

    const onSubmit = async () => {
      const form = unref(formRef)

      if (form) {
        try {
          form.validate()
          const { fpid } = formModel
          console.log(fpid)
        } catch (err) {}
      }
    }

    return { t, formRef, formModel, onReset, onSubmit }
  },
})
</script>
