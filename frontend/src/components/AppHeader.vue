
<script setup>
import { useRouter } from 'vue-router'
import { useAuth } from '../services/auth.js'

const router = useRouter()
const { logout } = useAuth()

async function cerrarSesion() {
  await logout()
  router.replace('/login')
}
</script>

<template>
  <header class="header">
    <div class="container header-content">
      <div class="logo">
        <span class="logo-icon">◆</span>
        <div>
          <h1>Servicios Web</h1>
        </div>
      </div>

      <nav aria-label="Navegación principal">
        <RouterLink to="/dashboard">
          Inicio
        </RouterLink>

        <RouterLink to="/servicios">
          Servicios
        </RouterLink>

        <button
          class="btn btn-primary"
          type="button"
          @click="cerrarSesion"
        >
          Cerrar sesión
        </button>
      </nav>
    </div>
  </header>
</template>
