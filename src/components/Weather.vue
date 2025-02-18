<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h3>La temperatura actual es: {{ weatherStore.temperature }}º</h3>
</template>

<script setup>
import { useWheather } from '@/composables/useWeather';
import { onMounted } from 'vue';
import { useWeatherStore } from '@/stores/weatherStore';

const weatherStore = useWeatherStore();

onMounted(useWheather);
</script>

<style scoped></style>
