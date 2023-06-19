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
.single-question {
  margin-top: calc(var(--margin-padding) * 2);
  border-bottom: 1px solid #fff;
}

.single-question__question {
  font: calc(var(--text-size) * 0.9) var(--sign-style);
  cursor: pointer;
}

.single-question__answer {
  font: calc(var(--text-size) - 0.6rem) var(--question-style);
  margin: calc(var(--margin-padding) * 2) 0;
  text-align: justify;
}
</style>
