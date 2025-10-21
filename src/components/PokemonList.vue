<template>
  <div class="pokemon-list">
    <PokemonCard
      v-for="pokemon in filteredPokemons"
      :key="pokemon.name"
      :pokemon="pokemon"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import PokemonCard from './PokemonCard.vue'
import { getPokemons } from '../services/pokeapi.js'

const pokemons = ref([])
const props = defineProps(['searchTerm'])

onMounted(async () => {
  pokemons.value = await getPokemons()
})

const filteredPokemons = computed(() =>
  pokemons.value.filter(p =>
    p.name.toLowerCase().includes(props.searchTerm.toLowerCase())
  )
)
</script>

<style>
.pokemon-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
</style>
