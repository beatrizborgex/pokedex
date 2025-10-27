<template>
  <div>
    <div class="flex flex-wrap justify-center gap-6">
      <PokemonCard
        v-for="pokemon in filteredPokemons"
        :key="pokemon.name"
        :pokemon="pokemon"
        @select="showDetails"
      />
    </div>

    <PokemonModal
      v-if="selectedPokemon"
      :pokemonName="selectedPokemon"
      @close="selectedPokemon = null"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import PokemonCard from './PokemonCard.vue'
import PokemonModal from './PokemonModal.vue'
import { getPokemons } from '../services/pokeapi.js'

const pokemons = ref([])
const props = defineProps(['searchTerm'])
const selectedPokemon = ref(null)

onMounted(async () => {
  pokemons.value = await getPokemons()
})

const filteredPokemons = computed(() =>
  pokemons.value.filter(p =>
    p.name.toLowerCase().includes(props.searchTerm.toLowerCase())
  )
)

function showDetails(name) {
  selectedPokemon.value = name
}
</script>
