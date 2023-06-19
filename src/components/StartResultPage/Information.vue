<script setup></script>

<template>
  <div class="information">
    <div class="information__text">
      <slot></slot>
    </div>
  </div>
</template>

<style>
.information {
  display: flex;
  justify-content: center;
}

.information__text {
  width: 50vw;
  padding: calc(var(--margin-padding) * 2);
  font: calc(var(--text-size) * 0.9) var(--text-style);
  text-align: center;
  border: var(--border-width) var(--border-style) var(--text-color);
  border-radius: var(--border-radius);
  box-shadow: 0 0 2rem var(--text-color);
}
</style>
