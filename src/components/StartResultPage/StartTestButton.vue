<script setup>
const props = defineProps({
  textForButton: {
    type: String,
    required: true,
  },
});

defineEmits({ "start-new-test": null });
</script>

<template>
  <button @click="$emit('start-new-test')" class="btn-start-test">
    {{ props.textForButton }}
  </button>
</template>

<style>
.btn-start-test {
  margin-top: 4vh;
  padding: 12px 24px;
  font: 1.5rem cursive;
  color: #fff;
  text-align: center;
  text-decoration: none;
  background-color: #4caf50;
  border: none;
  border-radius: 12px;
}
</style>
