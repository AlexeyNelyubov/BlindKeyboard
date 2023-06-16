<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Timer from "/src/components/TestPage/Timer.vue";
import Test from "/src/components/TestPage/Test.vue";
import TestingParams from "/src/components/TestPage/TestingParams.vue";
import { getRandomTextFromAjax } from "@/helpers/getRandomTextFromAjax.js";
import { useTimer } from "@/composable/useTimer.js";

const router = useRouter();
const timer = useTimer();

const randomText = ref("");
const curentIndex = ref(0);
const numberOfUnvalidSymbols = ref(0);
const speed = ref(0);
const accuracy = ref(0);

const startNewTest = async () => {
  randomText.value = await getRandomTextFromAjax();
  timer.startNewTest();
  curentIndex.value = 0;
  numberOfUnvalidSymbols.value = 0;
};

startNewTest();

const finishTest = () => {
  router.push({
    name: "result",
    query: { speed: `${speed.value}`, accuracy: `${accuracy.value}` },
  });
};
</script>

<template>
  <div class="test">
    <Timer :testingTime="timer.testingTime.value" />
    <main class="test__main">
      <Test
        :randomText="randomText"
        @check-one-symbol="
          (newCurentIndex, newNumberOfUnvalidSymbols) => {
            (curentIndex = newCurentIndex),
              (numberOfUnvalidSymbols = newNumberOfUnvalidSymbols);
          }
        "
        @finish-test="finishTest"
      />
      <TestingParams
        :testingTime="timer.testingTime.value"
        :numderOfCheckedSymbols="curentIndex"
        :numberOfUnvalidSymbols="numberOfUnvalidSymbols"
        @start-new-test="startNewTest"
        @change-testing-params="
          (speedValue, accuracyValue) => {
            (speed = speedValue), (accuracy = accuracyValue);
          }
        "
      />
    </main>
  </div>
</template>

<style>
.test {
  min-height: 100vh;
  padding: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
}

.test__main {
  display: flex;
  justify-content: center;
}
</style>
