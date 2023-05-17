<script setup>
import { useRouter } from "vue-router";
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
        'Набери небольшой текст и узнай сколько знаков в минуту ты печатаешь на русском языке. Знаком считается любой символ, включая пробелы. Учитываются только правильно набранные символы. При опечатке подсчет символов останавливается, но таймер продолжит отсчёт и нужно как можно скорее ввести корректный символ.',
      ]"
    />
    <StartTestButton
      @start-new-test="router.push({ name: 'test' })"
      :textForButton="'Начать тест!'"
    />
  </div>
</template>

<style>
.index {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
