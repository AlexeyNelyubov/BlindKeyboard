<script setup>
import { ref } from "vue";
import { useTestingParamsStore } from "/src/stores/testingParams.js";

const testingParamsStore = useTestingParamsStore();

const text = ref("");

if (testingParamsStore.isFinishTesting) {
  text.value = `Скорость печати составила: ${testingParamsStore.speed} зн./мин Точность печати составила: ${testingParamsStore.accuracy} %`;
} else {
  text.value =
    "Набери небольшой текст и узнай сколько знаков в минуту ты печатаешь на русском языке. Знаком считается любой символ, включая пробелы. Учитываются только правильно набранные символы. При опечатке подсчет символов останавливается, но таймер продолжит отсчёт и нужно как можно скорее ввести корректный символ. Чем больше практики, тем лечше результаты!";
}
</script>

<template>
  <div class="index-information">
    <div class="index-information__text">
      <p v-if="testingParamsStore.isFinishTesting" style="margin-bottom: 16px">
        Результаты теста.
      </p>
      {{ text }}
    </div>
  </div>
</template>

<style>
.index-information {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.index-information__text {
  margin-top: 32px;
  width: 60%;
  padding: 24px;
  font: 2em Times New Roman;
  text-align: center;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 12px;
  box-shadow: 0 0 20px #fff;
}
</style>
