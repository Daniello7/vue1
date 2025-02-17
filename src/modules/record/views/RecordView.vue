<template>
    <div>
        <h2>Formulario de registro</h2>
        <Form :validation-schema="schema" @submit="onSubmit">
          <div class="form">
            <label for="name"></label>
            <Field v-model="name" type="text" name="name" id="name" placeholder="Ingrese su nombre"/>
            <ErrorMessage name="name"/>
          </div>
          <div class="form">
            <label for="email"></label>
            <Field v-model="email" type="email" name="email" id="email" placeholder="Ingrese su email"/>
            <ErrorMessage name="email"/>
          </div>
          <div class="form">
            <button type="submit">Registrar</button>
          </div>
        </Form>
    </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { schema } from '../schemas/validationSchema';
import { useRegisterStore } from '../stores/registerStore';
import { ref } from 'vue';

const registerStore = useRegisterStore();

const name = ref('');
const email = ref('');

const onSubmit = () => {
    registerStore.saveRecord(name.value, email.value);
    console.log('Formulario enviado');
}
</script>

<style>
.form{
    margin-bottom: 10px;
}
</style>
