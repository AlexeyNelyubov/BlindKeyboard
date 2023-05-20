<script setup>
import { ref } from "vue";
const dropDown = ref(false);
</script>

<template>
  <div class="question">
    <p @click="dropDown = !dropDown" class="question__question">
      Какая самая большая скорость печати?
    </p>
    <div v-show="dropDown" class="question__answer">
      <p class="question__answer-paragraph">
        1080 знаков за одну минуту на электрической пишущей машинке IBM — рекорд
        по скорости набора текста, установленный Стеллой Паджунас в 1946 году.
        Сейчас чемпионкой по набору текста на клавиатуре на английском языке
        является Барбара Блэкборн. Во время теста в 2005 году она развила
        скорость печати до 1060 знаков в минуту на клавиатуре Дворака —
        упрощенном варианте привычной нам раскладки QWERTY.
      </p>
      <p class="question__answer-paragraph">
        Шон Врона установил очередной рекорд на чемпионате Ultimate Typing
        Championship — 1280 знаков в минуту. Врона также неофициально побил
        рекорд Блэкборн по скорости набора текста, поддерживая скорость 870
        знаков в минуту в течение 50 минут. Хотя этот рекорд не признан
        Гиннессом, потому что команда его не отслеживала.
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
