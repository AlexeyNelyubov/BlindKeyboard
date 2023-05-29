<script setup>
import { ref } from "vue";
const dropDown = ref(false);
</script>

<template>
  <div class="single-question">
    <p @click="dropDown = !dropDown" class="single-question__question">
      Скорость печати 100 зн./мин хорошая?
    </p>
    <div v-show="dropDown" class="single-question__answer">
      <p class="single-question__answer-paragraph">
        Зависит от возраста. Например, для детей начальной и средней школы это
        хорошая скорость. Для старшей школы и взрослых скорость 100 зн./мин
        считается низкой.
      </p>
      <p class="single-question__answer-paragraph">
        Пройди курс печати и твоя скорость набора увеличится.
      </p>
    </div>
  </div>
</template>

<style></style>
//style for component located in parent component CommonQuestions.vue
