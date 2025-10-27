<template>
  <div id="app" class="min-h-screen bg-gray-100 text-center font-sans">
    <header class="bg-red-700 text-white p-4 shadow-md">
      <h1 class="text-3xl font-bold tracking-wide">Pokédex</h1>
    </header>

    <main class="p-6">
      <HomePage />
    </main>
  </div>
</template>

<script setup>
import HomePage from './pages/HomePage.vue'
</script>
