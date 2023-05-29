<script setup>
import { ref } from "vue";
import { useEventListener } from "/src/composable/useEventListener.js";
import AnswerN1 from "/src/components/Answer/AnswerN1.vue";
import AnswerN2 from "/src/components/Answer/AnswerN2.vue";
import AnswerN3 from "/src/components/Answer/AnswerN3.vue";
import AnswerN4 from "/src/components/Answer/AnswerN4.vue";
import AnswerN5 from "/src/components/Answer/AnswerN5.vue";
import AnswerN6 from "/src/components/Answer/AnswerN6.vue";
import AnswerN7 from "/src/components/Answer/AnswerN7.vue";
import AnswerN8 from "/src/components/Answer/AnswerN8.vue";

const showQuestion = ref(false);

const allQuestions1 = [
  AnswerN1,
  AnswerN2,
  AnswerN3,
  AnswerN4,
  AnswerN5,
  AnswerN6,
  AnswerN7,
  AnswerN8,
];

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
        <ul>
          <li
            v-for="question in allQuestions1"
            :key="question.id"
            class="common-questions-payload__one-question"
          >
            <component :is="question"></component>
          </li>
        </ul>
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
  color: #fff;
  cursor: pointer;
}

.common-questions-payload__one-question {
  margin-top: 2.4rem;
  font: 2.4rem Times New Roman;
  color: #fff;
  border-bottom: 1px solid #fff;
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

//style for child components Answer1-8
.single-question__question {
  cursor: pointer;
}

.single-question__answer {
  font: 1.8rem Times New Roman;
  margin: 1.2rem 0;
  text-align: justify;
}

.single-question__answer-paragraph {
  margin: 1.6rem 0;
}
</style>
