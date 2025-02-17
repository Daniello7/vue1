<!-- eslint-disable vue/multi-word-component-names -->
<template>
  {{ weatherStore.temperature }}
</template>

<script setup>
import { useWheather } from '@/composables/useWeather';
import { onMounted } from 'vue';
import { useWeatherStore } from '@/stores/weatherStore';

const weatherStore = useWeatherStore();

onMounted(useWheather);
</script>

<style scoped></style>
