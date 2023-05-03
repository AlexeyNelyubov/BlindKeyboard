<script setup>
import { ref } from "vue";
import { useTestingParamsStore } from "/src/stores/testingParams.js";

const testingParamsStore = useTestingParamsStore();

defineEmits(["start-test"]);

const textForButton = ref("");

if (testingParamsStore.isFinishTesting) {
  textForButton.value = "Попробовать ещё!";
  testingParamsStore.updateTestingParamsStore();
} else {
  textForButton.value = "Начать тест!";
}
</script>

<template>
  <button @click="$emit('start-test')" class="index-start-test">
    {{ textForButton }}
  </button>
</template>

<style>
.index-start-test {
  margin-top: 24px;
  padding: 16px 32px;
  font: 1.5rem cursive;
  color: #fff;
  text-align: center;
  text-decoration: none;
  background-color: #4caf50;
  border: none;
  border-radius: 12px;
}
</style>
