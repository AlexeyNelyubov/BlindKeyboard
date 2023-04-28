<script setup>
import { ref } from "vue";
import Text from "/src/components/Text.vue";
import Information from "/src/components/Information.vue";

const randomText = ref("");
const result = ref(false);
const DEFAULT_TEXT =
  "Земля — пятая по величине планета Солнечной системы и единственная, имеющая слой газов в атмосфере, гарантирующий условия для существования здесь жизни. Около 70% поверхности планеты покрыто водой в жидком состоянии, необходимым элементом для существования форм жизни.";
const getTextFromAjax = async () => {
  try {
    const response = await fetch("https://fish-text.ru/get?sentence=4");
    const json = await response.json();
    if (response.ok) {
      console.log(json.text);
      randomText.value = json.text;
    } else {
      console.log(error.message);
      randomText.value = DEFAULT_TEXT;
    }
  } catch (error) {
    console.error(error.message);
  }
};
</script>

<template>
  <div class="app">
    <!-- <main class="app-main"> -->
    <Text v-if="randomText" :randomText="randomText" />
    <Information v-if="!randomText" :result="result" />
    <button
      v-if="!randomText"
      @click="getTextFromAjax"
      class="app__begin-test-button"
    >
      Начать тест!
    </button>
    <!-- </main> -->
  </div>
</template>

<style>
.app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("/src/assets/img/Comp.jpg");
  background-size: 100% 100%;
}

.app__begin-test-button {
  margin-top: 18px;
  padding: 16px 32px;
  font: 1.5rem cursive;
  color: white;
  text-align: center;
  text-decoration: none;
  background-color: #4caf50;
  border: none;
  border-radius: 12px;
}
</style>
