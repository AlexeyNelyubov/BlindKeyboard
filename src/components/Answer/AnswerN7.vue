<script setup>
import { ref } from "vue";
const dropDown = ref(false);
</script>

<template>
  <div class="question">
    <p @click="dropDown = !dropDown">
      Как научиться печатать быстрее 500 зн./мин?
    </p>
    <div v-show="dropDown" class="question__answer">
      <p class="paragraph">
        Рекордсмены печатают со скоростью 1000 зн./мин и выше, исходя из этого,
        500 зн./мин — вполне достижимая цель.
      </p>
      <p class="paragraph">
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
