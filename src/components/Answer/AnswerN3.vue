<script setup>
import { ref } from "vue";
const dropDown = ref(false);
</script>

<template>
  <div class="single-question">
    <p @click="dropDown = !dropDown" class="single-question__question">
      Какая скорость считается хорошей?
    </p>
    <div v-show="dropDown" class="single-question__answer">
      <p class="single-question__answer-paragraph">
        На этот вопрос нет однозначного ответа. Но если посмотреть на среднюю
        скорость печати на клавиатуре, которая составляет 207 зн./мин, то можно
        сказать, что хорошая скорость печати — это выше средней.
      </p>
      <p class="single-question__answer-paragraph">
        Например, для офисных работников хорошей считается скорость 225 зн./мин
        и выше. Для секретарей — более 300 зн./мин.
      </p>
      <p class="single-question__answer-paragraph">
        Для детей нормы скорости печати отличаются:
      </p>
      <ul style="single-margin-left: 1.6rem">
        <li>начальная школа — 40-75 зн./мин;</li>
        <li>средняя — 75-125 зн./мин;</li>
        <li>старшая — 100-175 зн./мин;</li>
        <li>студенты — более 150 зн./мин.</li>
      </ul>
    </div>
  </div>
</template>

<style></style>
//style for component located in parent component CommonQuestions.vue
