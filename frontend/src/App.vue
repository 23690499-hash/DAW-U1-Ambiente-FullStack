
<script setup>
import { useRoute } from 'vue-router'
import AppHeader from './components/AppHeader.vue'

const route = useRoute()
</script>

<template>
  <AppHeader v-if="!route.meta.hideHeader" />

  <main class="app-main">
    <RouterView />
  </main>
</template>
