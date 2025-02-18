<template>
  <div class="result">{{ props.result }}</div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps([
  'result'
]);
</script>

<style scoped>
.result{
  background-color: aquamarine;
}
</style>
