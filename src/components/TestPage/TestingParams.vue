<script setup>
import { watch, computed } from "vue";
import { useTestingParamsStore } from "/src/stores/testingParams.js";

const testingParamsStore = useTestingParamsStore();

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

defineEmits(["start-new-test"]);

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
  testingParamsStore.changeTestingParams(speed.value, accuracy.value);
});
</script>

<template>
  <div class="test-testing-params">
    <div>
      <p class="test-testing-params__item">Скорость</p>
      <p class="test-testing-params__item-value">
        {{ speed }} <span style="font-size: 0.6em">зн./мин</span>
      </p>
      <p class="test-testing-params__item">Точность</p>
      <p class="test-testing-params__item-value">
        {{ accuracy }} <span style="font-size: 0.6em">%</span>
      </p>
    </div>
    <button class="test-new-test-button" @click="$emit('start-new-test')">
      Заново!
    </button>
  </div>
</template>

<style>
.test-testing-params {
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: justify;
}

.test-testing-params__item {
  margin-bottom: 12px;
  font: 2em Times New Roman;
  color: #fff;
}

.test-testing-params__item-value {
  margin-bottom: 44px;
  font: 2.5em Times New Roman;
  color: #fff;
}

.test-new-test-button {
  padding: 8px 40px;
  font: 1.5rem cursive;
  color: #7b7b7b;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 12px;
}
</style>
