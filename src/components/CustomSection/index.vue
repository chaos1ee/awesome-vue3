<template>
  <div class="custom-section">
    <span class="text-lg my-2">
      <slot name="header"></slot>
    </span>
  </div>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'KgCustomSection',
})
</script>

<style lang="scss" scoped>
// adding your custom css styles here
</style>
