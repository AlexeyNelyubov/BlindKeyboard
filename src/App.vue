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
  width: 100vw;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
}
</style>
