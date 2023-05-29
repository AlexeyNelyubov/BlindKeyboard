<script setup>
import { ref } from "vue";
const dropDown = ref(false);
</script>

<template>
  <div class="single-question">
    <p @click="dropDown = !dropDown" class="single-question__question">
      Какая средняя скорость слепой печати?
    </p>
    <div v-show="dropDown" class="single-question__answer">
      <p class="single-question__answer-paragraph">
        Средняя скорость печати составляет всего 207 знаков в минуту. Чтобы
        улучшить навыки набора текста и научиться печатать, как профессионал,
        нужно постоянно тренироваться.
      </p>
      <p class="single-question__answer-paragraph">
        Запомни: практика, практика и еще раз практика. Исследования показали,
        что постоянная практика помогает превысить средний показатель скорости
        печати в три раза. Проверить скорость печати онлайн ты можешь вместе с
        нами.
      </p>
    </div>
  </div>
</template>

<style></style>
//style for component located in parent component CommonQuestions.vue
