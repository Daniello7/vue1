<template>
    <div>
        <h2>Formulario de registro</h2>
        <Form :validation-schema="schema" @submit="onSubmit">
          <div class="form">
            <label for="name"></label>
            <Field type="text" name="name" id="name" placeholder="Ingrese su nombre"/>
            <ErrorMessage name="name"/>
          </div>
          <div class="form">
            <label for="email"></label>
            <Field type="email" name="email" id="email" placeholder="Ingrese su email"/>
            <ErrorMessage name="email"/>
          </div>
          <div class="form">
            <button type="submit">Registrar</button>
          </div>
        </Form>
    </div>
</template>

<script setup>
import {Form, Field, ErrorMessage} from 'vee-validate';
import { schema } from '../schemas/validationSchema';

const onSubmit = () => {
    console.log('Formulario enviado');
}
</script>

<style>
.form{
    margin-bottom: 10px;
}
</style>
