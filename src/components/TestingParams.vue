<script setup>
import { ref, watch, computed } from "vue";

const props = defineProps({
  isFinishTest: {
    type: Boolean,
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

defineEmits(["change-random-text"]);

const testingTime = ref(0);

const timer = () => {
  if (!props.isFinishTest) {
    setTimeout(() => {
      testingTime.value += 1;
      timer();
    }, 1000);
  }
};
timer();

const speed = computed(() => {
  return testingTime.value
    ? Math.trunc((props.numderOfCheckedSymbols / testingTime.value) * 60)
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
</script>

<template>
  <div class="testing-params">
    <div>
      <p class="testing-params__item">Скорость</p>
      <p class="testing-params__item-value">
        {{ speed }} <span style="font-size: 0.6em">зн./мин</span>
      </p>
      <p class="testing-params__item">Точность</p>
      <p class="testing-params__item-value">
        {{ accuracy }} <span style="font-size: 0.6em">%</span>
      </p>
    </div>
    <button class="new-test-button" @click="$emit('change-random-text')">
      Заново!
    </button>
  </div>
</template>

<style>
.testing-params {
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: justify;
}

.testing-params__item {
  margin-bottom: 12px;
  font: 2em Times New Roman;
  color: #fff;
}

.testing-params__item-value {
  margin-bottom: 44px;
  font: 2.5em Times New Roman;
  color: #fff;
}

.new-test-button {
  padding: 8px 40px;
  font: 1.5rem cursive;
  color: #7b7b7b;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 12px;
}
</style>
