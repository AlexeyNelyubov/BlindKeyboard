<script setup>
import { ref } from "vue";

defineEmits(["change-random-text"]);

const speed = ref(0);
const accuracy = ref(100);
</script>

<template>
  <div class="testing-params">
    <div>
      <p class="testing-params__item">Скорость</p>
      <p class="testing-params__item-value">
        {{ speed }} <span style="font-size: 0.6em">зн./мин</span>
      </p>
      <p class="testing-params__item">Точность</p>
      <p class="testing-params__item-value">
        {{ accuracy }} <span style="font-size: 0.6em">%</span>
      </p>
    </div>
    <button class="new-test-button" @click="$emit('change-random-text')">
      Заново!
    </button>
  </div>
</template>

<style>
.testing-params {
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: justify;
}

.testing-params__item {
  margin-bottom: 12px;
  font: 2em Times New Roman;
  color: #fff;
}

.testing-params__item-value {
  margin-bottom: 32px;
  font: 2.5em Times New Roman;
  color: #fff;
}

.new-test-button {
  padding: 8px 40px;
  font: 1.5rem cursive;
  color: #7b7b7b;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 12px;
}
</style>
