<template>
    <div>
        <h2>Lista de tareas</h2>
        <input type="text" v-model="newTask" @keyup.enter="addTask" />
        <ul>
            <li v-for="(task, index) in tasks" :key="index">
                {{ task }}
                <button @click="removeTask">Borrar</button>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const tasks = ref([]);
const newTask = ref('');
const addTask = () => {
    tasks.value.push(newTask.value);
    newTask.value = '';
}
const removeTask = (index) => {
    tasks.value.splice(index, 1);
}
</script>

<style></style>