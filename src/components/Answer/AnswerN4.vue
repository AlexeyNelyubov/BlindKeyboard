<script setup>
import { ref } from "vue";
const dropDown = ref(false);
</script>

<template>
  <div class="question">
    <p @click="dropDown = !dropDown" class="question__question">
      Какая средняя скорость слепой печати?
    </p>
    <div v-show="dropDown" class="question__answer">
      <p class="question__answer-paragraph">
        Средняя скорость печати составляет всего 207 знаков в минуту. Чтобы
        улучшить навыки набора текста и научиться печатать, как профессионал,
        нужно постоянно тренироваться.
      </p>
      <p class="question__answer-paragraph">
        Запомни: практика, практика и еще раз практика. Исследования показали,
        что постоянная практика помогает превысить средний показатель скорости
        печати в три раза. Проверить скорость печати онлайн ты можешь вместе с
        нами.
      </p>
    </div>
  </div>
</template>

<style>
.question {
  border-bottom: 1px solid #fff;
}
.question__question {
  cursor: pointer;
}

.question__answer {
  font: 1.8rem Times New Roman;
  margin: 1.2rem 0;
  text-align: justify;
}

.question__answer-paragraph {
  margin: 1.6rem 0;
}
</style>
