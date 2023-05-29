<script setup>
import { ref } from "vue";
const dropDown = ref(false);
</script>

<template>
  <div class="single-question">
    <p @click="dropDown = !dropDown" class="single-question__question">
      Как проверить скорость набора текста онлайн?
    </p>
    <div v-show="dropDown" class="single-question__answer">
      <p class="single-question__answer-paragraph">
        Скорость печати можно проверить на нашем сайте, для этого нужно просто
        пройти тест.
      </p>
      <p class="single-question__answer-paragraph">
        Во время прохождении теста необходимо быть внимательным.
      </p>
      <p class="single-question__answer-paragraph">
        При опечатке подсчет символов останавливается, но таймер продолжит
        отсчёт и нужно как можно скорее ввести корректный символ.
      </p>
    </div>
  </div>
</template>

<style></style>
//style for component located in parent component CommonQuestions.vue
