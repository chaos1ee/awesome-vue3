<template>
  <div class="mb-4">
    <el-alert
      title="主键是uid，可以切换成fpid。假如有多个主键，可以输入部分进行guess搜索"
      type="info"
      center
      :closable="false"
    ></el-alert>
  </div>

  <div class="absolute top-20 bottom-8 right-6 left-6">
    <kg-editor :value="data" :options="options"></kg-editor>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import KgEditor, { EditorOptions } from '/components/Editor/index.vue'

export default defineComponent({
  name: 'KgDatabaseTool',
  components: { KgEditor },
  setup() {
    return {
      data: ref(),
      options: {
        language: 'json',
        readOnly: false,
      } as EditorOptions,
    }
  },
})
</script>

<style lang="scss" scoped>
// add your custom css styles here
</style>
