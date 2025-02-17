<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="sidebar">
        <h2>Bienvenido</h2>
        <h3>Nombre: {{ name }}</h3>
        <h3>Email: {{ email }}</h3>
        <ul>
          <li><router-link to="/count">Contador</router-link></li>
          <li><router-link to="/task-list">Lista De Tareas</router-link></li>
          <li><router-link to="/register">Registrar</router-link></li>
        </ul>
    </div>
</template>

<script setup>
import { useRegisterStore } from '@/modules/record/stores/registerStore';
import { ref, watch } from 'vue';
const registerStore = useRegisterStore();
const name = ref(registerStore.name.value);
const email = ref(registerStore.email.value);
watch(() => registerStore.name, (newValue) => {
    name.value = newValue;
});
watch(() => registerStore.email, (newValue) => {
    email.value = newValue;
});
</script>

<style>
.sidebar{
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
}
</style>
