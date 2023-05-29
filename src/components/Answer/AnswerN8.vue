<script setup>
import { ref } from "vue";
const dropDown = ref(false);
</script>

<template>
  <div class="single-question">
    <p @click="dropDown = !dropDown" class="single-question__question">
      Может ли тестирование помочь улучшить скорость печати?
    </p>
    <div v-show="dropDown" class="single-question__answer">
      <p class="single-question__answer-paragraph">
        Рекордсмены печатают со скоростью 1000 зн./мин и выше, исходя из этого,
        500 зн./мин — вполне достижимая цель.
      </p>
      <p class="single-question__answer-paragraph">
        Залог успеха любого занятия — регулярная тренировка. Как только ты
        пропускаешь урок — ты теряешь время, которое уже потратил на обучение.
        Поэтому постарайся выделить 2-4 недели для регулярных тренировок —
        каждый день по 30 минут.
      </p>
    </div>
  </div>
</template>

<style></style>
//style for component located in parent component CommonQuestions.vue
