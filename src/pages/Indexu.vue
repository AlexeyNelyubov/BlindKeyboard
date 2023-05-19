<script setup>
import { ref } from "vue";
import Start from "/src/components/Start.vue";
import Test from "/src/components/Test.vue";
import Result from "/src/components/Result.vue";

const currentComponent = ref(Start);
</script>

<template>
  <component
    :is="currentComponent"
    @start-new-test="currentComponent = Test"
    @finish-test="currentComponent = Result"
  ></component>
  <!-- <Start
    v-if="currentComponent === 'Start'"
    @start-test="currentComponent = 'Test'"
  />
  <Test
    v-if="currentComponent === 'Test'"
    @finish-test="currentComponent = 'Result'"
  />
  <Result
    v-if="currentComponent === 'Result'"
    @start-test="currentComponent = 'Test'"
  /> -->
</template>

<style></style>
