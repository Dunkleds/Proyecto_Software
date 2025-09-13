import { createRouter, createWebHistory } from 'vue-router'

// Usa rutas relativas directas
import Home from '../paginas/home.vue'
import Inventario from '../paginas/inventario.vue'
import Reportes from '../paginas/Reportes.vue'
import Login from '../paginas/login.vue'
import Register from '../paginas/register.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/inventario', name: 'inventario', component: Inventario },
    { path: '/reportes', name: 'reportes', component: Reportes },
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register },
  ],
})

export default router
