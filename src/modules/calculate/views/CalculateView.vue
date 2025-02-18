<template>
  <h3>Propiedades Computadas</h3>
  <input type="text" v-model="val" />
  {{ calculatedValue }}
  <SectionResult v-if="showElement" :result="calculatedValue"/>
  <div v-else-if="isNaN(val)">Debe ser un numero para calcular</div>
  <div v-else>Aqui no se muestra nada</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import SectionResult from '../components/SectionResult.vue';
const val = ref('');
const calculatedValue = computed(() => val.value * 3);

const showElement = computed(() => val.value > 10);
</script>

<style scoped></style>
