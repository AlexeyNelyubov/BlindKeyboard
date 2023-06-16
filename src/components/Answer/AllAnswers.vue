<script setup>
import SingleAnswer from "@/components/Answer/SingleAnswer.vue";
import { getQuestions } from "@/helpers/questions.js";

const questions = getQuestions();
</script>

<template>
  <ul>
    <li
      v-for="question in questions"
      :key="questions.id"
      class="common-questions-payload__one-question"
    >
      <SingleAnswer>
        <template #title> {{ question.title }} </template>
        <!-- <div v-for="(element, key) in question.answer">
          <div v-if="key === 'paragraphes'">
            <p
              v-for="paragraph in element"
              class="single-question__answer-paragraph"
            >
              {{ paragraph }}
            </p>
          </div>
          <div v-if="key === 'list'">
            <ul style="single-margin-left: 1.6rem">
              <li v-for="item in element">
                {{ item }}
              </li>
            </ul>
          </div>
        </div> -->
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
      </SingleAnswer>
    </li>
  </ul>
</template>

<style>
.single-question__answer-paragraph {
  margin: 1.2rem 0;
  text-align: justify;
}
</style>
