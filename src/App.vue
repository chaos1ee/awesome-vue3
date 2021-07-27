<template>
  <div class="h-screen overflow-auto">
    <kg-header class="h-14 fixed top-0 left-0 right-0"></kg-header>
    <div class="h-full pt-14 flex">
      <aside class="overflow-auto">
        <kg-nav
          class="h-full"
          background-color="#545c64"
          active-text-color="#409EFF"
        ></kg-nav>
      </aside>
      <main class="flex-1 p-6 overflow-auto bg-gray-50 relative">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { KgHeader, KgNav } from '/components/index'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: { KgHeader, KgNav },
})
</script>
