<script setup>
import { ref } from "vue";
import TestingParams from "/src/components/TestingParams.vue";
import { useEventListener } from "/src/composable/useEventListener.js";

const DEFAULT_TEXT =
  "Земля — пятая по величине планета Солнечной системы и единственная, имеющая слой газов в атмосфере, гарантирующий условия для существования здесь жизни. Около 70% поверхности планеты покрыто водой в жидком состоянии, необходимым элементом для существования форм жизни.";
const randomText = ref("");
const getRandomTextFromAjax = async () => {
  try {
    const response = await fetch(
      "https://fish-text.ru/get?&tipe=sentence&number=1"
    );
    const json = await response.json();
    if (response.ok) {
      randomText.value = json.text;
    } else {
      console.log(json);
      randomText.value = DEFAULT_TEXT;
    }
  } catch (error) {
    console.error(error.message);
    randomText.value = DEFAULT_TEXT;
  }
};

getRandomTextFromAjax();

const curentIndex = ref(0);
const isCurentSymbolValid = ref(true);
const numberOfUnvalidSymbols = ref(0);
const colorForValidateSymbol = ref("#fff");
const isFinishTest = ref(false);

useEventListener(document, "keypress", (event) => {
  if (curentIndex.value + 1 === randomText.value.length) {
    isFinishTest.value = true;
    alert("Тест завершён");
  }
  if (event.key === randomText.value[curentIndex.value]) {
    isCurentSymbolValid.value = true;
    curentIndex.value += 1;
    colorForValidateSymbol.value = "#fff";
  } else {
    isCurentSymbolValid.value = false;
    numberOfUnvalidSymbols.value += 1;
    colorForValidateSymbol.value = "#ff0000";
  }
});

const changeRandomText = () => {
  window.location.reload();
};
</script>

<template>
  <div class="test">
    <header class="test__header">Тест на скорость печати!</header>
    <main class="test__main">
      <div class="test__main-random-text" ref="widthRandomText">
        <span
          v-for="(symbol, index) of randomText"
          :key="symbol.id"
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
        :numerOfSymbolsInRandomText="randomText.length"
        :numderOfCheckedSymbols="curentIndex"
        :numberOfUnvalidSymbols="numberOfUnvalidSymbols"
        @change-random-text="changeRandomText"
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
.test__header {
  margin: 64px;
  font: 2rem cursive;
  color: #fff;
}

.test__main {
  display: flex;
  justify-content: center;
}

.test__main-random-text {
  width: 45%;
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
  width: 15%;
  margin-left: 24px;
  border: 1px solid #fff;
  border-radius: 12px;
  box-shadow: 0 0 20px #fff;
}
</style>
