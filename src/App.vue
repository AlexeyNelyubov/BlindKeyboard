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
  height: 100vh;
  padding: 8vmin;
  background-color: #000;
}
</style>
