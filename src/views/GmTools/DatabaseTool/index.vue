<template>
  <div class="mb-4">
    <el-alert
      title="主键是uid，可以切换成fpid。假如有多个主键，可以输入部分进行guess搜索"
      type="info"
      center
      :closable="false"
    ></el-alert>
  </div>
  <el-card>
    <div class="h-80">
      <kg-editor :value="data" :options="options"></kg-editor>
    </div>
  </el-card>
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
