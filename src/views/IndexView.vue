<script setup>
import { useRouter } from "vue-router";
import Information from "/src/components/Information.vue";

const router = useRouter();

const getRandomTextFromAjax = () => {
  router.push({ path: "/test" });
};
</script>

<template>
  <div class="index">
    <Information />
    <button @click="getRandomTextFromAjax" class="index__begin-test-button">
      Начать тест!
    </button>
  </div>
</template>

<style>
.index {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.index__begin-test-button {
  margin-top: 24px;
  padding: 16px 32px;
  font: 1.5rem cursive;
  color: #fff;
  text-align: center;
  text-decoration: none;
  background-color: #4caf50;
  border: none;
  border-radius: 12px;
}
</style>
