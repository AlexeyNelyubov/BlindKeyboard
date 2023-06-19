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
    <Header>Привет! Хочешь проверить свою скорость печати?</Header>
    <Information
      ><p>
        Набери небольшой текст и узнай сколько знаков в минуту ты печатаешь на
        русском языке.
      </p>
      <p>Проходи тест, сколько хочешь. Ограничений нет.</p>
    </Information>
    <StartTestButton @start-new-test="router.push({ name: 'test' })"
      >Начать тест!</StartTestButton
    >
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
  color: var(--text-color);
}
</style>
