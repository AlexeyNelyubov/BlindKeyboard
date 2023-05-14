<script setup>
import { useRouter } from "vue-router";
import Header from "/src/components/IndexPage/Header.vue";
import Information from "/src/components/IndexPage/Information.vue";
import StartTest from "/src/components/IndexPage/StartTest.vue";

const router = useRouter();

const beginTest = () => {
  router.push({ name: "Test" });
};
</script>

<template>
  <div class="index">
    <Header />
    <Information />
    <StartTest @start-test="beginTest" />
  </div>
</template>

<style>
.index {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
