<script setup>
import { ref } from "vue";
import { useEventListener } from "/src/composable/useEventListener.js";
import AllAnswers from "/src/components/Answer/AllAnswers.vue";

const showQuestion = ref(false);

useEventListener(document, "click", (event) => {
  if (
    event.target.className === "index" ||
    event.target.className === "result" ||
    event.target.className === "common-questions"
  ) {
    showQuestion.value = false;
  }
});
</script>

<template>
  <Transition name="common-questions">
    <div v-show="showQuestion" class="common-questions">
      <div class="common-questions-payload">
        <div
          @click="showQuestion = false"
          class="common-questions-payload__title"
        >
          Вопросы о скорости печати.
        </div>
        <AllAnswers />
      </div>
    </div>
  </Transition>
  <Transition name="common-questions">
    <button
      v-show="!showQuestion"
      @click="showQuestion = true"
      class="show-question-btn"
    >
      Вопросы о скорости печати.
    </button>
  </Transition>
</template>

<style>
.common-questions {
  width: 100vw;
  margin: 10vh 0 4vh;
  display: flex;
  justify-content: center;
}

.common-questions-enter-active {
  animation: question-active 1.5s;
}

.common-questions-leave-active {
  animation: question-active 0.5s reverse;
}

@keyframes question-active {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.common-questions-payload {
  width: 50vw;
}
.common-questions-payload__title {
  font: 2.4rem cursive;
  cursor: pointer;
}

.show-question-btn {
  position: absolute;
  bottom: 2vh;
  right: 2vw;
  padding: 1.2rem 2.4rem;
  font: 2.4rem cursive;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #000;
  border: 1px solid #fff;
  border-radius: 1.2rem;
  box-shadow: 0 0 1rem #fff;
  cursor: pointer;
}
</style>
