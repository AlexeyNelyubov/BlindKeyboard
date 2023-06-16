<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  testingTime: {
    type: Number,
    required: true,
  },
});

const minutes = ref("00");
const seconds = ref("00");

watch(
  () => props.testingTime,
  () => {
    if (props.testingTime === 0) {
      minutes.value = "00";
      seconds.value = "00";
    }
    if (props.testingTime < 10) {
      seconds.value = "0" + props.testingTime;
    } else if (props.testingTime < 60) {
      seconds.value = props.testingTime;
    }
    if (props.testingTime / 60 >= 1) {
      minutes.value = "0" + Math.trunc(props.testingTime / 60);
      if (props.testingTime - Math.trunc(props.testingTime / 60) * 60 < 10) {
        seconds.value =
          "0" + (props.testingTime - Math.trunc(props.testingTime / 60) * 60);
      } else {
        seconds.value =
          props.testingTime - Math.trunc(props.testingTime / 60) * 60;
      }
    }
  }
);
</script>

<template>
  <div class="test-timer">
    <span>Время</span>
    <div style="margin-left: 1rem; width: 3rem">
      {{ minutes }}
    </div>
    <span>:</span>
    <div style="width: 3rem">{{ seconds }}</div>
  </div>
</template>

<style>
.test-timer {
  margin-bottom: 4vh;
  padding: 1.2rem 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font: 2.4rem cursive;
  border: 1px solid #fff;
  border-radius: 1.2rem;
  box-shadow: 0 0 2rem #fff;
}
</style>
