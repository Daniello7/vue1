<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="sidebar">
        <h2>Barra lateral</h2>
        <li><router-link to="/count">Contador</router-link></li>
        <li><router-link to="/task-list">Lista De Tareas</router-link></li>
        <li><router-link to="/register">Registrar</router-link></li>
    </div>
</template>

<script setup>

</script>

<style>
.sidebar{
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
}
</style>
