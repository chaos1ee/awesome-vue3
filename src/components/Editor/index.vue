<template>
  <div id="editor" ref="editorRef" style="height: 100%"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue'
import * as monaco from 'monaco-editor'

export type EditorOptions = monaco.editor.IStandaloneEditorConstructionOptions

export default defineComponent({
  anme: 'KgEditor',
  props: {
    options: {
      type: Object,
      default: null,
    },
    value: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const editorRef = ref<null | HTMLElement>(null)

    onMounted(() => {
      if (editorRef.value) {
        const container = editorRef.value

        const defaultOptions: EditorOptions = {
          theme: 'vs-dark',
          language: 'json',
          readOnly: true,
          minimap: {
            enabled: false,
          },
          automaticLayout: true,
          scrollBeyondLastLine: false,
        }

        const editor = monaco.editor.create(container, {
          value: props.value,
          ...defaultOptions,
          ...props.options,
        })

        watch(
          () => props.value,
          (value) => {
            editor.setValue(value)
          }
        )
      }
    })

    return { editorRef }
  },
})
</script>
