<template>
  <div class="home">
    <!-- NAVBAR -->
    <header class="navbar">
      <button @click="toggleMenu" class="menu-btn">☰</button>
      <h1 class="logo">iEssence</h1>
      <div class="user-actions">
        <button class="login-btn">Login</button>
        <button class="register-btn">Registrarse</button>
        <span class="user-icon">👤</span>
      </div>
    </header>

    <!-- SIDEBAR -->
    <aside v-if="menuOpen" class="sidebar">
      <ul>
        <li><button>Catálogo</button></li>
        <li><button>Carro 🛒</button></li>
      </ul>
    </aside>

    <!-- CATÁLOGO DE PRODUCTOS -->
    <main class="catalogo">
      <div v-for="(producto, index) in productos" :key="index" class="producto-card">
        <img :src="producto.imagen" :alt="producto.nombre" />
        <h3>{{ producto.nombre }}</h3>
        <p>{{ producto.marca }}</p>
        <p class="precio">$ {{ producto.precio }}</p>
        <button class="btn-agregar">Agregar al carrito</button>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const productos = ref([
  { nombre: "Audífonos Pro", marca: "Marca X", precio: 129990, imagen: "audifonos1.png" },
  { nombre: "Audífonos Air", marca: "Marca Y", precio: 159990, imagen: "audifonos2.png" },
  { nombre: "Headset Gamer", marca: "Marca Z", precio: 99990, imagen: "headset.png" },
  { nombre: "Cargador Rápido", marca: "Marca A", precio: 29990, imagen: "cargador.png" },
  { nombre: "Cable USB-C", marca: "Marca B", precio: 19990, imagen: "cable.png" },
  { nombre: "PowerBank", marca: "Marca C", precio: 49990, imagen: "powerbank.png" }
]);
</script>

<style scoped>
/* Estilos generales */
.home {
  font-family: Arial, sans-serif;
  color: #fff;
  background-color: #1f1f2e;
  min-height: 100vh;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #243447;
  padding: 1rem;
}

.menu-btn {
  font-size: 1.5rem;
  background: none;
  color: white;
  border: none;
  cursor: pointer;
}

.logo {
  font-size: 1.5rem;
}

.user-actions button {
  margin: 0 0.5rem;
  background: none;
  border: 1px solid white;
  color: white;
  padding: 0.3rem 0.7rem;
  cursor: pointer;
  border-radius: 5px;
}

.user-icon {
  margin-left: 10px;
}

/* Sidebar */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
  background-color: #2e3a4f;
  padding: 1rem;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin: 1rem 0;
}

/* Catálogo */
.catalogo {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
  padding: 2rem;
}

.producto-card {
  background: #2c2c3e;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
}

.producto-card img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.precio {
  font-weight: bold;
  margin: 0.5rem 0;
}

.btn-agregar {
  background-color: #4cafef;
  border: none;
  padding: 0.5rem 1rem;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
</style>
