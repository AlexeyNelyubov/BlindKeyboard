<script setup></script>

<template>
  <header class="title">
    <slot></slot>
  </header>
</template>

<style>
.title {
  margin-bottom: var(--vertical-margin-between-block);
  font: calc(var(--text-size) * 1.25) var(--sign-style);
}
</style>
