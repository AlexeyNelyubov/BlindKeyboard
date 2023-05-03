<script setup>
import { ref } from "vue";
import { useTestingParamsStore } from "/src/stores/testingParams.js";

const testingParamsStore = useTestingParamsStore();

const emit = defineEmits(["change-time"]);

const testingTime = ref(0);
const minutes = ref("00");
const seconds = ref("00");

const timer = () => {
  if (!testingParamsStore.isFinishTesting) {
    setTimeout(() => {
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
      timer();
    }, 1000);
  }
};
timer();
</script>

<template>
  <div class="test-timer">
    <span>Время</span>
    <div style="margin-left: 12px; width: 38px">{{ minutes }}</div>
    <span>:</span>
    <div style="width: 38px">{{ seconds }}</div>
  </div>
</template>

<style>
.test-timer {
  height: 100px;
  width: 300px;
  margin: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  font: 2rem cursive;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 12px;
  box-shadow: 0 0 20px #fff;
}
</style>
