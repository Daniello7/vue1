<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="sidebar">
        <h2>Bienvenido</h2>
        <h3>Nombre: {{ registerStore.name }}</h3>
        <h3>Email: {{ registerStore.email }}</h3>
        <ul>
          <li><router-link to="/count">Contador</router-link></li>
          <li><router-link to="/task-list">Lista De Tareas</router-link></li>
          <li><router-link to="/register">Registrar</router-link></li>
        </ul>
    </div>
</template>

<script setup>
import { useRegisterStore } from '@/modules/record/stores/registerStore';
const registerStore = useRegisterStore();
</script>

<style>
.sidebar{
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
}
</style>
