<script setup>
import { ref } from "vue";
const dropDown = ref(false);
</script>

<template>
  <div class="question">
    <p @click="dropDown = !dropDown" class="question__question">
      Скорость печати 100 зн./мин хорошая?
    </p>
    <div v-show="dropDown" class="question__answer">
      <p class="question__answer-paragraph">
        Зависит от возраста. Например, для детей начальной и средней школы это
        хорошая скорость. Для старшей школы и взрослых скорость 100 зн./мин
        считается низкой.
      </p>
      <p class="question__answer-paragraph">
        Пройди курс печати и твоя скорость набора увеличится.
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
