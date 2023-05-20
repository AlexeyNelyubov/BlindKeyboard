<script setup>
import { ref } from "vue";
const dropDown = ref(false);
</script>

<template>
  <div class="question">
    <p @click="dropDown = !dropDown" class="question__question">
      Как научиться печатать быстрее 500 зн./мин?
    </p>
    <div v-show="dropDown" class="question__answer">
      <p class="question__answer-paragraph">
        Рекордсмены печатают со скоростью 1000 зн./мин и выше, исходя из этого,
        500 зн./мин — вполне достижимая цель.
      </p>
      <p class="question__answer-paragraph">
        Залог успеха любого занятия — регулярная тренировка. Как только ты
        пропускаешь урок — ты теряешь время, которое уже потратил на обучение.
        Поэтому постарайся выделить 2-4 недели для регулярных тренировок —
        каждый день по 30 минут.
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
