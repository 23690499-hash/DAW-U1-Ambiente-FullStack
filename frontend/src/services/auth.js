
import { ref, computed } from 'vue'

const user = ref(null)
const initialized = ref(false)
const loading = ref(false)
const error = ref('')

export function useAuth() {
  const authenticated = computed(() => user.value !== null)

  async function checkSession() {
    try {
      const response = await fetch('/api/session.php', {
        credentials: 'include'
      })

      if (!response.ok) {
        user.value = null
        return false
      }

      const data = await response.json()
      user.value = data.authenticated ? data.user : null

      return authenticated.value
    } catch (err) {
      user.value = null
      return false
    } finally {
      initialized.value = true
    }
  }

  async function login(usuario, contrasena) {
    loading.value = true
    error.value = ''

    try {
      const response = await fetch('/api/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ usuario, contrasena })
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        error.value = data.message || 'No fue posible iniciar sesión.'
        return false
      }

      user.value = data.user
      initialized.value = true

      return true
    } catch (err) {
      error.value = 'No se pudo conectar con el servidor.'
      return false
    } finally {
      loading.value = false
    }
  }

  async function logout() {
    try {
      await fetch('/api/logout.php', {
        method: 'POST',
        credentials: 'include'
      })
    } finally {
      user.value = null
      initialized.value = true
    }
  }

  return {
    user,
    initialized,
    authenticated,
    loading,
    error,
    login,
    checkSession,
    logout
  }
}
