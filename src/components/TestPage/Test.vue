<script setup>
import { ref, watch } from "vue";
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

watch(
  () => props.randomText,
  () => {
    curentIndex.value = 0;
    isCurentSymbolValid.value = true;
    numberOfUnvalidSymbols.value = 0;
    colorForValidateSymbol.value = "#fff";
  }
);

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
  padding: calc(var(--margin-padding) * 2);
  font: var(--text-size) var(--text-style);
  letter-spacing: 0.5px;
  border: var(--border-width) var(--border-style) v-bind(colorForValidateSymbol);
  border-radius: var(--border-radius);
  box-shadow: 0 0 2rem v-bind(colorForValidateSymbol);
}

.validSymbol {
  background-color: #37ff00;
  color: var(--background-color);
}

.unvalidSymbol {
  background-color: #ff0000;
  color: var(--background-color);
}
.checkedSymbol {
  color: var(--text-color);
}

.uncheckedSymbol {
  color: #7b7b7b;
}
</style>
