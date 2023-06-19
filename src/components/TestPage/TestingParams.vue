<script setup>
import { watch, computed } from "vue";

const props = defineProps({
  testingTime: {
    type: Number,
    required: true,
  },
  numderOfCheckedSymbols: {
    type: Number,
    required: true,
  },
  numberOfUnvalidSymbols: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits({
  "start-new-test": null,
  "change-testing-params": (speed, accuracy) => {
    if (typeof speed === "number" && typeof accuracy === "number") {
      return true;
    } else {
      console.warn("Invalid change-time event payload!");
      return false;
    }
  },
});

const speed = computed(() => {
  return props.testingTime
    ? Math.trunc((props.numderOfCheckedSymbols / props.testingTime) * 60)
    : 0;
});

const accuracy = computed(() => {
  return props.numderOfCheckedSymbols
    ? props.numberOfUnvalidSymbols
      ? 100 -
        Math.trunc(
          (props.numberOfUnvalidSymbols /
            (props.numberOfUnvalidSymbols + props.numderOfCheckedSymbols)) *
            100
        )
      : 100
    : 0;
});

watch([speed, accuracy], () => {
  emit("change-testing-params", speed.value, accuracy.value);
});

const startNewTest = () => {
  console.log("1");
  const btn = document.querySelector(".testing-params__new-test-button");
  btn.blur();
  emit("start-new-test");
};
</script>

<template>
  <div class="testing-params">
    <div class="testing-params__items">
      <p class="testing-params__item">Скорость</p>
      <p class="testing-params__item-value">
        {{ speed }} <span style="font-size: 0.6em">зн./мин</span>
      </p>
      <p class="testing-params__item">Точность</p>
      <p class="testing-params__item-value">
        {{ accuracy }} <span style="font-size: 0.6em">%</span>
      </p>
    </div>
    <button class="testing-params__new-test-button" @click="startNewTest">
      Заново!
    </button>
  </div>
</template>

<style>
.testing-params {
  width: 15vw;
  margin-left: calc(var(--margin-padding) * 2);
  padding: calc(var(--margin-padding) * 2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: var(--border-width) var(--border-style) var(--text-color);
  border-radius: var(--border-radius);
  box-shadow: 0 0 2rem var(--text-color);
}

.testing-params__items {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.testing-params__item {
  margin-bottom: var(--margin-padding);
  font: calc(var(--text-size) * 1.1) var(--sign-style);
}

.testing-params__item-value {
  margin-bottom: calc(var(--margin-padding) * 2.2);
  font: calc(var(--text-size) * 1.5) var(--sign-style);
}

.testing-params__new-test-button {
  padding: calc(var(--margin-padding) - 0.2rem) calc(var(--margin-padding) * 3);
  font: calc(var(--text-size) - 0.4rem) var(--sign-style);
  color: var(--background-color);
  border: none;
  border-radius: var(--border-radius);
  background-color: var(--text-color);
  cursor: pointer;
}
</style>
