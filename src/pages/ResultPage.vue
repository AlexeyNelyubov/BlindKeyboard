<script setup>
import { useRouter, useRoute } from "vue-router";
import CommonQuestions from "/src/components/CommonQuestions.vue";
import Header from "/src/components/StartResultPage/Header.vue";
import Information from "/src/components/StartResultPage/Information.vue";
import StartTest from "/src/components/StartResultPage/StartTestButton.vue";

const router = useRouter();
const route = useRoute();
</script>

<template>
  <div class="result">
    <Header :textForHeader="'Результаты теста!'" />
    <Information
      :textForShow="[
        `Скорость печати составила: ${route.query.speed} зн./мин`,
        `Точность печати составила: ${route.query.accuracy} %`,
      ]"
    />
    <StartTest
      @start-new-test="router.push({ name: 'test' })"
      :textForButton="'Попробовать ещё!'"
    />
    <CommonQuestions />
  </div>
</template>

<style>
.result {
  min-height: 100vh;
  padding: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
