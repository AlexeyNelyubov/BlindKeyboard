<script setup>
import { ref } from "vue";
const dropDown = ref(false);
</script>

<template>
  <div class="question">
    <p @click="dropDown = !dropDown" class="question__question">
      Как проверить скорость набора текста онлайн?
    </p>
    <div v-show="dropDown" class="question__answer">
      <p class="question__answer-paragraph">
        Скорость печати можно проверить на нашем сайте, для этого нужно просто
        пройти тест.
      </p>
      <p class="question__answer-paragraph">
        Во время прохождении теста необходимо быть внимательным.
      </p>
      <p class="question__answer-paragraph">
        При опечатке подсчет символов останавливается, но таймер продолжит
        отсчёт и нужно как можно скорее ввести корректный символ.
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
