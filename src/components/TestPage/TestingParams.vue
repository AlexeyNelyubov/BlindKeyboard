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
  const btn = document.querySelector(".test-main-new-test-button");
  btn.blur();
  emit("start-new-test");
};
</script>

<template>
  <div class="test-main-testing-params">
    <div>
      <p class="test-main-testing-params__item">Скорость</p>
      <p class="test-main-testing-params__item-value">
        {{ speed }} <span style="font-size: 0.6em">зн./мин</span>
      </p>
      <p class="test-main-testing-params__item">Точность</p>
      <p class="test-main-testing-params__item-value">
        {{ accuracy }} <span style="font-size: 0.6em">%</span>
      </p>
    </div>
    <button class="test-main-new-test-button" @click="startNewTest">
      Заново!
    </button>
  </div>
</template>

<style>
.test-main-testing-params {
  margin-left: 2.4rem;
  border: 1px solid #fff;
  border-radius: 1.2rem;
  box-shadow: 0 0 2rem #fff;
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: justify;
}

.test-main-testing-params__item {
  margin-bottom: 1.2rem;
  font: 2.6rem Times New Roman;
  color: #fff;
}

.test-main-testing-params__item-value {
  margin-bottom: 4.4rem;
  font: 3.6rem Times New Roman;
  color: #fff;
}

.test-main-new-test-button {
  padding: 0.8rem 4rem;
  font: 2rem cursive;
  color: #7b7b7b;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 1.2rem;
}
</style>
