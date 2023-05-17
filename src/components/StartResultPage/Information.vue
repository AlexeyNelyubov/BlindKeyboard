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
  width: 60vw;
  padding: 24px;
  font: 1.5em Times New Roman;
  text-align: center;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 12px;
  box-shadow: 0 0 20px #fff;
}
</style>
