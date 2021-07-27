<template>
  <div id="editor" ref="editorRef" style="height: 100%"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue'
import * as monaco from 'monaco-editor'
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'

export type EditorOptions = monaco.editor.IStandaloneEditorConstructionOptions

// Set worker for monaco-editor
// https://github.com/vitejs/vite/discussions/1791?sort=old#discussioncomment-321046
;(self as any).MonacoEnvironment = {
  getWorker(_: any, label: any) {
    if (label === 'json') {
      return new jsonWorker()
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return new cssWorker()
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return new htmlWorker()
    }
    if (label === 'typescript' || label === 'javascript') {
      return new tsWorker()
    }
    return new editorWorker()
  },
}

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
