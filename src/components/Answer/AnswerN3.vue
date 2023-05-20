<script setup>
import { ref } from "vue";
const dropDown = ref(false);
</script>

<template>
  <div class="question">
    <p @click="dropDown = !dropDown" class="question__question">
      Какая скорость считается хорошей?
    </p>
    <div v-show="dropDown" class="question__answer">
      <p class="paragraph">
        На этот вопрос нет однозначного ответа. Но если посмотреть на среднюю
        скорость печати на клавиатуре, которая составляет 207 зн./мин, то можно
        сказать, что хорошая скорость печати — это выше средней.
      </p>
      <p class="question__answer-paragraph">
        Например, для офисных работников хорошей считается скорость 225 зн./мин
        и выше. Для секретарей — более 300 зн./мин.
      </p>
      <p class="question__answer-paragraph">
        Для детей нормы скорости печати отличаются:
      </p>
      <ul style="margin-left: 1.6rem">
        <li>начальная школа — 40-75 зн./мин;</li>
        <li>средняя — 75-125 зн./мин;</li>
        <li>старшая — 100-175 зн./мин;</li>
        <li>студенты — более 150 зн./мин.</li>
      </ul>
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

<!-- .question__answer-list {
  margin-left: 1.6rem;
  font: 1.8rem Times New Roman;
} -->
