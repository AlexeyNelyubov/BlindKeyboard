<script setup>
const props = defineProps({
  textForShow: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="information">
    <div class="information__text">
      <p v-for="item in props.textForShow">
        {{ item }}
      </p>
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
  font: 2.6rem Times New Roman;
  color: #fff;
  text-align: center;
  border: 1px solid #fff;
  border-radius: 1.2rem;
  box-shadow: 0 0 2rem #fff;
}
</style>
