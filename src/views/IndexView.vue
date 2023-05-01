<script setup>
import { ref } from "vue";
import Test from "/src/components/Test.vue";
import Information from "/src/components/Information.vue";

const randomText = ref("");
const result = ref(false);
const DEFAULT_TEXT =
  "Земля — пятая по величине планета Солнечной системы и единственная, имеющая слой газов в атмосфере, гарантирующий условия для существования здесь жизни. Около 70% поверхности планеты покрыто водой в жидком состоянии, необходимым элементом для существования форм жизни.";
const getTextFromAjax = async () => {
  try {
    const response = await fetch(
      "https://fish-text.ru/get?&tipe=sentence&number=3"
    );
    const json = await response.json();
    if (response.ok) {
      randomText.value = json.text.split("");
    } else {
      console.log(json);
      randomText.value = DEFAULT_TEXT.split("");
    }
  } catch (error) {
    console.error(error.message);
  }
};
</script>

<template>
  <div class="app">
    <Test v-if="randomText" :randomText="randomText" />
    <Information v-if="!randomText" :result="result" />
    <button
      v-if="!randomText"
      @click="getTextFromAjax"
      class="app__begin-test-button"
    >
      Начать тест!
    </button>
  </div>
</template>

<style>
.app {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
}

.app__begin-test-button {
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
