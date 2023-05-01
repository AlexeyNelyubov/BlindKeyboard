<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <main class="app">
    <RouterView />
  </main>
</template>

<style>
.app {
  width: 100vw;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
}
</style>
