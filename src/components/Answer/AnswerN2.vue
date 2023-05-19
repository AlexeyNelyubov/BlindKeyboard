<script setup>
import { ref } from "vue";
const dropDown = ref(false);
</script>

<template>
  <div class="question">
    <p @click="dropDown = !dropDown">
      Как измеряется скорость и точность печати?
    </p>
    <div v-show="dropDown" class="question__answer">
      <p class="paragraph">
        Cкорость печати измеряется в знаках (без опечаток) в минуту. Знаком
        считается любой символ, включая пробелы. Учитываются только правильно
        набранные символы.
      </p>
      <p class="paragraph">
        Точность печати — это процент правильно введенных символов к общему
        количеству символов в тексте.
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
