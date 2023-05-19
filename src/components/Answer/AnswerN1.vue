<script setup>
import { ref } from "vue";
const dropDown = ref(false);
</script>

<template>
  <div class="question">
    <p @click="dropDown = !dropDown">
      Как проверить скорость набора текста онлайн?
    </p>
    <div v-show="dropDown" class="question__answer">
      <p class="paragraph">
        Скорость печати можно проверить на нашем сайте, для этого нужно просто
        пройти тест.
      </p>
      <p class="paragraph">
        Во время прохождении теста необходимо быть внимательным.
      </p>
      <p class="paragraph">
        При опечатке подсчет символов останавливается, но таймер продолжит
        отсчёт и нужно как можно скорее ввести корректный символ.
      </p>
    </div>
  </div>
</template>

<style>
.question {
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
