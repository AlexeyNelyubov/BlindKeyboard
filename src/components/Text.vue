<script setup>
import { ref } from "vue";
const props = defineProps({
  randomText: {
    type: String,
    required: true,
  },
});

const speed = ref(0);
const accuracy = ref(100);
</script>

<template>
  <div class="test">
    <header class="test__header">Тест на скорость печати!</header>
    <main class="test__main">
      <div class="test__main-random-text">
        {{ props.randomText }}
      </div>
      <div class="test__main-result">
        <p class="test__main-result-item">Скорость</p>
        <p class="test__main-result-item-value">
          {{ spped }} <span style="font-size: 0.8em">зн./мин</span>
        </p>
        <p class="test__main-result-item">Точность</p>
        <p class="test__main-result-item-value">
          {{ accuracy }} <span style="font-size: 0.8em">%</span>
        </p>
        <button>Заново!</button>
      </div>
    </main>
  </div>
</template>

<style>
.test {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.test__header {
  margin: 64px;
  font: 2rem cursive;
  color: #fff;
}

.test__main {
  display: flex;
  justify-content: center;
}

.test__main-random-text {
  width: 45%;
  padding: 24px;
  font: 2em Times New Roman;
  text-align: justify;
  border: 1px solid #fff;
  border-radius: 12px;
  box-shadow: 0 0 20px #fff;
}

.test__main-result {
  margin-left: 24px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  font: 2em Times New Roman;
  text-align: justify;
  border: 1px solid #fff;
  border-radius: 12px;
  box-shadow: 0 0 20px #fff;
}

.test__main-result-item {
  margin-bottom: 12px;
  color: #fff;
}

/* .test__main-result-item-value {
  font-size: 0.7em;
} */
</style>
