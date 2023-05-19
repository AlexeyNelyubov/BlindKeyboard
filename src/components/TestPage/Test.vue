<script setup>
import { ref } from "vue";
import { useEventListener } from "/src/composable/useEventListener.js";

const props = defineProps({
  randomText: {
    type: String,
    required: true,
  },
});

const emit = defineEmits({
  "check-one-symbol": (curentIndex, numberOfUnvalidSymbols) => {
    if (
      typeof curentIndex === "number" &&
      typeof numberOfUnvalidSymbols === "number"
    ) {
      return true;
    } else {
      console.warn("Invalid change-time event payload!");
      return false;
    }
  },
  "finish-test": null,
});

const curentIndex = ref(0);
const isCurentSymbolValid = ref(true);
const numberOfUnvalidSymbols = ref(0);
const colorForValidateSymbol = ref("#fff");

useEventListener(document, "keypress", (event) => {
  if (event.key === props.randomText[curentIndex.value]) {
    isCurentSymbolValid.value = true;
    curentIndex.value += 1;
    colorForValidateSymbol.value = "#fff";
    if (curentIndex.value === props.randomText.length) {
      emit("finish-test");
    }
  } else {
    isCurentSymbolValid.value = false;
    numberOfUnvalidSymbols.value += 1;
    colorForValidateSymbol.value = "#ff0000";
  }
  emit("check-one-symbol", curentIndex.value, numberOfUnvalidSymbols.value);
});
</script>

<template>
  <div class="test-main-random-text">
    <span
      v-for="(symbol, index) of props.randomText"
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
</template>

<style>
.test-main-random-text {
  width: 60vw;
  padding: 24px;
  font: 1.5rem Times New Roman;
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
</style>
