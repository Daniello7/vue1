<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1>Hola</h1>
  <p>
    {{ count }}
  </p>
  <button @click="increment">Incrementar</button>
  <button @click="decrement">Decrementar</button>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
const increment = () => count.value++
const decrement = () => count.value--
</script>

<style scoped>
p {
  color: red;
}
</style>
