<template>
  <a class="flex items-center h-14" href="/">
    <div
      class="
        flex-grow-0 flex-shrink-0 flex
        items-center
        justify-center
        w-16
        h-14
      "
    >
      <img class="w-8 h-8" src="/@/assets/images/logo.png" alt="logo" />
    </div>
    <div
      v-if="!isCollapse"
      class="
        flex-shrink flex-grow-0
        text-xl
        font-bold
        text-primary
        overflow-hidden overflow-ellipsis
        whitespace-nowrap
        mr-4
      "
    >
      {{ title }}
    </div>
  </a>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'KgLogo',
  setup() {
    const store = useStore()
    const isCollapse = computed(() => store.state.nav.isCollapse)

    return {
      isCollapse,
      title: import.meta.env.VITE_DOCUMENT_TITLE,
    }
  },
})
</script>
