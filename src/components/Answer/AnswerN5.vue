<script setup>
import { ref } from "vue";
const dropDown = ref(false);
</script>

<template>
  <div class="single-question">
    <p @click="dropDown = !dropDown" class="single-question__question">
      Какая самая большая скорость печати?
    </p>
    <div v-show="dropDown" class="single-question__answer">
      <p class="single-question__answer-paragraph">
        1080 знаков за одну минуту на электрической пишущей машинке IBM — рекорд
        по скорости набора текста, установленный Стеллой Паджунас в 1946 году.
        Сейчас чемпионкой по набору текста на клавиатуре на английском языке
        является Барбара Блэкборн. Во время теста в 2005 году она развила
        скорость печати до 1060 знаков в минуту на клавиатуре Дворака —
        упрощенном варианте привычной нам раскладки QWERTY.
      </p>
      <p class="single-question__answer-paragraph">
        Шон Врона установил очередной рекорд на чемпионате Ultimate Typing
        Championship — 1280 знаков в минуту. Врона также неофициально побил
        рекорд Блэкборн по скорости набора текста, поддерживая скорость 870
        знаков в минуту в течение 50 минут. Хотя этот рекорд не признан
        Гиннессом, потому что команда его не отслеживала.
      </p>
    </div>
  </div>
</template>

<style></style>
//style for component located in parent component AnswerN1.vue
