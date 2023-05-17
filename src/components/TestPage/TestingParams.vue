<script setup>
import { ref, watch, computed } from "vue";
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

const emit = defineEmits(["start-new-test", "change-testing-params"]);

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
  testingParamsStore.changeTestingParams(speed.value, accuracy.value);
});

const startNewTest = () => {
  const btn = document.querySelector(".test-new-test-button");
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
  margin-left: 24px;
  border: 1px solid #fff;
  border-radius: 12px;
  box-shadow: 0 0 20px #fff;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: justify;
}

.test-main-testing-params__item {
  margin-bottom: 12px;
  font: 2rem Times New Roman;
  color: #fff;
}

.test-main-testing-params__item-value {
  margin-bottom: 44px;
  font: 2rem Times New Roman;
  color: #fff;
}

.test-main-new-test-button {
  padding: 8px 40px;
  font: 1.5rem cursive;
  color: #7b7b7b;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 12px;
}
</style>
