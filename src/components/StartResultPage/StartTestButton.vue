<script setup>
defineEmits({ "start-new-test": null });
</script>

<template>
  <button @click="$emit('start-new-test')" class="btn-start-test">
    <slot></slot>
  </button>
</template>

<style>
.btn-start-test {
  margin-top: var(--vertical-margin-between-block);
  padding: var(--margin-padding) calc(var(--margin-padding) * 2);
  font: var(--text-size) var(--sign-style);
  color: var(--text-color);
  text-align: center;
  background-color: #4caf50;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
}
</style>
