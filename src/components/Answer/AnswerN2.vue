<script setup>
import { ref } from "vue";
const dropDown = ref(false);
</script>

<template>
  <div class="single-question">
    <p @click="dropDown = !dropDown" class="single-question__question">
      Как измеряется скорость и точность печати?
    </p>
    <div v-show="dropDown" class="single-question__answer">
      <p class="single-question__answer-paragraph">
        Cкорость печати измеряется в знаках (без опечаток) в минуту. Знаком
        считается любой символ, включая пробелы. Учитываются только правильно
        набранные символы.
      </p>
      <p class="single-question__answer-paragraph">
        Точность печати — это процент правильно введенных символов к общему
        количеству символов в тексте.
      </p>
    </div>
  </div>
</template>

<style></style>
//style for component located in parent component AnswerN1.vue
<!-- <style>
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
</style> -->
