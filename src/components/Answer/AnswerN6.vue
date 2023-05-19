<script setup>
import { ref } from "vue";
const dropDown = ref(false);
</script>

<template>
  <div class="question">
    <p @click="dropDown = !dropDown">Скорость печати 100 зн./мин хорошая?</p>
    <div v-show="dropDown" class="question__answer">
      <p class="paragraph">
        Зависит от возраста. Например, для детей начальной и средней школы это
        хорошая скорость. Для старшей школы и взрослых скорость 100 зн./мин
        считается низкой.
      </p>
      <p class="paragraph">
        Пройди курс печати и твоя скорость набора увеличится.
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
