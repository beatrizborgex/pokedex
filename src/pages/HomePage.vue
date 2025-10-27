<template>
  <div class="flex flex-col items-center gap-6 py-6">
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
