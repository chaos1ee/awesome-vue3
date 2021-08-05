<template>
  <div class="bg-blue-50 p-4">
    <slot></slot>
    <div class="flex justify-end">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'KgFilterWrap',
})
</script>
