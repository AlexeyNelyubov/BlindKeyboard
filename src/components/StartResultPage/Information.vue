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
  padding: 2.4rem;
  /* font: 2.6rem Times New Roman; */
  font: 2.2rem Verdana, sans-serif;

  text-align: center;
  /* letter-spacing: 0.5px; */
  border: 1px solid #fff;
  border-radius: 1.2rem;
  box-shadow: 0 0 2rem #fff;
}
</style>
