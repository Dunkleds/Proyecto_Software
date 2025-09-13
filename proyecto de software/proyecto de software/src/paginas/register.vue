<template>
  <div class="auth-container">
    <div class="auth-box">
      <h2 class="title">Registro</h2>
      <form @submit.prevent="register">
        <input type="email" v-model="email" placeholder="Dirección de correo" required />
        <input type="password" v-model="password" placeholder="Crear contraseña" required />
        <input type="password" v-model="confirmPassword" placeholder="Repite contraseña" required />
        <button type="button" class="btn-social facebook">Sign up with Facebook</button>
        <button type="button" class="btn-social google">Sign up with Google</button>
        <button type="button" class="btn-social apple">Sign up with Apple</button>
        <button type="submit" class="btn-main">Continuar</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const register = () => {
  if (password.value !== confirmPassword.value) {
    alert('Las contraseñas no coinciden')
    return
  }
  console.log('Registro con:', email.value)
}
</script>

<style scoped></style>
