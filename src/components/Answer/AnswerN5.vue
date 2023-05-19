<script setup>
import { ref } from "vue";
const dropDown = ref(false);
</script>

<template>
  <div class="question">
    <p @click="dropDown = !dropDown">Какая самая большая скорость печати?</p>
    <div v-show="dropDown" class="question__answer">
      <p>
        1080 знаков за одну минуту на электрической пишущей машинке IBM — рекорд
        по скорости набора текста, установленный Стеллой Паджунас в 1946 году.
        Сейчас чемпионкой по набору текста на клавиатуре на английском языке
        является Барбара Блэкборн. Во время теста в 2005 году она развила
        скорость печати до 1060 знаков в минуту на клавиатуре Дворака —
        упрощенном варианте привычной нам раскладки QWERTY.
      </p>
      <br />
      <p>
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
