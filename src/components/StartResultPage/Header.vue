<script setup>
const props = defineProps({
  textForHeader: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <header class="title">
    {{ props.textForHeader }}
  </header>
</template>

<style>
.title {
  margin-bottom: 4vh;
  font: 3.2rem cursive;
  color: #fff;
}
</style>
