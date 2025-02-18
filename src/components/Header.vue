<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="header">
    {{ receivedMessage }}<Weather />
  </div>
</template>

<script setup>
import Weather from './Weather.vue';
import { defineProps, ref, watch } from 'vue';
const props = defineProps(['message']);
const receivedMessage = ref(props.message);
watch(() => props.message, (newValue) => {
  receivedMessage.value = newValue;
});
</script>

<style scoped>
  .header{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #333;
    color: white;
  }

  h3{
    margin: 0;
  }
</style>
