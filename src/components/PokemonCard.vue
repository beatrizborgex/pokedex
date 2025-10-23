<template>
  <div class="card">
    <img :src="pokemon.image" :alt="pokemon.name" />
    <h3>{{ pokemon.name }}</h3>
  </div>
</template>

<script setup>
defineProps(['pokemon'])
</script>

<style>
.card {
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 120px;
  padding: 1rem;
  background: white;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}
.card:hover {
  background-color: #b41414;
  color: white;
  transform: scale(1.1)
}
.card img {
  width: 70px;
  height: 70px;
}
.card h3 {
  margin-top: 0.5rem;
  font-size: 1rem;
}
</style>


svg de fallback
