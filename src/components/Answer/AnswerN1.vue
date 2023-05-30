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

<style>
.single-question__question {
  margin-top: 2.4rem;
  font: 2.4rem Times New Roman;
  border-bottom: 1px solid #fff;
  cursor: pointer;
}

.single-question__answer {
  font: 1.8rem Times New Roman;
  margin: 2.4rem 0;
}

.single-question__answer-paragraph {
  margin: 1.2rem 0;
  text-align: justify;
}
</style>
