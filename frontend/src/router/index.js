
import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '../services/auth.js'

import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import ServicesView from '../views/ServicesView.vue'

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: { hideHeader: true }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta: { requiresAuth: true }
  },
  {
    path: '/servicios',
    name: 'servicios',
    component: ServicesView,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to) => {
  const auth = useAuth()

  if (!auth.initialized.value) {
    await auth.checkSession()
  }

  if (to.meta.requiresAuth && !auth.authenticated.value) {
    return {
      name: 'login',
      query: { redirect: to.fullPath }
    }
  }

  if (to.name === 'login' && auth.authenticated.value) {
    return { name: 'dashboard' }
  }
})

export default router
