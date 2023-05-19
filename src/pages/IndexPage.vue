<script setup>
import { useRouter } from "vue-router";
import CommonQuestions from "/src/components/CommonQuestions.vue";
import Header from "/src/components/StartResultPage/Header.vue";
import Information from "/src/components/StartResultPage/Information.vue";
import StartTestButton from "/src/components/StartResultPage/StartTestButton.vue";

const router = useRouter();
</script>

<template>
  <div class="index">
    <Header :textForHeader="'Привет! Хочешь проверить свою скорость печати?'" />
    <Information
      :textForShow="[
        'Набери небольшой текст и узнай сколько знаков в минуту ты печатаешь на русском языке.',
        'Проходи тест, сколько хочешь. Ограничений нет.',
      ]"
    />
    <StartTestButton
      @start-new-test="router.push({ name: 'test' })"
      :textForButton="'Начать тест!'"
    />
    <CommonQuestions />
  </div>
</template>

<style>
.index {
  min-height: 100vh;
  padding: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
