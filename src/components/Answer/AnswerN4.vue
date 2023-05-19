<script setup>
import { ref } from "vue";
const dropDown = ref(false);
</script>

<template>
  <div class="question">
    <p @click="dropDown = !dropDown">Какая средняя скорость слепой печати?</p>
    <div v-show="dropDown" class="question__answer">
      <p class="paragraph">
        Средняя скорость печати составляет всего 207 знаков в минуту. Чтобы
        улучшить навыки набора текста и научиться печатать, как профессионал,
        нужно постоянно тренироваться.
      </p>
      <p class="paragraph">
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
  font: 1.5rem Times New Roman;
  color: #fff;
  border-bottom: 1px solid #fff;
}

.question__answer {
  margin: 12px 0;
  font: 1.2rem Times New Roman;
  text-align: justify;
}

.paragraph {
  margin: 16px 0;
}
</style>
