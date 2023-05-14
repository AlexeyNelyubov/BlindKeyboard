<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Timer from "/src/components/TestPage/Timer.vue";
import TestingParams from "/src/components/TestPage/TestingParams.vue";
import { getRandomTextFromAjax } from "/src/helpers/getRandomTextFromAjax.js";
import { useEventListener } from "/src/composable/useEventListener.js";
import { useTestingParamsStore } from "/src/stores/testingParams.js";

const testingParamsStore = useTestingParamsStore();

const router = useRouter();

const randomText = ref("");
const curentIndex = ref(0);
const isCurentSymbolValid = ref(true);
const numberOfUnvalidSymbols = ref(0);
const colorForValidateSymbol = ref("#fff");
const testingTime = ref(0);
const isNewTest = ref(true);

const startNewTest = async () => {
  randomText.value = await getRandomTextFromAjax();
  isNewTest.value = true;
  curentIndex.value = 0;
  isCurentSymbolValid.value = true;
  numberOfUnvalidSymbols.value = 0;
  colorForValidateSymbol.value = "#fff";
  testingTime.value = 0;
  console.log("1");
};

startNewTest();

useEventListener(document, "keypress", (event) => {
  if (event.key === randomText.value[curentIndex.value]) {
    isCurentSymbolValid.value = true;
    curentIndex.value += 1;
    colorForValidateSymbol.value = "#fff";
    if (curentIndex.value === randomText.value.length) {
      testingParamsStore.finishTesting();
      router.push({ name: "home" });
    }
  } else {
    isCurentSymbolValid.value = false;
    numberOfUnvalidSymbols.value += 1;
    colorForValidateSymbol.value = "#ff0000";
  }
});
</script>

<template>
  <div class="test">
    <Timer
      :isNewTest="isNewTest"
      @change-time="
        (newTestingTime) => {
          (testingTime = newTestingTime), (isNewTest = false);
        }
      "
    />
    <main class="test__main">
      <div class="test__main-random-text">
        <span
          v-for="(symbol, index) of randomText"
          :key="symbol.id"
          style="white-space: pre-wrap"
          :class="{
            validSymbol: isCurentSymbolValid && index === curentIndex,
            unvalidSymbol: !isCurentSymbolValid && index === curentIndex,
            uncheckedSymbol: index > curentIndex,
            checkedSymbol: index < curentIndex,
          }"
        >
          {{ symbol }}</span
        >
      </div>
      <TestingParams
        class="test__main-params"
        :testingTime="testingTime"
        :numderOfCheckedSymbols="curentIndex"
        :numberOfUnvalidSymbols="numberOfUnvalidSymbols"
        @start-new-test="startNewTest"
      />
    </main>
  </div>
</template>

<style>
.test {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.test__main {
  display: flex;
  justify-content: center;
}

.test__main-random-text {
  width: 824px;
  padding: 24px;
  font: 2rem Times New Roman;
  border: 1px solid v-bind(colorForValidateSymbol);
  border-radius: 12px;
  box-shadow: 0 0 20px v-bind(colorForValidateSymbol);
}

.validSymbol {
  background-color: #37ff00;
}

.unvalidSymbol {
  background-color: #ff0000;
  color: #000;
}
.checkedSymbol {
  color: #fff;
}

.uncheckedSymbol {
  color: #7b7b7b;
}

.test__main-params {
  width: 224px;
  margin-left: 24px;
  border: 1px solid #fff;
  border-radius: 12px;
  box-shadow: 0 0 20px #fff;
}
</style>
