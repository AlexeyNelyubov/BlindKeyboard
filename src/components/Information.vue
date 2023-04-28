<script setup>
const props = defineProps({
  result: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div class="information">
    <header class="information__header">
      Привет! Хочешь проверить свою скорость печати?
    </header>
    <div class="information__text">
      <p>Тест займет всего 2-3 минуты!</p>
      <p>
        Набери небольшой текст и узнай сколько знаков в минуту ты печатаешь на
        русском языке.
      </p>
    </div>
  </div>
</template>

<style>
.information {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.information__header {
  margin: 64px;
  font: 2rem cursive;
  color: #fff;
}

.information__text {
  width: 60%;
  padding: 24px;
  font: 2em Times New Roman;
  text-align: center;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 12px;
  box-shadow: 0 0 20px #fff;
}
</style>

<!-- Мы измеряем скорость печати в зн./мин — сколько знаков в минуту
      без опечаток ты набрал. «Знаком» считается любой символ, включая пробелы.
      Мы учитываем только правильно набранные слова. Поэтому, если сделана
      опечатка, подсчет символов останавливается, пока ты ее не исправишь. -->
