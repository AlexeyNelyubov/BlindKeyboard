<script setup>
import SingleQuestion from "@/components/Questions/SingleQuestion.vue";
import { getQuestions } from "@/helpers/questions.js";

const questions = getQuestions();
</script>

<template>
  <ul>
    <li v-for="question in questions" :key="question.id">
      <SingleQuestion>
        <template #title> {{ question.title }} </template>
        <template #paragraph>
          <p
            v-for="paragraph in question.paragraphes"
            class="single-question__answer-paragraph"
          >
            {{ paragraph }}
          </p>
        </template>
        <template #list>
          <ul style="margin-left: 2rem">
            <li v-for="item in question.list">
              {{ item }}
            </li>
          </ul>
        </template>
      </SingleQuestion>
    </li>
  </ul>
</template>

<style>
.single-question__answer-paragraph {
  margin: var(--margin-padding) 0;
}
</style>
