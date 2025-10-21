<template>
  <div id="app">
    <header class="header">
      <h1>Pokédex</h1>
    </header>

    <main>
      <HomePage />
    </main>
  </div>
</template>

<script setup>
import HomePage from './pages/HomePage.vue'
</script>

<style>
*{
  padding:0;
  border: 0;

}
#app {
  text-align: center;
  font-family: 'Arial', sans-serif;
  background-color: #f8f8f8;
  min-height: 100vh;
}

.header {
  background-color: #CC0000;
  color: white;
  padding: 1rem;
}
</style>
