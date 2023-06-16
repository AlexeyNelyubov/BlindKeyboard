<script setup>
import { ref } from "vue";
const dropDown = ref(false);
</script>

<template>
  <div class="single-question">
    <p @click="dropDown = !dropDown" class="single-question__question">
      <slot name="title"></slot>
    </p>

    <div v-show="dropDown" class="single-question__answer">
      <slot name="paragraph"></slot>
      <slot name="list"></slot>
    </div>
  </div>
</template>

<style>
.single-question__question {
  margin-top: 2.4rem;
  font: 2.4rem Times New Roman;
  border-bottom: 1px solid #fff;
  cursor: pointer;
}

.single-question__answer {
  font: 1.8rem Times New Roman;
  margin: 2.4rem 0;
  list-style-type: none;
}
</style>
