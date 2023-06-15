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
    <Header>Результаты теста!</Header>
    <Information>
      <p>Скорость печати составила: {{ route.query.speed }} зн./мин</p>
      <p>Точность печати составила: {{ route.query.accuracy }} %</p>
    </Information>
    <StartTest @start-new-test="router.push({ name: 'test' })"
      >Попробовать ещё!</StartTest
    >
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
  color: #fff;
}
</style>
