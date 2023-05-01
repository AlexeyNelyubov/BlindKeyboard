<script setup>
import { ref } from "vue";
import { useEventListener } from "/src/composable/useEventListener.js";

const props = defineProps({
  randomText: {
    type: Array,
    required: true,
  },
});

const speed = ref(0);
const accuracy = ref(100);
const curentIndex = ref(0);
const isCurentItemValid = ref(true);
const colorForValidateSymbol = ref("#fff");
const isFinishTest = ref(false);

useEventListener(document, "keypress", (event) => {
  if (curentIndex.value === props.randomText.length) {
    isFinishTest.value = true;
    alert("Тест завершён");
  }
  if (event.key === props.randomText[curentIndex.value]) {
    isCurentItemValid.value = true;
    curentIndex.value += 1;
    colorForValidateSymbol.value = "#fff";
  } else {
    isCurentItemValid.value = false;
    colorForValidateSymbol.value = "#ff0000";
  }
});
</script>

<template>
  <div class="test">
    <header class="test__header">Тест на скорость печати!</header>
    <main class="test__main">
      <div class="test__main-random-text" ref="widthRandomText">
        <span
          v-for="(symbol, index) of props.randomText"
          :key="symbol.id"
          :class="{
            validSymbol: isCurentItemValid && index === curentIndex,
            unvalidSymbol: !isCurentItemValid && index === curentIndex,
            uncheckedSymbol: index > curentIndex,
            checkedSymbol: index < curentIndex,
          }"
        >
          {{ symbol }}</span
        >
      </div>
      <div class="test__main-result">
        <p class="test__main-result-item">Скорость</p>
        <p class="test__main-result-item-value">
          {{ speed }} <span style="font-size: 0.8em">зн./мин</span>
        </p>
        <p class="test__main-result-item">Точность</p>
        <p class="test__main-result-item-value">
          {{ accuracy }} <span style="font-size: 0.8em">%</span>
        </p>
        <button>Заново!</button>
      </div>
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

.test__main-result {
  margin-left: 24px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  font: 32px Times New Roman;
  text-align: justify;
  border: 1px solid #fff;
  border-radius: 12px;
  box-shadow: 0 0 20px #fff;
}

.test__main-result-item {
  margin-bottom: 12px;
  color: #fff;
}
</style>
