
<script setup>
import { useRouter, useRoute } from 'vue-router'
import LoginForm from '../components/LoginForm.vue'
import { useAuth } from '../services/auth.js'

const router = useRouter()
const route = useRoute()
const { login, loading, error } = useAuth()

async function iniciarSesion(datos) {
  const correcto = await login(datos.usuario, datos.contrasena)

  if (correcto) {
    const destino = route.query.redirect || '/dashboard'
    router.replace(String(destino))
  }
}
</script>

<template>
  <section class="login-page">
    <div class="login-presentation">
      <span class="presentation-tag">
        Desarrollo de Aplicaciones Web
      </span>

      <h2>Aplicación Full Stack</h2>

      <p>
        Interfaz desarrollada con Vue, conectada a un
        backend PHP mediante una API.
      </p>

      <div class="presentation-features">
        <span>✓ Vue 3</span>
        <span>✓ Docker</span>
        <span>✓ PHP</span>
        <span>✓ API</span>
      </div>
    </div>

    <div class="login-container">
      <LoginForm
        :loading="loading"
        :error="error"
        @submit="iniciarSesion"
      />
    </div>
  </section>
</template>
