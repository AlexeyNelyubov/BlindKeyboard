<script setup>
import { ref, watch, onUnmounted } from "vue";

const props = defineProps({
  isNewTest: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits({
  "change-time": (newTestingTime) => {
    if (typeof newTestingTime === "number") {
      return true;
    } else {
      console.warn("Invalid change-time event payload!");
      return false;
    }
  },
});

const testingTime = ref(0);
const minutes = ref("00");
const seconds = ref("00");

watch(
  () => props.isNewTest,
  () => {
    if (props.isNewTest) {
      testingTime.value = 0;
      minutes.value = "00";
      seconds.value = "00";
    }
  }
);

const timer = setInterval(() => {
  testingTime.value += 1;
  if (testingTime.value < 10) {
    seconds.value = "0" + testingTime.value;
  } else if (testingTime.value < 60) {
    seconds.value = testingTime.value;
  }
  if (testingTime.value / 60 >= 1) {
    minutes.value = "0" + Math.trunc(testingTime.value / 60);
    if (testingTime.value - Math.trunc(testingTime.value / 60) * 60 < 10) {
      seconds.value =
        "0" + (testingTime.value - Math.trunc(testingTime.value / 60) * 60);
    } else {
      seconds.value =
        testingTime.value - Math.trunc(testingTime.value / 60) * 60;
    }
  }
  emit("change-time", testingTime.value);
}, 1000);

onUnmounted(() => clearInterval(timer));
</script>

<template>
  <div class="test-timer">
    <span>Время</span>
    <div style="margin-left: 1rem; width: 3rem">
      {{ minutes }}
    </div>
    <span>:</span>
    <div style="width: 3rem" class="test-timer__text">{{ seconds }}</div>
  </div>
</template>

<style>
.test-timer {
  margin-bottom: 4vh;
  padding: 1.6rem 3.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font: 2.4rem cursive;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 1.2rem;
  box-shadow: 0 0 2rem #fff;
}
</style>
