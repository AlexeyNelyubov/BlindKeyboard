<script setup>
import { ref } from "vue";
import { useEventListener } from "@/composable/useEventListener.js";
import AllQuestions from "@/components/Questions/AllQuestions.vue";

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
        <AllQuestions />
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
  font: var(--text-size) var(--sign-style);
  cursor: pointer;
}

.show-question-btn {
  position: absolute;
  bottom: 2vh;
  right: 2vw;
  padding: var(--margin-padding) calc(var(--margin-padding) * 2);
  font: var(--text-size) var(--sign-style);
  text-align: center;
  text-decoration: none;
  color: var(--text-color);
  background-color: var(--background-color);
  border: var(--border-width) --border-style var(--text-color);
  border-radius: var(--border-radius);
  box-shadow: 0 0 1rem var(--text-color);
  cursor: pointer;
}
</style>
