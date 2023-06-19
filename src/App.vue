<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <main class="app-main">
    <RouterView />
  </main>
</template>

<style>
.app-main {
  background-color: var(--background-color);
}
</style>
