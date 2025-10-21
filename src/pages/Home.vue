// eslint-disable-next-line vue/multi-word-component-names
<template>
  <div class="home">
    <SearchBar v-model="searchTerm" />
    <PokemonList :searchTerm="searchTerm" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SearchBar from '../components/SearchBar.vue'
import PokemonList from '../components/PokemonList.vue'

const searchTerm = ref('')
</script>

<style>
.home {
  padding: 2rem;
}
</style>
