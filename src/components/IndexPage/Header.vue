<script setup>
import { ref } from "vue";
import { useTestingParamsStore } from "/src/stores/testingParams.js";

const testingParamsStore = useTestingParamsStore();

const textForHeader = ref("");

if (testingParamsStore.isFinishTesting) {
  textForHeader.value = "Тест успешно пройден!";
} else {
  textForHeader.value = "Привет! Хочешь проверить свою скорость печати?";
}
</script>

<template>
  <header class="index-header">
    {{ textForHeader }}
  </header>
</template>

<style>
.index-header {
  margin: 116px 0 72px 0;
  font: 2rem cursive;
  color: #fff;
}
</style>
