<template>
  <div class="w-1/4">
    <el-upload
      ref="uploadRef"
      class="upload-demo"
      action="https://api.anonfiles.com/upload/"
      :on-remove="handleRemove"
      :file-list="fileList"
      :auto-upload="false"
    >
      <template #trigger>
        <el-button size="small" type="primary">
          {{ t('select_files') }}
        </el-button>
      </template>
      <el-button
        style="margin-left: 10px"
        size="small"
        type="success"
        @click="submitUpload"
      >
        {{ t('upload_to_server') }}
      </el-button>
      <template #tip>
        <div class="el-upload__tip">{{ t('upload_tip') }}</div>
      </template>
    </el-upload>
  </div>
</template>

<script lang="ts">
import { ElUpload } from 'element-plus/lib/el-upload/src/upload.type'
import { defineComponent, ref, unref } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'KgUploadFile',
  setup() {
    const { t } = useI18n()
    const fileList = ref([])
    const uploadRef = ref<null | ElUpload>(null)

    return {
      t,
      fileList,
      uploadRef,
      submitUpload() {
        const upload = unref(uploadRef)
        console.log(upload)
        if (upload) {
          upload.submit()
        }
      },
      handleRemove(file: File, fileList: FileList) {
        console.log(file, fileList)
      },
      handlePreview(file: File) {
        console.log(file)
      },
    }
  },
})
</script>

<style lang="scss" scoped>
// add your custom css styles here
</style>
