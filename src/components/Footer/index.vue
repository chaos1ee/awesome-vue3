<template>
  <div class="flex items-center justify-center bg-white">
    <span :data-text="'&copy;&nbsp;' + copywrite"></span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'KgFooter',
  setup() {
    const store = useStore()
    const isCollapse = computed(() => store.state.nav.isCollapse)

    return {
      isCollapse,
      title: import.meta.env.VITE_DOCUMENT_TITLE,
      copywrite: import.meta.env.VITE_COPYWRITE,
    }
  },
})
</script>

<style lang="scss" scoped>
[data-text]::after {
  content: attr(data-text);
}
</style>
