import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRegisterStore = defineStore('register', () => {
  const name = ref('')
  const email = ref('')
  const saveRecord = (formName, formEmail) => {
    name.value = formName
    email.value = formEmail
  }
  return { name, email, saveRecord }
})
